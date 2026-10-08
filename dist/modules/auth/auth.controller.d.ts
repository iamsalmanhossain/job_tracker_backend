import type { Request, Response } from 'express';
export declare const authController: {
    register: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyEmail: (req: Request, res: Response, next: import("express").NextFunction) => void;
    login: (req: Request, res: Response, next: import("express").NextFunction) => void;
    googleLogin: (req: Request, res: Response, next: import("express").NextFunction) => void;
    forgotPassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    logout: (req: Request, res: Response, next: import("express").NextFunction) => void;
    logoutAll: (req: Request, res: Response, next: import("express").NextFunction) => void;
    updateProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
    deleteProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
//# sourceMappingURL=auth.controller.d.ts.map