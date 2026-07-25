const CurriculumRepository = require('./curriculum.repository');

class CurriculumService {
  static listTopics(filters) {
    return CurriculumRepository.listTopics(filters);
  }

  static getById(id) {
    return CurriculumRepository.getById(id);
  }

  static createTopic(payload) {
    return CurriculumRepository.createTopic(payload);
  }

  static updateTopic(id, updates) {
    return CurriculumRepository.updateTopic(id, updates);
  }

  static deleteTopic(id) {
    return CurriculumRepository.deleteTopic(id);
  }

  static reorder(items) {
    return CurriculumRepository.reorder(items);
  }

  static seed(options) {
    return CurriculumRepository.seedFromOutline(options);
  }

  static classSummary() {
    return CurriculumRepository.classSummary();
  }
}

module.exports = CurriculumService;
