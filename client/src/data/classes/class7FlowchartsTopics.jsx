import React from 'react';
import { FileDigit } from 'lucide-react';

const flowIcon = <FileDigit className="w-5 h-5 text-emerald-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

/** Class 7 (d) — Flowcharts with examples (single page). */
export const flowchartsTopic = {
    id: 'flowcharts',
    title: 'FLOWCHARTS',
    category: 'programming',
    icon: flowIcon,
    content: {
        heading: 'Flowcharts — Maps for Computer Logic',
        text:
            'Flowcharts use standard shapes and arrows to show step-by-step logic before you code. Class 7 flowcharts connect to Algorithms (Class 6) and prepare you for Python if/else and loops.',
        sections: [
            section(
                'Standard flowchart symbols',
                'Oval — Start / End\n\nRectangle — Process (action): “Add A and B”\n\nParallelogram — Input / Output: “Read age” or “Print result”\n\nDiamond — Decision: “Is age ≥ 18?” Yes/No branches\n\nArrow — flow direction (top to bottom, left to right)',
                'https://loremflickr.com/700/450/flowchart,symbols,diagram'
            ),
            section(
                'Example 1 — Make tea',
                'Start → Boil water → Put tea bag in cup → Pour hot water → Wait 2 min → Remove bag → Add milk? (Decision) → Yes: add milk / No: skip → Serve → End.\n\nNotice decision diamond splits paths that merge again before End.',
                'https://loremflickr.com/700/450/tea,process,steps',
                {
                    bullets: ['Every path must reach End.', 'Decision labels on arrows: Yes/No or True/False.', 'Keep one action per rectangle when learning.'],
                }
            ),
            section(
                'Example 2 — Even or odd number',
                'Start → Input number N → Divide N by 2 → Remainder 0? (Decision)\n\nYes → Print “Even” → End\n\nNo → Print “Odd” → End\n\nThis mirrors Python modulo (N % 2) later.',
                'https://loremflickr.com/700/450/number,math,logic'
            ),
            section(
                'Example 3 — Login check',
                'Start → Input password → Matches saved? (Decision)\n\nYes → Show welcome screen → End\n\nNo → Print “Try again” → (optional loop back to Input)\n\nLoops drawn with arrow returning to earlier step.',
                'https://loremflickr.com/700/450/login,security,flow'
            ),
            section(
                'Drawing tips',
                'Use pencil and ruler or Word/PPT shapes.\n\nNumber steps if team reviews together.\n\nTest flowchart by “being the computer”—follow arrows with sample inputs.\n\nFix bugs on paper before typing Python.',
                'https://loremflickr.com/700/450/planning,algorithm,student',
                {
                    bulletsHeading: 'Practice',
                    bullets: [
                        'Draw flowchart for “Brush teeth before bed.”',
                        'Draw flowchart for “Find largest of two numbers.”',
                        'Check: does every diamond have two outgoing paths labeled?',
                    ],
                }
            ),
        ],
    },
};
