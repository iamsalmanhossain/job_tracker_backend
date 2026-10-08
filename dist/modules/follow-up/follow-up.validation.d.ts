import { z } from 'zod';
declare const createFollowUp: z.ZodObject<{
    applicationId: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        PENDING: "PENDING";
    }>>;
}, z.core.$strip>;
declare const updateFollowUp: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodOptional<z.ZodString>;
    completedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        PENDING: "PENDING";
    }>>;
}, z.core.$strip>;
export declare const followUpValidation: {
    createFollowUp: z.ZodObject<{
        applicationId: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        scheduledAt: z.ZodString;
        status: z.ZodOptional<z.ZodEnum<{
            CANCELED: "CANCELED";
            COMPLETED: "COMPLETED";
            PENDING: "PENDING";
        }>>;
    }, z.core.$strip>;
    updateFollowUp: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        scheduledAt: z.ZodOptional<z.ZodString>;
        completedAt: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            CANCELED: "CANCELED";
            COMPLETED: "COMPLETED";
            PENDING: "PENDING";
        }>>;
    }, z.core.$strip>;
};
export type TCreateFollowUp = z.infer<typeof createFollowUp>;
export type TUpdateFollowUp = z.infer<typeof updateFollowUp>;
export {};
//# sourceMappingURL=follow-up.validation.d.ts.map