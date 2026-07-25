const { ErrorHandler } = require('./errorHandler');

const ADMIN_ROLES = ['super_admin', 'content_admin'];

const userHasRequiredRole = (user, requiredRoles = []) => {
  if (!user || !Array.isArray(user.roles)) return false;
  const userRoles = user.roles.map((r) => String(r).toLowerCase());
  if (userRoles.includes('super_admin')) return true;
  const normalizedRequired = requiredRoles.map((r) => String(r).toLowerCase());
  return normalizedRequired.some((role) => userRoles.includes(role));
};

const isAdminUser = (user) => userHasRequiredRole(user, ADMIN_ROLES);

/**
 * requireRole(['super_admin', 'content_admin'])
 * Must be used after `authenticate`.
 */
const requireRole = (roles = []) => (req, res, next) => {
  try {
    if (!req.user) throw new ErrorHandler(401, 'Authentication required');
    if (!userHasRequiredRole(req.user, roles)) {
      throw new ErrorHandler(403, 'You do not have permission to access this resource');
    }
    next();
  } catch (error) {
    next(error);
  }
};

const requireAdmin = requireRole(ADMIN_ROLES);

module.exports = {
  ADMIN_ROLES,
  userHasRequiredRole,
  isAdminUser,
  requireRole,
  requireAdmin
};
