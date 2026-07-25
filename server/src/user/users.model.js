const mongoose = require('mongoose');

/**
 * Kids Coding AI User
 * Same auth shape as Career Master, profile tuned for kids/parents.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      maxlength: [20, 'Phone number cannot exceed 20 characters']
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required'],
      select: false
    },
    profilePicture: {
      type: String,
      trim: true
    },
    /** School / summer batch codes */
    batches: {
      type: [String],
      default: []
    },
    roles: {
      type: [String],
      default: ['student'],
      enum: {
        values: [
          'super_admin',
          'content_admin',
          'parent',
          'subscriber',
          'student'
        ],
        message: 'Invalid role provided'
      }
    },
    /** Child's school class 1–10 (optional on parent accounts) */
    classLevel: {
      type: Number,
      min: 1,
      max: 10,
      default: null
    },
    /** Link child → parent account */
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    profile: {
      firstName: { type: String, trim: true, maxlength: 100 },
      lastName: { type: String, trim: true, maxlength: 100 },
      dateOfBirth: { type: Date },
      gender: {
        type: String,
        enum: ['male', 'female', 'other', 'prefer_not_to_say'],
        trim: true
      },
      guardianName: { type: String, trim: true, maxlength: 200 },
      guardianRelation: {
        type: String,
        enum: ['father', 'mother', 'guardian'],
        trim: true
      },
      schoolName: { type: String, trim: true, maxlength: 300 },
      city: { type: String, trim: true, maxlength: 100 },
      interests: { type: [String], default: [] }
    },
    verification: {
      emailVerified: { type: Boolean, default: false },
      otp: { type: String, select: false },
      otpExpiry: { type: Date, select: false }
    },
    status: {
      type: String,
      enum: ['active', 'banned'],
      default: 'active'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ status: 1 });
userSchema.index({ roles: 1 });
userSchema.index({ classLevel: 1 });
userSchema.index({ parentId: 1 });
userSchema.index({ batches: 1 });

userSchema.methods.isEmailVerified = function () {
  return this.verification?.emailVerified === true;
};

userSchema.methods.isActive = function () {
  return this.status === 'active';
};

userSchema.methods.hasRole = function (role) {
  return this.roles.includes(role);
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.passwordHash;
  if (obj.verification) {
    delete obj.verification.otp;
    delete obj.verification.otpExpiry;
  }
  return obj;
};

module.exports = mongoose.model('User', userSchema);
