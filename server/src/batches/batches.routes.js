const express = require('express');
const BatchesController = require('./batches.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const {
  createBatchSchema,
  updateBatchSchema,
  batchIdParamSchema,
  addRemoveStudentsSchema,
  listBatchesSchema,
  paginatedStudentsSchema,
  validate
} = require('./batches.validation');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get('/', validate(listBatchesSchema), BatchesController.getBatches);
router.get(
  '/students/paginated',
  validate(paginatedStudentsSchema),
  BatchesController.getPaginatedStudents
);
router.get('/:id', validate(batchIdParamSchema), BatchesController.getBatchById);
router.post('/', validate(createBatchSchema), BatchesController.createBatch);
router.put('/:id', validate(updateBatchSchema), BatchesController.updateBatch);
router.delete('/:id', validate(batchIdParamSchema), BatchesController.deleteBatch);
router.post(
  '/:code/students',
  validate(addRemoveStudentsSchema),
  BatchesController.addStudentsToBatch
);
router.delete(
  '/:code/students',
  validate(addRemoveStudentsSchema),
  BatchesController.removeStudentsFromBatch
);

module.exports = router;
