const { z } = require('zod');
const { validate } = require('../auth/auth.validation');

const listProgressSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    classLevel: z.string().optional(),
    userId: z.string().optional(),
    search: z.string().optional()
  })
});

module.exports = { listProgressSchema, validate };
