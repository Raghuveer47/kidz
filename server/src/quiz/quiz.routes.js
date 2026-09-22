const express = require('express');
const QuizController = require('./quiz.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const {
  createQuizSchema,
  updateQuizSchema,
  listQuizzesSchema,
  quizIdSchema,
  submitAttemptSchema,
  validate
} = require('./quiz.validation');

const router = express.Router();

router.use(authenticate);

router.get('/question-types', QuizController.questionTypes);
router.get('/', validate(listQuizzesSchema), QuizController.list);
router.post('/upload-excel', requireAdmin, QuizController.uploadExcel);
router.get('/:id', validate(quizIdSchema), QuizController.getById);
router.post('/:id/attempt', validate(submitAttemptSchema), QuizController.submitAttempt);
router.get('/:id/attempts', validate(quizIdSchema), QuizController.listAttempts);

router.post('/', requireAdmin, validate(createQuizSchema), QuizController.create);
router.put('/:id', requireAdmin, validate(updateQuizSchema), QuizController.update);
router.delete('/:id', requireAdmin, validate(quizIdSchema), QuizController.remove);

module.exports = router;
