const mongoose = require('mongoose');

/**
 * Student progress for a curriculum topic / quiz.
 * Upserted when a quiz attempt is submitted.
 */
const topicProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CurriculumTopic',
      default: null
    },
    topicSlug: {
      type: String,
      trim: true,
      default: ''
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
      index: true
    },
    classLevel: {
      type: Number,
      min: 1,
      max: 10
    },
    bestPercent: {
      type: Number,
      default: 0
    },
    bestScore: {
      type: Number,
      default: 0
    },
    maxScore: {
      type: Number,
      default: 0
    },
    attempts: {
      type: Number,
      default: 0
    },
    passed: {
      type: Boolean,
      default: false
    },
    lastAttemptAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true, collection: 'topic_progress' }
);

topicProgressSchema.index({ userId: 1, quizId: 1 }, { unique: true });
topicProgressSchema.index({ classLevel: 1 });
topicProgressSchema.index({ topicSlug: 1 });

module.exports = mongoose.model('TopicProgress', topicProgressSchema);
