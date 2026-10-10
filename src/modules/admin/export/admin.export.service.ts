import prisma from '../../../config/prisma.js';

const exportUsersToCSV = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      emailVerified: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' }
  });

  // Create CSV Header
  let csv = 'ID,Name,Email,Role,Status,Verified,Joined Date\n';

  // Append data
  users.forEach((user) => {
    const safeName = user.name ? `"${user.name.replace(/"/g, '""')}"` : '""';
    const safeEmail = `"${user.email}"`;
    const date = user.createdAt.toISOString().split('T')[0];
    
    csv += `${user.id},${safeName},${safeEmail},${user.role},${user.status},${user.emailVerified},${date}\n`;
  });

  return csv;
};

export const adminExportService = {
  exportUsersToCSV,
};
