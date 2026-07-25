import React from 'react';
import { HardDrive, MonitorStop, Smile, Keyboard } from 'lucide-react';
const externalSsdImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133480/kidscodingai/assets/images/class4/parts-of-computer-3/external-ssd.jpg';
const flashDriveImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133481/kidscodingai/assets/images/class4/parts-of-computer-3/flash-drive.jpg';
const memoryCardsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133481/kidscodingai/assets/images/class4/parts-of-computer-3/memory-cards.jpg';
const openFlashDriveImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133481/kidscodingai/assets/images/class4/parts-of-computer-3/open-flash-drive.jpg';
const openHddImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133482/kidscodingai/assets/images/class4/parts-of-computer-3/open-hdd.jpg';
const ramMemoryImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133480/kidscodingai/assets/images/class4/parts-of-computer-3/RAM-memory.jpg';
const romMemoryImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133480/kidscodingai/assets/images/class4/parts-of-computer-3/ROM-memory.jpg';
const askBeforeClickingImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133453/kidscodingai/assets/images/class4/ethics/ask-before-clicking.png';
const dontCopyImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133452/kidscodingai/assets/images/class4/ethics/dont-copy.png';
const followTheRulesImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133453/kidscodingai/assets/images/class4/ethics/follow-the-rules.png';
const useKindWordsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133454/kidscodingai/assets/images/class4/ethics/use-kind-words.png';
import { windowsOs2Topics } from './class4WindowsOsTwoTopics';
import { msPaintTwoTopics } from './class4MsPaintTwoTopics';
import { msWordOneTopics } from './class4MsWordOneTopics';
import { notepadTopics } from './class4NotepadTopics';
import { whatIsAiTopics } from './class4WhatIsAiTopics';

