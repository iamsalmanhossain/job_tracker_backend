import prisma from '../../config/prisma.js';
import { AppError } from '../../shared/AppError.js';
import httpStatus from 'http-status';
import type { TCreateResume, TUpdateResume } from './resume.validation.js';
import { calculatePagination } from '../../shared/paginationHelper.js';

const createResume = async (userId: string, payload: TCreateResume) => {
  if (payload.isDefault) {
    await prisma.resume.updateMany({
      where: { userId },
      data: { isDefault: false },
    });
  }

  const result = await prisma.resume.create({
    data: {
      userId,
      ...(payload as any),
    },
  });
  return result;
};

const getAllResumes = async (userId: string, query: any) => {
  const { page, limit, skip, sortBy, sortOrder } = calculatePagination(query);

  const result = await prisma.resume.findMany({
    where: { userId },
    skip,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
  });

  const total = await prisma.resume.count({ where: { userId } });

  return {
    meta: { page, limit, total },
    data: result,
  };
};

const getSingleResume = async (userId: string, resumeId: string) => {
  const result = await prisma.resume.findUnique({
    where: { id: resumeId, userId },
    include: {
      jobApplications: {
        select: {
          id: true,
          companyName: true,
          jobTitle: true,
          status: true,
          appliedAt: true,
        },
      },
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Resume not found');
  }

  return result;
};

const updateResume = async (userId: string, resumeId: string, payload: TUpdateResume) => {
  const exists = await prisma.resume.findUnique({
    where: { id: resumeId, userId },
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Resume not found');
  }

  if (payload.isDefault) {
    await prisma.resume.updateMany({
      where: { userId, id: { not: resumeId } },
      data: { isDefault: false },
    });
  }

  const result = await prisma.resume.update({
    where: { id: resumeId },
    data: payload as any,
  });

  return result;
};

const deleteResume = async (userId: string, resumeId: string) => {
  const exists = await prisma.resume.findUnique({
    where: { id: resumeId, userId },
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Resume not found');
  }

  const result = await prisma.resume.delete({
    where: { id: resumeId },
  });

  return result;
};

export const resumeService = {
  createResume,
  getAllResumes,
  getSingleResume,
  updateResume,
  deleteResume,
};
