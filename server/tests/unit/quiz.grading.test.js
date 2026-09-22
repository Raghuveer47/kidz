const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { gradeAnswer } = require('../../src/quiz/quiz.grading');
const { QUESTION_TYPES } = require('../../src/quiz/question-types.config');

describe('quiz.grading', () => {
  it('grades MCQ single correct', () => {
    const q = {
      questionType: QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE,
      correctOptionIndex: 2,
      marks: 1
    };
    assert.deepEqual(gradeAnswer(q, 2), { isCorrect: true, graded: true });
    assert.deepEqual(gradeAnswer(q, 1), { isCorrect: false, graded: true });
  });

  it('grades MCQ multiple correct', () => {
    const q = {
      questionType: QUESTION_TYPES.MULTIPLE_CHOICE_MULTIPLE,
      correctOptionIndices: [0, 2],
      marks: 2
    };
    assert.equal(gradeAnswer(q, [0, 2]).isCorrect, true);
    assert.equal(gradeAnswer(q, [2, 0]).isCorrect, true);
    assert.equal(gradeAnswer(q, [0]).isCorrect, false);
    assert.equal(gradeAnswer(q, [0, 1, 2]).isCorrect, false);
  });

  it('grades true/false', () => {
    const q = {
      questionType: QUESTION_TYPES.TRUE_FALSE,
      correctOptionIndex: 0,
      options: ['True', 'False']
    };
    assert.equal(gradeAnswer(q, 0).isCorrect, true);
    assert.equal(gradeAnswer(q, 1).isCorrect, false);
  });

  it('grades fill in the blank (case insensitive)', () => {
    const q = {
      questionType: QUESTION_TYPES.FILL_IN_BLANK,
      correctAnswers: ['CPU', 'Central Processing Unit']
    };
    assert.equal(gradeAnswer(q, 'cpu').isCorrect, true);
    assert.equal(gradeAnswer(q, ' Central Processing Unit ').isCorrect, true);
    assert.equal(gradeAnswer(q, 'gpu').isCorrect, false);
  });

  it('grades labeling with ordered answers', () => {
    const q = {
      questionType: QUESTION_TYPES.LABELING,
      correctAnswers: ['Monitor', 'Keyboard']
    };
    assert.equal(gradeAnswer(q, ['Monitor', 'Keyboard']).isCorrect, true);
    assert.equal(gradeAnswer(q, ['monitor', 'keyboard']).isCorrect, true);
    assert.equal(gradeAnswer(q, ['Keyboard', 'Monitor']).isCorrect, false);
  });

  it('grades match the following', () => {
    const q = {
      questionType: QUESTION_TYPES.MATCH,
      matchPairs: [
        { left: 'CPU', right: 'Brain' },
        { left: 'RAM', right: 'Memory' }
      ]
    };
    assert.equal(gradeAnswer(q, ['Brain', 'Memory']).isCorrect, true);
    assert.equal(gradeAnswer(q, ['Memory', 'Brain']).isCorrect, false);
  });

  it('grades reorder / drag_drop', () => {
    const q = {
      questionType: QUESTION_TYPES.REORDER,
      correctOrder: ['One', 'Two', 'Three']
    };
    assert.equal(gradeAnswer(q, ['One', 'Two', 'Three']).isCorrect, true);
    assert.equal(gradeAnswer(q, ['Three', 'Two', 'One']).isCorrect, false);

    const drag = { ...q, questionType: QUESTION_TYPES.DRAG_DROP };
    assert.equal(gradeAnswer(drag, ['One', 'Two', 'Three']).isCorrect, true);
  });

  it('grades categorize', () => {
    const q = {
      questionType: QUESTION_TYPES.CATEGORIZE,
      categories: [
        { name: 'Input', items: ['Mouse', 'Keyboard'] },
        { name: 'Output', items: ['Monitor'] }
      ]
    };
    assert.equal(
      gradeAnswer(q, {
        Input: ['Keyboard', 'Mouse'],
        Output: ['Monitor']
      }).isCorrect,
      true
    );
    assert.equal(
      gradeAnswer(q, {
        Input: ['Mouse'],
        Output: ['Monitor', 'Keyboard']
      }).isCorrect,
      false
    );
  });

  it('grades hotspot clicks inside regions', () => {
    const q = {
      questionType: QUESTION_TYPES.HOTSPOT,
      hotspotRegions: [{ x: 10, y: 10, width: 20, height: 20 }]
    };
    assert.equal(gradeAnswer(q, [{ x: 15, y: 15 }]).isCorrect, true);
    assert.equal(gradeAnswer(q, [{ x: 50, y: 50 }]).isCorrect, false);
  });

  it('does not auto-grade open ended / poll / draw', () => {
    for (const type of [
      QUESTION_TYPES.OPEN_ENDED,
      QUESTION_TYPES.POLL,
      QUESTION_TYPES.DRAW
    ]) {
      const result = gradeAnswer({ questionType: type, options: ['A', 'B'] }, 0);
      assert.deepEqual(result, { isCorrect: false, graded: false });
    }
  });
});
