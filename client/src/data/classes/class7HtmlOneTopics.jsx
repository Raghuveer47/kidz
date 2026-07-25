import React from 'react';
import { Code2 } from 'lucide-react';

const htmlIcon = <Code2 className="w-5 h-5 text-orange-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'internet',
        icon: htmlIcon,
        content: { heading, text, sections },
    };
}

/** Class 7 (g) — HTML-1 hub + beginner lessons + About Me activity. */
export const htmlOneTopics = [
    {
        id: 'html-1',
        title: 'HTML-1',
        category: 'internet',
        icon: htmlIcon,
        children: [
            { label: 'What is HTML? (building blocks of a webpage)', topicId: 'html-1-what-is-html' },
            { label: 'Structure of a web page (<html>, <head>, <body>)', topicId: 'html-1-structure' },
            { label: 'First webpage: Hello World', topicId: 'html-1-hello-world' },
            { label: 'Headings (<h1> to <h6>)', topicId: 'html-1-headings' },
            { label: 'Paragraphs (<p>)', topicId: 'html-1-paragraphs' },
            { label: 'Line breaks and spacing (<br>, <hr>)', topicId: 'html-1-line-breaks' },
            { label: 'Activity: Create a simple About Me page', topicId: 'html-1-activity-about-me' },
        ],
        content: {
            heading: 'HTML-1',
            text:
                'Class 7 HTML-1 teaches the building blocks of every webpage: tags, document structure, Hello World, headings, paragraphs, breaks, and an About Me activity you can open in any browser.',
            hubHeroImage: 'https://loremflickr.com/800/500/html,webpage,code',
            unitTitle: 'HTML-1 — Getting Started with Web Pages',
            firstLessonId: 'html-1-what-is-html',
            firstLessonLabel: 'What is HTML?',
            badgeLabel: 'Web Builder',
            unitDetail: {
                intro:
                    'HTML (HyperText Markup Language) describes page structure—not fancy styling (that is CSS in Class 8). Browsers read tags like <h1> and <p> to show titles and paragraphs. You will build a valid skeleton, practice six core tags, then publish a personal About Me page saved as .html.',
                analogy:
                    'HTML is the skeleton of a house: <html> is the whole building, <head> is the blueprint info, <body> is the rooms you see. Headings are big room labels; paragraphs are normal walls of text; <br> is a small doorway to the next line.',
                keyPoints: [
                    { title: 'Tags', body: 'Most come in pairs: <p> ... </p>.' },
                    { title: 'Structure', body: 'html → head + body required.' },
                    { title: 'Headings', body: 'h1 largest down to h6 smallest.' },
                    { title: 'Activity', body: 'About Me page with name, class, hobbies.' },
                ],
            },
            unitWhyLearn: [
                'Every website uses HTML underneath.',
                'Pairs with Internet-1 and future CSS classes.',
                'Instant feedback—refresh browser to see changes.',
            ],
            unitHowToStudy: [
                'Use Notepad, VS Code, or school HTML editor.',
                'Save as .html; open with Chrome/Edge.',
                'Type tags manually to learn spelling.',
                'Validate: one <h1> per page is best practice.',
            ],
            sections: [
                section('Tags', 'Angle brackets tell the browser what element means.', 'https://loremflickr.com/700/450/html,tags,code'),
                section('Hello World', 'Minimal page in ten lines.', 'https://loremflickr.com/700/450/browser,webpage,hello'),
            ],
        },
    },
    subLesson(
        'html-1-what-is-html',
        'What is HTML?',
        'What is HTML?',
        'HTML is the standard markup language for documents displayed in a web browser.',
        [
            section(
                'Building blocks',
                'HyperText — links connect pages.\n\nMarkup — tags mark structure, not appearance alone.\n\nLanguage — rules for writing tags browsers understand.\n\nWorks with CSS (style) and JavaScript (behavior) later.',
                'https://loremflickr.com/700/450/web,development,html'
            ),
            section(
                'What HTML is not',
                'Not a programming language with loops (that is Python/JS).\n\nNot secret—View Source on any site shows HTML (learning only; do not copy commercial sites as your own).',
                'https://loremflickr.com/700/450/view,source,browser'
            ),
        ]
    ),
    subLesson(
        'html-1-structure',
        'Structure of a web page',
        'Structure of a Web Page',
        'Every HTML document needs html, head, and body elements.',
        [
            section(
                'Skeleton',
                '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page Title</title>\n  </head>\n  <body>\n    <!-- visible content here -->\n  </body>\n</html>',
                'https://loremflickr.com/700/450/webpage,structure,diagram'
            ),
            section(
                'head vs body',
                'head — title tab text, meta charset, future CSS links (not shown as main text).\n\nbody — headings, paragraphs, images users read.\n\nIndent nested tags for readability.',
                'https://loremflickr.com/700/450/code,editor,html'
            ),
        ]
    ),
    subLesson(
        'html-1-hello-world',
        'Hello World',
        'First Webpage — Hello World',
        'Create the smallest valid page and open it in a browser.',
        [
            section(
                'Full example',
                '<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello</title>\n</head>\n<body>\n  <p>Hello World!</p>\n</body>\n</html>\n\nSave hello.html → double-click → browser shows Hello World!',
                'https://loremflickr.com/700/450/hello,world,website'
            ),
            section(
                'Troubleshooting',
                'Page shows code as text? File must end .html not .txt.\n\nBlank page? Check closing tags.\n\nRefresh F5 after edits; save first.',
                'https://loremflickr.com/700/450/troubleshoot,computer,kids'
            ),
        ]
    ),
    subLesson(
        'html-1-headings',
        'Headings',
        'Headings — <h1> to <h6>',
        'Heading tags define titles and section labels—h1 biggest, h6 smallest.',
        [
            section(
                'Usage',
                '<h1>Main Page Title</h1>\n<h2>Chapter</h2>\n<h3>Section</h3>\n\nUse one h1 per page for accessibility.\n\nDo not skip levels wildly (h1 then h4) without reason.',
                'https://loremflickr.com/700/450/heading,title,web'
            ),
            section(
                'Practice',
                'Build outline: h1 School Project, h2 Introduction, h2 Methods, h3 Step 1.\n\nCompare sizes in browser.',
                'https://loremflickr.com/700/450/outline,document,structure'
            ),
        ]
    ),
    subLesson(
        'html-1-paragraphs',
        'Paragraphs',
        'Paragraphs — <p>',
        'Paragraph tag wraps normal blocks of text; browser adds space between paragraphs.',
        [
            section(
                'Syntax',
                '<p>I am in Class 7. I like coding and cricket.</p>\n<p>This is my second paragraph.</p>\n\nExtra spaces inside HTML collapse to one space—use proper tags instead of many Enters in source.',
                'https://loremflickr.com/700/450/paragraph,text,web'
            ),
            section(
                'Nested rule',
                'Do not put h1 inside p.\n\nKeep structure semantic—right tag for right meaning.',
                'https://loremflickr.com/700/450/semantic,html,learning'
            ),
        ]
    ),
    subLesson(
        'html-1-line-breaks',
        'Line breaks and spacing',
        'Line Breaks — <br> and <hr>',
        'br forces a line break inside a block; hr draws a horizontal rule (thematic break).',
        [
            section(
                'Examples',
                'Address block:\n<p>123 Park Street<br>Hyderabad<br>500001</p>\n\n<hr>\n<p>Next section after a divider line.</p>\n\n<br> is self-closing in HTML5: <br> or <br />.',
                'https://loremflickr.com/700/450/line,break,format'
            ),
            section(
                'Spacing note',
                'For big gaps use CSS later; multiple <br> is poor practice.\n\nhr is decorative separator—not just a thick line for fun on every line.',
                'https://loremflickr.com/700/450/divider,section,page'
            ),
        ]
    ),
    subLesson(
        'html-1-activity-about-me',
        'Activity: About Me page',
        'Activity — Simple About Me Page',
        'Combine all tags into one personal page. Save about_me.html and submit screenshot or file.',
        [
            section(
                'Requirements',
                'One h1 with your name.\n\nh2 sections: About Me, Hobbies, Goals.\n\nAt least three p paragraphs total.\n\nOne address or list with br tags.\n\nOne hr between sections.\n\nOptional: comment <!-- Class 7 HTML activity --> in source.',
                'https://loremflickr.com/700/450/about,me,profile,kids'
            ),
            section(
                'Rubric checklist',
                '☐ Valid html/head/body\n☐ Title in head tab\n☐ Headings hierarchy neat\n☐ Opens correctly in browser\n☐ Filename about_me.html',
                'https://loremflickr.com/700/450/checklist,homework,success',
                {
                    bullets: ['Peer review partner page for missing closing tags.', 'Show teacher View Source to prove you typed it.', 'Next class: add images with HTML-2.'],
                }
            ),
        ]
    ),
];
