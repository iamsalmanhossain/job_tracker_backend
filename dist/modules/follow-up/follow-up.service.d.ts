import type { TCreateFollowUp, TUpdateFollowUp } from './follow-up.validation.js';
declare const createFollowUp: (userId: string, payload: TCreateFollowUp) => Promise<{
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
}>;
declare const getAllFollowUps: (userId: string, query: any) => Promise<({
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
})[]>;
declare const updateFollowUp: (userId: string, followUpId: string, payload: TUpdateFollowUp) => Promise<{
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
}>;
declare const deleteFollowUp: (userId: string, followUpId: string) => Promise<{
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
}>;
export declare const followUpService: {
    createFollowUp: typeof createFollowUp;
    getAllFollowUps: typeof getAllFollowUps;
    updateFollowUp: typeof updateFollowUp;
    deleteFollowUp: typeof deleteFollowUp;
};
export {};
//# sourceMappingURL=follow-up.service.d.ts.map