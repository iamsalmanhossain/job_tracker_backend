/**
 * Generate and store an OTP in Redis
 * @param identifier e.g., email or phone number
 * @param prefix e.g., 'verify_email', 'reset_password'
 * @param expiryInSeconds defaults to 300 (5 minutes)
 * @returns The generated OTP string
 */
export declare const generateOtp: (identifier: string, prefix: string, expiryInSeconds?: number) => Promise<string>;
/**
 * Verify if the provided OTP matches the one stored in Redis
 * @param identifier e.g., email or phone number
 * @param otp The OTP string to verify
 * @param prefix e.g., 'verify_email', 'reset_password'
 * @returns boolean
 */
export declare const verifyOtp: (identifier: string, otp: string, prefix: string) => Promise<boolean>;
//# sourceMappingURL=otp.service.d.ts.map