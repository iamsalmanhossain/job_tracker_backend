declare const redisClient: import("redis").RedisClientType<{}, {}, {}, 3, {}>;
export declare const connectRedis: () => Promise<void>;
export declare const disconnectRedis: () => Promise<void>;
export declare const setCache: (key: string, value: string, expiryInSeconds?: number) => Promise<void>;
export declare const getCache: (key: string) => Promise<string | null>;
export declare const delCache: (key: string) => Promise<number>;
export default redisClient;
//# sourceMappingURL=redis.service.d.ts.map