import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';

/** Class 7 — SUMMARY and QUIZ. */
export const class7SummaryQuizTopics = [
    {
        id: 'class-quiz',
        title: 'QUIZ',
        category: 'assessment',
        icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
        content: {
            heading: 'Class 7 Quiz (10 Questions)',
            text:
                'Pick the best answer for each question—everything comes from your Class 7 lessons. Submit when you are done. To see which answers are correct, subscribe and unlock full quiz feedback.',
            quizQuestions: [
                {
                    question: 'In Command Prompt, which command lists files and folders in the current directory?',
                    options: ['dir', 'cls', 'mkdir', 'exit'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'MS Word Mailings tab is mainly used for:',
                    options: [
                        'Labels, envelopes, and mail merge from a name list',
                        'Playing slide transitions',
                        'Writing Python code',
                        'Drawing flowchart diamonds',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In PowerPoint, Transitions control:',
                    options: [
                        'How one slide changes to the next during a slideshow',
                        'Only the font colour of bullet text',
                        'Internet LAN vs WAN speed',
                        'HTML paragraph spacing',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In a flowchart, a diamond shape usually means:',
                    options: ['A decision or question with yes/no paths', 'Start or End only', 'A math process like Add', 'A comment ignored by computer'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'In Python, print("Hello") does what?',
                    options: ['Displays Hello on the screen', 'Deletes the file', 'Connects to Wi-Fi', 'Creates a PowerPoint slide'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'A LAN (Local Area Network) typically covers:',
                    options: ['One building or campus such as a school lab', 'Every country on Earth', 'Only outer space satellites', 'A single letter on keyboard'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'Which HTML tag is used for the largest main heading on a page?',
                    options: ['<h1>', '<p>', '<br>', '<html>'],
                    correctOptionIndex: 0,
                },
                {
                    question: 'An intranet is:',
                    options: [
                        'A private internal network/websites for an organization',
                        'The same as the public global internet',
                        'A type of Python variable',
                        'A PowerPoint transition effect',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'Training a cat-vs-dog image model teaches students that AI:',
                    options: [
                        'Learns patterns from labeled examples and is tested on new images',
                        'Never makes mistakes after one photo',
                        'Works without any data',
                        'Replaces all doctors immediately',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question: 'Python variable score = 10 stores:',
                    options: [
                        'The number 10 in a named place memory can reuse',
                        'Ten different print commands',
                        'A Wi-Fi password automatically',
                        'Only text that cannot change',
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
            heading: 'Class 7 — Full Learning Summary',
            text:
                'Review Command Prompt, Word-4, PPT-2, flowcharts, Python-1, Internet-1, HTML-1, AI-4, and the quiz.',
            summaryIntro: [
                'Class 7 is a big leap: terminal commands, advanced Office skills, logic diagrams, your first Python programs, web pages in HTML, internet architecture, and hands-on AI projects. Use this page before the quiz and revisit any sidebar lesson for deeper practice.',
                'You connect tools (Word, PPT) with thinking skills (flowcharts, Python) and real-world technology (internet, AI). Keep portfolios: .py files, .html pages, and screenshots of AI activities.',
            ],
            summaryChecklist: [
                'Run dir, cd, mkdir, cls in Command Prompt on a practice folder.',
                'Complete Word mail merge mini exercise and use Navigation Pane.',
                'Build 5-slide PPT with theme and one calm transition.',
                'Draw flowchart for even/odd with Start, Input, Decision, Output, End.',
                'Write Python hello_name.py and calculator.py with comments.',
                'Explain LAN vs WAN and give two internet applications.',
                'Publish about_me.html with h1, h2, p, br, hr tags.',
                'Describe one hands-on AI activity and one real-life AI use case.',
                'Complete Class 7 quiz; subscribe for full answer feedback when ready.',
            ],
            summaryRows: [
                {
                    topic: 'WORKING WITH COMMAND PROMPT',
                    emoji: '⌨️',
                    outcome:
                        'Command Prompt (cmd) runs text commands: dir lists files, cd changes folder, mkdir creates folder, cls clears screen, exit closes. Paths use backslashes on Windows. Foundation for Python terminals and IT troubleshooting—with safety rules on school PCs.',
                    highlights: ['Open via Start → cmd.', 'Never run unknown commands from internet.', 'Programmers use terminals daily.'],
                },
                {
                    topic: 'MS WORD-4',
                    emoji: '📝',
                    outcome:
                        'Word-4 Mailings tab: envelopes, labels, mail merge from recipient lists. View tab: Print Layout, Read Mode, Outline, Navigation Pane, zoom. Exercises combine merge + navigation + PDF export for graded projects.',
                    highlights: ['Merge fields <<Name>> personalize documents.', 'Outline needs Heading styles.', 'Save merge template and data separately.'],
                },
                {
                    topic: 'PPT-2',
                    emoji: '📽️',
                    outcome:
                        'PPT-2 adds drawing shapes, Insert media/charts, Draw ink, Design themes, Transitions between slides. Balance motion with clarity—short fades beat chaotic effects during speeches.',
                    highlights: ['Group shapes for diagrams.', 'Test video playback before presenting.', 'Slide Show F5; Esc exits.'],
                },
                {
                    topic: 'FLOWCHARTS',
                    emoji: '🔷',
                    outcome:
                        'Flowcharts map algorithms: oval Start/End, rectangle Process, parallelogram I/O, diamond Decision. Examples: tea making, even/odd, login check. Test by hand-tracing inputs before Python.',
                    highlights: ['Label Yes/No on decision arrows.', 'Every path reaches End.', 'Links to Class 6 algorithms.'],
                },
                {
                    topic: 'PYTHON-1',
                    emoji: '🐍',
                    outcome:
                        'Python-1: print(), comments, input(), variables, int/float/str, +−*/ math, f-strings intro. Activities: Hello My Name program and two-number calculator. Install locally or use Colab per school policy.',
                    highlights: ['Indentation matters.', 'input() returns string—convert for math.', 'Type code; read errors carefully.'],
                },
                {
                    topic: 'INTERNET-1',
                    emoji: '🌐',
                    outcome:
                        'Internet = global network of networks. Applications: education, email, commerce, cloud. LAN (building), MAN (city), WAN (wide). Intranet = private org network. Builds on Class 6 routers/NIC.',
                    highlights: ['ISP connects home to WAN.', 'Safe browsing and source checking.', 'Intranet needs login.'],
                },
                {
                    topic: 'HTML-1',
                    emoji: '🌍',
                    outcome:
                        'HTML structures webpages: html/head/body, title, h1–h6, p, br, hr. Hello World first file. About Me activity combines all tags—save .html, open in browser, validate closing tags.',
                    highlights: ['One h1 per page.', 'View Source to learn (not copy blindly).', 'CSS comes in Class 8.'],
                },
                {
                    topic: 'AI-4',
                    emoji: '🤖',
                    outcome:
                        'AI-4 hands-on: train cat/dog model, rule chatbot, Scratch AI, voice mini-project, draw-guess games. Real life: healthcare assist, car sensors, ed apps, security CCTV, smart farming—with ethics and human oversight.',
                    highlights: ['School-safe datasets only.', 'Training vs testing in every project.', 'AI assists; humans decide important outcomes.'],
                },
                {
                    topic: 'QUIZ',
                    emoji: '🏆',
                    outcome:
                        'Class 7 quiz covers all units above. Submit answers; subscription unlocks scoring details. Use results to revisit weak sidebar lessons.',
                    highlights: ['Based on Class 7 content only.', 'Portfolio + quiz = ready for Class 8.'],
                },
            ],
            summaryFooter: [
                'Class 7 proves you can command a terminal, publish a webpage, write Python, present with PowerPoint, and experiment with AI responsibly. Save your best files in one folder for open house.',
                'Next: Class 8 adds CSS, Excel, more Python, and deeper web styling—bring your HTML About Me page forward.',
            ],
            sections: [],
        },
    },
];
