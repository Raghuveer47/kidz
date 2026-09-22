const multer = require('multer');
const QuizService = require('./quiz.service');
const { asyncHandler } = require('../middleware/errorHandler');
const {
  QUESTION_TYPE_CONFIG,
  QUESTION_TYPE_CATEGORIES
} = require('./question-types.config');

const excelUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok =
      file.mimetype.includes('sheet') ||
      file.mimetype.includes('excel') ||
      file.originalname.match(/\.(xlsx|xls|csv)$/i);
    if (ok) cb(null, true);
    else cb(new Error('Only Excel (.xlsx) files are allowed'), false);
  }
});

class QuizController {
  static uploadExcel = [
    excelUpload.single('file'),
    asyncHandler(async (req, res) => {
      const quiz = await QuizService.createFromExcel(
        req.file?.buffer,
        req.body || {},
        req.user?.userId
      );
      res.status(201).json({
        success: true,
        message: 'Quiz imported from Excel',
        data: quiz
      });
    })
  ];

  static questionTypes = asyncHandler(async (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        types: Object.entries(QUESTION_TYPE_CONFIG).map(([value, cfg]) => ({
          value,
          ...cfg
        })),
        categories: QUESTION_TYPE_CATEGORIES
      }
    });
  });
  static list = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await QuizService.list(
      {
        page,
        limit,
        classLevel: req.query.classLevel,
        publishedOnly: req.query.publishedOnly,
        search: req.query.search || ''
      },
      req.user
    );

    // Summarize for list views (lighter payload)
    const items = (result.items || []).map((q) => {
      const obj = typeof q.toObject === 'function' ? q.toObject() : q;
      return {
        _id: obj._id,
        title: obj.title,
        description: obj.description,
        classLevel: obj.classLevel,
        topicSlug: obj.topicSlug,
        topicId: obj.topicId,
        isPublished: obj.isPublished,
        questionCount: (obj.questions || []).length,
        timeLimitMinutes: obj.timeLimitMinutes,
        passPercent: obj.passPercent,
        createdAt: obj.createdAt,
        updatedAt: obj.updatedAt
      };
    });

    res.status(200).json({
      success: true,
      data: { ...result, items }
    });
  });

  static getById = asyncHandler(async (req, res) => {
    const quiz = await QuizService.getById(req.params.id, req.user);
    res.status(200).json({ success: true, data: quiz });
  });

  static create = asyncHandler(async (req, res) => {
    const quiz = await QuizService.create(req.body, req.user?.userId);
    res.status(201).json({
      success: true,
      message: 'Quiz created successfully',
      data: quiz
    });
  });

  static update = asyncHandler(async (req, res) => {
    const quiz = await QuizService.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Quiz updated successfully',
      data: quiz
    });
  });

  static remove = asyncHandler(async (req, res) => {
    await QuizService.delete(req.params.id);
    res.status(200).json({ success: true, message: 'Quiz deleted' });
  });

  static submitAttempt = asyncHandler(async (req, res) => {
    const result = await QuizService.submitAttempt(
      req.params.id,
      req.user.userId,
      req.body.answers
    );
    res.status(201).json({
      success: true,
      message: 'Attempt submitted',
      data: result.attempt
    });
  });

  static listAttempts = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const result = await QuizService.listAttempts(
      {
        page,
        limit,
        quizId: req.params.id
      },
      req.user
    );
    res.status(200).json({ success: true, data: result });
  });
}

module.exports = QuizController;
