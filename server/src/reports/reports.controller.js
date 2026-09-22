const ReportsService = require('./reports.service');
const { asyncHandler } = require('../middleware/errorHandler');

class ReportsController {
  static summary = asyncHandler(async (req, res) => {
    const data = await ReportsService.summary();
    res.status(200).json({ success: true, data });
  });

  static listAttempts = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await ReportsService.listAttempts({
      page,
      limit,
      quizId: req.query.quizId,
      userId: req.query.userId,
      classLevel: req.query.classLevel,
      search: req.query.search || ''
    });
    res.status(200).json({ success: true, data: result });
  });

  static getAttempt = asyncHandler(async (req, res) => {
    const attempt = await ReportsService.getAttemptById(req.params.id);
    res.status(200).json({ success: true, data: attempt });
  });

  static deleteAttempt = asyncHandler(async (req, res) => {
    await ReportsService.deleteAttempt(req.params.id);
    res.status(200).json({ success: true, message: 'Attempt deleted' });
  });
}

module.exports = ReportsController;
