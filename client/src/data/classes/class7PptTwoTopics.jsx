import React from 'react';
import { Presentation } from 'lucide-react';

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

/** Class 7 (c) — PPT-2 hub + five sub-lessons. */
export const pptTwoTopics = [
    {
        id: 'ppt-2',
        title: 'PPT-2',
        category: 'creative_tools',
        icon: pptIcon,
        children: [
            { label: 'Working with drawing', topicId: 'ppt-2-drawing' },
            { label: 'Working with insert menu', topicId: 'ppt-2-insert-menu' },
            { label: 'Working with draw menu', topicId: 'ppt-2-draw-menu' },
            { label: 'Working with design menu', topicId: 'ppt-2-design-menu' },
            { label: 'Working with transitions menu', topicId: 'ppt-2-transitions' },
        ],
        content: {
            heading: 'PPT-2',
            text:
                'Class 7 PPT-2 builds on PPT-1 with drawing tools, Insert media, Draw ink, Design themes, and Transitions between slides—making presentations clearer and more engaging.',
            hubHeroImage: 'https://loremflickr.com/800/500/powerpoint,presentation,design',
            unitTitle: 'PPT-2 — Draw, Insert, Design & Transitions',
            firstLessonId: 'ppt-2-drawing',
            firstLessonLabel: 'Working with drawing',
            unitDetail: {
                intro:
                    'Strong slides combine words, pictures, and motion without distracting from your speech. PPT-2 walks through drawing on slides, inserting charts and videos, using Draw tab ink, applying Design themes consistently, and adding Transitions so slide changes feel smooth—not chaotic.',
                analogy:
                    'Your talk is the movie script; slides are props. Drawing highlights one prop; Insert adds new props; Design picks the set colour; Transitions are scene changes—one fade beats twenty random spins.',
                keyPoints: [
                    { title: 'Drawing tools', body: 'Shapes and lines for quick diagrams on slides.' },
                    { title: 'Insert tab', body: 'Pictures, shapes, icons, video, audio, charts.' },
                    { title: 'Draw tab', body: 'Pen and highlighter for live annotation.' },
                    { title: 'Design & Transitions', body: 'Themes unify look; transitions control slide changes.' },
                ],
            },
            unitWhyLearn: [
                'Science and social studies oral exams need visual support.',
                'Controlled animation keeps audience attention on you.',
                'Prepares for Class 8+ multimedia projects.',
            ],
            unitHowToStudy: [
                'File: Class7_PPT2_Practice.pptx — 5 slides minimum by end.',
                'One skill per lesson; save after each tab practice.',
                'Present to a partner; ask if motion helps or distracts.',
            ],
            sections: [
                section('Drawing on slides', 'Arrows, boxes, and connectors for diagrams.', 'https://loremflickr.com/700/450/drawing,shapes,slide'),
                section('Transitions', 'Fade and Push vs flashy effects—choose calm defaults.', 'https://loremflickr.com/700/450/presentation,transition,screen'),
            ],
        },
    },
    subLesson(
        'ppt-2-drawing',
        'Working with drawing',
        'Working with Drawing on Slides',
        'Use shapes and lines (Insert → Shapes or Drawing toolbar) to build simple diagrams directly on slides.',
        [
            section(
                'Insert shapes for diagrams',
                'Insert → Shapes → rectangle, oval, arrow.\n\nDrag on slide to draw; Shift constrains proportions.\n\nShape Format → Fill and Outline colours.\n\nGroup shapes (Ctrl+G) so they move together.',
                'https://loremflickr.com/700/450/flowchart,shapes,powerpoint'
            ),
            section(
                'Connectors and text boxes',
                'Use elbow connectors between boxes in flow mini-charts.\n\nRight-click → Add Text on shapes.\n\nAlign tools (Shape Format → Align) line up tops and centers.',
                'https://loremflickr.com/700/450/diagram,arrows,chart',
                {
                    bullets: ['Keep diagrams simple—5 shapes max for Class 7.', 'Dark outlines on light backgrounds.', 'Duplicate slide to reuse diagram layout.'],
                }
            ),
        ]
    ),
    subLesson(
        'ppt-2-insert-menu',
        'Working with insert menu',
        'Working with the Insert Menu',
        'Insert tab adds pictures, icons, video, audio, charts, and more objects to slides.',
        [
            section(
                'Pictures, icons, video',
                'Insert → Pictures → This Device (school folder only).\n\nIcons → search science symbols with teacher permission.\n\nVideo → linked or embedded; test playback before presenting.\n\nAudio → background music only if teacher allows.',
                'https://loremflickr.com/700/450/insert,video,slide'
            ),
            section(
                'Charts and tables',
                'Insert → Chart → column or pie from small data table.\n\nEdit data in Excel sheet popup.\n\nInsert → Table for timetables on slides.',
                'https://loremflickr.com/700/450/chart,graph,presentation'
            ),
        ]
    ),
    subLesson(
        'ppt-2-draw-menu',
        'Working with draw menu',
        'Working with the Draw Menu',
        'Draw tab provides pen, pencil, highlighter, and eraser for ink annotations during edit or presentation (device dependent).',
        [
            section(
                'Ink tools',
                'Draw → Pen / Pencil / Highlighter.\n\nPick colour and thickness.\n\nUse Eraser to remove strokes.\n\nConvert Ink to Shape (if available) neatens hand-drawn boxes.',
                'https://loremflickr.com/700/450/stylus,drawing,tablet'
            ),
            section(
                'When to use Draw vs Shapes',
                'Draw for quick emphasis during live demo.\n\nShapes for permanent neat diagrams in saved file.\n\nPractice on duplicate slide first.',
                'https://loremflickr.com/700/450/highlight,marker,text'
            ),
        ]
    ),
    subLesson(
        'ppt-2-design-menu',
        'Working with design menu',
        'Working with the Design Menu',
        'Design tab applies themes, variants, and slide size for a consistent professional look.',
        [
            section(
                'Themes and variants',
                'Design → hover themes to preview entire deck.\n\nVariants change colours/fonts within theme.\n\nSlide Size → Standard 4:3 or Widescreen 16:9 (match projector).',
                'https://loremflickr.com/700/450/design,theme,slides'
            ),
            section(
                'Format Background',
                'Right-click slide → Format Background → solid or picture.\n\nAvoid busy photos behind small text.\n\nOne theme per project unless teacher says otherwise.',
                'https://loremflickr.com/700/450/background,color,slide'
            ),
        ]
    ),
    subLesson(
        'ppt-2-transitions',
        'Working with transitions menu',
        'Working with the Transitions Menu',
        'Transitions control how one slide replaces another during Slide Show.',
        [
            section(
                'Apply transitions',
                'Select slide thumbnail → Transitions → Fade or Push.\n\nEffect Options → direction.\n\nDuration — keep under 1 second for school talks.\n\nApply To All for uniform feel (optional).',
                'https://loremflickr.com/700/450/slide,transition,effect'
            ),
            section(
                'Timing and good taste',
                'Advance Slide On Mouse Click (default) gives you control.\n\nAvoid loud sound effects in quiet classrooms.\n\nAnimations (separate tab) animate objects; Transitions animate whole slide.',
                'https://loremflickr.com/700/450/presentation,projector,class',
                {
                    bullets: ['Test on classroom PC before speech day.', 'Less motion = more focus on your voice.', 'Esc exits Slide Show instantly.'],
                }
            ),
        ]
    ),
];
