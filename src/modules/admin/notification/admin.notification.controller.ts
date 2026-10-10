import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { adminNotificationService } from './admin.notification.service.js';

const sendBroadcastNotification = catchAsync(async (req: Request, res: Response) => {
  const result = await adminNotificationService.sendBroadcastNotification(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: `Broadcast notification sent to ${result.totalSent} users successfully`,
    data: result,
  });
});

export const adminNotificationController = {
  sendBroadcastNotification,
};
