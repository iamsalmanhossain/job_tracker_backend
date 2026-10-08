import { z } from 'zod';

const createResume = z.object({
  title: z.string({ message: 'Title is required' }).min(1),
  fileUrl: z.string({ message: 'File URL is required' }).url(),
  publicId: z.string().optional(),
  isDefault: z.boolean().optional(),
});

const updateResume = z.object({
  title: z.string().min(1).optional(),
  fileUrl: z.string().url().optional(),
  publicId: z.string().optional(),
  isDefault: z.boolean().optional(),
});

export const resumeValidation = {
  createResume,
  updateResume,
};

export type TCreateResume = z.infer<typeof createResume>;
export type TUpdateResume = z.infer<typeof updateResume>;
