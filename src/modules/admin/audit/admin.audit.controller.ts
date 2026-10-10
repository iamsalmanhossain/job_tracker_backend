import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { adminAuditService } from './admin.audit.service.js';

const getAuditLogs = catchAsync(async (req: Request, res: Response) => {
  const result = await adminAuditService.getAuditLogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Audit logs retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const adminAuditController = {
  getAuditLogs,
};
