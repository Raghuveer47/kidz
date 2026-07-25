const { z } = require('zod');
const { validate } = require('../auth/auth.validation');
const { CATEGORIES } = require('./curriculum.model');

const classLevelSchema = z.coerce.number().int().min(1).max(10);

const createTopicSchema = z.object({
  body: z.object({
    classLevel: classLevelSchema,
    title: z.string().min(2).max(200).trim(),
    slug: z.string().min(1).max(220).trim().toLowerCase().optional(),
    category: z.enum(CATEGORIES),
    description: z.string().max(1000).optional(),
    order: z.number().int().min(0).optional(),
    isActive: z.boolean().optional(),
    parentTopicId: z.string().nullable().optional()
  })
});

const updateTopicSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    title: z.string().min(2).max(200).trim().optional(),
    slug: z.string().min(1).max(220).trim().toLowerCase().optional(),
    category: z.enum(CATEGORIES).optional(),
    description: z.string().max(1000).optional(),
    order: z.number().int().min(0).optional(),
    isActive: z.boolean().optional(),
    parentTopicId: z.string().nullable().optional(),
    classLevel: classLevelSchema.optional()
  })
});

const listTopicsSchema = z.object({
  query: z.object({
    classLevel: z.string().optional(),
    category: z.string().optional(),
    activeOnly: z.string().optional()
  })
});

const getByIdSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
});

const reorderSchema = z.object({
  body: z.object({
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          order: z.number().int().min(0)
        })
      )
      .min(1)
  })
});

module.exports = {
  createTopicSchema,
  updateTopicSchema,
  listTopicsSchema,
  getByIdSchema,
  reorderSchema,
  validate,
  CATEGORIES
};
