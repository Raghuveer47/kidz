const BatchesRepository = require('./batches.repository');
const { ErrorHandler } = require('../middleware/errorHandler');

class BatchesService {
  static async createBatch(payload) {
    const data = {
      name: payload.name,
      code: String(payload.code).trim().toUpperCase(),
      description: payload.description || '',
      classLevel: payload.classLevel ?? null,
      isActive: payload.isActive !== undefined ? payload.isActive : true
    };
    if (payload.startDate) data.startDate = new Date(payload.startDate);
    if (payload.endDate) data.endDate = new Date(payload.endDate);
    return BatchesRepository.createBatch(data);
  }

  static async updateBatch(id, payload) {
    const updates = { ...payload };
    if (updates.code) updates.code = String(updates.code).trim().toUpperCase();
    if ('startDate' in updates) {
      updates.startDate = updates.startDate ? new Date(updates.startDate) : null;
    }
    if ('endDate' in updates) {
      updates.endDate = updates.endDate ? new Date(updates.endDate) : null;
    }
    const batch = await BatchesRepository.updateBatch(id, updates);
    if (!batch) throw new ErrorHandler(404, 'Batch not found');
    return batch;
  }

  static deleteBatch(id) {
    return BatchesRepository.deleteBatch(id);
  }

  static async getBatchById(id) {
    const batch = await BatchesRepository.getBatchById(id);
    if (!batch) throw new ErrorHandler(404, 'Batch not found');
    return batch;
  }

  static getBatches(params) {
    return BatchesRepository.getBatchesPaginated(params);
  }

  static async addStudentsToBatch(batchCode, userIds) {
    const batch = await BatchesRepository.getBatchByCode(batchCode);
    if (!batch) throw new ErrorHandler(404, 'Batch not found');
    await BatchesRepository.addStudentsToBatch(batch.code, userIds);
  }

  static async removeStudentsFromBatch(batchCode, userIds) {
    const batch = await BatchesRepository.getBatchByCode(batchCode);
    if (!batch) throw new ErrorHandler(404, 'Batch not found');
    await BatchesRepository.removeStudentsFromBatch(batch.code, userIds);
  }

  static getStudentsPaginated(params) {
    return BatchesRepository.getStudentsPaginated(params);
  }
}

module.exports = BatchesService;
