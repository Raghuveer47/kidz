const User = require('./users.model');
const CryptoUtil = require('../utils/crypto');
const { ErrorHandler } = require('../middleware/errorHandler');

/**
 * Users repository — DB only (Career Master pattern, kids filters).
 */
class UsersRepository {
  static async getUserById(id) {
    try {
      const user = await User.findById(id);
      if (!user) throw new ErrorHandler(404, 'User not found');
      return user;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error fetching user: ${error.message}`);
    }
  }

  static async getUsersPaginated({
    page = 1,
    limit = 10,
    search = '',
    role,
    status,
    batch,
    classLevel
  }) {
    try {
      const and = [];

      if (search) {
        and.push({
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { phone: { $regex: search, $options: 'i' } }
          ]
        });
      }

      if (role) and.push({ roles: role });
      if (status) and.push({ status });
      if (batch && String(batch).trim()) {
        and.push({ batches: String(batch).trim() });
      }
      if (classLevel !== undefined && classLevel !== null && String(classLevel).trim() !== '') {
        and.push({ classLevel: Number(classLevel) });
      }

      const filter = and.length ? { $and: and } : {};
      const skip = (page - 1) * limit;

      const [items, total] = await Promise.all([
        User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
        User.countDocuments(filter)
      ]);

      return {
        items,
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error fetching users: ${error.message}`);
    }
  }

  static async createUser({
    name,
    email,
    phone,
    password,
    roles = ['student'],
    batches = [],
    classLevel = null,
    parentId = null,
    status = 'active'
  }) {
    try {
      const existing = await User.findOne({ email: email.toLowerCase() });
      if (existing) {
        throw new ErrorHandler(409, 'User with this email already exists');
      }

      const passwordHash = await CryptoUtil.hashPassword(password);

      const user = new User({
        name,
        email: email.toLowerCase(),
        phone,
        passwordHash,
        roles,
        batches,
        classLevel,
        parentId: parentId || null,
        status,
        verification: { emailVerified: true }
      });

      return await user.save();
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      if (error.code === 11000) {
        throw new ErrorHandler(409, 'User with this email already exists');
      }
      throw new ErrorHandler(500, `Error creating user: ${error.message}`);
    }
  }

  static async updateUser(id, updates) {
    try {
      delete updates.passwordHash;
      delete updates.password;
      delete updates.email;

      const user = await User.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true
      });
      if (!user) throw new ErrorHandler(404, 'User not found');
      return user;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error updating user: ${error.message}`);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new ErrorHandler(404, 'User not found');
      return user;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error deleting user: ${error.message}`);
    }
  }
}

module.exports = UsersRepository;
