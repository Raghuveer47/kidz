const { z } = require('zod');
const { validate } = require('../auth/auth.validation');

const dateField = z
  .union([
    z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
    z.literal('')
  ])
  .optional()
  .transform((val) => (val === '' ? undefined : val));

const batchBaseSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  code: z.string().min(2).max(50).trim(),
  description: z.string().max(500).trim().optional(),
  classLevel: z.coerce.number().int().min(1).max(10).nullable().optional(),
  startDate: dateField,
  endDate: dateField,
  isActive: z.boolean().optional()
});

const createBatchSchema = z.object({ body: batchBaseSchema });

const updateBatchSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: batchBaseSchema.partial()
});

const batchIdParamSchema = z.object({
  params: z.object({ id: z.string().min(1) })
});

const addRemoveStudentsSchema = z.object({
  params: z.object({ code: z.string().min(1) }),
  body: z.object({
    userIds: z.array(z.string().min(1)).min(1)
  })
});

const listBatchesSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional()
  })
});

const paginatedStudentsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    search: z.string().optional(),
    batchCode: z.string().optional()
  })
});

module.exports = {
  createBatchSchema,
  updateBatchSchema,
  batchIdParamSchema,
  addRemoveStudentsSchema,
  listBatchesSchema,
  paginatedStudentsSchema,
  validate
};
