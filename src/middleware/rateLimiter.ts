import rateLimit from 'express-rate-limit';

export const createRateLimiter = (
  windowMs: number = 15 * 60 * 1000, // Default 15 minutes
  max: number = 100, // Default 100 requests per window
  message: string = 'Too many requests from this IP, please try again later.'
) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      success: false,
      message,
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

export const globalRateLimiter = createRateLimiter();
export const authRateLimiter = createRateLimiter(15 * 60 * 1000, 10, 'Too many login attempts, please try again later.');
