export declare const createRateLimiter: (windowMs?: number, // Default 15 minutes
max?: number, // Default 100 requests per window
message?: string) => import("express-rate-limit").RateLimitRequestHandler;
export declare const globalRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
export declare const authRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimiter.d.ts.map