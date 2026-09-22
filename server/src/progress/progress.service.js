const ProgressRepository = require('./progress.repository');

class ProgressService {
  static recordAttempt(payload) {
    return ProgressRepository.upsertFromAttempt(payload);
  }

  static list(filters) {
    return ProgressRepository.list(filters);
  }

  static summary() {
    return ProgressRepository.summary();
  }
}

module.exports = ProgressService;
