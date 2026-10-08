import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { interviewService } from './interview.service.js';

const createInterview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await interviewService.createInterview(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Interview created successfully',
    data: result,
  });
});

const getAllInterviews = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await interviewService.getAllInterviews(userId, req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Interviews retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleInterview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await interviewService.getSingleInterview(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Interview retrieved successfully',
    data: result,
  });
});

const updateInterview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await interviewService.updateInterview(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Interview updated successfully',
    data: result,
  });
});

const deleteInterview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await interviewService.deleteInterview(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Interview deleted successfully',
    data: result,
  });
});

export const interviewController = {
  createInterview,
  getAllInterviews,
  getSingleInterview,
  updateInterview,
  deleteInterview,
};
