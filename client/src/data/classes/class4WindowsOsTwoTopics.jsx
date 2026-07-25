import React from 'react';
import { Monitor } from 'lucide-react';
import {
    WINDOWS_OS2_HUB_IMAGES,
    WINDOWS_OS2_FILES_IMAGES,
    WINDOWS_OS2_FOLDERS_IMAGES,
    WINDOWS_OS2_WALLPAPER_IMAGES,
    WINDOWS_OS2_TASKBAR_IMAGES,
} from './class4WindowsOsTwoImages';

/** Class 4 — Windows OS-2 hub + four sub-lessons (insert into class4Data.topics). */
export const windowsOs2Topics = [
    {
        id: 'windows-os-2',
        title: 'WINDOWS OS-2',
        category: 'computer_basics',
        icon: <Monitor className="w-5 h-5 text-indigo-500" />,
        children: [
            { label: 'Working with files', topicId: 'windows-os-2-files' },
            { label: 'Working with folders', topicId: 'windows-os-2-folders' },
            { label: 'Working with wallpaper', topicId: 'windows-os-2-wallpaper' },
            { label: 'Working with taskbar', topicId: 'windows-os-2-taskbar' },
        ],
        content: {
            heading: 'Windows OS-2',
            text:
                'This unit builds on what you learned in Windows OS-1. You already know that Windows is the operating system and that the desktop, icons, and taskbar are your daily workspace. OS-2 goes deeper into practical skills: creating and saving files with sensible names, organising work inside folders, personalising the desktop background safely, and mastering the taskbar so you open apps faster and switch between windows without losing work. Read this overview page carefully first—it explains the big ideas in plain language with pictures from your class folder. Then open each of the four lessons from the sidebar in any order you like. Every preview section below matches what you will practise in the lab, so you can connect the words on screen to buttons and menus on a real school PC.',
            osDetail: {
                intro:
                    'In Class 3 you met the operating system as the “host” that runs programs and draws the desktop. In Class 4, Windows OS-2 focuses on how you personally manage your digital work on that desktop. A file is one saved unit of information stored on the hard disk or SSD—your typed story in Word, a drawing exported from Paint, a photo from a camera, a presentation, or a small program. Windows does not show raw disk data; it uses File Explorer to list files with friendly names, sizes, and dates. Each file has a name and usually an extension after the dot (for example .txt, .docx, .png, .mp3). The extension is a clue that tells Windows which application should open the file when you double-click. A folder is a container on the disk that can hold many files and even other folders inside it, like nested trays in a cupboard. Folders let you group all English work in one place and all science experiments in another, instead of scattering fifty unnamed items on the desktop. Wallpaper is the large background picture you see behind your shortcut icons; changing it makes the PC feel personal but does not move or delete your files. The taskbar is the long bar at the bottom of the screen (on most lab PCs) with the Start button, search, pinned apps, buttons for programs that are running right now, and the clock. Together, files, folders, wallpaper, and taskbar skills are the habits you will use every week when you save homework, copy projects to a USB drive, and return to the same apps during computer period.',
                analogy:
                    'Imagine your computer desktop is a study desk in a shared classroom. Each file is a single notebook or worksheet lying on the desk—one item, one title on the cover. If you leave notebooks everywhere with labels like “Document1” or “New folder,” you waste minutes every lesson hunting for the right page. Folders are plastic trays labelled by subject: one tray for Mathematics, one for English, one for your science fair photos. You slide notebooks into trays so the desk looks tidy and you always know where to reach. Wallpaper is like choosing a table mat or poster under the glass—it changes how the desk looks but does not throw away what is on top. The taskbar is the pencil tray bolted to the front edge of the desk: your favourite pens (pinned apps like File Explorer and the browser) stay in fixed slots, and whatever textbook is open right now lies in front of you with its spine visible (the highlighted button for the active window). Windows plays the role of the class monitor: it remembers which tray holds which notebook, warns you before you throw something into the Recycle Bin, and keeps the clock and sound controls in the same place every day so the whole room works the same way.',
                keyPoints: [
                    {
                        title: 'Files are your saved work—name them clearly',
                        body:
                            'Every time you type, draw, or record, you should save into a file with a name you will recognise next week. Good names include the subject, topic, and date, such as 2026_English_BookReview_May.docx or Science_PlantGrowth_Chart.png. Avoid dozens of copies called document1, document2, and final_FINAL. The extension after the dot is not optional decoration—it tells Windows whether to open Word, Paint, a video player, or another tool. Right-clicking a file shows Properties where you can read size and location; double-clicking opens it in the default app. Saving often with Ctrl+S protects you if the power blinks or someone accidentally closes a window. In the Working with files lesson you will practise create, open, save, copy, move, rename, and delete—and learn when delete really means “moved to Recycle Bin” and can be undone.',
                    },
                    {
                        title: 'Folders organise many files at once',
                        body:
                            'One folder can hold a whole project: text, pictures, and a slideshow together. You create folders in File Explorer by right-clicking empty space and choosing New → Folder, then typing a clear name before pressing Enter. Dragging moves a file into a folder on the same drive; holding Ctrl while you drag often copies instead. You can rename a folder without changing the files inside—only the label on the “tray” changes. Copying an entire folder to a USB stick is faster than copying files one by one when you take work home. Empty folders use almost no space, but messy nesting (folders inside folders with vague names) can confuse you later, so plan one level per subject unless a teacher asks for more. The Working with folders lesson walks through create, rename, copy, move, and delete step by step with safety reminders for shared lab machines.',
                    },
                    {
                        title: 'Wallpaper personalises the desktop without touching your files',
                        body:
                            'Wallpaper is stored as a display setting, not as a replacement for your homework folder. Right-click the desktop and choose Personalize or Personalize background to open the gallery, pick a solid colour, or Browse for a picture your teacher approved. Windows offers fit options—Fill, Fit, Stretch, Tile, and Center—so a photo of a person or a chart is not cropped in a silly way. Bright or busy wallpapers can make desktop icons harder to see; many students choose calmer images during exam weeks. Changing wallpaper does not delete documents on the desktop; shortcuts and real files stay where they were. School rules still apply: use appropriate images, do not download unknown files just to set wallpaper, and reset to a neutral background if asked. The Working with wallpaper lesson shows each menu path and explains what to do if the picture looks stretched or too dark behind icons.',
                    },
                    {
                        title: 'The taskbar is your control strip for apps and time',
                        body:
                            'From left to right you typically see Start (opens the app list and power options), Search (finds files and settings), pinned icons you chose to keep visible, then buttons for each open program with an underline or highlight on the active one, and finally the notification area with speaker, network, battery on laptops, and the clock. Pinning File Explorer, your browser, and Notepad means one click launches them instead of hunting through menus. Clicking an already-open app button switches to that window; hovering shows thumbnails when several windows of the same app exist. Right-click the taskbar for Taskbar settings where you can move the bar to the side, turn on auto-hide, or change icon size. Learning to switch windows with Alt+Tab is a bonus skill that saves time during timed activities. The Working with taskbar lesson labels each part and practises pin, unpin, and safe settings changes on a practice account.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under WINDOWS OS-2 to open Working with files, Working with folders, Working with wallpaper, and Working with taskbar. Each lesson has step-by-step sections with screenshots. Return here anytime with “Back to Windows OS-2 overview” at the top of a lesson page when you want to reread the summary.',
            subtopicThumbnails: {
                'windows-os-2-files': WINDOWS_OS2_HUB_IMAGES.filesPreview,
                'windows-os-2-folders': WINDOWS_OS2_HUB_IMAGES.foldersPreview,
                'windows-os-2-wallpaper': WINDOWS_OS2_HUB_IMAGES.wallpaperPreview,
                'windows-os-2-taskbar': WINDOWS_OS2_HUB_IMAGES.taskbarPreview,
            },
            hubHeroImage: WINDOWS_OS2_HUB_IMAGES.hero,
            windowsOsSmartBasicsTitle: 'Windows OS-2 — Organise & Personalise',
            windowsOsWhyLearn: [
                'Neat files and folders mean you can open the correct homework in seconds instead of searching through twenty “Untitled” documents before a deadline.',
                'Teachers and lab assistants can help you faster when your work has sensible names, lives in the right subject folder, and is not scattered only on the desktop.',
                'Understanding copy versus move prevents accidental duplicates that fill the USB stick, and understanding the Recycle Bin prevents panic when something seems “gone.”',
                'Personalising wallpaper and the taskbar makes the PC feel friendly and familiar while you still follow school rules about appropriate images and shared machines.',
                'Taskbar pins and window switching reduce wasted minutes at the start of every period—skills you will reuse in Class 5 and beyond when projects grow larger and use more applications at once.',
                'These habits connect directly to exams and practical checks that ask where files are stored, how to organise folders, or what the taskbar shows.',
            ],
            windowsOsHowToStudy: [
                'Read this overview page once from top to bottom, then open Working with files → Working with folders → Working with wallpaper → Working with taskbar in that order if you are new to File Explorer.',
                'Keep a small notebook or digital notes in your own words beside each lesson screenshot—write the menu path (for example right-click → New → Folder) not only the button names.',
                'Practise on a practice file or folder your teacher creates for the class; never rename, move, or delete items in the teacher’s demonstration folder or another student’s work.',
                'After each lesson, say aloud where your file is saved (Desktop, Documents, or inside which folder) so the path becomes memory, not guesswork.',
                'Compare the pictures on this page to your lab screen; Windows 10 and Windows 11 use slightly different words (Personalize vs Personalization) but the ideas stay the same.',
                'Use “Back to Windows OS-2 overview” at the top of each lesson when you want to return to this summary page without using the browser back button.',
            ],
            subtopicPages: [
                {
                    topicId: 'windows-os-2-files',
                    label: 'Working with files',
                    emoji: '📄',
                    description:
                        'What a file is, common types, then separate cards for create/open/save, copy, move, rename, and delete (with Recycle Bin restore)—each with steps and keyboard shortcuts.',
                },
                {
                    topicId: 'windows-os-2-folders',
                    label: 'Working with folders',
                    emoji: '📁',
                    description:
                        'What a folder is, then separate cards for create, rename, copy, move, and delete—each with File Explorer steps, USB backup tips, and shared-PC safety rules.',
                },
                {
                    topicId: 'windows-os-2-wallpaper',
                    label: 'Working with wallpaper',
                    emoji: '🖼️',
                    description:
                        'Open Personalization, choose a picture, then one card each for Fill, Fit, Stretch, Center, and Tile—plus solid colours and undo—with step-by-step instructions for every fit option.',
                },
                {
                    topicId: 'windows-os-2-taskbar',
                    label: 'Working with taskbar',
                    emoji: '📌',
                    description:
                        'Label every taskbar zone—Start, Search, pinned apps, running apps, notification area, clock—then practise Pin to taskbar, jump lists, Taskbar settings, auto-hide, and switching windows during multitasking.',
                },
            ],
            sections: [
                {
                    subtitle: 'Working with files',
                    image: WINDOWS_OS2_HUB_IMAGES.filesPreview,
                    body:
                        'People say “save my file” when they mean “write my work onto the disk so it stays after shutdown.” Windows stores that work as a file with a name you choose. On the desktop, some icons are real files and some are shortcuts—little arrows on the icon mean “this opens something stored elsewhere.” Double-clicking a .docx file usually launches Word; double-clicking .png opens Photos or another viewer. Creating a file often starts inside an application: File → New, type your content, then File → Save As the first time so you pick the folder and name. After that, Ctrl+S updates the same file. Copy (Ctrl+C) and Paste (Ctrl+V) duplicate content; drag-and-drop between folders may move or copy depending on whether you are crossing drives. Rename slowly: click once, pause, click again on the name, or press F2 in File Explorer. Delete sends most items to the Recycle Bin first—open it and choose Restore if you removed the wrong thing. In the full lesson you will match each action to a screenshot and practise on sample homework, not live class projects.',
                },
                {
                    subtitle: 'Working with folders',
                    image: WINDOWS_OS2_HUB_IMAGES.foldersPreview,
                    body:
                        'Folders are the backbone of organisation on a school PC. Open File Explorer from the taskbar pin or Win+E, then browse This PC → Documents or the Desktop. Empty space inside a folder is where you right-click → New → Folder and immediately type a name such as Class4_English or Science_LeafProject before clicking away. Double-click a folder to go inside; the address bar at the top shows the path so you can copy it for your notes. Dragging a file onto a folder on the same disk usually moves it; if you need a copy on the desktop and one in Documents, hold Ctrl while dragging or use Copy then Paste. Renaming a folder does not change the names of files inside unless you rename those files too. Deleting a folder removes everything inside—check twice on shared computers. Teachers often ask you to keep the desktop almost empty and store subjects under Documents so backups are simpler. The full lesson shows create, rename, copy, move, and delete with reminders about USB drives and the “Safely remove hardware” icon when you unplug.',
                },
                {
                    subtitle: 'Working with wallpaper',
                    image: WINDOWS_OS2_HUB_IMAGES.wallpaperPreview,
                    body:
                        'Wallpaper is the decorative background behind your icons, not a folder where homework lives. Right-click an empty area of the desktop (not on an icon) and choose Personalize or Personalize background. Windows 11 often opens Settings with a gallery of Microsoft pictures; Windows 10 may show a similar panel. You can pick a solid colour for a clean look during tests, or Browse photos to select an image from Pictures if your teacher allows personal photos. Fit controls matter: Fill covers the whole screen but may crop edges; Fit keeps the whole image visible with bars; Stretch can distort shapes; Center leaves borders; Tile repeats small patterns. Busy wallpapers make icon text hard to read—try a darker picture or smaller icons if labels disappear. Changing wallpaper never deletes files on the desktop; if an icon “vanishes,” it may be hidden behind a bright area—right-click the desktop → View and confirm Show desktop icons is on. Reset to a school default image before leaving the lab if your teacher requests it. The full lesson walks through each option with pictures from your class materials.',
                },
                {
                    subtitle: 'Working with taskbar',
                    image: WINDOWS_OS2_HUB_IMAGES.taskbarPreview,
                    body:
                        'The taskbar is always visible during normal work so you can launch and switch programs without returning to the desktop. The Start button opens the app list, power, and settings—use it when you forget where a program lives. Search lets you type a file name or “snipping tool” instead of clicking through menus. Pinned icons are apps you fixed to the bar: right-click an app on Start or on the taskbar itself → Pin to taskbar. Running programs appear as separate buttons; the wider highlight shows which window is active. Clicking another button brings that homework window forward without closing the first—both stay open until you click the X. The notification area holds volume, network, and sometimes battery; click icons to adjust sound or connect Wi‑Fi with teacher permission. Right-click the taskbar for Taskbar settings—move to top or side, combine buttons, auto-hide for more screen space, and icon size for touch screens. Unpin removes a shortcut you no longer need; it does not uninstall the program. The full lesson labels each zone and practises pin, unpin, and safe settings on a practice profile.',
                },
            ],
        },
    },
    {
        id: 'windows-os-2-files',
        title: 'WINDOWS OS-2: WORKING WITH FILES',
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: <Monitor className="w-5 h-5 text-indigo-500" />,
        content: {
            heading: 'Working with files',
            text:
                'Files are the building blocks of everything you save on a computer. This lesson explains what a file is, which types you will see in primary school, and each everyday operation on its own card—create and open, save, copy, move, rename, and delete—so you can practise one skill at a time in the lab.',
            sections: [
                {
                    subtitle: 'What is a file?',
                    image: WINDOWS_OS2_FILES_IMAGES.whatIsFile,
                    body:
                        'A file is a named bundle of data stored on the computer’s disk (or USB stick). It could be text, numbers, pictures, sound, or video. Windows shows each file with an icon and a name such as MyPoem.docx. Behind the name is a real location like C:\\Users\\YourName\\Documents\\MyPoem.docx.',
                    pointsHeading: 'Important ideas',
                    points: [
                        'One file = one item (one story, one photo).',
                        'The last part after the dot is the extension (.txt, .pdf, .png). It hints which program opens the file.',
                        'Shortcuts on the desktop look like files but only point to the real file elsewhere—deleting a shortcut does not erase the original unless you delete the real file in its folder.',
                    ],
                },
                {
                    subtitle: 'Types of files',
                    image: WINDOWS_OS2_FILES_IMAGES.fileTypes,
                    body: 'Class 4 students commonly meet these types:',
                    points: [
                        'Text and documents: .txt (Notepad), .docx (Word), .pdf (read-only reports).',
                        'Pictures: .png (sharp lines, charts), .jpg (photos).',
                        'Presentations: .pptx (PowerPoint).',
                        'Sound: .mp3, .wav.',
                        'Video: .mp4.',
                        'Web shortcuts: .html sometimes saved from browsers.',
                    ],
                    paragraphs: [
                        'Tip: If you rename a file, keep the extension unless your teacher says to change it. Turning report.docx into report.txt can confuse Windows and break the open command.',
                    ],
                },
                {
                    subtitle: 'File operations — create, open, and save',
                    image: WINDOWS_OS2_FILES_IMAGES.createOpenSave,
                    body:
                        'CREATE: In File Explorer, go to the folder you want → right-click empty space → New → pick Text Document, or open an app (Word, Paint) that creates the file when you save.\n\nOPEN: Double-click the file, or right-click → Open. If the wrong program appears, right-click → Open with → choose the correct app once.\n\nSAVE: Inside the program, click File → Save or press Ctrl+S. The first save asks for a name and location—pick your subject folder.\n\nSAVE AS: Makes a second file with a new name while keeping the original—useful for “MyStory_v2.docx.”',
                    pointsHeading: 'Practice steps',
                    points: [
                        'Create PracticeNote.txt in a Practice folder on the desktop.',
                        'Open it with Notepad, type three lines, save, close, and open again to check the text stayed.',
                    ],
                },
                {
                    subtitle: 'Copy a file',
                    image: WINDOWS_OS2_FILES_IMAGES.copyFile,
                    body:
                        'Copying means you make a duplicate: the original file stays where it was, and a second copy appears in another folder (or on a USB stick). This is perfect when you want the same homework on a pen drive without removing it from the school PC.',
                    pointsHeading: 'How to copy',
                    points: [
                        'Right-click the file → Copy, open the destination folder → right-click empty space → Paste.',
                        'Keyboard: click the file once → Ctrl+C (copy), open the folder → Ctrl+V (paste).',
                        'After copying, you should see two files with the same name in two different places—check the address bar to confirm.',
                        'Copying to a USB can take time; wait for the progress bar to finish, then eject safely.',
                    ],
                },
                {
                    subtitle: 'Move a file',
                    image: WINDOWS_OS2_FILES_IMAGES.moveFile,
                    body:
                        'Moving means the file leaves the old folder and lives in the new folder—there is only one copy afterward on that drive. Students use move when they tidy the desktop by dragging files into a subject folder.',
                    pointsHeading: 'How to move',
                    points: [
                        'Right-click the file → Cut, open the destination folder → Paste (or Ctrl+X then Ctrl+V).',
                        'Drag the file onto a folder on the same drive—Windows usually moves it; watch the tooltip for “Move to…” not “Copy to…”.',
                        'If you drag between different drives (PC to USB), Windows often copies instead of moves—use Cut and Paste when your teacher wants a true move.',
                        'After moving, the file should no longer appear in the old folder.',
                    ],
                },
                {
                    subtitle: 'Rename a file',
                    image: WINDOWS_OS2_FILES_IMAGES.renameFile,
                    body:
                        'Renaming changes the label on the file so you can find it later. Good names include subject, topic, and date, such as 2026_Science_LeafChart.png. Rename as soon as you create a file instead of keeping document1.docx.',
                    pointsHeading: 'How to rename',
                    points: [
                        'Right-click the file → Rename, or select it and press F2.',
                        'Type the new name; press Enter to finish.',
                        'Keep the extension (.docx, .txt, .png) unless your teacher tells you to change it—wrong extensions can stop the file opening.',
                        'Do not use these characters in names: \\ / : * ? " < > |',
                    ],
                },
                {
                    subtitle: 'Delete a file',
                    image: WINDOWS_OS2_FILES_IMAGES.deleteFile,
                    body:
                        'Deleting removes a file from its folder. On most school PCs, Delete sends the file to the Recycle Bin first—it is not gone forever until the bin is emptied. You can Restore if you deleted the wrong practice file.',
                    pointsHeading: 'How to delete safely',
                    points: [
                        'Select the file and press Delete, or right-click → Delete.',
                        'Open Recycle Bin on the desktop → right-click the file → Restore to bring it back.',
                        'Shift+Delete skips the Recycle Bin—only use when your teacher explicitly allows it.',
                        'Always ask before deleting shared class files or anything you did not create.',
                    ],
                },
            ],
        },
    },
    {
        id: 'windows-os-2-folders',
        title: 'WINDOWS OS-2: WORKING WITH FOLDERS',
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: <Monitor className="w-5 h-5 text-indigo-500" />,
        content: {
            heading: 'Working with folders',
            text:
                'Folders group files so your digital desk stays tidy. This lesson explains what a folder is, then gives you one card per operation—create, rename, copy, move, and delete—so you can practise each skill separately in File Explorer, just like the Working with files lesson.',
            sections: [
                {
                    subtitle: 'What is a folder?',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.whatIsFolder,
                    body:
                        'A folder (directory) is a container on the disk. It can hold files and other folders inside it—those inner folders are called subfolders. Example path: Documents\\Class4\\Science\\PlantProject\\ might contain photos and a report together.',
                    pointsHeading: 'Important ideas',
                    points: [
                        'The path reads like an address—each backslash is another level down.',
                        'File Explorer shows a tree on the left so you can expand and collapse branches.',
                        'Good habit: one top folder per school year or subject, then subfolders per project.',
                    ],
                },
                {
                    subtitle: 'Create a new folder',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.createFolder,
                    body:
                        'Creating a folder gives you a new empty tray to drop files into. You always create it inside a parent location such as Desktop, Documents, or an existing subject folder.',
                    pointsHeading: 'Step by step',
                    points: [
                        'Open File Explorer (folder icon on the taskbar or press Win+E).',
                        'Go to Desktop, Documents, or your class practice area.',
                        'Right-click empty white space → New → Folder.',
                        'Type a name right away—example Class4_Maths—then press Enter.',
                        'Double-click the new folder to open it and add files inside.',
                        'Avoid leaving the name as “New folder”—rename at once so you remember what is inside.',
                    ],
                },
                {
                    subtitle: 'Rename a folder',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.renameFolder,
                    body:
                        'Renaming changes only the folder’s label, not the files inside. Use clear names so you and your teacher can find projects quickly.',
                    pointsHeading: 'How to rename',
                    points: [
                        'Right-click the folder → Rename, or select it and press F2.',
                        'Type the new name and press Enter.',
                        'Do not use these characters: \\ / : * ? " < > |',
                        'Keep names short but meaningful—Art_Term2, not aaa.',
                        'If Windows says the folder is in use, close programs that have files open from that folder.',
                    ],
                },
                {
                    subtitle: 'Copy a folder',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.copyFolder,
                    body:
                        'Copying a folder makes a duplicate of the folder and everything inside it. The original stays in place. This is the best way to back up a whole project to a USB stick or to keep a second copy in Documents.',
                    pointsHeading: 'How to copy',
                    points: [
                        'Right-click the folder → Copy, open the destination (USB or another folder) → Paste.',
                        'Keyboard: select the folder → Ctrl+C, go to the destination → Ctrl+V.',
                        'Windows copies every file and subfolder inside—wait for the progress bar to finish.',
                        'After copying, check the address bar in both places to confirm you have two matching folders.',
                        'Before unplugging a USB, right-click the USB icon → Eject.',
                    ],
                },
                {
                    subtitle: 'Move a folder',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.moveFolder,
                    body:
                        'Moving a folder takes it out of the old parent and places it under a new parent—there is only one copy on that drive afterward. Students use move when they tidy the desktop by sliding subject folders into Documents.',
                    pointsHeading: 'How to move',
                    points: [
                        'Right-click the folder → Cut, open the new parent folder → Paste (or Ctrl+X then Ctrl+V).',
                        'Drag the folder onto another folder on the same drive—watch for “Move to…” in the tooltip.',
                        'Dragging from the PC to a USB drive often copies instead of moves—use Cut and Paste when your teacher wants a true move.',
                        'After moving, the folder should no longer appear in the old location.',
                    ],
                },
                {
                    subtitle: 'Delete a folder',
                    image: WINDOWS_OS2_FOLDERS_IMAGES.deleteFolder,
                    body:
                        'Deleting a folder removes the folder and every file and subfolder inside it. On most school PCs, Delete sends the whole folder to the Recycle Bin first, so you can Restore if you removed the wrong practice folder.',
                    pointsHeading: 'How to delete safely',
                    points: [
                        'Open the folder first—confirm nothing important is still inside.',
                        'Select the folder and press Delete, or right-click → Delete.',
                        'Open Recycle Bin → right-click the folder → Restore to bring it back.',
                        'Shift+Delete skips the Recycle Bin—only when your teacher allows it.',
                        'Never delete Windows folders, Program Files, or classmates’ work on shared PCs.',
                    ],
                },
            ],
        },
    },
    {
        id: 'windows-os-2-wallpaper',
        title: 'WINDOWS OS-2: WORKING WITH WALLPAPER',
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: <Monitor className="w-5 h-5 text-indigo-500" />,
        content: {
            heading: 'Working with wallpaper',
            text:
                'Wallpaper is the background picture behind your desktop icons. Changing it is fun and safe when you follow school rules. This lesson walks you through opening Personalization, choosing a picture, trying each fit option on its own card—Fill, Fit, Stretch, Center, and Tile—and finishing with solid colours and how to undo a change. Each section has clear steps you can follow on a lab PC.',
            sections: [
                {
                    subtitle: 'Open Personalization settings',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.openPersonalize,
                    body:
                        'Before you change the picture, you must open the wallpaper settings screen. Windows calls this area Personalization (American spelling) or Personalisation (British spelling)—both mean the same place.',
                    pointsHeading: 'Method 1 — from the desktop',
                    points: [
                        'Right-click an empty area of the desktop—click the background, not on an icon.',
                        'Click Personalize or Personalize background in the menu.',
                        'Settings opens with Background selected on the left.',
                        'Look at the large preview at the top—it shows how your desktop will look.',
                    ],
                    paragraphs: [
                        'Method 2 — from Start: click Start → Settings (gear icon) → Personalization → Background. Slideshow may be turned off in school; use Picture or Solid colour instead.',
                    ],
                },
                {
                    subtitle: 'Choose a picture',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.choosePicture,
                    body:
                        'A picture wallpaper uses one photo or drawing behind your icons. You can pick from Windows sample images or a file your teacher approved.',
                    pointsHeading: 'Steps to choose a picture',
                    points: [
                        'In Background settings, click the dropdown under Personalize your background and choose Picture.',
                        'Click one of the recent thumbnails, or click Browse photos / Browse.',
                        'Go to Pictures or the folder your teacher shared—select the file → Open or Choose picture.',
                        'Wait for the preview to update—check that icons are still easy to see on top.',
                        'School rule: use only photos you took, teacher-shared clipart, or built-in Windows images—not random internet downloads.',
                    ],
                },
                {
                    subtitle: 'Fill',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.fill,
                    body:
                        'Fill makes the image grow until it covers the entire screen. Parts at the top, bottom, or sides may be cut off (cropped) so there are no empty bars. Fill looks great for wide landscapes and nature photos where the middle matters most.',
                    pointsHeading: 'Steps to set Fill',
                    points: [
                        'Open Personalization → Background with your picture already chosen.',
                        'Find the fit control—often a dropdown labelled Choose a fit for your desktop background (Windows 11).',
                        'Select Fill.',
                        'Study the preview: the screen should have no black or grey bars, but faces at the edge might be cropped.',
                        'If important text or a face is cut off, try Fit instead for that image.',
                    ],
                },
                {
                    subtitle: 'Fit',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.fit,
                    body:
                        'Fit shrinks the image so the whole picture is visible. The entire photo stays on screen, but empty bars (letterboxing) may appear on the sides or top and bottom. Fit is best for posters, diagrams, or charts with words near the edges.',
                    pointsHeading: 'Steps to set Fit',
                    points: [
                        'Keep Picture selected and the same image loaded.',
                        'Open the fit dropdown.',
                        'Select Fit.',
                        'Check the preview: you should see the full image with possible bars of empty colour around it.',
                        'Use Fit when you must read every word or see every corner of the picture.',
                    ],
                },
                {
                    subtitle: 'Stretch',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.stretch,
                    body:
                        'Stretch pulls the image wider and taller until it touches all four edges of the screen. The whole screen is filled, but circles may look like ovals and faces can look squashed. Use Stretch only when the image is simple or your teacher asks you to try it.',
                    pointsHeading: 'Steps to set Stretch',
                    points: [
                        'Open the fit dropdown with your picture wallpaper active.',
                        'Select Stretch.',
                        'Look at the preview for squashed shapes—if people look too thin or wide, pick Fill or Fit instead.',
                        'Stretch is rarely the best choice for photos of people.',
                    ],
                },
                {
                    subtitle: 'Center',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.center,
                    body:
                        'Center places the image at the middle of the screen at its original size. It does not enlarge the photo to fill the screen, so borders or empty space often appear around it. Center works for small logos or clipart that should not be enlarged.',
                    pointsHeading: 'Steps to set Center',
                    points: [
                        'Select your picture in Background settings.',
                        'Open the fit dropdown and choose Center.',
                        'The preview shows the image in the middle—note any empty bands on the sides or top and bottom.',
                        'If the picture looks too small, try Fit or Fill instead.',
                    ],
                },
                {
                    subtitle: 'Tile',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.tile,
                    body:
                        'Tile repeats the same small image again and again across the desktop like wallpaper on a wall or a pattern on wrapping paper. It is uncommon for large photos but useful for tiny textures or simple patterns your teacher provides.',
                    pointsHeading: 'Steps to set Tile',
                    points: [
                        'Choose a small image (a pattern works better than a big photo).',
                        'Open the fit dropdown and select Tile.',
                        'The preview shows many copies of the image side by side.',
                        'If the pattern is too busy and icons are hard to see, switch to Solid colour or a calm Fill picture.',
                    ],
                },
                {
                    subtitle: 'Solid colours and undo',
                    image: WINDOWS_OS2_WALLPAPER_IMAGES.solidColors,
                    body:
                        'Solid colour removes the photo and paints the background one flat colour. Many students use soft blue or green during tests so nothing distracts them. Changing wallpaper never deletes your files—only the look behind the icons changes.',
                    pointsHeading: 'Steps for solid colour',
                    points: [
                        'In Background, open the dropdown and choose Solid colour.',
                        'Click a colour swatch or Custom colours to pick a calm shade.',
                        'Confirm icons are still visible—dark icons on dark blue may be hard to see.',
                    ],
                    paragraphs: [
                        'Undo a mistake: pick another picture or colour immediately—no harm done. On a shared school PC, return to the default wallpaper before you leave if your teacher requests it. Keep desktop icons in neat rows so you can double-click homework quickly.',
                    ],
                },
            ],
        },
    },
    {
        id: 'windows-os-2-taskbar',
        title: 'WINDOWS OS-2: WORKING WITH TASKBAR',
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: <Monitor className="w-5 h-5 text-indigo-500" />,
        content: {
            heading: 'Working with taskbar',
            text:
                'The taskbar is your control strip: Start menu, search, pinned apps, open programs, and the clock. Customising it helps you open File Explorer and Notepad in one click and switch between homework windows smoothly.',
            sections: [
                {
                    subtitle: 'Parts of the taskbar',
                    image: WINDOWS_OS2_TASKBAR_IMAGES.taskbarParts,
                    body: 'From left to right (default bottom bar):',
                    points: [
                        'Start button (Windows logo): opens the app list and power options.',
                        'Search: type app or file names quickly.',
                        'Task View (if shown): see all open desktops/windows.',
                        'Pinned apps: icons always visible—click to open.',
                        'Running apps: underline shows what is open; click to bring forward.',
                        'Notification area: speaker, Wi‑Fi, battery, hidden icons arrow.',
                        'Clock and date: click for calendar.',
                    ],
                    paragraphs: ['Practice pointing and naming each part with a partner.'],
                },
                {
                    subtitle: 'Pin apps to the taskbar',
                    image: WINDOWS_OS2_TASKBAR_IMAGES.pinApps,
                    body:
                        'Pinning keeps favourite programs on the bar.\n\nSteps:\n\n1. Open the app from Start once.\n\n2. Right-click its icon on the taskbar → Pin to taskbar.\n\n3. To remove: right-click pinned icon → Unpin from taskbar.\n\nGood pins for Class 4: File Explorer, Edge or Chrome (if allowed), Notepad, Calculator, Paint.\n\nDrag pinned icons to reorder—put File Explorer near Start for fast access.',
                },
                {
                    subtitle: 'Taskbar settings',
                    image: WINDOWS_OS2_TASKBAR_IMAGES.taskbarSettings,
                    body:
                        'Right-click empty taskbar space → Taskbar settings (or Start → Settings → Personalization → Taskbar).',
                    pointsHeading: 'Useful toggles to explore with a teacher',
                    points: [
                        'Align icons left vs centred (Windows 11).',
                        'Show smaller taskbar buttons on small screens.',
                        'Choose which icons appear in the corner (network, volume).',
                    ],
                    paragraphs: [
                        'Do not turn off settings you do not understand—ask first on shared machines.',
                    ],
                },
                {
                    subtitle: 'Auto-hide and switching windows',
                    image: WINDOWS_OS2_TASKBAR_IMAGES.autoHideTaskbar,
                    body:
                        'Auto-hide makes the taskbar slide away until you move the mouse to the screen edge. It gives more room for reading but is easy to forget—use only if your teacher agrees.\n\nSwitch windows: click icons on the taskbar, or press Alt+Tab and hold Alt while tapping Tab to cycle.\n\nMinimize vs close: the dash (-) button hides the window to the taskbar; the X closes the app—save before closing!\n\nEnd of lesson: make sure your taskbar still shows File Explorer so the next class can find files quickly.',
                },
            ],
        },
    },
];
