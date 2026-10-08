import { z } from 'zod';
const updateNotification = z.object({
    isRead: z.boolean({ message: 'isRead status is required' }),
});
export const notificationValidation = {
    updateNotification,
};
//# sourceMappingURL=notification.validation.js.map