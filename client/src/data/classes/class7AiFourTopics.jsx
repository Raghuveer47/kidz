import React from 'react';
import { Bot } from 'lucide-react';

const aiIcon = <Bot className="w-5 h-5 text-rose-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'ai',
        icon: aiIcon,
        content: { heading, text, sections },
    };
}

/** Class 7 (h) — AI-4 hub + hands-on & real-world sub-lessons. */
export const aiFourTopics = [
    {
        id: 'ai-4',
        title: 'AI-4',
        category: 'ai',
        icon: aiIcon,
        children: [
            { label: 'Train a simple AI model (cat vs dog images)', topicId: 'ai-4-train-image-model' },
            { label: 'Create a chatbot with predefined answers', topicId: 'ai-4-chatbot' },
            { label: 'Use block-based AI tools (Scratch AI extensions)', topicId: 'ai-4-scratch-ai' },
            { label: 'Voice command mini-project', topicId: 'ai-4-voice-command' },
            { label: 'Draw & guess games (AI guessing drawings)', topicId: 'ai-4-draw-guess' },
            { label: 'AI in Healthcare (doctor assistants)', topicId: 'ai-4-healthcare' },
            { label: 'AI in Cars (self-driving basics)', topicId: 'ai-4-cars' },
            { label: 'AI in Education (smart learning apps)', topicId: 'ai-4-education' },
            { label: 'AI in Security (face detection, CCTV)', topicId: 'ai-4-security' },
            { label: 'AI in Agriculture (smart farming)', topicId: 'ai-4-agriculture' },
        ],
        content: {
            heading: 'AI-4',
            text:
                'Class 7 AI-4 focuses on hands-on activities kids remember—train a simple image classifier, build rule chatbots, try Scratch AI, voice commands, draw-and-guess—plus real-life applications in healthcare, cars, education, security, and farming.',
            hubHeroImage: 'https://loremflickr.com/800/500/artificial,intelligence,kids,project',
            unitTitle: 'AI-4 — Hands-On & Real-World AI',
            firstLessonId: 'ai-4-train-image-model',
            firstLessonLabel: 'Train a simple AI model (cat vs dog)',
            badgeLabel: 'AI Lab',
            unitDetail: {
                intro:
                    'Reading about AI is not enough—you learn by doing safe, teacher-guided projects. Train models on labeled cat/dog photos, script chatbots with if-else answers, explore Scratch extensions, prototype voice triggers, and play Quick Draw style games. Then connect each activity to real hospitals, cars, classrooms, CCTV, and farms where similar technology helps humans.',
                analogy:
                    'Hands-on AI is like learning cooking—not only reading recipes. You mix ingredients (data), taste (test), adjust (retrain). Real-life sections are field trips showing where those same skills feed hungry people (agriculture), keep roads safer (cars), or help doctors spot patterns faster (healthcare)—always with humans in charge.',
                keyPoints: [
                    { title: 'Do projects', body: 'Activities make abstract ML concrete.' },
                    { title: 'Safety first', body: 'School datasets only; no personal photos without permission.' },
                    { title: 'Real world', body: 'Link projects to jobs and ethics discussions.' },
                    { title: 'Build on AI-3', body: 'Training/testing vocabulary from Class 6 applies here.' },
                ],
            },
            unitWhyLearn: [
                'Memorable projects increase interest in STEM and ethics.',
                'Block and voice tools include learners before advanced Python.',
                'Real-life stories answer “Why should I care?”',
            ],
            unitHowToStudy: [
                'Complete hands-on lessons 1–5 in lab order.',
                'Journal one sentence per lesson: what data did we use?',
                'Discuss real-life lessons with family—find one AI app at home.',
                'Never upload classmates’ faces to public trainers without consent.',
            ],
            sections: [
                section('Cat vs dog trainer', 'Label photos → train → test new image.', 'https://loremflickr.com/700/450/cat,dog,classification'),
                section('Real-world AI', 'Healthcare to agriculture case studies.', 'https://loremflickr.com/700/450/technology,farm,hospital'),
            ],
        },
    },
    subLesson(
        'ai-4-train-image-model',
        'Train cat vs dog model',
        'Train a Simple AI Model — Cat vs Dog',
        'Use a teacher-approved tool (Teachable Machine, simple web trainer, or classroom demo) to classify cat and dog photos.',
        [
            section(
                'Steps overview',
                '1. Collect equal numbers of cat and dog training images (school-safe, royalty-free).\n\n2. Upload to Class / Cat and Class / Dog buckets.\n\n3. Train for a few epochs (button “Train model”).\n\n4. Test with new photos never seen in training.\n\n5. Discuss wrong guesses—lighting, angle, bad labels.',
                'https://loremflickr.com/700/450/machine,learning,images'
            ),
            section(
                'Learning goals',
                'See training vs testing live.\n\nNotice need for diverse photos.\n\nRelate to AI-3 good/bad data lesson.\n\nExport or screenshot results for portfolio—follow tool privacy rules.',
                'https://loremflickr.com/700/450/ai,experiment,student',
                {
                    bullets: ['No photos of classmates without signed permission.', 'Bias: if all cats are orange, model may fail on black cats.', 'Human checks final decisions in real apps.'],
                }
            ),
        ]
    ),
    subLesson(
        'ai-4-chatbot',
        'Create a chatbot',
        'Create a Chatbot with Predefined Answers',
        'Build a rule-based chatbot using Python if/elif, Scratch, or spreadsheet logic—no cloud API required for Class 7.',
        [
            section(
                'Simple Python chatbot',
                'while True:\n    q = input("You: ").lower()\n    if "hello" in q:\n        print("Bot: Hi! Ask about school hours.")\n    elif "hours" in q:\n        print("Bot: 8am – 2pm")\n    elif "bye" in q:\n        print("Bot: Goodbye!"); break\n    else:\n        print("Bot: Sorry, try hello or hours.")',
                'https://loremflickr.com/700/450/chatbot,messages,code'
            ),
            section(
                'Design tips',
                'List 10 common questions and fixed answers.\n\nAdd polite fallback message.\n\nNever pretend bot is human in safety drills.\n\nCompare to Class 5 AI-2 chatbots that learn patterns from big data.',
                'https://loremflickr.com/700/450/chat,assistant,screen'
            ),
        ]
    ),
    subLesson(
        'ai-4-scratch-ai',
        'Scratch AI extensions',
        'Block-Based AI Tools — Scratch Extensions',
        'Scratch with AI extensions (teachable machine blocks, speech recognition) lets you drag-and-drop AI behaviors.',
        [
            section(
                'Getting started',
                'Open scratch.mit.edu (offline editor if lab has no internet).\n\nAdd extension: Machine Learning / Video Sensing / Translate (availability varies).\n\nExample: when model sees “up hand” → sprite jumps.',
                'https://loremflickr.com/700/450/scratch,blocks,coding,kids'
            ),
            section(
                'Mini project ideas',
                'Sprite changes costume when camera shows smile (if extension allowed).\n\nQuiz game with voice answers.\n\nShare project link only within class community.',
                'https://loremflickr.com/700/450/game,programming,children'
            ),
        ]
    ),
    subLesson(
        'ai-4-voice-command',
        'Voice command mini-project',
        'Voice Command Mini-Project',
        'Prototype “when I say ___ turn on ___” using approved tools—micro:bit voice, Scratch speech, or smart plug demo with teacher only.',
        [
            section(
                'Concept',
                'Speech → text → pattern match → action.\n\nExample commands: “lights on”, “next slide”, “stop music”.\n\nTest quiet room; background noise causes errors.',
                'https://loremflickr.com/700/450/voice,assistant,microphone'
            ),
            section(
                'Safety',
                'No controlling dangerous devices (stove, mains power) in student projects.\n\nUse LED or on-screen indicator as “something turned on”.\n\nDiscuss privacy—mics can listen when enabled.',
                'https://loremflickr.com/700/450/smart,home,voice'
            ),
        ]
    ),
    subLesson(
        'ai-4-draw-guess',
        'Draw & guess games',
        'Draw & Guess Games',
        'Quick Draw and similar games use AI to guess doodles from stroke patterns—play, then analyze how data volume helps.',
        [
            section(
                'Play and observe',
                'Try Google Quick Draw (if allowed) or offline teacher demo.\n\nDraw simple cat; AI guesses from millions of human doodles.\n\nFails on unusual shapes—discuss why.',
                'https://loremflickr.com/700/450/drawing,game,guess'
            ),
            section(
                'Class discussion',
                'What patterns did model learn?\n\nWould model trained only on cars recognize bicycles?\n\nConnect to pattern recognition lesson AI-3.',
                'https://loremflickr.com/700/450/sketch,pad,digital'
            ),
        ]
    ),
    subLesson(
        'ai-4-healthcare',
        'AI in Healthcare',
        'AI in Healthcare — Doctor Assistants',
        'AI helps scan X-rays, suggest possible findings, schedule patients—doctors make final decisions.',
        [
            section(
                'Examples',
                'Image models highlight suspicious areas on scans for radiologist review.\n\nChatbots triage symptoms to right department (not replace emergency calls).\n\nWearables track heart rate patterns.\n\nAlways: human expert validates AI output.',
                'https://loremflickr.com/700/450/hospital,technology,health'
            ),
            section(
                'Ethics',
                'Patient privacy (HIPAA-like rules).\n\nWrong AI guess could harm—why double-check.\n\nKids: call emergency services for real emergencies, not a chatbot.',
                'https://loremflickr.com/700/450/doctor,computer,assist'
            ),
        ]
    ),
    subLesson(
        'ai-4-cars',
        'AI in Cars',
        'AI in Cars — Self-Driving Basics',
        'Cameras, radar, and AI models detect lanes, signs, pedestrians—Level 5 full autonomy still rare; driver assist common.',
        [
            section(
                'Sensors + AI',
                'Lane keep assist, automatic emergency braking, parking sensors.\n\nTraining on millions of road images.\n\nFails in heavy snow or missing paint—human driver must stay alert.',
                'https://loremflickr.com/700/450,self,driving,car,sensor'
            ),
            section(
                'Discussion',
                'Who is responsible in an accident?\n\nEthics of trolley problems simplified for class debate.\n\nFuture jobs: AI safety tester, map annotator.',
                'https://loremflickr.com/700/450/autonomous,vehicle,road'
            ),
        ]
    ),
    subLesson(
        'ai-4-education',
        'AI in Education',
        'AI in Education — Smart Learning Apps',
        'Adaptive apps adjust difficulty; plagiarism detectors; translation for multilingual classrooms—use responsibly.',
        [
            section(
                'Benefits',
                'Personalized practice math paths.\n\nSpeech-to-text helps note-taking.\n\nAutomatic feedback on multiple-choice quizzes.',
                'https://loremflickr.com/700/450/online,education,tablet'
            ),
            section(
                'Healthy habits',
                'Do not paste homework into AI to cheat—learn concepts.\n\nVerify AI explanations with textbook.\n\nTeachers guide when AI tutors allowed.',
                'https://loremflickr.com/700/450/student,learning,app'
            ),
        ]
    ),
    subLesson(
        'ai-4-security',
        'AI in Security',
        'AI in Security — Face Detection & CCTV',
        'Cameras plus AI detect motion, faces, or loitering—raises privacy and bias discussions.',
        [
            section(
                'Uses',
                'School gate monitoring with consent policies.\n\nPhone face unlock.\n\nAirport baggage scanners.\n\nFalse matches hurt innocent people—why human review matters.',
                'https://loremflickr.com/700/450,security,camera,face'
            ),
            section(
                'Rights',
                'Surveillance laws vary by country.\n\nAsk: who watches watchers?\n\nNever hack cameras; report vulnerabilities to adults.',
                'https://loremflickr.com/700/450/cctv,monitor,safety'
            ),
        ]
    ),
    subLesson(
        'ai-4-agriculture',
        'AI in Agriculture',
        'AI in Agriculture — Smart Farming',
        'Drones, soil sensors, and weather AI help farmers water and spray efficiently—feeding growing populations.',
        [
            section(
                'Examples',
                'Satellite images detect crop stress color.\n\nPredict rain for irrigation scheduling.\n\nRobotic weed pickers (experimental).\n\nSmall farmers may use simpler apps on phones.',
                'https://loremflickr.com/700/450,farm,drone,technology'
            ),
            section(
                'Connect to class',
                'Pattern recognition on leaf photos → disease alert.\n\nGood data = healthy vs diseased leaf labels from agronomist.\n\nSustainability: less water waste helps environment.',
                'https://loremflickr.com/700/450/agriculture,smart,field'
            ),
        ]
    ),
];
