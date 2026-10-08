import prisma from '../../config/prisma.js';
const createAuditLog = async (data) => {
    try {
        await prisma.auditLog.create({
            data: {
                userId: data.userId ?? null,
                action: data.action,
                entity: data.entity,
                entityId: data.entityId ?? null,
                description: data.description ?? null,
                ipAddress: data.ipAddress ?? null,
                userAgent: data.userAgent ?? null,
                metadata: data.metadata ?? null,
            }
        });
    }
    catch (error) {
        // We don't want audit logging failures to crash the main application flow
        console.error('Failed to create audit log:', error);
    }
};
const getAuditLogs = async (query) => {
    const { userId, action, entity } = query;
    const whereConditions = {};
    if (userId)
        whereConditions.userId = userId;
    if (action)
        whereConditions.action = action;
    if (entity)
        whereConditions.entity = entity;
    const logs = await prisma.auditLog.findMany({
        where: whereConditions,
        orderBy: { createdAt: 'desc' },
        take: 50, // Limit to 50 for performance
    });
    return logs;
};
export const auditLogService = {
    createAuditLog,
    getAuditLogs,
};
//# sourceMappingURL=audit-log.service.js.map