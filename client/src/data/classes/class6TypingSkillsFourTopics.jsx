import React from 'react';
import { Keyboard } from 'lucide-react';
import {
    TYPING_SKILLS4_HERO,
    TYPING_SKILLS4_TASKS,
    TYPING_SKILLS4_CERT,
} from './class6TypingSkillsFourImages';

const typingIcon = <Keyboard className="w-5 h-5 text-slate-700" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: typingIcon,
        content: { heading, text, sections },
    };
}

/** Class 6 (c) — Typing Skills-4 hub + Tasks & Certification. */
export const typingSkillsFourTopics = [
    {
        id: 'typing-skills-4',
        title: 'TYPING SKILLS-4',
        category: 'computer_basics',
        icon: typingIcon,
        children: [
            { label: 'Tasks', topicId: 'typing-skills-4-tasks' },
            { label: 'Certification', topicId: 'typing-skills-4-certification' },
        ],
        content: {
            heading: 'Typing Skills-4',
            text:
                'Class 6 Typing Skills-4 builds speed and accuracy with paragraph tasks, timed drills, and a certification checklist your teacher can sign when you meet Class 6 typing goals.',
            hubHeroImage: TYPING_SKILLS4_HERO,
            unitTitle: 'Typing Skills-4 — Tasks & Certification',
            firstLessonId: 'typing-skills-4-tasks',
            firstLessonLabel: 'Tasks',
            unitDetail: {
                intro:
                    'You practiced home row in Class 3, editing keys in Class 4, and full sentences in Class 5. Class 6 adds longer paragraphs, numbers mixed with words, and calm speed goals. Tasks page gives copy-type lines and short original sentences. Certification page lists skills—posture, accuracy, punctuation, and a timed sample—before your teacher awards Typing Skills-4 recognition.',
                analogy:
                    'Typing is like learning a musical instrument. Class 3 taught notes (home row). Class 4 taught sharps and flats (Shift, Delete). Class 5 played short tunes (sentences). Class 6 performs a whole song (paragraphs) for an audience (your teacher) who signs your certificate when the performance is neat.',
                keyPoints: [
                    { title: 'Accuracy first', body: 'Fewer mistakes beat frantic speed—fix errors with Backspace calmly.' },
                    { title: 'Paragraph rhythm', body: 'Capitals, commas, and periods at natural pauses in speech.' },
                    { title: 'Timed tasks', body: 'Short timed copies show progress—compare only with your past self.' },
                    { title: 'Certification', body: 'Teacher checks a list: posture, eyes on screen, sample paragraph, neat save.' },
                ],
            },
            unitWhyLearn: [
                'Longer typing tasks match Class 6 reports and email-style messages.',
                'Certification motivates daily practice and celebrates improvement.',
                'Good typing reduces hand strain during exams and coding classes ahead.',
            ],
            unitHowToStudy: [
                'Warm up with two easy sentences before timed tasks.',
                'Complete Tasks page drills in order—do not skip punctuation practice.',
                'Print or screenshot Certification checklist and track weekly scores.',
                'Practice ten minutes daily instead of one long cram session.',
            ],
            sections: [
                section('Tasks overview', 'Copy paragraphs, type from dictation, and fix deliberate mistakes.', TYPING_SKILLS4_TASKS),
                section('Certification goals', 'Meet teacher criteria for posture, accuracy, and a final timed paragraph.', TYPING_SKILLS4_CERT),
            ],
        },
    },
    subLesson(
        'typing-skills-4-tasks',
        'Tasks',
        'Typing Skills-4 — Tasks',
        'Practice paragraphs, mixed punctuation, and short timed copies. Open Notepad or Word and type each task in a file named Typing4_Practice.txt.',
        [
            section(
                'Task 1 — Warm-up paragraph',
                'Copy exactly:\n\n"The quick brown fox jumps over the lazy dog. My class uses computers for science charts, language essays, and creative Paint projects. I sit tall, breathe calmly, and press one key at a time."\n\nCheck: one space after each period, capital T and M, no extra spaces at line ends.',
                TYPING_SKILLS4_TASKS
            ),
            section(
                'Task 2 — Punctuation mix',
                'Copy:\n\nDr. Patel asked, “Did you save your ZIP file?” I replied, “Yes, ma\'am—it is on the desktop.” She smiled and said, “Remember PDF for homework!”\n\nWatch quotes, comma, and em-dash (use hyphen if em-dash key is hard).',
                TYPING_SKILLS4_TASKS,
                {
                    bullets: ['Use Shift for quotes and question marks.', 'Apostrophe in ma\'am needs care.', 'Read aloud to hear punctuation pauses.'],
                }
            ),
            section(
                'Task 3 — Numbers and dates',
                'Copy:\n\n"On 15-Aug-2026 our Class 6 lab learned about routers and switches. We typed for 10 minutes and scored 92% accuracy."\n\nNumbers sit on top row—slow down instead of rushing.',
                TYPING_SKILLS4_TASKS
            ),
            section(
                'Task 4 — Timed original (5 minutes)',
                'Without copying, type about your favourite networking device (router, switch, or NIC) in 5–8 sentences. Include at least one comma and one question mark. Save as Typing4_Original.txt.',
                TYPING_SKILLS4_TASKS,
                {
                    bulletsHeading: 'Self-check',
                    bullets: [
                        'Did every sentence start with a capital?',
                        'Did you press Enter only between paragraphs?',
                        'Could someone else read it easily?',
                    ],
                }
            ),
        ]
    ),
    subLesson(
        'typing-skills-4-certification',
        'Certification',
        'Typing Skills-4 — Certification',
        'When you meet the checklist below, show your teacher your practice files for Typing Skills-4 certification.',
        [
            section(
                'Certification checklist',
                'Student name: _______________  Class: 6  Date: _______________\n\n☐ Sit tall; feet flat; screen at eye level\n☐ Home row start; minimal looking at keyboard\n☐ Warm-up paragraph typed with ≤ 3 errors\n☐ Punctuation task completed\n☐ Timed original paragraph (5 min) saved\n☐ Files named clearly (Typing4_Practice.txt, Typing4_Original.txt)\n☐ Gentle hands—no keyboard slamming',
                TYPING_SKILLS4_CERT
            ),
            section(
                'Teacher observation notes',
                'Accuracy target: about 90% or better on copied tasks (teacher adjusts for beginners).\n\nSpeed: not graded harshly—focus on neatness.\n\nBehaviour: helpful to classmates, follows lab rules.\n\nCertificate signed when most boxes are checked twice on different days.',
                TYPING_SKILLS4_CERT,
                {
                    bullets: [
                        'Celebrate improvement—even 5% better accuracy is success.',
                        'Repeat certification term if needed; practice beats rushing.',
                        'Keep certified work in your portfolio folder.',
                    ],
                }
            ),
            section(
                'After certification',
                'Continue daily ten-minute practice. Class 7 adds more keyboard shortcuts and longer essays. Your Typing-4 certificate shows you are ready for bigger writing projects and coding lessons ahead.',
                TYPING_SKILLS4_CERT
            ),
        ]
    ),
];
