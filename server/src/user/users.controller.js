const UsersService = require('./users.service');
const { asyncHandler } = require('../middleware/errorHandler');

class UsersController {
  static getUserById = asyncHandler(async (req, res) => {
    const user = await UsersService.getUserById(req.params.id);
    res.status(200).json({
      success: true,
      data: user
    });
  });

  static listUsers = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 10, 100);
    const search = req.query.search || '';
    const role = req.query.role;
    const status = req.query.status;
    const batch = req.query.batch;
    const classLevel = req.query.classLevel;

    const result = await UsersService.listUsers({
      page,
      limit,
      search,
      role,
      status,
      batch,
      classLevel
    });

    res.status(200).json({
      success: true,
      data: result
    });
  });

  static createUser = asyncHandler(async (req, res) => {
    const user = await UsersService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  });

  static updateUser = asyncHandler(async (req, res) => {
    const user = await UsersService.updateUser(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  });

  static deleteUser = asyncHandler(async (req, res) => {
    await UsersService.deleteUser(req.params.id);
    res.status(200).json({ success: true, message: 'User deleted' });
  });
}

module.exports = UsersController;
