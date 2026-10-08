import express, { Router } from 'express';
import { resumeController } from './resume.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { resumeValidation } from './resume.validation.js';
const router = express.Router();
router.post('/', auth(), validateRequest(resumeValidation.createResume), resumeController.createResume);
router.get('/', auth(), resumeController.getAllResumes);
router.get('/:id', auth(), resumeController.getSingleResume);
router.patch('/:id', auth(), validateRequest(resumeValidation.updateResume), resumeController.updateResume);
router.delete('/:id', auth(), resumeController.deleteResume);
export const resumeRoutes = router;
//# sourceMappingURL=resume.route.js.map