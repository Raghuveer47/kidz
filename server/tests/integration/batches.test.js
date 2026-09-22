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

describe('Batches API', () => {
  let admin;
  let student;

  before(async () => {
    await connectTestDb();
  });

  beforeEach(async () => {
    await clearCollections();
    admin = await createAdmin();
    student = await createStudent();
  });

  after(async () => {
    await disconnectTestDb();
  });

  it('requires auth', async () => {
    const res = await request().get('/api/batches');
    assert.equal(res.status, 401);
  });

  it('creates, lists, enrolls, removes, and deletes a batch', async () => {
    const code = `B${Date.now().toString().slice(-6)}`;
    const created = await request()
      .post('/api/batches')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({
        name: 'Summer Test',
        code,
        description: 'e2e batch',
        classLevel: 3,
        isActive: true
      });

    assert.equal(created.status, 201);
    assert.equal(created.body.data.code, code);

    const list = await request()
      .get('/api/batches')
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(list.status, 200);
    assert.ok(list.body.data.items.some((b) => b.code === code));

    const add = await request()
      .post(`/api/batches/${code}/students`)
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ userIds: [student.user._id || student.user.id] });
    assert.equal(add.status, 200);

    const members = await request()
      .get(`/api/batches/students/paginated?batchCode=${code}`)
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(members.status, 200);
    assert.ok(members.body.data.items.length >= 1);

    const remove = await request()
      .delete(`/api/batches/${code}/students`)
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ userIds: [student.user._id || student.user.id] });
    assert.equal(remove.status, 200);

    const del = await request()
      .delete(`/api/batches/${created.body.data._id}`)
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(del.status, 200);
  });

  it('rejects duplicate batch codes', async () => {
    const code = `DUP${Date.now().toString().slice(-5)}`;
    await request()
      .post('/api/batches')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ name: 'One', code, isActive: true });

    const again = await request()
      .post('/api/batches')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ name: 'Two', code, isActive: true });

    assert.equal(again.status, 409);
  });

  it('forbids students from managing batches', async () => {
    const res = await request()
      .post('/api/batches')
      .set('Authorization', `Bearer ${student.token}`)
      .send({ name: 'Nope', code: 'NOPE1', isActive: true });

    assert.equal(res.status, 403);
  });
});
