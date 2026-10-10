import { z } from 'zod';

const changeUserStatus = z.object({
  status: z.enum(['ACTIVE', 'SUSPENDED', 'BLOCKED']),
});

const changeUserRole = z.object({
  role: z.enum(['ADMIN', 'USER']),
});

export const userValidation = {
  changeUserStatus,
  changeUserRole,
};

export type TChangeUserStatus = z.infer<typeof userValidation.changeUserStatus>;
export type TChangeUserRole = z.infer<typeof userValidation.changeUserRole>;
