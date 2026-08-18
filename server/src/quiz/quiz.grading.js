const { QUESTION_TYPES, typeConfig } = require('./question-types.config');

const normalizeText = (value) => String(value ?? '').trim().toLowerCase();

/**
 * Grades one answer against a question — mirrors Career Master's switch,
 * limited to the types Kids Coding AI exposes.
 */
function gradeAnswer(question, userAnswer) {
  const questionType = question.questionType || QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE;
  const config = typeConfig(questionType);

  if (!config.autoGradable) {
    return { isCorrect: false, graded: false };
  }

  const correctSingle =
    typeof question.correctOptionIndex === 'number'
      ? question.correctOptionIndex
      : Array.isArray(question.correctOptionIndices) && question.correctOptionIndices.length === 1
        ? question.correctOptionIndices[0]
        : undefined;

  const correctMultiple = Array.isArray(question.correctOptionIndices)
    ? question.correctOptionIndices
    : typeof correctSingle === 'number'
      ? [correctSingle]
      : [];

  let isCorrect = false;

  switch (questionType) {
    case QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE:
    case QUESTION_TYPES.TRUE_FALSE:
    case QUESTION_TYPES.DROPDOWN:
    case QUESTION_TYPES.PASSAGE:
    case QUESTION_TYPES.IMAGE_BASED:
      isCorrect =
        typeof userAnswer === 'number' &&
        typeof correctSingle === 'number' &&
        userAnswer === correctSingle;
      break;

    case QUESTION_TYPES.MULTIPLE_CHOICE_MULTIPLE: {
      const picked = Array.isArray(userAnswer)
        ? userAnswer
        : typeof userAnswer === 'number'
          ? [userAnswer]
          : [];
      const pickedSet = new Set(picked);
      const correctSet = new Set(correctMultiple);
      isCorrect =
        correctSet.size > 0 &&
        pickedSet.size === correctSet.size &&
        [...pickedSet].every((v) => correctSet.has(v));
      break;
    }

    case QUESTION_TYPES.FILL_IN_BLANK:
    case QUESTION_TYPES.LABELING: {
      const accepted = (question.correctAnswers || []).map(normalizeText);
      if (Array.isArray(userAnswer)) {
        isCorrect =
          accepted.length > 0 &&
          userAnswer.length === accepted.length &&
          userAnswer.every((ans, i) => normalizeText(ans) === accepted[i]);
      } else if (typeof userAnswer === 'string') {
        isCorrect = accepted.includes(normalizeText(userAnswer));
      }
      break;
    }

    case QUESTION_TYPES.MATCH:
      if (Array.isArray(userAnswer) && Array.isArray(question.matchPairs)) {
        isCorrect =
          userAnswer.length === question.matchPairs.length &&
          question.matchPairs.every(
            (pair, index) => normalizeText(userAnswer[index]) === normalizeText(pair.right)
          );
      }
      break;

    case QUESTION_TYPES.REORDER:
    case QUESTION_TYPES.DRAG_DROP:
      if (Array.isArray(userAnswer) && Array.isArray(question.correctOrder)) {
        isCorrect =
          userAnswer.length === question.correctOrder.length &&
          userAnswer.every(
            (item, index) => normalizeText(item) === normalizeText(question.correctOrder[index])
          );
      }
      break;

    case QUESTION_TYPES.CATEGORIZE:
      if (userAnswer && typeof userAnswer === 'object' && Array.isArray(question.categories)) {
        isCorrect = question.categories.every((category) => {
          const submitted = (userAnswer[category.name] || []).map(normalizeText).sort();
          const expected = (category.items || []).map(normalizeText).sort();
          return (
            submitted.length === expected.length &&
            submitted.every((item, i) => item === expected[i])
          );
        });
      }
      break;

    case QUESTION_TYPES.HOTSPOT:
      if (Array.isArray(userAnswer) && Array.isArray(question.hotspotRegions)) {
        isCorrect =
          userAnswer.length === question.hotspotRegions.length &&
          question.hotspotRegions.every((region) =>
            userAnswer.some(
              (click) =>
                click &&
                click.x >= region.x &&
                click.x <= region.x + (region.width || 0) &&
                click.y >= region.y &&
                click.y <= region.y + (region.height || 0)
            )
          );
      }
      break;

    default:
      isCorrect = userAnswer === question.correctOptionIndex;
  }

  return { isCorrect, graded: true };
}

module.exports = { gradeAnswer };
