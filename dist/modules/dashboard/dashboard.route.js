import express, { Router } from 'express';
import { dashboardController } from './dashboard.controller.js';
import { auth } from '../../middleware/auth.js';
const router = express.Router();
router.get('/', auth(), dashboardController.getUserDashboardData);
export const dashboardRoutes = router;
//# sourceMappingURL=dashboard.route.js.map