/** Class 5 — Typing Skills-3 images (replace with assets when ready). */

const u = (photoId) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const TYPING_SKILLS3_IMAGES = {
    hero: u('photo-1587825140708-dfaf72ae4b04'),
    posture: u('photo-1525182008055-f88b95ff7980'),
    punctuation: u('photo-1516321318423-f06f85e504b3'),
    warmUp: u('photo-1486312338219-ce68d2c6f44d'),
    practice: u('photo-1503676260728-1c00da280a2e'),
    challenge: u('photo-1503602642458-232111445657'),
    checklist: u('photo-1586281380349-632531db7ed4'),
};

/** Sample sentences for the practice page — teachers can extend in class. */
export const TYPING_SKILLS3_WARM_UP = [
    'The sun is bright.',
    'I read a good book.',
    'We save our files.',
    'My class loves coding.',
];

export const TYPING_SKILLS3_PRACTICE = [
    'Computers help us learn new skills every day.',
    'Always sit straight and look at the screen while typing.',
    'Press the spacebar once after each word in a sentence.',
    'Use Shift for capital letters at the start of a sentence.',
    'Save your work in a folder with a clear name.',
];

export const TYPING_SKILLS3_CHALLENGE = [
    'In Class 5, we type full sentences with correct punctuation and neat spacing.',
    'Good typists use the home row, fix mistakes with Backspace, and practice a little each day.',
    'When the bell rings, log out, save your document, and leave the keyboard clean for the next student.',
];
