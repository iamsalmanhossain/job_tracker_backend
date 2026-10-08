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
    }),
    googleLogin: z.object({
        idToken: z.string(),
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
        profileImage: z.string().optional(),
        phone: z.string().optional(),
        location: z.string().optional(),
        bio: z.string().optional(),
        headline: z.string().optional(),
        website: z.string().optional(),
        linkedinUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        skills: z.string().optional(),
    }),
};
//# sourceMappingURL=auth.validation.js.map