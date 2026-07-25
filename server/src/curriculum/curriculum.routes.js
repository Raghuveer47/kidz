const express = require('express');
const CurriculumController = require('./curriculum.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const {
  createTopicSchema,
  updateTopicSchema,
  listTopicsSchema,
  getByIdSchema,
  reorderSchema,
  validate
} = require('./curriculum.validation');

const router = express.Router();

/** Public outline (student site can use later) */
router.get('/topics', validate(listTopicsSchema), CurriculumController.listTopics);
router.get('/topics/:id', validate(getByIdSchema), CurriculumController.getById);

/** Admin */
router.get('/classes', authenticate, requireAdmin, CurriculumController.classSummary);
router.post('/seed', authenticate, requireAdmin, CurriculumController.seed);
router.post('/topics', authenticate, requireAdmin, validate(createTopicSchema), CurriculumController.createTopic);
router.put('/topics/orders', authenticate, requireAdmin, validate(reorderSchema), CurriculumController.reorder);
router.put('/topics/:id', authenticate, requireAdmin, validate(updateTopicSchema), CurriculumController.updateTopic);
router.delete('/topics/:id', authenticate, requireAdmin, validate(getByIdSchema), CurriculumController.deleteTopic);

module.exports = router;
