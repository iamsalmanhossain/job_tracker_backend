import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { adminEmailService } from './admin.email.service.js';

const sendBulkEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await adminEmailService.sendBulkEmail(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Bulk email processing started for ${result.totalSent} users`,
    data: result,
  });
});

export const adminEmailController = {
  sendBulkEmail,
};
