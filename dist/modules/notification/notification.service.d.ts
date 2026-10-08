import type { TUpdateNotification } from './notification.validation.js';
declare const getAllNotifications: (userId: string, query: any) => Promise<{
    notifications: {
        id: string;
        userId: string;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
        readAt: Date | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
    }[];
    unreadCount: number;
}>;
declare const updateNotification: (userId: string, notificationId: string, payload: TUpdateNotification) => Promise<{
    id: string;
    userId: string;
    type: import("@prisma/client").$Enums.NotificationType;
    title: string;
    message: string;
    isRead: boolean;
    readAt: Date | null;
    metadata: import("@prisma/client/runtime/client").JsonValue | null;
    createdAt: Date;
}>;
declare const markAllAsRead: (userId: string) => Promise<import("@prisma/client").Prisma.BatchPayload>;
declare const deleteNotification: (userId: string, notificationId: string) => Promise<{
    id: string;
    userId: string;
    type: import("@prisma/client").$Enums.NotificationType;
    title: string;
    message: string;
    isRead: boolean;
    readAt: Date | null;
    metadata: import("@prisma/client/runtime/client").JsonValue | null;
    createdAt: Date;
}>;
export declare const notificationService: {
    getAllNotifications: typeof getAllNotifications;
    updateNotification: typeof updateNotification;
    markAllAsRead: typeof markAllAsRead;
    deleteNotification: typeof deleteNotification;
};
export {};
//# sourceMappingURL=notification.service.d.ts.map