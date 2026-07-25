import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';

/** Class 6 — SUMMARY and QUIZ. */
export const class6SummaryQuizTopics = [
    {
        id: 'class-quiz',
        title: 'QUIZ',
        category: 'assessment',
        icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
        content: {
            heading: 'Class 6 Quiz (10 Questions)',
            text:
                'Pick the best answer for each question—everything comes from your Class 6 lessons. Submit when you are done. To see which answers are correct, subscribe and unlock full quiz feedback.',
            quizQuestions: [
                {
                    question: 'A NIC (Network Interface Card) lets a computer:',
                    options: [
                        'Connect to a network and communicate with other devices',
                        'Only print on paper',
                        'Store files when power is off',
                        'Draw pictures in MS Paint automatically',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'A router at home mainly:',
                    options: [
                        'Shares internet connection with many devices safely',
                        'Only stores photos inside the keyboard',
                        'Replaces the need for a monitor',
                        'Compresses Word files into PDF',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'To create a ZIP file in Windows you typically:',
                    options: [
                        'Right-click a folder → Send to → Compressed (zipped) folder',
                        'Delete the folder and hope it shrinks',
                        'Rename .txt to .zip without compressing',
                        'Only use MS Paint Save As ZIP',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'Teachers often assign homework as PDF because:',
                    options: [
                        'The layout and text stay the same on every computer and are hard to edit accidentally',
                        'PDF files are always smaller than ZIP files',
                        'PDF means the homework deletes itself after one day',
                        'PDF only works on phones, not laptops',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In MS Word-3, the Review tab helps you:',
                    options: [
                        'Check spelling, count words, and add comments before submitting',
                        'Install Windows from a USB drive',
                        'Connect to Wi-Fi routers',
                        'Play PowerPoint slideshows only',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In PowerPoint, each page of a presentation is called a:',
                    options: ['Slide', 'Paragraph', 'Folder', 'Router'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'An algorithm is best described as:',
                    options: [
                        'A step-by-step set of instructions to solve a problem',
                        'A type of computer virus',
                        'Only a picture file format',
                        'The same thing as a Wi-Fi password',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In machine learning, the training phase is like:',
                    options: [
                        'Practice with examples so the program learns patterns',
                        'Deleting all data from the hard disk',
                        'Printing handouts from PowerPoint',
                        'Turning off spell-check in Word',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'A network switch differs from an old hub because a switch:',
                    options: [
                        'Sends data more directly to the device that needs it',
                        'Broadcasts every message to all ports always',
                        'Only works without electricity',
                        'Cannot be used in a school lab',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'Good data for training AI should be:',
                    options: [
                        'Correctly labeled, diverse, and collected with permission',
                        'Secretly copied from strangers without asking',
                        'Only one example per category',
                        'Filled with random wrong labels on purpose',
                    ],
                    correctOptionIndex: 0,
                },
            ],
            sections: [],
        },
    },
    {
        id: 'class-summary',
        title: 'SUMMARY',
        category: 'assessment',
        icon: <FileText className="w-5 h-5 text-emerald-700" />,
        content: {
            heading: 'Class 6 — Full Learning Summary',
            text:
                'A detailed review of every Class 6 topic—networking devices, Windows OS-4, typing, Word-3, PPT-1, algorithms, AI-3, and the quiz.',
            summaryIntro: [
                'Welcome to your Class 6 review page! You studied how computers connect (NIC, router, switch, hub), how to zip files and share PDF homework, typing tasks and certification, advanced Word tabs, your first PowerPoint skills, step-by-step algorithms, and how AI learns from examples. Read each card like a study guide before the quiz.',
                'Class 6 bridges creative tools and thinking skills needed for coding in later classes. If a card feels hard, reopen that lesson from the sidebar and practise ten minutes on a real PC with your teacher nearby.',
            ],
            summaryChecklist: [
                'Explain NIC, router, switch, and hub in your own words with one example each.',
                'Zip a practice folder, extract it, and export a one-page Word file as PDF.',
                'Complete Typing Skills-4 tasks and review the certification checklist with your teacher.',
                'In Word-3, apply a theme, adjust margins, and run spell-check on a paragraph.',
                'Create a 3-slide PowerPoint with title and bullet slides; save and close safely.',
                'Write a five-step algorithm for a daily routine and test it on a partner.',
                'Describe training vs testing and give one example of good vs bad AI data.',
                'Complete the Class 6 quiz; subscribe to unlock full answer feedback when ready.',
            ],
            summaryRows: [
                {
                    topic: 'PARTS OF COMPUTER-5',
                    emoji: '🌐',
                    outcome:
                        'Parts of Computer-5 covered networking devices. NIC is the computer’s network door (Ethernet or Wi-Fi). Router shares internet to many devices at home or school with password protection. Switch connects devices inside a local network and sends data to the correct machine—common in labs. Hub is older and broadcasts to all ports, which is less efficient. Comparing switch and hub shows how networking improved.',
                    highlights: [
                        'Match device to job: router for internet sharing, switch for wired lab networks.',
                        'Never share Wi-Fi passwords with strangers.',
                        'If a cable will not fit, check port type—do not force.',
                        'Use Parts of Computer-5 sidebar links for NIC, router, switch, hub detail pages.',
                    ],
                },
                {
                    topic: 'WINDOWS OS-4',
                    emoji: '🗜️',
                    outcome:
                        'Windows OS-4 taught ZIP/RAR compression, PDF workflow, and Control Panel/Settings navigation. ZIP shrinks and bundles files; extract before editing. RAR may need approved software. PDF preserves layout for homework. Control Panel and Settings adjust display, sound, programs, and users—follow school rules before changes.',
                    highlights: [
                        'Rename zip files clearly: ProjectName.zip.',
                        'Save As PDF from Word for teacher submissions.',
                        'Win + I opens Settings on modern Windows.',
                        'Ask IT before uninstalling or changing network settings.',
                    ],
                },
                {
                    topic: 'TYPING SKILLS-4',
                    emoji: '⌨️',
                    outcome:
                        'Typing Skills-4 added paragraph tasks, punctuation drills, timed originals, and a certification checklist. Accuracy beats reckless speed. Home row, posture, and gentle hands remain essential. Certification confirms readiness for longer essays in Class 7.',
                    highlights: [
                        'Tasks page: warm-up, punctuation, numbers, timed original.',
                        'Save Typing4_Practice.txt and Typing4_Original.txt.',
                        'Certification requires teacher sign-off on checklist items.',
                        'Ten minutes daily practice builds muscle memory.',
                    ],
                },
                {
                    topic: 'MS WORD-3',
                    emoji: '📝',
                    outcome:
                        'MS Word-3 explored Draw (ink and highlights), Design (themes, colours, borders), Layout (margins, orientation, columns, breaks), and Review (spelling, word count, comments). These tabs polish reports after Word-2 Insert skills.',
                    highlights: [
                        'Draw for quick diagrams; Insert Shapes for precise geometry.',
                        'One theme per group project for consistent look.',
                        'Landscape orientation helps wide tables.',
                        'Spell-check last; read suggestions carefully.',
                    ],
                },
                {
                    topic: 'MS PPT-1',
                    emoji: '📽️',
                    outcome:
                        'MS PPT-1 introduced PowerPoint: slides for presentations, open/close/save habits, print handouts, Help/Tell Me, and Home tab clipboard plus New Slide layouts. One main idea per slide; big titles; short bullets.',
                    highlights: [
                        'Save Class6_PPT1_Practice.pptx often (Ctrl+S).',
                        'Slide Show (F5); Esc to exit.',
                        'Print handouts to PDF to save paper.',
                        'Home → New Slide → Title and Content for most lesson slides.',
                    ],
                },
                {
                    topic: 'ALGORITHMS',
                    emoji: '🧩',
                    outcome:
                        'Algorithms are ordered step-by-step instructions—like recipes. Computers need precision; ambiguous steps cause bugs. Decompose big tasks into smaller steps. Debug by tracing where order went wrong. Algorithms underpin coding and connect to AI learning loops.',
                    highlights: [
                        'Number your steps; test on a friend.',
                        'Decomposition breaks elephants into bite-sized tasks.',
                        'Fix plan on paper before writing code.',
                        'Link to AI-3: ML adjusts steps using data.',
                    ],
                },
                {
                    topic: 'AI-3',
                    emoji: '✨',
                    outcome:
                        'AI-3 explained Basic AI Working: machine learning from examples, training vs testing, pattern recognition, good vs bad data, and simple algorithm loops. Builds on Class 5 AI-2 with honest, kid-safe habits—verify facts, protect privacy, question bias.',
                    highlights: [
                        'Training = practice; testing = exam on new data.',
                        'Patterns in faces, words, and sounds guide guesses.',
                        'Bad labels or missing diversity hurt fairness.',
                        'Algorithms + data together power modern AI tools.',
                    ],
                },
                {
                    topic: 'QUIZ',
                    emoji: '🏆',
                    outcome:
                        'The Class 6 quiz checks networking, Windows file skills, typing, Word, PowerPoint, algorithms, and AI-3. Submit all answers; subscription unlocks correct-answer feedback and extra practice.',
                    highlights: [
                        'Questions use only Class 6 lesson content.',
                        'Revise weak topics via sidebar before retaking.',
                        'Show parents one networking device you can explain.',
                        'Celebrate finishing Class 6 before moving to Class 7.',
                    ],
                },
            ],
            summaryFooter: [
                'Class 6 made you a stronger digital citizen: connected hardware knowledge, file mastery, polished documents and slides, logical thinking, and AI awareness. Keep neat file names, ask adults before system changes, and practise typing daily.',
                'When ready, try the quiz again, save one PDF and one PPT to your portfolio, and step into Class 7 for DOS, flowcharts, Python, and more.',
            ],
            sections: [],
        },
    },
];
