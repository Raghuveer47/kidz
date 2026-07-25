const mongoose = require('mongoose');

const CATEGORIES = [
  'COMPUTER BASICS',
  'CREATIVE TOOLS',
  'PROGRAMMING',
  'INTERNET',
  'AI'
];

/**
 * Curriculum topic — Class 1–10 outline (Career Master Topic pattern, kids-shaped).
 * Lesson body stays in frontend JSX for now; this CMS manages outline only.
 */
const topicSchema = new mongoose.Schema(
  {
    classLevel: {
      type: Number,
      required: [true, 'Class level is required'],
      min: 1,
      max: 10,
      index: true
    },
    title: {
      type: String,
      required: [true, 'Topic title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      trim: true,
      lowercase: true,
      maxlength: [220, 'Slug cannot exceed 220 characters']
    },
    category: {
      type: String,
      enum: {
        values: CATEGORIES,
        message: 'Invalid category'
      },
      required: [true, 'Category is required'],
      index: true
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: ''
    },
    order: {
      type: Number,
      required: true,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    },
    parentTopicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CurriculumTopic',
      default: null
    }
  },
  {
    timestamps: true,
    collection: 'curriculum_topics'
  }
);

topicSchema.index({ classLevel: 1, order: 1 });
topicSchema.index({ classLevel: 1, category: 1, order: 1 });
topicSchema.index({ classLevel: 1, slug: 1 }, { unique: true });
topicSchema.index({ parentTopicId: 1 });

module.exports = mongoose.model('CurriculumTopic', topicSchema);
module.exports.CATEGORIES = CATEGORIES;
