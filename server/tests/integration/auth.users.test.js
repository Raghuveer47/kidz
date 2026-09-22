const { describe, it, before, after, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const {
  connectTestDb,
  clearCollections,
  disconnectTestDb,
  request,
  createAdmin,
  createStudent
} = require('../helpers/setup');

describe('Auth API', () => {
  before(async () => {
    await connectTestDb();
  });

  beforeEach(async () => {
    await clearCollections();
  });

  after(async () => {
    await disconnectTestDb();
  });

  it('signs up a student directly', async () => {
    const email = `signup_${Date.now()}@test.local`;
    const res = await request()
      .post('/api/auth/signup-direct')
      .send({
        name: 'New Kid',
        email,
        password: 'Student@12345',
        classLevel: 4
      });

    assert.equal(res.status, 201);
    assert.equal(res.body.success, true);
    assert.ok(res.body.data.tokens.accessToken);
    assert.equal(res.body.data.user.email, email);
  });

  it('logs in with email and password', async () => {
    const student = await createStudent();
    const res = await request()
      .post('/api/auth/login')
      .send({ email: student.user.email, password: 'Student@12345' });

    assert.equal(res.status, 200);
    assert.ok(res.body.data.tokens.accessToken);
  });

  it('rejects bad password', async () => {
    const student = await createStudent();
    const res = await request()
      .post('/api/auth/login')
      .send({ email: student.user.email, password: 'WrongPass1!' });

    assert.ok(res.status >= 400);
  });

  it('returns current user with /me', async () => {
    const student = await createStudent();
    const res = await request()
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${student.token}`);

    assert.equal(res.status, 200);
    assert.equal(res.body.data.user.email, student.user.email);
  });

  it('blocks /me without token', async () => {
    const res = await request().get('/api/auth/me');
    assert.equal(res.status, 401);
  });
});

describe('Users admin API', () => {
  let admin;

  before(async () => {
    await connectTestDb();
  });

  beforeEach(async () => {
    await clearCollections();
    admin = await createAdmin();
  });

  after(async () => {
    await disconnectTestDb();
  });

  it('lists users for admin', async () => {
    await createStudent();
    const res = await request()
      .get('/api/users?limit=20')
      .set('Authorization', `Bearer ${admin.token}`);

    assert.equal(res.status, 200);
    assert.ok((res.body.data.items || []).length >= 1);
  });

  it('forbids students from listing users', async () => {
    const student = await createStudent();
    const res = await request()
      .get('/api/users')
      .set('Authorization', `Bearer ${student.token}`);

    assert.equal(res.status, 403);
  });

  it('creates a user as admin', async () => {
    const email = `created_${Date.now()}@test.local`;
    const res = await request()
      .post('/api/users')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({
        name: 'Created Student',
        email,
        password: 'Student@12345',
        roles: ['student'],
        classLevel: 2
      });

    assert.ok([200, 201].includes(res.status));
    const emailOut = res.body.data?.email || res.body.data?.user?.email;
    assert.equal(emailOut, email);
  });
});
