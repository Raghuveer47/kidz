import React from 'react';
import { Brackets } from 'lucide-react';

const algoIcon = <Brackets className="w-5 h-5 text-emerald-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

/** Class 6 (f) — Algorithms single page. */
export const algorithmsTopic = {
    id: 'algorithms',
    title: 'ALGORITHMS',
    category: 'programming',
    icon: algoIcon,
    content: {
        heading: 'Algorithms — Thinking Step by Step',
        text:
            'Before writing code in Python or blocks, programmers plan with algorithms: clear, ordered instructions a computer (or robot) can follow exactly. Class 6 algorithms use recipes, classroom routines, and simple puzzles.',
        sections: [
            section(
                'What is an algorithm?',
                'An algorithm is a finite sequence of steps that solves a problem.\n\nExample — making a peanut-butter sandwich:\n1. Get two bread slices.\n2. Open jar.\n3. Spread peanut butter on one slice.\n4. Place slices together.\n5. Cut in half if desired.\n\nIf steps are wrong order (spread before bread), result fails—that is a bug in the algorithm.',
                'https://loremflickr.com/700/450/recipe,steps,cooking'
            ),
            section(
                'Be precise',
                'Computers lack common sense. Algorithm step “open the door” must say which door, how far, and what if locked.\n\nClassroom algorithm “Hand in homework”:\n1. Write name on paper.\n2. Stand up when teacher calls row.\n3. Walk to tray.\n4. Place paper in correct slot.\n5. Return to seat quietly.',
                'https://loremflickr.com/700/450/checklist,steps,kids',
                {
                    bullets: ['Ambiguous steps cause wrong results.', 'Number steps so order is obvious.', 'Include what to do when something fails (Plan B).'],
                }
            ),
            section(
                'Decompose big problems',
                'Building a science fair board decomposes into: research → outline → slides → print → mount → rehearse speech.\n\nEach sub-task gets its own mini-algorithm.\n\nProgrammers call this decomposition—breaking elephants into bite-sized pieces.',
                'https://loremflickr.com/700/450/puzzle,pieces,logic'
            ),
            section(
                'Debugging',
                'When output is wrong, trace steps one by one.\n\nAsk: Which step first went off track?\n\nFix algorithm on paper before coding.\n\nTesting with a friend following your steps exactly reveals hidden assumptions.',
                'https://loremflickr.com/700/450/debug,fix,problem',
                {
                    bulletsHeading: 'Try this',
                    bullets: [
                        'Write algorithm for “Sort these five books by height.”',
                        'Swap papers with partner—do they get same result?',
                        'Revise any step that confused them.',
                    ],
                }
            ),
            section(
                'Algorithms connect to AI',
                'AI also follows algorithms—but some steps “learn” from data (see AI-3).\n\nClassic algorithms are fixed rules; machine learning adjusts rules after examples.\n\nBoth need clear goals and tests.',
                'https://loremflickr.com/700/450/flowchart,logic,kids'
            ),
        ],
    },
};
