import prisma from '../../config/prisma.js';

const getUserDashboardData = async (userId: string) => {
  // 1. Application Stats
  const applications = await prisma.jobApplication.findMany({
    where: { userId },
    select: { status: true },
  });

  const totalApplications = applications.length;
  let applied = 0, screening = 0, interview = 0, offer = 0, rejected = 0;

  applications.forEach((app) => {
    if (app.status === 'APPLIED') applied++;
    else if (app.status === 'SCREENING') screening++;
    else if (app.status === 'INTERVIEW') interview++;
    else if (app.status === 'OFFER') offer++;
    else if (app.status === 'REJECTED') rejected++;
  });

  const activePipeline = applied + screening + interview;
  const interviewRate = totalApplications > 0 ? ((interview / totalApplications) * 100).toFixed(1) + '%' : '0.0%';

  // 2. Upcoming Interviews (Next 5)
  const upcomingInterviews = await prisma.interview.findMany({
    where: {
      jobApplication: { userId },
      scheduledAt: { gte: new Date() },
    },
    orderBy: { scheduledAt: 'asc' },
    take: 5,
    include: {
      jobApplication: {
        select: { companyName: true, jobTitle: true },
      },
    },
  });

  // 3. Pending Follow-ups (Next 5)
  const pendingFollowUps = await prisma.followUp.findMany({
    where: {
      userId,
      status: 'PENDING',
    },
    orderBy: { scheduledAt: 'asc' },
    take: 5,
    include: {
      jobApplication: {
        select: { companyName: true, jobTitle: true },
      },
    },
  });

  // 4. Recent Applications (Last 5)
  const recentApplications = await prisma.jobApplication.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: {
      id: true,
      companyName: true,
      jobTitle: true,
      status: true,
      appliedAt: true,
      createdAt: true,
    }
  });

  return {
    stats: {
      totalApplications,
      applied,
      screening,
      interview,
      offer,
      rejected,
      activePipeline,
      interviewRate,
    },
    upcomingInterviews,
    pendingFollowUps,
    recentApplications,
  };
};

export const dashboardService = {
  getUserDashboardData,
};
