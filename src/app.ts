import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import hpp from 'hpp';
import httpStatus from 'http-status';
import { globalRateLimiter } from './middleware/rateLimiter.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

const app: Application = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: '*', credentials: true })); // Configure origin as per requirement
app.use(express.json({ limit: '10kb' })); // Limit JSON payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // Limit URL encoded payload size
app.use(hpp()); // Prevent HTTP Parameter Pollution
app.use(cookieParser());
app.use(compression());
app.use(globalRateLimiter);

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Biponiq API is running!' });
});

// Use Global Error Handler
app.use(globalErrorHandler);

// Not Found Route
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Route not found' });
});

export default app;
