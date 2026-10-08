import express, { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route.js';

import { uploadRoutes } from '../modules/upload/upload.route.js';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
