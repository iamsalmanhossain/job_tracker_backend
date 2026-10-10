import { Request, Response } from 'express';
import app from '../src/app.js';
import { connectRedis } from '../src/shared/redis.service.js';

// Vercel serverless function entrypoint
let isRedisConnected = false;

export default async function handler(req: Request, res: Response) {
  if (!isRedisConnected) {
    try {
      await connectRedis();
      isRedisConnected = true;
    } catch (error) {
      console.error('Failed to connect to Redis inside serverless handler:', error);
      // Even if Redis fails, you might want to proceed or return an error.
      // Usually, it's better to let it attempt to connect so the app can cache, 
      // but if Redis is down, it shouldn't crash the whole app if possible.
    }
  }

  // Delegate the request to the Express app
  return app(req, res);
}