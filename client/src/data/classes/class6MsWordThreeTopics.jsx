import React from 'react';
import { FileText } from 'lucide-react';
import {
    MS_WORD3_HUB_HERO,
    MS_WORD3_DRAW,
    MS_WORD3_DESIGN,
    MS_WORD3_LAYOUT,
    MS_WORD3_REVIEW,
} from './class6MsWordThreeImages';

const wordIcon = <FileText className="w-5 h-5 text-indigo-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'creative_tools',
        icon: wordIcon,
        content: { heading, text, sections },
    };
}

/** Class 6 (d) — MS Word-3 hub + four ribbon tabs. */
export const msWordThreeTopics = [
    {
        id: 'ms-word-3',
        title: 'MS WORD-3',
        category: 'creative_tools',
        icon: wordIcon,
        children: [
            { label: 'Working draw menu', topicId: 'ms-word-3-draw-menu' },
            { label: 'Working with design menu', topicId: 'ms-word-3-design-menu' },
            { label: 'Working with layout menu', topicId: 'ms-word-3-layout-menu' },
            { label: 'Working with review menu', topicId: 'ms-word-3-review-menu' },
        ],
        content: {
            heading: 'MS WORD-3',
            text:
                'Class 6 MS Word-3 goes beyond Insert skills from Word-2. You will use Draw for ink and shapes on the page, Design for themes and colours, Layout for margins and columns, and Review for spelling, word count, and comments before you submit homework.',
            hubHeroImage: MS_WORD3_HUB_HERO,
            unitTitle: 'MS Word-3 — Draw, Design, Layout & Review',
            firstLessonId: 'ms-word-3-draw-menu',
            firstLessonLabel: 'Working draw menu',
            unitDetail: {
                intro:
                    'Word is a full publishing tool. The Draw tab lets you sketch arrows and highlight text with digital pen tools (or mouse). Design applies coordinated fonts and colours across the whole document. Layout controls paper size, margins, orientation, and columns for newsletters. Review finds spelling mistakes, counts words for essay limits, and adds teacher comments. Together these tabs polish Class 6 projects.',
                analogy:
                    'If your document is a school magazine, Draw is the illustrator adding arrows and circles. Design is the art director picking matching fonts and colours. Layout is the printer choosing page size and column width. Review is the editor catching typos before parents read the final copy.',
                keyPoints: [
                    { title: 'Draw tab', body: 'Pen, pencil, highlighter, and eraser for quick diagrams on the page.' },
                    { title: 'Design tab', body: 'Themes, colours, and page borders that apply document-wide.' },
                    { title: 'Layout tab', body: 'Margins, orientation, columns, and breaks for neat pages.' },
                    { title: 'Review tab', body: 'Spelling & grammar, word count, thesaurus, and comments.' },
                ],
            },
            unitWhyLearn: [
                'Draw tab helps science diagrams without switching to Paint.',
                'Design themes make group projects look unified.',
                'Layout skills prepare you for newsletters and multi-column reports.',
                'Review tab catches errors before teachers grade your work.',
            ],
            unitHowToStudy: [
                'Use one practice file: Class6_Word3Practice.docx.',
                'Complete tabs in order: Draw → Design → Layout → Review.',
                'Save after each tab’s main exercise.',
                'Finish with spell-check on a full paragraph you typed yourself.',
            ],
            sections: [
                section('Draw — ink on the page', 'Highlight key words and draw arrows to labels.', MS_WORD3_DRAW),
                section('Design — themes', 'Apply a theme so headings and body text match.', MS_WORD3_DESIGN),
                section('Layout — margins & columns', 'Set margins for binding and try two columns for articles.', MS_WORD3_LAYOUT),
                section('Review — spell check', 'Run Editor or Spelling and read each suggestion carefully.', MS_WORD3_REVIEW),
            ],
        },
    },
    subLesson(
        'ms-word-3-draw-menu',
        'Working draw menu',
        'Working with the Draw Menu',
        'The Draw tab adds pen, pencil, highlighter, and eraser tools directly on your Word page—useful for labelling diagrams.',
        [
            section(
                'Open Draw tools',
                'Click the Draw tab on the ribbon.\n\nChoose Pen or Pencil for thin lines; Highlighter for transparent yellow marks.\n\nSelect ink colour and thickness from the gallery.\n\nOn touch screens, use stylus; on lab PCs, use mouse carefully.',
                MS_WORD3_DRAW
            ),
            section(
                'Draw shapes and arrows',
                'Use Ink to Shape (if available) to turn rough sketches into neat circles and rectangles.\n\nDraw arrows pointing to parts of an inserted picture.\n\nUse Eraser to remove stray strokes without deleting typed text.',
                MS_WORD3_DRAW,
                {
                    bullets: ['Draw after inserting a picture so labels stay near the image.', 'Keep drawings simple for school reports.', 'Undo (Ctrl+Z) fixes shaky lines.'],
                }
            ),
            section(
                'When to use Draw vs Insert Shapes',
                'Insert → Shapes gives perfect geometry; Draw gives freehand feel.\n\nFor exams and formal reports, prefer Insert Shapes.\n\nFor quick brainstorm maps, Draw is faster.',
                MS_WORD3_DRAW
            ),
        ]
    ),
    subLesson(
        'ms-word-3-design-menu',
        'Working with design menu',
        'Working with the Design Menu',
        'Design tab controls document-wide look: themes, colour sets, fonts, and page borders.',
        [
            section(
                'Apply a Theme',
                'Design → Themes hover to preview.\n\nA theme changes heading font, body font, and colours together.\n\nPick one theme for the whole group project so every page matches.',
                MS_WORD3_DESIGN
            ),
            section(
                'Colours and Fonts',
                'Design → Colors for alternate palettes (choose readable contrast).\n\nDesign → Fonts for heading/body pairs.\n\nAvoid neon combinations that hurt eyes on projectors.',
                MS_WORD3_DESIGN,
                {
                    bullets: ['Dark text on light background for main paragraphs.', 'Use school colours only if teacher approves.', 'Preview on projector before presenting.'],
                }
            ),
            section(
                'Page Borders and Watermark',
                'Design → Page Borders → Box or Art for decorative edges (certificates, invitations).\n\nWatermark adds faint background text like DRAFT—advanced; teacher demo first.',
                MS_WORD3_DESIGN
            ),
        ]
    ),
    subLesson(
        'ms-word-3-layout-menu',
        'Working with layout menu',
        'Working with the Layout Menu',
        'Layout tab sets margins, orientation, columns, and breaks so pages print correctly.',
        [
            section(
                'Margins and Orientation',
                'Layout → Margins → Normal, Narrow, or Moderate.\n\nLayout → Orientation → Portrait (tall) or Landscape (wide) for wide tables.\n\nCheck Print Preview before submitting chart homework.',
                MS_WORD3_LAYOUT
            ),
            section(
                'Columns and Breaks',
                'Layout → Columns → Two for newsletter style.\n\nBreaks → Page Break starts a new page; Section Break splits formatting within one file.\n\nUse page break before bibliography so it always starts fresh.',
                MS_WORD3_LAYOUT,
                {
                    bullets: ['Wide tables may need landscape.', 'Do not squeeze text with tiny margins.', 'Save before changing orientation.'],
                }
            ),
            section(
                'Size and Indent',
                'Layout → Size picks A4 (common in schools) or Letter.\n\nParagraph Indent on Home tab pairs with layout for neat first lines.\n\nAsk teacher which paper size your school prints.',
                MS_WORD3_LAYOUT
            ),
        ]
    ),
    subLesson(
        'ms-word-3-review-menu',
        'Working with review menu',
        'Working with the Review Menu',
        'Review tab checks spelling, counts words, suggests synonyms, and tracks comments for teacher feedback.',
        [
            section(
                'Spelling & Grammar',
                'Review → Editor or Spelling & Grammar.\n\nRed underline = possible misspelling; blue = grammar suggestion.\n\nRead each suggestion—do not accept all blindly (proper nouns may flag wrongly).',
                MS_WORD3_REVIEW
            ),
            section(
                'Word Count and Thesaurus',
                'Review → Word Count shows words, characters, pages—useful when teacher sets “200 words max.”\n\nThesaurus (Synonyms) finds alternate words—pick ones you actually understand.',
                MS_WORD3_REVIEW,
                {
                    bullets: ['Run spell-check last, after all edits.', 'Compare word count before and after trimming fluff.', 'Never paste thesaurus words you cannot define.'],
                }
            ),
            section(
                'Comments and Track Changes',
                'Review → New Comment for peer review notes.\n\nTrack Changes (advanced) shows edits in colour—teachers use this for corrections.\n\nAccept/Reject changes only when teacher instructs.',
                MS_WORD3_REVIEW
            ),
        ]
    ),
];