export const class4Data = {
    className: "Class 4",
    topics: [
        {
            id: 'parts-of-computer-3',
            title: 'PARTS OF COMPUTER-3',
            category: 'computer_basics',
            icon: <HardDrive className="w-5 h-5 text-blue-500" />,
            childRouteBase: '/class4/parts-of-computer-3/',
            children: [
                { label: 'RAM', slug: 'ram' },
                { label: 'ROM', slug: 'rom' },
                { label: 'Hard Disk Drive', slug: 'hard-disk-drive' },
                { label: 'Open Flash Drive', slug: 'open-flash-drive' },
                { label: 'Flash Drive', slug: 'flash-drive' },
                { label: 'Memory Cards', slug: 'memory-cards' },
                { label: 'External SSD', slug: 'external-ssd' },
            ],
            content: {
                heading: "Parts of Computer-3 (Memory and Storage Devices)",
                text: "In this class, we learn how computers remember things using RAM, ROM, hard drives, memory cards, and flash drives.",
                sections: [
                    {
                        slug: 'ram',
                        subtitle: "RAM (Random Access Memory)",
                        image: ramMemoryImg,
                        body: "RAM is the computer's short-term memory, like your study table while doing homework. When you open apps, games, or a browser tab, the computer keeps active information in RAM so it can work quickly.\n\nIf your computer has more RAM, it can handle more tasks at the same time without slowing down. But RAM is temporary memory: when power goes off, RAM becomes empty. So always save your work in a file before shutting down."
                    },
                    {
                        slug: 'rom',
                        subtitle: "ROM (Read Only Memory)",
                        image: romMemoryImg,
                        body: "ROM stores very important startup instructions that help the computer wake up correctly. You can think of ROM as the computer's fixed instruction book that is already inside the machine.\n\nUnlike RAM, ROM keeps data even when the computer is turned off. This is why your computer still knows how to start every day. Children usually do not change ROM data, because it is special system information needed for safe booting."
                    },
                    {
                        slug: 'hard-disk-drive',
                        subtitle: "Hard Disk Drive (HDD)",
                        image: openHddImg,
                        body: "An HDD is long-term storage where your computer keeps files, apps, photos, and videos for a long time. Imagine it as a giant school cupboard where notebooks stay safely even after school ends.\n\nHDD can store lots of data and keeps everything even after shutdown. It is great for saving homework, projects, and family pictures. Good habit: keep folders with clear names so you can find files quickly later."
                    },
                    {
                        slug: 'open-flash-drive',
                        subtitle: "Open Flash Drive (Inside View)",
                        image: openFlashDriveImg,
                        body: "This picture shows what is inside a flash drive. Inside the plastic body, there are tiny electronic circuits that store your data safely in memory chips.\n\nEven though a flash drive looks small, it can store many documents and photos. Learning this inside view helps kids understand that computer devices have tiny parts working together, just like organs inside the human body."
                    },
                    {
                        slug: 'flash-drive',
                        subtitle: "Flash Drive (Pen Drive)",
                        image: flashDriveImg,
                        body: "A flash drive (or pen drive) is a portable storage device that you can carry in your pocket. It is useful for moving files between school and home computers.\n\nYou can copy notes, presentations, and drawings to a flash drive and open them on another system. Always eject it safely before removing, so files do not get damaged. Also, never plug unknown flash drives into your computer without teacher or parent permission."
                    },
                    {
                        slug: 'memory-cards',
                        subtitle: "Memory Cards",
                        image: memoryCardsImg,
                        body: "Memory cards are very small storage chips used in cameras, phones, and tablets. They save photos, videos, songs, and app files in a compact form.\n\nBecause they are tiny, they are easy to carry but also easy to lose. Keep them in a safe case and avoid touching the metal pins. Memory cards help us understand that storage devices can come in many sizes, from tiny chips to large hard disks."
                    },
                    {
                        slug: 'external-ssd',
                        subtitle: "External SSD",
                        image: externalSsdImg,
                        body: "An external SSD is a fast storage device that connects from outside the computer using a cable. SSD means Solid State Drive, and it can copy files much faster than many older storage devices.\n\nKids can use external SSDs to keep backups of important projects, videos, or coding files. A backup means keeping an extra copy in case the main computer has a problem. This is a smart habit for safe digital learning."
                    }
                ]
            }
        },
        {
            id: 'ethics',
            title: 'ETHICS',
            category: 'computer_basics',
            icon: <Smile className="w-5 h-5 text-emerald-500" />,
            content: {
                heading: "Being a Good Digital Citizen",
                text: "Digital ethics means doing the right thing when we use computers, mobile devices, and the internet. A good digital citizen is kind, honest, careful, and responsible.\n\nIn this chapter, we will learn four core ethics habits that every student should practice in class, at home, and online: respectful communication, original work, safe clicking, and rule-following.",
                sections: [
                    {
                        subtitle: "Use Kind Words",
                        image: useKindWordsImg,
                        body: "When we type messages, comments, or chat replies, our words still affect real people. Even if we cannot see their face, they can feel happy, sad, or hurt.\n\nBefore sending a message, do a quick 3-check rule:\n1) Is it respectful?\n2) Is it helpful?\n3) Would I say this politely in person?\n\nIf the answer is no, rewrite it with kinder words. Good digital citizens never tease, insult, or bully online. They encourage classmates, appreciate effort, and solve misunderstandings calmly."
                    },
                    {
                        subtitle: "Don't Copy Work",
                        image: dontCopyImg,
                        body: "Using the internet for learning is good, but copying someone else's homework, project, drawing, or paragraph and claiming it as yours is wrong. This is called plagiarism.\n\nSmart students learn from examples, then create their own version. You can:\n- read and understand an idea,\n- write it in your own words,\n- add your own examples,\n- and mention the source if your teacher asks.\n\nBeing honest in digital work builds confidence, creativity, and trust."
                    },
                    {
                        subtitle: "Ask Before Clicking",
                        image: askBeforeClickingImg,
                        body: "Every link is not safe. Some pop-ups are designed to trick users with lines like 'You won a free prize' or 'Click fast to fix your PC!'.\n\nIf anything looks strange, stop immediately and ask a parent, teacher, or lab instructor before clicking. Never download unknown files or apps without permission.\n\nOne careful pause can prevent:\n- viruses,\n- account hacking,\n- fake websites,\n- and loss of important files."
                    },
                    {
                        subtitle: "Follow the Rules",
                        image: followTheRulesImg,
                        body: "Computer labs and learning websites have rules to protect students and devices. Rules are not punishment - they are safety instructions.\n\nExamples of good rule-following:\n- use only your own login,\n- keep passwords private,\n- use class time for class work,\n- do not change system settings without permission,\n- log out after use.\n\nWhen everyone follows the same rules, labs stay clean, devices stay safe, and all students get a fair chance to learn."
                    }
                ]
            }
        },
        {
            id: 'health-tips',
            title: 'HEALTH TIPS',
            category: 'computer_basics',
            icon: <MonitorStop className="w-5 h-5 text-amber-500" />,
            content: {
                heading: "Keeping Your Body Happy",
                text: "Using the computer is fun, but too much screen time is hard on our bodies. Let's learn to stay healthy!",
                sections: [
                    { subtitle: "The 20-20-20 Rule", image: "https://loremflickr.com/600/400/eyes,clock", body: "Every 20 minutes, look at something 20 feet away for 20 seconds. This gives your tired eyes a break!" },
                    { subtitle: "Stretch Your Body", image: "https://loremflickr.com/600/400/kids,stretching", body: "Sitting still makes muscles stiff. Stand up and touch your toes every half hour." },
                    { subtitle: "Screen Brightness", image: "https://loremflickr.com/600/400/brightness,screen", body: "The screen should not be brighter than the room you are sitting in. If it hurts your eyes, ask an adult to turn down the brightness." },
                    { subtitle: "Limit Screen Time", image: "https://loremflickr.com/600/400/playing,outside,kids", body: "Don't spend all day inside. Your body needs to run and play outside in the sunshine, too!" }
                ]
            }
        },
        ...windowsOs2Topics,
        {
            id: 'typing-2',
            title: 'TYPING-2',
            category: 'computer_basics',
            icon: <Keyboard className="w-5 h-5 text-gray-700" />,
            content: {
                heading: "Leveling Up Your Typing Speed",
                text: "Now that we know the Home Row, it's time to learn the advanced keys to type like a pro!",
                sections: [
                    { subtitle: "The Shift Key", image: "https://loremflickr.com/600/400/shift,key,keyboard", body: "Hold down the Shift key with your pinky finger to make a letter CAPITALIZED, or to type the symbols above the numbers." },
                    { subtitle: "Caps Lock", image: "https://loremflickr.com/600/400/caps,lock", body: "If you press Caps Lock, EVERY letter you type will be huge! Press it again to turn it off." },
                    { subtitle: "Backspace and Delete", image: "https://loremflickr.com/600/400/backspace,key", body: "Uh oh, a mistake! Press Backspace to erase letters Behind your cursor. Press Delete to erase letters in Front of it." },
                    { subtitle: "Practice Makes Perfect", image: "https://loremflickr.com/600/400/typing,practice", body: "The only way to type really fast without looking at the keyboard is to practice a little bit every day." }
                ]
            }
        },
        ...notepadTopics,
        ...msPaintTwoTopics,
        ...msWordOneTopics,
        ...whatIsAiTopics,
    ]
};
