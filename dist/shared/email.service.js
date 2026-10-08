import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465, // true for 465, false for other ports like 587
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
    },
});
export const sendEmail = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Job Tracker" <${env.EMAIL_FROM}>`,
            to,
            subject,
            html,
        });
        console.log(`Email sent successfully to ${to}: ${info.messageId}`);
        return info;
    }
    catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        // Don't throw the error so that the main flow (like registration) doesn't completely fail
        // if the email service goes down, but in a real production app you might want to queue these.
        return null;
    }
};
const baseEmailTemplate = (title, message, otp) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #f9fafb;
    margin: 0;
    padding: 40px 20px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }
  .header {
    background-color: #4F46E5;
    padding: 30px 40px;
    text-align: center;
  }
  .header h1 {
    color: #ffffff;
    margin: 0;
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 700;
  }
  .content {
    padding: 40px;
    text-align: center;
    color: #374151;
  }
  .content h2 {
    color: #111827;
    margin-top: 0;
    font-size: 22px;
  }
  .content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    color: #4B5563;
  }
  .otp-box {
    background-color: #F3F4F6;
    border: 2px dashed #CBD5E1;
    border-radius: 8px;
    padding: 24px;
    margin: 30px auto;
    max-width: 300px;
    cursor: pointer;
  }
  .otp-code {
    font-size: 72px;
    font-weight: 800;
    color: #4F46E5;
    letter-spacing: 4px;
    margin: 0;
    font-family: monospace;
    user-select: all;
    -webkit-user-select: all;
  }
  .copy-hint {
    font-size: 13px;
    color: #64748B;
    margin-top: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .footer {
    background-color: #F8FAFC;
    padding: 20px 40px;
    text-align: center;
    color: #94A3B8;
    font-size: 14px;
    border-top: 1px solid #E2E8F0;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Job Tracker</h1>
    </div>
    <div class="content">
      <h2>${title}</h2>
      <p>${message}</p>
      
      <div class="otp-box">
        <p class="otp-code">${otp}</p>
        <p class="copy-hint">Click number to select & copy</p>
      </div>

      <p style="font-size: 14px; color: #64748B; margin-top: 40px;">
        This OTP will expire in 5 minutes.<br>
        If you did not request this, please safely ignore this email.
      </p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Job Tracker. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
export const emailTemplates = {
    verificationEmail: (otp) => baseEmailTemplate('Verify Your Email Address', 'Welcome! To complete your registration and get started, please verify your email address using the One-Time Password below.', otp),
    passwordResetEmail: (otp) => baseEmailTemplate('Password Reset Request', 'We received a request to reset the password for your Job Tracker account. Use the following OTP to reset it.', otp)
};
//# sourceMappingURL=email.service.js.map