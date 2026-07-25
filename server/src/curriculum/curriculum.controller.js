const CurriculumService = require('./curriculum.service');
const { asyncHandler } = require('../middleware/errorHandler');
const { CATEGORIES } = require('./curriculum.model');

class CurriculumController {
  static listTopics = asyncHandler(async (req, res) => {
    const activeOnly = req.query.activeOnly === 'true';
    const topics = await CurriculumService.listTopics({
      classLevel: req.query.classLevel,
      category: req.query.category,
      activeOnly
    });
    res.status(200).json({ success: true, data: topics });
  });

  static classSummary = asyncHandler(async (req, res) => {
    const summary = await CurriculumService.classSummary();
    res.status(200).json({
      success: true,
      data: {
        classes: Array.from({ length: 10 }, (_, i) => {
          const level = i + 1;
          const row = summary.find((s) => s.classLevel === level);
          return {
            classLevel: level,
            total: row?.total || 0,
            active: row?.active || 0
          };
        }),
        categories: CATEGORIES
      }
    });
  });

  static getById = asyncHandler(async (req, res) => {
    const topic = await CurriculumService.getById(req.params.id);
    res.status(200).json({ success: true, data: topic });
  });

  static createTopic = asyncHandler(async (req, res) => {
    const topic = await CurriculumService.createTopic(req.body);
    res.status(201).json({
      success: true,
      message: 'Topic created successfully',
      data: topic
    });
  });

  static updateTopic = asyncHandler(async (req, res) => {
    const topic = await CurriculumService.updateTopic(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Topic updated successfully',
      data: topic
    });
  });

  static deleteTopic = asyncHandler(async (req, res) => {
    await CurriculumService.deleteTopic(req.params.id);
    res.status(200).json({ success: true, message: 'Topic deleted' });
  });

  static reorder = asyncHandler(async (req, res) => {
    await CurriculumService.reorder(req.body.items);
    res.status(200).json({ success: true, message: 'Order updated' });
  });

  static seed = asyncHandler(async (req, res) => {
    const result = await CurriculumService.seed({ replace: req.body?.replace !== false });
    res.status(200).json({
      success: true,
      message: `Curriculum seeded (${result.count} topics)`,
      data: result
    });
  });
}

module.exports = CurriculumController;
