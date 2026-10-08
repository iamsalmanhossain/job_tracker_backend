import jwt from 'jsonwebtoken';
export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: (password: string, hash: string) => Promise<boolean>;
export declare const generateToken: (payload: any, secret: string, expiresIn: string) => string;
export declare const verifyToken: (token: string, secret: string) => string | jwt.JwtPayload;
//# sourceMappingURL=auth.utils.d.ts.map