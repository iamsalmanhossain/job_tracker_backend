import express, { Router } from 'express';
import { uploadController } from './upload.controller.js';
import { auth } from '../../middleware/auth.js';
import { upload } from '../../middleware/upload.js';
const router = express.Router();
router.post('/', auth(), upload.single('file'), uploadController.uploadFile);
router.delete('/:id', auth(), uploadController.deleteFile);
export const uploadRoutes = router;
//# sourceMappingURL=upload.route.js.map