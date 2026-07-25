const limitScreenTimeImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133455/kidscodingai/assets/images/class4/health-tips/limit-screen-time.png';
const screenBrightnessImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133456/kidscodingai/assets/images/class4/health-tips/screen-brightness.png';
const stretchYourBodyImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133456/kidscodingai/assets/images/class4/health-tips/stretch-your-body.png';
const twentyTwentyRuleImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133457/kidscodingai/assets/images/class4/health-tips/the-20-20-rule.png';

export const CLASS4_HEALTH_TIPS_CHAPTERS = [
    {
        id: 'the-20-20-rule',
        title: 'The 20-20-20 rule for healthy eyes',
        image: twentyTwentyRuleImg,
        alt: 'Student looking away from screen to rest eyes using the 20-20-20 rule',
        lead: 'When we stare at a screen for too long, eye muscles get tired and dry.',
        paragraphs: [
            'The 20-20-20 rule is simple: every 20 minutes, look at something about 20 feet away for 20 seconds.',
            'This short eye break relaxes eye muscles and reduces strain during long study sessions.',
            'You can set a soft alarm or ask your teacher to remind the class for regular eye breaks.',
            'Even short breaks matter. Small healthy habits done daily protect your eyes over time.',
        ],
        dos: [
            'Blink slowly a few times during each break to keep eyes moist.',
            'Sit at least an arm\'s distance from the screen whenever possible.',
        ],
        tipTitle: 'Eye break habit',
        tipBody: 'Look at a far wall, window, or tree for 20 seconds before returning to your screen work.',
    },
    {
        id: 'stretch-your-body',
        title: 'Stretch your body during study time',
        image: stretchYourBodyImg,
        alt: 'Kids stretching body after screen time',
        lead: 'Sitting in one position for too long makes your neck, shoulders, and back stiff.',
        paragraphs: [
            'After every 25 to 30 minutes, stand up and do a quick stretch for 1 to 2 minutes.',
            'Simple actions help a lot: shoulder rolls, neck turns, wrist circles, and gentle back stretch.',
            'Stretching improves blood flow and helps your brain stay active and focused in class.',
            'Healthy movement breaks can improve both your comfort and your concentration.',
        ],
        dos: [
            'Keep both feet flat on the floor while sitting.',
            'Sit upright with shoulders relaxed, not bent forward.',
        ],
        tipTitle: 'Mini movement break',
        tipBody: 'Use the time between lessons to stand, stretch, and reset your posture before the next task.',
    },
    {
        id: 'screen-brightness',
        title: 'Use comfortable screen brightness',
        image: screenBrightnessImg,
        alt: 'Adjusting monitor brightness for eye comfort',
        lead: 'Very bright or very dim screens can make your eyes uncomfortable and cause headaches.',
        paragraphs: [
            'Screen brightness should match your room light. If the room is dark, reduce brightness. If the room is bright, increase it slightly.',
            'Avoid heavy glare from sunlight or tube lights reflecting on the screen.',
            'Use larger text size when needed. It is better to zoom in than to bend too close to the display.',
            'Correct brightness and readable text reduce stress on your eyes and improve learning comfort.',
        ],
        dos: [
            'Clean the screen regularly to avoid dust glare.',
            'Ask an adult for help if brightness settings are confusing.',
        ],
        tipTitle: 'Comfort check',
        tipBody: 'If your eyes feel tired in the first few minutes, adjust brightness and text size right away.',
    },
    {
        id: 'limit-screen-time',
        title: 'Limit screen time and balance your day',
        image: limitScreenTimeImg,
        alt: 'Children balancing screen time with outdoor play',
        lead: 'Screens are useful for learning, but your body and mind need offline time too.',
        paragraphs: [
            'Too much continuous screen time can reduce sleep quality, physical activity, and focus.',
            'Plan your day with balance: study time, reading, outdoor play, hobbies, and family time.',
            'After completing your digital tasks, take breaks with non-screen activities like drawing, cycling, or board games.',
            'Balanced routines support stronger health, better energy, and improved academic performance.',
        ],
        dos: [
            'Avoid screens just before bedtime for better sleep.',
            'Use a daily timetable to keep healthy screen limits.',
        ],
        tipTitle: 'Healthy day formula',
        tipBody: 'Learn online, move offline, and sleep on time - this is the best routine for growing students.',
    },
];

