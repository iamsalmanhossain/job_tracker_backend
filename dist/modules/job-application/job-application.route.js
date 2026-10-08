import express, { Router } from 'express';
import { jobApplicationController } from './job-application.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { jobApplicationValidation } from './job-application.validation.js';
const router = express.Router();
router.post('/', auth(), validateRequest(jobApplicationValidation.createJobApplication), jobApplicationController.createJobApplication);
router.get('/', auth(), jobApplicationController.getAllJobApplications);
router.get('/stats', auth(), jobApplicationController.getJobApplicationStats);
router.get('/:id', auth(), jobApplicationController.getSingleJobApplication);
router.patch('/:id', auth(), validateRequest(jobApplicationValidation.updateJobApplication), jobApplicationController.updateJobApplication);
router.delete('/:id', auth(), jobApplicationController.deleteJobApplication);
export const jobApplicationRoutes = router;
//# sourceMappingURL=job-application.route.js.map