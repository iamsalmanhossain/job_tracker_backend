import { z } from 'zod';

const sendBulkEmail = z.object({
  subject: z.string({
    message: 'Subject is required',
  }),
  htmlMessage: z.string({
    message: 'HTML message is required',
  }),
});

export const emailValidation = {
  sendBulkEmail,
};

export type TSendBulkEmail = z.infer<typeof emailValidation.sendBulkEmail>;
