const TopicProgress = require('./progress.model');
const { ErrorHandler } = require('../middleware/errorHandler');

class ProgressRepository {
  static async upsertFromAttempt({ userId, quiz, attempt }) {
    try {
      const existing = await TopicProgress.findOne({ userId, quizId: quiz._id });
      const nextAttempts = (existing?.attempts || 0) + 1;
      const bestPercent = Math.max(existing?.bestPercent || 0, attempt.percent || 0);
      const bestScore = Math.max(existing?.bestScore || 0, attempt.score || 0);
      const passed = Boolean(existing?.passed) || Boolean(attempt.passed);

      return await TopicProgress.findOneAndUpdate(
        { userId, quizId: quiz._id },
        {
          userId,
          quizId: quiz._id,
          topicId: quiz.topicId || null,
          topicSlug: quiz.topicSlug || '',
          classLevel: quiz.classLevel,
          bestPercent,
          bestScore,
          maxScore: attempt.maxScore || quiz.autoGradedMarks?.() || 0,
          attempts: nextAttempts,
          passed,
          lastAttemptAt: new Date()
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    } catch (error) {
      throw new ErrorHandler(500, `Error updating progress: ${error.message}`);
    }
  }

  static async list({ page = 1, limit = 20, classLevel, userId, search = '' } = {}) {
    try {
      const filter = {};
      if (userId) filter.userId = userId;
      if (classLevel !== undefined && classLevel !== null && String(classLevel).trim() !== '') {
        filter.classLevel = Number(classLevel);
      }

      const skip = (page - 1) * limit;
      const [items, total] = await Promise.all([
        TopicProgress.find(filter)
          .sort({ lastAttemptAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('userId', 'name email classLevel batches')
          .populate('quizId', 'title classLevel'),
        TopicProgress.countDocuments(filter)
      ]);

      let filtered = items;
      if (search) {
        const needle = search.toLowerCase();
        filtered = items.filter(
          (row) =>
            row.userId?.name?.toLowerCase().includes(needle) ||
            row.userId?.email?.toLowerCase().includes(needle) ||
            row.quizId?.title?.toLowerCase().includes(needle) ||
            row.topicSlug?.toLowerCase().includes(needle)
        );
      }

      return {
        items: filtered,
        total: search ? filtered.length : total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil((search ? filtered.length : total) / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error listing progress: ${error.message}`);
    }
  }

  static async summary() {
    try {
      const [total, passed, students] = await Promise.all([
        TopicProgress.countDocuments(),
        TopicProgress.countDocuments({ passed: true }),
        TopicProgress.distinct('userId')
      ]);
      return {
        totalRecords: total,
        passed,
        uniqueStudents: students.length
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error building progress summary: ${error.message}`);
    }
  }
}

module.exports = ProgressRepository;
