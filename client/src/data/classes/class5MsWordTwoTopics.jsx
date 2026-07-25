import React from 'react';
import { FileText } from 'lucide-react';
import {
    MS_WORD2_HUB_HERO,
    MS_WORD2_MAIN_PAGE_IMAGES,
    MS_WORD2_INSERT_MENU_IMAGES,
    MS_WORD2_TABLES_IMAGES,
    MS_WORD2_PICTURES_IMAGES,
    MS_WORD2_SHAPES_IMAGES,
    MS_WORD2_HEADER_FOOTER_IMAGES,
    MS_WORD2_WORDART_IMAGES,
    MS_WORD2_SYMBOLS_EQUATIONS_IMAGES,
    MS_WORD2_PAGE_NUMBER_IMAGES,
} from './class5MsWordTwoImages';

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

/** Class 5 — MS Word-2 hub + eight sub-lessons (insert into class5Data.topics). */
export const msWordTwoTopics = [
    {
        id: 'ms-word-2',
        title: 'MS WORD-2',
        category: 'creative_tools',
        icon: wordIcon,
        children: [
            { label: 'Working with Insert Menu options', topicId: 'ms-word-2-insert-menu' },
            { label: 'Working with tables', topicId: 'ms-word-2-tables' },
            { label: 'Working with pictures', topicId: 'ms-word-2-pictures' },
            { label: 'Working with shapes', topicId: 'ms-word-2-shapes' },
            { label: 'Working with header, footer', topicId: 'ms-word-2-header-footer' },
            { label: 'Working with wordart', topicId: 'ms-word-2-wordart' },
            { label: 'Working with symbol equations', topicId: 'ms-word-2-symbols-equations' },
            { label: 'Working with page number', topicId: 'ms-word-2-page-number' },
        ],
        content: {
            heading: 'MS WORD-2',
            text:
                'Class 5 MS Word-2 builds on Word-1 from Class 4. You already know how to type, format with the Home tab, and save with the File menu. Now you will use the Insert tab to add tables, pictures, shapes, headers and footers, WordArt, symbols, equations, and page numbers—skills you need for school reports, science charts, and polished project documents. Read this overview first, then open each sub-lesson from the sidebar and practise on a file named Class5_Word2Practice.docx.',
            hubHeroImage: MS_WORD2_HUB_HERO,
            msWordSmartBasicsTitle: 'MS Word-2 — Insert & Layout Skills',
            wordDetail: {
                intro:
                    'The Insert tab is where Word stops being only a typing page and becomes a layout tool. From one ribbon you can drop in a grid for marks or timetables, a photo from your project folder, arrows and boxes for diagrams, a title band that repeats on every printed page, decorative WordArt for posters, maths symbols like π or ÷, and page numbers for multi-page reports. Each sub-lesson in this unit focuses on one Insert skill with step-by-step lab instructions.',
                analogy:
                    'Imagine your document is a school notice board. Class 4 Word-1 taught you to write neat notices with bold titles and bullet lists. Word-2 teaches you to pin charts (tables), photos, and labels (headers/footers) onto the board so visitors understand the whole story at a glance—not just the words in the middle.',
                keyPoints: [
                    {
                        title: 'Insert tab groups',
                        body:
                            'Pages, Tables, Illustrations (Pictures, Shapes, Icons), Header & Footer, Text (WordArt, drop cap), Symbols, and Page Number—each group adds something visual or structural to your document.',
                    },
                    {
                        title: 'Tables organise data',
                        body:
                            'Rows and columns keep marks, schedules, and comparison charts tidy. You can add or remove rows after inserting.',
                    },
                    {
                        title: 'Pictures and shapes explain ideas',
                        body:
                            'Resize images with corner handles; use shapes for arrows, callouts, and simple diagrams. Ask teacher permission before using photos from the internet.',
                    },
                    {
                        title: 'Headers, footers, and page numbers',
                        body:
                            'Repeat your name, class, or title on every page; page numbers help teachers and readers follow long reports.',
                    },
                    {
                        title: 'WordArt and symbols',
                        body:
                            'WordArt makes poster titles stand out; Symbol and Equation tools add special characters and maths notation Class 5 students meet in science and maths.',
                    },
                    {
                        title: 'Save after every big insert',
                        body:
                            'Tables and pictures change file size. Ctrl+S after each lesson step keeps your project safe on shared lab PCs.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under MS WORD-2 to open all eight lessons—from Insert Menu options through page numbers.',
            subtopicThumbnails: {
                'ms-word-2-insert-menu': MS_WORD2_INSERT_MENU_IMAGES.lessonThumbnail,
                'ms-word-2-tables': MS_WORD2_TABLES_IMAGES.lessonThumbnail,
                'ms-word-2-pictures': MS_WORD2_PICTURES_IMAGES.lessonThumbnail,
                'ms-word-2-shapes': MS_WORD2_SHAPES_IMAGES.lessonThumbnail,
                'ms-word-2-header-footer': MS_WORD2_HEADER_FOOTER_IMAGES.lessonThumbnail,
                'ms-word-2-wordart': MS_WORD2_WORDART_IMAGES.lessonThumbnail,
                'ms-word-2-symbols-equations': MS_WORD2_SYMBOLS_EQUATIONS_IMAGES.lessonThumbnail,
                'ms-word-2-page-number': MS_WORD2_PAGE_NUMBER_IMAGES.lessonThumbnail,
            },
            msWordWhyLearn: [
                'Insert skills turn plain essays into reports with charts, images, and page numbers teachers expect in upper primary.',
                'Tables are faster than spacing text with tabs for marks sheets and comparison lists.',
                'Headers and footers show your name and class on every page without retyping.',
                'WordArt and shapes help science fair posters and social studies projects look professional.',
                'Symbols and equations support maths and science vocabulary in digital homework.',
                'These tools prepare you for Class 6 documents and group project templates.',
            ],
            msWordHowToStudy: [
                'Complete Word-1 skills first—typing, bold titles, bullets, and Save As.',
                'Open one practice file and add each Insert feature in order as you read each lesson.',
                'Save after tables, after each picture, and after header/footer setup.',
                'Replace lesson photos with your own Word screenshots when your teacher provides them.',
                'Finish with one multi-page document that uses at least a table, one picture, header, and page number.',
            ],
            subtopicPages: [
                { topicId: 'ms-word-2-insert-menu', label: 'Insert Menu options', emoji: '➕', description: 'Insert tab groups: Pages, Tables, Illustrations, Links, Text, Symbols.' },
                { topicId: 'ms-word-2-tables', label: 'Working with tables', emoji: '📊', description: 'Insert grid, add rows/columns, Table Design tab.' },
                { topicId: 'ms-word-2-pictures', label: 'Working with pictures', emoji: '🖼️', description: 'Insert from file, resize, wrap text, alt text basics.' },
                { topicId: 'ms-word-2-shapes', label: 'Working with shapes', emoji: '🔷', description: 'Rectangles, arrows, ovals; fill, outline, text inside shapes.' },
                { topicId: 'ms-word-2-header-footer', label: 'Header, footer', emoji: '📄', description: 'Open header area, type title/name, different first page.' },
                { topicId: 'ms-word-2-wordart', label: 'WordArt', emoji: '✨', description: 'Decorative title styles, colours, and resize on poster pages.' },
                { topicId: 'ms-word-2-symbols-equations', label: 'Symbol equations', emoji: '∑', description: 'Insert Symbol dialog; Equation tool for maths notation.' },
                { topicId: 'ms-word-2-page-number', label: 'Page number', emoji: '🔢', description: 'Top, bottom, margins; format and start numbering.' },
            ],
            sections: [
                section(
                    'The Insert tab overview',
                    'Click Insert on the ribbon. You will see groups such as Pages, Tables, Illustrations, Add-ins, Media, Links, Comments, Header & Footer, Text, and Symbols.\n\nClass 5 focuses on: Tables, Pictures, Shapes, Header & Footer, WordArt, Symbol/Equation, and Page Number.\n\nTip: If the ribbon is hidden, double-click Insert to expand it. Keep your document saved before inserting large pictures.',
                    MS_WORD2_MAIN_PAGE_IMAGES.insertTabPreview
                ),
                section(
                    'Tables preview',
                    'Tables use rows (horizontal) and columns (vertical). Insert → Table → drag the grid (for example 3×4) or Insert Table for exact counts.\n\nUse tables for: subject marks, weekly timetables, plant growth measurements, and before/after comparisons.\n\nAfter inserting, Table Design and Layout tabs appear when the cursor is inside the table.',
                    MS_WORD2_MAIN_PAGE_IMAGES.tablesPreview
                ),
                section(
                    'Pictures and shapes preview',
                    'Insert → Pictures → This Device (or Stock Images if teacher allows) to add a photo.\n\nInsert → Shapes to draw arrows, rectangles, and stars for diagrams.\n\nResize with corner handles—never stretch from the middle sides only, or photos look squashed.',
                    MS_WORD2_MAIN_PAGE_IMAGES.picturesPreview
                ),
                section(
                    'Headers, WordArt, symbols, and page numbers preview',
                    'Double-click the top margin to open the header; type your project title and class.\n\nInsert → WordArt for colourful poster headings.\n\nInsert → Symbol for °, ©, ÷, or Greek letters; Equation for fractions and formulas when demonstrated.\n\nInsert → Page Number to show 1, 2, 3… on homework longer than one page.',
                    MS_WORD2_MAIN_PAGE_IMAGES.layoutPreview
                ),
            ],
        },
    },
    subLesson(
        'ms-word-2-insert-menu',
        'MS WORD-2: INSERT MENU',
        'Working with Insert Menu options',
        'The Insert tab is the main doorway for everything you add besides plain typing. This lesson maps each group on the Insert ribbon so you know where tables, pictures, shapes, headers, WordArt, symbols, and page numbers live before opening the detailed sub-lessons.',
        [
            section(
                'Opening the Insert tab',
                'Step 1: Open Word and your practice document.\n\nStep 2: Click Insert on the ribbon (between Home and Draw/Design depending on version).\n\nStep 3: Look left to right across groups—each cluster of buttons has a small label at the bottom (Tables, Illustrations, etc.).\n\nStep 4: Click inside your document body if buttons look greyed out—Word needs a blinking cursor in the page.\n\nRemember: Insert adds objects; Home changes text you already typed.',
                MS_WORD2_INSERT_MENU_IMAGES.insertTabOverview
            ),
            section(
                'Pages and Tables groups',
                'Pages group — Blank Page inserts a new sheet; Page Break starts the next topic on a fresh page without pressing Enter many times.\n\nTables group — Table button opens a grid picker. Hover rows × columns (e.g. 3×3) and click to insert.\n\nFor exact size: Insert Table → type number of columns and rows → OK.\n\nClassroom use: Page Break before a bibliography; Table for a marks chart.',
                MS_WORD2_INSERT_MENU_IMAGES.pagesGroup
            ),
            section(
                'Illustrations group',
                'Pictures — Adds photos from computer, Bing/Stock (if enabled), or online (teacher permission only).\n\nShapes — Rectangles, ovals, arrows, stars, callouts for diagrams.\n\nIcons — Simple vector icons for timelines (optional in some Word versions).\n\n3D Models / Smart Art — Advanced; your teacher may demo later.\n\nAfter inserting, Picture Format or Shape Format tabs appear for colours and borders.',
                MS_WORD2_INSERT_MENU_IMAGES.illustrationsGroup
            ),
            section(
                'Links, Header & Footer, Text, Symbols',
                'Links — Hyperlink connects text to a website or another file (use only approved school links).\n\nHeader & Footer — Opens top/bottom areas that repeat on every page.\n\nText group — Text Box, Quick Parts, WordArt, Drop Cap.\n\nSymbols group — Symbol (special characters), Equation (maths builder).\n\nPage Number — Often in Header & Footer group; adds automatic numbering.',
                MS_WORD2_INSERT_MENU_IMAGES.linksGroup
            ),
            section(
                'Insert menu practice',
                '10-minute tour:\n\n1. Insert → Table 2×2 → type four cells with sample words.\n\n2. Insert → Shapes → rectangle → draw small box.\n\n3. Insert → WordArt → pick a style → type HI.\n\n4. Insert → Symbol → choose © or ° → Insert.\n\n5. Undo (Ctrl+Z) anything messy; Save as InsertTour_Class5.docx.\n\nTell your teacher which group felt easiest to find.',
                MS_WORD2_INSERT_MENU_IMAGES.insertPractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-tables',
        'MS WORD-2: TABLES',
        'Working with tables',
        'Tables keep rows and columns aligned—perfect for marks, timetables, and science observation charts. This lesson covers inserting a table, typing in cells, adding rows and columns, and basic Table Design formatting.',
        [
            section(
                'Insert a table',
                'Method 1 — Grid picker:\n\nInsert → Table → move mouse over grid → click 3×4 for three columns and four rows.\n\nMethod 2 — Insert Table dialog:\n\nInsert → Table → Insert Table → enter columns and rows → OK.\n\nMethod 3 — Convert text (advanced):\n\nType words separated by tabs, select them, Insert → Table → Convert Text to Table (teacher demo).\n\nClick the first cell and start typing—Tab key moves to the next cell.',
                MS_WORD2_TABLES_IMAGES.insertTable
            ),
            section(
                'Rows, columns, and cell editing',
                'Click inside the table → Table Layout tab (or Layout under Table Tools).\n\nInsert Above / Below — adds rows.\n\nInsert Left / Right — adds columns.\n\nDelete — removes row, column, or whole table.\n\nMerge Cells — combines selected cells for a wide title row.\n\nSplit Cells — divides one cell into smaller ones.\n\nUse Backspace inside a cell to erase text—not Delete Table unless you mean to remove everything.',
                MS_WORD2_TABLES_IMAGES.rowsColumns
            ),
            section(
                'Table Design basics',
                'With cursor in table → Table Design tab.\n\nTable Styles gallery — coloured bands make headers easy to read.\n\nShading — fill one cell with light grey for column titles.\n\nBorders — show or hide grid lines; choose thick border for outer edge.\n\nBest habit: first row as headings (Subject, Marks, Grade) in bold; data in rows below.',
                MS_WORD2_TABLES_IMAGES.tableDesign
            ),
            section(
                'Table practice project',
                'Build a Class 5 marks table:\n\nRow 1 headers: Subject | Test score | Out of | Remarks\n\nRows 2–5: English, Maths, Science, Computer with sample numbers.\n\nApply a table style with header row emphasis.\n\nSave as MarksTable_Class5.docx.\n\nCheck: all columns line up; no text spilling outside cells (resize column by dragging border).',
                MS_WORD2_TABLES_IMAGES.tablePractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-pictures',
        'MS WORD-2: PICTURES',
        'Working with pictures',
        'Pictures make reports clearer—plant photos, map snapshots, or diagram screenshots. Learn to insert from your computer, resize safely, and choose how text wraps around the image.',
        [
            section(
                'Insert a picture',
                'Step 1: Click where the image should appear.\n\nStep 2: Insert → Pictures → This Device (or From File).\n\nStep 3: Browse to your class folder or teacher USB → select .jpg or .png → Insert.\n\nRules: use only photos you took, teacher provided, or stock sites approved by school. Credit sources in your report caption when required.',
                MS_WORD2_PICTURES_IMAGES.insertPicture
            ),
            section(
                'Resize and move',
                'Click the picture → handles appear at corners and sides.\n\nDrag a corner handle to resize proportionally (hold Shift if your teacher recommends it).\n\nDrag the picture to move it; use Align tools on Picture Format for centering.\n\nCrop (Picture Format → Crop) trims edges—useful for extra background.\n\nNever drag side handles only on photos—it stretches faces and objects unnaturally.',
                MS_WORD2_PICTURES_IMAGES.resizePicture
            ),
            section(
                'Text wrapping and layout',
                'Picture Format → Wrap Text:\n\n• In Line with Text — sits like a big letter in the paragraph.\n\n• Square / Tight — text flows around the image.\n\n• Top and Bottom — text stays above and below only.\n\n• Behind / In Front — for layered posters (advanced).\n\nFor school reports, Square or Top and Bottom usually look neatest.',
                MS_WORD2_PICTURES_IMAGES.pictureLayout
            ),
            section(
                'Captions and accessibility',
                'Add a short caption below: Figure 1 — Bean plant on day 7.\n\nOptional: Picture Format → Alt Text → describe image for classmates who use screen readers.\n\nPractice: Insert one picture, wrap Square, type two sentences beside it, Save as PicturePractice_Class5.docx.',
                MS_WORD2_PICTURES_IMAGES.picturePractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-shapes',
        'MS WORD-2: SHAPES',
        'Working with shapes',
        'Shapes draw attention to steps, labels, and simple science diagrams. Insert rectangles, arrows, and stars; format fill and outline; type text inside shapes for callouts.',
        [
            section(
                'Insert and draw shapes',
                'Insert → Shapes → pick Rectangle, Oval, Arrow, or Star.\n\nCrosshair cursor appears → drag on the page to draw size you need.\n\nTo make a perfect square or circle: hold Shift while dragging.\n\nEsc key cancels if you chose the wrong shape.\n\nDuplicate: select shape → Ctrl+D or Copy/Paste for repeated flowchart boxes.',
                MS_WORD2_SHAPES_IMAGES.insertShapes
            ),
            section(
                'Shape Format tab',
                'With shape selected → Shape Format.\n\nShape Fill — interior colour (light yellow for highlight boxes).\n\nShape Outline — border colour and weight.\n\nShape Styles — preset combinations.\n\nBring Forward / Send Backward — layer order when shapes overlap.\n\nAlign — line up multiple shapes evenly for tidy diagrams.',
                MS_WORD2_SHAPES_IMAGES.shapeFormat
            ),
            section(
                'Text inside shapes',
                'Right-click shape → Add Text or Edit Text.\n\nType Step 1, Sunlight, or short labels.\n\nCenter text with Home → Center when cursor is inside shape.\n\nResize shape if text is cramped—readable labels matter more than tiny boxes.',
                MS_WORD2_SHAPES_IMAGES.shapeText
            ),
            section(
                'Shape practice — simple flowchart',
                'Draw three rectangles vertically.\n\nInsert arrow shapes between them.\n\nLabel: Input → Process → Output (computer topic) OR Seed → Water → Plant (science topic).\n\nMatch fill colours; Save as ShapeFlow_Class5.docx.',
                MS_WORD2_SHAPES_IMAGES.shapePractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-header-footer',
        'MS WORD-2: HEADER & FOOTER',
        'Working with header, footer',
        'Headers and footers repeat information at the top and bottom of every page—project title, your name, class, and date—so readers never lose context on page 2 and beyond.',
        [
            section(
                'Open header and footer areas',
                'Double-click the top margin (header) or bottom margin (footer).\n\nOr: Insert → Header or Footer → choose a built-in style or Edit Header.\n\nWord dims the main document body while you edit header/footer.\n\nClose Header and Footer button (or double-click body) returns to normal editing.',
                MS_WORD2_HEADER_FOOTER_IMAGES.openHeaderFooter
            ),
            section(
                'Type header and footer content',
                'Header example: My Science Project — Class 5 — 2026\n\nFooter example: G. Student | Page (leave space for page number lesson)\n\nUse Home tab tools while in header—bold project name, smaller font for class.\n\nDo not press Enter dozens of times in the body to fake a header—that breaks when pages change.',
                MS_WORD2_HEADER_FOOTER_IMAGES.typeHeaderFooter
            ),
            section(
                'Different first page',
                'Header & Footer Tools → Design tab → check Different First Page when your cover should have no header or a special title only.\n\nUseful for: title page clean, headers start on page 2 of a report.\n\nAlso: Odd & Even Pages (advanced) for booklet printing—teacher may mention only.',
                MS_WORD2_HEADER_FOOTER_IMAGES.differentFirstPage
            ),
            section(
                'Header/footer practice',
                'Create a two-page document.\n\nHeader: Essay Title — Your Name.\n\nFooter: Class 5 — Computer Lab.\n\nType one paragraph on page 1; insert Page Break; add paragraph on page 2.\n\nVerify header repeats. Save as HeaderFooter_Class5.docx.',
                MS_WORD2_HEADER_FOOTER_IMAGES.headerFooterPractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-wordart',
        'MS WORD-2: WORDART',
        'Working with wordart',
        'WordArt turns plain titles into colourful, shaped text—great for poster covers, event notices, and project front pages. Use it sparingly on school work so the body text stays easy to read.',
        [
            section(
                'Insert WordArt',
                'Insert → WordArt (in Text group).\n\nPick a style from the gallery.\n\nType your title when prompted—e.g. Save Water Campaign.\n\nWordArt appears as a movable object, not normal paragraph text.\n\nDrag to position; resize with corner handles like a picture.',
                MS_WORD2_WORDART_IMAGES.insertWordArt
            ),
            section(
                'WordArt styles and colours',
                'Select WordArt → Shape Format or WordArt Format tab.\n\nText Fill — gradient or solid colours.\n\nText Outline — border around letters.\n\nText Effects — shadow, glow, reflection (use lightly for school).\n\nWordArt Styles gallery — one-click presets.\n\nPrefer high contrast so title reads from across the classroom.',
                MS_WORD2_WORDART_IMAGES.wordArtStyles
            ),
            section(
                'Edit WordArt text',
                'Click WordArt → type inside or use Home font tools for size.\n\nRight-click → Edit Text to change wording.\n\nConvert to normal text (advanced): not usually needed in Class 5.\n\nOne WordArt title per page is enough—body stays Normal style.',
                MS_WORD2_WORDART_IMAGES.wordArtFormat
            ),
            section(
                'WordArt practice',
                'New document → WordArt title My Poster.\n\nBelow it, type a short paragraph in normal font explaining your topic.\n\nSave as WordArtPoster_Class5.docx.\n\nShow teacher: title readable? Body not too small?',
                MS_WORD2_WORDART_IMAGES.wordArtPractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-symbols-equations',
        'MS WORD-2: SYMBOLS & EQUATIONS',
        'Working with symbol equations',
        'Not every character is on the keyboard. Word’s Symbol dialog inserts degree signs, currency, arrows, and Greek letters. The Equation tool builds fractions and formulas for maths and science reports when your teacher enables it.',
        [
            section(
                'Insert Symbol',
                'Place cursor where symbol belongs.\n\nInsert → Symbol → More Symbols.\n\nChoose font (normal text or Symbol).\n\nClick symbol (e.g. °, ×, ÷, π, Ω) → Insert → Close.\n\nRecently used symbols appear on the quick Symbol menu next time.',
                MS_WORD2_SYMBOLS_EQUATIONS_IMAGES.insertSymbol
            ),
            section(
                'Common symbols for Class 5',
                '° — degrees (25°C)\n\n× — multiply\n\n÷ — divide\n\n± — plus/minus\n\n→ — arrow in steps\n\n© — copyright on original posters\n\nμ, π — science/maths when teacher introduces them.\n\nDo not spam symbols—one correct ° is better than ten decorative arrows.',
                MS_WORD2_SYMBOLS_EQUATIONS_IMAGES.commonSymbols
            ),
            section(
                'Insert Equation',
                'Insert → Equation → Insert New Equation.\n\nEquation tools appear; fraction, script, and radical templates build structures like a/b or square roots.\n\nType numbers and variables in boxes.\n\nProfessional tip: for simple homework, typing 1/2 with slash may be enough unless teacher asks for Equation editor.\n\nSave after inserting—equations use special formatting.',
                MS_WORD2_SYMBOLS_EQUATIONS_IMAGES.insertEquation
            ),
            section(
                'Symbols practice',
                'Write one sentence: Water boils at 100°C.\n\nInsert ° from Symbol dialog.\n\nOptional equation line: area of rectangle = length × width using × symbol.\n\nSave as Symbols_Class5.docx.',
                MS_WORD2_SYMBOLS_EQUATIONS_IMAGES.symbolsPractice
            ),
        ]
    ),
    subLesson(
        'ms-word-2-page-number',
        'MS WORD-2: PAGE NUMBER',
        'Working with page number',
        'Page numbers help teachers grade multi-page reports and keep printed handouts in order. Word inserts them automatically in header or footer and updates them when you add or remove pages.',
        [
            section(
                'Insert page number',
                'Insert → Page Number.\n\nChoose position: Top of Page, Bottom of Page, Page Margins, or Current Position.\n\nPick a style (plain number, Page 1, Page 1 of 1 with field codes on some templates).\n\nWord switches to header/footer view—click Close when done.',
                MS_WORD2_PAGE_NUMBER_IMAGES.insertPageNumber
            ),
            section(
                'Position and alignment',
                'Bottom center is common for school essays.\n\nTop right suits formal reports with a header title on the left.\n\nUse Tab key or alignment buttons inside footer to position number.\n\nDo not type page numbers manually on each sheet—they will be wrong when you edit.',
                MS_WORD2_PAGE_NUMBER_IMAGES.pageNumberPosition
            ),
            section(
                'Format page numbers',
                'Insert → Page Number → Format Page Numbers.\n\nNumber format: 1, 2, 3 or i, ii, iii for Roman front matter (advanced).\n\nStart at: choose 1 when cover page should not count (with Different First Page).\n\nUpdate table of contents (later classes)—page numbers link to document fields.',
                MS_WORD2_PAGE_NUMBER_IMAGES.formatPageNumbers
            ),
            section(
                'Page number practice',
                'Open your HeaderFooter_Class5.docx or new file with two pages.\n\nInsert bottom-center page numbers.\n\nAdd a third page with Page Break; confirm numbers show 1, 2, 3.\n\nSave as PageNumbers_Class5.docx.\n\nFinal project idea: combine table + picture + header + page number in one report file.',
                MS_WORD2_PAGE_NUMBER_IMAGES.pageNumberPractice
            ),
        ]
    ),
];
