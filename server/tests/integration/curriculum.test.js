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

describe('Curriculum API', () => {
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

  it('seeds class outline and lists topics', async () => {
    const seed = await request()
      .post('/api/curriculum/seed')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ replace: true });

    assert.ok([200, 201].includes(seed.status), `seed status ${seed.status}`);

    const topics = await request().get('/api/curriculum/topics?classLevel=1');
    assert.equal(topics.status, 200);
    const list = Array.isArray(topics.body.data)
      ? topics.body.data
      : topics.body.data?.items || [];
    assert.ok(list.length >= 1);
  });

  it('creates a topic as admin', async () => {
    const res = await request()
      .post('/api/curriculum/topics')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({
        classLevel: 5,
        title: 'Test Topic',
        slug: `test-topic-${Date.now()}`,
        category: 'COMPUTER BASICS',
        order: 1
      });

    assert.ok([200, 201].includes(res.status), JSON.stringify(res.body));
  });

  it('blocks student from seeding', async () => {
    const student = await createStudent();
    const res = await request()
      .post('/api/curriculum/seed')
      .set('Authorization', `Bearer ${student.token}`)
      .send({ replace: true });

    assert.equal(res.status, 403);
  });
});
