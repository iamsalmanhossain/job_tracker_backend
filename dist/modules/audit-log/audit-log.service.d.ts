type TAuditLogCreate = {
    userId?: string | undefined;
    action: any;
    entity: any;
    entityId?: string | undefined;
    description?: string | undefined;
    ipAddress?: string | undefined;
    userAgent?: string | undefined;
    metadata?: any;
};
declare const createAuditLog: (data: TAuditLogCreate) => Promise<void>;
declare const getAuditLogs: (query: any) => Promise<{
    id: string;
    userId: string | null;
    action: import("@prisma/client").$Enums.AuditAction;
    entity: import("@prisma/client").$Enums.AuditEntity;
    entityId: string | null;
    description: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    metadata: import("@prisma/client/runtime/client").JsonValue | null;
    createdAt: Date;
}[]>;
export declare const auditLogService: {
    createAuditLog: typeof createAuditLog;
    getAuditLogs: typeof getAuditLogs;
};
export {};
//# sourceMappingURL=audit-log.service.d.ts.map