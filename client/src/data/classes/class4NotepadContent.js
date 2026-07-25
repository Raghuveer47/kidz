import { NOTEPAD_IMAGES } from './class4NotepadImages';

/** Intro shown at top of Notepad Tutorial page. */
export const NOTEPAD_TUTORIAL_INTRO = {
    title: 'Notepad Tutorial — from scratch to advanced',
    summary:
        'This complete Class 4 guide teaches Windows Notepad step by step. You will start with zero knowledge—what Notepad is and where to click—and move up to shortcuts, Find & Replace, printing, and smart file habits used in real computer labs. Read lessons in order the first time; later you can jump to Intermediate or Advanced when your teacher says you are ready.',
    learningPath: [
        { level: 'Beginner', emoji: '🌱', description: 'Lessons 1–5: what Notepad is, open it, learn the window, type your first lines, fix mistakes.' },
        { level: 'Intermediate', emoji: '🚀', description: 'Lessons 6–10: save and open files safely, name folders correctly, use keyboard shortcuts.' },
        { level: 'Advanced', emoji: '🏅', description: 'Lessons 11–17: Find & Replace, Word Wrap, font, status bar, printing, Word, encoding, and pro workflows.' },
    ],
};

export const NOTEPAD_TUTORIAL_STEPS = [
    // ─── BEGINNER ───
    {
        id: 'what-is-notepad',
        level: 'Beginner',
        title: 'Lesson 1 — What is Notepad?',
        image: NOTEPAD_IMAGES.plainText,
        lead: 'Notepad is a small, free writing program that comes with Microsoft Windows. It has been helping students and adults jot down ideas for many years because it loads fast and never distracts you with fancy buttons.',
        paragraphs: [
            'When people say "plain text," they mean letters, numbers, and symbols only—no rainbow colors, no giant title styles, and no pictures sitting inside the sentence. That is exactly what Notepad creates. Your English essay with bold headings belongs in Microsoft Word later in Class 4; your quick password reminder or coding note belongs in Notepad.',
            'Every file you save from Notepad usually ends with .txt. That extension is like a label on a notebook that tells Windows, "Open me with a simple text reader." Almost every computer in the world can read .txt files, which is why scientists, programmers, and teachers still use them.',
            'Think of Notepad as your digital sticky note pad. You open it, type, save, and close—four skills that appear in almost every job that uses computers.',
        ],
        steps: [
            'Notepad does one job very well: reading and writing text.',
            'It is perfect for lists, short stories, diary entries, and practice typing.',
            'It is not perfect for party invitations with clip-art—that is a job for Word or Paint.',
            'Learning Notepad first makes Word feel easier later because you already understand saving and typing.',
        ],
        tipTitle: 'Big idea',
        tipBody: 'Plain text = words only. If you need colors or centered titles, your teacher will guide you to Word or WordPad.',
    },
    {
        id: 'open-notepad',
        level: 'Beginner',
        title: 'Lesson 2 — How to open Notepad (three ways)',
        image: NOTEPAD_IMAGES.openNotepad,
        lead: 'School computers may look slightly different, but these three methods work on most Windows 10 and Windows 11 lab PCs.',
        paragraphs: [
            'Method A — Search: Click Start (Windows icon), type Notepad, press Enter when the app appears. This is the fastest method for most students.',
            'Method B — All Apps list: Start → All Apps → scroll to Windows Tools or Windows Accessories → Notepad. Some schools hide search, so memorize this path.',
            'Method C — Run dialog (teacher demo): Press Windows key + R, type notepad, press Enter. Advanced students use this when demonstrating skills to the class.',
            'Pinned taskbar: If you see a Notepad icon on the taskbar, one click opens it. Your computer teacher may pin it for the whole lab.',
        ],
        steps: [
            'Try Method A first. If Notepad does not appear, raise your hand—do not install random apps.',
            'Wait until the white typing area is visible before you start clicking keys.',
            'If two Notepad windows open, close the extra one with the X button so you do not confuse files.',
            'Log in with only your school account; never use another student\'s login to open Notepad.',
        ],
        tipTitle: 'Lab rule',
        tipBody: 'Open software only from Start, taskbar pins, or paths your teacher showed. Unknown downloads can harm the PC.',
    },
    {
        id: 'window-parts',
        level: 'Beginner',
        title: 'Lesson 3 — Parts of the Notepad window',
        image: NOTEPAD_IMAGES.windowParts,
        lead: 'With Notepad open from Lesson 2, learn the "map" of the screen. When you know the name of each part, you can follow teacher instructions faster.',
        paragraphs: [
            'Title bar (top): Shows the file name, such as Untitled or MyStory.txt. When you see an asterisk (*) or a dot, it often means you have unsaved changes—save soon!',
            'Menu bar: Contains File, Edit, and Format (and sometimes View or Help on older Windows). Everything Notepad can do lives inside these menus.',
            'Typing area: The large white space. The blinking line is your cursor—it marks where the next letter will appear.',
            'Scroll bars: Appear when your writing is longer than the window. Drag them to move up and down your story.',
            'Status bar (bottom, when enabled): Can show line and column numbers. Your teacher may turn this on in advanced lessons.',
        ],
        steps: [
            'Point to each part on a real PC while a partner reads the names aloud.',
            'Click inside the typing area and watch the cursor blink—that means Notepad is ready.',
            'Open the File menu once and close it without clicking anything—just peek at the choices.',
            'Never maximize other windows on top of Notepad until you have saved your work.',
        ],
        tipTitle: 'Vocabulary',
        tipBody: 'Say "typing area" and "title bar" during lab time. Using the correct words helps you ask for help clearly.',
    },
    {
        id: 'first-typing',
        level: 'Beginner',
        title: 'Lesson 4 — Your first document',
        image: NOTEPAD_IMAGES.typing,
        lead: 'Let us write a mini "About Me" card. You will use the Typing-2 skills: home row, capitals with Shift, and Enter for new lines.',
        paragraphs: [
            'Line 1 could be your name in capital and lowercase letters, like Aarav Sharma—not all caps unless your teacher asks.',
            'Line 2: Class 4, Section B (change to match your real class).',
            'Line 3: One sentence about your favourite subject, ending with a period.',
            'Line 4: One polite sentence, such as "I will save my work before closing Notepad."',
            'Read the whole card aloud to check spelling before you save in Lesson 6.',
        ],
        steps: [
            'Click once in the typing area. Type line 1, press Enter, type line 2, and continue.',
            'Use Shift + letter for capitals at the start of names and sentences.',
            'Press Space once between words—no extra spaces before punctuation.',
            'If you make a mistake on the current line, use Backspace; do not start a whole new file.',
        ],
        tipTitle: 'Typing habit',
        tipBody: 'Eyes on the screen for short lines. Glance at keys only when you feel lost, then look up again.',
    },
    {
        id: 'cursor-and-editing',
        level: 'Beginner',
        title: 'Lesson 5 — Cursor, Enter, Tab, and fixing mistakes',
        image: NOTEPAD_IMAGES.cursorEdit,
        lead: 'Editing means changing text you already typed. Good editors save often and fix small errors calmly instead of retyping entire pages.',
        paragraphs: [
            'Click anywhere in a line to move the cursor. Letters insert at the cursor, not always at the end.',
            'Enter starts a brand-new line. In Notepad, Enter does not create big gaps like in Word—it simply moves down one line.',
            'Tab key: In Notepad, Tab often inserts several spaces. Use it to line up columns in simple tables, or press Space if your teacher prefers spaces only.',
            'Backspace deletes the character to the left of the cursor. Delete removes the character to the right.',
            'Ctrl+Z (Undo) reverses your last change. Ctrl+Y (Redo) puts it back. Try Undo after a silly typo to see the magic.',
        ],
        steps: [
            'Type the sentence: The cat sat on the mat.',
            'Click between cat and sat, type fluffy , (with spaces) so it reads The cat fluffy sat on the mat.',
            'Press Undo once to remove fluffy if it was wrong—practice Undo twice if needed.',
            'Select one word by double-clicking it (teacher may demonstrate). Press Backspace to remove only that word.',
        ],
        tipTitle: 'Undo rescue',
        tipBody: 'If you delete too much, press Ctrl+Z immediately—do not panic and close the window.',
    },

    // ─── INTERMEDIATE ───
    {
        id: 'save-your-work',
        level: 'Intermediate',
        title: 'Lesson 6 — Save and Save As (never lose homework)',
        image: NOTEPAD_IMAGES.saveFile,
        lead: 'Saving copies your words from the screen onto the hard disk or SSD. Until you save, your story lives only in memory—it can disappear if the power goes out or someone closes the window.',
        paragraphs: [
            'Save As is for the first time or when you want a new copy with a new name. You choose the folder, type the filename, and click Save.',
            'Save (or Ctrl+S) updates the same file you already created. Use it every few minutes during long typing.',
            'Good filenames look like English_Story_May23.txt or C4_List_Shopping.txt. Bad filenames look like asdf.txt or document1.txt.',
            'Always check the folder path at the top of the Save As window. School work should go inside Documents → your class folder, not on the desktop of a shared PC unless the teacher allows it.',
        ],
        steps: [
            'Click File → Save As.',
            'Navigate to Documents → Class4 → YourName (teacher may create this).',
            'Type AboutMe_FirstSave.txt in the filename box.',
            'Click Save. Look at the title bar—it should show your filename instead of Untitled.',
            'Add one new sentence, press Ctrl+S, and notice the file updates without asking for a new name.',
        ],
        tipTitle: 'Golden rule',
        tipBody: 'Save early, save often. Many teachers ask you to press Ctrl+S every time you finish a paragraph.',
    },
    {
        id: 'open-and-organize',
        level: 'Intermediate',
        title: 'Lesson 7 — Open files and organize folders',
        image: NOTEPAD_IMAGES.openFile,
        lead: 'Opening brings an old file back into Notepad so you can continue writing. Organizing means each subject gets its own folder—like separate drawers in a desk.',
        paragraphs: [
            'File → Open shows a picker window. Choose your .txt file and click Open. If you see "all files," your teacher may ask you to pick Text documents only.',
            'If Open is grayed out, save a new file first—some lab setups behave that way on empty windows.',
            'Create folders in File Explorer: right-click → New → Folder → name it Class4_English or Class4_Computer.',
            'Never save inside another student\'s folder. Double-check the path before clicking Save.',
            'Copying homework to a USB drive is a separate skill—only do it when the teacher allows USB sticks in the lab.',
        ],
        steps: [
            'Open the file you saved in Lesson 6 using File → Open.',
            'Add a new line: Updated on [today\'s date].',
            'Press Ctrl+S to save.',
            'Open File Explorer and confirm the file icon and name appear in the correct folder.',
            'Close Notepad, reopen it, and open the same file again to prove your words stayed saved.',
        ],
        tipTitle: 'Shared computer',
        tipBody: 'Log out or lock the PC when finished so the next student cannot read your private notes.',
    },
    {
        id: 'keyboard-shortcuts',
        level: 'Intermediate',
        title: 'Lesson 8 — Keyboard shortcuts (speed skills)',
        image: NOTEPAD_IMAGES.shortcuts,
        lead: 'Shortcuts are key combinations that replace menu clicks. Professionals use them to save minutes every day—minutes that add up to hours over a school year.',
        paragraphs: [
            'Ctrl+S — Save. The most important shortcut in any writing program.',
            'Ctrl+O — Open file.',
            'Ctrl+N — New blank document (be careful—save your current file first!).',
            'Ctrl+A — Select all text in the window.',
            'Ctrl+C — Copy selection. Ctrl+X — Cut. Ctrl+V — Paste.',
            'Ctrl+Z — Undo. Ctrl+Y — Redo.',
            'Ctrl+F — Find text. Ctrl+H — Replace (advanced lesson 11).',
        ],
        steps: [
            'Open a practice file and press Ctrl+A, then Ctrl+C to copy everything.',
            'Press Ctrl+N for a new file, type Practice copy:, press Enter, then Ctrl+V to paste.',
            'Save the new file as CopyPractice.txt.',
            'Use Ctrl+F, search for the word the, and click Find Next to jump between matches.',
            'Tell a partner three shortcuts you will use this week.',
        ],
        tipTitle: 'Shortcut poster',
        tipBody: 'Write your top five shortcuts on a sticky note and keep it beside the keyboard until they feel automatic.',
    },
    {
        id: 'select-copy-paste',
        level: 'Intermediate',
        title: 'Lesson 9 — Select, copy, cut, and paste safely',
        image: NOTEPAD_IMAGES.selectCopyPaste,
        lead: 'Selecting highlights text so the computer knows what to copy, cut, or delete. Copying keeps the original; cutting removes it after you paste elsewhere.',
        paragraphs: [
            'Drag with the mouse to highlight a sentence. You can also hold Shift and press arrow keys to select letter by letter.',
            'Ctrl+C copies. Move the cursor elsewhere and Ctrl+V pastes. The original stays unless you cut.',
            'Ctrl+X cuts—use it when moving a paragraph from the top of your story to the bottom.',
            'Paste only your own work or text the teacher provides. Copying internet paragraphs into homework without permission is dishonest (see Class 4 Ethics).',
            'Sometimes pasted text brings weird spacing. Press Enter once or delete extra spaces to clean it up.',
        ],
        steps: [
            'Type a three-line poem about rain.',
            'Select line 1 only and copy it to the bottom with Ctrl+C and Ctrl+V.',
            'Cut line 2 and paste it above line 1 using Ctrl+X and Ctrl+V.',
            'Read aloud to check the poem still makes sense.',
            'Save as RainPoem.txt.',
        ],
        tipTitle: 'Ethics reminder',
        tipBody: 'Paste from friends only when the teacher assigns partner work. Otherwise, type in your own words.',
    },
    {
        id: 'file-naming-mastery',
        level: 'Intermediate',
        title: 'Lesson 10 — File naming and version habits',
        image: NOTEPAD_IMAGES.fileExplorer,
        lead: 'Smart names are a superpower. They help you, your teacher, and your parents find the correct homework in seconds.',
        paragraphs: [
            'Use pattern: Subject_Topic_Date.txt — example: Science_PlantDiary_2026-05-23.txt.',
            'Avoid spaces in filenames if your teacher prefers underscores _ instead. Both work on Windows, but underscores are easier in coding classes later.',
            'Version numbers: Essay_v1.txt, Essay_v2.txt after big edits. That way you can go back if a paragraph disappears.',
            'Never rename a file while it is open in Notepad—close it first, then rename in File Explorer (F2 key).',
            'Deleting: Delete key in Explorer sends files to Recycle Bin. Restore from Recycle Bin if you removed the wrong file quickly.',
        ],
        steps: [
            'Create a folder Class4_Practice with your name inside Documents.',
            'Save three tiny files: Notes_v1.txt, Notes_v2.txt, Notes_v3.txt each with one sentence.',
            'Rename Notes_v2.txt to Notes_v2_revised.txt in File Explorer.',
            'Open each version in Notepad to read the differences.',
            'Explain to a partner why v1/v2/v3 is safer than always overwriting one mystery file.',
        ],
        tipTitle: 'Teacher check',
        tipBody: 'When submitting homework, use the exact filename the teacher writes on the board—no extra jokes in the name.',
    },

    // ─── ADVANCED ───
    {
        id: 'find-replace',
        level: 'Advanced',
        title: 'Lesson 11 — Find and Replace',
        image: NOTEPAD_IMAGES.findReplace,
        lead: 'Find jumps to a word you search for. Replace can change every spelling mistake at once—powerful and dangerous if you click too fast!',
        paragraphs: [
            'Ctrl+F opens Find. Type a word, click Find Next, and Notepad highlights each match.',
            'Ctrl+H opens Replace. You type Find what: and Replace with:. Example: replace teh with the in one click.',
            'Always read the sample paragraph after Replace All—sometimes a word appears inside another word (cat inside catalog). Advanced users click Replace one at a time.',
            'Find is great for long stories when you forget where you mentioned a character\'s name.',
        ],
        steps: [
            'Paste or type: teh cat ate teh fish near teh boat.',
            'Open Replace, set Find: teh and Replace with: the.',
            'Click Replace for each match first, then try Replace All on a duplicate sentence in a safe copy.',
            'Save as FindReplace_Practice.txt.',
        ],
        tipTitle: 'Safety',
        tipBody: 'Save before Replace All. One wrong Replace All can change words you did not mean to touch.',
    },
    {
        id: 'word-wrap',
        level: 'Advanced',
        title: 'Lesson 12 — Word Wrap',
        image: NOTEPAD_IMAGES.wordWrap,
        lead: 'Word Wrap controls whether long lines fold down on the screen or stretch far to the right. It changes how text looks while you work—it does not add colors or bold like Microsoft Word.',
        paragraphs: [
            'Format → Word Wrap: When the check mark is on, a long sentence breaks onto the next row at the edge of the window. Reading feels like a normal book page.',
            'When Word Wrap is off, one line can run hundreds of characters sideways. You must use the bottom scroll bar to follow it—common in coding classes, rare for short stories.',
            'The saved .txt file stores plain letters either way. Word Wrap is mostly a screen comfort setting for reading and editing.',
        ],
        steps: [
            'Open a practice file or type one very long sentence with at least twenty words on a single line.',
            'Open Format → Word Wrap and notice the check mark.',
            'Turn Word Wrap off: watch the line stretch to the right; try the horizontal scroll bar.',
            'Turn Word Wrap on again: the same words should fold within the window.',
            'Save as WordWrap_Practice.txt.',
        ],
        tipTitle: 'Writers vs coders',
        tipBody: 'Story writers and poem authors usually keep Word Wrap on. Programmers sometimes turn it off to line up code neatly in later grades.',
    },
    {
        id: 'font-options',
        level: 'Advanced',
        title: 'Lesson 13 — Font (size and style on screen)',
        image: NOTEPAD_IMAGES.font,
        lead: 'The Font dialog changes how letters look on the monitor—bigger, smaller, or a different typeface. The underlying .txt file still stores plain text without bold or color inside the file.',
        paragraphs: [
            'Format → Font opens a small window with font family (such as Consolas or Arial), style (regular or bold display), and size (points).',
            'A larger size helps during class presentations or when sitting farther from the screen. Size 14–18 is common for demos; return to default when the teacher asks everyone to match.',
            'Bold in the Font dialog may show thicker letters on screen, but do not expect bold to stay when the file reopens in another program—true formatting belongs in Word later.',
            'Changing font does not change the words themselves. Spelling, line breaks, and punctuation stay the same.',
        ],
        steps: [
            'Type four lines about your favourite hobby.',
            'Open Format → Font, choose size 16, click OK, and read comfortably.',
            'Save as Font_Practice.txt, close the file, reopen it, and confirm the words are the same even if the display size resets.',
            'Reset to the lab default font if the teacher requests matching screens.',
        ],
        tipTitle: 'Screen only',
        tipBody: 'Font choices are for comfortable reading while typing. For colourful titles and pictures, MS Word-1 comes later in Class 4.',
    },
    {
        id: 'status-bar-zoom',
        level: 'Advanced',
        title: 'Lesson 14 — Status bar and zoom',
        image: NOTEPAD_IMAGES.statusBar,
        lead: 'The status bar and zoom tools help navigate long documents. They live under the View menu and keyboard shortcuts, separate from Word Wrap and Font.',
        paragraphs: [
            'View → Status Bar: When enabled, a strip at the bottom can show line and column numbers where the cursor sits. Helpful when a teacher says, “Go to line 10.”',
            'If the status bar is missing, open View → Status Bar once to turn it on. Older Windows versions may label menus slightly differently—ask the teacher if menus look new.',
            'Zoom: View menu zoom options, or Ctrl+Plus and Ctrl+Minus on many PCs, make text look larger or smaller without changing the real file—useful for tired eyes or demos.',
            'Zoom is not the same as Font: zoom magnifies the view; Font changes the type size setting. Try both and compare.',
        ],
        steps: [
            'Open a file with at least ten lines.',
            'Turn on View → Status Bar and move the cursor—watch line and column numbers change.',
            'Press Ctrl+Plus twice to zoom in, then Ctrl+Minus to zoom back out (or use View menu zoom).',
            'Jump to line 1 by clicking at the top; confirm the status bar updates.',
        ],
        tipTitle: 'Navigation',
        tipBody: 'Line numbers help during peer review: partners can say “check line 5 for a missing period.”',
    },
    {
        id: 'print-and-page-setup',
        level: 'Advanced',
        title: 'Lesson 15 — Page Setup and printing',
        image: NOTEPAD_IMAGES.printPage,
        lead: 'Printing puts your digital text onto paper. Always use Print Preview so you do not waste sheets in the school printer.',
        paragraphs: [
            'File → Page Setup lets you choose margins and orientation (portrait vs landscape). Portrait is tall like a notebook page; landscape is wide like a calendar.',
            'File → Print opens the printer window. Schools often have one shared printer—wait for teacher permission.',
            'Print Preview shows how many pages your story will use. Short poems should be one page; long reports may need headings in Word instead.',
            'Header and footer text (like your name on every page) is limited in Notepad—another reason long reports move to Word later.',
        ],
        steps: [
            'Open a saved story of at least ten lines.',
            'Open Page Setup, set margins to Normal, orientation Portrait.',
            'Open Print Preview and count pages.',
            'Only print if the teacher starts printer time—otherwise, skip printing and save digitally.',
        ],
        tipTitle: 'Eco habit',
        tipBody: 'Save trees: email or upload digital .txt files when the teacher allows instead of printing every draft.',
    },
    {
        id: 'notepad-to-word',
        level: 'Advanced',
        title: 'Lesson 16 — Moving from Notepad to Microsoft Word',
        image: NOTEPAD_IMAGES.plainText,
        lead: 'Class 4 teaches Notepad before Word so you respect plain text. Later, you will paste stories into Word to add titles, bold words, and pictures.',
        paragraphs: [
            'Write your first draft in Notepad when you care about words, not decoration.',
            'Copy all text with Ctrl+A, Ctrl+C. Open Word, paste with Ctrl+V. Word may add formatting—use Paste as plain text if your teacher shows that button.',
            'Notepad cannot open .docx Word files correctly—they look like scrambled symbols. Always open .txt in Notepad and .docx in Word.',
            'WordPad sits between Notepad and Word: a little formatting, still simpler than Word. You compare all three in MS Word-1.',
        ],
        steps: [
            'Finish a five-line Notepad story and save it.',
            'Copy and paste into Word on a teacher demo PC.',
            'Add one bold title in Word only—do not expect bold to appear when you open the .txt again in Notepad.',
            'Save the fancy version separately as MyStory_Word.docx if instructed.',
        ],
        tipTitle: 'File types',
        tipBody: '.txt = Notepad. .docx = Word. Never rename extensions unless the teacher explains how.',
    },
    {
        id: 'encoding-and-pro-workflow',
        level: 'Advanced',
        title: 'Lesson 17 — Encoding, logs, and pro student workflow',
        image: NOTEPAD_IMAGES.advancedAscii,
        lead: 'This final lesson introduces ideas used by older students and programmers. You do not need to master everything today—just recognize the words for future classes.',
        paragraphs: [
            'Encoding (UTF-8): Computers store letters as numbers. UTF-8 is a common setting that understands English and many world languages. If letters look like nonsense squares, ask the teacher to reopen the file with UTF-8 encoding in the Save As dialog.',
            'Line endings: Windows uses invisible markers at each Enter. That is why a .txt opened on very old systems might look odd—rare in your lab, but good to know.',
            'Simple log file: Create Diary_2026-05-23.txt and add one line per day: 2026-05-23 — Practiced Notepad shortcuts. Logs teach habits used in science and coding.',
            'ASCII art (optional fun): Use keyboard symbols to draw pictures, like stars (*) for a night sky. Save as StarArt.txt.',
            'End-of-class checklist: Save → check filename → close Notepad → log off Windows. Professionals use checklists; you can too.',
        ],
        steps: [
            'Save As → Encoding UTF-8 (if your Notepad shows the dropdown) for a file with your name in English.',
            'Create a three-line log file with dates and short notes about what you learned.',
            'Optional: draw a tiny ASCII house with /, \\, |, and _ characters.',
            'Recite the checklist: Save, verify folder, close, log off.',
        ],
        tipTitle: 'You did it!',
        tipBody: 'Finish the Notepad Exercises page to prove your skills, then read the FAQ when something confusing happens in the lab.',
    },
];

