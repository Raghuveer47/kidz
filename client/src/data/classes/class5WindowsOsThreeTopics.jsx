import React from 'react';
import { Monitor } from 'lucide-react';
import {
    WINDOWS_OS3_HUB_IMAGES,
    WINDOWS_OS3_INSTALL_WINDOWS_IMAGES,
    WINDOWS_OS3_INSTALL_LINUX_IMAGES,
    WINDOWS_OS3_INSTALL_MAC_IMAGES,
} from './class5WindowsOsThreeImages';

const osIcon = <Monitor className="w-5 h-5 text-indigo-500" />;

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

/** Class 5 — Windows OS-3 hub + three OS installation sub-lessons. */
export const windowsOsThreeTopics = [
    {
        id: 'windows-os-3',
        title: 'WINDOWS OS-3',
        category: 'computer_basics',
        icon: osIcon,
        children: [
            { label: 'Installation of Windows OS', topicId: 'windows-os-3-install-windows' },
            { label: 'Installation of Linux OS', topicId: 'windows-os-3-install-linux' },
            { label: 'Installation of Mac OS', topicId: 'windows-os-3-install-mac' },
        ],
        content: {
            heading: 'Windows OS-3',
            text:
                'Class 5 Windows OS-3 introduces how operating systems are installed on computers. You already used Windows in Class 3 and Class 4—now you learn what “installation” means, how Windows setup works, and how Linux and macOS (Mac OS) are installed in similar but different ways. In school labs, teachers and IT staff perform real installations; your job is to understand the steps, vocabulary, and safety rules so you become a informed digital citizen.',
            hubHeroImage: WINDOWS_OS3_HUB_IMAGES.hero,
            windowsOsSmartBasicsTitle: 'Windows OS-3 — Installing Operating Systems',
            osDetail: {
                intro:
                    'An operating system (OS) is the main software that starts the computer, shows the desktop, runs Word and Paint, and manages files. Installation means copying that OS onto the hard disk or SSD and configuring it so the machine can boot—turn on and load Windows, Linux, or macOS. Fresh computers may arrive without an OS; older PCs may need a reinstall after serious errors. Setup uses official media (USB drive or DVD) and a product key or school license. Students observe demonstrations and study diagrams; they do not install alone on lab networks without permission.',
                analogy:
                    'Installing an OS is like preparing a new classroom before the first day of school. The empty room is the blank hard drive. The OS is the timetable, desk layout, and rule chart that tells everyone where to sit and how lessons run. Windows might be one school’s standard layout; Linux another style with free open-source posters; macOS the Apple campus design. The installer (teacher or technician) follows a checklist—furniture in, names on doors, fire drill plan posted—before students enter.',
                keyPoints: [
                    {
                        title: 'Installation needs trusted adults',
                        body:
                            'School PCs, laptops, and servers are installed by IT staff or teachers following district rules. Never boot unknown USB sticks or click “Install” on shared machines without permission—wrong installs can erase class work.',
                    },
                    {
                        title: 'Windows installation (overview)',
                        body:
                            'Microsoft Windows setup asks for language, disk partition, account name, and privacy settings. Windows 10 and 11 use a wizard after booting from USB. Product activation confirms a legal license.',
                    },
                    {
                        title: 'Linux installation (overview)',
                        body:
                            'Linux is open-source; families like Ubuntu offer free downloads. Installers choose dual-boot (Windows + Linux) or Linux-only on spare PCs. Desktop looks different but still has files, browser, and apps.',
                    },
                    {
                        title: 'macOS installation (overview)',
                        body:
                            'Apple Mac computers use macOS. Recovery mode or a new Mac Setup Assistant guides language, Apple ID, and iCloud. Apple Silicon and Intel Macs follow similar screens with small differences.',
                    },
                    {
                        title: 'Compare the three',
                        body:
                            'All three provide desktop, files, settings, and updates. Windows dominates many school labs; Linux powers servers and coding kits; Macs appear in design and media rooms. Knowing all three builds career awareness.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under WINDOWS OS-3 to open Installation of Windows OS, Linux OS, and Mac OS.',
            subtopicThumbnails: {
                'windows-os-3-install-windows': WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.lessonThumbnail,
                'windows-os-3-install-linux': WINDOWS_OS3_INSTALL_LINUX_IMAGES.lessonThumbnail,
                'windows-os-3-install-mac': WINDOWS_OS3_INSTALL_MAC_IMAGES.lessonThumbnail,
            },
            windowsOsWhyLearn: [
                'You understand what technicians do when lab PCs are refreshed or repaired.',
                'Vocabulary like boot, partition, and setup wizard appears in textbooks and competitions.',
                'Comparing Windows, Linux, and Mac prepares you for diverse devices at home and work.',
                'Safety rules prevent accidental wipes of homework on shared storage.',
                'Concept links to Class 5 Parts of Computer-4—CPU, disk, and ports all matter during install.',
            ],
            windowsOsHowToStudy: [
                'Read this overview, then Windows → Linux → Mac installation lessons in order.',
                'Draw a three-column chart: Windows | Linux | Mac with one feature per row.',
                'Watch a teacher demo or approved video—pause and label each setup screen in notes.',
                'Never practise real installation on school PCs unless the lab sheet says so.',
                'Write five safety rules in your notebook before the class quiz.',
            ],
            subtopicPages: [
                {
                    topicId: 'windows-os-3-install-windows',
                    label: 'Installation of Windows OS',
                    emoji: '🪟',
                    description: 'What Windows install means, requirements, setup wizard steps, first boot, school rules.',
                },
                {
                    topicId: 'windows-os-3-install-linux',
                    label: 'Installation of Linux OS',
                    emoji: '🐧',
                    description: 'Linux basics, Ubuntu-style install, dual-boot idea, desktop after install.',
                },
                {
                    topicId: 'windows-os-3-install-mac',
                    label: 'Installation of Mac OS',
                    emoji: '🍎',
                    description: 'macOS setup assistant, Apple ID, Recovery mode overview, compare with Windows/Linux.',
                },
            ],
            sections: [
                section(
                    'Installation of Windows OS (preview)',
                    'Windows setup starts from bootable USB created with Microsoft’s Media Creation Tool (adult task). The PC boots, shows language and keyboard, then “Install now.” Setup copies files, restarts several times, and asks for region, account, and privacy choices. School images may skip some screens with pre-configured accounts.',
                    WINDOWS_OS3_HUB_IMAGES.windowsPreview
                ),
                section(
                    'Installation of Linux OS (preview)',
                    'Linux installers (e.g. Ubuntu) offer Try without installing on a live USB, then Install Ubuntu alongside Windows or erase disk (dangerous—adults only). Partition step allocates disk space. After install, updates download through Software Updater. Many science and coding clubs use Linux for free tools.',
                    WINDOWS_OS3_HUB_IMAGES.linuxPreview
                ),
                section(
                    'Installation of Mac OS (preview)',
                    'New Macs greet you with Setup Assistant—country, Wi‑Fi, Apple ID, FileVault encryption option. Reinstall uses macOS Recovery (hold power or Command+R on Intel). Time Machine can restore files after clean install. Mac labs often use managed school accounts instead of personal Apple IDs.',
                    WINDOWS_OS3_HUB_IMAGES.macPreview
                ),
                section(
                    'Safety and school policy',
                    'Rule 1: Only staff install OS on networked PCs.\n\nRule 2: Backup files before any reinstall.\n\nRule 3: Use licensed software only.\n\nRule 4: Report stray “Install Windows” USB drives to teacher.\n\nRule 5: Log in with your school account after approved setup.',
                    WINDOWS_OS3_HUB_IMAGES.safetyPreview
                ),
            ],
        },
    },
    subLesson(
        'windows-os-3-install-windows',
        'WINDOWS OS-3: INSTALL WINDOWS',
        'Installation of Windows OS',
        'This lesson explains how Microsoft Windows is installed on a PC at a level suitable for Class 5. You will learn what installation means, what hardware is required, the main setup wizard screens, and what happens on first boot—always with the rule that real installs are performed by trusted adults in school.',
        [
            section(
                'What does “install Windows” mean?',
                'Install means copying Windows system files onto the computer’s storage drive and configuring the boot loader so the PC starts into Windows instead of an empty disk or old broken system.\n\nFresh install — replaces everything on the drive (after backup).\n\nUpgrade install — moves from older Windows to newer while keeping some apps (teacher/planning decision).\n\nRepair install — fixes damaged Windows files when possible.\n\nSchool labs often use cloned images—one perfect PC copied to many machines—to save time.',
                WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.whatIsInstall
            ),
            section(
                'Requirements before installation',
                'Typical minimums (exact numbers change with version—check Microsoft docs with teacher):\n\n• Processor — 1 GHz or faster (64-bit for Windows 11).\n\n• RAM — 4 GB or more for smooth classroom use.\n\n• Storage — 64 GB free space or more.\n\n• Firmware — UEFI and Secure Boot often required on new PCs.\n\n• Internet — for updates and Microsoft account (optional on some school builds).\n\n• Boot USB — created from official Microsoft tool; never use random downloads from unknown sites.',
                WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.requirements,
                {
                    pointsHeading: 'Also needed',
                    points: [
                        'Valid license or school volume agreement.',
                        'Power cable connected—laptops on charger.',
                        'Backup of student files if reinstalling a used PC.',
                    ],
                }
            ),
            section(
                'Main setup wizard steps',
                'Step 1 — Boot from USB: Enter BIOS/UEFI (special key at startup—teacher shows) and choose USB drive.\n\nStep 2 — Language & region: Pick country, keyboard layout.\n\nStep 3 — Install now: Accept license terms (read summary with teacher).\n\nStep 4 — Partition disk: Where Windows lives; school PCs may use whole Disk 0.\n\nStep 5 — Copying files: PC restarts automatically—do not turn off power.\n\nStep 6 — Out-of-box experience (OOBE): Name PC, add account, privacy toggles, Wi‑Fi.\n\nStep 7 — Windows Update: Downloads security patches—may take time on first day.',
                WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.setupSteps
            ),
            section(
                'First boot and desktop',
                'After setup, you see the Windows desktop, taskbar, and Start menu—same ideas as Windows OS-1 and OS-2.\n\nCheck: Can you open File Explorer? Is network allowed? Are school apps pinned?\n\nActivation: Settings → System → Activation should show Windows is activated with organization’s license.\n\nCreate restore habit: know where Documents folder lives before saving homework.',
                WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.firstBoot
            ),
            section(
                'Classroom rules for students',
                'Students observe and take notes during demo installs—they do not partition disks alone.\n\nNever insert personal install USB into lab PC.\n\nIf you see “Installing Windows 0%” on a shared machine, tell teacher immediately.\n\nHomework: list four setup screens in order from memory after the demo.',
                WINDOWS_OS3_INSTALL_WINDOWS_IMAGES.schoolRules
            ),
        ]
    ),
    subLesson(
        'windows-os-3-install-linux',
        'WINDOWS OS-3: INSTALL LINUX',
        'Installation of Linux OS',
        'Linux is a family of free, open-source operating systems used on servers, Raspberry Pi kits, and some school coding laptops. This lesson introduces what Linux is, popular versions for beginners, typical install steps, and how the desktop compares to Windows—installation is always supervised by adults.',
        [
            section(
                'What is Linux?',
                'Linux is an operating system kernel plus tools and desktop environments. Unlike single-company Windows, many groups bundle Linux into distributions (distros) such as Ubuntu, Linux Mint, and Fedora.\n\nOpen-source means anyone can study and improve the code under license rules.\n\nLinux powers Android’s base, cloud servers, and supercomputers—learning the name early helps STEM careers.',
                WINDOWS_OS3_INSTALL_LINUX_IMAGES.whatIsLinux
            ),
            section(
                'Popular distros for learning',
                'Ubuntu — beginner-friendly, large community, purple/orange branding.\n\nLinux Mint — familiar menu for Windows users.\n\nRaspberry Pi OS — for Pi boards in robotics clubs.\n\nSchool choice depends on hardware and teacher training—follow lab standard only.\n\nLive USB “Try Ubuntu” lets you test without installing (session resets on reboot).',
                WINDOWS_OS3_INSTALL_LINUX_IMAGES.distros
            ),
            section(
                'Typical Linux install steps',
                'Step 1 — Create boot USB with tool like Rufus (adult) from official .iso file.\n\nStep 2 — Boot PC from USB → Try or Install.\n\nStep 3 — Keyboard layout and updates checkbox.\n\nStep 4 — Installation type: Erase disk (dangerous) OR Install alongside Windows (dual-boot—advanced).\n\nStep 5 — Time zone and username/password.\n\nStep 6 — Copy files and install bootloader (GRUB menu may show Windows + Linux at startup).\n\nStep 7 — Reboot, remove USB, log into Linux desktop.',
                WINDOWS_OS3_INSTALL_LINUX_IMAGES.installSteps
            ),
            section(
                'Linux desktop after install',
                'You still get panels, app menu, file manager, and web browser—icons differ from Windows.\n\nSoftware Store or apt (advanced) installs apps with permission.\n\nTerminal exists for power users—Class 5 may only preview it.\n\nUpdates: regular patch Tuesday equivalent through Update Manager.\n\nSaving homework: know path in Home folder, same good naming habits as Windows.',
                WINDOWS_OS3_INSTALL_LINUX_IMAGES.desktopPreview
            ),
            section(
                'Linux vs Windows (Class 5 summary)',
                'Windows — wide school app support (Office, Paint), single vendor, paid license in many cases.\n\nLinux — free, strong for coding/Python, different app names (LibreOffice vs Microsoft Office).\n\nBoth need respect for login, files, and shutdown.\n\nDraw a Venn diagram: files, browser, games (varies), cost, who installs.',
                WINDOWS_OS3_INSTALL_LINUX_IMAGES.compareWindows
            ),
        ]
    ),
    subLesson(
        'windows-os-3-install-mac',
        'WINDOWS OS-3: INSTALL MAC OS',
        'Installation of Mac OS',
        'Apple computers use macOS (often called Mac OS in textbooks). This lesson covers what macOS is, how new Macs are set up with Setup Assistant, how Recovery reinstall works at a high level, and how Mac compares to Windows and Linux—students do not reinstall macOS alone on school Macs.',
        [
            section(
                'What is macOS (Mac OS)?',
                'macOS is Apple’s operating system for MacBook, iMac, and Mac mini computers. It provides the menu bar at top, Dock at bottom, Finder for files, and tight links to Apple services.\n\nOnly Apple hardware officially runs macOS—unlike Windows/Linux on many brands.\n\nVersions have names like Sonoma, Ventura—schools upgrade on a schedule like Windows.',
                WINDOWS_OS3_INSTALL_MAC_IMAGES.whatIsMacOs
            ),
            section(
                'Apple Silicon vs Intel Macs',
                'Newer Macs use Apple Silicon chips (M-series); older use Intel processors.\n\nInstall media and Recovery differ slightly—IT chooses correct procedure.\n\nFor Class 5: both show similar Setup Assistant screens to the user.\n\nPerformance and battery life improved on Apple Silicon—mention in science of computers discussions.',
                WINDOWS_OS3_INSTALL_MAC_IMAGES.appleSilicon
            ),
            section(
                'Setup Assistant steps (new Mac)',
                'Step 1 — Language & country.\n\nStep 2 — Accessibility options (optional).\n\nStep 3 — Wi‑Fi network (school credential with teacher).\n\nStep 4 — Migration Assistant — move data from old Mac (optional).\n\nStep 5 — Apple ID — school may use managed IDs or skip personal login.\n\nStep 6 — Create computer account username and password.\n\nStep 7 — Express or custom settings — privacy, location, analytics (school policy decides).\n\nStep 8 — Screen Time and Siri — may be disabled on exam machines.',
                WINDOWS_OS3_INSTALL_MAC_IMAGES.setupAssistant
            ),
            section(
                'Recovery and reinstall (overview)',
                'If macOS is damaged, Recovery reinstalls the OS without shopping for USB (downloads from Apple).\n\nIntel: restart holding Command+R.\n\nApple Silicon: hold power until startup options → Options gear.\n\nDisk Utility can erase disk before clean install—only staff perform erase.\n\nTime Machine backups restore documents after reinstall when available.',
                WINDOWS_OS3_INSTALL_MAC_IMAGES.icloudBasics,
                {
                    pointsHeading: 'iCloud (awareness)',
                    points: [
                        'Stores photos and documents in Apple cloud when enabled.',
                        'School Macs may block personal iCloud for privacy.',
                        'Always save class work to approved folder, not only cloud.',
                    ],
                }
            ),
            section(
                'Compare Windows, Linux, and Mac',
                'All three: user accounts, desktop, files, browser, updates.\n\nWindows — most common in PC labs; .exe programs.\n\nLinux — free, flexible, common in servers and Pi.\n\nmacOS — Apple hardware; strong creative apps; Gatekeeper checks app safety.\n\nHomework: complete a table with three rows (install media, who makes it, one advantage) for each OS.',
                WINDOWS_OS3_INSTALL_MAC_IMAGES.compareAll
            ),
        ]
    ),
];
