import { z } from 'zod';
const createNote = z.object({
    applicationId: z.string({ message: 'Application ID is required' }),
    content: z.string({ message: 'Content is required' }).min(1),
});
const updateNote = z.object({
    content: z.string({ message: 'Content is required' }).min(1),
});
export const noteValidation = {
    createNote,
    updateNote,
};
//# sourceMappingURL=note.validation.js.map