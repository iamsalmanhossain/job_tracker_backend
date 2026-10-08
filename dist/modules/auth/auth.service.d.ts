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
        name: string | null;
        email: string;
        password: string | null;
        profileImage: string | null;
        role: import("@prisma/client").$Enums.Role;
        status: import("@prisma/client").$Enums.UserStatus;
        emailVerified: boolean;
        lastLoginAt: Date | null;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
declare const login: (data: TLogin & {
    ipAddress?: string;
    userAgent?: string;
}) => Promise<{
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
    bio: string | null;
    githubUrl: string | null;
    headline: string | null;
    linkedinUrl: string | null;
    location: string | null;
    phone: string | null;
    skills: string | null;
    updatedAt: Date;
    website: string | null;
}>;
declare const getProfile: (userId: string) => Promise<{
    createdAt: Date;
    email: string;
    emailVerified: boolean;
    id: string;
    name: string | null;
    profile: {
        id: string;
        userId: string;
        phone: string | null;
        location: string | null;
        bio: string | null;
        headline: string | null;
        website: string | null;
        linkedinUrl: string | null;
        githubUrl: string | null;
        skills: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;
    profileImage: string | null;
    role: import("@prisma/client").$Enums.Role;
    status: import("@prisma/client").$Enums.UserStatus;
}>;
declare const deleteProfile: (userId: string) => Promise<{
    message: string;
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
    getProfile: typeof getProfile;
    deleteProfile: typeof deleteProfile;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map