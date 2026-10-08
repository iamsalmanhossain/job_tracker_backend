import type { TCreateNote, TUpdateNote } from './note.validation.js';
declare const createNote: (userId: string, payload: TCreateNote) => Promise<{
    id: string;
    userId: string;
    applicationId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllNotes: (userId: string, query: any) => Promise<{
    meta: {
        page: number;
        limit: number;
        total: number;
    };
    data: {
        id: string;
        userId: string;
        applicationId: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
}>;
declare const getSingleNote: (userId: string, noteId: string) => Promise<{
    id: string;
    userId: string;
    applicationId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateNote: (userId: string, noteId: string, payload: TUpdateNote) => Promise<{
    id: string;
    userId: string;
    applicationId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteNote: (userId: string, noteId: string) => Promise<{
    id: string;
    userId: string;
    applicationId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const noteService: {
    createNote: typeof createNote;
    getAllNotes: typeof getAllNotes;
    getSingleNote: typeof getSingleNote;
    updateNote: typeof updateNote;
    deleteNote: typeof deleteNote;
};
export {};
//# sourceMappingURL=note.service.d.ts.map