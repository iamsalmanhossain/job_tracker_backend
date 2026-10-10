import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { adminDashboardService } from './admin.dashboard.service.js';

const getGlobalDashboardStats = catchAsync(async (req: Request, res: Response) => {
  const result = await adminDashboardService.getGlobalDashboardStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Global dashboard stats retrieved successfully',
    data: result,
  });
});

export const adminDashboardController = {
  getGlobalDashboardStats,
};
