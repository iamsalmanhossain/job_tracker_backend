declare const uploadFile: (userId: string, file: Express.Multer.File, folderName?: string) => Promise<{
    id: string;
    userId: string;
    url: string;
    publicId: string;
    originalFilename: string | null;
    format: string | null;
    size: number | null;
    resourceType: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteFile: (userId: string, uploadId: string) => Promise<{
    message: string;
}>;
export declare const uploadService: {
    uploadFile: typeof uploadFile;
    deleteFile: typeof deleteFile;
};
export {};
//# sourceMappingURL=upload.service.d.ts.map