const express = require('express');
const UploadController = require('./upload.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.post('/image', UploadController.uploadSingleImage);
router.post('/image-base64', UploadController.uploadBase64Image);

module.exports = router;
