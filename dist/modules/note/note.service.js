import prisma from '../../config/prisma.js';
import { AppError } from '../../shared/AppError.js';
import httpStatus from 'http-status';
import { calculatePagination } from '../../shared/paginationHelper.js';
const createNote = async (userId, payload) => {
    // Check if job application exists and belongs to user
    const jobApp = await prisma.jobApplication.findUnique({
        where: { id: payload.applicationId, userId },
    });
    if (!jobApp) {
        throw new AppError(httpStatus.NOT_FOUND, 'Job application not found');
    }
    const result = await prisma.note.create({
        data: {
            userId,
            ...payload,
        },
    });
    return result;
};
const getAllNotes = async (userId, query) => {
    const { applicationId } = query;
    const { page, limit, skip, sortBy, sortOrder } = calculatePagination(query);
    const whereConditions = { userId };
    if (applicationId)
        whereConditions.applicationId = applicationId;
    const result = await prisma.note.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = await prisma.note.count({ where: whereConditions });
    return {
        meta: { page, limit, total },
        data: result,
    };
};
const getSingleNote = async (userId, noteId) => {
    const result = await prisma.note.findUnique({
        where: { id: noteId, userId },
    });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Note not found');
    }
    return result;
};
const updateNote = async (userId, noteId, payload) => {
    const exists = await prisma.note.findUnique({
        where: { id: noteId, userId },
    });
    if (!exists) {
        throw new AppError(httpStatus.NOT_FOUND, 'Note not found');
    }
    const result = await prisma.note.update({
        where: { id: noteId },
        data: payload,
    });
    return result;
};
const deleteNote = async (userId, noteId) => {
    const exists = await prisma.note.findUnique({
        where: { id: noteId, userId },
    });
    if (!exists) {
        throw new AppError(httpStatus.NOT_FOUND, 'Note not found');
    }
    const result = await prisma.note.delete({
        where: { id: noteId },
    });
    return result;
};
export const noteService = {
    createNote,
    getAllNotes,
    getSingleNote,
    updateNote,
    deleteNote,
};
//# sourceMappingURL=note.service.js.map