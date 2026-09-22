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

describe('Home CMS + Upload API', () => {
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

  it('allows public GET for home content', async () => {
    const res = await request().get('/api/home');
    assert.equal(res.status, 200);
    assert.equal(typeof res.body, 'object');
  });

  it('blocks unauthenticated home updates', async () => {
    const res = await request()
      .post('/api/home/testimonials')
      .send({ data: [{ name: 'X', text: 'Y' }] });
    assert.ok([401, 403].includes(res.status));
  });

  it('updates a home section as admin and reflects on public GET', async () => {
    const payload = [{ name: 'Test Kid', text: 'Loved coding!', role: 'Class 3' }];
    const update = await request()
      .post('/api/home/testimonials')
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ data: payload });

    assert.equal(update.status, 200, JSON.stringify(update.body));

    const pub = await request().get('/api/home');
    assert.equal(pub.status, 200);
    assert.ok(Array.isArray(pub.body.testimonials));
    assert.ok(pub.body.testimonials.some((t) => t.name === 'Test Kid'));
  });

  it('lists allowed home sections for admin', async () => {
    const res = await request()
      .get('/api/home/admin/sections')
      .set('Authorization', `Bearer ${admin.token}`);

    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.body.data.allowedSections));
    assert.ok(res.body.data.allowedSections.includes('testimonials'));
  });

  it('forbids students from updating home', async () => {
    const res = await request()
      .post('/api/home/counters')
      .set('Authorization', `Bearer ${student.token}`)
      .send({ data: { students: 10 } });
    assert.equal(res.status, 403);
  });

  it('upload requires admin and a file', async () => {
    const noAuth = await request().post('/api/upload/image');
    assert.equal(noAuth.status, 401);

    const studentUpload = await request()
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${student.token}`);
    assert.equal(studentUpload.status, 403);

    const noFile = await request()
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(noFile.status, 400);
  });

  it('rejects non-image uploads', async () => {
    const res = await request()
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${admin.token}`)
      .attach('image', Buffer.from('not-an-image'), {
        filename: 'notes.txt',
        contentType: 'text/plain'
      });

    assert.ok(res.status >= 400);
  });
});
