import prisma from '../../../config/prisma.js';

const getGlobalDashboardStats = async () => {
  const [
    totalUsers,
    activeUsers,
    suspendedUsers,
    totalJobApplications,
    successfulOffers,
  ] = await Promise.all([
    // Total registered users
    prisma.user.count({ where: { role: 'USER' } }),
    // Total active users
    prisma.user.count({ where: { role: 'USER', status: 'ACTIVE' } }),
    // Total suspended users
    prisma.user.count({ where: { role: 'USER', status: 'SUSPENDED' } }),
    // Total job applications tracked across the platform
    prisma.jobApplication.count(),
    // Total job offers received
    prisma.jobApplication.count({ where: { status: 'OFFER' as any } }),
  ]);

  // Calculate platform success rate
  const offerSuccessRate = totalJobApplications > 0 
    ? ((successfulOffers / totalJobApplications) * 100).toFixed(2) 
    : 0;

  return {
    users: {
      total: totalUsers,
      active: activeUsers,
      suspended: suspendedUsers,
    },
    jobApplications: {
      totalTracked: totalJobApplications,
      totalOffers: successfulOffers,
      successRate: `${offerSuccessRate}%`,
    }
  };
};

export const adminDashboardService = {
  getGlobalDashboardStats,
};
