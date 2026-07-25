const { z } = require('zod');

const emailSchema = z.string().email('Invalid email format').toLowerCase().trim();
const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(100, 'Password cannot exceed 100 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name cannot exceed 100 characters')
  .trim();

const phoneSchema = z
  .string()
  .min(8, 'Phone number must be at least 8 digits')
  .max(20, 'Phone number cannot exceed 20 characters')
  .regex(/^[0-9+\-\s()]+$/, 'Phone number can contain digits, spaces, +, -, and parentheses')
  .optional();

const otpSchema = z
  .string()
  .length(6, 'OTP must be exactly 6 digits')
  .regex(/^\d+$/, 'OTP must contain only digits');

const signupSchema = z.object({
  body: z.object({ email: emailSchema })
});

const directSignupSchema = z.object({
  body: z.object({
    email: emailSchema,
    name: nameSchema,
    password: passwordSchema,
    phone: phoneSchema,
    classLevel: z.number().int().min(1).max(10).optional(),
    roles: z.array(z.enum(['student', 'parent', 'subscriber'])).optional()
  })
});

const verifyOtpSchema = z.object({
  body: z.object({
    email: emailSchema,
    otp: otpSchema,
    name: nameSchema,
    password: passwordSchema,
    phone: phoneSchema,
    classLevel: z.number().int().min(1).max(10).optional()
  })
});

const loginSchema = z.object({
  body: z.object({
    email: emailSchema,
    password: z.string().min(1, 'Password is required')
  })
});

const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token is required')
  })
});

const forgotPasswordSchema = z.object({
  body: z.object({ email: emailSchema })
});

const resetPasswordSchema = z.object({
  body: z.object({
    email: emailSchema,
    otp: otpSchema,
    newPassword: passwordSchema
  })
});

const changePasswordSchema = z.object({
  body: z
    .object({
      currentPassword: z.string().min(1, 'Current password is required'),
      newPassword: passwordSchema
    })
    .refine((data) => data.currentPassword !== data.newPassword, {
      message: 'New password must be different from current password',
      path: ['newPassword']
    })
});

const logoutSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token is required')
  })
});

const logoutAllSchema = z.object({
  body: z.object({}).optional()
});

const updateCurrentUserSchema = z.object({
  body: z.object({
    name: nameSchema.optional(),
    phone: phoneSchema.optional(),
    profilePicture: z.string().url().optional().or(z.literal('')),
    classLevel: z.number().int().min(1).max(10).nullable().optional(),
    profile: z
      .object({
        firstName: z.string().max(100).trim().optional(),
        lastName: z.string().max(100).trim().optional(),
        dateOfBirth: z
          .union([z.date(), z.string()])
          .optional()
          .transform((val) => {
            if (val === undefined || val === null || val === '') return undefined;
            const d = val instanceof Date ? val : new Date(val);
            return Number.isNaN(d.getTime()) ? undefined : d;
          }),
        gender: z.enum(['male', 'female', 'other', 'prefer_not_to_say']).optional(),
        guardianName: z.string().max(200).trim().optional(),
        guardianRelation: z.enum(['father', 'mother', 'guardian']).optional(),
        schoolName: z.string().max(300).trim().optional(),
        city: z.string().max(100).trim().optional(),
        interests: z.array(z.string().trim().min(1)).optional()
      })
      .partial()
      .optional()
  })
});

const validate = (schema) => (req, res, next) => {
  try {
    const validatedData = schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
    req.body = validatedData.body || req.body;
    req.query = validatedData.query || req.query;
    req.params = validatedData.params || req.params;
    next();
  } catch (error) {
    if (error instanceof z.ZodError || error?.name === 'ZodError') {
      const issueList = error.issues || error.errors || [];
      const errors = issueList.map((err) => ({
        field: Array.isArray(err.path) ? err.path.join('.') : String(err.path || ''),
        message: err.message,
        code: err.code
      }));
      return res.status(400).json({
        success: false,
        error: {
          message: errors[0]?.message || 'Validation failed',
          details: errors
        }
      });
    }
    next(error);
  }
};

module.exports = {
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
};
