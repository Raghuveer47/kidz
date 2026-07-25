import React from 'react';
import { Cpu, Monitor, Keyboard, MousePointer2, Calculator, Paintbrush, FileText, ClipboardCheck } from 'lucide-react';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from './class3PartsOutputImages';
import {
    WINDOWS_OS1_HISTORY_IMAGES,
    WINDOWS_OS1_VERSION_IMAGES,
    WINDOWS_OS1_FUNCTIONS_IMAGES,
    WINDOWS_OS1_HUB_SECTION_IMAGES,
    WINDOWS_OS1_OVERVIEW_IMAGES,
} from './class3WindowsOsOneImages';
import {
    MS_PAINT1_HUB_HERO,
    MS_PAINT1_MAIN_PAGE_IMAGES,
    MS_PAINT1_WHAT_PAINT_DOES_IMAGES,
    MS_PAINT1_WORKING_WITH_TEXT_IMAGES,
    MS_PAINT1_WORKING_WITH_COLORS_IMAGES,
} from './class3MsPaintOneImages';

/** Class 3 — Parts of Computer-2: classification rows aligned with output-devices folder photos + lessons. */
const COMPUTER_PARTS_2_CLASSIFICATION_ROWS = [
    {
        category: 'Printing on paper',
        device: 'Laser printer',
        function:
            'Uses a laser beam and dry toner powder to fuse sharp text and simple graphics onto paper very quickly. It is a common choice in schools and offices when you need many black-and-white pages that look neat, and the running cost per page is often lower than inkjet when you print a lot.',
    },
    {
        category: 'Printing on paper',
        device: 'Inkjet printer',
        function:
            'Sprays tiny liquid ink droplets through nozzles onto the page, so it can make bright colours and smooth photos at home. It is usually quieter and smaller than a laser printer for the same price, but ink cartridges may need replacing more often if you print homework or pictures every day.',
    },
    {
        category: 'Printing on paper',
        device: 'Dot matrix printer',
        function:
            'Pushes an ink ribbon against paper with a grid of tiny pins, building letters and shapes from patterns of dots. It is older and noisier than laser or inkjet, but it can print through multi-part forms and carbon copies, which is why some offices still keep one for receipts or delivery slips.',
    },
    {
        category: 'Screens & projectors',
        device: 'LED monitor',
        function:
            'A flat panel screen that uses light-emitting diodes behind or beside the picture to show whatever the computer sends: apps, videos, games, and your desktop. LED screens are bright, thin, and use less power than many older monitors, so they are the normal choice for desks and classrooms.',
    },
    {
        category: 'Screens & projectors',
        device: 'Projector (ceiling or desk)',
        function:
            'Takes the video signal from the computer and shines a very large image onto a white wall or projector screen so a whole group can watch a lesson, film, or presentation together. Teachers use it for slides; at home it can turn movie night into a cinema-style experience if the room can be dimmed.',
    },
    {
        category: 'Screens & projectors',
        device: 'Mini projector',
        function:
            'A small, portable projector you can carry in a bag and place on a table or tripod. It uses the same idea as a big projector but with a smaller lamp and lens, so the picture is best in a dark room—great for showing a project at a friend’s house or a small club meeting.',
    },
    {
        category: 'Speakers & earphones',
        device: 'Tower speakers',
        function:
            'Stand-up speaker boxes, often in pairs, that turn electrical audio signals into sound you can hear across a room. They usually have separate drivers for bass and treble, so music, game explosions, and video dialogue feel full and clear when you are not wearing anything on your ears.',
    },
    {
        category: 'Speakers & earphones',
        device: 'Soundbar',
        function:
            'A long, slim speaker bar that sits under a monitor or TV and spreads stereo or surround sound forward toward the listener. It saves desk space compared with two big towers and is a simple way to make shows and games sound much better than tiny built-in screen speakers.',
    },
    {
        category: 'Speakers & earphones',
        device: 'Earbuds (in-ear headphones)',
        function:
            'Tiny speakers that fit inside your ear canals and send sound straight to you without disturbing people nearby. They are light for travel and online classes, but you should keep the volume safe so your hearing stays healthy, and take breaks so your ears do not feel tired.',
    },
    {
        category: 'Headsets & voice',
        device: 'Over-ear headset with microphone',
        function:
            'Combines padded headphones that cover your ears with a microphone on a boom arm or built into the ear cup. You hear callers or game chat clearly while the mic picks up your voice for video lessons, team games, or recording—one cable or wireless link often carries both directions.',
    },
    {
        category: 'Scanning (input)',
        device: 'Scanner',
        function:
            'An input device that reads paper, photos, or drawings and turns them into a digital picture file inside the computer—the opposite direction from a printer. Flatbed scanners lay the page flat under glass; sheet-fed models pull pages through. Scanning is how old homework or art becomes editable or emailable.',
    },
];

