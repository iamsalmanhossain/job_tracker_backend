import prisma from '../../config/prisma.js';
import { AppError } from '../../shared/AppError.js';
import httpStatus from 'http-status';
import type { TUpdateNotification } from './notification.validation.js';

// Get all notifications for a user
const getAllNotifications = async (userId: string, query: any) => {
  const { isRead } = query;

  const whereConditions: any = { userId };
  
  if (isRead !== undefined) {
    whereConditions.isRead = isRead === 'true';
  }

  const result = await prisma.notification.findMany({
    where: whereConditions,
    orderBy: { createdAt: 'desc' },
  });

  const unreadCount = await prisma.notification.count({
    where: { userId, isRead: false },
  });

  return {
    notifications: result,
    unreadCount,
  };
};

// Mark a single notification as read/unread
const updateNotification = async (userId: string, notificationId: string, payload: TUpdateNotification) => {
  const exists = await prisma.notification.findUnique({
    where: { id: notificationId, userId }
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  const result = await prisma.notification.update({
    where: { id: notificationId },
    data: {
      isRead: payload.isRead,
      readAt: payload.isRead ? new Date() : null,
    },
  });

  return result;
};

// Mark all notifications as read for a user
const markAllAsRead = async (userId: string) => {
  const result = await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: {
      isRead: true,
      readAt: new Date(),
    },
  });

  return result;
};

// Delete a notification
const deleteNotification = async (userId: string, notificationId: string) => {
  const exists = await prisma.notification.findUnique({
    where: { id: notificationId, userId }
  });

  if (!exists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  const result = await prisma.notification.delete({
    where: { id: notificationId },
  });

  return result;
};

export const notificationService = {
  getAllNotifications,
  updateNotification,
  markAllAsRead,
  deleteNotification,
};
