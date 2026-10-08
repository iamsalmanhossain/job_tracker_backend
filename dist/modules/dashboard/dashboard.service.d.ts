declare const getUserDashboardData: (userId: string) => Promise<{
    stats: {
        totalApplications: number;
        applied: number;
        screening: number;
        interview: number;
        offer: number;
        rejected: number;
        activePipeline: number;
        interviewRate: string;
    };
    upcomingInterviews: ({
        jobApplication: {
            companyName: string;
            jobTitle: string;
        };
    } & {
        id: string;
        userId: string;
        applicationId: string;
        type: import("@prisma/client").$Enums.InterviewType;
        status: import("@prisma/client").$Enums.InterviewStatus;
        scheduledAt: Date;
        meetingLink: string | null;
        interviewerName: string | null;
        interviewerEmail: string | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[];
    pendingFollowUps: ({
        jobApplication: {
            companyName: string;
            jobTitle: string;
        };
    } & {
        id: string;
        userId: string;
        applicationId: string;
        title: string;
        description: string | null;
        scheduledAt: Date;
        completedAt: Date | null;
        status: import("@prisma/client").$Enums.FollowUpStatus;
        createdAt: Date;
        updatedAt: Date;
    })[];
    recentApplications: {
        appliedAt: Date | null;
        companyName: string;
        createdAt: Date;
        id: string;
        jobTitle: string;
        status: import("@prisma/client").$Enums.JobStatus;
    }[];
}>;
export declare const dashboardService: {
    getUserDashboardData: typeof getUserDashboardData;
};
export {};
//# sourceMappingURL=dashboard.service.d.ts.map