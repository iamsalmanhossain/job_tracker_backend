import otpGenerator from 'otp-generator';
import { setCache, getCache, delCache } from './redis.service.js';

/**
 * Generate and store an OTP in Redis
 * @param identifier e.g., email or phone number
 * @param prefix e.g., 'verify_email', 'reset_password'
 * @param expiryInSeconds defaults to 300 (5 minutes)
 * @returns The generated OTP string
 */
export const generateOtp = async (identifier: string, prefix: string, expiryInSeconds = 300) => {
  // Generate a 6-digit OTP
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
    digits: true,
  });

  const redisKey = `${prefix}:${identifier}`;

  // Store OTP in Redis with expiration using our reusable Redis service
  await setCache(redisKey, otp, expiryInSeconds);

  return otp;
};

/**
 * Verify if the provided OTP matches the one stored in Redis
 * @param identifier e.g., email or phone number
 * @param otp The OTP string to verify
 * @param prefix e.g., 'verify_email', 'reset_password'
 * @returns boolean
 */
export const verifyOtp = async (identifier: string, otp: string, prefix: string): Promise<boolean> => {
  const redisKey = `${prefix}:${identifier}`;
  
  const storedOtp = await getCache(redisKey);

  if (storedOtp && storedOtp === otp) {
    // Optionally delete OTP after successful verification so it can't be reused
    await delCache(redisKey);
    return true;
  }

  return false;
};
