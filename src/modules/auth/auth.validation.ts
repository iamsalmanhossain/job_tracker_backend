import { z } from 'zod';

export const authValidation = {
  register: z.object({
    email: z.string(),
    password: z.string().min(6),
    name: z.string().optional(),
  }),
  login: z.object({
    email: z.string(),
    password: z.string(),
    deviceInfo: z.string().optional(),
  }),
  verifyEmail: z.object({
    otp: z.string(),
    email: z.string(),
  }),
  forgotPassword: z.object({
    email: z.string(),
  }),
  resetPassword: z.object({
    otp: z.string(),
    email: z.string(),
    newPassword: z.string().min(6),
  }),
  updateProfile: z.object({
    name: z.string().optional(),
    avatarUrl: z.string().optional(),
    bio: z.string().optional(),
    phoneNumber: z.string().optional(),
  }),
};

export type TRegister = z.infer<typeof authValidation.register>;
export type TLogin = z.infer<typeof authValidation.login>;
export type TVerifyEmail = z.infer<typeof authValidation.verifyEmail>;
export type TForgotPassword = z.infer<typeof authValidation.forgotPassword>;
export type TResetPassword = z.infer<typeof authValidation.resetPassword>;
export type TUpdateProfile = z.infer<typeof authValidation.updateProfile>;
