const { describe, it, before, after, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const xlsx = require('xlsx');
const {
  connectTestDb,
  clearCollections,
  disconnectTestDb,
  request,
  createAdmin,
  createStudent
} = require('../helpers/setup');

function sampleQuizPayload(overrides = {}) {
  return {
    title: overrides.title || `Quiz ${Date.now()}`,
    description: 'Test quiz',
    classLevel: overrides.classLevel || 3,
    isPublished: overrides.isPublished ?? true,
    timeLimitMinutes: 10,
    passPercent: 50,
    questions: overrides.questions || [
      {
        questionType: 'multiple_choice_single',
        questionText: 'What is CPU?',
        options: ['Brain of computer', 'Screen', 'Cable', 'Fan'],
        correctOptionIndex: 0,
        marks: 1
      },
      {
        questionType: 'true_false',
        questionText: 'Mouse is an input device',
        options: ['True', 'False'],
        correctOptionIndex: 0,
        marks: 1
      },
      {
        questionType: 'open_ended',
        questionText: 'Name one output device',
        marks: 2
      }
    ]
  };
}

describe('Quizzes API', () => {
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

  it('creates a quiz as admin', async () => {
    const res = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${admin.token}`)
      .send(sampleQuizPayload());

    assert.equal(res.status, 201);
    assert.equal(res.body.data.questions.length, 3);
  });

  it('hides unpublished quizzes from students', async () => {
    const created = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${admin.token}`)
      .send(sampleQuizPayload({ isPublished: false }));

    const list = await request()
      .get('/api/quizzes')
      .set('Authorization', `Bearer ${student.token}`);

    assert.equal(list.status, 200);
    const ids = (list.body.data.items || []).map((q) => String(q._id));
    assert.equal(ids.includes(String(created.body.data._id)), false);
  });

  it('returns student-safe quiz payload without answers', async () => {
    const created = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${admin.token}`)
      .send(sampleQuizPayload({ isPublished: true }));

    const res = await request()
      .get(`/api/quizzes/${created.body.data._id}`)
      .set('Authorization', `Bearer ${student.token}`);

    assert.equal(res.status, 200);
    const q0 = res.body.data.questions[0];
    assert.equal(q0.correctOptionIndex, undefined);
    assert.ok(q0.questionText);
  });

  it('submits an attempt and scores auto-gradable questions', async () => {
    const created = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${admin.token}`)
      .send(sampleQuizPayload({ isPublished: true }));

    const quiz = created.body.data;
    const studentView = await request()
      .get(`/api/quizzes/${quiz._id}`)
      .set('Authorization', `Bearer ${student.token}`);

    const questions = studentView.body.data.questions;
    const answers = [
      { questionId: questions[0]._id, answer: 0 },
      { questionId: questions[1]._id, answer: 0 },
      { questionId: questions[2]._id, answer: 'Monitor' }
    ];

    const attempt = await request()
      .post(`/api/quizzes/${quiz._id}/attempt`)
      .set('Authorization', `Bearer ${student.token}`)
      .send({ answers });

    assert.equal(attempt.status, 201);
    assert.equal(attempt.body.data.score, 2);
    assert.equal(attempt.body.data.maxScore, 2);
    assert.equal(attempt.body.data.pendingReview, 1);
    assert.equal(attempt.body.data.passed, true);
  });

  it('accepts half-filled attempts', async () => {
    const created = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${admin.token}`)
      .send(sampleQuizPayload({ isPublished: true }));

    const quizId = created.body.data._id;
    const studentView = await request()
      .get(`/api/quizzes/${quizId}`)
      .set('Authorization', `Bearer ${student.token}`);
    const qid = studentView.body.data.questions[0]._id;

    const attempt = await request()
      .post(`/api/quizzes/${quizId}/attempt`)
      .set('Authorization', `Bearer ${student.token}`)
      .send({
        answers: [
          { questionId: qid, answer: 0 },
          { questionId: studentView.body.data.questions[1]._id },
          { questionId: studentView.body.data.questions[2]._id }
        ]
      });

    assert.equal(attempt.status, 201);
    assert.equal(attempt.body.data.score, 1);
  });

  it('imports a quiz from Excel', async () => {
    const rows = [
      {
        question: 'CPU stands for?',
        type: 'multiple_choice_single',
        optionA: 'Central Processing Unit',
        optionB: 'Computer',
        optionC: 'Cable',
        optionD: 'Camera',
        correctOption: 'A',
        marks: 1
      },
      {
        question: 'Mouse is input',
        type: 'true_false',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'TRUE',
        marks: 1
      },
      {
        question: 'Pick inputs',
        type: 'multiple_choice_multiple',
        optionA: 'Keyboard',
        optionB: 'Monitor',
        optionC: 'Mouse',
        optionD: 'Speaker',
        correctOption: 'A,C',
        marks: 2
      }
    ];
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(rows), 'Questions');
    const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

    const res = await request()
      .post('/api/quizzes/upload-excel')
      .set('Authorization', `Bearer ${admin.token}`)
      .field('title', `Excel ${Date.now()}`)
      .field('classLevel', '3')
      .field('defaultMarks', '1')
      .field('isPublished', 'true')
      .attach('file', buffer, 'quiz.xlsx');

    assert.equal(res.status, 201, JSON.stringify(res.body));
    assert.equal(res.body.data.questions.length, 3);
  });

  it('forbids students from creating quizzes', async () => {
    const res = await request()
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${student.token}`)
      .send(sampleQuizPayload());

    assert.equal(res.status, 403);
  });
});
