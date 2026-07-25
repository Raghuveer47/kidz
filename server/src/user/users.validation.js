const { z } = require('zod');
const { validate } = require('../auth/auth.validation');

const ROLE_ENUM = ['super_admin', 'content_admin', 'parent', 'subscriber', 'student'];

const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name cannot exceed 100 characters')
  .trim();

const phoneSchema = z
  .string()
  .min(8, 'Phone number must be at least 8 digits')
  .max(20, 'Phone number cannot exceed 20 characters')
  .optional();

const createUserSchema = z.object({
  body: z.object({
    name: nameSchema,
    email: z.string().email('Invalid email format').toLowerCase().trim(),
    phone: phoneSchema,
    password: z.string().min(8, 'Password must be at least 8 characters'),
    roles: z.array(z.enum(ROLE_ENUM)).optional(),
    batches: z.array(z.string().min(1)).optional(),
    classLevel: z.number().int().min(1).max(10).nullable().optional(),
    parentId: z.string().nullable().optional(),
    status: z.enum(['active', 'banned']).optional()
  })
});

const updateUserSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'User ID is required')
  }),
  body: z.object({
    name: nameSchema.optional(),
    phone: phoneSchema,
    roles: z.array(z.enum(ROLE_ENUM)).optional(),
    batches: z.array(z.string().min(1)).optional(),
    classLevel: z.number().int().min(1).max(10).nullable().optional(),
    parentId: z.string().nullable().optional(),
    status: z.enum(['active', 'banned']).optional()
  })
});

const listUsersSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional(),
    role: z.string().optional(),
    status: z.enum(['active', 'banned']).optional(),
    batch: z.string().optional(),
    classLevel: z.string().optional()
  })
});

const getUserByIdSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'User ID is required')
  })
});

module.exports = {
  ROLE_ENUM,
  createUserSchema,
  updateUserSchema,
  listUsersSchema,
  getUserByIdSchema,
  validate
};
