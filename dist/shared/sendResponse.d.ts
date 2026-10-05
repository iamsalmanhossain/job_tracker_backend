import type { Response } from 'express';
type ApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data?: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
    };
};
export declare const sendResponse: <T>(res: Response, data: ApiResponse<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map