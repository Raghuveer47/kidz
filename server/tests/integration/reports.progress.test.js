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

async function createPublishedQuiz(adminToken) {
  const res = await request()
    .post('/api/quizzes')
    .set('Authorization', `Bearer ${adminToken}`)
    .send({
      title: `Report Quiz ${Date.now()}`,
      classLevel: 3,
      isPublished: true,
      passPercent: 50,
      questions: [
        {
          questionType: 'multiple_choice_single',
          questionText: '2 + 2?',
          options: ['3', '4', '5', '6'],
          correctOptionIndex: 1,
          marks: 1
        }
      ]
    });
  assert.equal(res.status, 201);
  return res.body.data;
}

describe('Reports + Progress API', () => {
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

  it('lists attempts in reports after submit', async () => {
    const quiz = await createPublishedQuiz(admin.token);
    const view = await request()
      .get(`/api/quizzes/${quiz._id}`)
      .set('Authorization', `Bearer ${student.token}`);
    const qid = view.body.data.questions[0]._id;

    const attempt = await request()
      .post(`/api/quizzes/${quiz._id}/attempt`)
      .set('Authorization', `Bearer ${student.token}`)
      .send({ answers: [{ questionId: qid, answer: 1 }] });
    assert.equal(attempt.status, 201);

    const list = await request()
      .get('/api/reports/attempts')
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(list.status, 200);
    assert.ok(list.body.data.items.length >= 1);

    const summary = await request()
      .get('/api/reports/summary')
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(summary.status, 200);
    assert.ok(summary.body.data.totalAttempts >= 1);

    const attemptId = list.body.data.items[0]._id;
    const detail = await request()
      .get(`/api/reports/attempts/${attemptId}`)
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(detail.status, 200);
    assert.ok(Array.isArray(detail.body.data.answers));
  });

  it('records progress on attempt submit', async () => {
    const quiz = await createPublishedQuiz(admin.token);
    const view = await request()
      .get(`/api/quizzes/${quiz._id}`)
      .set('Authorization', `Bearer ${student.token}`);

    await request()
      .post(`/api/quizzes/${quiz._id}/attempt`)
      .set('Authorization', `Bearer ${student.token}`)
      .send({
        answers: [{ questionId: view.body.data.questions[0]._id, answer: 1 }]
      });

    const progress = await request()
      .get('/api/progress')
      .set('Authorization', `Bearer ${admin.token}`);

    assert.equal(progress.status, 200);
    assert.ok(
      progress.body.data.items.some(
        (row) => String(row.quizId?._id || row.quizId) === String(quiz._id)
      )
    );

    const summary = await request()
      .get('/api/progress/summary')
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(summary.status, 200);
    assert.ok(summary.body.data.totalRecords >= 1);
  });

  it('allows admin to delete an attempt', async () => {
    const quiz = await createPublishedQuiz(admin.token);
    const view = await request()
      .get(`/api/quizzes/${quiz._id}`)
      .set('Authorization', `Bearer ${student.token}`);

    await request()
      .post(`/api/quizzes/${quiz._id}/attempt`)
      .set('Authorization', `Bearer ${student.token}`)
      .send({
        answers: [{ questionId: view.body.data.questions[0]._id, answer: 0 }]
      });

    const list = await request()
      .get('/api/reports/attempts')
      .set('Authorization', `Bearer ${admin.token}`);
    const id = list.body.data.items[0]._id;

    const del = await request()
      .delete(`/api/reports/attempts/${id}`)
      .set('Authorization', `Bearer ${admin.token}`);
    assert.equal(del.status, 200);
  });

  it('forbids students from viewing reports', async () => {
    const res = await request()
      .get('/api/reports/attempts')
      .set('Authorization', `Bearer ${student.token}`);
    assert.equal(res.status, 403);
  });
});
