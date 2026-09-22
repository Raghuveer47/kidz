const ProgressService = require('./progress.service');
const { asyncHandler } = require('../middleware/errorHandler');

class ProgressController {
  static summary = asyncHandler(async (req, res) => {
    const data = await ProgressService.summary();
    res.status(200).json({ success: true, data });
  });

  static list = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await ProgressService.list({
      page,
      limit,
      classLevel: req.query.classLevel,
      userId: req.query.userId,
      search: req.query.search || ''
    });
    res.status(200).json({ success: true, data: result });
  });
}

module.exports = ProgressController;
