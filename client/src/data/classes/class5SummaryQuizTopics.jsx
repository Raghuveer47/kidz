import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';

/** Class 5 — SUMMARY and QUIZ (append to class5Data.topics). */
export const class5SummaryQuizTopics = [
    {
        id: 'class-quiz',
        title: 'QUIZ',
        category: 'assessment',
        icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
        content: {
            heading: 'Class 5 Quiz (10 Questions)',
            text:
                'Pick the best answer for each question—everything comes from your Class 5 lessons. Submit when you are done. To see which answers are correct, subscribe and unlock full quiz feedback.',
            quizQuestions: [
                {
                    question:
                        'The CPU is often called the brain of the computer because it:',
                    options: [
                        'Follows instructions and processes commands when you click, type, or open apps',
                        'Only draws pictures and plays videos on the screen',
                        'Stores all files inside the keyboard',
                        'Converts wall electricity into safe power for parts',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Which part is specially designed to handle graphics, games, and smooth video on screen?',
                    options: ['GPU (Graphics Processing Unit)', 'Power Supply Unit (PSU)', 'USB port only', 'The mouse pad'],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'The motherboard inside the cabinet mainly:',
                    options: [
                        'Connects CPU, RAM, storage, and other parts so data can travel between them',
                        'Replaces the need for a monitor',
                        'Is the decorative wallpaper on your desktop',
                        'Only holds snacks away from the keyboard',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'In File Management, a folder on the computer is like:',
                    options: [
                        'A digital backpack that keeps related files organized',
                        'A virus that deletes homework',
                        'The power button on the monitor',
                        'A type of printer ink',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'In MS Paint-3 you opened a sideways phone photo and want to fix its direction. Which tool group helps?',
                    options: [
                        'Home → Rotate (or flip) to turn the image the right way',
                        'Only the Eraser with no other steps',
                        'File → Print without saving',
                        'Undo until the photo disappears from the computer forever',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'In MS Word-2, where do you go to insert a table for a timetable or marks chart?',
                    options: [
                        'Insert tab → Table',
                        'Only the Recycle Bin on the desktop',
                        'View tab → Full Screen without any table menu',
                        'Paint bucket in MS Paint',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Windows OS-3 teaches about installing operating systems. What is the safe rule for students in a school lab?',
                    options: [
                        'Watch and learn from teachers or IT staff—do not install alone without permission',
                        'Boot any unknown USB stick to see what happens',
                        'Delete partitions on shared PCs for practice',
                        'Share product keys on social media to help friends',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Typing Skills-3 focuses on full sentences. Which habit builds accuracy first?',
                    options: [
                        'Home-row fingers, one space between words, capitals and periods—speed comes later',
                        'Banging keys as fast as possible while looking at the keyboard',
                        'Never using the spacebar between words',
                        'Typing only with one finger for every letter',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'AI-2 explains face unlock on phones. How does the AI usually recognize your face?',
                    options: [
                        'It learns patterns from many face examples—like distance between eyes and shape of features',
                        'It reads your mind without any camera',
                        'It guesses randomly every time you look at the screen',
                        'It only works if you shout your password aloud',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'The Power Supply Unit (PSU) inside the cabinet:',
                    options: [
                        'Takes electricity from the wall and converts it into safe power levels for computer parts',
                        'Draws all the pictures in video games by itself',
                        'Is the same thing as the laptop touchpad',
                        'Stores homework in cloud folders automatically',
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
            heading: 'Class 5 — Full Learning Summary',
            text:
                'A detailed review of every Class 5 topic—hardware inside the cabinet, file management, MS Paint-3, MS Word-2, Windows OS-3, typing sentences, AI-2, and the quiz—with justified text you can read like a study guide.',
            summaryIntro: [
                'Welcome to your Class 5 review page! This is a detailed map of everything you studied: internal computer parts, organizing files, advanced Paint and Word skills, how operating systems are installed, sentence typing practice, real-world AI ideas, and the class quiz. Read each topic card slowly. The text is written so you can study for school, explain ideas to a friend, or revise before moving to Class 6.',
                'Class 5 builds on Class 4. You already know ethics, health tips, Notepad, Word-1, Paint-2, Windows OS-2, and the WHAT IS AI unit. Now you looked inside the cabinet at CPU and motherboard, organized folders like a tidy desk, edited photos in Paint, built reports with Word’s Insert tab, learned how Windows/Linux/macOS get installed, typed full sentences, and explored AI in phones, games, and apps. Use this page like a textbook chapter summary: read once for the big picture, then open any lesson from the sidebar when you want pictures and step-by-step practice again.',
            ],
            summaryChecklist: [
                'Name at least four internal parts (cabinet, CPU, GPU, motherboard, PSU) and explain what each one does in simple words.',
                'Create, rename, and move files into folders with clear names such as Class5_ScienceProject.',
                'Open an image in MS Paint-3, crop or rotate it, save with a neat filename, and complete at least one exercise from the Exercises page.',
                'In MS Word-2, insert a table, a picture, and page numbers on a practice document using the Insert tab.',
                'Describe—in your own words—what “installing an operating system” means and why students need teacher permission in the lab.',
                'Type five full sentences with capitals, spaces, and periods using home-row finger placement.',
                'Give two everyday AI examples from AI-2 (face unlock, voice assistant, chatbot, games, recommendations, or image recognition) and one safety habit.',
                'Complete the Class 5 quiz; remember that subscribing unlocks which answers were correct and gives you more practice.',
            ],
            summaryRows: [
                {
                    topic: 'PARTS OF COMPUTER-4',
                    emoji: '🖥️',
                    outcome:
                        'Parts of Computer-4 took you inside the cabinet and onto the sides of a laptop. You met the computer cabinet—the protective box with fans and vents. The CPU acts as the brain, processing every click and command. The GPU is the graphics specialist for games, videos, and smooth pictures. The motherboard is the main circuit board connecting all internal parts like roads in a city. The Power Supply Unit (PSU) converts wall electricity into safe power for each component. Laptop ports (USB, audio, HDMI, charging) let you plug in headphones, pen drives, and projectors without forcing the wrong connector.',
                    highlights: [
                        'CPU = general processing brain; GPU = drawing and video power—both work as a team with RAM and storage.',
                        'Motherboard holds slots and pathways so parts can send data to each other.',
                        'PSU safety: never touch power cables with wet hands; switch off before cleaning around a PC.',
                        'Port rule: match plug shape to port—if it does not fit easily, stop and check with an adult.',
                    ],
                },
                {
                    topic: 'FILE MANAGEMENT',
                    emoji: '📁',
                    outcome:
                        'File Management taught you that a messy desktop is like a messy room—hard to find anything! A folder is a digital backpack for related files. You learned to create a new folder (right-click → New → Folder), rename it with a smart title like My Summer Photos, and move files by drag-and-drop. Good file names and folders save time when teachers ask for homework and help you avoid losing project pictures or Word documents.',
                    highlights: [
                        'Folders group files by subject, date, or project—one pile per topic beats one giant pile.',
                        'Rename with words you will remember six months later, not “Document1” forever.',
                        'Drag from desktop into a folder, or use Cut/Copy and Paste inside File Explorer.',
                        'Habit: save early, save often, and put the file in the right folder immediately.',
                    ],
                },
                {
                    topic: 'MS PAINT-3',
                    emoji: '🎨',
                    outcome:
                        'MS Paint-3 moved from blank-canvas drawing to editing real image files. On the hub you previewed open, crop, resize, rotate, flip, paste, and combine pictures. The Working with image lesson walked through File → Open, Select and Crop, Rotate for sideways photos, and simple collages. The Exercises page gives Warm-up, Builder, and Challenger tasks in order. The Certification page lists skills your teacher checks before awarding your Paint-3 certificate—portfolio file, neat saves, and completed exercises.',
                    highlights: [
                        'Open .jpg or .png from a school folder; never edit the only copy without backing up first.',
                        'Crop focuses on one object; Rotate fixes orientation from phone cameras.',
                        'Paste and move selections to build posters and science diagrams.',
                        'Save with clear names; show your teacher the certification checklist when ready.',
                    ],
                },
                {
                    topic: 'MS WORD-2',
                    emoji: '📝',
                    outcome:
                        'MS Word-2 built on Word-1 with the Insert tab as your layout toolbox. Eight sub-lessons covered Insert menu overview, tables for timetables and charts, pictures with wrap text, shapes for diagrams, headers and footers for repeating titles, WordArt for poster headings, symbols and equations for maths, and page numbers for multi-page reports. Together these skills turn a plain typed page into a polished school project with visuals, structure, and professional navigation cues.',
                    highlights: [
                        'Insert → Table: choose rows and columns for marks sheets or schedules.',
                        'Pictures: Wrap Text (Square or Top and Bottom) keeps paragraphs readable.',
                        'Headers/footers repeat on every printed page—great for report titles and your name.',
                        'Page numbers help teachers find sections in long assignments—use Insert → Page Number.',
                    ],
                },
                {
                    topic: 'WINDOWS OS-3',
                    emoji: '🪟',
                    outcome:
                        'Windows OS-3 introduced operating system installation—the process of copying Windows, Linux, or macOS onto a hard disk so the computer can boot. You studied overview vocabulary (media, partition, product key, activation), Windows setup steps, Linux distributions like Ubuntu, and macOS installation concepts on Apple hardware. School labs are installed by IT staff; your role is to understand steps, ask smart questions, and follow safety rules—never boot unknown USB sticks or click Install on shared machines without permission.',
                    highlights: [
                        'Installation = OS copied to storage + configured so the PC starts correctly.',
                        'Windows setup: language, disk space, user account, privacy settings, activation.',
                        'Linux: open-source option with many distributions; often demonstrated with live USB.',
                        'macOS: Apple-only hardware; students observe—real installs need trained adults.',
                    ],
                },
                {
                    topic: 'TYPING SKILLS-3',
                    emoji: '⌨️',
                    outcome:
                        'Typing Skills-3 practiced full sentences—not just single words or keys. You reviewed posture (sit tall, screen at eye level), home row placement (A S D F and J K L), spacebar between every word, capitals at sentence starts, and periods at ends. Warm-up, practice, and challenge sentence lists build rhythm: word → space → word → punctuation. Accuracy before speed; look at the screen when you can; take eye breaks after every ten sentences.',
                    highlights: [
                        'Class 3 taught home row; Class 4 taught Shift and editing keys—Class 5 combines them in real lines.',
                        'Both thumbs share the spacebar—one press between words, never zero or double spaces by habit.',
                        'Use Notepad or Word for practice; teacher checks spacing and punctuation.',
                        'Ten minutes daily beats one long rushed session—celebrate small improvements.',
                    ],
                },
                {
                    topic: 'AI-2',
                    emoji: '✨',
                    outcome:
                        'AI-2 explored fun, visual AI in everyday life across eight sub-lessons. You studied interactive AI concepts, playful learning with demos, face recognition (phone unlock), voice recognition (Siri and assistants), chatbots, smart enemies in games, recommendation systems (Netflix and YouTube), and image recognition (animals and objects). The big idea: many AI tools find patterns in data—photos, voice, clicks—and make guesses to help or entertain. You also practiced curiosity with safety: verify surprising answers, protect personal information, and remember AI imitates—it does not replace human kindness.',
                    highlights: [
                        'Face unlock maps facial features; voice AI turns sound waves into text commands.',
                        'Chatbots match patterns in questions to scripted or learned replies—always check important facts.',
                        'Game AI and recommendations use your past choices to predict what you might like next.',
                        'Image classifiers label photos after training on thousands of examples—not magic, but pattern learning.',
                    ],
                },
                {
                    topic: 'QUIZ',
                    emoji: '🏆',
                    outcome:
                        'The Class 5 quiz checks ideas from every topic above—hardware, files, Paint-3, Word-2, OS installation concepts, typing sentences, and AI-2. You can answer all questions and submit your choices. To protect full answer keys and advanced practice sets, correct answers and score breakdown are available with a subscription. That helps the site offer more quizzes, explanations, and progress tracking as you grow into Class 6 and beyond.',
                    highlights: [
                        'Questions are based only on what you studied in Class 5—not random trivia.',
                        'After submit you see that your answers were recorded; green/red marking waits for subscription.',
                        'Use the quiz to find topics you want to revise, then reopen that lesson from the sidebar.',
                        'Subscribe from the quiz page when you are ready for answer keys and extra challenges.',
                    ],
                },
            ],
            summaryFooter: [
                'You finished a strong year of hardware knowledge, creative tools, OS literacy, typing fluency, and AI awareness. Class 5 is the bridge between using applications confidently and understanding how computers and smart software work behind the scenes. If any card feels hard, reopen that topic, try the steps on a real PC with a teacher nearby, and practise for ten minutes a day.',
                'When you are proud of your summary review, try the quiz one more time, explain one internal part to a parent or friend, save one Word report and one Paint image to celebrate, and get ready for Class 6—where zip files, PDFs, PowerPoint, algorithms, and AI models await.',
            ],
            sections: [],
        },
    },
];
