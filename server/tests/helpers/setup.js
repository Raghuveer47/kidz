/**
 * Shared test helpers — connect to kidstechguru_test, seed users, wrap Express app.
 */
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI =
  process.env.MONGODB_URI_TEST ||
  process.env.MONGO_URI_TEST ||
  'mongodb://127.0.0.1:27017/kidstechguru_test';
process.env.JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'test-access-secret';
process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'test-refresh-secret';
process.env.BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS || '4';

const mongoose = require('mongoose');
const request = require('supertest');
const CryptoUtil = require('../../src/utils/crypto');
const User = require('../../src/user/users.model');

let app;

async function connectTestDb() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000
  });
}

async function clearCollections() {
  const collections = mongoose.connection.collections;
  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
}

async function disconnectTestDb() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  }
}

function getApp() {
  if (!app) {
    // Load app after env is set so config picks up test URI/secrets
    // eslint-disable-next-line global-require
    app = require('../../src/app');
  }
  return app;
}

async function createUser({
  email,
  password = 'Test@12345',
  name = 'Test User',
  roles = ['student'],
  classLevel = 3
} = {}) {
  const passwordHash = await CryptoUtil.hashPassword(password);
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    passwordHash,
    roles,
    classLevel,
    status: 'active',
    verification: { emailVerified: true }
  });
  return { user, password };
}

async function loginAs(email, password = 'Test@12345') {
  const res = await request(getApp()).post('/api/auth/login').send({ email, password });
  if (res.status !== 200) {
    throw new Error(`Login failed for ${email}: ${res.status} ${JSON.stringify(res.body)}`);
  }
  return {
    token: res.body.data.tokens.accessToken,
    user: res.body.data.user,
    refreshToken: res.body.data.tokens.refreshToken
  };
}

async function createAdmin() {
  const email = `admin_${Date.now()}@test.local`;
  await createUser({
    email,
    password: 'Admin@12345',
    name: 'Test Admin',
    roles: ['super_admin']
  });
  return loginAs(email, 'Admin@12345');
}

async function createStudent(overrides = {}) {
  const email = overrides.email || `student_${Date.now()}@test.local`;
  await createUser({
    email,
    password: 'Student@12345',
    name: overrides.name || 'Test Student',
    roles: ['student'],
    classLevel: overrides.classLevel ?? 3
  });
  return loginAs(email, 'Student@12345');
}

module.exports = {
  connectTestDb,
  clearCollections,
  disconnectTestDb,
  getApp,
  createUser,
  loginAs,
  createAdmin,
  createStudent,
  request: () => request(getApp())
};
