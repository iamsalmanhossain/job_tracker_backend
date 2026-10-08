import type { TCreateResume, TUpdateResume } from './resume.validation.js';
declare const createResume: (userId: string, payload: TCreateResume) => Promise<{
    id: string;
    userId: string;
    title: string;
    fileUrl: string;
    publicId: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllResumes: (userId: string, query: any) => Promise<{
    meta: {
        page: number;
        limit: number;
        total: number;
    };
    data: {
        id: string;
        userId: string;
        title: string;
        fileUrl: string;
        publicId: string | null;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[];
}>;
declare const getSingleResume: (userId: string, resumeId: string) => Promise<{
    jobApplications: {
        appliedAt: Date | null;
        companyName: string;
        id: string;
        jobTitle: string;
        status: import("@prisma/client").$Enums.JobStatus;
    }[];
} & {
    id: string;
    userId: string;
    title: string;
    fileUrl: string;
    publicId: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateResume: (userId: string, resumeId: string, payload: TUpdateResume) => Promise<{
    id: string;
    userId: string;
    title: string;
    fileUrl: string;
    publicId: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteResume: (userId: string, resumeId: string) => Promise<{
    id: string;
    userId: string;
    title: string;
    fileUrl: string;
    publicId: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const resumeService: {
    createResume: typeof createResume;
    getAllResumes: typeof getAllResumes;
    getSingleResume: typeof getSingleResume;
    updateResume: typeof updateResume;
    deleteResume: typeof deleteResume;
};
export {};
//# sourceMappingURL=resume.service.d.ts.map