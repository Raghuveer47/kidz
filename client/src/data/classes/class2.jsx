import React from 'react';
import { MonitorPlay, Image, Power, Keyboard, ClipboardCheck, FileText } from 'lucide-react';

const desktopComputerImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133397/kidscodingai/assets/images/class2/computerimages-2/desktop-computer.jpg';
const laptopComputerImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133397/kidscodingai/assets/images/class2/computerimages-2/laptop-computer.jpg';
const palmtopComputerImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133397/kidscodingai/assets/images/class2/computerimages-2/palmtop-computer.jpg';
const serverImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133398/kidscodingai/assets/images/class2/computerimages-2/server.jpg';
const tabletImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133398/kidscodingai/assets/images/class2/computerimages-2/tablet.jpg';
const usesSchoolImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133414/kidscodingai/assets/images/class2/uses-of-computer/school.png';
const usesHomeImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133411/kidscodingai/assets/images/class2/uses-of-computer/home.png';
const usesHospitalImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133417/kidscodingai/assets/images/class2/uses-of-computer/hospital.png';
const usesBanksImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133411/kidscodingai/assets/images/class2/uses-of-computer/banks.png';
const usesShopsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133414/kidscodingai/assets/images/class2/uses-of-computer/shops.png';
const usesOfficeImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133413/kidscodingai/assets/images/class2/uses-of-computer/office.png';
const usesEntertainmentImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133412/kidscodingai/assets/images/class2/uses-of-computer/entertainment.png';
const usesTravelImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133415/kidscodingai/assets/images/class2/uses-of-computer/travel.png';
const windowsStartImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133409/kidscodingai/assets/images/class2/start-and-shut-down/windows-start.png';
const windowsShutDownImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133409/kidscodingai/assets/images/class2/start-and-shut-down/windows-shut-down.png';
const macStartImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133409/kidscodingai/assets/images/class2/start-and-shut-down/mac-start.png';
const macShutDownImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133408/kidscodingai/assets/images/class2/start-and-shut-down/mac-shut-down.png';
const linuxStartImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133407/kidscodingai/assets/images/class2/start-and-shut-down/linux-start.png';
const linuxShutDownImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133407/kidscodingai/assets/images/class2/start-and-shut-down/linux-shut-down.png';
import { PARTS_OF_COMPUTER_INPUT_GALLERIES } from './class2PartsInputImages';

const COMPUTER_PARTS_1_CLASSIFICATION_ROWS = [
    { category: 'Input Devices', device: 'Keyboard', function: 'Used to enter text, numbers, and commands.' },
    { category: 'Input Devices', device: 'Mouse', function: 'Used to point, click, and navigate the graphical user interface.' },
    { category: 'Input Devices', device: 'Touchpad', function: 'A built-in pointing device on laptops, serving the same function as a mouse.' },
    { category: 'Input Devices', device: 'Microphone', function: 'Used to input audio for recording, communication, or voice commands.' },
    { category: 'Input Devices', device: 'Webcam', function: 'Used to input video for video conferencing, recording, or streaming.' },
    { category: 'Input Devices', device: 'Scanner', function: 'Used to convert physical documents and images into digital format.' },
    { category: 'Input Devices', device: 'Joystick / Gamepad', function: 'Used for controlling actions in video games.' },
    { category: 'Input Devices', device: 'Stylus / Pen', function: 'Used for precise input on touchscreens, such as drawing or note-taking.' },
    { category: 'Input Devices', device: 'Barcode Reader', function: 'Used to read and decode barcodes, often in retail or inventory.' },
    { category: 'Output Devices', device: 'Monitor', function: 'Displays visual output, including text, images, and video.' },
    { category: 'Output Devices', device: 'Printer', function: 'Produces a physical, hard copy of digital documents and images.' },
    { category: 'Output Devices', device: 'Speakers', function: 'Outputs audio, such as music, system sounds, and voice.' },
    { category: 'Output Devices', device: 'Headphones / Headset', function: 'Outputs audio privately; a headset also includes a microphone for input.' },
    { category: 'Output Devices', device: 'Projector', function: 'Projects visual output from the computer onto a large screen or wall.' },
    { category: 'Storage Devices', device: 'Hard Disk Drive (HDD)', function: 'Stores data magnetically on spinning platters; used for large-capacity, long-term storage.' },
    { category: 'Storage Devices', device: 'Solid State Drive (SSD)', function: 'Stores data on flash memory; faster and more durable than HDDs.' },
    { category: 'Storage Devices', device: 'USB Flash Drive', function: 'A portable, removable storage device that connects via a USB port.' },
    { category: 'Storage Devices', device: 'Memory Card (e.g., SD, microSD)', function: 'Used for portable storage in cameras, phones, and other portable devices.' },
    { category: 'Storage Devices', device: 'External Hard Drive', function: 'A portable HDD or SSD that connects externally for backup or additional storage.' },
    { category: 'Processing & Internal Components', device: 'Central Processing Unit (CPU)', function: 'The "brain" of the computer; performs calculations and executes instructions.' },
    { category: 'Processing & Internal Components', device: 'Graphics Processing Unit (GPU)', function: 'Specialized processor for rendering images, video, and accelerating graphics.' },
    { category: 'Processing & Internal Components', device: 'Motherboard', function: 'The main circuit board that connects all components of the computer.' },
    { category: 'Processing & Internal Components', device: 'Random Access Memory (RAM)', function: 'Temporary, high-speed memory that stores data for active processes.' },
    { category: 'Processing & Internal Components', device: 'Power Supply Unit (PSU)', function: "Converts electrical power from an outlet into usable power for the computer's components." },
    { category: 'Networking Devices', device: 'Network Interface Card (NIC)', function: 'A component (wired or wireless) that allows a computer to connect to a network.' },
    { category: 'Networking Devices', device: 'Router', function: 'Directs data traffic between your local network and the internet.' },
    { category: 'Networking Devices', device: 'Modem', function: 'Connects your network to your Internet Service Provider (ISP).' },
    { category: 'Networking Devices', device: 'Switch', function: 'Connects multiple devices on the same local network (e.g., computers, printers).' },
    { category: 'Combination / All-in-One', device: 'Touchscreen Monitor', function: 'Functions as both an output device (display) and an input device (touch).' },
    { category: 'Combination / All-in-One', device: 'All-in-One (AIO) Computer', function: 'A desktop computer that houses the processing components within the same chassis as the monitor.' },
];

