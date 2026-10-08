import { z } from 'zod';
declare const updateNotification: z.ZodObject<{
    isRead: z.ZodBoolean;
}, z.core.$strip>;
export declare const notificationValidation: {
    updateNotification: z.ZodObject<{
        isRead: z.ZodBoolean;
    }, z.core.$strip>;
};
export type TUpdateNotification = z.infer<typeof updateNotification>;
export {};
//# sourceMappingURL=notification.validation.d.ts.map