import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync.js';
import { sendResponse } from '../../../shared/sendResponse.js';
import { userService } from './admin.user.service.js';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  // Force role to USER
  const result = await userService.getAllUsers({ ...req.query, role: 'USER' });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  // Force role to ADMIN
  const result = await userService.getAllUsers({ ...req.query, role: 'ADMIN' });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admins retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const changeUserStatus = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { status } = req.body;
  const result = await userService.changeUserStatus(id, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User status changed to ${status}`,
    data: result,
  });
});

const changeUserRole = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { role } = req.body;
  const result = await userService.changeUserRole(id, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User role changed to ${role}`,
    data: result,
  });
});

export const userController = {
  getAllUsers,
  getAllAdmins,
  changeUserStatus,
  changeUserRole,
};
