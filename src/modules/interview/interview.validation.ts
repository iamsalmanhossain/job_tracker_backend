import { z } from 'zod';

const createInterview = z.object({
  applicationId: z.string({ message: 'Application ID is required' }),
  type: z.enum(['PHONE', 'VIDEO', 'TECHNICAL', 'HR', 'ONSITE', 'FINAL', 'OTHER']),
  status: z.enum(['SCHEDULED', 'COMPLETED', 'PASSED', 'FAILED', 'CANCELLED', 'RESCHEDULED']),
  scheduledAt: z.string({ message: 'Scheduled date is required' }),
  meetingLink: z.string().optional(),
  interviewerName: z.string().optional(),
  interviewerEmail: z.string().optional(),
  notes: z.string().optional(),
});

const updateInterview = z.object({
  type: z.enum(['PHONE', 'VIDEO', 'TECHNICAL', 'HR', 'ONSITE', 'FINAL', 'OTHER']).optional(),
  status: z.enum(['SCHEDULED', 'COMPLETED', 'PASSED', 'FAILED', 'CANCELLED', 'RESCHEDULED']).optional(),
  scheduledAt: z.string().optional(),
  meetingLink: z.string().optional(),
  interviewerName: z.string().optional(),
  interviewerEmail: z.string().optional(),
  notes: z.string().optional(),
});

export const interviewValidation = {
  createInterview,
  updateInterview,
};

export type TCreateInterview = z.infer<typeof createInterview>;
export type TUpdateInterview = z.infer<typeof updateInterview>;
