import type { TLogin, TRegister, TResetPassword, TUpdateProfile } from './auth.validation.js';
declare const register: (data: TRegister) => Promise<{
    user: {
        email: string;
        id: string;
        name: string | null;
    };
}>;
declare const verifyEmail: (email: string, otp: string) => Promise<{
    message: string;
    user: {
        id: string;
        email: string;
        password: string | null;
        googleId: string | null;
        name: string | null;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
declare const login: (data: TLogin) => Promise<{
    user: {
        id: string;
        email: string;
        name: string | null;
    };
    accessToken: string;
    refreshToken: string;
}>;
declare const forgotPassword: (email: string) => Promise<{
    message: string;
}>;
declare const resetPassword: (data: TResetPassword) => Promise<{
    message: string;
}>;
declare const logout: (refreshToken: string) => Promise<{
    message: string;
}>;
declare const logoutAll: (userId: string) => Promise<{
    message: string;
}>;
declare const updateProfile: (userId: string, data: TUpdateProfile) => Promise<{
    avatarUrl: string | null;
    bio: string | null;
    phoneNumber: string | null;
    updatedAt: Date;
}>;
export declare const authService: {
    register: typeof register;
    verifyEmail: typeof verifyEmail;
    login: typeof login;
    forgotPassword: typeof forgotPassword;
    resetPassword: typeof resetPassword;
    logout: typeof logout;
    logoutAll: typeof logoutAll;
    updateProfile: typeof updateProfile;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map