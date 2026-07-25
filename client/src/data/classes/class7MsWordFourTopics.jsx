import React from 'react';
import { AppWindow } from 'lucide-react';

const wordIcon = <AppWindow className="w-5 h-5 text-blue-600" />;

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

/** Class 7 (b) — MS Word-4 hub + three sub-lessons. */
export const msWordFourTopics = [
    {
        id: 'ms-word-4',
        title: 'MS WORD-4',
        category: 'creative_tools',
        icon: wordIcon,
        children: [
            { label: 'Working with mailings menu', topicId: 'ms-word-4-mailings' },
            { label: 'Working with view menu', topicId: 'ms-word-4-view' },
            { label: 'Work Exercises', topicId: 'ms-word-4-exercises' },
        ],
        content: {
            heading: 'MS WORD-4',
            text:
                'Class 7 MS Word-4 covers Mailings (labels, envelopes, merge), View (how you see and navigate long documents), and hands-on exercises that combine Word-3 skills with new tools.',
            hubHeroImage: 'https://loremflickr.com/800/500/microsoft,word,document,mail',
            unitTitle: 'MS Word-4 — Mailings, View & Practice',
            firstLessonId: 'ms-word-4-mailings',
            firstLessonLabel: 'Working with mailings menu',
            unitDetail: {
                intro:
                    'Word-4 prepares you for real office and school tasks: printing address labels, making envelopes for events, using mail merge for certificates, and switching View modes to edit long reports faster. Exercises page gives step-by-step projects your teacher can grade.',
                analogy:
                    'Mailings is like a school office printing name badges for every student from one list. View is like changing camera angle—same document, but Outline view shows headings only, Read Mode feels like an e-book.',
                keyPoints: [
                    { title: 'Mailings tab', body: 'Envelopes, labels, mail merge start—connects to a list of names.' },
                    { title: 'View tab', body: 'Print Layout, Read Mode, Outline, Focus, zoom, and multiple windows.' },
                    { title: 'Exercises', body: 'Practice merge, navigation pane, and a multi-section report.' },
                ],
            },
            unitWhyLearn: [
                'Mail merge saves hours on certificates and invitation labels.',
                'View tools help navigate 10+ page assignments.',
                'Builds toward Class 8–9 formal documents.',
            ],
            unitHowToStudy: [
                'Use Class7_Word4Practice.docx for all three lessons.',
                'Complete mailings demo with a 5-name sample list first.',
                'Try Outline view on a document with Heading 1 styles.',
            ],
            sections: [
                section('Mailings preview', 'Labels and envelopes from one name list.', 'https://loremflickr.com/700/450/envelope,label,print'),
                section('View preview', 'Switch layouts without changing words.', 'https://loremflickr.com/700/450/document,outline,view'),
            ],
        },
    },
    subLesson(
        'ms-word-4-mailings',
        'Working with mailings menu',
        'Working with the Mailings Menu',
        'Mailings tab creates envelopes, labels, and merged letters from a list of names and addresses.',
        [
            section(
                'Mailings ribbon overview',
                'Create → Envelopes or Labels.\n\nStart Mail Merge → Letters, E-mail, or Labels wizard.\n\nSelect Recipients → use existing list or type new (Table in Word).\n\nPreview Results before printing.',
                'https://loremflickr.com/700/450/mail,merge,word'
            ),
            section(
                'Simple labels exercise',
                'Step 1: Mailings → Labels.\n\nStep 2: Type one address → New Document.\n\nStep 3: For many names, Start Mail Merge → Labels → select vendor label size teacher provides.\n\nStep 4: Insert Merge Field for Name and Class.\n\nStep 5: Finish & Merge → Edit Individual Documents → Print sample.',
                'https://loremflickr.com/700/450/address,labels,sheet',
                {
                    bullets: ['Use school-approved label sheets only.', 'Preview every page—avoid wasted labels.', 'Save merge main document separately from data list.'],
                }
            ),
        ]
    ),
    subLesson(
        'ms-word-4-view',
        'Working with view menu',
        'Working with the View Menu',
        'View tab changes how you see the document—without changing the words unless you edit.',
        [
            section(
                'View modes',
                'Print Layout — WYSIWYG for printing (default).\n\nRead Mode — flip pages like a book; good for proofreading.\n\nWeb Layout — continuous scroll.\n\nOutline — collapse to headings; drag sections to reorder (when headings styled).\n\nFocus — hide ribbon clutter for typing.',
                'https://loremflickr.com/700/450/reading,mode,document'
            ),
            section(
                'Navigation and zoom',
                'View → Navigation Pane shows headings and search.\n\nZoom slider or View → One Page / Two Pages.\n\nSplit view (advanced) shows same doc in two panes.\n\nUse Ctrl+Home / Ctrl+End to jump start/end.',
                'https://loremflickr.com/700/450/zoom,document,page',
                {
                    bullets: ['Outline view needs Heading styles from Home tab.', 'Navigation Pane finds all instances of a word.', 'Read Mode Esc returns to Print Layout.'],
                }
            ),
        ]
    ),
    subLesson(
        'ms-word-4-exercises',
        'Work Exercises',
        'MS Word-4 — Work Exercises',
        'Complete these exercises in order. Save as Class7_Word4_Exercise.docx and show your teacher.',
        [
            section(
                'Exercise 1 — Mini mail merge',
                'Create a table with 3 classmates: Name, Class, House.\n\nWrite one paragraph: “Congratulations <<Name>> of <<Class>>!”\n\nRun mail merge to produce 3 personalized lines.\n\nPrint or export PDF one page proof.',
                'https://loremflickr.com/700/450/exercise,homework,word'
            ),
            section(
                'Exercise 2 — View navigation',
                'Apply Heading 1 to three chapter titles in a sample essay.\n\nOpen Navigation Pane → jump between headings.\n\nSwitch to Outline view → collapse all → expand one chapter.\n\nScreenshot or describe steps in comments box for teacher.',
                'https://loremflickr.com/700/450/student,assignment,computer'
            ),
            section(
                'Exercise 3 — Full document checklist',
                'Include: cover title, 2 pages with header/footer, one table, spell-check via Review, PDF export.\n\nSelf-check list at end: ☐ Mailings tried ☐ Navigation used ☐ PDF saved.',
                'https://loremflickr.com/700/450/checklist,complete,project'
            ),
        ]
    ),
];
