/**
 * Question types — same catalog as Career Master, trimmed helpers for kids grading.
 */
const QUESTION_TYPES = {
  MULTIPLE_CHOICE_SINGLE: 'multiple_choice_single',
  MULTIPLE_CHOICE_MULTIPLE: 'multiple_choice_multiple',
  TRUE_FALSE: 'true_false',
  FILL_IN_BLANK: 'fill_in_blank',
  PASSAGE: 'passage',
  DROPDOWN: 'dropdown',
  MATCH: 'match',
  REORDER: 'reorder',
  DRAG_DROP: 'drag_drop',
  CATEGORIZE: 'categorize',
  IMAGE_BASED: 'image_based',
  LABELING: 'labeling',
  HOTSPOT: 'hotspot',
  POLL: 'poll',
  OPEN_ENDED: 'open_ended',
  DRAW: 'draw'
};

const QUESTION_TYPE_CONFIG = {
  [QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE]: {
    name: 'MCQ (Single Correct)',
    category: 'basic',
    requiresOptions: true,
    requiresCorrectIndex: true,
    autoGradable: true
  },
  [QUESTION_TYPES.MULTIPLE_CHOICE_MULTIPLE]: {
    name: 'MCQ (Multiple Correct)',
    category: 'basic',
    requiresOptions: true,
    requiresCorrectIndices: true,
    autoGradable: true
  },
  [QUESTION_TYPES.TRUE_FALSE]: {
    name: 'True / False',
    category: 'basic',
    requiresOptions: true,
    requiresCorrectIndex: true,
    autoGradable: true
  },
  [QUESTION_TYPES.FILL_IN_BLANK]: {
    name: 'Fill in the Blank',
    category: 'basic',
    requiresCorrectAnswers: true,
    autoGradable: true
  },
  [QUESTION_TYPES.PASSAGE]: {
    name: 'Passage',
    category: 'basic',
    requiresPassage: true,
    requiresOptions: true,
    requiresCorrectIndex: true,
    autoGradable: true
  },
  [QUESTION_TYPES.DROPDOWN]: {
    name: 'Drop Down',
    category: 'interactive',
    requiresOptions: true,
    requiresCorrectIndex: true,
    autoGradable: true
  },
  [QUESTION_TYPES.MATCH]: {
    name: 'Match the Following',
    category: 'interactive',
    requiresMatchPairs: true,
    autoGradable: true
  },
  [QUESTION_TYPES.REORDER]: {
    name: 'Arrange / Reorder',
    category: 'interactive',
    requiresCorrectOrder: true,
    autoGradable: true
  },
  [QUESTION_TYPES.DRAG_DROP]: {
    name: 'Drag and Drop',
    category: 'interactive',
    requiresCorrectOrder: true,
    autoGradable: true
  },
  [QUESTION_TYPES.CATEGORIZE]: {
    name: 'Categorize',
    category: 'interactive',
    requiresCategories: true,
    autoGradable: true
  },
  [QUESTION_TYPES.IMAGE_BASED]: {
    name: 'Image Based',
    category: 'interactive',
    requiresImage: true,
    requiresOptions: true,
    requiresCorrectIndex: true,
    autoGradable: true
  },
  [QUESTION_TYPES.LABELING]: {
    name: 'Labeling',
    category: 'interactive',
    requiresImage: true,
    requiresCorrectAnswers: true,
    autoGradable: true
  },
  [QUESTION_TYPES.HOTSPOT]: {
    name: 'Hotspot',
    category: 'interactive',
    requiresImage: true,
    requiresHotspotRegions: true,
    autoGradable: true
  },
  [QUESTION_TYPES.POLL]: {
    name: 'Poll',
    category: 'open-ended',
    requiresOptions: true,
    autoGradable: false
  },
  [QUESTION_TYPES.OPEN_ENDED]: {
    name: 'Open Ended',
    category: 'open-ended',
    autoGradable: false
  },
  [QUESTION_TYPES.DRAW]: {
    name: 'Draw',
    category: 'open-ended',
    autoGradable: false
  }
};

const QUESTION_TYPE_CATEGORIES = {
  basic: {
    name: 'Basic',
    types: [
      QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE,
      QUESTION_TYPES.MULTIPLE_CHOICE_MULTIPLE,
      QUESTION_TYPES.TRUE_FALSE,
      QUESTION_TYPES.FILL_IN_BLANK,
      QUESTION_TYPES.PASSAGE
    ]
  },
  interactive: {
    name: 'Interactive',
    types: [
      QUESTION_TYPES.DROPDOWN,
      QUESTION_TYPES.MATCH,
      QUESTION_TYPES.REORDER,
      QUESTION_TYPES.DRAG_DROP,
      QUESTION_TYPES.CATEGORIZE,
      QUESTION_TYPES.IMAGE_BASED,
      QUESTION_TYPES.LABELING,
      QUESTION_TYPES.HOTSPOT
    ]
  },
  'open-ended': {
    name: 'Open ended',
    types: [QUESTION_TYPES.POLL, QUESTION_TYPES.OPEN_ENDED, QUESTION_TYPES.DRAW]
  }
};

const OPTION_TYPES = Object.entries(QUESTION_TYPE_CONFIG)
  .filter(([, cfg]) => cfg.requiresOptions)
  .map(([type]) => type);

const IMAGE_TYPES = Object.entries(QUESTION_TYPE_CONFIG)
  .filter(([, cfg]) => cfg.requiresImage)
  .map(([type]) => type);

const typeConfig = (type) =>
  QUESTION_TYPE_CONFIG[type] || QUESTION_TYPE_CONFIG[QUESTION_TYPES.MULTIPLE_CHOICE_SINGLE];

module.exports = {
  QUESTION_TYPES,
  QUESTION_TYPE_CONFIG,
  QUESTION_TYPE_CATEGORIES,
  OPTION_TYPES,
  IMAGE_TYPES,
  typeConfig
};
