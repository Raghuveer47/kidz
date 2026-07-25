import React from 'react';
import { NotepadText, ListChecks, CircleHelp } from 'lucide-react';

const notepadIcon = <NotepadText className="w-5 h-5 text-rose-500" />;

/** Class 4 — Notepad tutorial, exercises, and FAQ (replaces notepad-wordpad). */
export const notepadTopics = [
    {
        id: 'notepad-tutorial',
        title: 'NOTEPAD TUTORIAL',
        category: 'creative_tools',
        icon: notepadIcon,
        content: {
            heading: 'Notepad Tutorial',
            text: 'Seventeen in-depth lessons from scratch to advanced: window parts, typing, saving, shortcuts, Find & Replace, Word Wrap, font, status bar, printing, encoding, and pro lab habits.',
        },
    },
    {
        id: 'notepad-exercises',
        title: 'NOTEPAD EXERCISES',
        category: 'creative_tools',
        icon: <ListChecks className="w-5 h-5 text-rose-500" />,
        content: {
            heading: 'Notepad Exercises',
            text: 'Twelve graded exercises from warm-up typing to capstone projects—with hints, sample output, and teacher checks.',
        },
    },
    {
        id: 'notepad-faq',
        title: 'NOTEPAD FAQ',
        category: 'creative_tools',
        icon: <CircleHelp className="w-5 h-5 text-rose-500" />,
        content: {
            heading: 'Notepad FAQ',
            text: 'Twenty-seven detailed answers in seven categories: getting started, files, editing, comparing apps, lab rules, troubleshooting, and advanced tips.',
        },
    },
];
