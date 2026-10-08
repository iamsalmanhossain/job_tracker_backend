import { ZodError } from 'zod';
import httpStatus from 'http-status';
export const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                res.status(httpStatus.BAD_REQUEST).json({
                    success: false,
                    message: 'Validation Error',
                    errors: error.issues,
                });
                return;
            }
            next(error);
        }
    };
};
//# sourceMappingURL=validateRequest.js.map