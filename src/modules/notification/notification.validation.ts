import { z } from 'zod';

const updateNotification = z.object({
  isRead: z.boolean({ message: 'isRead status is required' }),
});

const createNotification = z.object({
  type: z.enum(['INTERVIEW', 'FOLLOW_UP', 'DEADLINE', 'APPLICATION', 'SYSTEM']),
  title: z.string({ message: 'Title is required' }),
  message: z.string({ message: 'Message is required' }),
});

export const notificationValidation = {
  createNotification,
  updateNotification,
};

export type TCreateNotification = z.infer<typeof createNotification>;
export type TUpdateNotification = z.infer<typeof updateNotification>;
