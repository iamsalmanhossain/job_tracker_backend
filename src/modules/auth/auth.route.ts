import express, { Router } from 'express';
import { authController } from './auth.controller.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { authValidation } from './auth.validation.js';
import { authRateLimiter } from '../../middleware/rateLimiter.js';

const router:Router = express.Router();

router.post(
  '/register',
  authRateLimiter,
  validateRequest(authValidation.register),
  authController.register
);

router.post(
  '/login',
  authRateLimiter,
  validateRequest(authValidation.login),
  authController.login
);

router.post(
  '/verify-email',
  validateRequest(authValidation.verifyEmail),
  authController.verifyEmail
);

router.post(
  '/forgot-password',
  authRateLimiter,
  validateRequest(authValidation.forgotPassword),
  authController.forgotPassword
);

router.post(
  '/reset-password',
  validateRequest(authValidation.resetPassword),
  authController.resetPassword
);

router.post(
  '/logout',
  authController.logout
);

router.post(
  '/logout-all',
  authController.logoutAll
);

router.patch(
  '/profile',
  validateRequest(authValidation.updateProfile),
  authController.updateProfile
);

export const authRoutes = router;
