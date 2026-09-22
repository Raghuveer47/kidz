const HomePageContent = require('../../models/HomePageContent');
const { ErrorHandler } = require('../middleware/errorHandler');

const ALLOWED_SECTIONS = [
  'scrollable_images',
  'counters',
  'updates',
  'top_performers',
  'testimonials',
  'quotes',
  'certification',
  'summer_training'
];

class HomeRepository {
  static async getAllSections() {
    try {
      const sections = await HomePageContent.find();
      return sections.reduce((acc, current) => {
        acc[current.section] = current.data;
        return acc;
      }, {});
    } catch (error) {
      throw new ErrorHandler(500, `Error loading home content: ${error.message}`);
    }
  }

  static async listSections() {
    try {
      return await HomePageContent.find().sort({ section: 1 });
    } catch (error) {
      throw new ErrorHandler(500, `Error listing home sections: ${error.message}`);
    }
  }

  static async upsertSection(section, data) {
    try {
      if (!ALLOWED_SECTIONS.includes(section)) {
        throw new ErrorHandler(400, `Unknown section. Allowed: ${ALLOWED_SECTIONS.join(', ')}`);
      }
      return await HomePageContent.findOneAndUpdate(
        { section },
        { data, updatedAt: Date.now() },
        { new: true, upsert: true }
      );
    } catch (error) {
      if (error instanceof ErrorHandler) throw error;
      throw new ErrorHandler(500, `Error updating home section: ${error.message}`);
    }
  }
}

module.exports = { HomeRepository, ALLOWED_SECTIONS };
