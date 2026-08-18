const mongoose = require('mongoose');

/**
 * Quiz attempt — one student submission for a quiz.
 */
const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    /** Shape depends on question type: index, indices, text, order, or category map */
    answer: {
      type: mongoose.Schema.Types.Mixed,
      default: null
    },
    isCorrect: {
      type: Boolean,
      default: false
    },
    marksAwarded: {
      type: Number,
      default: 0
    },
    /** False for open ended answers that a teacher must review */
    autoGraded: {
      type: Boolean,
      default: true
    }
  },
  { _id: false }
);

const quizAttemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
      index: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    answers: {
      type: [answerSchema],
      default: []
    },
    score: {
      type: Number,
      default: 0
    },
    maxScore: {
      type: Number,
      default: 0
    },
    percent: {
      type: Number,
      default: 0
    },
    passed: {
      type: Boolean,
      default: false
    },
    /** Open ended answers awaiting teacher review */
    pendingReview: {
      type: Number,
      default: 0
    },
    classLevel: {
      type: Number,
      min: 1,
      max: 10
    }
  },
  {
    timestamps: true,
    collection: 'quiz_attempts'
  }
);

quizAttemptSchema.index({ quizId: 1, userId: 1, createdAt: -1 });

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
