import type { TCreateInterview, TUpdateInterview } from './interview.validation.js';
declare const createInterview: (userId: string, payload: TCreateInterview) => Promise<{
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
}>;
declare const getAllInterviews: (userId: string, query: any) => Promise<{
    meta: {
        page: number;
        limit: number;
        total: number;
    };
    data: ({
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
}>;
declare const getSingleInterview: (userId: string, interviewId: string) => Promise<{
    jobApplication: {
        appliedAt: Date | null;
        companyName: string;
        jobTitle: string;
        status: import("@prisma/client").$Enums.JobStatus;
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
}>;
declare const updateInterview: (userId: string, interviewId: string, payload: TUpdateInterview) => Promise<{
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
}>;
declare const deleteInterview: (userId: string, interviewId: string) => Promise<{
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
}>;
export declare const interviewService: {
    createInterview: typeof createInterview;
    getAllInterviews: typeof getAllInterviews;
    getSingleInterview: typeof getSingleInterview;
    updateInterview: typeof updateInterview;
    deleteInterview: typeof deleteInterview;
};
export {};
//# sourceMappingURL=interview.service.d.ts.map