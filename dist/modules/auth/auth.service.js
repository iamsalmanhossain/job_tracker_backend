import prisma from '../../config/prisma.js';
import { hashPassword, comparePassword, generateToken } from './auth.utils.js';
import { env } from '../../config/env.js';
import httpStatus from 'http-status';
import { AppError } from '../../shared/AppError.js';
import { generateOtp, verifyOtp } from '../../shared/otp.service.js';
import { sendEmail, emailTemplates } from '../../shared/email.service.js';
const register = async (data) => {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
        throw new AppError(httpStatus.CONFLICT, 'Email already in use');
    }
    const hashedPassword = await hashPassword(data.password);
    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            name: data.name ?? null,
            profile: {
                create: {}
            }
        },
        select: {
            id: true,
            email: true,
            name: true,
        }
    });
    // Generate Redis OTP and send real email
    const otp = await generateOtp(user.email, 'verify_email');
    await sendEmail(user.email, 'Verify your email address', emailTemplates.verificationEmail(otp));
    return { user };
};
const verifyEmail = async (email, otp) => {
    const isValid = await verifyOtp(email, otp, 'verify_email');
    if (!isValid) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid or expired OTP');
    }
    const user = await prisma.user.update({
        where: { email },
        data: { isVerified: true },
        // select: { isVerified: true }
    });
    return { message: 'Email verified successfully', user };
};
const login = async (data) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user || !user.password) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }
    const isMatch = await comparePassword(data.password, user.password);
    if (!isMatch) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }
    if (!user.isVerified) {
        throw new AppError(httpStatus.FORBIDDEN, 'Please verify your email first');
    }
    const accessToken = generateToken({ userId: user.id }, env.JWT_SECRET, env.JWT_EXPIRES_IN);
    const refreshToken = generateToken({ userId: user.id }, env.JWT_REFRESH_SECRET, env.JWT_REFRESH_EXPIRES_IN);
    // Session Management
    const session = await prisma.session.create({
        data: {
            userId: user.id,
            refreshToken,
            deviceInfo: data.deviceInfo ?? null,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
        },
        select: { id: true }
    });
    return { user: { id: user.id, email: user.email, name: user.name }, accessToken, refreshToken };
};
const forgotPassword = async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        // Don't leak user existence
        return { message: 'If an account exists, a reset link has been sent' };
    }
    const otp = await generateOtp(email, 'reset_password');
    await sendEmail(email, 'Reset your password', emailTemplates.passwordResetEmail(otp));
    return { message: 'If an account exists, a reset link has been sent' };
};
const resetPassword = async (data) => {
    const isValid = await verifyOtp(data.email, data.otp, 'reset_password');
    if (!isValid) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid or expired OTP');
    }
    const hashedPassword = await hashPassword(data.newPassword);
    // Update password and clear sessions (logout from all devices)
    await prisma.$transaction([
        prisma.user.update({
            where: { email: data.email },
            data: { password: hashedPassword },
        }),
        prisma.session.deleteMany({
            where: { user: { email: data.email } }
        })
    ]);
    return { message: 'Password reset successfully' };
};
const logout = async (refreshToken) => {
    if (!refreshToken) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Refresh token is required');
    }
    await prisma.session.deleteMany({ where: { refreshToken } });
    return { message: 'Logged out successfully' };
};
const logoutAll = async (userId) => {
    await prisma.session.deleteMany({ where: { userId } });
    return { message: 'Logged out from all devices' };
};
const updateProfile = async (userId, data) => {
    const profile = await prisma.profile.update({
        where: { userId },
        data: {
            ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
            ...(data.bio !== undefined && { bio: data.bio }),
            ...(data.phoneNumber !== undefined && { phoneNumber: data.phoneNumber }),
        },
        select: {
            avatarUrl: true,
            bio: true,
            phoneNumber: true,
            updatedAt: true,
        }
    });
    if (data.name) {
        await prisma.user.update({
            where: { id: userId },
            data: { name: data.name },
        });
    }
    return profile;
};
export const authService = {
    register,
    verifyEmail,
    login,
    forgotPassword,
    resetPassword,
    logout,
    logoutAll,
    updateProfile,
};
//# sourceMappingURL=auth.service.js.map