import prisma from '../../../config/prisma.js';

const sendBroadcastNotification = async (data: { title: string; message: string; type?: any }) => {
  // Get all active users
  const users = await prisma.user.findMany({
    where: { status: 'ACTIVE' },
    select: { id: true },
  });

  const notifications = users.map(user => ({
    userId: user.id,
    title: data.title,
    message: data.message,
    type: data.type || 'SYSTEM', // System-wide broadcast
  }));

  // Create notifications in bulk
  const result = await prisma.notification.createMany({
    data: notifications,
  });

  return {
    totalSent: result.count,
  };
};

export const adminNotificationService = {
  sendBroadcastNotification,
};
