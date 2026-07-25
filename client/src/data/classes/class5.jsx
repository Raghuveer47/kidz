import React from 'react';
import { FolderOpen, Cpu } from 'lucide-react';
import { msWordTwoTopics } from './class5MsWordTwoTopics';
import { msPaintThreeTopics } from './class5MsPaintThreeTopics';
import { windowsOsThreeTopics } from './class5WindowsOsThreeTopics';
import { typingSkillsThreeTopics } from './class5TypingSkillsThreeTopics';
import { aiTwoTopics } from './class5AiTwoTopics';
import { class5SummaryQuizTopics } from './class5SummaryQuizTopics';
const cabinetImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133502/kidscodingai/assets/images/class5/parts-of-computer-4/cabinet.jpg';
const cpuImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133504/kidscodingai/assets/images/class5/parts-of-computer-4/cpu.jpg';
const gpuImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133504/kidscodingai/assets/images/class5/parts-of-computer-4/gpu.jpg';
const laptopPortsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133504/kidscodingai/assets/images/class5/parts-of-computer-4/laptop-ports.jpg';
const motherBoardImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133505/kidscodingai/assets/images/class5/parts-of-computer-4/mother-board.jpg';
const powerSupplyImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133505/kidscodingai/assets/images/class5/parts-of-computer-4/power-supply.jpg';

export const class5Data = {
    className: "Class 5",
    topics: [
        {
            id: 'parts-of-computer-4',
            title: 'PARTS OF COMPUTER-4',
            category: 'computer_basics',
            icon: <Cpu className="w-5 h-5 text-blue-500" />,
            childRouteBase: '/class5/parts-of-computer-4/',
            children: [
                { label: 'Computer Cabinet', slug: 'computer-cabinet' },
                { label: 'CPU', slug: 'cpu' },
                { label: 'GPU', slug: 'gpu' },
                { label: 'Motherboard', slug: 'motherboard' },
                { label: 'Power Supply', slug: 'power-supply' },
                { label: 'Laptop Ports', slug: 'laptop-ports' },
            ],
            content: {
                heading: "Parts of Computer-4 (Core Hardware Components)",
                text: "This topic introduces important internal parts like CPU, motherboard, GPU, power supply, and ports used in real computers.",
                sections: [
                    {
                        slug: 'computer-cabinet',
                        subtitle: "Computer Cabinet",
                        image: cabinetImg,
                        body: "The computer cabinet is the outer box that holds and protects important internal parts like the motherboard, CPU, and power supply. It keeps dust away and helps parts stay safe.\n\nYou can think of it like a school bag that carries books safely. Many cabinets also have fans and air vents so heat can go out. Good habit: never open the cabinet without an adult, because inside parts are delicate and can get damaged."
                    },
                    {
                        slug: 'cpu',
                        subtitle: "CPU (Central Processing Unit)",
                        image: cpuImg,
                        body: "CPU is called the brain of the computer because it follows instructions and controls almost everything. When you click, type, play, or open an app, the CPU helps process those commands.\n\nA faster CPU can complete tasks quickly, just like a student who solves problems fast. But even a strong CPU needs help from RAM, storage, and cooling systems. This teaches us that computers are team systems, not one-part machines."
                    },
                    {
                        slug: 'gpu',
                        subtitle: "GPU (Graphics Processing Unit)",
                        image: gpuImg,
                        body: "GPU is a special processor for graphics. It helps the computer draw pictures, videos, animations, and games smoothly on screen.\n\nWhen you play games or watch high-quality videos, GPU does heavy visual work so the CPU can do other tasks. In simple words: CPU is general brain power, and GPU is drawing power. Both are important for modern computers."
                    },
                    {
                        slug: 'motherboard',
                        subtitle: "Motherboard",
                        image: motherBoardImg,
                        body: "The motherboard is the main circuit board that connects all internal computer parts. CPU, RAM, storage, and many other components are attached to it.\n\nYou can imagine it like roads in a city. Data travels through these electronic pathways so parts can talk to each other. If motherboard connections are correct, the computer works smoothly. That is why it is one of the most important parts inside the cabinet."
                    },
                    {
                        slug: 'power-supply',
                        subtitle: "Power Supply Unit (PSU)",
                        image: powerSupplyImg,
                        body: "The Power Supply Unit (PSU) takes electricity from the wall socket and converts it into safe power levels for computer parts. Different parts need different voltages, and PSU manages that.\n\nWithout PSU, no part can run — not CPU, not motherboard, not storage. It is like the food system of the computer body. Important safety rule: never touch power cables with wet hands and always switch off power before cleaning around a computer."
                    },
                    {
                        slug: 'laptop-ports',
                        subtitle: "Laptop Ports",
                        image: laptopPortsImg,
                        body: "Laptop ports are connection points used to attach external devices. Common ports include USB for pen drives, audio jack for headphones, HDMI for monitors/projectors, and charging ports.\n\nLearning ports helps kids connect devices correctly and avoid forcing the wrong plug into a slot. If a device is not connecting, first check if you are using the correct port. This is a basic and very useful troubleshooting skill."
                    }
                ]
            }
        },
        {
            id: 'file-management',
            title: 'FILE MANAGEMENT',
            category: 'computer_basics',
            icon: <FolderOpen className="w-5 h-5 text-amber-500" />,
            content: {
                heading: "Organizing Your Computer Room",
                text: "If you throw all your toys in one big pile, it's hard to find anything! Computers are the same. We need folders.",
                sections: [
                    { subtitle: "What is a Folder?", image: "https://loremflickr.com/600/400/folder,computer,kids", body: "A folder is like a digital backpack. You can put lots of different files (like pictures and stories) inside it to keep them organized." },
                    { subtitle: "Creating a New Folder", image: "https://loremflickr.com/600/400/new,folder,windows", body: "Right-click on an empty spot on your Desktop, choose 'New', then click 'Folder'. A brand new yellow folder will appear!" },
                    { subtitle: "Renaming Folders", image: "https://loremflickr.com/600/400/typing,name,kids", body: "Right-click your new folder and choose 'Rename'. Type a smart name like 'My Summer Photos' so you know exactly what is inside." },
                    { subtitle: "Moving Files", image: "https://loremflickr.com/600/400/drag,drop,computer", body: "To put a picture into your folder, just click the picture, hold the mouse button down, Drag it over the folder, and Drop it!" }
                ]
            }
        },
        ...msPaintThreeTopics,
        ...msWordTwoTopics,
        ...windowsOsThreeTopics,
        ...typingSkillsThreeTopics,
        ...aiTwoTopics,
        ...class5SummaryQuizTopics,
    ]
};
