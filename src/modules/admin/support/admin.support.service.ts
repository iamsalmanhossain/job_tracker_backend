import prisma from '../../../config/prisma.js';
import { AppError } from '../../../shared/AppError.js';
import httpStatus from 'http-status';
import type { SupportTicketStatus } from '@prisma/client';

const getAllTickets = async (query: any) => {
  const { status, userId } = query;
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const skip = (page - 1) * limit;

  const whereConditions: any = {};
  if (status) whereConditions.status = status;
  if (userId) whereConditions.userId = userId;

  const [result, total] = await Promise.all([
    prisma.supportTicket.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    }),
    prisma.supportTicket.count({ where: whereConditions }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: result,
  };
};

const updateTicketStatus = async (id: string, status: SupportTicketStatus) => {
  const ticket = await prisma.supportTicket.findUnique({ where: { id } });
  if (!ticket) {
    throw new AppError(httpStatus.NOT_FOUND, 'Support ticket not found');
  }

  const updatedTicket = await prisma.supportTicket.update({
    where: { id },
    data: { status },
  });

  return updatedTicket;
};

export const adminSupportService = {
  getAllTickets,
  updateTicketStatus,
};
