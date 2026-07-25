const CurriculumTopic = require('./curriculum.model');
const { flattenOutline, slugify } = require('./curriculum.seed-data');
const { ErrorHandler } = require('../middleware/errorHandler');

class CurriculumRepository {
  static async listTopics({ classLevel, category, activeOnly = false } = {}) {
    try {
      const filter = {};
      if (classLevel !== undefined && classLevel !== null && String(classLevel).trim() !== '') {
        filter.classLevel = Number(classLevel);
      }
      if (category) filter.category = category;
      if (activeOnly) filter.isActive = true;

      return await CurriculumTopic.find(filter).sort({ classLevel: 1, order: 1, title: 1 });
    } catch (error) {
      throw new ErrorHandler(500, `Error listing topics: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const topic = await CurriculumTopic.findById(id);
      if (!topic) throw new ErrorHandler(404, 'Topic not found');
      return topic;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error fetching topic: ${error.message}`);
    }
  }

  static async createTopic(payload) {
    try {
      const title = payload.title.trim();
      const slug = (payload.slug || slugify(title)).toLowerCase();
      const classLevel = Number(payload.classLevel);

      const existing = await CurriculumTopic.findOne({ classLevel, slug });
      if (existing) {
        throw new ErrorHandler(409, 'A topic with this slug already exists in this class');
      }

      let order = payload.order;
      if (order === undefined || order === null) {
        const last = await CurriculumTopic.findOne({ classLevel }).sort({ order: -1 }).select('order');
        order = (last?.order ?? -1) + 1;
      }

      const topic = new CurriculumTopic({
        classLevel,
        title,
        slug,
        category: payload.category,
        description: payload.description || '',
        order,
        isActive: payload.isActive !== false,
        parentTopicId: payload.parentTopicId || null
      });

      return await topic.save();
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      if (error.code === 11000) {
        throw new ErrorHandler(409, 'A topic with this slug already exists in this class');
      }
      throw new ErrorHandler(500, `Error creating topic: ${error.message}`);
    }
  }

  static async updateTopic(id, updates) {
    try {
      if (updates.title && !updates.slug) {
        updates.slug = slugify(updates.title);
      }
      if (updates.slug) updates.slug = String(updates.slug).toLowerCase();

      if (updates.slug || updates.classLevel) {
        const current = await CurriculumTopic.findById(id);
        if (!current) throw new ErrorHandler(404, 'Topic not found');
        const classLevel = updates.classLevel ?? current.classLevel;
        const slug = updates.slug ?? current.slug;
        const clash = await CurriculumTopic.findOne({
          classLevel,
          slug,
          _id: { $ne: id }
        });
        if (clash) {
          throw new ErrorHandler(409, 'A topic with this slug already exists in this class');
        }
      }

      const topic = await CurriculumTopic.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true
      });
      if (!topic) throw new ErrorHandler(404, 'Topic not found');
      return topic;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error updating topic: ${error.message}`);
    }
  }

  static async deleteTopic(id) {
    try {
      const topic = await CurriculumTopic.findByIdAndDelete(id);
      if (!topic) throw new ErrorHandler(404, 'Topic not found');
      await CurriculumTopic.updateMany({ parentTopicId: id }, { parentTopicId: null });
      return topic;
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error deleting topic: ${error.message}`);
    }
  }

  static async reorder(items) {
    try {
      await Promise.all(
        items.map(({ id, order }) =>
          CurriculumTopic.findByIdAndUpdate(id, { order }, { new: true })
        )
      );
      return true;
    } catch (error) {
      throw new ErrorHandler(500, `Error reordering topics: ${error.message}`);
    }
  }

  static async seedFromOutline({ replace = true } = {}) {
    try {
      if (replace) {
        await CurriculumTopic.deleteMany({});
      }
      const rows = flattenOutline();
      const inserted = await CurriculumTopic.insertMany(rows);
      return { count: inserted.length };
    } catch (error) {
      throw new ErrorHandler(500, `Error seeding curriculum: ${error.message}`);
    }
  }

  static async classSummary() {
    try {
      const rows = await CurriculumTopic.aggregate([
        {
          $group: {
            _id: '$classLevel',
            total: { $sum: 1 },
            active: { $sum: { $cond: ['$isActive', 1, 0] } }
          }
        },
        { $sort: { _id: 1 } }
      ]);
      return rows.map((r) => ({
        classLevel: r._id,
        total: r.total,
        active: r.active
      }));
    } catch (error) {
      throw new ErrorHandler(500, `Error loading class summary: ${error.message}`);
    }
  }
}

module.exports = CurriculumRepository;
