import React from 'react';
import { Cpu } from 'lucide-react';
const hubImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133505/kidscodingai/assets/images/class6/parts-of-computer-5/hub.jpg';
const nicImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133505/kidscodingai/assets/images/class6/parts-of-computer-5/nic.jpg';
const routerImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133506/kidscodingai/assets/images/class6/parts-of-computer-5/router.jpg';
const switchImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133506/kidscodingai/assets/images/class6/parts-of-computer-5/swicth.jpg';
import { windowsOsFourTopics } from './class6WindowsOsFourTopics';
import { typingSkillsFourTopics } from './class6TypingSkillsFourTopics';
import { msWordThreeTopics } from './class6MsWordThreeTopics';
import { msPptOneTopics } from './class6MsPptOneTopics';
import { algorithmsTopic } from './class6AlgorithmsTopics';
import { aiThreeTopics } from './class6AiThreeTopics';
import { class6SummaryQuizTopics } from './class6SummaryQuizTopics';

export const class6Data = {
    className: 'Class 6',
    topics: [
        {
            id: 'parts-of-computer-5',
            title: 'PARTS OF COMPUTER-5',
            category: 'computer_basics',
            icon: <Cpu className="w-5 h-5 text-emerald-600" />,
            childRouteBase: '/class6/parts-of-computer-5/',
            children: [
                { label: 'NIC', slug: 'nic' },
                { label: 'Router', slug: 'router' },
                { label: 'Switch', slug: 'switch' },
                { label: 'Hub', slug: 'hub' },
            ],
            content: {
                heading: 'Parts of Computer-5 (Networking Devices)',
                text:
                    'Class 6 Parts of Computer-5 explores networking hardware that connects computers, shares internet, and moves data inside school labs and homes. Click each device in the sidebar for a detailed description page with pictures and step-by-step explanations.',
                sections: [
                    {
                        slug: 'nic',
                        subtitle: 'NIC (Network Interface Card)',
                        image: nicImg,
                        body:
                            "NIC stands for Network Interface Card. It is the hardware that lets a computer join a network and talk to other devices.\n\nSome NICs use Ethernet cables; others support Wi-Fi wirelessly. Without a working NIC, a computer cannot reach the internet or classroom file shares properly.\n\nThink of NIC as the computer's network door—data enters and leaves through it.",
                    },
                    {
                        slug: 'router',
                        subtitle: 'Router',
                        image: routerImg,
                        body:
                            'A router shares one internet connection with many devices—laptops, tablets, and phones. It forwards data packets to the correct device using addresses, like a post office sorting letters.\n\nHome and school routers include Wi-Fi password protection. Good habit: never share your Wi-Fi password with strangers; tell a trusted adult if the network acts strange.',
                    },
                    {
                        slug: 'switch',
                        subtitle: 'Switch',
                        image: switchImg,
                        body:
                            'A network switch connects multiple computers inside the same local network (such as a wired lab). Unlike a simple hub, a switch sends data only to the port that needs it, reducing unnecessary traffic.\n\nWhen PC-A sends a file to PC-B, the switch guides that traffic directly—making lab networks faster and smarter.',
                    },
                    {
                        slug: 'hub',
                        subtitle: 'Hub',
                        image: hubImg,
                        body:
                            'A hub also connects multiple devices, but it repeats incoming data to every port—even devices that do not need it. That creates extra traffic and collisions on busy networks.\n\nHubs are mostly historical; switches replaced them in modern labs. Learning both helps you understand how networking technology improved over time.',
                    },
                ],
            },
        },
        ...windowsOsFourTopics,
        ...typingSkillsFourTopics,
        ...msWordThreeTopics,
        ...msPptOneTopics,
        algorithmsTopic,
        ...aiThreeTopics,
        ...class6SummaryQuizTopics,
    ],
};
