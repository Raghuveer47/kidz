import React from 'react';
import { Monitor } from 'lucide-react';
import {
    WINDOWS_OS4_HUB_HERO,
    WINDOWS_OS4_ZIP_IMAGES,
    WINDOWS_OS4_PDF_IMAGES,
    WINDOWS_OS4_CONTROL_PANEL_IMAGES,
} from './class6WindowsOsFourImages';

const osIcon = <Monitor className="w-5 h-5 text-teal-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'computer_basics',
        icon: osIcon,
        content: { heading, text, sections },
    };
}

/** Class 6 (b) — Windows OS-4 hub + three sub-lessons. */
export const windowsOsFourTopics = [
    {
        id: 'windows-os-4',
        title: 'WINDOWS OS-4',
        category: 'computer_basics',
        icon: osIcon,
        children: [
            { label: 'Working with ZIP, RAR files', topicId: 'windows-os-4-zip-rar' },
            { label: 'Working with PDF files', topicId: 'windows-os-4-pdf' },
            { label: 'Working with control panel', topicId: 'windows-os-4-control-panel' },
        ],
        content: {
            heading: 'Windows OS-4',
            text:
                'Class 6 Windows OS-4 teaches everyday file skills on Windows: compressing folders with ZIP (and understanding RAR), sharing homework as PDF files that look the same everywhere, and opening Control Panel / Settings to adjust display, sound, and programs safely. You already used Windows in earlier classes—now you manage files like a confident student.',
            hubHeroImage: WINDOWS_OS4_HUB_HERO,
            unitTitle: 'Windows OS-4 — ZIP, PDF & Control Panel',
            firstLessonId: 'windows-os-4-zip-rar',
            firstLessonLabel: 'Working with ZIP, RAR files',
            unitDetail: {
                intro:
                    'Windows is not only for opening Word and Paint—it also helps you pack many files into one small package (ZIP), read locked-down documents (PDF), and change computer settings through Control Panel or Settings app. Teachers send ZIP folders when a project has many pictures; they send PDF worksheets so nobody accidentally deletes a question. Control Panel is where adults adjust screen brightness, uninstall old games, or fix sound—students learn what each area does so they can ask for help smartly.',
                analogy:
                    'Think of ZIP like vacuum-packing clothes for a trip: same items, less space, one bag to carry. PDF is like laminating a worksheet—everyone sees the same words and nobody scribbles on the master copy. Control Panel is the school office where you do not change every rule yourself, but you know which desk handles timetables (display), announcements (sound), or lost-and-found (programs).',
                keyPoints: [
                    {
                        title: 'ZIP compresses files',
                        body: 'Right-click → Send to → Compressed (zipped) folder makes a .zip file smaller for email or pen drives.',
                    },
                    {
                        title: 'RAR is similar',
                        body: 'RAR is another archive type; Windows may need extra software to open .rar—ask a teacher before installing apps.',
                    },
                    {
                        title: 'PDF preserves layout',
                        body: 'Save As PDF in Word or Print to PDF so fonts and pictures stay fixed on every computer.',
                    },
                    {
                        title: 'Control Panel / Settings',
                        body: 'Adjust display, sound, mouse, and installed programs—always follow school rules before changing anything.',
                    },
                ],
            },
            unitWhyLearn: [
                'ZIP files upload faster to classroom portals and fit on small pen drives.',
                'PDF is the standard format for worksheets, admit cards, and official notices.',
                'Knowing Control Panel helps you fix “no sound” or “text too small” with a teacher nearby.',
                'These skills prepare you for group projects with many attachments in Class 7 and beyond.',
            ],
            unitHowToStudy: [
                'Make a practice folder with three small files, then zip and unzip it on a lab PC.',
                'Export one Word paragraph as PDF and open it in the browser—notice you cannot edit easily.',
                'Open Settings with Win + I and find Display and Sound—look only, do not change without permission.',
                'Complete all three sidebar lessons in order: ZIP/RAR → PDF → Control Panel.',
            ],
            sections: [
                section(
                    'ZIP and RAR in one minute',
                    'ZIP squashes files together. RAR does the same with a different extension—some homework arrives as project.rar. Extract before editing.',
                    WINDOWS_OS4_ZIP_IMAGES.step1
                ),
                section(
                    'PDF for homework',
                    'When the teacher says “Submit PDF only,” export from Word so your layout stays perfect on their laptop.',
                    WINDOWS_OS4_PDF_IMAGES.save
                ),
                section(
                    'Control Panel basics',
                    'Find display size, default printer, and uninstall list. School PCs may lock some buttons—that is normal.',
                    WINDOWS_OS4_CONTROL_PANEL_IMAGES.settings
                ),
            ],
        },
    },
    subLesson(
        'windows-os-4-zip-rar',
        'Working with ZIP, RAR files',
        'Working with ZIP and RAR Files',
        'Compressed files save space and keep groups of files together. Learn ZIP built into Windows and how RAR files differ.',
        [
            section(
                'What is compression?',
                'Compression packs data tighter—like squeezing air out of a stuffed bag. A folder with ten photos might shrink so it emails in seconds instead of minutes.\n\nZIP (.zip) is the most common format in schools. RAR (.rar) is another format; opening it may require WinRAR or 7-Zip if Windows cannot extract automatically.',
                WINDOWS_OS4_ZIP_IMAGES.step1,
                {
                    bullets: [
                        'Compression does not delete your files—it wraps them.',
                        'Always extract (unzip) before editing—never edit inside the zip directly.',
                        'Scan unknown zip files with a teacher—some contain viruses.',
                    ],
                }
            ),
            section(
                'Create a ZIP in Windows',
                'Step 1: Select a file or folder.\n\nStep 2: Right-click → Send to → Compressed (zipped) folder.\n\nStep 3: A new .zip appears beside the original—rename it Class6_Project.zip.\n\nStep 4: Double-click the zip to peek inside without extracting.\n\nStep 5: To unpack: right-click → Extract All → choose destination → Extract.',
                WINDOWS_OS4_ZIP_IMAGES.step2,
                {
                    bulletsHeading: 'Good habits',
                    bullets: [
                        'Keep the original folder until you confirm the zip opens on another PC.',
                        'Use clear names: ScienceChart.zip not New folder (2).zip.',
                        'Do not zip exe files from strangers.',
                    ],
                }
            ),
            section(
                'RAR files — what students should know',
                'If double-clicking a .rar asks for an app, tell your teacher. Schools may install 7-Zip for labs.\n\nExtracting RAR works like ZIP: right-click → Extract here (with the correct program installed).\n\nNever download random “free unzip” ads from pop-up websites—use software your school approves.',
                WINDOWS_OS4_ZIP_IMAGES.lessonThumbnail
            ),
        ]
    ),
    subLesson(
        'windows-os-4-pdf',
        'Working with PDF files',
        'Working with PDF Files',
        'PDF means Portable Document Format—a snapshot of a document that looks the same on every screen and cannot be edited easily.',
        [
            section(
                'Why PDF?',
                'Teachers love PDF because your margins, fonts, and pictures stay fixed. A Word file might shift on another computer; PDF does not.\n\nPDFs open in Edge, Chrome, Adobe Reader, and many phones. You read, scroll, zoom, and sometimes fill forms—but you usually cannot change the text.',
                WINDOWS_OS4_PDF_IMAGES.read
            ),
            section(
                'Create a PDF from Word',
                'Step 1: Finish your document in Microsoft Word.\n\nStep 2: File → Save As → choose PDF (*.pdf) OR File → Export → Create PDF.\n\nStep 3: Name it Lastname_Class6_Report.pdf.\n\nStep 4: Open the PDF to verify every page looks correct.\n\nAlternative: File → Print → Microsoft Print to PDF (same result).',
                WINDOWS_OS4_PDF_IMAGES.save,
                {
                    bullets: [
                        'Check page breaks—long tables may split awkwardly.',
                        'Pictures should not look blurry—use reasonable size in Word first.',
                        'Submit PDF when the teacher specifies—do not send .docx unless asked.',
                    ],
                }
            ),
            section(
                'Reading and searching PDFs',
                'Use + and − to zoom. Ctrl + F searches for a word (great for long notes).\n\nSome PDFs allow highlighting or typing in boxes—only if your teacher enables it.\n\nIf PDF “will not open,” try another browser or ask if the download finished completely.',
                WINDOWS_OS4_PDF_IMAGES.lessonThumbnail
            ),
        ]
    ),
    subLesson(
        'windows-os-4-control-panel',
        'Working with control panel',
        'Working with Control Panel',
        'Control Panel (and the modern Settings app) is where Windows manages display, sound, programs, users, and more. Students learn to navigate—not change everything alone.',
        [
            section(
                'Open Control Panel / Settings',
                'Windows 11: Start → Settings (gear icon) or press Win + I.\n\nWindows 10: Start → type Control Panel → open it.\n\nMany tasks moved to Settings, but teachers still say “Control Panel” for the whole family of system tools.',
                WINDOWS_OS4_CONTROL_PANEL_IMAGES.settings
            ),
            section(
                'Useful areas for students',
                'Display — screen size, night light, resolution.\n\nSound — pick speakers or headphones, volume mixer.\n\nDevices — mouse speed, Bluetooth pairing (with permission).\n\nPrograms — uninstall software you no longer need (teacher only on lab PCs).\n\nUser Accounts — switch user, password hints (follow school policy).',
                WINDOWS_OS4_CONTROL_PANEL_IMAGES.programs,
                {
                    bulletsHeading: 'Safety rules',
                    bullets: [
                        'Never uninstall security software.',
                        'Do not change administrator passwords.',
                        'Ask before changing default printer or network settings.',
                    ],
                }
            ),
            section(
                'Troubleshooting with an adult',
                'No sound? Check volume icon → Output device → right speaker.\n\nText tiny? Settings → Display → Scale.\n\nProgram stuck? Task Manager (Ctrl+Shift+Esc) with teacher help.\n\nWrite what you clicked if something breaks—helps IT fix faster.',
                WINDOWS_OS4_CONTROL_PANEL_IMAGES.lessonThumbnail
            ),
        ]
    ),
];