export const class2Data = {
    className: "Class 2",
    topics: [
        {
            id: 'computer-images-2',
            title: 'COMPUTER IMAGES-2',
            category: 'computer_basics',
            icon: <Image className="w-5 h-5 text-purple-500" />,
            content: {
                heading: "Pictures of Different Computers",
                text: "Computers come in many shapes and sizes. These photos show common kinds—from big desks to gadgets you can hold in one hand!",
                sections: [
                    { subtitle: "Desktop Computer", image: desktopComputerImg, body: "A desktop usually has a separate screen and a box (CPU) on the desk. It stays in one place and is great for schoolwork and games at home." },
                    { subtitle: "Laptop Computer", image: laptopComputerImg, body: "A laptop folds like a thin book: screen, keyboard, and touchpad together. You can carry it and open it anywhere there is a table." },
                    { subtitle: "Palmtop Computer", image: palmtopComputerImg, body: "A palmtop is a very small computer that fits in your palm—like a tiny organizer. Today many jobs are done by phones, but palmtops taught us pocket-sized screens and typing." },
                    { subtitle: "Server", image: serverImg, body: "Servers are powerful computers that store websites, videos, and apps for many people at once. They often live in cool rooms and work quietly behind the scenes." },
                    { subtitle: "Tablet", image: tabletImg, body: "A tablet is a flat slate with a big touch screen. You tap and swipe with your fingers—perfect for reading, drawing, and learning apps." }
                ]
            }
        },
        {
            id: 'computer-parts-1',
            title: 'PARTS OF COMPUTER-1',
            category: 'computer_basics',
            icon: <Keyboard className="w-5 h-5 text-blue-500" />,
            children: [
                { label: 'Keyboard', slug: 'keyboard' },
                { label: 'Mouse', slug: 'mouse' },
                { label: 'Touchpad', slug: 'touchpad' },
                { label: 'Microphone', slug: 'microphone' },
                { label: 'Webcam', slug: 'webcam' },
                { label: 'Scanner', slug: 'scanner' },
                { label: 'Joystick / Gamepad', slug: 'joystick-gamepad' },
                { label: 'Stylus / Pen', slug: 'stylus-pen' },
                { label: 'Barcode Reader', slug: 'barcode-reader' },
            ],
            content: {
                heading: "Parts of the Computer",
                text: "Let’s see what a computer is made of—from hardware you can touch, to input and output devices, to storage and the parts inside the box. Use the arrow next to Parts of Computer-1 to open the list; each input device opens its own lesson page.",
                hardwareTitle: "What is hardware?",
                hardwareBody:
                    "Hardware is everything you can touch on a computer: the screen, keyboard, mouse, speakers, printer, and the main box (CPU) with circuits inside. Software is the invisible set of instructions (programs and apps) that tells the hardware what to do. If you can bump it with your elbow, it’s hardware!",
                classificationRows: COMPUTER_PARTS_1_CLASSIFICATION_ROWS,
                whyInputDevices: [
                    "We need input devices to tell the computer what we want—words, clicks, pictures, and sounds—because it cannot read our minds.",
                    "They let us start tasks like typing homework, drawing, or joining a video call.",
                ],
                howInputDevicesWork: [
                    "They turn what you do in the real world (press a key, move a mouse, speak into a mic) into electrical signals the computer can understand.",
                    "Those signals travel through cables or wireless links to the processor, which then decides what to show on the screen or what to save in memory.",
                ],
                inputDeviceGalleries: PARTS_OF_COMPUTER_INPUT_GALLERIES,
                sections: [],
            },
        },
        {
            id: 'uses-of-computer',
            title: 'USES OF COMPUTER',
            category: 'computer_basics',
            icon: <MonitorPlay className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: "Where Do We Use Computers?",
                text: "Computers are everywhere around us! At home, school, hospitals, shops, offices, and transport systems, they help people work faster and make fewer mistakes. Let us explore real places where computers are used every day.",
                sections: [
                    {
                        subtitle: "At School",
                        image: usesSchoolImg,
                        body: "Teachers use computers to prepare lessons, show videos, and explain topics with pictures and presentations. Students use computers to type homework, practice quizzes, draw charts, and learn coding. School offices use computers for attendance and report cards."
                    },
                    {
                        subtitle: "At Home",
                        image: usesHomeImg,
                        body: "At home, computers are used for online classes, paying bills, shopping, and video calls with family. Children use them to read stories, do projects, and learn new skills. Parents use them for office work, forms, and planning daily tasks."
                    },
                    {
                        subtitle: "At Hospitals",
                        image: usesHospitalImg,
                        body: "Doctors use computers to store patient records, check reports, and view X-rays or scan images. Hospitals use computers to schedule appointments, print prescriptions, and track medicines. This helps patients get correct treatment quickly."
                    },
                    {
                        subtitle: "At Banks and ATMs",
                        image: usesBanksImg,
                        body: "Banks use computers to keep account details safe, update balances, and send alerts for every transaction. ATMs are computer-based machines that help people withdraw cash and check balances. Computers make banking fast and accurate."
                    },
                    {
                        subtitle: "At Shops and Supermarkets",
                        image: usesShopsImg,
                        body: "Shops use computers for billing, barcode scanning, and stock records. When items are scanned, the computer shows prices and prints bills. Shop owners use computers to track which items are low and what to order next."
                    },
                    {
                        subtitle: "In Offices",
                        image: usesOfficeImg,
                        body: "In offices, people use computers for writing letters, making reports, sending emails, and joining meetings. Data is saved in files so teams can work together. Computers help finish work faster and keep records organized."
                    },
                    {
                        subtitle: "For Entertainment and Creativity",
                        image: usesEntertainmentImg,
                        body: "We use computers to watch cartoons, listen to songs, play games, edit photos, and make drawings. Many children also use creative apps to build stories, animations, and simple games."
                    },
                    {
                        subtitle: "In Travel and Transport",
                        image: usesTravelImg,
                        body: "Computers are used to book train and flight tickets, display timings, and manage traffic signals. They help drivers, pilots, and station staff plan routes and keep travel smoother and safer."
                    }
                ]
            }
        },
        {
            id: 'start-shutdown',
            title: 'START AND SHUTDOWN OPTIONS',
            category: 'computer_basics',
            icon: <Power className="w-5 h-5 text-red-500" />,
            content: {
                heading: "Start and Shutdown in Windows, Mac, and Linux",
                text: "Different computers look a little different, but the safe idea is the same: start properly, save your work, and shut down from the menu (not by pulling the plug). Follow these easy steps for each type.",
                sections: [
                    {
                        subtitle: "Windows: Start (Step by Step)",
                        image: windowsStartImg,
                        body: "1) Turn on the wall/main power (for desktop).\n2) Press the computer's Power button.\n3) Wait for the Windows sign-in screen.\n4) Type your password/PIN (or ask your teacher/parent).\n5) Desktop appears — now you can open apps."
                    },
                    {
                        subtitle: "Windows: Shutdown (Step by Step)",
                        image: windowsShutDownImg,
                        body: "1) Save your files first.\n2) Click the Start button.\n3) Click the Power icon.\n4) Choose Shut down.\n5) Wait until the screen turns off fully."
                    },
                    {
                        subtitle: "Mac: Start (Step by Step)",
                        image: macStartImg,
                        body: "1) Open the MacBook lid (or press Power button on iMac/Mac mini).\n2) Wait for the Apple logo.\n3) Sign in with password or Touch ID.\n4) Desktop appears (Finder) and the Mac is ready."
                    },
                    {
                        subtitle: "Mac: Shutdown (Step by Step)",
                        image: macShutDownImg,
                        body: "1) Save your files first.\n2) Click the Apple menu (top-left).\n3) Click Shut Down...\n4) Confirm if asked.\n5) Wait for the screen to turn black."
                    },
                    {
                        subtitle: "Linux: Start (Step by Step)",
                        image: linuxStartImg,
                        body: "1) Turn on power and press the computer's Power button.\n2) Wait for the Linux login screen.\n3) Enter username and password.\n4) Desktop loads (icons/panel appear).\n5) You are ready to use apps."
                    },
                    {
                        subtitle: "Linux: Shutdown (Step by Step)",
                        image: linuxShutDownImg,
                        body: "1) Save your files first.\n2) Open the system/menu button.\n3) Choose Power Off / Shut Down.\n4) Confirm if asked.\n5) Wait until computer turns off fully."
                    }
                ]
            }
        },
        {
            id: 'class-quiz',
            title: 'QUIZ',
            category: 'assessment',
            icon: <ClipboardCheck className="w-5 h-5 text-purple-600" />,
            content: {
                heading: "Class 2 Quiz (5 Questions)",
                text: "Pick the answer that feels right — like a mini game!",
                quizQuestions: [
                    {
                        question: "Which computer can you fold, carry in a bag, and open like a little book?",
                        options: ["Laptop", "A tower under the desk only", "A rope", "Crayons"],
                        correctOptionIndex: 0,
                    },
                    {
                        question: "You talk into the microphone. Your voice travels into the machine. So the mic is:",
                        options: [
                            "Something that sends sound into the computer",
                            "Something that only draws on paper",
                            "The box that keeps snacks",
                            "Only the paint on the wall",
                        ],
                        correctOptionIndex: 0,
                    },
                    {
                        question: "Where do helpers use computers when someone is sick?",
                        options: ["Hospital", "Playground slide", "Ice-cream truck", "Sock drawer"],
                        correctOptionIndex: 0,
                    },
                    {
                        question: "You want to switch the computer off. What nice thing do you do first?",
                        options: ["Save your work", "Rip out the cord", "Turn off only the screen", "Hide under the desk"],
                        correctOptionIndex: 0,
                    },
                    {
                        question: "The screen that shows your cartoons and homework is called a monitor. It mainly:",
                        options: [
                            "Shows pictures and letters to your eyes",
                            "Types letters for you",
                            "Keeps your socks",
                            "Is a kind of flower",
                        ],
                        correctOptionIndex: 0,
                    },
                ],
                sections: [],
            }
        },
        {
            id: 'class-summary',
            title: 'SUMMARY',
            category: 'assessment',
            icon: <FileText className="w-5 h-5 text-purple-700" />,
            content: {
                heading: "Class 2 Topic Summary",
                text: "This happy table lines up each Class 2 topic with the cool things you should be able to say or do when you finish it.",
                summaryRows: [
                    {
                        topic: "COMPUTER IMAGES-2",
                        outcome: "Recognize different computer forms (desktop, laptop, palmtop, server, tablet) and their basic uses.",
                    },
                    {
                        topic: "PARTS OF COMPUTER-1",
                        outcome: "Understand major computer parts with focus on input devices and how they send data into the computer.",
                    },
                    {
                        topic: "USES OF COMPUTER",
                        outcome: "Explain where computers are used in daily life such as school, home, hospital, banking, shops, and travel.",
                    },
                    {
                        topic: "START AND SHUTDOWN OPTIONS",
                        outcome: "Follow safe step-by-step startup and shutdown methods on Windows, Mac, and Linux.",
                    },
                    {
                        topic: "QUIZ",
                        outcome: "Self-assess understanding of Class 2 concepts and prepare for advanced practice.",
                    },
                ],
                sections: [],
            },
        }
    ]
};
