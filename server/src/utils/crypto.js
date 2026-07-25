const bcrypt = require('bcrypt');
const crypto = require('crypto');
const env = require('../config/env');

class CryptoUtil {
  static async hashPassword(plainPassword) {
    if (!plainPassword || typeof plainPassword !== 'string') {
      throw new Error('Password must be a non-empty string');
    }
    return bcrypt.hash(plainPassword, env.BCRYPT_ROUNDS);
  }

  static async comparePassword(plainPassword, hashedPassword) {
    if (!plainPassword || !hashedPassword) return false;
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  static generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  static generateSecureToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }
}

module.exports = CryptoUtil;
