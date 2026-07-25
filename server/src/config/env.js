require('dotenv').config();

/**
 * Kids Coding AI — environment config
 * Supports both MONGO_URI (existing) and MONGODB_URI
 */
const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5050,

  MONGODB_URI:
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    'mongodb://127.0.0.1:27017/kidstechguru',

  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET ||
    process.env.JWT_SECRET ||
    'kids-access-secret-change-me',
  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET ||
    process.env.JWT_SECRET ||
    'kids-refresh-secret-change-me',
  JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || '15m',
  JWT_ACCESS_EXPIRY_SECONDS: parseInt(process.env.JWT_ACCESS_EXPIRY_SECONDS || '900', 10),
  JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || '7d',

  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  EMAIL_FROM: process.env.EMAIL_FROM || 'onboarding@resend.dev',
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || 'Kids Coding AI',

  OTP_EXPIRY_MINUTES: parseInt(process.env.OTP_EXPIRY_MINUTES || '10', 10),
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),

  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '200', 10),

  CORS_ORIGIN:
    process.env.CORS_ORIGIN ||
    process.env.CLIENT_ORIGIN ||
    'http://localhost:5173,http://localhost:3000',

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',

  JWT_ISSUER: 'kids-coding-api',
  JWT_AUDIENCE: 'kids-coding-client'
};

if (env.NODE_ENV === 'production') {
  const required = ['JWT_ACCESS_SECRET', 'JWT_REFRESH_SECRET'];
  if (!process.env.MONGODB_URI && !process.env.MONGO_URI) {
    required.push('MONGODB_URI or MONGO_URI');
  }
  const missing = required.filter((key) => {
    if (key.includes(' or ')) {
      return !process.env.MONGODB_URI && !process.env.MONGO_URI;
    }
    return !process.env[key] && !(key === 'JWT_ACCESS_SECRET' && process.env.JWT_SECRET);
  });
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

module.exports = env;
