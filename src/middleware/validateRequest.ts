import type { Request, Response, NextFunction } from 'express';
import { type ZodSchema, ZodError } from 'zod';
import httpStatus from 'http-status';

export const validateRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      next();
    } catch (error) {
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
