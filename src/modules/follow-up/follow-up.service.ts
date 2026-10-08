import prisma from '../../config/prisma.js';
import { AppError } from '../../shared/AppError.js';
import httpStatus from 'http-status';
import type { TCreateFollowUp, TUpdateFollowUp } from './follow-up.validation.js';

const createFollowUp = async (userId: string, payload: TCreateFollowUp) => {
  // Verify application exists and belongs to user
  const application = await prisma.jobApplication.findUnique({
    where: { id: payload.applicationId, userId }
  });

  if (!application) {
    throw new AppError(httpStatus.NOT_FOUND, 'Job application not found');
  }

  const result = await prisma.followUp.create({
    data: {
      userId,
      applicationId: payload.applicationId,
      title: payload.title,
      description: payload.description ?? null,
      ...(payload.status && { status: payload.status as any }),
      scheduledAt: new Date(payload.scheduledAt),
    },
  });

  return result;
};

const getAllFollowUps = async (userId: string, query: any) => {
  const { applicationId, status } = query;

  const whereConditions: any = { userId };
  if (applicationId) whereConditions.applicationId = applicationId;
  if (status) whereConditions.status = status;

  const result = await prisma.followUp.findMany({
    where: whereConditions,
    orderBy: { scheduledAt: 'asc' },
    include: {
      jobApplication: {
        select: {
          companyName: true,
          jobTitle: true,
        }
      }
    }
  });

  return result;
};

const updateFollowUp = async (userId: string, followUpId: string, payload: TUpdateFollowUp) => {
  const exists = await prisma.followUp.findUnique({
    where: { id: followUpId, userId }
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Follow-up not found');
  }

  const dataToUpdate: any = {};
  if (payload.title !== undefined) dataToUpdate.title = payload.title;
  if (payload.description !== undefined) dataToUpdate.description = payload.description;
  if (payload.status !== undefined) dataToUpdate.status = payload.status;
  if (payload.scheduledAt !== undefined) dataToUpdate.scheduledAt = new Date(payload.scheduledAt);
  if (payload.completedAt !== undefined) dataToUpdate.completedAt = new Date(payload.completedAt);
  
  if (payload.status === 'COMPLETED' && !payload.completedAt && !exists.completedAt) {
    dataToUpdate.completedAt = new Date();
  }

  const result = await prisma.followUp.update({
    where: { id: followUpId },
    data: dataToUpdate,
  });

  return result;
};

const deleteFollowUp = async (userId: string, followUpId: string) => {
  const exists = await prisma.followUp.findUnique({
    where: { id: followUpId, userId }
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Follow-up not found');
  }

  const result = await prisma.followUp.delete({
    where: { id: followUpId },
  });

  return result;
};

export const followUpService = {
  createFollowUp,
  getAllFollowUps,
  updateFollowUp,
  deleteFollowUp,
};
