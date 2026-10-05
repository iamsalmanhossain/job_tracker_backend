export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    constructor(statusCode: number, message: string, isOperational?: boolean);
}
//# sourceMappingURL=AppError.d.ts.map