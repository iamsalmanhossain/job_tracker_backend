import express, { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route.js';

import { uploadRoutes } from '../modules/upload/upload.route.js';
import { jobApplicationRoutes } from '../modules/job-application/job-application.route.js';

const router:Router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/upload',
    route: uploadRoutes,
  },
  {
    path: '/job-applications',
    route: jobApplicationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
