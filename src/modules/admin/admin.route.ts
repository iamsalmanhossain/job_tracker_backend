import express, { Router } from 'express';
import { userController } from './user/admin.user.controller.js';
import { adminDashboardController } from './dashboard/admin.dashboard.controller.js';
import { adminAuditController } from './audit/admin.audit.controller.js';
import { adminNotificationController } from './notification/admin.notification.controller.js';
import { adminEmailController } from './email/admin.email.controller.js';
import { adminSupportController } from './support/admin.support.controller.js';
import { adminExportController } from './export/admin.export.controller.js';
import { adminConfigController } from './config/admin.config.controller.js';

import { userValidation } from './user/admin.user.validation.js';
import { notificationValidation } from './notification/admin.notification.validation.js';
import { emailValidation } from './email/admin.email.validation.js';
import { supportValidation } from './support/admin.support.validation.js';
import { configValidation } from './config/admin.config.validation.js';

import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';


const router: Router = express.Router();

router.get(
  '/users',
  auth('ADMIN'), // Only ADMIN can view all regular users
  userController.getAllUsers
);

router.get(
  '/admins',
  auth('ADMIN'), // Only ADMIN can view all admins
  userController.getAllAdmins
);

router.patch(
  '/users/:id/status',
  auth('ADMIN'), // Only ADMIN can change status
  validateRequest(userValidation.changeUserStatus),
  userController.changeUserStatus
);

router.patch(
  '/users/:id/role',
  auth('ADMIN'), // Only ADMIN can change roles
  validateRequest(userValidation.changeUserRole),
  userController.changeUserRole
);

router.get(
  '/dashboard/stats',
  auth('ADMIN'), // Only ADMIN can view platform stats
  adminDashboardController.getGlobalDashboardStats
);

router.get(
  '/audit-logs',
  auth('ADMIN'), // Only ADMIN can view security logs
  adminAuditController.getAuditLogs
);

router.post(
  '/notifications/broadcast',
  auth('ADMIN'), // Only ADMIN can send broadcast notifications
  validateRequest(notificationValidation.sendBroadcastNotification),
  adminNotificationController.sendBroadcastNotification
);

router.post(
  '/emails/bulk',
  auth('ADMIN'), // Only ADMIN can send bulk emails
  validateRequest(emailValidation.sendBulkEmail),
  adminEmailController.sendBulkEmail
);

router.get(
  '/support-tickets',
  auth('ADMIN'), // Only ADMIN can view all tickets
  adminSupportController.getAllTickets
);

router.patch(
  '/support-tickets/:id/status',
  auth('ADMIN'), // Only ADMIN can change ticket status
  validateRequest(supportValidation.updateTicketStatus),
  adminSupportController.updateTicketStatus
);

router.get(
  '/export/users',
  auth('ADMIN'), // Only ADMIN can export data
  adminExportController.exportUsersToCSV
);

router.get(
  '/configs',
  auth('ADMIN'), // Only ADMIN can view configs
  adminConfigController.getAllConfigs
);

router.patch(
  '/configs/:key',
  auth('ADMIN'), // Only ADMIN can update configs
  validateRequest(configValidation.updateConfig),
  adminConfigController.updateConfig
);

export const adminRoutes = router;
