const Batch = require('./batches.model');
const User = require('../user/users.model');
const { ErrorHandler } = require('../middleware/errorHandler');

class BatchesRepository {
  static async createBatch(data) {
    try {
      return await new Batch(data).save();
    } catch (error) {
      if (error.code === 11000) throw new ErrorHandler(409, 'Batch code must be unique');
      throw new ErrorHandler(500, `Error creating batch: ${error.message}`);
    }
  }

  static async updateBatch(id, updates) {
    try {
      const unsetFields = {};
      const updateFields = { ...updates };
      if (updates.startDate === null) {
        unsetFields.startDate = '';
        delete updateFields.startDate;
      }
      if (updates.endDate === null) {
        unsetFields.endDate = '';
        delete updateFields.endDate;
      }
      const updateObj = { ...updateFields };
      if (Object.keys(unsetFields).length) updateObj.$unset = unsetFields;

      return await Batch.findByIdAndUpdate(id, updateObj, { new: true, runValidators: true });
    } catch (error) {
      throw new ErrorHandler(500, `Error updating batch: ${error.message}`);
    }
  }

  static async deleteBatch(id) {
    try {
      const batch = await Batch.findByIdAndDelete(id);
      if (!batch) throw new ErrorHandler(404, 'Batch not found');
      await User.updateMany({ batches: batch.code }, { $pull: { batches: batch.code } });
      return batch;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error deleting batch: ${error.message}`);
    }
  }

  static async getBatchById(id) {
    try {
      return await Batch.findById(id);
    } catch (error) {
      throw new ErrorHandler(500, `Error fetching batch: ${error.message}`);
    }
  }

  static async getBatchByCode(code) {
    try {
      return await Batch.findOne({ code });
    } catch (error) {
      throw new ErrorHandler(500, `Error fetching batch: ${error.message}`);
    }
  }

  static async getBatchesPaginated({ page = 1, limit = 20, search = '' } = {}) {
    try {
      const filter = {};
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { code: { $regex: search, $options: 'i' } }
        ];
      }
      const skip = (page - 1) * limit;
      const [items, total] = await Promise.all([
        Batch.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
        Batch.countDocuments(filter)
      ]);
      return {
        items,
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit) || 1)
      };
    } catch (error) {
      throw new ErrorHandler(500, `Error fetching batches: ${error.message}`);
    }
  }

  static async addStudentsToBatch(batchCode, userIds = []) {
    try {
      if (!batchCode || !userIds.length) return;
      await User.updateMany({ _id: { $in: userIds } }, { $addToSet: { batches: batchCode } });
    } catch (error) {
      throw new ErrorHandler(500, `Error adding students to batch: ${error.message}`);
    }
  }

  static async removeStudentsFromBatch(batchCode, userIds = []) {
    try {
      if (!batchCode || !userIds.length) return;
      await User.updateMany({ _id: { $in: userIds } }, { $pull: { batches: batchCode } });
    } catch (error) {
      throw new ErrorHandler(500, `Error removing students from batch: ${error.message}`);
    }
  }

  static async getStudentsPaginated({ page = 1, limit = 20, search = '', batchCode } = {}) {
    try {
      const filter = {};
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ];
      }
      if (batchCode) filter.batches = batchCode;

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
      throw new ErrorHandler(500, `Error fetching students: ${error.message}`);
    }
  }
}

module.exports = BatchesRepository;
