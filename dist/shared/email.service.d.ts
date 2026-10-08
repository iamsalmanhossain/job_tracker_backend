export declare const sendEmail: (to: string, subject: string, html: string) => Promise<import("nodemailer").SMTPSentMessageInfo | null>;
export declare const emailTemplates: {
    verificationEmail: (otp: string) => string;
    passwordResetEmail: (otp: string) => string;
};
//# sourceMappingURL=email.service.d.ts.map