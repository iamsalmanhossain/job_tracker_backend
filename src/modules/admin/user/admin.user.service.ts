import prisma from '../../../config/prisma.js';
import { AppError } from '../../../shared/AppError.js';
import httpStatus from 'http-status';

const getAllUsers = async (query: any) => {
  const { searchTerm, status, role, isDeleted } = query;
  
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const andConditions: any[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
      ],
    });
  }

  if (status) {
    andConditions.push({ status });
  }

  if (role) {
    andConditions.push({ role });
  }

  // By default, we might want to hide hard/soft deleted users unless explicitly requested
  if (isDeleted !== undefined) {
    andConditions.push({ isDeleted: isDeleted === 'true' });
  }

  const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

  const [result, total] = await Promise.all([
    prisma.user.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        isDeleted: true,
        createdAt: true,
        lastLoginAt: true,
        profileImage: true,
        profile: {
          select: {
            phone: true,
            location: true,
          }
        },
        _count: {
          select: {
            jobApplications: true, // Show how many jobs they applied to
          }
        }
      }
    }),
    prisma.user.count({ where: whereConditions }),
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

const changeUserStatus = async (userId: string, status: 'ACTIVE' | 'SUSPENDED') => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const updatedUser = await prisma.$transaction(async (tx) => {
    const updated = await tx.user.update({
      where: { id: userId },
      data: { status },
    });

    if (status === 'SUSPENDED') {
      // Clear all active sessions for this user so they get logged out immediately
      await tx.session.deleteMany({
        where: { userId },
      });
    }

    return updated;
  });

  return updatedUser;
};

const changeUserRole = async (userId: string, role: 'ADMIN' | 'USER') => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Prevent admin from demoting themselves by mistake? Maybe leave for frontend.
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  return updatedUser;
};

export const userService = {
  getAllUsers,
  changeUserStatus,
  changeUserRole,
};
