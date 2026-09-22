const QuizAttempt = require('../quiz/quiz_attempts.model');
const { ErrorHandler } = require('../middleware/errorHandler');

class ReportsRepository {
  static async listAttempts({
    page = 1,
    limit = 20,
    quizId,
    userId,
    classLevel,
    search = ''
  } = {}) {
    try {
      const filter = {};
      if (quizId) filter.quizId = quizId;
      if (userId) filter.userId = userId;
      if (classLevel !== undefined && classLevel !== null && String(classLevel).trim() !== '') {
        filter.classLevel = Number(classLevel);
      }

      const skip = (page - 1) * limit;
      let query = QuizAttempt.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('userId', 'name email classLevel batches roles')
        .populate('quizId', 'title classLevel passPercent');

      const [items, total] = await Promise.all([
        query,
        QuizAttempt.countDocuments(filter)
      ]);

      let filtered = items;
      if (search) {
        const needle = search.toLowerCase();
        filtered = items.filter((item) => {
          const user = item.userId;
          const quiz = item.quizId;
          return (
            user?.name?.toLowerCase().includes(needle) ||
            user?.email?.toLowerCase().includes(needle) ||
            quiz?.title?.toLowerCase().includes(needle)
          );
        });
      }

      return {
        items: filtered,
        total: search ? filtered.length : total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil((search ? filtered.length : total) / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error listing attempts: ${error.message}`);
    }
  }

  static async getAttemptById(id) {
    try {
      const attempt = await QuizAttempt.findById(id)
        .populate('userId', 'name email classLevel batches roles')
        .populate('quizId');
      if (!attempt) throw new ErrorHandler(404, 'Attempt not found');
      return attempt;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error fetching attempt: ${error.message}`);
    }
  }

  static async deleteAttempt(id) {
    try {
      const attempt = await QuizAttempt.findByIdAndDelete(id);
      if (!attempt) throw new ErrorHandler(404, 'Attempt not found');
      return attempt;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error deleting attempt: ${error.message}`);
    }
  }

  static async summary() {
    try {
      const [totalAttempts, passed, pendingReview, avgAgg] = await Promise.all([
        QuizAttempt.countDocuments(),
        QuizAttempt.countDocuments({ passed: true }),
        QuizAttempt.countDocuments({ pendingReview: { $gt: 0 } }),
        QuizAttempt.aggregate([
          { $group: { _id: null, avgPercent: { $avg: '$percent' } } }
        ])
      ]);
      return {
        totalAttempts,
        passed,
        pendingReview,
        averagePercent: Math.round(avgAgg[0]?.avgPercent || 0)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error building report summary: ${error.message}`);
    }
  }
}

module.exports = ReportsRepository;
