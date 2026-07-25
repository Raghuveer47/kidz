const UsersRepository = require('./users.repository');

/**
 * Users service — business layer (thin, Career Master style).
 */
class UsersService {
  static getUserById(id) {
    return UsersRepository.getUserById(id);
  }

  static listUsers(filters) {
    return UsersRepository.getUsersPaginated(filters);
  }

  static createUser(payload) {
    return UsersRepository.createUser(payload);
  }

  static updateUser(id, updates) {
    return UsersRepository.updateUser(id, updates);
  }

  static deleteUser(id) {
    return UsersRepository.deleteUser(id);
  }
}

module.exports = UsersService;
