import { z } from 'zod';
declare const createNote: z.ZodObject<{
    applicationId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
declare const updateNote: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
export declare const noteValidation: {
    createNote: z.ZodObject<{
        applicationId: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>;
    updateNote: z.ZodObject<{
        content: z.ZodString;
    }, z.core.$strip>;
};
export type TCreateNote = z.infer<typeof createNote>;
export type TUpdateNote = z.infer<typeof updateNote>;
export {};
//# sourceMappingURL=note.validation.d.ts.map