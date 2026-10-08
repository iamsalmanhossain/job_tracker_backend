import express, { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route.js';
import { uploadRoutes } from '../modules/upload/upload.route.js';
import { jobApplicationRoutes } from '../modules/job-application/job-application.route.js';
import { resumeRoutes } from '../modules/resume/resume.route.js';
import { interviewRoutes } from '../modules/interview/interview.route.js';
import { noteRoutes } from '../modules/note/note.route.js';
import { followUpRoutes } from '../modules/follow-up/follow-up.route.js';
import { notificationRoutes } from '../modules/notification/notification.route.js';
import { dashboardRoutes } from '../modules/dashboard/dashboard.route.js';
const router = express.Router();
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
    {
        path: '/resumes',
        route: resumeRoutes,
    },
    {
        path: '/interviews',
        route: interviewRoutes,
    },
    {
        path: '/notes',
        route: noteRoutes,
    },
    {
        path: '/follow-ups',
        route: followUpRoutes,
    },
    {
        path: '/notifications',
        route: notificationRoutes,
    },
    {
        path: '/dashboard',
        route: dashboardRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
//# sourceMappingURL=index.js.map