import express, { Router } from 'express';
import { followUpController } from './follow-up.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { followUpValidation } from './follow-up.validation.js';

const router: Router = express.Router();

router.post(
  '/',
  auth(),
  validateRequest(followUpValidation.createFollowUp),
  followUpController.createFollowUp
);

router.get(
  '/',
  auth(),
  followUpController.getAllFollowUps
);

router.patch(
  '/:id',
  auth(),
  validateRequest(followUpValidation.updateFollowUp),
  followUpController.updateFollowUp
);

router.delete(
  '/:id',
  auth(),
  followUpController.deleteFollowUp
);

export const followUpRoutes = router;
