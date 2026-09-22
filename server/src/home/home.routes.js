const express = require('express');
const HomeController = require('./home.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const { updateSectionSchema, validate } = require('./home.validation');

const router = express.Router();

/** Public homepage content */
router.get('/', HomeController.getPublic);

/** Admin CMS */
router.get('/admin/sections', authenticate, requireAdmin, HomeController.listSections);
router.post(
  '/:section',
  authenticate,
  requireAdmin,
  validate(updateSectionSchema),
  HomeController.updateSection
);

module.exports = router;
