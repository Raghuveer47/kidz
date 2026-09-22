const xlsx = require('xlsx');
const QuizRepository = require('./quiz.repository');
const ProgressService = require('../progress/progress.service');
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

  static async submitAttempt(quizId, userId, answers) {
    const result = await QuizRepository.submitAttempt(quizId, userId, answers);
    try {
      await ProgressService.recordAttempt({
        userId,
        quiz: result.quiz,
        attempt: result.attempt
      });
    } catch {
      // Progress is best-effort; do not fail the graded attempt
    }
    return result;
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

  /** Import MCQ / true-false questions from a simple Excel sheet. */
  static async createFromExcel(fileBuffer, metadata = {}, userId) {
    if (!fileBuffer) throw new ErrorHandler(400, 'Excel file is required');

    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' });
    if (!rows.length) throw new ErrorHandler(400, 'Excel file is empty');

    const questions = [];
    for (const row of rows) {
      const questionText = row.question || row.Question || row.QUESTION;
      if (!questionText) continue;

      const optionA = row.optionA || row.OptionA || row.A || '';
      const optionB = row.optionB || row.OptionB || row.B || '';
      const optionC = row.optionC || row.OptionC || row.C || '';
      const optionD = row.optionD || row.OptionD || row.D || '';
      const correctOption = String(
        row.correctOption || row.Correct || row.correct || ''
      )
        .trim()
        .toUpperCase();
      const questionType = String(row.type || row.Type || row.TYPE || 'multiple_choice_single')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_');
      const rawMarks = row.marks ?? row.Marks;
      const marks =
        rawMarks !== '' && rawMarks != null && !Number.isNaN(Number(rawMarks))
          ? Number(rawMarks)
          : Number(metadata.defaultMarks || 1);

      let finalType = 'multiple_choice_single';
      if (
        questionType.includes('true_false') ||
        questionType === 'tf' ||
        (questionType.includes('true') && questionType.includes('false'))
      ) {
        finalType = 'true_false';
      } else if (
        questionType.includes('multiple_choice_multiple') ||
        questionType.includes('multi_correct') ||
        questionType.includes('multiple_correct') ||
        (questionType.includes('multiple') && !questionType.includes('single')) ||
        questionType === 'multi'
      ) {
        finalType = 'multiple_choice_multiple';
      }

      if (finalType === 'true_false') {
        let correctIndex = 1;
        if (correctOption === 'A' || correctOption.includes('TRUE') || correctOption === 'T') {
          correctIndex = 0;
        } else if (
          correctOption === 'B' ||
          correctOption.includes('FALSE') ||
          correctOption === 'F'
        ) {
          correctIndex = 1;
        }
        questions.push({
          questionType: 'true_false',
          questionText: String(questionText).trim(),
          options: ['True', 'False'],
          correctOptionIndex: correctIndex,
          marks
        });
        continue;
      }

      if (!optionA || !optionB) continue;
      const options = [optionA, optionB];
      if (optionC) options.push(optionC);
      if (optionD) options.push(optionD);
      const correctIndexMap = { A: 0, B: 1, C: 2, D: 3 };

      if (finalType === 'multiple_choice_multiple') {
        const indices = correctOption
          .split(/[,;]/)
          .map((opt) => correctIndexMap[opt.trim()[0]?.toUpperCase()])
          .filter((idx) => idx !== undefined);
        if (!indices.length) continue;
        questions.push({
          questionType: 'multiple_choice_multiple',
          questionText: String(questionText).trim(),
          options,
          correctOptionIndices: indices,
          marks
        });
      } else {
        const letter = (correctOption.split(/[,;]/)[0] || '').trim()[0];
        const correctOptionIndex = correctIndexMap[letter];
        if (correctOptionIndex === undefined) continue;
        questions.push({
          questionType: 'multiple_choice_single',
          questionText: String(questionText).trim(),
          options,
          correctOptionIndex,
          marks
        });
      }
    }

    if (!questions.length) {
      throw new ErrorHandler(400, 'No valid questions found in Excel file');
    }

    const title =
      metadata.title || rows[0].title || rows[0].Title || 'Imported Quiz';
    const classLevel = Number(metadata.classLevel || rows[0].classLevel || 1);

    return QuizRepository.create(
      {
        title: String(title).trim(),
        description: metadata.description || 'Imported from Excel',
        classLevel: Number.isNaN(classLevel) ? 1 : Math.min(10, Math.max(1, classLevel)),
        topicSlug: metadata.topicSlug || '',
        isPublished: metadata.isPublished === true || metadata.isPublished === 'true',
        timeLimitMinutes: Number(metadata.timeLimitMinutes || 10),
        passPercent: Number(metadata.passPercent || 50),
        questions
      },
      userId
    );
  }
}

module.exports = QuizService;
