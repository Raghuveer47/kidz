const mongoose = require('mongoose');
const { QUESTION_TYPES, typeConfig } = require('./question-types.config');

/**
 * Kids Coding AI Quiz — Career Master question shape, kid-sized defaults.
 * Options and image-based questions behave the same as Career Master.
 */
const questionSchema = new mongoose.Schema(
  {
    questionType: {
      type: String,
      enum: Object.values(QUESTION_TYPES),
      default: QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE,
      required: true
    },
    questionText: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true,
      maxlength: [2000, 'Question cannot exceed 2000 characters']
    },
    /** Image shown with the question (required for image-based / labeling / hotspot) */
    imageUrl: {
      type: String,
      trim: true,
      default: '',
      required() {
        return typeConfig(this.questionType).requiresImage === true;
      }
    },
    options: {
      type: [String],
      default: [],
      validate: {
        validator(v) {
          if (!typeConfig(this.questionType).requiresOptions) return true;
          if (this.questionType === QUESTION_TYPES.TRUE_FALSE) {
            return Array.isArray(v) && v.length === 2;
          }
          return Array.isArray(v) && v.length >= 2 && v.length <= 6;
        },
        message: 'Questions need 2–6 options (True/False needs exactly 2)'
      }
    },
    /** Optional picture per option, same index as options */
    optionImages: {
      type: [String],
      default: []
    },
    correctOptionIndex: {
      type: Number,
      min: 0,
      required() {
        return typeConfig(this.questionType).requiresCorrectIndex === true;
      }
    },
    correctOptionIndices: {
      type: [Number],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresCorrectIndices === true;
      }
    },
    /** Accepted answers for fill in the blank / labeling */
    correctAnswers: {
      type: [String],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresCorrectAnswers === true;
      }
    },
    matchPairs: {
      type: [
        {
          left: { type: String, required: true, trim: true },
          right: { type: String, required: true, trim: true }
        }
      ],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresMatchPairs === true;
      }
    },
    correctOrder: {
      type: [String],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresCorrectOrder === true;
      }
    },
    categories: {
      type: [
        {
          name: { type: String, required: true, trim: true },
          items: { type: [String], default: [] }
        }
      ],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresCategories === true;
      }
    },
    hotspotRegions: {
      type: [
        {
          x: Number,
          y: Number,
          width: Number,
          height: Number,
          label: String
        }
      ],
      default: undefined,
      required() {
        return typeConfig(this.questionType).requiresHotspotRegions === true;
      }
    },
    passageText: {
      type: String,
      trim: true,
      maxlength: 10000,
      required() {
        return typeConfig(this.questionType).requiresPassage === true;
      }
    },
    marks: {
      type: Number,
      default: 1,
      min: 0
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'easy'
    },
    explanation: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: ''
    }
  },
  { _id: true }
);

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Quiz title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: ''
    },
    classLevel: {
      type: Number,
      required: [true, 'Class level is required'],
      min: 1,
      max: 10,
      index: true
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CurriculumTopic',
      default: null,
      index: true
    },
    topicSlug: {
      type: String,
      trim: true,
      lowercase: true,
      default: ''
    },
    questions: {
      type: [questionSchema],
      default: [],
      validate: {
        validator(v) {
          return Array.isArray(v) && v.length >= 1;
        },
        message: 'Quiz must have at least one question'
      }
    },
    isPublished: {
      type: Boolean,
      default: false,
      index: true
    },
    timeLimitMinutes: {
      type: Number,
      min: 0,
      default: 0
    },
    passPercent: {
      type: Number,
      min: 0,
      max: 100,
      default: 50
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    }
  },
  {
    timestamps: true,
    collection: 'quizzes'
  }
);

quizSchema.index({ classLevel: 1, isPublished: 1 });
quizSchema.index({ title: 'text' });

quizSchema.methods.totalMarks = function () {
  return (this.questions || []).reduce((sum, q) => sum + (q.marks || 1), 0);
};

/** Marks a student can actually earn — open ended answers are reviewed by a teacher. */
quizSchema.methods.autoGradedMarks = function () {
  return (this.questions || [])
    .filter((q) => typeConfig(q.questionType).autoGradable)
    .reduce((sum, q) => sum + (q.marks || 1), 0);
};

/** Safe payload for students taking a quiz (no answers). */
quizSchema.methods.toStudentJSON = function () {
  const obj = this.toObject();
  obj.questions = (obj.questions || []).map((q) => ({
    _id: q._id,
    questionType: q.questionType,
    questionText: q.questionText,
    imageUrl: q.imageUrl,
    passageText: q.passageText,
    options: q.options,
    optionImages: q.optionImages,
    marks: q.marks,
    difficulty: q.difficulty,
    // Prompts without revealing answers
    matchLeftItems: (q.matchPairs || []).map((p) => p.left),
    matchRightOptions: shuffle((q.matchPairs || []).map((p) => p.right)),
    reorderItems: shuffle(q.correctOrder || []),
    categoryNames: (q.categories || []).map((c) => c.name),
    categoryItems: shuffle((q.categories || []).flatMap((c) => c.items || [])),
    labelCount: (q.correctAnswers || []).length,
    hotspotCount: (q.hotspotRegions || []).length
  }));
  obj.totalMarks = this.totalMarks();
  return obj;
};

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = mongoose.model('Quiz', quizSchema);
