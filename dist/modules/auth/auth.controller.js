import httpStatus from 'http-status';
import { authService } from './auth.service.js';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
const register = catchAsync(async (req, res) => {
    const result = await authService.register(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User registered successfully. Please verify your email.',
        data: result,
    });
});
const verifyEmail = catchAsync(async (req, res) => {
    const result = await authService.verifyEmail(req.body.email, req.body.otp);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: result.user,
    });
});
const login = catchAsync(async (req, res) => {
    const ipAddress = req.ip || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const result = await authService.login({
        ...req.body,
        ipAddress,
        userAgent
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        data: result,
    });
});
const googleLogin = catchAsync(async (req, res) => {
    const ipAddress = req.ip || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const result = await authService.googleLogin({
        ...req.body,
        ipAddress,
        userAgent
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in with Google successfully',
        data: result,
    });
});
const forgotPassword = catchAsync(async (req, res) => {
    const result = await authService.forgotPassword(req.body.email);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: null,
    });
});
const resetPassword = catchAsync(async (req, res) => {
    const result = await authService.resetPassword(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: null,
    });
});
const logout = catchAsync(async (req, res) => {
    const result = await authService.logout(req.body.refreshToken);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: null,
    });
});
const logoutAll = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await authService.logoutAll(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: null,
    });
});
const updateProfile = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await authService.updateProfile(userId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile updated successfully',
        data: result,
    });
});
const getProfile = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await authService.getProfile(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile retrieved successfully',
        data: result,
    });
});
const deleteProfile = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await authService.deleteProfile(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.message,
        data: null,
    });
});
export const authController = {
    register,
    verifyEmail,
    login,
    googleLogin,
    forgotPassword,
    resetPassword,
    logout,
    logoutAll,
    updateProfile,
    getProfile,
    deleteProfile,
};
//# sourceMappingURL=auth.controller.js.map