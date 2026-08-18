const QuizRepository = require('./quiz.repository');
const { isAdminUser } = require('../middleware/rbac.middleware');
const { ErrorHandler } = require('../middleware/errorHandler');

class QuizService {
  static list(filters, user) {
    const publishedOnly = filters.publishedOnly === true || filters.publishedOnly === 'true';
    // Non-admins only see published quizzes
    if (!isAdminUser(user)) {
      return QuizRepository.list({ ...filters, publishedOnly: true });
    }
    return QuizRepository.list({ ...filters, publishedOnly });
  }

  static async getById(id, user) {
    const quiz = await QuizRepository.getById(id);
    if (!isAdminUser(user)) {
      if (!quiz.isPublished) {
        throw new ErrorHandler(403, 'This quiz is not published yet');
      }
      return quiz.toStudentJSON();
    }
    const obj = quiz.toObject();
    obj.totalMarks = quiz.totalMarks();
    return obj;
  }

  static create(payload, userId) {
    return QuizRepository.create(payload, userId);
  }

  static update(id, updates) {
    return QuizRepository.update(id, updates);
  }

  static delete(id) {
    return QuizRepository.delete(id);
  }

  static submitAttempt(quizId, userId, answers) {
    return QuizRepository.submitAttempt(quizId, userId, answers);
  }

  static listAttempts(filters, user) {
    // Non-admins can only see their own attempts
    if (!isAdminUser(user)) {
      return QuizRepository.listAttempts({
        ...filters,
        userId: user.userId
      });
    }
    return QuizRepository.listAttempts(filters);
  }
}

module.exports = QuizService;