export const NOTEPAD_EXERCISES_INTRO = {
    title: 'Notepad Exercises — practice path',
    summary:
        'Twelve exercises move from warm-up typing to advanced projects. Do them in order during computer period, or ask your teacher which level to start at. Every exercise ends with a Teacher check so you know you succeeded.',
    levels: [
        { name: 'Warm-up', range: '1–3', focus: 'Open Notepad, type lines, save your first files.' },
        { name: 'Builder', range: '4–7', focus: 'Stories, lists, shortcuts, and folder organization.' },
        { name: 'Challenger', range: '8–12', focus: 'Find/Replace, logs, peer review, and mini projects.' },
    ],
};

export const NOTEPAD_EXERCISES = [
    {
        id: 'ex-1-about-me',
        level: 'Warm-up',
        emoji: '✏️',
        timeMinutes: 8,
        title: 'Exercise 1 — About Me card',
        goal: 'Prove you can open Notepad, type multiple lines with capitals, and read your work aloud without spelling panic.',
        tasks: [
            'Open Notepad using the search method from Lesson 2.',
            'Line 1: Full name (example: Priya Nair).',
            'Line 2: Class 4 and section.',
            'Line 3: Age and city.',
            'Line 4: Favourite subject and one reason (complete sentence).',
            'Line 5: "I will save before closing."',
        ],
        hints: [
            'Press Enter once at the end of each line—no need to press Enter twice unless you want a blank line.',
            'Use Shift for the first letter of your name and city.',
        ],
        sampleOutput: `Aarav Sharma
Class 4 · Section B
10 years · Hyderabad
Favourite subject: Science because we do experiments.
I will save before closing.`,
        check: 'Five lines, sensible capitals, period at the end of the sentence on line 4.',
    },
    {
        id: 'ex-2-shopping-list',
        level: 'Warm-up',
        emoji: '🛒',
        timeMinutes: 10,
        title: 'Exercise 2 — Party shopping list',
        goal: 'Create a numbered or bulleted list using only the keyboard—Notepad will not auto-number for you, and that is okay.',
        tasks: [
            'Title line in capitals: PARTY SHOPPING LIST',
            'Blank line (press Enter twice after title).',
            'Lines 3–7: Five items with either 1. 2. 3. or dash - style.',
            'Last line: Estimated total: (write a number with rupees or dollars as your teacher prefers).',
        ],
        hints: [
            'Type 1. then Space then the item name—Notepad treats it as plain text, not a magic list.',
            'Keep items short: juice boxes, paper plates, etc.',
        ],
        sampleOutput: `PARTY SHOPPING LIST

1. Apple juice
2. Paper plates
3. Napkins
4. Balloons
5. Birthday candles
Estimated total: ₹500`,
        check: 'Title plus exactly five items plus a total line.',
    },
    {
        id: 'ex-3-first-save',
        level: 'Warm-up',
        emoji: '💾',
        timeMinutes: 12,
        title: 'Exercise 3 — First Save As',
        goal: 'Save and reopen the same file without losing a single word.',
        tasks: [
            'Write two sentences about your favourite hobby.',
            'File → Save As → Class4 folder → filename Hobby_Practice1.txt.',
            'Close Notepad completely.',
            'Reopen Notepad, File → Open, choose the same file.',
            'Add a third sentence, Ctrl+S, close again.',
        ],
        hints: [
            'Watch the title bar change from Untitled to your filename after saving.',
            'If Open is confusing, ask the teacher to point at the Documents folder.',
        ],
        check: 'After reopening, all three sentences appear and the title bar shows Hobby_Practice1.txt.',
    },
    {
        id: 'ex-4-story-paragraph',
        level: 'Builder',
        emoji: '📖',
        timeMinutes: 15,
        title: 'Exercise 4 — Six-sentence story',
        goal: 'Write a tiny story with a beginning, middle, and end using only plain text.',
        tasks: [
            'Title on line 1: The Lost Pencil',
            'Lines 2–7: Six full sentences (capital start, period end).',
            'Sentence 6 must end with a feeling word (happy, proud, surprised…).',
            'Save as Story_LostPencil.txt in your English or Computer folder.',
        ],
        hints: [
            'Plan on paper for two minutes if your teacher allows—then type.',
            'Read aloud after typing to catch missing periods.',
        ],
        check: 'Six sentences plus title; file saved in the correct folder with the correct name.',
    },
    {
        id: 'ex-5-fix-typos',
        level: 'Builder',
        emoji: '🔧',
        timeMinutes: 10,
        title: 'Exercise 5 — Typo repair shop',
        goal: 'Use Backspace, Delete, and Undo to fix deliberate mistakes without retyping the whole paragraph.',
        tasks: [
            'Type: The quick brown fox jmps over the lazy dog.',
            'Fix jmps to jumps using Backspace near the mistake.',
            'Add a second sentence with one wrong capital, fix it with Shift or Undo.',
            'Save as TypoRepair.txt.',
        ],
        hints: [
            'Click exactly where the wrong letter is instead of deleting the whole sentence.',
            'Ctrl+Z is your friend if you delete too much.',
        ],
        check: 'Final text has jumps spelled correctly and two sentences with proper capitals.',
    },
    {
        id: 'ex-6-shortcuts-drill',
        level: 'Builder',
        emoji: '⌨️',
        timeMinutes: 12,
        title: 'Exercise 6 — Shortcut drill',
        goal: 'Perform five actions using keyboard shortcuts only—no mouse for those steps.',
        tasks: [
            'Ctrl+N for a new file.',
            'Type three lines about today\'s weather.',
            'Ctrl+A, then Ctrl+C to copy all.',
            'Ctrl+N again, type Weather copy:, Enter, then Ctrl+V.',
            'Ctrl+S to save as Weather_Shortcuts.txt.',
        ],
        hints: [
            'Say the shortcut name aloud while you press it: "Control S for save."',
            'If nothing pastes, click inside the typing area once and try Ctrl+V again.',
        ],
        check: 'Second file contains the copied weather lines plus the label Weather copy:.',
    },
    {
        id: 'ex-7-folder-organize',
        level: 'Builder',
        emoji: '📁',
        timeMinutes: 15,
        title: 'Exercise 7 — Folder organizer',
        goal: 'Create subject folders and place three different .txt files in the correct homes.',
        tasks: [
            'In File Explorer, create Class4_English and Class4_Computer under Documents.',
            'Save a vocabulary list in English folder: English_Words_Week1.txt (five words).',
            'Save a computer rule list in Computer folder: Lab_Rules.txt (three rules).',
            'Open each file once from its folder to prove paths work.',
        ],
        hints: [
            'Use Save As and click the correct folder before typing the filename.',
            'Filenames should match the subject, not random letters.',
        ],
        check: 'Teacher can open both folders and see correctly named files inside each.',
    },
    {
        id: 'ex-8-find-replace',
        level: 'Challenger',
        emoji: '🔍',
        timeMinutes: 12,
        title: 'Exercise 8 — Find & Replace challenge',
        goal: 'Clean a messy paragraph using Replace carefully.',
        tasks: [
            'Type or paste: teh sun was hot. teh dog drank water. teh end.',
            'Use Replace to change every teh to the.',
            'Read aloud to confirm the story sounds natural.',
            'Save as ReplaceChallenge.txt.',
        ],
        hints: [
            'Try Replace one by one first, then Replace All only on a copy if your teacher allows.',
            'Save before Replace All so you can undo with Ctrl+Z if needed.',
        ],
        check: 'No teh remains; three sentences read correctly.',
    },
    {
        id: 'ex-9-daily-log',
        level: 'Challenger',
        emoji: '📅',
        timeMinutes: 15,
        title: 'Exercise 9 — Three-day learning log',
        goal: 'Create a log file that records what you practiced on three separate lines with dates.',
        tasks: [
            'Line 1: 2026-05-21 — Learned to open Notepad.',
            'Line 2: 2026-05-22 — Practiced Ctrl+S saving.',
            'Line 3: 2026-05-23 — Did Find & Replace exercise.',
            'Add line 4 with today\'s real date and what you did in class.',
            'Save as Notepad_Log.txt with UTF-8 encoding if available.',
        ],
        hints: [
            'Use the same date format your teacher prefers (YYYY-MM-DD is clear).',
            'Logs grow downward—new days go at the bottom next week.',
        ],
        check: 'Four dated lines, newest date on line 4, file opens with readable characters.',
    },
    {
        id: 'ex-10-ascii-art',
        level: 'Challenger',
        emoji: '⭐',
        timeMinutes: 12,
        title: 'Exercise 10 — Mini ASCII night sky',
        goal: 'Use keyboard symbols to draw a simple picture; understand that art is still plain text.',
        tasks: [
            'Line 1: Title: Night Sky Art',
            'Lines below: draw a moon with parentheses, stars with *, and ground with underscores.',
            'At least five lines of art.',
            'Save as NightSky_ASCII.txt.',
        ],
        hints: [
            'Example star line: * . * . *',
            'Spaces matter—use Spacebar to center shapes if you like.',
        ],
        sampleOutput: `Night Sky Art
    *
  (   )
* . * . *
___________`,
        check: 'Picture uses only keyboard symbols; no images pasted from the web.',
    },
    {
        id: 'ex-11-peer-review',
        level: 'Challenger',
        emoji: '👥',
        timeMinutes: 15,
        title: 'Exercise 11 — Partner proofread',
        goal: 'Swap files with a partner, add one helpful comment line at the bottom, and resave respectfully.',
        tasks: [
            'Finish any story file of at least six sentences.',
            'Partner opens your file, reads silently, adds: Partner note: (one kind suggestion).',
            'Partner saves and closes. You open and read the note—no rude words allowed.',
            'Reply line: Author reply: Thank you for the tip about ______.',
        ],
        hints: [
            'Only edit files your teacher assigns for sharing—never open private diaries.',
            'Comments must be kind and specific, like "Add a period at the end of line 3."',
        ],
        check: 'Both partners have kind comment and reply lines; original story still present.',
    },
    {
        id: 'ex-12-capstone',
        level: 'Challenger',
        emoji: '🏆',
        timeMinutes: 20,
        title: 'Exercise 12 — Capstone project',
        goal: 'Combine every skill: plan, type, save with a smart name, use one shortcut, and describe your work to the class.',
        tasks: [
            'Choose topic: My School Computer Lab Rules OR My Weekend Adventure.',
            'Write title, intro sentence, four body sentences, and closing sentence.',
            'Use Ctrl+S at least twice while writing.',
            'Use at least one of: Find, Replace, or Word Wrap during editing.',
            'Save as Capstone_[YourName].txt and raise hand for teacher grading.',
        ],
        hints: [
            'Outline on paper: title + four bullet ideas + ending feeling.',
            'Read the grading checklist on the board before you start typing.',
        ],
        check: 'Title + six content lines minimum; smart filename; teacher observes shortcut or Find/Replace use.',
    },
];

