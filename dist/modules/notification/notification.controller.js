import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { notificationService } from './notification.service.js';
const getAllNotifications = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await notificationService.getAllNotifications(userId, req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notifications retrieved successfully',
        data: result,
    });
});
const updateNotification = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    const result = await notificationService.updateNotification(userId, id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notification updated successfully',
        data: result,
    });
});
const markAllAsRead = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await notificationService.markAllAsRead(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All notifications marked as read',
        data: result,
    });
});
const deleteNotification = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    const result = await notificationService.deleteNotification(userId, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notification deleted successfully',
        data: result,
    });
});
export const notificationController = {
    getAllNotifications,
    updateNotification,
    markAllAsRead,
    deleteNotification,
};
//# sourceMappingURL=notification.controller.js.map