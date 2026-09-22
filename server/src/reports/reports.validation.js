const { z } = require('zod');
const { validate } = require('../auth/auth.validation');

const listAttemptsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    quizId: z.string().optional(),
    userId: z.string().optional(),
    classLevel: z.string().optional(),
    search: z.string().optional()
  })
});

const attemptIdSchema = z.object({
  params: z.object({ id: z.string().min(1) })
});

module.exports = {
  listAttemptsSchema,
  attemptIdSchema,
  validate
};
