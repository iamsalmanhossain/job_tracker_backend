import { z } from 'zod';
declare const createInterview: z.ZodObject<{
    applicationId: z.ZodString;
    type: z.ZodEnum<{
        FINAL: "FINAL";
        HR: "HR";
        ONSITE: "ONSITE";
        OTHER: "OTHER";
        PHONE: "PHONE";
        TECHNICAL: "TECHNICAL";
        VIDEO: "VIDEO";
    }>;
    status: z.ZodEnum<{
        CANCELLED: "CANCELLED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PASSED: "PASSED";
        RESCHEDULED: "RESCHEDULED";
        SCHEDULED: "SCHEDULED";
    }>;
    scheduledAt: z.ZodString;
    meetingLink: z.ZodOptional<z.ZodString>;
    interviewerName: z.ZodOptional<z.ZodString>;
    interviewerEmail: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const updateInterview: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        FINAL: "FINAL";
        HR: "HR";
        ONSITE: "ONSITE";
        OTHER: "OTHER";
        PHONE: "PHONE";
        TECHNICAL: "TECHNICAL";
        VIDEO: "VIDEO";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        CANCELLED: "CANCELLED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PASSED: "PASSED";
        RESCHEDULED: "RESCHEDULED";
        SCHEDULED: "SCHEDULED";
    }>>;
    scheduledAt: z.ZodOptional<z.ZodString>;
    meetingLink: z.ZodOptional<z.ZodString>;
    interviewerName: z.ZodOptional<z.ZodString>;
    interviewerEmail: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const interviewValidation: {
    createInterview: z.ZodObject<{
        applicationId: z.ZodString;
        type: z.ZodEnum<{
            FINAL: "FINAL";
            HR: "HR";
            ONSITE: "ONSITE";
            OTHER: "OTHER";
            PHONE: "PHONE";
            TECHNICAL: "TECHNICAL";
            VIDEO: "VIDEO";
        }>;
        status: z.ZodEnum<{
            CANCELLED: "CANCELLED";
            COMPLETED: "COMPLETED";
            FAILED: "FAILED";
            PASSED: "PASSED";
            RESCHEDULED: "RESCHEDULED";
            SCHEDULED: "SCHEDULED";
        }>;
        scheduledAt: z.ZodString;
        meetingLink: z.ZodOptional<z.ZodString>;
        interviewerName: z.ZodOptional<z.ZodString>;
        interviewerEmail: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    updateInterview: z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<{
            FINAL: "FINAL";
            HR: "HR";
            ONSITE: "ONSITE";
            OTHER: "OTHER";
            PHONE: "PHONE";
            TECHNICAL: "TECHNICAL";
            VIDEO: "VIDEO";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            CANCELLED: "CANCELLED";
            COMPLETED: "COMPLETED";
            FAILED: "FAILED";
            PASSED: "PASSED";
            RESCHEDULED: "RESCHEDULED";
            SCHEDULED: "SCHEDULED";
        }>>;
        scheduledAt: z.ZodOptional<z.ZodString>;
        meetingLink: z.ZodOptional<z.ZodString>;
        interviewerName: z.ZodOptional<z.ZodString>;
        interviewerEmail: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export type TCreateInterview = z.infer<typeof createInterview>;
export type TUpdateInterview = z.infer<typeof updateInterview>;
export {};
//# sourceMappingURL=interview.validation.d.ts.map