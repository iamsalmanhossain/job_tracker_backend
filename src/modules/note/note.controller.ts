import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { noteService } from './note.service.js';

const createNote = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await noteService.createNote(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Note created successfully',
    data: result,
  });
});

const getAllNotes = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await noteService.getAllNotes(userId, req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Notes retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleNote = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await noteService.getSingleNote(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note retrieved successfully',
    data: result,
  });
});

const updateNote = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await noteService.updateNote(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note updated successfully',
    data: result,
  });
});

const deleteNote = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const id = req.params.id as string;
  const result = await noteService.deleteNote(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note deleted successfully',
    data: result,
  });
});

export const noteController = {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
