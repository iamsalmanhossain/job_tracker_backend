import { v2 as cloudinary } from 'cloudinary';
import { env } from '../config/env.js';
import fs from 'fs';
cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = async (filePath, folder) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            resource_type: 'auto',
        });
        // Remove the file from local storage after upload
        fs.unlinkSync(filePath);
        return result;
    }
    catch (error) {
        // Attempt to clean up the local file if upload fails
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        throw error;
    }
};
const deleteFromCloudinary = async (publicId, resourceType = 'image') => {
    try {
        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType
        });
        return result;
    }
    catch (error) {
        throw error;
    }
};
export const cloudinaryService = {
    uploadToCloudinary,
    deleteFromCloudinary
};
//# sourceMappingURL=cloudinary.js.map