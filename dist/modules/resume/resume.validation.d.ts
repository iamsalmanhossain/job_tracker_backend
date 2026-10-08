import { z } from 'zod';
declare const createResume: z.ZodObject<{
    title: z.ZodString;
    fileUrl: z.ZodString;
    publicId: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const updateResume: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    fileUrl: z.ZodOptional<z.ZodString>;
    publicId: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const resumeValidation: {
    createResume: z.ZodObject<{
        title: z.ZodString;
        fileUrl: z.ZodString;
        publicId: z.ZodOptional<z.ZodString>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    updateResume: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        fileUrl: z.ZodOptional<z.ZodString>;
        publicId: z.ZodOptional<z.ZodString>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
};
export type TCreateResume = z.infer<typeof createResume>;
export type TUpdateResume = z.infer<typeof updateResume>;
export {};
//# sourceMappingURL=resume.validation.d.ts.map