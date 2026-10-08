import { z } from 'zod';
export declare const authValidation: {
    register: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    login: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
    googleLogin: z.ZodObject<{
        idToken: z.ZodString;
    }, z.core.$strip>;
    verifyEmail: z.ZodObject<{
        otp: z.ZodString;
        email: z.ZodString;
    }, z.core.$strip>;
    forgotPassword: z.ZodObject<{
        email: z.ZodString;
    }, z.core.$strip>;
    resetPassword: z.ZodObject<{
        otp: z.ZodString;
        email: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strip>;
    updateProfile: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        profileImage: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        headline: z.ZodOptional<z.ZodString>;
        website: z.ZodOptional<z.ZodString>;
        linkedinUrl: z.ZodOptional<z.ZodString>;
        githubUrl: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export type TRegister = z.infer<typeof authValidation.register>;
export type TLogin = z.infer<typeof authValidation.login>;
export type TVerifyEmail = z.infer<typeof authValidation.verifyEmail>;
export type TForgotPassword = z.infer<typeof authValidation.forgotPassword>;
export type TResetPassword = z.infer<typeof authValidation.resetPassword>;
export type TUpdateProfile = z.infer<typeof authValidation.updateProfile>;
export type TGoogleLogin = z.infer<typeof authValidation.googleLogin>;
//# sourceMappingURL=auth.validation.d.ts.map