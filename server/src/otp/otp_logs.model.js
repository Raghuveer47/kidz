const mongoose = require('mongoose');

const otpLogsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      index: true
    },
    otp: {
      type: String,
      required: [true, 'OTP is required'],
      select: false
    },
    purpose: {
      type: String,
      required: [true, 'OTP purpose is required'],
      enum: {
        values: ['signup', 'login', 'forgot_password'],
        message: 'Invalid OTP purpose'
      },
      index: true
    },
    ip: {
      type: String,
      required: [true, 'IP address is required'],
      trim: true
    },
    userAgent: {
      type: String,
      trim: true,
      maxlength: [500, 'User agent cannot exceed 500 characters']
    },
    expiresAt: {
      type: Date,
      required: [true, 'Expiry date is required'],
      index: { expireAfterSeconds: 0 }
    },
    verified: {
      type: Boolean,
      default: false
    },
    verifiedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true,
    collection: 'otp_logs'
  }
);

otpLogsSchema.index({ email: 1, purpose: 1, createdAt: -1 });

otpLogsSchema.methods.isExpired = function () {
  return this.expiresAt < new Date();
};

otpLogsSchema.methods.isValid = function () {
  return !this.isExpired() && !this.verified;
};

module.exports = mongoose.model('OtpLog', otpLogsSchema);
