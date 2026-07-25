const jwt = require('jsonwebtoken');
const env = require('../config/env');

class TokenUtil {
  static generateAccessToken(payload) {
    return jwt.sign(
      {
        userId: payload.userId,
        email: payload.email,
        roles: payload.roles || []
      },
      env.JWT_ACCESS_SECRET,
      {
        expiresIn: env.JWT_ACCESS_EXPIRY,
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE
      }
    );
  }

  static generateRefreshToken(payload) {
    return jwt.sign(
      {
        userId: payload.userId,
        email: payload.email,
        type: 'refresh'
      },
      env.JWT_REFRESH_SECRET,
      {
        expiresIn: env.JWT_REFRESH_EXPIRY,
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE
      }
    );
  }

  static verifyAccessToken(token) {
    if (!token) throw new Error('Access token is required');
    try {
      return jwt.verify(token, env.JWT_ACCESS_SECRET, {
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE
      });
    } catch (error) {
      if (error.name === 'TokenExpiredError') throw new Error('Access token has expired');
      if (error.name === 'JsonWebTokenError') throw new Error('Invalid access token');
      throw new Error(`Error verifying access token: ${error.message}`);
    }
  }

  static verifyRefreshToken(token) {
    if (!token) throw new Error('Refresh token is required');
    try {
      const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET, {
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE
      });
      if (decoded.type !== 'refresh') throw new Error('Invalid refresh token type');
      return decoded;
    } catch (error) {
      if (error.name === 'TokenExpiredError') throw new Error('Refresh token has expired');
      if (error.name === 'JsonWebTokenError') throw new Error('Invalid refresh token');
      throw new Error(`Error verifying refresh token: ${error.message}`);
    }
  }

  static extractTokenFromHeader(authHeader) {
    if (!authHeader) return null;
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
    return parts[1];
  }
}

module.exports = TokenUtil;
