const Quiz = require('./quiz.model');
const QuizAttempt = require('./quiz_attempts.model');
const { gradeAnswer } = require('./quiz.grading');
const { ErrorHandler } = require('../middleware/errorHandler');

class QuizRepository {
  static async list({
    page = 1,
    limit = 20,
    classLevel,
    publishedOnly = false,
    search = ''
  } = {}) {
    try {
      const filter = {};
      if (classLevel !== undefined && classLevel !== null && String(classLevel).trim() !== '') {
        filter.classLevel = Number(classLevel);
      }
      if (publishedOnly) filter.isPublished = true;
      if (search) {
        filter.title = { $regex: search, $options: 'i' };
      }

      const skip = (page - 1) * limit;
      const [items, total] = await Promise.all([
        Quiz.find(filter).sort({ updatedAt: -1 }).skip(skip).limit(limit),
        Quiz.countDocuments(filter)
      ]);

      return {
        items,
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error listing quizzes: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const quiz = await Quiz.findById(id);
      if (!quiz) throw new ErrorHandler(404, 'Quiz not found');
      return quiz;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error fetching quiz: ${error.message}`);
    }
  }

  static async create(payload, userId) {
    try {
      const quiz = new Quiz({
        ...payload,
        topicId: payload.topicId || null,
        createdBy: userId || null
      });
      return await quiz.save();
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new ErrorHandler(400, error.message);
      }
      throw new ErrorHandler(500, `Error creating quiz: ${error.message}`);
    }
  }

  static async update(id, updates) {
    try {
      if (updates.topicId === '') updates.topicId = null;
      const quiz = await Quiz.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true
      });
      if (!quiz) throw new ErrorHandler(404, 'Quiz not found');
      return quiz;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      if (error.name === 'ValidationError') {
        throw new ErrorHandler(400, error.message);
      }
      throw new ErrorHandler(500, `Error updating quiz: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const quiz = await Quiz.findByIdAndDelete(id);
      if (!quiz) throw new ErrorHandler(404, 'Quiz not found');
      await QuizAttempt.deleteMany({ quizId: id });
      return quiz;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error deleting quiz: ${error.message}`);
    }
  }

  static async submitAttempt(quizId, userId, answers) {
    try {
      const quiz = await Quiz.findById(quizId);
      if (!quiz) throw new ErrorHandler(404, 'Quiz not found');
      if (!quiz.isPublished) {
        throw new ErrorHandler(403, 'This quiz is not published yet');
      }

      const answerMap = new Map(
        (answers || []).map((a) => [
          String(a.questionId),
          a.answer !== undefined ? a.answer : a.selectedOptionIndex
        ])
      );

      let score = 0;
      let pendingReview = 0;
      const maxScore = quiz.autoGradedMarks();
      const graded = (quiz.questions || []).map((q) => {
        const submitted = answerMap.get(String(q._id));
        const { isCorrect, graded: autoGraded } = gradeAnswer(q, submitted);
        const marksAwarded = isCorrect ? q.marks || 1 : 0;
        score += marksAwarded;
        if (!autoGraded) pendingReview += 1;
        return {
          questionId: q._id,
          answer: submitted ?? null,
          isCorrect,
          marksAwarded,
          autoGraded
        };
      });

      const percent = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      const passed = percent >= (quiz.passPercent ?? 50);

      const attempt = await QuizAttempt.create({
        quizId: quiz._id,
        userId,
        answers: graded,
        score,
        maxScore,
        percent,
        passed,
        pendingReview,
        classLevel: quiz.classLevel
      });

      return { attempt, quizTitle: quiz.title };
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error submitting attempt: ${error.message}`);
    }
  }

  static async listAttempts({ quizId, userId, page = 1, limit = 20 } = {}) {
    try {
      const filter = {};
      if (quizId) filter.quizId = quizId;
      if (userId) filter.userId = userId;

      const skip = (page - 1) * limit;
      const [items, total] = await Promise.all([
        QuizAttempt.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('userId', 'name email roles')
          .populate('quizId', 'title classLevel'),
        QuizAttempt.countDocuments(filter)
      ]);

      return {
        items,
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error listing attempts: ${error.message}`);
    }
  }
}

module.exports = QuizRepository;
