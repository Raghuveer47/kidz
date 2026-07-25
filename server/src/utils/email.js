const env = require('../config/env');

/**
 * Email util — Resend when configured; otherwise logs OTP in development
 * so local auth still works without email setup.
 */
class EmailUtil {
  constructor() {
    this.resend = null;
    this.emailFrom = env.EMAIL_FROM || 'onboarding@resend.dev';
    this.init();
  }

  init() {
    if (!env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — OTP emails will be logged to console in development.');
      return;
    }
    try {
      const { Resend } = require('resend');
      this.resend = new Resend(env.RESEND_API_KEY);
      console.log('Resend email initialized for Kids Coding AI');
    } catch (err) {
      console.error('Failed to init Resend:', err.message);
    }
  }

  async sendOTPEmail(email, otp, purpose = 'signup') {
    const subjects = {
      signup: 'Verify Your Email - Kids Coding AI',
      forgot_password: 'Reset Your Password - Kids Coding AI',
      login: 'Login OTP - Kids Coding AI'
    };
    const subject = subjects[purpose] || 'OTP - Kids Coding AI';
    const text = `Your Kids Coding AI code is ${otp}. It expires in ${env.OTP_EXPIRY_MINUTES} minutes.`;
    const html = `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2>Kids Coding AI</h2>
        <p>Your verification code:</p>
        <p style="font-size:28px;letter-spacing:6px;font-weight:bold">${otp}</p>
        <p>Expires in ${env.OTP_EXPIRY_MINUTES} minutes.</p>
      </div>
    `;

    if (!this.resend) {
      console.log(`[DEV EMAIL] To: ${email} | ${purpose} OTP: ${otp}`);
      return { id: 'dev-log', to: email };
    }

    const from = `${env.EMAIL_FROM_NAME} <${this.emailFrom}>`;
    const result = await this.resend.emails.send({
      from,
      to: email,
      subject,
      html,
      text
    });
    return result;
  }

  async sendWelcomeEmail(email, name) {
    if (!this.resend) {
      console.log(`[DEV EMAIL] Welcome to ${name} <${email}>`);
      return { id: 'dev-log' };
    }
    const from = `${env.EMAIL_FROM_NAME} <${this.emailFrom}>`;
    return this.resend.emails.send({
      from,
      to: email,
      subject: 'Welcome to Kids Coding AI!',
      html: `<p>Hi ${name},</p><p>Welcome to Kids Coding AI. Happy learning!</p>`,
      text: `Hi ${name}, Welcome to Kids Coding AI. Happy learning!`
    });
  }

  async sendPasswordChangeNotification(email, name) {
    if (!this.resend) {
      console.log(`[DEV EMAIL] Password changed for ${name} <${email}>`);
      return { id: 'dev-log' };
    }
    const from = `${env.EMAIL_FROM_NAME} <${this.emailFrom}>`;
    return this.resend.emails.send({
      from,
      to: email,
      subject: 'Password changed - Kids Coding AI',
      html: `<p>Hi ${name},</p><p>Your password was changed successfully.</p>`,
      text: `Hi ${name}, Your password was changed successfully.`
    });
  }
}

module.exports = new EmailUtil();
