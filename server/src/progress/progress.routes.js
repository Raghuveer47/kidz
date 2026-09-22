const express = require('express');
const ProgressController = require('./progress.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const { listProgressSchema, validate } = require('./progress.validation');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get('/summary', ProgressController.summary);
router.get('/', validate(listProgressSchema), ProgressController.list);

module.exports = router;
