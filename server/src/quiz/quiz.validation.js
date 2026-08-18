const { z } = require('zod');
const { validate } = require('../auth/auth.validation');
const { QUESTION_TYPES, typeConfig } = require('./question-types.config');

const questionSchema = z
  .object({
    questionType: z.enum(Object.values(QUESTION_TYPES)).optional(),
    questionText: z.string().min(3).max(2000).trim(),
    imageUrl: z.string().max(1000).optional(),
    options: z.array(z.string().max(500).trim()).max(6).optional(),
    optionImages: z.array(z.string().max(1000)).max(6).optional(),
    correctOptionIndex: z.number().int().min(0).optional(),
    correctOptionIndices: z.array(z.number().int().min(0)).optional(),
    correctAnswers: z.array(z.string().min(1).max(500)).optional(),
    matchPairs: z
      .array(z.object({ left: z.string().min(1).max(300), right: z.string().min(1).max(300) }))
      .optional(),
    correctOrder: z.array(z.string().min(1).max(300)).optional(),
    categories: z
      .array(
        z.object({
          name: z.string().min(1).max(200),
          items: z.array(z.string().min(1).max(300)).default([])
        })
      )
      .optional(),
    hotspotRegions: z
      .array(
        z.object({
          x: z.number(),
          y: z.number(),
          width: z.number(),
          height: z.number(),
          label: z.string().max(200).optional()
        })
      )
      .optional(),
    passageText: z.string().max(10000).optional(),
    marks: z.number().min(0).optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    explanation: z.string().max(1000).optional()
  })
  .superRefine((q, ctx) => {
    const type = q.questionType || QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE;
    const config = typeConfig(type);
    const issue = (message, path) =>
      ctx.addIssue({ code: z.ZodIssueCode.custom, message, path: [path] });

    if (config.requiresOptions) {
      const count = q.options?.length ?? 0;
      if (type === QUESTION_TYPES.TRUE_FALSE) {
        if (count !== 2) issue('True/False needs exactly 2 options', 'options');
      } else if (count < 2 || count > 6) {
        issue('This question type needs 2–6 options', 'options');
      }
    }

    if (config.requiresCorrectIndex) {
      if (typeof q.correctOptionIndex !== 'number') {
        issue('Select the correct option', 'correctOptionIndex');
      } else if (q.correctOptionIndex >= (q.options?.length ?? 0)) {
        issue('correctOptionIndex must be within options', 'correctOptionIndex');
      }
    }

    if (config.requiresCorrectIndices) {
      const picks = q.correctOptionIndices ?? [];
      if (picks.length === 0) {
        issue('Select at least one correct option', 'correctOptionIndices');
      } else if (picks.some((i) => i >= (q.options?.length ?? 0))) {
        issue('correctOptionIndices must be within options', 'correctOptionIndices');
      }
    }

    if (config.requiresCorrectAnswers && !(q.correctAnswers?.length > 0)) {
      issue('Add at least one accepted answer', 'correctAnswers');
    }

    if (config.requiresMatchPairs && !(q.matchPairs?.length > 0)) {
      issue('Add at least one match pair', 'matchPairs');
    }

    if (config.requiresCorrectOrder && !(q.correctOrder?.length > 1)) {
      issue('Add at least two items in the correct order', 'correctOrder');
    }

    if (config.requiresCategories && !(q.categories?.length > 0)) {
      issue('Add at least one category', 'categories');
    }

    if (config.requiresHotspotRegions && !(q.hotspotRegions?.length > 0)) {
      issue('Add at least one hotspot region', 'hotspotRegions');
    }

    if (config.requiresImage && !q.imageUrl?.trim()) {
      issue('This question type needs an image URL', 'imageUrl');
    }

    if (config.requiresPassage && !q.passageText?.trim()) {
      issue('Passage text is required', 'passageText');
    }
  });

const quizBodySchema = {
  title: z.string().min(2).max(200).trim(),
  description: z.string().max(1000).optional(),
  classLevel: z.coerce.number().int().min(1).max(10),
  topicId: z.string().nullable().optional(),
  topicSlug: z.string().max(220).optional(),
  questions: z.array(questionSchema).min(1),
  isPublished: z.boolean().optional(),
  timeLimitMinutes: z.number().int().min(0).optional(),
  passPercent: z.number().min(0).max(100).optional()
};

const createQuizSchema = z.object({
  body: z.object(quizBodySchema)
});

const updateQuizSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: z.object({
    title: quizBodySchema.title.optional(),
    description: quizBodySchema.description,
    classLevel: quizBodySchema.classLevel.optional(),
    topicId: quizBodySchema.topicId,
    topicSlug: quizBodySchema.topicSlug,
    questions: z.array(questionSchema).min(1).optional(),
    isPublished: quizBodySchema.isPublished,
    timeLimitMinutes: quizBodySchema.timeLimitMinutes,
    passPercent: quizBodySchema.passPercent
  })
});

const listQuizzesSchema = z.object({
  query: z.object({
    classLevel: z.string().optional(),
    publishedOnly: z.string().optional(),
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional()
  })
});

const quizIdSchema = z.object({
  params: z.object({ id: z.string().min(1) })
});

/** Answer payload varies by question type (index, indices, text, order, map). */
const answerValueSchema = z.union([
  z.number().int().min(0),
  z.string().max(1000),
  z.array(z.number().int().min(0)),
  z.array(z.string().max(500)),
  z.array(z.object({ x: z.number(), y: z.number() })),
  z.record(z.string(), z.array(z.string().max(300)))
]);

const submitAttemptSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: z.object({
    answers: z
      .array(
        z.object({
          questionId: z.string().min(1),
          answer: answerValueSchema.nullable().optional(),
          selectedOptionIndex: z.number().int().min(0).optional()
        })
      )
      .min(1)
  })
});

module.exports = {
  createQuizSchema,
  updateQuizSchema,
  listQuizzesSchema,
  quizIdSchema,
  submitAttemptSchema,
  validate
};
