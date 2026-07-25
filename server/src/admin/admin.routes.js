const express = require('express');
const router = express.Router();
const User = require('../user/users.model');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const { asyncHandler } = require('../middleware/errorHandler');

/**
 * Admin API shell — more modules (users, quizzes, reports) can mount here later.
 */

router.get(
  '/me',
  authenticate,
  requireAdmin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.userId).select('-passwordHash');
    if (!user) {
      return res.status(404).json({
        success: false,
        error: { message: 'User not found' }
      });
    }
    res.json({
      success: true,
      data: { user: user.toJSON() }
    });
  })
);

router.get(
  '/stats',
  authenticate,
  requireAdmin,
  asyncHandler(async (req, res) => {
    const [totalUsers, students, parents, admins] = await Promise.all([
      User.countDocuments({}),
      User.countDocuments({ roles: 'student' }),
      User.countDocuments({ roles: 'parent' }),
      User.countDocuments({ roles: { $in: ['super_admin', 'content_admin'] } })
    ]);

    res.json({
      success: true,
      data: {
        totalUsers,
        students,
        parents,
        admins,
        note: 'Admin dashboard shell — more stats coming soon.'
      }
    });
  })
);

module.exports = router;