export const NOTEPAD_FAQ_CATEGORIES = [
    {
        id: 'getting-started',
        title: 'Getting started',
        items: [
            {
                id: 'faq-what-is-notepad',
                question: 'What is Notepad in simple words?',
                answer:
                    'Notepad is a small program on Windows for writing plain text—letters and numbers without colors, pictures, or fancy titles. It is like a digital notebook page. You open it, type, save as a .txt file, and close. Class 4 starts here before Microsoft Word because saving and typing matter more than decorations at first.',
            },
            {
                id: 'faq-where-is-notepad',
                question: 'Where do I find Notepad on a school PC?',
                answer:
                    'Click Start, type Notepad, press Enter. If search is disabled, try Start → All Apps → Windows Tools or Accessories → Notepad. Some labs pin Notepad on the taskbar. Ask your teacher before downloading anything from the internet—real Notepad is already on Windows.',
            },
            {
                id: 'faq-first-time',
                question: 'What should I type the very first time?',
                answer:
                    'Try an About Me card: your name, class, one favourite subject, and a promise to save your work. Short lines with Enter between them are perfect. Do not worry about making it long; worry about spelling your name correctly and pressing Save when the teacher says.',
            },
        ],
    },
    {
        id: 'saving-files',
        title: 'Saving and opening files',
        items: [
            {
                id: 'faq-save-vs-saveas',
                question: 'What is the difference between Save and Save As?',
                answer:
                    'Save As is for the first time or when you want a new copy with a new name—you pick the folder and filename. Save (Ctrl+S) updates the file you already made without asking for a new name. First lesson: Save As. Every time after: Save or Ctrl+S often.',
            },
            {
                id: 'faq-txt-extension',
                question: 'Why does my file end with .txt?',
                answer:
                    'The extension .txt tells Windows this is plain text. Notepad adds it automatically. Keep .txt at the end when you rename files. If you accidentally change it to .doc, Notepad might not open it the way you expect.',
            },
            {
                id: 'faq-lost-work',
                question: 'I closed Notepad without saving. Can I get my work back?',
                answer:
                    'Usually no—unsaved text lives only in memory and disappears when the window closes. Sometimes Windows asks, "Do you want to save changes?"—always click Save if you want to keep your words. Build the habit: Ctrl+S every few minutes, especially before recess.',
            },
            {
                id: 'faq-wrong-folder',
                question: 'I saved in the wrong folder. What should I do?',
                answer:
                    'Open File Explorer, find the file, and drag it into the correct class folder—or ask your teacher to help you move it. Do not delete another student\'s work. Next time, read the folder path at the top of Save As before clicking Save.',
            },
            {
                id: 'faq-usb',
                question: 'Can I put my .txt file on a USB drive?',
                answer:
                    'Only if your school allows USB sticks. Save the file properly first, then use File Explorer to copy it to the USB. Eject the USB safely (right-click → Eject) so the file does not break. Never plug unknown USB drives into lab PCs.',
            },
        ],
    },
    {
        id: 'typing-editing',
        title: 'Typing and editing',
        items: [
            {
                id: 'faq-backspace-delete',
                question: 'When do I use Backspace vs Delete?',
                answer:
                    'Backspace removes the character to the left of the blinking cursor. Delete removes the character to the right. If you highlight text first, either key removes the whole selection. Ctrl+Z undoes the last change if you delete too much.',
            },
            {
                id: 'faq-select-all',
                question: 'What does Ctrl+A do?',
                answer:
                    'Ctrl+A selects everything in the Notepad window. Then you can copy (Ctrl+C), cut (Ctrl+X), or delete it all with one Backspace—be careful! Teachers use Select All to copy your whole story into Word or to check length quickly.',
            },
            {
                id: 'faq-word-wrap',
                question: 'What is Word Wrap?',
                answer:
                    'When Word Wrap is on in the Format menu, long lines fold down to the next row on screen so you do not scroll sideways. When it is off, lines stretch far to the right—sometimes used for coding. Most Class 4 stories should use Word Wrap on.',
            },
            {
                id: 'faq-find-replace-safe',
                question: 'Is Replace All dangerous?',
                answer:
                    'It can be! Replace All changes every match at once. If you replace "the" carelessly, you might break words like "there" or "them." Save first, try Replace one at a time, and read the whole paragraph afterward. Undo (Ctrl+Z) helps if you notice mistakes quickly.',
            },
        ],
    },
    {
        id: 'compare-apps',
        title: 'Notepad vs other programs',
        items: [
            {
                id: 'faq-notepad-vs-word',
                question: 'Notepad vs Microsoft Word — which should I use?',
                answer:
                    'Use Notepad for quick notes, lists, plain practice, and learning save/open skills. Use Word when the teacher wants bold titles, centered paragraphs, images, or printed reports with professional layout. Many students draft ideas in Notepad, then copy into Word for formatting.',
            },
            {
                id: 'faq-wordpad',
                question: 'What about WordPad?',
                answer:
                    'WordPad is in the middle—some font sizes and colors, but not as powerful as Word. Class 4 Notepad lessons focus on plain text only. You will compare Word, WordPad, and Notepad in the MS Word-1 topic. Think: Notepad = simple, WordPad = medium, Word = full reports.',
            },
            {
                id: 'faq-open-docx',
                question: 'Why does my Word homework look like gibberish in Notepad?',
                answer:
                    'Because .docx files are packed for Word, not for Notepad. Open homework with Word. Open .txt with Notepad. If you need plain text from Word, ask the teacher about Save As plain text or copy without formatting.',
            },
        ],
    },
    {
        id: 'lab-rules',
        title: 'School lab rules',
        items: [
            {
                id: 'faq-other-student-files',
                question: 'May I open another student\'s file?',
                answer:
                    'Only during partner exercises your teacher assigns. Otherwise, no—files are private like diary pages. Opening or deleting someone else\'s work is disrespectful and may break school rules. Work inside your own folder with your name on it.',
            },
            {
                id: 'faq-internet-paste',
                question: 'Can I paste text from websites into Notepad?',
                answer:
                    'Only when the teacher gives you exact text to paste, such as a poem for a typing exercise. Random internet copying for homework is plagiarism (see Class 4 Ethics). Pasted text can also hide viruses or weird symbols—type your own words when possible.',
            },
            {
                id: 'faq-log-off',
                question: 'What should I do before leaving the computer?',
                answer:
                    'Save your file (Ctrl+S), close Notepad, check that your file is in the right folder, then log off or lock Windows as your school requires. That protects your work and stops the next student from reading private notes.',
            },
        ],
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        items: [
            {
                id: 'faq-garbled-text',
                question: 'My file shows strange symbols or boxes.',
                answer:
                    'The file might use the wrong encoding or was opened by the wrong program. Ask your teacher to reopen it in Notepad with UTF-8 encoding. Avoid copying unknown symbols from websites. Retype on a fresh file if the teacher says the file is damaged.',
            },
            {
                id: 'faq-notepad-wont-open',
                question: 'Notepad will not open. What now?',
                answer:
                    'Raise your hand—do not download "fix" apps from the internet. The teacher can restart Notepad, check if another window is hiding behind, or restart the PC safely. Tell the teacher exactly what you clicked last.',
            },
            {
                id: 'faq-printer',
                question: 'Printing looks tiny or cuts off words.',
                answer:
                    'Open Page Setup and check orientation and margins. Use Print Preview before printing. Long lines with Word Wrap off might print oddly—turn Word Wrap on or ask the teacher to help split paragraphs in Word for big reports.',
            },
            {
                id: 'faq-asterisk-title',
                question: 'Why does the title bar show * or "unsaved"?',
                answer:
                    'An asterisk or similar mark often means you have changes that are not saved yet. Press Ctrl+S. After saving, the mark should disappear and the filename should look normal.',
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced tips',
        items: [
            {
                id: 'faq-shortcuts-full',
                question: 'Which shortcuts should advanced students memorize?',
                answer:
                    'Ctrl+S save, Ctrl+O open, Ctrl+N new, Ctrl+A select all, Ctrl+C copy, Ctrl+X cut, Ctrl+V paste, Ctrl+Z undo, Ctrl+Y redo, Ctrl+F find, Ctrl+H replace. Add Ctrl+Plus and Ctrl+Minus for zoom if your lab uses them.',
            },
            {
                id: 'faq-encoding',
                question: 'What is UTF-8 encoding?',
                answer:
                    'Computers store letters as numbers. UTF-8 is a popular setting that understands English and many other languages. In Save As, if you see an Encoding dropdown, UTF-8 is a safe choice for school work unless your teacher says otherwise.',
            },
            {
                id: 'faq-ascii-art',
                question: 'Can I make drawings in Notepad?',
                answer:
                    'You can make ASCII art with keyboard symbols like * + / \\ ( ) _ for stars, faces, or houses. It is still plain text, not a real picture file. Save as .txt. For colourful drawings, use MS Paint in Class 4 instead.',
            },
            {
                id: 'faq-practice-at-home',
                question: 'Can I practice at home?',
                answer:
                    'Yes on Windows home PCs: Start → Notepad. Create a Class4_Practice folder, save exercises, and bring work on USB only if allowed. Practice the same rules: smart filenames, save often, kind digital habits.',
            },
            {
                id: 'faq-next-steps',
                question: 'What do I learn after mastering Notepad?',
                answer:
                    'Move to MS Word-1 for formatted reports, continue Windows OS-2 for file management, and keep ethics and health tips in mind every time you type. Notepad skills stay useful forever—even professional programmers open .txt files daily.',
            },
        ],
    },
];

/** Flat list for backward compatibility */
export const NOTEPAD_FAQ_ITEMS = NOTEPAD_FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.title }))
);
