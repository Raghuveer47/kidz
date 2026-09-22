const BatchesService = require('./batches.service');
const { asyncHandler } = require('../middleware/errorHandler');

class BatchesController {
  static createBatch = asyncHandler(async (req, res) => {
    const batch = await BatchesService.createBatch(req.body);
    res.status(201).json({ success: true, message: 'Batch created', data: batch });
  });

  static updateBatch = asyncHandler(async (req, res) => {
    const batch = await BatchesService.updateBatch(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'Batch updated', data: batch });
  });

  static deleteBatch = asyncHandler(async (req, res) => {
    await BatchesService.deleteBatch(req.params.id);
    res.status(200).json({ success: true, message: 'Batch deleted' });
  });

  static getBatchById = asyncHandler(async (req, res) => {
    const batch = await BatchesService.getBatchById(req.params.id);
    res.status(200).json({ success: true, data: batch });
  });

  static getBatches = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await BatchesService.getBatches({
      page,
      limit,
      search: req.query.search || ''
    });
    res.status(200).json({ success: true, data: result });
  });

  static addStudentsToBatch = asyncHandler(async (req, res) => {
    await BatchesService.addStudentsToBatch(req.params.code, req.body.userIds);
    res.status(200).json({ success: true, message: 'Students added to batch' });
  });

  static removeStudentsFromBatch = asyncHandler(async (req, res) => {
    await BatchesService.removeStudentsFromBatch(req.params.code, req.body.userIds);
    res.status(200).json({ success: true, message: 'Students removed from batch' });
  });

  static getPaginatedStudents = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await BatchesService.getStudentsPaginated({
      page,
      limit,
      search: req.query.search || '',
      batchCode: req.query.batchCode
    });
    res.status(200).json({ success: true, data: result });
  });
}

module.exports = BatchesController;
