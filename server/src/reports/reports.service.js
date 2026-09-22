const ReportsRepository = require('./reports.repository');

class ReportsService {
  static listAttempts(filters) {
    return ReportsRepository.listAttempts(filters);
  }

  static getAttemptById(id) {
    return ReportsRepository.getAttemptById(id);
  }

  static deleteAttempt(id) {
    return ReportsRepository.deleteAttempt(id);
  }

  static summary() {
    return ReportsRepository.summary();
  }
}

module.exports = ReportsService;
