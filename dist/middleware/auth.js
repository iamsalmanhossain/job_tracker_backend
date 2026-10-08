import {} from 'express';
import httpStatus from 'http-status';
import { AppError } from '../shared/AppError.js';
import { verifyToken } from '../modules/auth/auth.utils.js';
import { env } from '../config/env.js';
export const auth = () => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader?.split(' ')[1] || authHeader; // Handle "Bearer TOKEN" or just "TOKEN"
            if (!token) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'You are not logged in. Please provide a valid token.');
            }
            const decoded = verifyToken(token, env.JWT_SECRET);
            // Attach user ID to request
            req.user = { id: decoded.userId };
            next();
        }
        catch (error) {
            next(new AppError(httpStatus.UNAUTHORIZED, `Unauthorized: ${error.message}`));
        }
    };
};
//# sourceMappingURL=auth.js.map