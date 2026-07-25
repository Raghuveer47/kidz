const TokenUtil = require('../utils/token');
const User = require('../user/users.model');
const { ErrorHandler } = require('./errorHandler');

const authenticate = async (req, res, next) => {
  try {
    const token = TokenUtil.extractTokenFromHeader(req.headers.authorization);
    if (!token) throw new ErrorHandler(401, 'Access token is required');

    let decoded;
    try {
      decoded = TokenUtil.verifyAccessToken(token);
    } catch (error) {
      throw new ErrorHandler(401, error.message);
    }

    const user = await User.findById(decoded.userId).select('-passwordHash');
    if (!user) throw new ErrorHandler(401, 'User not found');
    if (user.status !== 'active') {
      throw new ErrorHandler(403, 'Account is banned or inactive');
    }
    if (!user.verification?.emailVerified) {
      throw new ErrorHandler(403, 'Email not verified. Please verify your email first.');
    }

    req.user = {
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
      roles: user.roles,
      status: user.status,
      classLevel: user.classLevel
    };
    req.token = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

const optionalAuthenticate = async (req, res, next) => {
  try {
    const token = TokenUtil.extractTokenFromHeader(req.headers.authorization);
    if (!token) return next();

    try {
      const decoded = TokenUtil.verifyAccessToken(token);
      const user = await User.findById(decoded.userId).select('-passwordHash');
      if (user && user.status === 'active' && user.verification?.emailVerified) {
        req.user = {
          userId: user._id.toString(),
          email: user.email,
          name: user.name,
          roles: user.roles,
          status: user.status,
          classLevel: user.classLevel
        };
        req.token = decoded;
      }
    } catch {
      // ignore invalid optional token
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authenticate, optionalAuthenticate };
