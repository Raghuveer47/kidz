const askBeforeClickingImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133453/kidscodingai/assets/images/class4/ethics/ask-before-clicking.png';
const dontCopyImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133452/kidscodingai/assets/images/class4/ethics/dont-copy.png';
const followTheRulesImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133453/kidscodingai/assets/images/class4/ethics/follow-the-rules.png';
const useKindWordsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133454/kidscodingai/assets/images/class4/ethics/use-kind-words.png';

export const CLASS4_ETHICS_CHAPTERS = [
    {
        id: 'use-kind-words',
        title: 'Use kind words online and offline',
        image: useKindWordsImg,
        alt: 'Students using kind and respectful words while learning on computers',
        lead: 'Digital communication should feel safe and respectful for everyone.',
        paragraphs: [
            'When you type in class chats, comments, or shared documents, your words still affect real people. A rude message can hurt feelings even if it is written as a joke.',
            'Before sending anything, pause for a 3-step check: Is it respectful? Is it useful? Would I say the same thing politely in person?',
            'Good digital citizens encourage friends, appreciate effort, and correct mistakes calmly. They never use insults, teasing, or bullying language.',
            'If a conversation is getting heated, stop typing and ask your teacher for support. A short pause often prevents bigger problems.',
        ],
        dos: [
            'Use simple polite words like please, thank you, and good try.',
            'If you disagree, explain your point politely instead of attacking the person.',
        ],
        tipTitle: 'Friendly typing trick',
        tipBody: 'Read your message once before sending. If it sounds harsh, rewrite it in a kinder way.',
    },
    {
        id: 'dont-copy-work',
        title: "Don't copy work - create honestly",
        image: dontCopyImg,
        alt: 'Student learning not to copy and paste others work',
        lead: 'Learning from examples is good, but copying and claiming it as your own is unfair.',
        paragraphs: [
            'Copying someone else\'s assignment, project text, image, or code and submitting it as your own is called plagiarism.',
            'A better method: read, understand, close the source, then write in your own words. This helps your brain learn and improves memory.',
            'If your teacher allows references, mention the source clearly. Giving credit is a sign of honesty and respect for other creators.',
            'Original work builds confidence. Even if your first version is simple, it is better than a perfect copy that is not yours.',
        ],
        dos: [
            'Use references to understand ideas, then produce your own final answer.',
            'Ask for help when stuck instead of copying from classmates or websites.',
        ],
        tipTitle: 'Own your learning',
        tipBody: 'Your personal explanation, example, or drawing is your superpower. Teachers value real effort more than copied perfection.',
    },
    {
        id: 'ask-before-clicking',
        title: 'Ask before clicking unknown links',
        image: askBeforeClickingImg,
        alt: 'Child asking teacher before clicking suspicious content online',
        lead: 'Smart students click carefully because not every link, pop-up, or download is safe.',
        paragraphs: [
            'Some websites use fake messages like "You won a prize!" or "Click here to fix your device now!". These tricks try to make users click quickly without thinking.',
            'If a link looks strange, the page asks for personal details, or a file starts downloading unexpectedly, stop and call a teacher or parent.',
            'One wrong click can lead to viruses, stolen passwords, or damaged files. One careful question can prevent all of that.',
            'Safe browsing is not fear - it is responsibility. Careful clicking protects your work, your device, and your family accounts.',
        ],
        dos: [
            'Download apps/files only from trusted and approved sources.',
            'Never enter passwords or personal information on unknown pages.',
        ],
        tipTitle: 'Pause, then proceed',
        tipBody: 'If anything feels urgent or "too good to be true," pause first and verify with an adult.',
    },
    {
        id: 'follow-the-rules',
        title: 'Follow school and lab digital rules',
        image: followTheRulesImg,
        alt: 'Students following digital classroom and computer lab rules',
        lead: 'Rules help everyone learn safely, fairly, and smoothly.',
        paragraphs: [
            'Computer lab rules are safety instructions. They protect students, devices, and school data.',
            'Use only your own login, keep passwords private, and always log out after class. Do not change settings or install software without permission.',
            'Stay focused on assigned tasks during class time. Misusing devices can affect your progress and distract others.',
            'When all students follow the same digital rules, the class becomes more organized, secure, and enjoyable for everyone.',
        ],
        dos: [
            'Respect time limits, shared systems, and teacher instructions.',
            'Report technical issues immediately instead of trying risky fixes.',
        ],
        tipTitle: 'Responsible learner habit',
        tipBody: 'Treat every school computer like shared community property - use it carefully and leave it ready for the next student.',
    },
];

