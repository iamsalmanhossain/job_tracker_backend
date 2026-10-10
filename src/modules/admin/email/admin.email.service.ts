import prisma from '../../../config/prisma.js';
import { sendEmail } from '../../../shared/email.service.js';
import { AppError } from '../../../shared/AppError.js';
import httpStatus from 'http-status';

const sendBulkEmail = async (data: { subject: string; htmlMessage: string }) => {
  // Fetch all active users who have verified their emails
  const users = await prisma.user.findMany({
    where: { 
      status: 'ACTIVE',
      emailVerified: true 
    },
    select: { email: true, name: true },
  });

  if (users.length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No active verified users found to send emails to.');
  }

  // Send emails in parallel
  // In a real large scale app, this should be done using a message queue (e.g. RabbitMQ/BullMQ)
  const emailPromises = users.map(user => 
    sendEmail(user.email, data.subject, data.htmlMessage)
  );

  await Promise.allSettled(emailPromises);

  return {
    totalSent: users.length,
  };
};

export const adminEmailService = {
  sendBulkEmail,
};
