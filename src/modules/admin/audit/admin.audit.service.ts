import prisma from '../../../config/prisma.js';

const getAuditLogs = async (query: any) => {
  const { action, entity, userId } = query;
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const skip = (page - 1) * limit;

  const andConditions: any[] = [];

  if (action) {
    andConditions.push({ action });
  }

  if (entity) {
    andConditions.push({ entity });
  }

  if (userId) {
    andConditions.push({ userId });
  }

  const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

  const [result, total] = await Promise.all([
    prisma.auditLog.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          }
        }
      }
    }),
    prisma.auditLog.count({ where: whereConditions }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: result,
  };
};

export const adminAuditService = {
  getAuditLogs,
};
