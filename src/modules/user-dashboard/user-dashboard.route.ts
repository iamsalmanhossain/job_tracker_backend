import express, { Router } from 'express';
import { dashboardController } from './user-dashboard.controller.js';
import { auth } from '../../middleware/auth.js';

const router: Router = express.Router();

router.get(
  '/',
  auth(),
  dashboardController.getUserDashboardData
);

export const userDashboardRoutes = router;
