import React from 'react';
import { Presentation } from 'lucide-react';
import { MS_PPT1_HUB_HERO, MS_PPT1_INTRO, MS_PPT1_HOME } from './class6MsPptOneImages';

const pptIcon = <Presentation className="w-5 h-5 text-orange-500" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'creative_tools',
        icon: pptIcon,
        content: { heading, text, sections },
    };
}

/** Class 6 (e) — MS PPT-1 hub + six sub-lessons. */
export const msPptOneTopics = [
    {
        id: 'ms-ppt-1',
        title: 'MS PPT-1',
        category: 'creative_tools',
        icon: pptIcon,
        children: [
            { label: 'What is Powerpoint?', topicId: 'ms-ppt-1-what-is-powerpoint' },
            { label: 'Open a presentation', topicId: 'ms-ppt-1-open' },
            { label: 'Close', topicId: 'ms-ppt-1-close' },
            { label: 'Print', topicId: 'ms-ppt-1-print' },
            { label: 'Help', topicId: 'ms-ppt-1-help' },
            { label: 'Working home menu (clipboard, slides section)', topicId: 'ms-ppt-1-home-menu' },
        ],
        content: {
            heading: 'MS PPT-1',
            text:
                'Class 6 MS PPT-1 introduces Microsoft PowerPoint—slides on a big screen while you speak. Learn what presentations are, how to open and close files safely, print handouts, use Help, and master the Home tab clipboard and Slides section.',
            hubHeroImage: MS_PPT1_HUB_HERO,
            unitTitle: 'MS PPT-1 — First Steps in PowerPoint',
            firstLessonId: 'ms-ppt-1-what-is-powerpoint',
            firstLessonLabel: 'What is Powerpoint?',
            unitDetail: {
                intro:
                    'PowerPoint (PPT) shows one slide at a time on a projector while you explain a topic—dinosaurs, water cycle, or book report. Each slide can hold titles, bullet points, pictures, and diagrams. Class 6 starts with file basics (open, close, print, help) then Home tab skills: cut/copy/paste and adding new slides with layouts.',
                analogy:
                    'A presentation is like a stack of flash cards you show on a giant screen. You still talk and teach—the slides support your voice, not replace it. Opening and closing the deck is like opening and closing your textbook; printing is photocopying one slide per page for notes.',
                keyPoints: [
                    { title: 'Slides tell a story', body: 'One main idea per slide; audience reads less, listens more.' },
                    { title: 'File safety', body: 'Save often; close with Save when asked; do not pull power mid-save.' },
                    { title: 'Print options', body: 'Full slide, handouts (multiple per page), or notes for speakers.' },
                    { title: 'Home tab', body: 'Clipboard for copy/paste; Slides group for New Slide and layouts.' },
                ],
            },
            unitWhyLearn: [
                'Presentations appear in science fairs, language oral exams, and group projects.',
                'Early PPT skills reduce fear of speaking with visual support.',
                'Print and Help tools solve common lab problems quickly.',
            ],
            unitHowToStudy: [
                'Create Class6_PPT1_Practice.pptx and save after every lesson step.',
                'Follow sidebar order from What is PowerPoint through Home menu.',
                'Present one 3-slide mini talk to a friend or family member.',
            ],
            sections: [
                section('What is PowerPoint?', 'Slides + speaker = presentation.', MS_PPT1_INTRO),
                section('Home tab preview', 'New Slide, layouts, clipboard tools.', MS_PPT1_HOME),
            ],
        },
    },
    subLesson(
        'ms-ppt-1-what-is-powerpoint',
        'What is Powerpoint?',
        'What is PowerPoint?',
        'PowerPoint is presentation software. Each screen is a slide; together they form a slideshow for class talks.',
        [
            section(
                'Definition',
                'Microsoft PowerPoint helps you build slideshows with text, pictures, charts, and animations. Teachers project them on whiteboards; students use them for oral reports.\n\nFile extension: .pptx (older .ppt).',
                MS_PPT1_INTRO
            ),
            section(
                'Parts of the window',
                'Slide pane (big center), Slides thumbnail list (left), Ribbon tabs (top), Notes area (optional bottom for speaker notes).\n\nSlide Show view fills the screen—press Esc to exit.',
                MS_PPT1_INTRO,
                {
                    bullets: ['Normal view for editing.', 'Slide Show for presenting.', 'Reading View for quiet review.'],
                }
            ),
            section(
                'Good slide habits',
                'Big readable title; 3–5 short bullets max; one photo that supports your speech.\n\nDo not paste entire essay on one slide—audience cannot read and listen at once.',
                MS_PPT1_INTRO
            ),
        ]
    ),
    subLesson(
        'ms-ppt-1-open',
        'Open a presentation',
        'Open a Presentation',
        'Learn to start PowerPoint and open new or existing .pptx files from the lab or your folder.',
        [
            section(
                'Start PowerPoint',
                'Start menu → Microsoft PowerPoint.\n\nBlank Presentation for new file.\n\nOpen Other Presentations → browse to Documents or teacher share.',
                MS_PPT1_INTRO
            ),
            section(
                'Open existing file',
                'File → Open → This PC → select MyReport.pptx.\n\nDouble-click .pptx in File Explorer also works.\n\nIf “Protected View” yellow bar appears, click Enable Editing only for trusted school files.',
                MS_PPT1_INTRO,
                {
                    bullets: ['Pin PowerPoint to taskbar for faster lab access.', 'Use recent files list for yesterday’s practice.', 'Never open unknown email attachments.'],
                }
            ),
            section(
                'Save As first time',
                'File → Save As → Class6_TopicName.pptx in your folder.\n\nSave every few minutes—Ctrl+S is your friend.',
                MS_PPT1_INTRO
            ),
        ]
    ),
    subLesson(
        'ms-ppt-1-close',
        'Close',
        'Close a Presentation',
        'Closing correctly protects your work and frees the computer for the next student.',
        [
            section(
                'Close file vs exit app',
                'File → Close closes current presentation; PowerPoint may stay open.\n\nFile → Exit closes the whole program.\n\nClick X on title bar—if unsaved, PowerPoint asks Save / Don’t Save / Cancel.',
                MS_PPT1_INTRO
            ),
            section(
                'Always save before close',
                'If dialog appears: choose Save if work is finished.\n\nDon’t Save only for blank test files you discard.\n\nCancel returns to fix forgotten slide.',
                MS_PPT1_INTRO,
                {
                    bullets: ['On shared PCs, close file and sign out if school requires.', 'Upload copy to classroom portal if teacher assigns.', 'Never force shutdown during save spinner.'],
                }
            ),
        ]
    ),
    subLesson(
        'ms-ppt-1-print',
        'Print',
        'Print a Presentation',
        'Print full slides or handouts for notes and study sheets.',
        [
            section(
                'Print dialog',
                'File → Print.\n\nChoose printer (lab printer or Microsoft Print to PDF).\n\nCopies, color vs grayscale, and layout: Full Page Slides or Handouts (2 or 6 per page).',
                MS_PPT1_INTRO
            ),
            section(
                'Handouts for study',
                'Handouts print tiny slides with lines beside them—good for revision.\n\nNotes Pages print speaker notes under each slide (advanced).\n\nPreview on right before Print button.',
                MS_PPT1_INTRO,
                {
                    bullets: ['Ask teacher before color printing.', 'PDF handout saves paper—Print to PDF.', 'Check orientation portrait vs landscape.'],
                }
            ),
        ]
    ),
    subLesson(
        'ms-ppt-1-help',
        'Help',
        'Help in PowerPoint',
        'Use built-in Help and Tell Me when you forget a button name.',
        [
            section(
                'Tell Me / Search',
                'Click “Tell me what you want to do” on ribbon (or F1).\n\nType “print handouts” or “new slide” for quick links.\n\nHelp pane shows steps and short videos (online if allowed).',
                MS_PPT1_INTRO
            ),
            section(
                'When to ask a human',
                'Help explains software—not your speech content.\n\nAsk teacher for project rules; ask IT for printer jams.\n\nWrite error messages exactly when requesting help.',
                MS_PPT1_INTRO
            ),
        ]
    ),
    subLesson(
        'ms-ppt-1-home-menu',
        'Working home menu (clipboard, slides section)',
        'Working with the Home Menu — Clipboard & Slides',
        'Home tab is your daily toolbox: cut, copy, paste, and build slides with layouts.',
        [
            section(
                'Clipboard group',
                'Cut (Ctrl+X) moves selection away.\n\nCopy (Ctrl+C) duplicates.\n\nPaste (Ctrl+V) places clipboard contents on slide or in text box.\n\nFormat Painter copies text look to another phrase (one-click trick).',
                MS_PPT1_HOME
            ),
            section(
                'Slides group',
                'New Slide dropdown adds blank or titled layouts.\n\nLayout changes placeholder arrangement (Title Only, Title and Content, Two Content).\n\nReset reverts slide to default layout styling.\n\nDelete removes current slide—Undo if mistake.',
                MS_PPT1_HOME,
                {
                    bulletsHeading: 'Practice task',
                    bullets: [
                        'Slide 1: Title layout with project name.',
                        'Slide 2: Title and Content with three bullets.',
                        'Slide 3: Duplicate slide 2 and edit bullets (Copy/Paste trick).',
                    ],
                }
            ),
            section(
                'Font and Paragraph on Home',
                'Bold title, enlarge font for back-row readers.\n\nBullets button for lists; Numbering for steps.\n\nAlign text boxes so slides look balanced.',
                MS_PPT1_HOME
            ),
        ]
    ),
];
