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
//# sourceMappingURL=auth.validation.js.map