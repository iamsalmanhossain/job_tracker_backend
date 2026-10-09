import express, { Router } from 'express';
import { notificationController } from './notification.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { notificationValidation } from './notification.validation.js';

const router: Router = express.Router();

// optional route just for postman testing
router.post(
  '/',
  auth(),
  validateRequest(notificationValidation.createNotification),
  notificationController.createNotification
);

router.get(
  '/',
  auth(),
  notificationController.getAllNotifications
);

router.post(
  '/mark-all-read',
  auth(),
  notificationController.markAllAsRead
);

router.patch(
  '/:id',
  auth(),
  validateRequest(notificationValidation.updateNotification),
  notificationController.updateNotification
);

router.delete(
  '/:id',
  auth(),
  notificationController.deleteNotification
);

export const notificationRoutes = router;
