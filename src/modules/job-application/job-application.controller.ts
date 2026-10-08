import { type Request, type Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { jobApplicationService } from './job-application.service.js';

const createJobApplication = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await jobApplicationService.createJobApplication(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job application created successfully',
    data: result,
  });
});

const getAllJobApplications = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await jobApplicationService.getAllJobApplications(userId, req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job applications retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleJobApplication = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await jobApplicationService.getSingleJobApplication(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job application retrieved successfully',
    data: result,
  });
});

const updateJobApplication = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await jobApplicationService.updateJobApplication(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job application updated successfully',
    data: result,
  });
});

const deleteJobApplication = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await jobApplicationService.deleteJobApplication(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job application deleted successfully',
    data: result,
  });
});

const getJobApplicationStats = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await jobApplicationService.getJobApplicationStats(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job application statistics retrieved successfully',
    data: result,
  });
});

export const jobApplicationController = {
  createJobApplication,
  getAllJobApplications,
  getSingleJobApplication,
  updateJobApplication,
  deleteJobApplication,
  getJobApplicationStats,
};
