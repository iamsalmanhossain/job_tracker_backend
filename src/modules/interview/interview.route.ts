import express, { Router } from 'express';
import { interviewController } from './interview.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { interviewValidation } from './interview.validation.js';

const router: Router = express.Router();

router.post(
  '/',
  auth(),
  validateRequest(interviewValidation.createInterview),
  interviewController.createInterview
);

router.get(
  '/',
  auth(),
  interviewController.getAllInterviews
);

router.get(
  '/:id',
  auth(),
  interviewController.getSingleInterview
);

router.patch(
  '/:id',
  auth(),
  validateRequest(interviewValidation.updateInterview),
  interviewController.updateInterview
);

router.delete(
  '/:id',
  auth(),
  interviewController.deleteInterview
);

export const interviewRoutes = router;
