import { createClient } from 'redis';
import { env } from '../config/env.js';
const redisClient = createClient({
    url: env.REDIS_URL,
});
redisClient.on('error', (err) => console.error('Redis Client Error:', err));
redisClient.on('connect', () => console.log('Redis connected successfully!'));
export const connectRedis = async () => {
    if (!redisClient.isOpen) {
        await redisClient.connect();
    }
};
export const disconnectRedis = async () => {
    if (redisClient.isOpen) {
        await redisClient.quit();
    }
};
export const setCache = async (key, value, expiryInSeconds) => {
    if (expiryInSeconds) {
        await redisClient.set(key, value, { EX: expiryInSeconds });
    }
    else {
        await redisClient.set(key, value);
    }
};
export const getCache = async (key) => {
    return await redisClient.get(key);
};
export const delCache = async (key) => {
    return await redisClient.del(key);
};
export default redisClient;
//# sourceMappingURL=redis.service.js.map