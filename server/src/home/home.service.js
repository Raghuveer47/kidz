const { HomeRepository, ALLOWED_SECTIONS } = require('./home.repository');

class HomeService {
  static getPublic() {
    return HomeRepository.getAllSections();
  }

  static listSections() {
    return HomeRepository.listSections();
  }

  static updateSection(section, data) {
    return HomeRepository.upsertSection(section, data);
  }

  static allowedSections() {
    return ALLOWED_SECTIONS;
  }
}

module.exports = HomeService;
