import { z } from 'zod';

const sendBroadcastNotification = z.object({
  title: z.string({
    message: 'Title is required',
  }),
  message: z.string({
    message: 'Message is required',
  }),
  type: z.enum(['INTERVIEW', 'FOLLOW_UP', 'DEADLINE', 'APPLICATION', 'SYSTEM']).optional(),
});

export const notificationValidation = {
  sendBroadcastNotification,
};

export type TSendBroadcastNotification = z.infer<typeof notificationValidation.sendBroadcastNotification>;
