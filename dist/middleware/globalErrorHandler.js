import { AppError } from '../shared/AppError.js';
import httpStatus from 'http-status';
export const globalErrorHandler = (err, req, res, next) => {
    let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';
    let errorMessages = [];
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
//# sourceMappingURL=globalErrorHandler.js.map