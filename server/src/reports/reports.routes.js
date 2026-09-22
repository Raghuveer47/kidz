const express = require('express');
const ReportsController = require('./reports.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const { listAttemptsSchema, attemptIdSchema, validate } = require('./reports.validation');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get('/summary', ReportsController.summary);
router.get('/attempts', validate(listAttemptsSchema), ReportsController.listAttempts);
router.get('/attempts/:id', validate(attemptIdSchema), ReportsController.getAttempt);
router.delete('/attempts/:id', validate(attemptIdSchema), ReportsController.deleteAttempt);

module.exports = router;
