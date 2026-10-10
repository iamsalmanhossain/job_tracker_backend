import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { adminConfigService } from './admin.config.service.js';

const getAllConfigs = catchAsync(async (req: Request, res: Response) => {
  const result = await adminConfigService.getAllConfigs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'System configs retrieved successfully',
    data: result,
  });
});

const updateConfig = catchAsync(async (req: Request, res: Response) => {
  const key = req.params.key as string;
  const { value } = req.body;
  
  const result = await adminConfigService.updateConfig(key, value);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Config ${key} updated successfully`,
    data: result,
  });
});

export const adminConfigController = {
  getAllConfigs,
  updateConfig,
};
