import httpStatus from 'http-status';
import { AppError } from '../../shared/AppError.js';
import prisma from '../../config/prisma.js';
import { cloudinaryService } from '../../utils/cloudinary.js';

const uploadFile = async (userId: string, file: Express.Multer.File, folderName: string = 'job-tracker') => {
  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No file provided');
  }

  // Upload to Cloudinary
  const result = await cloudinaryService.uploadToCloudinary(file.path, folderName);

  // Save record in the database
  const uploadRecord = await prisma.upload.create({
    data: {
      userId,
      url: result.secure_url,
      publicId: result.public_id,
      originalFilename: file.originalname,
      format: result.format || 'unknown',
      resourceType: result.resource_type,
      size: result.bytes,
    }
  });

  return uploadRecord;
};

const deleteFile = async (userId: string, uploadId: string) => {
  // Find the file in DB to ensure it belongs to the user
  const uploadRecord = await prisma.upload.findUnique({
    where: { id: uploadId }
  });

  if (!uploadRecord) {
    throw new AppError(httpStatus.NOT_FOUND, 'File not found');
  }

  if (uploadRecord.userId !== userId) {
    throw new AppError(httpStatus.FORBIDDEN, 'You do not have permission to delete this file');
  }

  // Delete from Cloudinary
  await cloudinaryService.deleteFromCloudinary(uploadRecord.publicId, uploadRecord.resourceType || 'image');

  // Delete from Database
  await prisma.upload.delete({
    where: { id: uploadId }
  });

  return { message: 'File deleted successfully' };
};

export const uploadService = {
  uploadFile,
  deleteFile
};
