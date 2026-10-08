import {  type NextFunction, type Request, type Response,  } from 'express';
import httpStatus from 'http-status';
import { AppError } from '../shared/AppError.js';
import { verifyToken } from '../modules/auth/auth.utils.js';
import { env } from '../config/env.js';

export const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader?.split(' ')[1] || authHeader; // Handle "Bearer TOKEN" or just "TOKEN"

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not logged in. Please provide a valid token.');
      }

      const decoded = verifyToken(token, env.JWT_SECRET) as any;

      // Attach user ID to request
      (req as any).user = { id: decoded.userId };

      next();
    } catch (error: any) {
      next(new AppError(httpStatus.UNAUTHORIZED, `Unauthorized: ${error.message}`));
    }
  };
};
