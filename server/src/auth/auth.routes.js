const express = require('express');
const router = express.Router();
const AuthController = require('./auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const {
  signupSchema,
  directSignupSchema,
  verifyOtpSchema,
  loginSchema,
  refreshTokenSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
  logoutSchema,
  logoutAllSchema,
  updateCurrentUserSchema,
  validate
} = require('./auth.validation');

// Public
router.post('/signup', validate(signupSchema), AuthController.signup);
router.post('/signup-direct', validate(directSignupSchema), AuthController.directSignup);
router.post('/register', validate(directSignupSchema), AuthController.directSignup); // alias
router.post('/verify-otp', validate(verifyOtpSchema), AuthController.verifyOtp);
router.post('/login', validate(loginSchema), AuthController.login);
router.post('/refresh', validate(refreshTokenSchema), AuthController.refresh);
router.post('/forgot-password', validate(forgotPasswordSchema), AuthController.forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), AuthController.resetPassword);

// Protected
router.post('/logout', validate(logoutSchema), AuthController.logout);
router.post('/logout-all', authenticate, validate(logoutAllSchema), AuthController.logoutAll);
router.post('/change-password', authenticate, validate(changePasswordSchema), AuthController.changePassword);
router.get('/me', authenticate, AuthController.getCurrentUser);
router.put('/me', authenticate, validate(updateCurrentUserSchema), AuthController.updateCurrentUser);

module.exports = router;
