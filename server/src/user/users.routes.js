const express = require('express');
const UsersController = require('./users.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { requireAdmin } = require('../middleware/rbac.middleware');
const {
  createUserSchema,
  updateUserSchema,
  listUsersSchema,
  getUserByIdSchema,
  validate
} = require('./users.validation');

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get('/', validate(listUsersSchema), UsersController.listUsers);
router.get('/:id', validate(getUserByIdSchema), UsersController.getUserById);
router.post('/', validate(createUserSchema), UsersController.createUser);
router.put('/:id', validate(updateUserSchema), UsersController.updateUser);
router.delete('/:id', validate(getUserByIdSchema), UsersController.deleteUser);

module.exports = router;
