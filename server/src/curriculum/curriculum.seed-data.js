/**
 * Default Class 1–10 outline (from legacy seed).
 * Flattened into individual topics for the CMS.
 */
const OUTLINE = [
  { classLevel: 1, category: 'COMPUTER BASICS', topics: ['COMPUTER ALPHABETS'] },
  { classLevel: 1, category: 'CREATIVE TOOLS', topics: ['COMPUTER IMAGES'] },
  { classLevel: 2, category: 'COMPUTER BASICS', topics: ['PARTS OF COMPUTER-1', 'USES OF COMPUTER', 'START AND SHUTDOWN OPTIONS'] },
  { classLevel: 2, category: 'CREATIVE TOOLS', topics: ['KEBOARD MOUSE USAGE'] },
  { classLevel: 3, category: 'COMPUTER BASICS', topics: ['PARTS OF COMPUTER-2', 'WINDOWS OS 1', 'GOOD COMPUTER HABITS'] },
  { classLevel: 3, category: 'CREATIVE TOOLS', topics: ['TYPING-1', 'CALCULATOR', 'MS PAINT-1'] },
  { classLevel: 4, category: 'COMPUTER BASICS', topics: ['PARTS OF COMPUTER-3', 'ETHICS', 'HEALTH TIPS', 'WINDOWS OS 2'] },
  { classLevel: 4, category: 'CREATIVE TOOLS', topics: ['TYPING-2', 'NOTEPAD TUTORIAL', 'NOTEPAD EXERCISES', 'NOTEPAD FAQ', 'MS PAINT-2', 'MS WORD-1'] },
  { classLevel: 4, category: 'AI', topics: ['WHAT IS AI'] },
  { classLevel: 5, category: 'COMPUTER BASICS', topics: ['FILE MANAGEMENT'] },
  { classLevel: 5, category: 'CREATIVE TOOLS', topics: ['WORKING WITH IMAGES', 'MS PAINT-3', 'MS WORD-2'] },
  { classLevel: 5, category: 'AI', topics: ['HOW AI WORKS?'] },
  { classLevel: 6, category: 'COMPUTER BASICS', topics: ['ZIP AND UNZIP FILES'] },
  { classLevel: 6, category: 'CREATIVE TOOLS', topics: ['WORKING WITH PDF', 'MS WORD-3', 'PPT-1'] },
  { classLevel: 6, category: 'PROGRAMMING', topics: ['ALGORITHMS'] },
  { classLevel: 6, category: 'AI', topics: ['AI MODELS'] },
  { classLevel: 7, category: 'COMPUTER BASICS', topics: ['WORKING WITH DOS'] },
  { classLevel: 7, category: 'CREATIVE TOOLS', topics: ['MS WORD-4', 'PPT-2'] },
  { classLevel: 7, category: 'PROGRAMMING', topics: ['FLOWCHARTS', 'PYTHON-1'] },
  { classLevel: 7, category: 'INTERNET', topics: ['INTERNET-1', 'HTML-1', 'CSS-1'] },
  { classLevel: 7, category: 'AI', topics: ['AI BASIC CODING 1'] },
  { classLevel: 8, category: 'COMPUTER BASICS', topics: ['WINDOWS CONTROL PANEL'] },
  { classLevel: 8, category: 'CREATIVE TOOLS', topics: ['PPT-3', 'EXCEL-1'] },
  { classLevel: 8, category: 'PROGRAMMING', topics: ['PYTHON-2'] },
  { classLevel: 8, category: 'INTERNET', topics: ['INTERNET-2', 'HTML-2', 'CSS-2'] },
  { classLevel: 8, category: 'AI', topics: ['ML'] },
  { classLevel: 9, category: 'COMPUTER BASICS', topics: ['VIRUSES-1', 'SECURITY BASICS'] },
  { classLevel: 9, category: 'CREATIVE TOOLS', topics: ['EXCEL-2'] },
  { classLevel: 9, category: 'PROGRAMMING', topics: ['PYTHON-3', 'C-1'] },
  { classLevel: 9, category: 'INTERNET', topics: ['HTML-3', 'CSS-3'] },
  { classLevel: 9, category: 'AI', topics: ['GEN AI', 'MATH FOR AI'] },
  { classLevel: 10, category: 'COMPUTER BASICS', topics: ['VIRUSES-2', 'BACKUP & RECOVERY', 'OS INSTALLATION'] },
  { classLevel: 10, category: 'CREATIVE TOOLS', topics: ['EXCEL-3'] },
  { classLevel: 10, category: 'PROGRAMMING', topics: ['C-2', 'JAVA-1'] },
  { classLevel: 10, category: 'INTERNET', topics: ['BOOTSTRAP 1', 'JS-1'] },
  { classLevel: 10, category: 'AI', topics: ['AI TOOLS'] }
];

function slugify(title) {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function flattenOutline() {
  const rows = [];
  const orderByClass = {};
  for (const block of OUTLINE) {
    if (orderByClass[block.classLevel] === undefined) {
      orderByClass[block.classLevel] = 0;
    }
    for (const title of block.topics) {
      rows.push({
        classLevel: block.classLevel,
        category: block.category,
        title,
        slug: slugify(title),
        order: orderByClass[block.classLevel]++,
        isActive: true,
        description: ''
      });
    }
  }
  return rows;
}

module.exports = {
  OUTLINE,
  slugify,
  flattenOutline
};
