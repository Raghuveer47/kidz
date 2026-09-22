const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Batch name is required'],
      trim: true,
      maxlength: 100
    },
    code: {
      type: String,
      required: [true, 'Batch code is required'],
      trim: true,
      maxlength: 50
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ''
    },
    /** Optional school class this batch maps to (1–10) */
    classLevel: {
      type: Number,
      min: 1,
      max: 10,
      default: null
    },
    startDate: { type: Date },
    endDate: { type: Date },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true, collection: 'batches' }
);

batchSchema.index({ code: 1 }, { unique: true });
batchSchema.index({ isActive: 1 });
batchSchema.index({ classLevel: 1 });

module.exports = mongoose.model('Batch', batchSchema);
