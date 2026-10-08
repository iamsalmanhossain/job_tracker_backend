import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { resumeService } from './resume.service.js';

const createResume = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await resumeService.createResume(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Resume created successfully',
    data: result,
  });
});

const getAllResumes = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await resumeService.getAllResumes(userId, req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resumes retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleResume = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await resumeService.getSingleResume(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resume retrieved successfully',
    data: result,
  });
});

const updateResume = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await resumeService.updateResume(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resume updated successfully',
    data: result,
  });
});

const deleteResume = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await resumeService.deleteResume(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Resume deleted successfully',
    data: result,
  });
});

export const resumeController = {
  createResume,
  getAllResumes,
  getSingleResume,
  updateResume,
  deleteResume,
};
