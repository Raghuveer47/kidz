const mongoose = require('mongoose');

const sessionsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    refreshToken: {
      type: String,
      required: [true, 'Refresh token is required']
    },
    userAgent: {
      type: String,
      trim: true,
      maxlength: [500, 'User agent cannot exceed 500 characters']
    },
    ip: {
      type: String,
      required: [true, 'IP address is required'],
      trim: true
    },
    expiresAt: {
      type: Date,
      required: [true, 'Expiry date is required']
    }
  },
  {
    timestamps: true,
    collection: 'sessions'
  }
);

sessionsSchema.index({ userId: 1, createdAt: -1 });
sessionsSchema.index({ refreshToken: 1 }, { unique: true });
sessionsSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

sessionsSchema.methods.isExpired = function () {
  return this.expiresAt < new Date();
};

module.exports = mongoose.model('Session', sessionsSchema);
