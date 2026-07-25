import React from 'react';
import { FileText } from 'lucide-react';
import {
    MS_WORD1_HUB_HERO,
    MS_WORD1_MAIN_PAGE_IMAGES,
    MS_WORD1_WHAT_IS_WORD_IMAGES,
    MS_WORD1_HISTORY_IMAGES,
    MS_WORD1_VS_OTHERS_IMAGES,
    MS_WORD1_FILE_MENU_IMAGES,
    MS_WORD1_HOME_MENU_IMAGES,
    MS_WORD1_CLIPBOARD_IMAGES,
    MS_WORD1_FONT_IMAGES,
    MS_WORD1_PARAGRAPH_IMAGES,
    MS_WORD1_STYLES_IMAGES,
    MS_WORD1_EDITING_IMAGES,
} from './class4MsWordOneImages';

const wordIcon = <FileText className="w-5 h-5 text-blue-600" />;

function section(subtitle, body, image) {
    return { subtitle, body, image };
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

/** Class 4 — MS Word-1 hub + ten sub-lessons (insert into class4Data.topics). */
export const msWordOneTopics = [
    {
        id: 'ms-word-1',
        title: 'MS WORD-1',
        category: 'creative_tools',
        icon: wordIcon,
        children: [
            { label: 'What is word?', topicId: 'ms-word-1-what-is-word' },
            { label: 'History of word', topicId: 'ms-word-1-history' },
            { label: 'MS-word vs other word processing applications', topicId: 'ms-word-1-vs-others' },
            { label: 'Working with file menu options page', topicId: 'ms-word-1-file-menu' },
            { label: 'Working with Home menu page', topicId: 'ms-word-1-home-menu' },
            { label: 'Working with clipboard page', topicId: 'ms-word-1-clipboard' },
            { label: 'Working with font page', topicId: 'ms-word-1-font' },
            { label: 'Working with paragraph page', topicId: 'ms-word-1-paragraph' },
            { label: 'Working with styles page', topicId: 'ms-word-1-styles' },
            { label: 'Working with editing page', topicId: 'ms-word-1-editing' },
        ],
        content: {
            heading: 'MS WORD-1',
            text:
                'Microsoft Word is a word processing program where Class 4 students learn to type, format, and save neat documents for school. On this main page you will understand the document window, the ribbon, the Home tab, and good save habits before opening each sub-lesson. Practice slowly: type a short paragraph, make a title bold, center it, add a bullet list, and save with a clear file name like MyStory_Class4.docx. By the end of this unit you should complete one polished document with a title, at least two paragraphs, your name and date, and correct use of File → Save.',
            hubHeroImage: MS_WORD1_HUB_HERO,
            msWordSmartBasicsTitle: 'MS Word for Kids — Smart Basics',
            wordDetail: {
                intro:
                    'Word gives you a digital page where letters become stories, letters, poems, and reports. You type with the keyboard, improve how text looks with Font and Paragraph tools, organize ideas with Styles, and save your file so you can open it again tomorrow. Unlike MS Paint, Word is built for writing—not drawing pictures—though you can add images later in advanced lessons.',
                analogy:
                    'Think of Word like a magic notebook on the screen. The keyboard is your pen, the Font group is how neat your handwriting looks, Paragraph is how lines sit on the page, and File → Save is putting your notebook safely in your desk so pages never get lost. Undo (Ctrl+Z) is like an eraser that works even after the ink dries!',
                keyPoints: [
                    {
                        title: 'Easy to start',
                        body:
                            'Open Word, click on the white page, and start typing. You do not need login tricks or hard settings on day one—just a blank document and curiosity.',
                    },
                    {
                        title: 'Great for school work',
                        body:
                            'Essays, formal letters, poems, and project reports look cleaner with bold titles, spacing, bullet lists, and saved .docx files your teacher can open.',
                    },
                    {
                        title: 'Mistakes are okay',
                        body:
                            'Backspace fixes one letter; Undo (Ctrl+Z) fixes whole steps. Try formatting boldly, then step back if something looks wrong.',
                    },
                    {
                        title: 'Save and reopen',
                        body:
                            'File → Save with a clear name keeps your writing safe. Open → continue tomorrow—just like homework in a real folder.',
                    },
                    {
                        title: 'Plan like a young author',
                        body:
                            'Before typing, decide: title at top, body in the middle, name and date at bottom. A tiny plan makes the final page tidy.',
                    },
                    {
                        title: 'Improve every draft',
                        body:
                            'Save version one, then make version two with better headings and spacing. Small improvements build confidence.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under MS WORD-1 to open all ten lessons—from What is word? through Working with editing.',
            subtopicThumbnails: {
                'ms-word-1-what-is-word': MS_WORD1_WHAT_IS_WORD_IMAGES.lessonThumbnail,
                'ms-word-1-history': MS_WORD1_HISTORY_IMAGES.lessonThumbnail,
                'ms-word-1-vs-others': MS_WORD1_VS_OTHERS_IMAGES.lessonThumbnail,
                'ms-word-1-file-menu': MS_WORD1_FILE_MENU_IMAGES.lessonThumbnail,
                'ms-word-1-home-menu': MS_WORD1_HOME_MENU_IMAGES.lessonThumbnail,
                'ms-word-1-clipboard': MS_WORD1_CLIPBOARD_IMAGES.lessonThumbnail,
                'ms-word-1-font': MS_WORD1_FONT_IMAGES.lessonThumbnail,
                'ms-word-1-paragraph': MS_WORD1_PARAGRAPH_IMAGES.lessonThumbnail,
                'ms-word-1-styles': MS_WORD1_STYLES_IMAGES.lessonThumbnail,
                'ms-word-1-editing': MS_WORD1_EDITING_IMAGES.lessonThumbnail,
            },
            msWordWhyLearn: [
                'It improves typing speed and accuracy on a tool you will use for years.',
                'It helps you submit homework teachers can read easily—neat titles, spacing, and lists matter.',
                'It teaches File → Save habits so stories and reports are never lost.',
                'It connects to Notepad and WordPad skills from earlier classes and prepares you for MS Word-2.',
                'It builds digital citizenship: your own work, clear names, and asking before printing or sharing.',
            ],
            msWordHowToStudy: [
                'Read one lesson at a time and repeat every step in Word on a file named Class4_WordPractice.docx.',
                'Save after each big change—title done, list added, formatting finished.',
                'Use the sidebar to jump back when you forget where a button lives.',
                'Replace lesson photos with your own Word screenshots when your teacher provides them.',
                'At the end, show one complete document to your teacher and note one thing to improve next time.',
            ],
            subtopicPages: [
                { topicId: 'ms-word-1-what-is-word', label: 'What is word?', emoji: '📄', description: 'What Word is, window parts, and how to open it.' },
                { topicId: 'ms-word-1-history', label: 'History of word', emoji: '📜', description: 'From typewriters to modern Word.' },
                { topicId: 'ms-word-1-vs-others', label: 'MS-word vs others', emoji: '⚖️', description: 'Word vs Notepad, WordPad, and online docs.' },
                { topicId: 'ms-word-1-file-menu', label: 'File menu', emoji: '📁', description: 'New, Open, Save, Save As, Print, Close.' },
                { topicId: 'ms-word-1-home-menu', label: 'Home menu', emoji: '🏠', description: 'Ribbon groups on the Home tab.' },
                { topicId: 'ms-word-1-clipboard', label: 'Clipboard', emoji: '📋', description: 'Cut, Copy, Paste, Format Painter.' },
                { topicId: 'ms-word-1-font', label: 'Font', emoji: '🔤', description: 'Font, size, bold, color, highlight.' },
                { topicId: 'ms-word-1-paragraph', label: 'Paragraph', emoji: '¶', description: 'Align, bullets, spacing, indent.' },
                { topicId: 'ms-word-1-styles', label: 'Styles', emoji: '✨', description: 'Heading 1, Heading 2, Normal.' },
                { topicId: 'ms-word-1-editing', label: 'Editing', emoji: '🔍', description: 'Find, Replace, Select All.' },
            ],
            sections: [
                section(
                    'The document window',
                    'When Word opens, you see several areas working together—like parts of a neat study desk.\n\nPart 1 — Title bar: Shows the file name (for example Document1 or MyStory.docx). When you save, the name you type appears here.\n\nPart 2 — Quick Access Toolbar: Tiny buttons for Save, Undo, and Redo—shortcuts you will use every day.\n\nPart 3 — Ribbon: Tabs such as File, Home, Insert. Each tab holds groups of tools.\n\nPart 4 — Page (typing area): The big white space—your digital paper. Click here before typing.\n\nPart 5 — Scroll bars: Move up and down long stories without losing your place.\n\nPart 6 — Status bar: Bottom strip showing page number, word count, and zoom.\n\nClassroom tip: Before a timed activity, point to each part once with your teacher so everyone knows where Save and Font live.',
                    MS_WORD1_MAIN_PAGE_IMAGES.documentWindow
                ),
                section(
                    'Ribbon and Home tab',
                    'The ribbon is the colorful command strip under the title bar. Class 4 focuses on File and Home first.\n\nFile tab — Backstage view for New, Open, Save, Print, and Close.\n\nHome tab — Five groups you will study in this unit:\n\n1. Clipboard — Cut, Copy, Paste, Format Painter.\n\n2. Font — Name, size, bold, italic, underline, color, highlight.\n\n3. Paragraph — Alignment, bullets, numbering, spacing, indent.\n\n4. Styles — Ready-made looks like Heading 1 and Normal.\n\n5. Editing — Find, Replace, Select.\n\nOther tabs (Insert, Draw, Layout) come in later classes. For now, click Home whenever you want to change how words look on the page.',
                    MS_WORD1_MAIN_PAGE_IMAGES.ribbonHome
                ),
                section(
                    'Typing area and cursor',
                    'The blinking vertical line is the cursor—it shows where the next letter appears.\n\nStep 1: Click on the page. The cursor moves to that spot.\n\nStep 2: Type slowly using home-row fingers when you can. Look at the screen, not the keyboard, as you improve.\n\nStep 3: Press Backspace to erase the letter before the cursor.\n\nStep 4: Press Enter to start a new paragraph. One blank line between title and body looks professional.\n\nStep 5: Press Space once between words—double spaces are old typewriter habits and look uneven today.\n\nGood habit: Type your title first, press Enter twice, then write the body so your document has clear sections from the start.',
                    MS_WORD1_MAIN_PAGE_IMAGES.typingArea
                ),
                section(
                    'Save early, save often',
                    'Saving is the most important Word habit. Unsaved work can disappear if the computer sleeps or restarts.\n\nPart 1 — First save: Click File → Save or Save As. Choose a folder (Documents or your class folder). Type a clear name: MyLetter_Class4.docx.\n\nPart 2 — Save again: After adding your title, after bold formatting, after bullet lists, and before closing Word.\n\nPart 3 — Quick save: Click the floppy disk icon on the Quick Access Toolbar or press Ctrl+S.\n\nPart 4 — Check the title bar: If it still says Document1, you may not have saved yet—do Save As now.\n\nRemember: Save early, save often. A little save today means no tears tomorrow!',
                    MS_WORD1_MAIN_PAGE_IMAGES.saveDocument
                ),
            ],
        },
    },
    subLesson(
        'ms-word-1-what-is-word',
        'MS WORD-1: WHAT IS WORD?',
        'What is word?',
        'In this lesson you learn what Microsoft Word is, why schools use it, every main part of the window, and how to open Word safely. Word is for writing and formatting text—not for drawing pictures like MS Paint. Follow each step like a classroom lab: read, then do the same click on your computer.',
        [
            section(
                'What is Microsoft Word?',
                'Microsoft Word is a word processing application. “Word processing” means creating, typing, editing, and formatting documents made of words.\n\nWith Word you can:\n\n• Write stories, letters, and poems.\n\n• Make titles bold and centered.\n\n• Create bullet lists and numbered steps.\n\n• Save files and print neat pages.\n\n• Fix mistakes with Backspace and Undo without ruining the whole page.\n\nWord is one of the most common tools in offices and schools worldwide. Learning it in Class 4 helps you finish homework faster and more neatly than writing everything by hand.',
                MS_WORD1_WHAT_IS_WORD_IMAGES.whatIsWord
            ),
            section(
                'How Word helps us at school',
                'Teachers love readable homework. Word helps you deliver that.\n\nFor language class: Type essays with clear paragraphs and indented first lines.\n\nFor science: Add headings like “Materials” and bullet lists of steps.\n\nFor projects: Type your name, class, and date in the corner like a real report cover.\n\nFor presentations: Print your script in large, bold font you can read while speaking.\n\nWord also lets you reopen yesterday’s file and continue—no need to rewrite from scratch. That saves time and keeps your ideas organized in one digital folder.',
                MS_WORD1_WHAT_IS_WORD_IMAGES.wordHelpsUs
            ),
            section(
                'Main parts of the Word window',
                'Study this map of the screen. Your teacher may point to each part during lab time.\n\n1. Title bar — File name and window controls (minimize, maximize, close).\n\n2. Quick Access Toolbar — Save, Undo, Redo icons.\n\n3. Ribbon tabs — File, Home, Insert, and more.\n\n4. Ribbon groups — Buttons under each tab (Font, Paragraph, etc.).\n\n5. Rulers (optional) — Gray strips showing margins; helpful for neat layout.\n\n6. Document page — White typing area.\n\n7. Scroll bars — Right side and bottom for long documents.\n\n8. Status bar — Page count, language, zoom slider.\n\nQuiz yourself: Can you find Font on the Home tab without looking at a friend’s screen?',
                MS_WORD1_WHAT_IS_WORD_IMAGES.mainWindowParts
            ),
            section(
                'How to open Microsoft Word',
                'Step 1 — Start menu: Click the Windows Start button (bottom-left).\n\nStep 2 — Search: Type word in the search box.\n\nStep 3 — Launch: Click Microsoft Word in the results (blue W icon).\n\nStep 4 — Blank document: Choose Blank document if Word asks.\n\nStep 5 — Click to type: Move the mouse to the white page; click once; start typing when the cursor blinks.\n\nAlternatives: Your school may pin Word on the taskbar or desktop—double-click that icon.\n\nTip: If Word opens slowly, wait patiently. Do not click many times—one launch is enough.',
                MS_WORD1_WHAT_IS_WORD_IMAGES.howToOpen
            ),
            section(
                'Type your first lines',
                'Let us write a mini document together.\n\nLine 1: Type My First Word Document as your title.\n\nLine 2: Press Enter twice (blank line).\n\nLine 3: Type I am learning Microsoft Word in Class 4.\n\nLine 4: Press Enter and type Today I practiced typing and saving.\n\nLine 5: Press Enter twice, then type your name and class.\n\nDo not worry about bold or colors yet—we format in later lessons. Focus on calm typing and correct Enter spacing.',
                MS_WORD1_WHAT_IS_WORD_IMAGES.firstTyping
            ),
            section(
                'Classroom tips for beginners',
                'Follow these rules in the computer lab:\n\n• Sit straight, eyes on the screen, wrists relaxed.\n\n• Use only your login; never open another student’s file.\n\n• Save in the folder your teacher names—do not save on the desktop if asked not to.\n\n• Raise your hand if Word freezes; do not bang the keyboard.\n\n• Log out or close Word properly when time ends.\n\nEnd of lesson: File → Save As → Class4_FirstWord.docx. Tell a partner one part of the window you remembered best.',
                MS_WORD1_WHAT_IS_WORD_IMAGES.classroomTips
            ),
        ]
    ),
    subLesson(
        'ms-word-1-history',
        'MS WORD-1: HISTORY OF WORD',
        'History of word',
        'Word did not appear in one day! This lesson tells a simple timeline: typewriters on paper, early computers, Microsoft Word growing year by year, and the Word you use in school today. Understanding history helps you appreciate why Undo, Save, and fonts are so powerful.',
        [
            section(
                'Before computers: typewriters',
                'Long ago, many writers used typewriters—machines with keys that pressed ink onto paper.\n\nProblems students would hate today:\n\n• One typo could mean retyping a whole page.\n\n• No bold button—changing style was slow.\n\n• No Save—paper could tear or coffee could spill!\n\n• Moving a paragraph meant retyping everything below it.\n\nTypewriters taught people to type carefully. Computers and Word later made fixing mistakes gentle and fast.',
                MS_WORD1_HISTORY_IMAGES.earlyTyping
            ),
            section(
                'Word processors arrive',
                'In the 1970s and 1980s, personal computers entered homes and schools. Programmers built word processors—software that let you type on a screen before printing.\n\nEarly wins:\n\n• Delete mistakes without white-out fluid.\n\n• Change font size in one click.\n\n• Move paragraphs by cutting and pasting.\n\nMicrosoft Word joined this wave and became one of the most popular choices because it was powerful and kept improving.',
                MS_WORD1_HISTORY_IMAGES.wordGrows
            ),
            section(
                'Microsoft Word through the years',
                'Microsoft released Word in 1983. Since then, each version added helpful tools:\n\n• 1990s — Better printing, clip art, templates.\n\n• 2000s — Smarter toolbars, then the ribbon you see today.\n\n• 2010s — Online saving with OneDrive, teamwork features.\n\n• Today — Cloud accounts, dark mode, accessibility tools, and spelling helpers.\n\nThe idea stayed the same: make writing on a computer faster, neater, and safer than paper alone.',
                MS_WORD1_HISTORY_IMAGES.msWord1983
            ),
            section(
                'Word today in your classroom',
                'Your school may use desktop Word, Microsoft 365 online, or laptops with Word installed.\n\nWhat looks different: icons, colors, or login screens.\n\nWhat stays the same: type, format with Home tab tools, File → Save, File → Print.\n\nYou are learning skills used by students in many countries. When you grow up, Word—or similar word processors—may still be part of homework, college essays, and workplace letters.',
                MS_WORD1_HISTORY_IMAGES.todayWord
            ),
            section(
                'Timeline activity',
                'Draw a simple timeline on paper with four boxes:\n\n1. Typewriter era — paper only.\n\n2. First word processors — screen typing.\n\n3. Microsoft Word grows — ribbon, pictures, tables.\n\n4. You today — Save, Undo, bold titles.\n\nUnder each box, write one tool you are glad exists (example: Ctrl+Z). Share with your class why Undo would have amazed a typewriter student!',
                MS_WORD1_HISTORY_IMAGES.lessonThumbnail
            ),
        ]
    ),
    subLesson(
        'ms-word-1-vs-others',
        'MS WORD-1: MS-WORD VS OTHER APPLICATIONS',
        'MS-word vs other word processing applications',
        'Not every writing program is the same. This lesson compares Microsoft Word with Notepad, WordPad, and browser tools like Google Docs—so you pick the right app when your teacher gives instructions.',
        [
            section(
                'Word vs Notepad',
                'Notepad is the simplest writer on Windows—plain black text, almost no formatting.\n\nNotepad is good for:\n\n• Quick phone numbers or reminders.\n\n• Copying plain code or simple lists.\n\nNotepad cannot easily:\n\n• Bold a title or center a poem.\n\n• Add bullet lists with one click.\n\n• Insert pictures in the page.\n\nMicrosoft Word is better for full school documents with titles, spacing, and print-ready layout.\n\nRule: Notepad for tiny notes; Word for homework the teacher will grade.',
                MS_WORD1_VS_OTHERS_IMAGES.wordVsNotepad
            ),
            section(
                'Word vs WordPad',
                'WordPad sits in the middle—more than Notepad, less than Word.\n\nWordPad can:\n\n• Change font size and color.\n\n• Add pictures sometimes.\n\n• Save rich text files.\n\nWord adds:\n\n• Professional Styles (Heading 1, etc.).\n\n• Strong spelling and grammar tools in many versions.\n\n• Tables, mail merge, and advanced layout for older grades.\n\nIn Class 4 you practiced simple writing in Notepad and WordPad. Now Word is your main tool for polished reports.',
                MS_WORD1_VS_OTHERS_IMAGES.wordVsWordpad
            ),
            section(
                'Word vs Google Docs and others',
                'Google Docs runs inside a web browser. You type online and files may save to Google Drive automatically.\n\nSimilarities with Word:\n\n• Typing, bold, bullets, sharing with teachers.\n\nDifferences:\n\n• Word often works offline on a school PC.\n\n• Buttons look different but ideas match.\n\n• Your school chooses which one is official for homework—follow that rule every time.\n\nOther apps (LibreOffice Writer, Apple Pages) also exist. Skills you learn in Word—Save, bold, lists—transfer to most of them.',
                MS_WORD1_VS_OTHERS_IMAGES.wordVsGoogleDocs
            ),
            section(
                'Comparison table (quick study)',
                'Memorize this chart:\n\n• Notepad — plain text, fastest, no formatting.\n\n• WordPad — basic colors and sizes.\n\n• Microsoft Word — full reports, styles, best for Class 4 projects.\n\n• Online docs — teamwork in browser, needs internet.\n\nWhen the teacher says “Submit a Word document,” open Microsoft Word and save as .docx unless told otherwise.',
                MS_WORD1_VS_OTHERS_IMAGES.pickRightTool
            ),
            section(
                'Choose the right tool — practice',
                'Read each scenario and pick the best program:\n\n1. Copy a homework password from the board — Notepad.\n\n2. Write a three-paragraph essay with a bold title — Word.\n\n3. Color a short birthday message for fun — WordPad or Word.\n\n4. Group project with classmates online — Google Docs (if school allows).\n\nDiscuss answers with a partner. Defend your choice using at least one reason from this lesson.',
                MS_WORD1_VS_OTHERS_IMAGES.lessonThumbnail
            ),
        ]
    ),
    subLesson(
        'ms-word-1-file-menu',
        'MS WORD-1: FILE MENU',
        'Working with file menu options',
        'The File tab opens the Backstage—a full-screen menu for creating, opening, saving, printing, and closing documents. Master File first so you never lose a story again.',
        [
            section(
                'New and Open',
                'File → New\n\n• Starts a blank document or picks a template (calendar, letter, etc.).\n\n• Use Blank document for most Class 4 work.\n\nFile → Open\n\n• Shows recent files and folders.\n\n• Double-click your saved homework to continue.\n\nGood habit: Know the folder path your teacher assigns, such as Documents → Class4 → Word.\n\nNever open a stranger’s USB file without permission.',
                MS_WORD1_FILE_MENU_IMAGES.newOpenSave
            ),
            section(
                'Save and Save As',
                'Save (Ctrl+S) updates the file you already named.\n\nSave As lets you:\n\n• Name the file the first time.\n\n• Choose DOCX format (standard Word file).\n\n• Save a copy like MyPoem_Final.docx while keeping MyPoem_Draft.docx.\n\nStep-by-step first save:\n\n1. File → Save As.\n\n2. Pick folder.\n\n3. Type filename without weird symbols.\n\n4. Click Save.\n\nWatch the title bar—it should now show your filename.',
                MS_WORD1_FILE_MENU_IMAGES.saveAs
            ),
            section(
                'Print and Share',
                'File → Print shows a preview—how ink will look on paper.\n\nCheck:\n\n• Correct page count (usually 1 for short homework).\n\n• Orientation (portrait is tall, landscape is wide).\n\nAsk before printing in the lab to save paper.\n\nShare / Export may let you create PDF or email—only with teacher approval. PDF keeps formatting when the teacher opens it on another computer.',
                MS_WORD1_FILE_MENU_IMAGES.printShare
            ),
            section(
                'Close and Exit',
                'Close (X on document tab) shuts one file. Word may stay open for another document.\n\nExit closes Word completely.\n\nIf you see “Do you want to save changes?” choose Save when you want to keep work, or Don’t Save only when practicing throwaway files.\n\nNever pull the power cable before saving—always Save first, then Exit.',
                MS_WORD1_FILE_MENU_IMAGES.closeExit
            ),
            section(
                'File menu practice lab',
                'Try this 10-minute drill:\n\n1. File → New → Blank document.\n\n2. Type two sentences.\n\n3. File → Save As → FileMenu_Practice.docx.\n\n4. File → Close.\n\n5. File → Open → open the same file again.\n\n6. Add one sentence, Save (Ctrl+S).\n\n7. File → Print preview (cancel without printing if teacher says so).\n\nTell your teacher when every step works—you are ready for formatting lessons!',
                MS_WORD1_FILE_MENU_IMAGES.fileMenuPractice
            ),
        ]
    ),
    subLesson(
        'ms-word-1-home-menu',
        'MS WORD-1: HOME MENU',
        'Working with Home menu page',
        'The Home tab is your daily toolbox. It groups Clipboard, Font, Paragraph, Styles, and Editing in one row so you can format without hunting through menus.',
        [
            section(
                'Groups on the Home tab',
                'Clipboard — Move or duplicate text (Cut, Copy, Paste, Format Painter).\n\nFont — Change how letters look (name, size, bold, color).\n\nParagraph — Change how lines sit (align, bullets, spacing).\n\nStyles — Apply preset looks (Heading 1, Normal).\n\nEditing — Find and Replace words quickly.\n\nMini challenge: Open Word, click Home, and point to each group name without clicking. Say what each group does out loud.',
                MS_WORD1_HOME_MENU_IMAGES.homeTabGroups
            ),
            section(
                'Other ribbon tabs (preview)',
                'You will meet more tabs later:\n\n• Insert — Pictures, shapes, page numbers.\n\n• Layout — Margins, orientation.\n\n• View — Zoom, read mode.\n\nFor Class 4 Word-1, stay mostly on File and Home. Knowing other tabs exist prevents fear when you see them in Class 5 or 6.',
                MS_WORD1_HOME_MENU_IMAGES.ribbonTabs
            ),
            section(
                'Quick tour for Class 4',
                'Build one mini document in order:\n\nStep 1: Type My Home Tab Practice as line 1.\n\nStep 2: Select it → Home → Font → Bold → Size 20.\n\nStep 3: Home → Paragraph → Center.\n\nStep 4: Press Enter twice, type a short paragraph, leave it left-aligned.\n\nStep 5: Home → Styles → Heading 1 on the title if your teacher allows.\n\nStep 6: File → Save.\n\nYou used four Home groups in one page—excellent!',
                MS_WORD1_HOME_MENU_IMAGES.quickTour
            ),
            section(
                'Home tab habits',
                '• Select text before changing font—otherwise Word may change only the next letters you type.\n\n• One big change at a time: bold first, then color, then size—easier to Undo mistakes.\n\n• If the ribbon disappears, double-click a tab name (Home) to pin it back.\n\n• Use Ctrl+Z freely while experimenting.',
                MS_WORD1_HOME_MENU_IMAGES.homePractice
            ),
        ]
    ),
    subLesson(
        'ms-word-1-clipboard',
        'MS WORD-1: CLIPBOARD',
        'Working with clipboard',
        'The Clipboard group is like a temporary pocket for text you cut or copy, then paste somewhere else. Format Painter copies decoration from one place to another—magic for matching titles.',
        [
            section(
                'Cut, Copy, and Paste',
                'Step 1 — Select: Click and drag across words so they highlight.\n\nStep 2 — Choose an action:\n\n• Copy (Ctrl+C) — Duplicates selection; original stays.\n\n• Cut (Ctrl+X) — Removes selection but stores it on clipboard.\n\nStep 3 — Click where the cursor should go.\n\nStep 4 — Paste (Ctrl+V) — Inserts clipboard contents.\n\nUse Copy to repeat a heading on a new page. Use Cut to move a paragraph from top to bottom.',
                MS_WORD1_CLIPBOARD_IMAGES.cutCopyPaste
            ),
            section(
                'Paste options',
                'After Paste, a small toolbar may appear:\n\n• Keep Source Formatting — Keeps original colors/fonts.\n\n• Merge Formatting — Blends with your document style.\n\n• Keep Text Only — Plain words, no extra colors—safest when pasting from websites.\n\nFor Class 4, prefer Keep Text Only when copying from the internet so rainbow fonts do not flood your homework.',
                MS_WORD1_CLIPBOARD_IMAGES.pasteOptions
            ),
            section(
                'Format Painter',
                'Format Painter copies formatting, not words.\n\nStep 1: Select text that looks perfect (bold blue 18pt title).\n\nStep 2: Click Format Painter (paintbrush icon).\n\nStep 3: Drag across another line to apply the same look.\n\nDouble-click Format Painter to apply many times; press Esc when done.\n\nGreat for making every chapter title match without clicking Bold and color each time.',
                MS_WORD1_CLIPBOARD_IMAGES.formatPainter
            ),
            section(
                'Clipboard keyboard shortcuts',
                'Memorize these—they work in Word, Paint, and many apps:\n\n• Ctrl+C — Copy\n\n• Ctrl+X — Cut\n\n• Ctrl+V — Paste\n\n• Ctrl+Z — Undo a bad paste\n\nPractice: Copy your name from the top of a document and Paste it at the bottom for a signature line.',
                MS_WORD1_CLIPBOARD_IMAGES.clipboardShortcuts
            ),
        ]
    ),
    subLesson(
        'ms-word-1-font',
        'MS WORD-1: FONT',
        'Working with font',
        'The Font group is how letters dress up—typeface, size, emphasis, and color. Readable fonts help teachers grade happily; wild fonts everywhere make homework hard to read.',
        [
            section(
                'Font name and size',
                'Select text first.\n\nFont list — Choose Calibri, Arial, Times New Roman, or a teacher-approved font.\n\nFont size — Number box (12, 14, 18, etc.).\n\nSuggested sizes for Class 4:\n\n• Title — 18 to 24 pt.\n\n• Body — 12 or 14 pt.\n\n• Name/date line — 11 or 12 pt.\n\nRule: At most two different fonts in one school document unless your teacher allows more.',
                MS_WORD1_FONT_IMAGES.fontNameSize
            ),
            section(
                'Bold, italic, and underline',
                'Bold (Ctrl+B) — Thick letters; perfect for titles and key words.\n\nItalic (Ctrl+I) — Slanted letters; use for book titles or gentle emphasis.\n\nUnderline (Ctrl+U) — Line under text; use rarely because it can look like a web link.\n\nTry toggling each button while watching your sample sentence change. Only one emphasis at a time until you are experienced.',
                MS_WORD1_FONT_IMAGES.boldItalicUnderline
            ),
            section(
                'Font color and highlight',
                'Font Color — Dropdown with color squares; pick dark blue or black on white paper.\n\nText Highlight Color — Marker effect behind letters; highlight vocabulary words, not every sentence.\n\nAccessibility tip: High contrast (dark text, light page) is easier for everyone to read than yellow text on white.',
                MS_WORD1_FONT_IMAGES.fontColorHighlight
            ),
            section(
                'Strikethrough, superscript, and more',
                'The Font dialog launcher (small arrow corner) opens extra tools:\n\n• Strikethrough — Line through text (shows something removed in drafts).\n\n• Superscript — Small raised text (math powers like x² later).\n\n• Subscript — Small lowered text (chemical formulas later).\n\n• Small caps — Capital-looking letters for special titles.\n\nExplore with teacher permission—Undo is your friend.',
                MS_WORD1_FONT_IMAGES.capsStrikethrough
            ),
            section(
                'Font tips for neat homework',
                'Checklist before printing:\n\n☐ Title bold and larger than body.\n\n☐ Body one consistent size.\n\n☐ No light yellow or pale green text on white.\n\n☐ Highlight used on fewer than five words unless it is a study guide.\n\n☐ Spelling checked with careful reading.\n\nSave as FontPractice_Class4.docx when finished.',
                MS_WORD1_FONT_IMAGES.fontTips
            ),
        ]
    ),
    subLesson(
        'ms-word-1-paragraph',
        'MS WORD-1: PARAGRAPH',
        'Working with paragraph',
        'Paragraph tools control blocks of text—how lines align, how lists look, and how much air sits between lines. Good paragraph skills make a wall of text friendly to read.',
        [
            section(
                'Alignment: left, center, right, justify',
                'Select the paragraph (triple-click a line to select whole paragraph).\n\nLeft align — Straight left edge; default for essays.\n\nCenter — Balanced for titles and poems.\n\nRight align — Dates or signatures on letters.\n\nJustify — Stretches lines to both margins; rare in Class 4.\n\nTry centering only your title while keeping body left-aligned—classic report style.',
                MS_WORD1_PARAGRAPH_IMAGES.alignment
            ),
            section(
                'Bullets and numbering',
                'Bullets — Dot lists for ideas, supplies, or features.\n\nNumbering — 1, 2, 3 for steps that must happen in order.\n\nHow to start a list:\n\n1. Place cursor on the line.\n\n2. Click Bullets or Numbering in Paragraph group.\n\n3. Type item, press Enter for next item.\n\n4. Press Enter twice to exit list mode.\n\nExample numbered list: How to wash hands—Step 1, Step 2, Step 3.',
                MS_WORD1_PARAGRAPH_IMAGES.bulletsNumbering
            ),
            section(
                'Line spacing and indent',
                'Line and Paragraph Spacing — Adds space between lines (1.15 or 1.5 is comfy for teachers).\n\nIncrease Indent — Moves paragraph right (good for quotes).\n\nDecrease Indent — Moves back left.\n\nFirst-line indent — Some essays indent the first sentence of each paragraph; ask your teacher if they want this.',
                MS_WORD1_PARAGRAPH_IMAGES.spacingIndent
            ),
            section(
                'Line spacing in detail',
                'Single spacing — Lines close together; saves paper.\n\n1.5 spacing — Common for drafts teachers mark.\n\nDouble spacing — Extra room for teacher comments between lines.\n\nBefore submitting, read the assignment sheet: if the teacher says “double-spaced,” use Line spacing → 2.0.',
                MS_WORD1_PARAGRAPH_IMAGES.lineSpacingDetail
            ),
            section(
                'Paragraph practice page',
                'Create a document with:\n\n• Centered bold title.\n\n• One left-aligned paragraph (3 sentences).\n\n• A bullet list of three hobbies.\n\n• A numbered list of three morning steps.\n\n• Name line right-aligned.\n\nSave as ParagraphPractice.docx. Read it from a distance—can you still see structure clearly?',
                MS_WORD1_PARAGRAPH_IMAGES.paragraphTips
            ),
        ]
    ),
    subLesson(
        'ms-word-1-styles',
        'MS WORD-1: STYLES',
        'Working with styles',
        'Styles are saved combinations of font and paragraph settings. Instead of clicking Bold, size, and color separately every time, apply Heading 1 once and Word remembers the look.',
        [
            section(
                'What is a style?',
                'A style is a named outfit for text.\n\nNormal — Regular body paragraphs.\n\nHeading 1 — Main chapter title (large, bold).\n\nHeading 2 — Smaller section title.\n\nTitle — Special cover style in some templates.\n\nWhen you pick a style, Word applies every setting in that package automatically—fast and consistent.',
                MS_WORD1_STYLES_IMAGES.whatIsStyle
            ),
            section(
                'Heading styles explained',
                'Heading 1 — Use once for the document title or main chapter.\n\nHeading 2 — Use for sections like “Introduction” or “Conclusion.”\n\nNormal — Everything else.\n\nWhy headings matter: Later grades can build automatic tables of contents from headings. Even in Class 4, headings make long stories easier to skim.',
                MS_WORD1_STYLES_IMAGES.headingStyles
            ),
            section(
                'Apply a style safely',
                'Step 1: Click anywhere in the line you want to change.\n\nStep 2: Click Heading 1 in the Styles gallery.\n\nIf the whole document turns huge, you selected too much—press Ctrl+Z.\n\nTry again with only one line selected.\n\nTo return to body text, choose Normal.\n\nDo not change built-in style colors unless your teacher asks—consistency helps classmates too.',
                MS_WORD1_STYLES_IMAGES.applyStyle
            ),
            section(
                'Styles gallery and practice',
                'Open the Styles pane (small arrow) to see more choices.\n\nBuild a three-section report:\n\n• Heading 1 — My Country Report\n\n• Heading 2 — Geography\n\n• Normal paragraph under each heading.\n\n• Heading 2 — Culture\n\n• Another paragraph.\n\nSave. Notice how professional it looks with only a few clicks!',
                MS_WORD1_STYLES_IMAGES.styleGallery
            ),
        ]
    ),
    subLesson(
        'ms-word-1-editing',
        'MS WORD-1: EDITING',
        'Working with editing',
        'The Editing group on Home helps you search long documents, fix repeated spelling mistakes in one step, and select everything when you need a global change.',
        [
            section(
                'Find',
                'Home → Editing → Find (or Ctrl+F).\n\nType a word such as dinosaur. Word highlights each match.\n\nUse Next and Previous arrows to jump without scrolling.\n\nGreat for:\n\n• Counting how many times you used a word.\n\n• Locating a character name in your story.\n\n• Checking if you forgot a section title.',
                MS_WORD1_EDITING_IMAGES.findTool
            ),
            section(
                'Replace',
                'Replace (Ctrl+H) opens two boxes: Find what, Replace with.\n\nExample: Find recieve → Replace receive.\n\nButtons:\n\n• Replace — Changes one at a time (safer).\n\n• Replace All — Changes every match instantly—use only when sure.\n\n• Find Next — Skips without changing.\n\nAlways read the first few replacements before Replace All in a long essay.',
                MS_WORD1_EDITING_IMAGES.replaceTool
            ),
            section(
                'Select All',
                'Select All (Ctrl+A) highlights the entire document.\n\nUse carefully:\n\n• Change default font for everything at once.\n\n• Copy entire text to another file.\n\n• Delete everything to start over (only on practice files!).\n\nIf you accidentally bold the whole essay, press Ctrl+Z immediately.',
                MS_WORD1_EDITING_IMAGES.selectAll
            ),
            section(
                'Editing practice challenge',
                'Type a short story that uses the word cat at least four times (on purpose with a typo cta once).\n\n1. Find cta and Replace with cat (one instance).\n\n2. Find cat and count matches with Find Next.\n\n3. Select All, change font size to 14, then Undo if it looks wrong.\n\nSave as EditingPractice.docx. You finished the MS Word-1 unit skills!',
                MS_WORD1_EDITING_IMAGES.editingPractice
            ),
        ]
    ),
];
