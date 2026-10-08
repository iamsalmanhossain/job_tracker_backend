import {type Request, type Response,  } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { uploadService } from './upload.service.js';
import { AppError } from '../../shared/AppError.js';

const uploadFile = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const file = req.file;

  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Please upload a file');
  }

  // Determine folder based on file type
  const isPdf = file.mimetype === 'application/pdf';
  const folderName = isPdf ? 'job-tracker/resumes' : 'job-tracker/profiles';

  const result = await uploadService.uploadFile(userId, file, folderName);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'File uploaded successfully',
    data: result,
  });
});

const deleteFile = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;

  const result = await uploadService.deleteFile(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.message,
    data: null,
  });
});

export const uploadController = {
  uploadFile,
  deleteFile
};
