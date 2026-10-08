import { z } from 'zod';
const createFollowUp = z.object({
    applicationId: z.string({ message: 'Application ID is required' }),
    title: z.string({ message: 'Title is required' }).min(1),
    description: z.string().optional(),
    scheduledAt: z.string({ message: 'Scheduled date is required' }),
    status: z.enum(['PENDING', 'COMPLETED', 'CANCELED']).optional(),
});
const updateFollowUp = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional(),
    scheduledAt: z.string().optional(),
    completedAt: z.string().optional(),
    status: z.enum(['PENDING', 'COMPLETED', 'CANCELED']).optional(),
});
export const followUpValidation = {
    createFollowUp,
    updateFollowUp,
};
//# sourceMappingURL=follow-up.validation.js.map