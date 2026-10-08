declare const uploadToCloudinary: (filePath: string, folder: string) => Promise<import("cloudinary").UploadApiResponse>;
declare const deleteFromCloudinary: (publicId: string, resourceType?: string) => Promise<any>;
export declare const cloudinaryService: {
    uploadToCloudinary: typeof uploadToCloudinary;
    deleteFromCloudinary: typeof deleteFromCloudinary;
};
export {};
//# sourceMappingURL=cloudinary.d.ts.map