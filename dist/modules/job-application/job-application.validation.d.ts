import { z } from 'zod';
declare const createJobApplication: z.ZodObject<{
    resumeId: z.ZodOptional<z.ZodString>;
    companyName: z.ZodString;
    companyLogo: z.ZodOptional<z.ZodString>;
    jobTitle: z.ZodString;
    jobType: z.ZodOptional<z.ZodEnum<{
        CONTRACT: "CONTRACT";
        FREELANCE: "FREELANCE";
        FULL_TIME: "FULL_TIME";
        INTERNSHIP: "INTERNSHIP";
        PART_TIME: "PART_TIME";
        REMOTE: "REMOTE";
    }>>;
    location: z.ZodOptional<z.ZodString>;
    isRemote: z.ZodOptional<z.ZodBoolean>;
    salaryMin: z.ZodOptional<z.ZodNumber>;
    salaryMax: z.ZodOptional<z.ZodNumber>;
    salaryCurrency: z.ZodOptional<z.ZodString>;
    jobUrl: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<{
        BDJOBS: "BDJOBS";
        COMPANY_WEBSITE: "COMPANY_WEBSITE";
        FACEBOOK: "FACEBOOK";
        INDEED: "INDEED";
        LINKEDIN: "LINKEDIN";
        OTHER: "OTHER";
        REFERRAL: "REFERRAL";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        APPLIED: "APPLIED";
        INTERVIEW: "INTERVIEW";
        OFFER: "OFFER";
        REJECTED: "REJECTED";
        SCREENING: "SCREENING";
        WISHLIST: "WISHLIST";
        WITHDRAWN: "WITHDRAWN";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>>;
    isFavorite: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    requirements: z.ZodOptional<z.ZodString>;
    appliedAt: z.ZodOptional<z.ZodString>;
    deadline: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const updateJobApplication: z.ZodObject<{
    resumeId: z.ZodOptional<z.ZodString>;
    companyName: z.ZodOptional<z.ZodString>;
    companyLogo: z.ZodOptional<z.ZodString>;
    jobTitle: z.ZodOptional<z.ZodString>;
    jobType: z.ZodOptional<z.ZodEnum<{
        CONTRACT: "CONTRACT";
        FREELANCE: "FREELANCE";
        FULL_TIME: "FULL_TIME";
        INTERNSHIP: "INTERNSHIP";
        PART_TIME: "PART_TIME";
        REMOTE: "REMOTE";
    }>>;
    location: z.ZodOptional<z.ZodString>;
    isRemote: z.ZodOptional<z.ZodBoolean>;
    salaryMin: z.ZodOptional<z.ZodNumber>;
    salaryMax: z.ZodOptional<z.ZodNumber>;
    salaryCurrency: z.ZodOptional<z.ZodString>;
    jobUrl: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<{
        BDJOBS: "BDJOBS";
        COMPANY_WEBSITE: "COMPANY_WEBSITE";
        FACEBOOK: "FACEBOOK";
        INDEED: "INDEED";
        LINKEDIN: "LINKEDIN";
        OTHER: "OTHER";
        REFERRAL: "REFERRAL";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        APPLIED: "APPLIED";
        INTERVIEW: "INTERVIEW";
        OFFER: "OFFER";
        REJECTED: "REJECTED";
        SCREENING: "SCREENING";
        WISHLIST: "WISHLIST";
        WITHDRAWN: "WITHDRAWN";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>>;
    isFavorite: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    requirements: z.ZodOptional<z.ZodString>;
    appliedAt: z.ZodOptional<z.ZodString>;
    deadline: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const jobApplicationValidation: {
    createJobApplication: z.ZodObject<{
        resumeId: z.ZodOptional<z.ZodString>;
        companyName: z.ZodString;
        companyLogo: z.ZodOptional<z.ZodString>;
        jobTitle: z.ZodString;
        jobType: z.ZodOptional<z.ZodEnum<{
            CONTRACT: "CONTRACT";
            FREELANCE: "FREELANCE";
            FULL_TIME: "FULL_TIME";
            INTERNSHIP: "INTERNSHIP";
            PART_TIME: "PART_TIME";
            REMOTE: "REMOTE";
        }>>;
        location: z.ZodOptional<z.ZodString>;
        isRemote: z.ZodOptional<z.ZodBoolean>;
        salaryMin: z.ZodOptional<z.ZodNumber>;
        salaryMax: z.ZodOptional<z.ZodNumber>;
        salaryCurrency: z.ZodOptional<z.ZodString>;
        jobUrl: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<{
            BDJOBS: "BDJOBS";
            COMPANY_WEBSITE: "COMPANY_WEBSITE";
            FACEBOOK: "FACEBOOK";
            INDEED: "INDEED";
            LINKEDIN: "LINKEDIN";
            OTHER: "OTHER";
            REFERRAL: "REFERRAL";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            APPLIED: "APPLIED";
            INTERVIEW: "INTERVIEW";
            OFFER: "OFFER";
            REJECTED: "REJECTED";
            SCREENING: "SCREENING";
            WISHLIST: "WISHLIST";
            WITHDRAWN: "WITHDRAWN";
        }>>;
        priority: z.ZodOptional<z.ZodEnum<{
            HIGH: "HIGH";
            LOW: "LOW";
            MEDIUM: "MEDIUM";
        }>>;
        isFavorite: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        requirements: z.ZodOptional<z.ZodString>;
        appliedAt: z.ZodOptional<z.ZodString>;
        deadline: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    updateJobApplication: z.ZodObject<{
        resumeId: z.ZodOptional<z.ZodString>;
        companyName: z.ZodOptional<z.ZodString>;
        companyLogo: z.ZodOptional<z.ZodString>;
        jobTitle: z.ZodOptional<z.ZodString>;
        jobType: z.ZodOptional<z.ZodEnum<{
            CONTRACT: "CONTRACT";
            FREELANCE: "FREELANCE";
            FULL_TIME: "FULL_TIME";
            INTERNSHIP: "INTERNSHIP";
            PART_TIME: "PART_TIME";
            REMOTE: "REMOTE";
        }>>;
        location: z.ZodOptional<z.ZodString>;
        isRemote: z.ZodOptional<z.ZodBoolean>;
        salaryMin: z.ZodOptional<z.ZodNumber>;
        salaryMax: z.ZodOptional<z.ZodNumber>;
        salaryCurrency: z.ZodOptional<z.ZodString>;
        jobUrl: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<{
            BDJOBS: "BDJOBS";
            COMPANY_WEBSITE: "COMPANY_WEBSITE";
            FACEBOOK: "FACEBOOK";
            INDEED: "INDEED";
            LINKEDIN: "LINKEDIN";
            OTHER: "OTHER";
            REFERRAL: "REFERRAL";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            APPLIED: "APPLIED";
            INTERVIEW: "INTERVIEW";
            OFFER: "OFFER";
            REJECTED: "REJECTED";
            SCREENING: "SCREENING";
            WISHLIST: "WISHLIST";
            WITHDRAWN: "WITHDRAWN";
        }>>;
        priority: z.ZodOptional<z.ZodEnum<{
            HIGH: "HIGH";
            LOW: "LOW";
            MEDIUM: "MEDIUM";
        }>>;
        isFavorite: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        requirements: z.ZodOptional<z.ZodString>;
        appliedAt: z.ZodOptional<z.ZodString>;
        deadline: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export type TCreateJobApplication = z.infer<typeof createJobApplication>;
export type TUpdateJobApplication = z.infer<typeof updateJobApplication>;
export {};
//# sourceMappingURL=job-application.validation.d.ts.map