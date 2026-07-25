import React from 'react';
import { Globe2 } from 'lucide-react';

const netIcon = <Globe2 className="w-5 h-5 text-cyan-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'internet',
        icon: netIcon,
        content: { heading, text, sections },
    };
}

/** Class 7 (f) — Internet-1 hub + four sub-lessons. */
export const internetOneTopics = [
    {
        id: 'internet-1',
        title: 'INTERNET-1',
        category: 'internet',
        icon: netIcon,
        children: [
            { label: 'What is internet?', topicId: 'internet-1-what-is-internet' },
            { label: 'Applications of internet', topicId: 'internet-1-applications' },
            { label: 'LAN, MAN, WAN', topicId: 'internet-1-lan-man-wan' },
            { label: 'What is intranet?', topicId: 'internet-1-intranet' },
        ],
        content: {
            heading: 'INTERNET-1',
            text:
                'Class 7 Internet-1 explains what the internet is, everyday applications, network sizes (LAN, MAN, WAN), and how intranet differs—building on Class 6 networking devices.',
            hubHeroImage: 'https://loremflickr.com/800/500/internet,globe,network',
            unitTitle: 'Internet-1 — Networks & Uses',
            firstLessonId: 'internet-1-what-is-internet',
            firstLessonLabel: 'What is internet?',
            badgeLabel: 'Connected World',
            unitDetail: {
                intro:
                    'The internet is a global network of networks—computers linked by cables, fiber, satellites, and Wi-Fi exchanging data using shared rules (protocols). You use it for learning, email, video calls, and research. LANs cover one building; MANs cover a city; WANs span countries. Intranet is a private mini-web inside a school or company.',
                analogy:
                    'Internet is like a worldwide postal system for digital packets. LAN is your school corridor notice board. MAN is all schools in a city sharing a calendar. WAN is every city connected. Intranet is the staff-only room behind a locked door—still digital pages, but not public.',
                keyPoints: [
                    { title: 'Internet', body: 'Public global network; billions of devices.' },
                    { title: 'Applications', body: 'Education, email, cloud, e-governance, entertainment.' },
                    { title: 'LAN / MAN / WAN', body: 'Size and geographic reach differ.' },
                    { title: 'Intranet', body: 'Private internal websites and file shares.' },
                ],
            },
            unitWhyLearn: [
                'Safe, smart internet use is essential for research and homework.',
                'Connects to routers/switches from Class 6.',
                'Prepares for HTML and web projects in this same class.',
            ],
            unitHowToStudy: [
                'Draw a map: home LAN → router → ISP → internet cloud.',
                'List five school-approved internet uses.',
                'Compare one LAN device list with what WAN adds.',
            ],
            sections: [
                section('Global internet', 'Cables under oceans and data centers worldwide.', 'https://loremflickr.com/700/450/fiber,cable,network'),
                section('Network sizes', 'LAN lab, MAN city network, WAN country link.', 'https://loremflickr.com/700/450/network,diagram,lan'),
            ],
        },
    },
    subLesson(
        'internet-1-what-is-internet',
        'What is internet?',
        'What is the Internet?',
        'The internet is a worldwide system connecting computers so they can share information using TCP/IP and other protocols.',
        [
            section(
                'Definition',
                'Network of networks—your PC → router → ISP → backbone fibers → server across the world.\n\nNot the same as “Wi-Fi” (Wi-Fi is one wireless link).\n\nNot the same as one website (Google is a service on the internet).',
                'https://loremflickr.com/700/450/internet,connection,world'
            ),
            section(
                'Key terms',
                'ISP — Internet Service Provider sells connection.\n\nServer — computer that serves web pages/files.\n\nClient — your browser requesting pages.\n\nIP address — numeric device ID; DNS maps names like example.com.',
                'https://loremflickr.com/700/450/server,data,center'
            ),
        ]
    ),
    subLesson(
        'internet-1-applications',
        'Applications of internet',
        'Applications of the Internet',
        'How society uses the internet daily—in education, communication, commerce, and more.',
        [
            section(
                'Common applications',
                'Education — online classes, tutorials, digital libraries.\n\nCommunication — email, chat, video calls.\n\nResearch — news, encyclopedias, datasets (verify sources).\n\nE-commerce — shopping, banking (adult supervision).\n\nEntertainment — streaming, games (time limits).\n\nCloud storage — backup and collaboration.',
                'https://loremflickr.com/700/450/online,learning,student'
            ),
            section(
                'Safe use',
                'Follow school AUP (Acceptable Use Policy).\n\nProtect passwords; do not share OTP.\n\nCite reliable websites in projects.\n\nTell adult about cyberbullying or scary messages.',
                'https://loremflickr.com/700/450/cyber,safety,kids',
                {
                    bullets: ['Not everything online is true.', 'Privacy settings matter on social apps.', 'Balance screen time with offline life.'],
                }
            ),
        ]
    ),
    subLesson(
        'internet-1-lan-man-wan',
        'LAN, MAN, WAN',
        'LAN, MAN, and WAN',
        'Three network sizes classified by geographic coverage.',
        [
            section(
                'Definitions',
                'LAN (Local Area Network) — one building or campus: school lab, home Wi-Fi.\n\nMAN (Metropolitan Area Network) — city-scale: connecting branch offices across town.\n\nWAN (Wide Area Network) — large region/country/world: bank branches nationwide; the internet is the largest WAN.',
                'https://loremflickr.com/700/450/network,topology,diagram'
            ),
            section(
                'Examples table',
                'LAN: classroom PCs + printer + switch.\n\nMAN: city university campuses linked.\n\nWAN: corporate offices in Delhi, Mumbai, Chennai.\n\nYour home router creates a LAN; ISP link joins the WAN internet.',
                'https://loremflickr.com/700/450/router,switch,office',
                {
                    bullets: ['Class 6 switch/router examples fit LAN.', 'Speed often LAN fastest inside building.', 'WAN links may add delay (latency).'],
                }
            ),
        ]
    ),
    subLesson(
        'internet-1-intranet',
        'What is intranet?',
        'What is an Intranet?',
        'Intranet is a private network using web-like pages and tools visible only inside an organization.',
        [
            section(
                'Intranet vs internet',
                'Internet — public, global.\n\nIntranet — private, inside school/company firewall.\n\nMay host timetable, notices, internal forms—not searchable on Google.',
                'https://loremflickr.com/700/450/office,internal,network'
            ),
            section(
                'Why schools use intranet',
                'Share homework drop-box safely.\n\nPublish lab rules and schedules.\n\nRequires login; permissions per role (student/teacher).\n\nExtranet (bonus) — limited outside access for partners.',
                'https://loremflickr.com/700/450/school,portal,login'
            ),
        ]
    ),
];