export const class3Data = {
    className: "Class 3",
    topics: [
        {
            id: 'parts-of-computer-2',
            title: 'PARTS OF COMPUTER-2',
            category: 'computer_basics',
            icon: <Cpu className="w-5 h-5 text-blue-500" />,
            children: [
                { label: 'Printer', slug: 'printer' },
                { label: 'Scanner', slug: 'scanner' },
                { label: 'Monitor', slug: 'monitor' },
                { label: 'Projector', slug: 'projector' },
                { label: 'Speakers & headphones', slug: 'speakers-headphones' },
                { label: 'Ear buds', slug: 'ear-buds' },
                { label: 'Headset & microphone', slug: 'microphone' },
            ],
            content: {
                heading: 'Parts of the Computer — More Devices',
                text: 'You already know the keyboard, mouse, and screen. In this lesson we group printers, monitors, projectors, speakers, headsets, and scanners the same way as Class 2: clear tables, then deeper pages for each topic in the sidebar.',
                hardwareTitle: 'What is an output device?',
                hardwareBody:
                    'An output device is any piece of hardware that takes information FROM the computer and presents it to the outside world—on paper, on a wall, through speakers, or (with headsets) straight into your ears.\n\n' +
                    'That is different from an input device, which sends information INTO the computer (keyboard, mouse, scanner, microphone). Many gadgets do both: a touchscreen is input when you tap and output when it shows pictures; a gaming headset outputs game audio and inputs your voice.\n\n' +
                    'The photos in your Class 3 output-devices folder show real examples: laser, inkjet, and dot-matrix printers; an LED monitor; full-size and mini projectors; tower speakers, a soundbar, and earbuds; and a headset with a microphone. The table below names each one and explains what it is for.',
                classificationRows: COMPUTER_PARTS_2_CLASSIFICATION_ROWS,
                classificationIntro:
                    'This table matches your Parts of Computer-2 notes and the pictures you added: printing, screens and projection, speakers and earbuds, headsets, and scanning as the “paper in” partner to printing.',
                whyOutputDevices: [
                    'Without output devices we could not see our work on a big enough screen, share a lesson on a wall, listen to music and instructions, or put a story onto real paper for a parent to sign.',
                    'They let us choose the right tool for the place—loud speakers for a class demo, earbuds for a quiet corner, a projector for a movie, a printer for a project cover sheet.',
                    'Understanding names like laser printer, soundbar, or LED monitor helps you ask a teacher or parent for the right cable, setting, or volume when something does not work.',
                ],
                howOutputDevicesWork: [
                    'The computer sends digital data (text, pixels, sound waves) down a cable or wireless link to the device; the device turns that data into light, ink, or motion of a speaker cone.',
                    'Printers and projectors need power and sometimes special software called a driver so the operating system knows which model is plugged in.',
                    'Speakers and headphones use amplifiers to make the signal strong enough to hear; always start at low volume when plugging in new audio gear.',
                    'A scanner works the other way: it samples many tiny dots of light from your page and builds a file the computer can store, crop, or email.',
                ],
                outputDeviceGalleries: PARTS_OF_COMPUTER_OUTPUT_GALLERIES,
                sections: [
                    {
                        slug: 'printer',
                        subtitle: 'The Printer',
                        body:
                            'Printing is how digital work becomes real homework you can turn in. A laser printer is fast for lots of black text; an inkjet shines when you need colour photos or posters; a dot matrix is rare today but useful when copies must go through carbon paper. Always check that paper is straight in the tray, use the recycle bin for mistakes, and ask an adult before changing ink or toner.',
                    },
                    {
                        slug: 'scanner',
                        subtitle: 'The Scanner',
                        body:
                            'Scanning is how a paper drawing or worksheet becomes a file you can crop, brighten, or send by email. Place the page face-down on the glass for a flatbed, close the lid gently, and preview before you save so you do not store a blurry picture. For many pages, a sheet-fed scanner pulls them through one at a time. Remember: scanning is input (into the computer); printing is output (onto paper).',
                    },
                    {
                        slug: 'speakers-headphones',
                        subtitle: 'Speakers and Headphones',
                        body:
                            'Tower speakers and soundbars make sound for everyone in the room—great for a class video or music with friends. Match the plug or Bluetooth pairing to your computer, start volume low, and take listening breaks so your ears stay comfortable during long online days.',
                    },
                    {
                        slug: 'ear-buds',
                        subtitle: 'Ear buds',
                        body:
                            'Ear buds are tiny in-ear headphones that deliver sound just to you. They are useful for quiet study, online classes, or travel. Pick the correct ear tip size so they fit comfortably, keep volume safe, and clean them regularly so your ears stay healthy.',
                    },
                    {
                        slug: 'monitor',
                        subtitle: 'Monitor',
                        body:
                            'A monitor shows computer output clearly right on your desk. It is best for personal reading, typing, drawing, coding, and checking details that need sharp text. Modern LED monitors are bright and efficient, but you still need healthy habits: keep the top of the screen near eye level, sit about an arm’s length away, and adjust brightness so white pages are comfortable instead of dazzling.',
                    },
                    {
                        slug: 'projector',
                        subtitle: 'Projector',
                        body:
                            'A projector sends computer output to a big wall or screen so a whole class can follow one lesson together. It is perfect for presentations, videos, science diagrams, and live coding demos. For clear text, dim room lights, choose the correct input source, and set focus and keystone before teaching. Portable mini projectors are useful for small groups, while full-size units are better for larger rooms.',
                    },
                    {
                        slug: 'microphone',
                        subtitle: 'Headset & microphone',
                        body:
                            'A microphone captures your voice for recordings, voice typing, or video calls. A headset combines headphones with a mic so you hear the teacher while they hear you without speaker echo. Position the mic a finger-width from your mouth, speak clearly, and mute yourself when the teacher asks for quiet work time.',
                    },
                ],
            },
        },
        {
            id: 'windows-os-1',
            title: 'WINDOWS OS-1',
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-emerald-500" />,
            children: [
                { label: 'History', topicId: 'windows-os-1-history' },
                { label: 'Versions', topicId: 'windows-os-1-versions' },
                { label: 'OS functions', topicId: 'windows-os-1-functions' },
                { label: 'Overview of OS', topicId: 'windows-os-1-overview' },
            ],
            content: {
                heading: 'Windows OS-1',
                text:
                    'This unit explains what an operating system is, how Windows grew over time, which famous versions you may hear about, the five main jobs the OS does for you, and the screen parts you use every day in the computer lab. Read the summary on this page first, then open each of the four lessons in any order. Every section includes pictures from your class materials so you can connect words to what you see on a real PC.',
                osDetail: {
                    intro:
                        'An Operating System (OS) is the first large program that starts when you press the power button. Before you open Paint or a browser, the OS wakes up the processor, checks memory, loads drivers for the keyboard, mouse, screen, and sound, and then draws the sign-in screen or desktop. It sits between the physical machine (metal, chips, wires) and the applications you use. That is why the same copy of a game or a document can work on many different PCs: the OS gives every program a standard way to read the keyboard, draw on the screen, and write files to the disk. Without it, each app would have to talk to hardware in a different, difficult way.',
                    analogy:
                        'Picture a school. The building and furniture are the hardware. The timetable, rules, and staff who hand out equipment are the operating system. You and your classmates are the programs. The “Principal OS” does not do your homework for you, but it makes sure the lab is open, the projector speaks to the laptop, your files stay in the right cupboard, and nobody’s project accidentally erases someone else’s. When something breaks—a printer stops or Wi‑Fi drops—the OS is also the first place you look for settings, updates, and help.',
                    keyPoints: [
                        {
                            title: 'It is the bridge between you and the machine',
                            body:
                                'Raw hardware only understands electrical signals. Humans think in pictures, words, and clicks. The OS translates your actions: when you move the mouse, Windows tracks the pointer; when you press a key, it sends the character to the active window; when you plug in USB headphones, it tries to switch sound automatically. Older computers asked users to type cryptic commands; graphical systems like Windows wrap those commands into buttons and menus. That bridge is why primary students can learn useful skills in one term instead of years.',
                        },
                        {
                            title: 'It runs and controls programs',
                            body:
                                'Every open program needs processor time and RAM. If ten apps demanded 100% of the CPU at once, nothing would finish. The OS scheduler decides tiny slices of time for each task. It also loads programs from disk into RAM when you double‑click, saves changes back when you close, and can warn you if you try to shut down while a file is still saving. Background tasks—clock, network, antivirus checks—run quietly so your typing or drawing stays smooth.',
                        },
                        {
                            title: 'It organizes files and folders',
                            body:
                                'Disk storage is a long list of ones and zeros; the OS builds the idea of “folders” and “files” on top. It keeps a catalog so File Explorer can show names, dates, and sizes. It enforces rules: two files in the same folder cannot have the same name; deleting moves items to the Recycle Bin first on many setups. Copying to a USB stick, renaming a project, or searching for “*.pptx” all rely on services the OS provides to every app equally.',
                        },
                        {
                            title: 'It keeps devices and users safe',
                            body:
                                'Each device speaks a different “language.” A driver is a mini-program that teaches Windows how to use that exact printer or webcam model. The OS also manages users and passwords, encrypts data on modern devices, downloads security patches, and filters some network traffic. In a classroom, these layers reduce accidents—like one student changing another’s files—and reduce malware from unsafe downloads. Good habits plus a maintained OS are your best defence.',
                        },
                    ],
                },
                subtopicIntro:
                    'Use the sidebar to open each lesson: History, Versions, OS functions, and Overview. History explains why screens look friendly today. Versions shows desktops from Windows 95 through 11. OS functions covers interface, programs, storage, devices, and security. Overview explains This PC, drives, folders, menus, and the taskbar.',
                /** Shown on hub lesson cards (thumbnail next to each link). */
                subtopicThumbnails: {
                    'windows-os-1-history': WINDOWS_OS1_HISTORY_IMAGES[0],
                    'windows-os-1-versions': WINDOWS_OS1_VERSION_IMAGES[0],
                    'windows-os-1-functions': WINDOWS_OS1_FUNCTIONS_IMAGES[0],
                    'windows-os-1-overview': WINDOWS_OS1_OVERVIEW_IMAGES.thisPc,
                },
                hubHeroImage: WINDOWS_OS1_HUB_SECTION_IMAGES.whatIsOs,
                /** Parts-of-Computer-2–style hub (different colours: blue/slate). */
                windowsOsSmartBasicsTitle: 'Operating system — Smart Basics',
                windowsOsWhyLearn: [
                    'You use Windows every day in the lab; knowing the OS helps you save files safely, fix simple problems, and speak confidently about computers.',
                    'Exams and projects often ask what an OS does, how versions differ, or where files live—this unit prepares clear answers.',
                    'Good habits (updates, sign-out, safe USB eject) protect your work and the shared classroom machines.',
                ],
                windowsOsHowToStudy: [
                    'Read the overview on this page once, then open History → Versions → OS functions → Overview of OS.',
                    'Keep notes in your own words next to each lesson screenshot.',
                    'Try File Explorer and Start menu actions on a practice file, not the teacher’s demo folder.',
                    'Use “Back to Windows OS-1 overview” at the top of each lesson when you want to return to this summary page.',
                ],
                subtopicPages: [
                    {
                        topicId: 'windows-os-1-history',
                        label: 'History',
                        emoji: '🕰️',
                        description:
                            'Command-line era vs graphical Windows, why mice and windows changed classrooms, how PCs grew more powerful, and what history teaches thoughtful users.',
                    },
                    {
                        topicId: 'windows-os-1-versions',
                        label: 'Versions',
                        emoji: '📦',
                        description:
                            'Windows 95 through 11 with dated notes: Start menu evolution, stability milestones (XP), polish (7), service-model updates (10), design + TPM era (11).',
                    },
                    {
                        topicId: 'windows-os-1-functions',
                        label: 'OS functions',
                        emoji: '⚙️',
                        description:
                            'Deep dive: UI stack, process scheduler and RAM, NTFS files + cloud hooks, Plug‑and‑Play drivers, Defender/firewall/UAC and Wi‑Fi profiles.',
                    },
                    {
                        topicId: 'windows-os-1-overview',
                        label: 'Overview of OS',
                        emoji: '🧭',
                        description:
                            'Hands-on vocabulary: This PC & Quick access, drive letters and safe eject, naming files, Start vs Settings vs Win+X, shortcuts vs real files, Recycle Bin habits.',
                    },
                ],
                sections: [
                    {
                        subtitle: 'What is an Operating System?',
                        image: WINDOWS_OS1_HUB_SECTION_IMAGES.whatIsOs,
                        body:
                            'People often say “Windows” when they mean the whole computer, but strictly speaking Windows is the operating system—software that manages the machine. Other examples are macOS on Apple computers and Linux in many servers. On your lab PC, Windows starts services in the background (network, sound, printing), then shows you the desktop. Remember: applications like Word or Chrome are guests; the OS is the host that keeps the house in order.',
                    },
                    {
                        subtitle: 'The Desktop',
                        image: WINDOWS_OS1_HUB_SECTION_IMAGES.desktop,
                        body:
                            'The desktop is not inside the monitor glass—it is a full-screen workspace drawn by the OS after login. You can change the wallpaper picture, arrange shortcut icons for frequent folders, and open several overlapping windows (each window is like a separate sheet of paper on the desk). Many teachers ask you to minimize clutter: fewer icons mean faster visual scanning when you need to open the right project during a timed activity.',
                    },
                    {
                        subtitle: 'Icons',
                        image: WINDOWS_OS1_HUB_SECTION_IMAGES.icons,
                        body:
                            'An icon bundles a hidden path: double‑clicking “Science Project” might open D:\\Students\\Class3\\Science\\project.docx under the hood. Icons can represent programs (.exe shortcuts), folders, or single files. Right‑clicking an icon opens a menu with actions—Open, Pin to taskbar, Properties—without hunting inside menus. Learning “icon vocabulary” (folder shape vs. document vs. app logo) speeds up every lesson.',
                    },
                    {
                        subtitle: 'The Taskbar',
                        image: WINDOWS_OS1_HUB_SECTION_IMAGES.taskbar,
                        body:
                            'From left to right you typically see Start, Search, Task View (if enabled), pinned apps, then running apps with underline highlights, then the notification area (speaker, network, battery) and clock. Clicking a running app brings its window forward; Shift‑click or middle‑click behaviours vary, but for beginners: one click restores minimised windows. Teachers often pin Notepad, Browser, and File Explorer so the whole class finds the same tools in the same place.',
                    },
                ],
            },
        },
        {
            id: 'windows-os-1-history',
            title: 'WINDOWS OS-1: HISTORY',
            hideFromSidebar: true,
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: 'Windows OS-1 — History',
                text:
                    'Operating systems did not start with colourful desktops. This lesson traces how text-only tools grew into the visual Windows world you use today. Read each block slowly and compare it with your class picture: early terminals, the shift toward mice and windows, today’s powerful but simpler-looking PCs, and what it means for you as a learner.',
                sections: [
                    {
                        subtitle: 'Early days of operating systems',
                        image: WINDOWS_OS1_HISTORY_IMAGES[0],
                        body:
                            'In the 1970s and 1980s many office and school machines showed only text. Users memorised commands such as DIR (list files) or COPY (duplicate a file). Syntax had to be perfect; the machine did not guess what you meant. Colour was rare, graphics were crude, and multitasking—running several programs smoothly—was limited. Experts could work fast, but beginners spent more time fighting syntax than learning science or typing. Operating systems of that era focused on reliability and hardware control, not on friendly tutorials.',
                    },
                    {
                        subtitle: 'Why Windows changed learning',
                        image: WINDOWS_OS1_HISTORY_IMAGES[1],
                        body:
                            'Microsoft shipped early Windows versions as a shell on top of MS-DOS, then evolved into a full graphical environment. Overlapping windows let you compare two documents side by side. Icons replaced typed paths for common tasks. The mouse turned pointing into a skill even young children could practise. Schools could teach “click the blue E for browser” instead of “type the full network path.” Art class could use Paint while music class used a player—without reinstalling the whole system between periods. That accessibility multiplied how many students could benefit from shared labs.',
                    },
                    {
                        subtitle: 'From simple PCs to modern systems',
                        image: WINDOWS_OS1_HISTORY_IMAGES[2],
                        body:
                            'Each hardware jump—faster CPUs, gigabytes of RAM, solid-state drives, HD and 4K monitors—let Windows add richer experiences: smooth animations, instant search, thumbnail previews of photos, and built-in assistive tools (magnifier, narrator). Networking moved from dial-up modems to always-on broadband and classroom Wi‑Fi. Security moved from optional antivirus floppy disks to automatic updates and encryption. Today’s laptop might boot in seconds and resume work after sleep; yesterday’s machine might take minutes and lose unsaved typing if power dropped. The OS absorbed that complexity so students rarely notice it.',
                    },
                    {
                        subtitle: 'Big idea for kids',
                        image: WINDOWS_OS1_HISTORY_IMAGES[3],
                        body:
                            'History is not only dates—it is problem solving. Every major OS change answered real frustration: “I lost my file,” “I cannot print,” “The internet is scary.” Designers added Recycle Bin restore, plug-and-play wizards, parental controls, and clearer settings screens. Your job is not to memorise every old version, but to appreciate that clicking Save, using strong passwords, and updating Windows continues that story. Ask thoughtful questions in class: Why did the Start menu move in Windows 11? How does touch change homework? Curiosity turns you from a passive user into a smart digital citizen.',
                    },
                ],
            },
        },
        {
            id: 'windows-os-1-versions',
            title: 'WINDOWS OS-1: VERSIONS',
            hideFromSidebar: true,
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: 'Windows OS-1 — Important Versions',
                text:
                    'You do not need to install every old Windows release, but knowing names and rough timelines helps you understand teachers, parents, and news articles. Compare the screenshots: taskbar colour, Start button shape, and wallpaper style all signal which era a photo came from. Below is a compact tour from the mid‑1990s to today.',
                sections: [
                    {
                        subtitle: 'Windows 95',
                        image: WINDOWS_OS1_VERSION_IMAGES[0],
                        body:
                            'Released in 1995, it introduced the Start button, taskbar, and plug‑and‑play hardware detection to a mass audience. Long file names (finally spaces without clever tricks!) and the recycling metaphor made daily work less intimidating. Internet Explorer arrived bundled later in the life of the product family. For families buying their first PC, Windows 95 was often the version that proved home computers could be practical—not only for offices.',
                    },
                    {
                        subtitle: 'Windows XP',
                        image: WINDOWS_OS1_VERSION_IMAGES[1],
                        body:
                            'Launched in 2001 with the bright Luna theme (blue/green taskbar), XP became the longest‑lived desktop OS for many schools and cybercafés. It balanced compatibility with thousands of educational CDs and games while improving stability over Windows 9x. Service Pack updates fixed bugs for years. Even today you may see XP in museum exhibits or old lab photos—recognise it by the chunky green Start button and rounded window corners.',
                    },
                    {
                        subtitle: 'Windows 7',
                        image: WINDOWS_OS1_VERSION_IMAGES[2],
                        body:
                            'Released in 2009, Windows 7 repaired user trust after the mixed reaction to Windows Vista. It booted faster, used less annoying permission prompts, added Aero Snap (drag a window to the screen edge to resize), and improved searching inside the Start menu. Teachers appreciated predictable behaviour during exams: pinning Exam Browser or Calculator to the taskbar kept layouts consistent across rows of PCs.',
                    },
                    {
                        subtitle: 'Windows 10',
                        image: WINDOWS_OS1_VERSION_IMAGES[3],
                        body:
                            'From 2015 onward, Windows 10 treated the OS as a service: frequent feature updates instead of buying “Windows 11 in a box” every few years. The Start menu blended Windows 7 lists with Windows 8 tiles. Built-in apps such as Edge, Mail, and Photos improved over time. Gaming features (Xbox Game Bar), virtual desktops, and Cortana search targeted both students and professionals. BitLocker and Windows Hello added stronger security on supported hardware.',
                    },
                    {
                        subtitle: 'Windows 11',
                        image: WINDOWS_OS1_VERSION_IMAGES[4],
                        body:
                            'Windows 11 (2021+) smooths the visual design—rounded corners, centred taskbar icons optional, new Snap Layouts when hovering maximize, and tighter integration with Microsoft Teams and Android apps on some devices. Stricter hardware requirements (TPM 2.0, newer CPUs) aim to raise baseline security. For schools, test lab machines before upgrading: some older interactive whiteboards or printers need updated drivers.',
                    },
                ],
            },
        },
        {
            id: 'windows-os-1-functions',
            title: 'WINDOWS OS-1: OS FUNCTIONS',
            hideFromSidebar: true,
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: 'Windows OS-1 — OS Functions',
                text:
                    'Think of these five headings as the OS job description. In real life they overlap—security touches networking; file management touches devices—but separating them helps you study for quizzes and understand help articles when something breaks.',
                sections: [
                    {
                        subtitle: 'User interface management',
                        image: WINDOWS_OS1_FUNCTIONS_IMAGES[0],
                        body:
                            'The presentation layer turns bits inside memory into pixels on your monitor. It decides font smoothing, night light tint, scaling for high‑DPI screens, and which window sits “on top.” Accessibility tools—magnifier, high contrast themes, sticky keys—live here too. Touchscreens add gestures the OS must interpret before passing events to apps. When the UI feels sluggish, Task Manager can show whether the graphics driver or an animation effect is using resources.',
                    },
                    {
                        subtitle: 'Program management',
                        image: WINDOWS_OS1_FUNCTIONS_IMAGES[1],
                        body:
                            'The kernel and executive track every running process: its memory pages, priority, and open files. If Paint freezes, you can end the task without restarting the whole PC because the OS isolates failures when possible. Background programs—print spooler, Windows Update—run as services with lower priority so typing stays responsive. Hypervisors (used in Pro/Enterprise editions with Hyper‑V) let advanced users run a whole second OS inside a window; that is still program management, just at a bigger scale.',
                    },
                    {
                        subtitle: 'File and storage management',
                        image: WINDOWS_OS1_FUNCTIONS_IMAGES[2],
                        body:
                            'NTFS (default on many Windows volumes) supports permissions, encryption, compression, and journaling to recover from sudden power loss better than older FAT32 flash drives. The OS tracks bad sectors, warns when disk space is low, and indexes filenames for fast search. Libraries group Documents/Music across folders. OneDrive sync—optional—extends storage into the cloud while showing files as if they were local. Always respect school rules about personal USB sticks and cloud accounts.',
                    },
                    {
                        subtitle: 'Device and driver management',
                        image: WINDOWS_OS1_FUNCTIONS_IMAGES[3],
                        body:
                            'Plug and Play asks devices for IDs, finds drivers from Windows Update or manufacturer disks, and registers the device in Device Manager. Conflicts—two drivers fighting for the same IRQ—are rarer now but still appear with exotic lab equipment. Safe Mode boots with minimal drivers to recover from bad updates. For STEM classes, serial sensors or microcontrollers may need specific drivers installed once per machine image.',
                    },
                    {
                        subtitle: 'Security and networking',
                        image: WINDOWS_OS1_FUNCTIONS_IMAGES[4],
                        body:
                            'Windows Defender, SmartScreen, firewall profiles (Public vs Private network), and BitLocker work together: Defender scans downloads; SmartScreen warns about unknown apps; firewall rules limit unexpected inbound connections; BitLocker encrypts stolen laptops so data stays secret. User Account Control (UAC) prompts before major system changes. On the network stack, Wi‑Fi profiles store school SSIDs; metered connection settings reduce surprise billings on mobile hotspots. Discuss with your teacher before disabling any security feature.',
                    },
                ],
            },
        },
        {
            id: 'windows-os-1-overview',
            title: 'WINDOWS OS-1: OVERVIEW',
            hideFromSidebar: true,
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: 'Windows OS-1 — Overview of Key Parts',
                text:
                    'This lesson ties vocabulary to actions you perform weekly: opening “This PC,” copying a folder to a USB stick, pinning an app, or restoring a deleted slide from the Recycle Bin. Read slowly and try each idea on a practice file—not your final exam document.',
                sections: [
                    {
                        subtitle: 'My Computer / This PC',
                        image: WINDOWS_OS1_OVERVIEW_IMAGES.thisPc,
                        body:
                            'Press Win+E to open File Explorer quickly. “This PC” lists fixed drives, removable media, and network locations if configured. Right‑click any drive → Properties to see total capacity and free space—useful before copying large videos. Quick access pins frequent folders; you can remove pins you do not need to reduce clutter. In exams, teachers sometimes hide extra drives through policy; ask rather than guessing.',
                    },
                    {
                        subtitle: 'Drives',
                        image: WINDOWS_OS1_OVERVIEW_IMAGES.drives,
                        body:
                            'C: is commonly the system partition; avoid deleting unfamiliar files there. Secondary partitions (D:, E:) might hold student data or recovery images. Optical drives appear only when discs are inserted. USB sticks get letters dynamically—note which letter before copying homework out. Safely Remove Hardware ejects caches so pending writes finish; pulling early can corrupt both cheap drives and important grades.',
                    },
                    {
                        subtitle: 'Folder and file',
                        image: WINDOWS_OS1_OVERVIEW_IMAGES.folderFile,
                        body:
                            'Naming convention example: 2026-04-28_Science_LabReport.docx sorts chronologically. Forbidden characters in Windows filenames include \\ / : * ? " < > |. Extensions (.pdf, .png) hint which app opens by default; changing extensions blindly can make files seem “broken.” Practice Cut vs Copy: Cut + Paste moves within the same drive but may Copy across volumes unless you watch the tooltip. Shift+Delete skips Recycle Bin—only use when your teacher confirms.',
                    },
                    {
                        subtitle: 'Menu and Start menu',
                        image: WINDOWS_OS1_OVERVIEW_IMAGES.menuStart,
                        body:
                            'Start lists all installed apps alphabetically (scroll or type first letters after opening Start). Settings consolidates System, Devices, Network, Accounts, and Privacy—learn where Display and Sound live before presentations. Win+X opens a power-user menu on many keyboards for Device Manager and Event Viewer. Context menus adapt: right‑click a file for Share, Scan with Defender, or Open with… when double‑click picks the wrong program.',
                    },
                    {
                        subtitle: 'Desktop, taskbar, and recycle bin',
                        image: WINDOWS_OS1_OVERVIEW_IMAGES.desktopTaskbarRecycle,
                        body:
                            'Desktop shortcuts are small .lnk files pointing elsewhere—deleting the shortcut does not erase the real document unless you confirm. Auto-hide taskbar gains vertical space for reading but costs one hover movement—choose based on screen size. Notification badges show pending updates—restart during break time so class is not interrupted. Recycle Bin settings allow limiting size per drive; remember Empty Recycle Bin before logout only if no one else needs those files.',
                    },
                ],
            },
        },
        {
            id: 'good-computer-habits',
            title: 'GOOD COMPUTER HABITS',
            category: 'computer_basics',
            icon: <Monitor className="w-5 h-5 text-amber-500" />,
            content: {
                heading: 'Being safe, healthy, and kind to your computer',
                text:
                    'Use your class good-habits photos to learn posture, eye care, keeping food and drinks away, and gentle typing—so every computer day feels great.',
                sections: [],
            },
        },
        {
            id: 'typing-1',
            title: 'TYPING-1',
            category: 'computer_basics',
            icon: <Keyboard className="w-5 h-5 text-purple-500" />,
            content: {
                heading: "Introduction to Typing",
                text: "Typing is how we write words on the computer without a pencil. Let's learn the secrets of the keyboard!",
                sections: [
                    { subtitle: "The Home Row", image: "https://loremflickr.com/600/400/keyboard,typing", body: "The secret to typing fast is the Home Row! These are the middle row of letters: A, S, D, F, G, H, J, K, L. Always rest your fingers here." },
                    { subtitle: "Left Hand vs Right Hand", image: "https://loremflickr.com/600/400/hands,typing", body: "Your left hand controls the left side of the keyboard, and your right hand controls the right side. They work as a team!" },
                    { subtitle: "The Spacebar", image: "https://loremflickr.com/600/400/spacebar", body: "The giant key at the bottom is the Spacebar. Use your thumbs to press it when you need to put a space between two words." },
                    { subtitle: "The Enter Key", image: "https://loremflickr.com/600/400/enter,key", body: "When you finish a line and want to move your typing down to a brand new line, press the big Enter key on the right side." }
                ]
            }
        },
        {
            id: 'calculator',
            title: 'CALCULATOR',
            category: 'creative_tools',
            icon: <Calculator className="w-5 h-5 text-red-500" />,
            content: {
                heading: "Scientific Calculator (Step-by-Step)",
                text: "Learn all important scientific calculator operations in one page with simple steps and examples.",
                sections: [
                    { subtitle: "Opening the Calculator", image: "https://loremflickr.com/600/400/calculator,app", body: "Click the Start button, type 'Calculator', and click the icon that looks like a little math machine." },
                    { subtitle: "Number Buttons", image: "https://loremflickr.com/600/400/numbers,calculator", body: "You can click the numbers 0-9 on the screen using your mouse, or press them on your real keyboard!" },
                    { subtitle: "Adding and Subtracting", image: "https://loremflickr.com/600/400/math,addition", body: "To add numbers together, use the Plus (+) button. To take numbers away, use the Minus (-) button." },
                    { subtitle: "Finding the Answer", image: "https://loremflickr.com/600/400/equals,sign", body: "When you are ready to see the answer, click the Equals (=) sign, and magic—the total appears at the top!" }
                ]
            }
        },
        {
            id: 'ms-paint-1',
            title: 'MS PAINT-1',
            category: 'creative_tools',
            icon: <Paintbrush className="w-5 h-5 text-pink-500" />,
            children: [
                { label: 'What Paint does?', topicId: 'ms-paint-1-what-paint-does' },
                { label: 'Working with text', topicId: 'ms-paint-1-text' },
                { label: 'Working with colors', topicId: 'ms-paint-1-colors' },
            ],
            content: {
                heading: 'MS PAINT-1',
                text:
                    'MS Paint is a beginner-friendly drawing app where Class 3 students can create neat digital art step by step. On this main page, you will understand the canvas, ribbon tools, colors, and saving process before moving to sub-lessons. Practice slowly: draw basic shapes, add labels, choose matching colors, and save your work with a clear file name. By the end of this unit, you should be able to create one complete poster-style drawing with a title, clean outlines, balanced colors, and readable labels. You will also learn how to present your ideas clearly using layout, contrast, and tidy spacing—just like a mini digital designer.',
                hubHeroImage: MS_PAINT1_HUB_HERO,
                msPaintSmartBasicsTitle: 'MS Paint for Kids - Smart Basics',
                paintDetail: {
                    intro:
                        'Paint gives you a blank white page called a canvas. On this canvas, you can sketch with Pencil, draw smoother lines with Brush, use Shapes for clean diagrams, and fill colors with the Bucket tool. You can also type headings and labels for school charts. It is one of the easiest creative tools for Class 3 students to learn digital drawing and presentation skills together. As you practice, focus on three habits: draw neatly, keep spacing balanced, and save your file regularly.',
                    analogy:
                        'Think of Paint like a magic drawing book. The mouse is your pencil, the color box is your crayon set, and Save is like putting your drawing safely into your school bag so it never gets lost. The Text tool acts like your heading pen, and Shapes are like ready-made stencils to make your project look neat even when you are still learning.',
                    keyPoints: [
                        {
                            title: 'Easy to start',
                            body:
                                'Open Paint and start drawing in seconds. You do not need login tricks or hard settings. Just click a tool and begin.',
                        },
                        {
                            title: 'Great for school work',
                            body:
                                'You can make labels, diagrams, greeting cards, project titles, and chart decorations. These are very useful for class activities, homework, and presentation tasks.',
                        },
                        {
                            title: 'Mistakes are okay',
                            body:
                                'If a line goes wrong, click Undo or press Ctrl+Z. You can fix mistakes quickly, so drawing feels stress-free and fun.',
                        },
                        {
                            title: 'Save and share',
                            body:
                                'After finishing, save your picture with a name like MyFlower.png. Later you can open it again, show your teacher, or use it in a project.',
                        },
                        {
                            title: 'Plan like a mini designer',
                            body:
                                'Before coloring, quickly decide title position, drawing area, and label spots. A simple plan makes the final image cleaner and easier to read.',
                        },
                        {
                            title: 'Improve every time',
                            body:
                                'After finishing one drawing, review it and make a second improved version. This habit helps you see progress and build confidence with each project.',
                        },
                    ],
                },
                subtopicIntro:
                    'Use the sidebar under MS PAINT-1 to open What Paint does?, Working with text, and Working with colors.',
                subtopicThumbnails: {
                    'ms-paint-1-what-paint-does': MS_PAINT1_WHAT_PAINT_DOES_IMAGES.lessonThumbnail,
                    'ms-paint-1-text': MS_PAINT1_WORKING_WITH_TEXT_IMAGES.lessonThumbnail,
                    'ms-paint-1-colors': MS_PAINT1_WORKING_WITH_COLORS_IMAGES.lessonThumbnail,
                },
                msPaintWhyLearn: [
                    'It improves mouse control: click, drag, drop, and draw smoothly.',
                    'It helps you make school charts, diagrams, and creative posters.',
                    'It teaches careful planning: outline first, color next, then label neatly.',
                    'It builds confidence to use other computer apps later.',
                    'It strengthens presentation skills because clean drawings make ideas easier to explain in class.',
                    'It encourages creativity while still teaching structure, order, and neat digital work habits.',
                ],
                msPaintHowToStudy: [
                    'Read one lesson at a time and try the same steps in Paint.',
                    'Practice first on a rough drawing file, then make your final neat drawing.',
                    'Use short names and bright colors so your work is easy to read.',
                    'Check spelling in titles and labels before saving the final image.',
                    'Save your file after every big step so your work stays safe.',
                    'At the end, review your work: clear title, neat outline, good colors, and readable labels.',
                    'If possible, show your drawing to a parent/teacher and ask one improvement idea for the next version.',
                ],
                subtopicPages: [
                    {
                        topicId: 'ms-paint-1-what-paint-does',
                        label: 'What Paint does?',
                        emoji: '🖼️',
                        description:
                            'Open Paint, explore the window, draw with tools and shapes, and save and reopen your work safely.',
                    },
                    {
                        topicId: 'ms-paint-1-text',
                        label: 'Working with text',
                        emoji: '✏️',
                        description:
                            'Add titles and labels with the Text tool—font, size, color, and neat placement for school charts.',
                    },
                    {
                        topicId: 'ms-paint-1-colors',
                        label: 'Working with colors',
                        emoji: '🌈',
                        description:
                            'Choose colors, use shades, fill shapes, match colors with the eyedropper, and keep charts readable.',
                    },
                ],
                sections: [
                    {
                        subtitle: 'The canvas',
                        image: MS_PAINT1_MAIN_PAGE_IMAGES.canvas,
                        body:
                            'The big white area is called the canvas. This is where you draw everything. Start by planning where your main drawing, title, and labels will go. If you need more space, make the canvas bigger before drawing. Keeping artwork inside the canvas gives a clean final result. Leave small margins on all sides so your drawing does not look crowded. A neat layout helps teachers and classmates understand your work quickly. You can imagine the canvas in three zones: heading zone, drawing zone, and label zone—this makes posters look organized and professional.',
                    },
                    {
                        subtitle: 'Ribbon tools in a nutshell',
                        image: MS_PAINT1_MAIN_PAGE_IMAGES.ribbonTools,
                        body:
                            'The ribbon is the colorful strip of buttons at the top of Paint. Your picture labels six groups on the Home tab—use it like a map while you practice.\n\n1. Clipboard — Paste, Cut, Copy, and Select: move your whole drawing or just a part you boxed with Select.\n\n2. Image — Crop trims edges, Resize makes the picture bigger or smaller, and Rotate turns it left, right, or upside down.\n\n3. Tools — Pencil and Brush draw lines, Eraser rubs mistakes, Fill with color (paint bucket) fills a closed shape, Text (letter A) types words, Color picker copies a color from your picture, and Magnifier zooms in for tiny details.\n\n4. Shapes — Pick ready-made lines, rectangles, circles, stars, arrows, and more from the shape menu.\n\n5. Size — Open the Size list to make lines and brushes thin, medium, or thick.\n\n6. Colors — Color 1 is the main color for outlines and text; Color 2 is the background color behind fills. Pick from the palette or click Edit colors for extra shades.\n\nTry one group at a time on a practice canvas, then combine tools in a small poster—explore, draw, create, and have fun!',
                    },
                    {
                        subtitle: 'Colors at a glance',
                        image: MS_PAINT1_MAIN_PAGE_IMAGES.colors,
                        body:
                            'Colors make your drawings bright and beautiful! On the Home ribbon, find the Colors group on the right. Your picture shows Color 1, Color 2, the palette, and Edit colors.\n\nPart 1 — Know the two color boxes. Color 1 is your main drawing color for lines, pencil, shapes, and text. Color 2 is your second color for backgrounds and fills. Many students keep Color 2 white until they need another background color.\n\nPart 2 — Use the color palette. It has two rows of squares: black, gray, red, orange, yellow, green, blue, purple, brown, pink, and more. Click one square to pick that color fast.\n\nPart 3 — Make your own color. If the shade is not on the grid, click Edit colors. Mix a new color in the window, like paint on a real palette.\n\nPart 4 — Follow these steps one by one.\n\nStep 1: Click the color you want in the palette.\n\nStep 2: Check the Color 1 box. Your chosen color should appear there.\n\nStep 3: Start drawing on the canvas with Pencil, Brush, or Shapes.\n\nPart 5 — Smart color tips. For sunny pictures, use light yellow, light blue, and light green. For night pictures, use dark blue, dark purple, and black. Use only 3 to 5 main colors so your work stays neat.\n\nPick a color, start drawing, and have fun. Be creative with colors!',
                    },
                    {
                        subtitle: 'Save early, save often',
                        image: MS_PAINT1_MAIN_PAGE_IMAGES.save,
                        body:
                            'Your work is important—do not lose it! Saving keeps your Paint picture safe on the computer, just like putting homework in your school bag so it does not get lost.\n\nPart 1 — Where to save. Click File at the top-left of Paint. In the menu, choose Save (your picture shows it highlighted in blue). The first time you save a new drawing, you may see Save As so you can type a file name and pick a folder.\n\nPart 2 — Give a clear name. Use a simple name you can remember, like MyHouseDrawing or GardenChart. Save in a folder you know, such as Documents or your class folder. A clear name helps you open the right file later.\n\nPart 3 — Follow these steps one by one.\n\nStep 1: Save as soon as you start your picture, even after a small first sketch.\n\nStep 2: Save again after you make big changes—new colors, text labels, or shapes.\n\nStep 3: Remember that saving keeps your hard work safe and sound if the computer closes or power goes off.\n\nStep 4: Make it a habit—save early, save often, every time you work in Paint.\n\nSaving your work keeps your creations safe. A little save today means no worries tomorrow!',
                    },
                ],
            },
        },
        {
            id: 'ms-paint-1-what-paint-does',
            title: 'MS PAINT-1: WHAT PAINT DOES?',
            hideFromSidebar: true,
            category: 'creative_tools',
            icon: <Paintbrush className="w-5 h-5 text-pink-500" />,
            content: {
                heading: 'What Paint does?',
                text:
                    'In this lesson you will learn what Paint can do and how to use it from start to finish. You will understand the main window parts, basic tools, and the safe way to save and reopen your work. Follow each step like a classroom activity, and practice slowly so your drawings become cleaner and more confident.',
                sections: [
                    {
                        subtitle: 'How to open Microsoft Paint',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.howToOpen,
                        body:
                            'Before you draw, you must open the Paint app. On most school computers, Paint is already installed with Windows. Ask a teacher or parent the first time if you are not sure.\n\nStep 1: Locate the Start button. Look at the bottom-left of the screen and click the Windows Start button on the taskbar.\n\nStep 2: Search for the app. Type paint in the search box. You should see Paint appear under Best match.\n\nStep 3: Select the app. Click the Paint app icon in the search results.\n\nStep 4: Paint opens. When the Paint window appears with the ribbon and a white canvas, you are ready to create.\n\nTip: If you cannot find Paint, try typing mspaint in the search box, or ask your teacher to help you open it once.',
                    },
                    {
                        subtitle: 'Paint helps us draw on computer',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.paintHelpsUs,
                        body:
                            'Paint helps us draw on the computer! With Paint, we can create, color, and bring our ideas to life on the screen.\n\nDRAW: Use tools like Pencil and Brush to draw anything you like.\n\nCOLOR: Fill colors with the paint bucket and make your picture beautiful.\n\nSHAPES: Add cool shapes—circles, squares, stars, and more—to your drawing.\n\nTEXT: Add words and labels to make your work special.\n\nSAVE: Save your drawing so you can open it again and share it with others.\n\nPaint helps us be creative and have fun while we learn neat digital habits.',
                    },
                    {
                        subtitle: 'Main parts of Paint window',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.mainParts,
                        body:
                            'When you know the main parts of the Paint window, you can follow your teacher’s instructions easily. These seven parts work together to help you create amazing art.\n\nPart 1 — Title bar: Shows the name of your drawing at the top of the window.\n\nPart 2 — Quick Access Toolbar: Small icons for common commands like Save, Undo, and Redo.\n\nPart 3 — Ribbon: Has all the tools and options grouped together on the Home tab.\n\nPart 4 — Drawing area (canvas): The big white space in the middle where you draw and create.\n\nPart 5 — Colors box: Choose colors for drawing outlines and filling shapes.\n\nPart 6 — Scroll bars: Move around your drawing area when the picture is larger than the screen.\n\nPart 7 — Status bar: Shows helpful information like the size of your drawing and the zoom level.',
                    },
                    {
                        subtitle: 'Draw, erase, and fix',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.drawEraseFix,
                        body:
                            'Make your drawing perfect with MS Paint! Use three simple ideas: draw, erase, and fix.\n\nDRAW: Use tools to draw whatever you imagine. The Brush tool lets you draw freehand with different brushes. Try Pencil for thin lines and Brush for thicker strokes.\n\nERASE: Oops! Made a mistake? Erase it easily. The Eraser tool rubs out only the parts you do not want on the canvas.\n\nFIX: Use tools to fix and improve your drawing. The Fill tool pours color into closed areas. The Color Picker lets you pick any color already on your picture so your colors match.\n\nDraw with fun, erase with ease, and fix like a pro!',
                    },
                    {
                        subtitle: 'Use shapes for neat drawings',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.useShapes,
                        body:
                            'Shapes make your drawings easy, neat, and perfect! Paint has built-in shapes like line, rectangle, square, circle, triangle, star, heart, and more in the Shapes group on the ribbon.\n\nWhy use shapes? You get neat and perfect shapes every time. Shapes save time and effort. They make your drawings look beautiful. They are easy to draw and fill with colors.\n\nHow to use them: Choose a shape from the ribbon, click and drag on the canvas to draw it, then fill it with color. You can change the outline color and fill color to make shapes more creative.\n\nShapes plus colors equals amazing art!',
                    },
                    {
                        subtitle: 'Open, draw, save, and reopen',
                        image: MS_PAINT1_WHAT_PAINT_DOES_IMAGES.openDrawSave,
                        body:
                            'Create your art, save it, and come back anytime! Follow this simple workflow every time you work in Paint.\n\nStep 1 — OPEN: Open MS Paint and start a new drawing, or use File → Open to open an existing file.\n\nStep 2 — DRAW: Use tools, colors, and shapes to create your artwork on the canvas.\n\nStep 3 — SAVE: Click File → Save or Save As. Type a clear name like My Drawing and choose a folder you know. PNG is a good format for school projects. Your art is safe once it is saved!\n\nStep 4 — REOPEN: Later, use File → Open to open your saved file and continue your work. The title bar will show your file name.\n\nRemember: Save your work regularly so you can always reopen and continue. Open → Draw → Save → Reopen!',
                    },
                ],
            },
        },
        {
            id: 'ms-paint-1-text',
            title: 'MS PAINT-1: WORKING WITH TEXT',
            hideFromSidebar: true,
            category: 'creative_tools',
            icon: <Paintbrush className="w-5 h-5 text-pink-500" />,
            content: {
                heading: 'Working with text',
                text:
                    'Words make your Paint picture look like a real school chart! In this lesson you will learn how to add a title, short labels, and your name using the Text tool. Follow each step in order—draw your picture first, then add text so labels stay clear and nothing important gets hidden. Check spelling before you click outside a text box and save your work when you are happy.',
                sections: [
                    {
                        subtitle: 'Select the Text tool',
                        image: MS_PAINT1_WORKING_WITH_TEXT_IMAGES.selectTextTool,
                        body:
                            'The Text tool lets you type words on your canvas—perfect for titles like My Garden or short labels such as Leaf and Stem.\n\nStep 1: Find the Text tool. On the Home tab of the ribbon, look for the letter A. That is the Text tool.\n\nStep 2: Click the Text tool. Your cursor changes so you can draw a text box.\n\nStep 3: Drag a box on the canvas. Click and drag where you want words to appear. Make the box wide enough for your title or label.\n\nStep 4: Start typing. A blinking cursor appears inside the box. Type your heading or first label.\n\nTip: Plan where text will go before you draw, or add text after your picture so labels do not cover the main drawing.',
                    },
                    {
                        subtitle: 'Choose font and size',
                        image: MS_PAINT1_WORKING_WITH_TEXT_IMAGES.chooseFontAndSize,
                        body:
                            'Good font choices help everyone read your chart from across the room.\n\nStep 1: With the text box active, look at the Font group on the ribbon. You will see font name, size, and style buttons.\n\nStep 2: Pick a simple font. Arial or Calibri are easy to read for Class 3 projects.\n\nStep 3: Set sizes on purpose. Use a large size (for example 28 or 36) for the main title. Use a medium size (18–22) for labels. Use a smaller size (14–16) for your name and date.\n\nStep 4: Use Bold wisely. Turn on Bold for the title only—not for every word—so the chart stays neat.\n\nClassroom rule: one big title, medium labels, small name in the corner.',
                    },
                    {
                        subtitle: 'Change text color',
                        image: MS_PAINT1_WORKING_WITH_TEXT_IMAGES.changeTextColor,
                        body:
                            'Text color must stand out on your background so teachers and friends can read it easily.\n\nStep 1: Click inside your text box (or select the words you already typed).\n\nStep 2: Open the color options in the Font group. Choose a text color before you finish typing when you can.\n\nStep 3: Use strong contrast. Dark text (black, navy, dark green, dark brown) works best on a white or light canvas.\n\nStep 4: Avoid tricky pairs. Light yellow, pale pink, or very light gray on white are hard to see—skip them for labels.\n\nStep 5: Limit your palette. One or two text colors for the whole chart looks professional; too many colors looks messy.\n\nTip: If you change the canvas background later, check that your text is still easy to read.',
                    },
                    {
                        subtitle: 'Place text in the correct area',
                        image: MS_PAINT1_WORKING_WITH_TEXT_IMAGES.placeTextCorrectly,
                        body:
                            'Labels should sit close to the part of the drawing they describe—like arrows on a science chart.\n\nStep 1: Drag each text box near its object. A label for a flower should sit beside the flower, not in the middle of the sky.\n\nStep 2: Leave breathing room. Keep a small gap between letters and drawn lines so text does not touch shapes.\n\nStep 3: Line up when you can. Place labels in one direction (all on the left, or all along the bottom) for a tidy look.\n\nStep 4: Check spelling early. Fix mistakes while the text box is still open. Clicking outside the box finishes the text for that box.\n\nStep 5: Use Undo if needed. If a label lands in the wrong spot, press Undo and try again.',
                    },
                    {
                        subtitle: 'Make neat labels',
                        image: MS_PAINT1_WORKING_WITH_TEXT_IMAGES.makeNeatLabels,
                        body:
                            'Finish your chart with matching labels and project details so it looks ready to present.\n\nStep 1: Use short words. Labels like Root, Stem, Leaf are better than long sentences on a small chart.\n\nStep 2: Keep labels consistent. Same font, same size, and the same style for every label on one drawing.\n\nStep 3: Add project info. Type your name, class, and date in one corner—usually bottom-right or bottom-left.\n\nStep 4: Read everything once. Point each label to the correct part of the picture. Fix any spelling or placement before saving.\n\nStep 5: Save your work. Use File → Save with a clear name like My Plant Chart.png so you can open it again.\n\nGreat charts have a clear title, neat labels, and readable text—just like a mini poster!',
                    },
                ],
            },
        },
        {
            id: 'ms-paint-1-colors',
            title: 'MS PAINT-1: WORKING WITH COLORS',
            hideFromSidebar: true,
            category: 'creative_tools',
            icon: <Paintbrush className="w-5 h-5 text-pink-500" />,
            content: {
                heading: 'Working with colors',
                text:
                    'Colors bring your Paint picture to life! In this lesson you will learn how to pick colors on purpose, use light and dark shades, fill shapes with the paint bucket, and match colors again with the Color Picker. Smart color choices make your chart bright, neat, and easy to read from far away. Practice slowly and use Undo whenever something does not look right.',
                sections: [
                    {
                        subtitle: 'Choose a color',
                        image: MS_PAINT1_WORKING_WITH_COLORS_IMAGES.chooseAColor,
                        body:
                            'Paint has two color boxes at the top: Color 1 (main) and Color 2 (secondary). You use them for outlines and fills.\n\nStep 1: Click Color 1 in the Colors box. This is usually the color for drawing lines and shape outlines.\n\nStep 2: Pick Color 2 if you need a second color—for example a fill color that is different from the outline.\n\nStep 3: Draw with Pencil or Brush. Your lines appear in the active color.\n\nStep 4: Plan before you splash. Decide two or three main colors for your chart (sky, grass, sun) so the picture stays organized.\n\nTip: Changing colors is fine, but change on purpose—not every click—so your drawing does not look messy.',
                    },
                    {
                        subtitle: 'Use different shades',
                        image: MS_PAINT1_WORKING_WITH_COLORS_IMAGES.useDifferentShades,
                        body:
                            'One flat color can look boring. Light and dark shades of the same color add depth and make simple drawings look great.\n\nStep 1: Choose a light fill. Example: light green inside a leaf.\n\nStep 2: Choose a darker outline. Example: dark green around the edge of the same leaf.\n\nStep 3: Try it on the sky and ground too—light blue sky with a slightly darker blue hill looks more real than one single blue.\n\nStep 4: Open Edit colors if your teacher shows you how, or pick the closest shades from the color box.\n\nRemember: light inside, darker outside—this is a simple shading trick every young artist can use in Paint!',
                    },
                    {
                        subtitle: 'Fill color inside a shape',
                        image: MS_PAINT1_WORKING_WITH_COLORS_IMAGES.fillColorInside,
                        body:
                            'The Fill tool (paint bucket) pours color into closed areas quickly—perfect for big shapes like sun, grass, or a house.\n\nStep 1: Select the Fill tool from the ribbon. It looks like a paint bucket tipping paint.\n\nStep 2: Click Color 2 (or Color 1) to choose the fill color you want.\n\nStep 3: Click inside a closed shape. The area fills with one click.\n\nStep 4: If color leaks across the whole canvas, do not worry! Press Undo (Ctrl+Z). Your outline probably has a tiny gap—close the gap with Pencil, then fill again.\n\nTip: Draw neat, closed outlines before filling. Shapes from the Shapes tool often fill very cleanly.',
                    },
                    {
                        subtitle: 'Match the same color again',
                        image: MS_PAINT1_WORKING_WITH_COLORS_IMAGES.matchSameColor,
                        body:
                            'Sometimes you need the exact same green or blue you already used. The Color Picker (eyedropper) copies a color from your picture.\n\nStep 1: Click the Color Picker tool on the ribbon.\n\nStep 2: Click a color on your canvas—the leaf, the border, or the sky you painted earlier.\n\nStep 3: That color becomes your active Color 1. Now draw or fill with the same shade.\n\nStep 4: Use it for matching parts. All leaves can share one green; all labels can share one outline color.\n\nWhy it matters: matching colors makes your project look like one complete chart, not a patchwork of random shades.',
                    },
                    {
                        subtitle: 'Keep colors easy to read',
                        image: MS_PAINT1_WORKING_WITH_COLORS_IMAGES.keepColorsReadable,
                        body:
                            'Before you save, step back and check that your chart still looks clear from a distance.\n\nStep 1: Count your main colors. About three to five strong colors is enough for most Class 3 charts. Too many neon colors can feel loud and confusing.\n\nStep 2: Check your text. If you added words, use dark text on light backgrounds so labels stay readable.\n\nStep 3: Zoom out. Use View → Zoom out (or the zoom slider) and look at the whole picture. Can you still see the title, drawing, and labels?\n\nStep 4: Fix with Undo. If one area is too bright or too dark, Undo and try a calmer color.\n\nStep 5: Save your final version. File → Save with a name you will remember.\n\nA great Paint chart is colorful, neat, and easy for everyone to understand—well done!',
                    },
                ],
            },
        },
        {
            id: 'class-quiz',
            title: 'QUIZ',
            category: 'assessment',
            icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
            content: {
                heading: 'Class 3 Quiz (5 Questions)',
                text: 'Pick the best answer for each question—everything comes from your Class 3 lessons. Submit when you are done. To see which answers are correct, subscribe and unlock full quiz feedback.',
                quizQuestions: [
                    {
                        question:
                            'A laser printer, LED monitor, and tower speakers all send information FROM the computer to you. Together they are called:',
                        options: [
                            'Output devices',
                            'Input devices only',
                            'Only the keyboard and mouse',
                            'The power cable in the wall',
                        ],
                        correctOptionIndex: 0,
                    },
                    {
                        question:
                            'Windows is an operating system. Which job does it do for you every day?',
                        options: [
                            'Runs programs and organizes your files and folders',
                            'Only draws pictures in MS Paint',
                            'Replaces the need for a monitor',
                            'Makes the keyboard disappear',
                        ],
                        correctOptionIndex: 0,
                    },
                    {
                        question:
                            'Good computer habit time! What should you do to keep your keyboard safe and your body comfortable?',
                        options: [
                            'Keep food and drinks away from the computer and sit up straight',
                            'Pour juice carefully next to the keys',
                            'Stare at the screen without blinking for an hour',
                            'Bang the keys as hard as you can',
                        ],
                        correctOptionIndex: 0,
                    },
                    {
                        question:
                            'Typing secret: the middle row letters A, S, D, F and J, K, L are called the home row because:',
                        options: [
                            'Your fingers rest there to start typing neatly',
                            'They are only for numbers',
                            'You never use them in real typing',
                            'They turn off the computer',
                        ],
                        correctOptionIndex: 0,
                    },
                    {
                        question:
                            'In MS Paint you drew a closed sun shape and want to fill it yellow quickly. Which tool should you use?',
                        options: [
                            'Fill tool (paint bucket)',
                            'Eraser only',
                            'Color Picker to scan the paper on your desk',
                            'Undo without choosing a color',
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
                heading: 'Class 3 — Full Learning Summary',
                text:
                    'A detailed review of every Class 3 topic—output devices, Windows, habits, typing, calculator, MS Paint, and the quiz—with justified text you can read like a study guide.',
                summaryIntro: [
                    'Welcome to your Class 3 review page! This is not a quick list—it is a detailed map of everything you studied: output devices, Windows, safe habits, typing, the calculator, MS Paint, and the class quiz. Read each topic card slowly. The text is written so you can study for school, explain ideas to a friend, or revise before moving to Class 4.',
                    'Class 3 builds on Class 2. You already know keyboards, mice, and basic input. Now you learned how the computer talks back through screens, printers, and sound, how Windows organizes your work, and how to create neat digital charts with Paint. Use this page like a textbook chapter summary: read once for the big picture, then open any lesson from the sidebar when you want pictures and step-by-step practice again.',
                ],
                summaryChecklist: [
                    'Explain the difference between an input device (like a scanner) and an output device (like a monitor or printer), and give at least three examples of each from this class.',
                    'Describe what an operating system does and name parts of the Windows screen: desktop, taskbar, Start menu, icons, and This PC.',
                    'Show good computer habits: posture, eye breaks, no food or drinks near the keyboard, and gentle typing.',
                    'Place fingers on the home row and type a short sentence using the spacebar and Enter correctly.',
                    'Open MS Paint, draw with tools and shapes, add a title with the Text tool, fill a closed shape with color, and save the file with a clear name.',
                    'Complete the Class 3 quiz; remember that subscribing unlocks which answers were correct and gives you more practice.',
                ],
                summaryRows: [
                    {
                        topic: 'PARTS OF COMPUTER-2',
                        emoji: '🖨️',
                        outcome:
                            'In Parts of Computer-2 you moved from “things you type and click” to “things that show, print, play sound, or scan paper.” An output device takes information from the computer and gives it to the world—on paper, on a screen, through speakers, or into your ears. An input device sends information in; the scanner is your main new input example here because it copies a page into a digital picture inside the computer—the opposite direction from a printer.',
                        highlights: [
                            'Printing: laser printers use toner and are fast for lots of school worksheets; inkjet printers spray liquid ink and are great for colourful photos; dot-matrix printers use pins and ribbons and are older but useful for certain office forms.',
                            'Screens and projection: the LED monitor is the flat screen on your desk; projectors (big or mini) blow up the computer picture onto a wall so a whole class can watch together.',
                            'Sound: tower speakers and soundbars play audio to the room; earbuds and headsets send sound privately—headsets also include a microphone for online class or games.',
                            'You should match the tool to the job: print homework on a printer, watch a lesson on a monitor or projector, listen quietly with earbuds, and scan a drawing or worksheet with a scanner when you need a file on the computer.',
                        ],
                    },
                    {
                        topic: 'WINDOWS OS-1',
                        emoji: '🪟',
                        outcome:
                            'Windows OS-1 taught you that the operating system is the boss software between you and the hardware. Without an OS, programs could not start, files would have no folders, and devices like printers would not work together. You studied history (from early command screens to friendly desktops), famous versions (Windows 95, XP, 7, 10, 11), the five jobs of any OS—user interface, program management, file storage, device management, and security—and everyday navigation with desktop, taskbar, Start menu, icons, This PC, drives, and the Recycle Bin.',
                        highlights: [
                            'History lesson: computers moved from text-only control to colourful desktops so learners could click icons instead of memorising long commands.',
                            'Versions lesson: each Windows generation added easier networking, better security, and smoother design—Windows 10 and 11 are what many schools use today.',
                            'Functions lesson: the OS shows windows and menus, starts and closes apps, saves homework in folders, connects keyboard/monitor/printer, and helps block unsafe downloads when settings are managed by adults.',
                            'Overview lesson: “This PC” shows drives and folders; the Recycle Bin holds deleted files until you empty it; the taskbar shows open programs and the clock.',
                        ],
                    },
                    {
                        topic: 'GOOD COMPUTER HABITS',
                        emoji: '💺',
                        outcome:
                            'Good computer habits keep your body healthy and the machine safe. Screens are bright and interesting, but your eyes need blinking, breaks, and a sensible distance. Your back and neck feel better when you sit tall with feet flat and screen at eye level. Liquids and crumbs are dangerous near keyboards—they can stick keys or damage circuits inside. Gentle typing and calm mouse movements help you work longer without pain and keep school equipment working for the next student.',
                        highlights: [
                            'Posture: shoulders relaxed, screen about an arm’s length away, no slouching for long periods.',
                            'Eyes: follow the 20-20-20 idea when you can—every twenty minutes, look twenty feet away for twenty seconds.',
                            'Food and drinks: snack before computer time or away from the desk; water bottles should have lids and stay off the keyboard tray.',
                            'Respect: treat school computers like shared tools—logout or close your work, and tell a teacher if something breaks.',
                        ],
                    },
                    {
                        topic: 'TYPING-1',
                        emoji: '⌨️',
                        outcome:
                            'Typing-1 introduced touch typing basics without rushing speed. The home row (A S D F and J K L) is where your fingers rest so every key is a short reach away. Your left hand covers the left side of the keyboard and your right hand covers the right side—they cooperate like a team. The spacebar gets both thumbs; Enter starts a new line when you finish a sentence or paragraph. Good typing is about accuracy first: look at the screen when you can, press one key at a time, and build speed only after letters feel familiar.',
                        highlights: [
                            'Home row anchors your hands so you do not hunt for every letter with one finger only.',
                            'Spacebar and Enter are the most-used “helper” keys for sentences and paragraphs.',
                            'Sitting properly (from Good Computer Habits) makes typing easier and reduces wrist strain.',
                            'Practice short words and your name before long paragraphs; celebrate small improvements each week.',
                        ],
                    },
                    {
                        topic: 'CALCULATOR',
                        emoji: '🔢',
                        outcome:
                            'The Calculator topic connected maths class with computer skills. You learned to open Windows Calculator from the Start menu, click or type numbers, and use + − × ÷ with the equals key for answers. Scientific mode goes further: squares, square roots, powers, percentages, and memory keys (M+, M−, MR) help with harder problems when your teacher demonstrates them step by step. Always read the display before pressing the next button, and clear (C) when you start a brand-new question so old numbers do not mix in.',
                        highlights: [
                            'Standard mode: fast checks for homework addition, subtraction, multiplication, and division.',
                            'Scientific mode: extra buttons for powers and roots—follow teacher examples slowly on the first try.',
                            'Memory keys: store a number you need again (like a middle step in a long problem).',
                            'Habit: estimate answers in your head first so you notice if a wrong button was pressed.',
                        ],
                    },
                    {
                        topic: 'MS PAINT-1',
                        emoji: '🎨',
                        outcome:
                            'MS Paint-1 turned you into a mini digital artist and chart maker. On the hub page you met the canvas, ribbon tools, colour boxes, and saving. “What Paint does?” walked through opening Paint, window parts, draw–erase–undo, shapes, and the open–draw–save–reopen workflow. “Working with text” showed how to place titles and labels with readable fonts and colours. “Working with colours” taught choosing colours, light and dark shades, filling closed shapes with the paint bucket, and matching colours with the Color Picker. Together these skills help you build posters for science, social studies, or creative projects.',
                        highlights: [
                            'Tools: Pencil and Brush for drawing, Eraser to fix lines, Shapes for neat diagrams, Text (A) for headings, Fill bucket for big areas, Color Picker to copy a colour already on the canvas.',
                            'Planning: sketch layout zones—title at top, drawing in the middle, labels around the edges.',
                            'Undo (Ctrl+Z) is your friend; save often with a clear filename such as WaterCycleChart.png.',
                            'Readable design: dark text on light backgrounds; limit neon colours; zoom out to check the whole picture.',
                        ],
                    },
                    {
                        topic: 'QUIZ',
                        emoji: '🏆',
                        outcome:
                            'The Class 3 quiz checks ideas from every topic above—output devices, Windows jobs, habits, typing, and Paint tools. You can answer all five questions and submit your choices. To protect full answer keys and advanced practice sets, correct answers and score breakdown are available with a subscription. That helps the site offer more quizzes, explanations, and progress tracking as you grow into Class 4 and beyond.',
                        highlights: [
                            'Questions are based only on what you studied in Class 3—not random trivia.',
                            'After submit you see that your answers were recorded; green/red marking waits for subscription.',
                            'Use the quiz to find topics you want to revise, then reopen that lesson from the sidebar.',
                            'Subscribe from the quiz page when you are ready for answer keys and extra challenges.',
                        ],
                    },
                ],
                summaryFooter: [
                    'You finished a full year of computer basics plus creative tools. Class 3 is the bridge between knowing parts of a computer and using Windows and Paint like a confident student. If any card feels hard, do not worry—open that topic again, try the steps on a real PC with a teacher nearby, and practise for ten minutes a day.',
                    'When you are proud of your summary review, try the quiz one more time, show a parent or friend one output device you can explain, and save one MS Paint picture to celebrate. Ready for more? Class 4 will add new topics—keep your good habits and neat file names as you go forward.',
                ],
                sections: [],
            },
        },
    ]
};
