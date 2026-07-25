import React from 'react';
import { Sparkles } from 'lucide-react';
import {
    AI2_HUB_HERO,
    AI2_HUB_SECTION_IMAGES,
    AI2_FUN_INTERACTIVE_IMAGES,
    AI2_PLAYFUL_VISUAL_IMAGES,
    AI2_FACE_IMAGES,
    AI2_VOICE_IMAGES,
    AI2_CHATBOT_IMAGES,
    AI2_GAMES_IMAGES,
    AI2_RECOMMENDATIONS_IMAGES,
    AI2_IMAGE_RECOGNITION_IMAGES,
} from './class5AiTwoImages';

const aiIcon = <Sparkles className="w-5 h-5 text-rose-500" />;

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

/** Class 5 — AI-2 hub + eight sub-lessons. */
export const aiTwoTopics = [
    {
        id: 'ai-2',
        title: 'AI-2',
        category: 'ai',
        icon: aiIcon,
        children: [
            { label: 'Fun & Interactive AI Concepts', topicId: 'ai-2-fun-interactive' },
            { label: 'Make learning playful and visual', topicId: 'ai-2-playful-visual' },
            { label: 'How AI Recognizes Faces (like phone face unlock)', topicId: 'ai-2-face-recognition' },
            { label: 'Voice Recognition (how Siri understands you)', topicId: 'ai-2-voice-recognition' },
            { label: 'Chatbots (how AI talks to humans)', topicId: 'ai-2-chatbots' },
            { label: 'AI in Games (smart enemies in video games)', topicId: 'ai-2-games' },
            { label: 'Recommendation Systems (Netflix, YouTube suggestions)', topicId: 'ai-2-recommendations' },
            { label: 'Image Recognition (how AI identifies animals, objects)', topicId: 'ai-2-image-recognition' },
        ],
        content: {
            heading: 'AI-2',
            text:
                'Class 5 AI-2 builds on Class 4 WHAT IS AI with fun, visual, real-world examples: face unlock, Siri-style voice, chatbots, game enemies, video recommendations, and photo labeling. Each lesson uses simple language, classroom-safe habits, and activities you can discuss with a teacher—no scary robot myths, just pattern-based technology you already touch on phones, tablets, and apps.',
            hubHeroImage: AI2_HUB_HERO,
            aiSmartBasicsTitle: 'AI-2 — Interactive & Visual AI',
            aiDetail: {
                intro:
                    'AI-2 is about seeing AI work in places kids enjoy—games, videos, cameras, and talking assistants. You will learn how each feature uses data and patterns, what the computer is actually doing, and how to stay safe with privacy and trusted adults. Class 4 taught definitions and data; Class 5 AI-2 shows eight popular applications step by step.',
                analogy:
                    'Imagine AI-2 as a theme park map. Class 4 taught what a park is and where the gates are. AI-2 takes you to eight rides—Face Scanner, Voice Mountain, Chatbot Castle, Game Arena, Recommendation River, and Picture Safari—each with a sign explaining how the ride works behind the scenes, not magic smoke.',
                keyPoints: [
                    { title: 'Fun but factual', body: 'Cartoons exaggerate; real AI is software finding patterns in photos, sound, clicks, and text.' },
                    { title: 'Interactive learning', body: 'Demos, drawings, and class discussions beat memorizing long definitions alone.' },
                    { title: 'Face and voice', body: 'Phone unlock and Siri-style helpers use trained models—not a human watching inside the phone.' },
                    { title: 'Chatbots and games', body: 'Text bots and game enemies predict replies or moves from huge example datasets.' },
                    { title: 'Feeds and photos', body: 'YouTube-style rows and animal labels in apps use similar “what matches past data?” logic.' },
                    { title: 'Safety repeats', body: 'Ask adults before new apps; never share passwords; mute speakers; give credit for human work.' },
                ],
            },
            subtopicIntro: 'Use the sidebar under AI-2 to open all eight lessons in order or jump to today’s topic.',
            subtopicThumbnails: {
                'ai-2-fun-interactive': AI2_FUN_INTERACTIVE_IMAGES.lessonThumbnail,
                'ai-2-playful-visual': AI2_PLAYFUL_VISUAL_IMAGES.lessonThumbnail,
                'ai-2-face-recognition': AI2_FACE_IMAGES.lessonThumbnail,
                'ai-2-voice-recognition': AI2_VOICE_IMAGES.lessonThumbnail,
                'ai-2-chatbots': AI2_CHATBOT_IMAGES.lessonThumbnail,
                'ai-2-games': AI2_GAMES_IMAGES.lessonThumbnail,
                'ai-2-recommendations': AI2_RECOMMENDATIONS_IMAGES.lessonThumbnail,
                'ai-2-image-recognition': AI2_IMAGE_RECOGNITION_IMAGES.lessonThumbnail,
            },
            aiWhyLearn: [
                'You already use AI features daily—naming them builds digital confidence.',
                'Face, voice, and chat tools raise privacy questions worth discussing early.',
                'Game and video AI explains why content feeds change when habits change.',
                'Image recognition connects science, nature apps, and accessibility tools.',
                'Visual, playful lessons suit Class 5 attention and group work.',
                'Prepares for deeper AI topics in Class 6 and beyond.',
            ],
            aiHowToStudy: [
                'Read the AI-2 overview once, then follow lessons 1–8 from the sidebar.',
                'Keep a three-column notebook: Feature | Pattern it uses | Human choice I make.',
                'Sketch one cartoon diagram per lesson for revision.',
                'Bring one example from home (with permission) for show-and-tell.',
                'Review Class 4 WHAT IS AI if a word like “training data” feels fuzzy.',
            ],
            subtopicPages: [
                { topicId: 'ai-2-fun-interactive', label: 'Fun & Interactive AI', emoji: '🎮', description: 'Games, quizzes, and demos that teach AI ideas actively.' },
                { topicId: 'ai-2-playful-visual', label: 'Playful & visual learning', emoji: '🎨', description: 'Cartoons, charts, and hands-on visuals for hard concepts.' },
                { topicId: 'ai-2-face-recognition', label: 'Face recognition', emoji: '😊', description: 'How face unlock maps dots and patterns—plus privacy.' },
                { topicId: 'ai-2-voice-recognition', label: 'Voice recognition', emoji: '🎤', description: 'Speech-to-text and Siri-style intent detection.' },
                { topicId: 'ai-2-chatbots', label: 'Chatbots', emoji: '💬', description: 'How bots predict text replies; safe classroom use.' },
                { topicId: 'ai-2-games', label: 'AI in games', emoji: '👾', description: 'Smart enemies, difficulty, and procedural levels.' },
                { topicId: 'ai-2-recommendations', label: 'Recommendations', emoji: '📺', description: 'Netflix and YouTube-style “For you” rows explained.' },
                { topicId: 'ai-2-image-recognition', label: 'Image recognition', emoji: '🐱', description: 'Labeling animals, objects, and scenes in photos.' },
            ],
            sections: [
                section('Fun & interactive AI (preview)', 'Classroom AI learning can include sorting games (cat vs dog pictures), voice demos with teacher permission, and simple “guess the next word” challenges—always supervised, always kind.', AI2_HUB_SECTION_IMAGES.funPreview),
                section('Playful & visual (preview)', 'Use posters, sticky-note flowcharts, and emoji timelines to show: data in → pattern model → prediction out. Drawing beats only reading long paragraphs.', AI2_HUB_SECTION_IMAGES.funPreview),
                section('Face & voice (preview)', 'Face unlock compares live camera dots to stored templates. Voice assistants convert sound waves to text, then pick an action. Both can fail—lighting, accents, background noise.', AI2_HUB_SECTION_IMAGES.facePreview),
                section('Chatbots, games, feeds & images (preview)', 'Chatbots stitch likely words; game AI adjusts enemy behavior; recommendation engines rank clips you might watch next; photo apps cluster pets and landmarks from pixel patterns.', AI2_HUB_SECTION_IMAGES.gamesPreview),
            ],
        },
    },
    subLesson(
        'ai-2-fun-interactive',
        'AI-2: FUN & INTERACTIVE',
        'Fun & Interactive AI Concepts',
        'AI learning does not have to be boring lectures. Interactive activities help Class 5 students feel how pattern matching works before memorizing vocabulary. This lesson suggests teacher-led games and demos that stay safe, inclusive, and accurate—no student installs unknown apps alone.',
        [
            section('What makes AI learning interactive?', 'Interactive means you participate: sort cards, vote in polls, move sticky notes, or try a teacher-controlled demo.\n\nExamples:\n\n• Picture sort — cat vs dog photo piles.\n\n• Pattern hunt — spot which thumbnail “looks similar.”\n\n• Voice echo — teacher shows speech-to-text on one sentence.\n\n• Prediction game — guess keyboard next-word suggestions.\n\nInteraction builds memory; passively watching a long video does less for young learners.', AI2_FUN_INTERACTIVE_IMAGES.whatIsFun),
            section('Classroom activities (teacher-led)', 'Activity 1 — Human vs machine sort: Team A sorts images by eye; Team B checks a simple app label (if approved). Compare speed and mistakes.\n\nActivity 2 — Broken pattern: Show five shapes in a row, hide the sixth—class guesses. Connect to “AI predicts what comes next.”\n\nActivity 3 — Wrong answer discussion: When AI mislabels a picture, fix it together—teaches limits honestly.', AI2_FUN_INTERACTIVE_IMAGES.interactiveExamples),
            section('Digital citizenship during demos', 'Only use school accounts and teacher-chosen tools.\n\nNo photos of classmates uploaded to public AI sites without consent.\n\nLaugh with ideas, never at people.\n\nMute microphones after voice demos.\n\nThank the IT helper who set up the PC.', AI2_FUN_INTERACTIVE_IMAGES.classroomActivities),
        ]
    ),
    subLesson(
        'ai-2-playful-visual',
        'AI-2: PLAYFUL & VISUAL',
        'Make learning playful and visual',
        'Brains remember pictures. This lesson shows how cartoons, color-coded charts, and simple animations explain AI pipelines without heavy math—ideal for Class 5 revision and parent nights.',
        [
            section('Why visual learning helps', 'AI involves invisible math; drawings make it visible.\n\nStick figures can represent: camera → dots → match → unlock.\n\nTraffic-light colors: green = safe habit, yellow = ask adult, red = never share passwords.\n\nVisual summaries fit on one poster per lesson.', AI2_PLAYFUL_VISUAL_IMAGES.visualLearning),
            section('Cartoons and diagrams (no fancy tools needed)', 'Draw on paper or whiteboard:\n\n1. Data box (photos, clips, words).\n\n2. Training arrow (many examples).\n\n3. Model brain (pattern storage).\n\n4. Prediction arrow (guess for new input).\n\n5. Human checkmark (final decision).\n\nAdd emoji faces for fun—accuracy matters more than art skill.', AI2_PLAYFUL_VISUAL_IMAGES.diagramsCartoons),
            section('Hands-on poster project', 'Teams pick one AI-2 topic (face, voice, games, etc.).\n\nMake an A3 poster with title, 4-step diagram, one real example, one safety rule.\n\nPresent in two minutes.\n\nDisplay in computer lab for younger grades.', AI2_PLAYFUL_VISUAL_IMAGES.handsOn),
        ]
    ),
    subLesson(
        'ai-2-face-recognition',
        'AI-2: FACE RECOGNITION',
        'How AI Recognizes Faces (like phone face unlock)',
        'Face unlock on phones feels like magic—it is math on pixels. The camera finds landmarks (eyes, nose, mouth), converts them to a number pattern, and compares to your enrolled template. This lesson explains steps, limits, and privacy for Class 5.',
        [
            section('What face unlock does', 'When you enroll, the phone stores a mathematical template—not always a normal photo file.\n\nAt unlock, the camera captures your face, detects landmarks, builds a pattern, and scores similarity.\n\nAbove a threshold → unlock. Below → try again or passcode.\n\nWorks best: good light, face centered, eyes open.', AI2_FACE_IMAGES.faceUnlock),
            section('How AI maps a face', 'Step 1: Find face in frame.\n\nStep 2: Place dots on key points (eye corners, nose tip).\n\nStep 3: Measure distances and angles between dots.\n\nStep 4: Compare vector to saved template.\n\nSimilar to matching a connect-the-dots puzzle, not reading your mind.', AI2_FACE_IMAGES.howItWorks),
            section('Limits and fairness', 'Hats, masks, dark rooms, or sharp angles can fail.\n\nSystems trained on limited face types may work worse for some groups—engineers must use diverse training photos.\n\nFace unlock is convenience, not perfect security—passcodes still matter.', AI2_FACE_IMAGES.howItWorks),
            section('Privacy and school rules', 'Never scan a friend’s face into your phone as a joke.\n\nSchool devices may disable face login—follow policy.\n\nAsk before using face filters that store clips online.\n\nSensitive places (locker rooms) deserve extra camera respect.', AI2_FACE_IMAGES.privacySafety),
        ]
    ),
    subLesson(
        'ai-2-voice-recognition',
        'AI-2: VOICE RECOGNITION',
        'Voice Recognition (how Siri understands you)',
        'Siri and similar assistants use voice recognition: sound → text → intent → action → spoken reply. This lesson walks through that pipeline in kid-clear steps and reviews safe microphone habits.',
        [
            section('From sound wave to words', 'Your voice vibrates air; the microphone records waves.\n\nSpeech-to-text AI splits audio into chunks and predicts which phonemes and words match training data.\n\nOutput is text on screen or inside the device—“What’s the weather?” becomes words the next step can read.', AI2_VOICE_IMAGES.speechToText),
            section('How Siri-style helpers choose an action', 'After text exists, intent detection asks: Is this weather, music, timer, or general question?\n\nThen a service fetches answer or runs a command.\n\nText-to-speech reads the reply aloud.\n\nMisheard words cause wrong actions—“call Mom” vs “call Tom.”', AI2_VOICE_IMAGES.siriFlow),
            section('Accents, noise, and limits', 'Background chatter, fans, and music confuse models.\n\nRare names may spell wrong.\n\nAssistants may answer confidently even when incorrect—verify facts in books.\n\nSpeak clearly; wait for the listening indicator.', AI2_VOICE_IMAGES.accentsLimits),
            section('Safe voice habits', 'Use teacher-written command lists in demos.\n\nNo passwords, addresses, or secrets near open mics.\n\nMute after lab exercises.\n\nPoliteness is good; the device is not a trusted friend for private stories.', AI2_VOICE_IMAGES.siriFlow),
        ]
    ),
    subLesson(
        'ai-2-chatbots',
        'AI-2: CHATBOTS',
        'Chatbots (how AI talks to humans)',
        'Chatbots are programs that predict likely replies in a conversation. Some answer FAQs on websites; others draft long paragraphs. Class 5 learns the basic mechanism and classroom safety—not treating bots as homework authors without permission.',
        [
            section('What is a chatbot?', 'Chatbot = chat + robot (software, not metal body).\n\nIt reads your message, finds patterns in huge text training sets, and outputs probable next words.\n\nRule-based bots follow fixed scripts (“Press 1 for hours”); AI-style bots predict flexible sentences.', AI2_CHATBOT_IMAGES.whatIsChatbot),
            section('How bots generate replies', 'Training includes books, websites, and Q&A pairs (filtered by companies).\n\nWhen you type “What is photosynthesis?”, the model predicts a helpful-sounding continuation.\n\nIt does not truly understand like a scientist—it assembles patterns.\n\nWrong or made-up facts can appear—called hallucination.', AI2_CHATBOT_IMAGES.howTheyReply),
            section('Where you might see chatbots', 'School website help widgets.\n\nCustomer support pop-ups.\n\nPractice language apps (with teacher approval).\n\nNever required for Class 5 exams unless teacher assigns.', AI2_CHATBOT_IMAGES.whatIsChatbot),
            section('Safe chat habits', 'Do not share personal info.\n\nDo not copy bot paragraphs as your own homework.\n\nIf a reply feels odd or rude, tell an adult—do not share screenshots to tease others.\n\nSchool policy decides which tools are allowed.', AI2_CHATBOT_IMAGES.safeChat),
        ]
    ),
    subLesson(
        'ai-2-games',
        'AI-2: AI IN GAMES',
        'AI in Games (smart enemies in video games)',
        'Game enemies that dodge, chase, or aim use AI-style logic—often trained on past player moves or hand-written rules that feel smart. This lesson separates movie robots from real game code.',
        [
            section('What “smart enemy” means', 'Enemies may:\n\n• Aim where you moved last.\n\n• Hide when health is low.\n\n• Flank in teams.\n\n• Adjust speed if you win too often.\n\nThe game does not “feel anger”—variables change (speed, accuracy, spawn rate).', AI2_GAMES_IMAGES.smartEnemies),
            section('Adaptive difficulty', 'If players die too often, some games quietly ease difficulty.\n\nIf players win easily, enemies get tougher.\n\nGoal: keep fun challenge—not prove AI is alive.\n\nDiscuss: Is always winning fun? Is always losing fun?', AI2_GAMES_IMAGES.adaptiveDifficulty),
            section('Procedural content', 'Some games generate levels from rules learned across many players—new mazes or loot patterns.\n\nStill designed by humans who set limits.', AI2_GAMES_IMAGES.smartEnemies),
            section('Not magic—just game design', 'Ads claiming “lifelike AI” exaggerate.\n\nClass activity: list three enemy behaviors in a game you know; label each rule-based or pattern-based.\n\nBalance screen time with outdoor play—health tips from Class 4 still apply.', AI2_GAMES_IMAGES.notMagic),
        ]
    ),
    subLesson(
        'ai-2-recommendations',
        'AI-2: RECOMMENDATIONS',
        'Recommendation Systems (Netflix, YouTube suggestions)',
        '“Up next” rows on streaming apps use recommendation AI: they predict what you might watch or click based on history and similar users. Humans still choose whether to press play.',
        [
            section('What gets recommended?', 'Videos, shows, songs, or shorts suggested on home screens.\n\nInputs: watches, likes, skips, watch time, searches.\n\nOutput: ranked list—highest predicted engagement on top.', AI2_RECOMMENDATIONS_IMAGES.youtubeNetflix),
            section('How the feed loop works', 'Data in → model predicts “will this user keep watching?” → top items shown → your next click becomes new data.\n\nSimilar accounts (“users like you”) influence suggestions.\n\nTopic can narrow if you only click one genre.', AI2_RECOMMENDATIONS_IMAGES.howFeedWorks),
            section('Why feeds feel sticky', 'Apps optimize for watch time, not always learning goals.\n\nAutoplay starts the next clip automatically.\n\nBreaks and parental controls help balance focus homework vs entertainment.', AI2_RECOMMENDATIONS_IMAGES.howFeedWorks),
            section('Healthy recommendation habits', 'Search educational channels on purpose.\n\nFollow teacher-approved lists.\n\nTurn off endless autoplay during study weeks.\n\nTell a parent if something inappropriate appears—report and skip.', AI2_RECOMMENDATIONS_IMAGES.healthyHabits),
        ]
    ),
    subLesson(
        'ai-2-image-recognition',
        'AI-2: IMAGE RECOGNITION',
        'Image Recognition (how AI identifies animals, objects)',
        'Image recognition labels photos: cat, dog, car, apple, or “beach.” Apps use trained models on millions of labeled pictures. Class 5 learns training, prediction, and real uses—from nature apps to accessibility.',
        [
            section('Pixels to labels', 'A digital photo is a grid of colored pixels.\n\nAI compares pixel patterns to patterns seen in training.\n\nOutput: label + confidence score (“87% dog”).\n\nWrong labels happen on unusual angles or rare breeds.', AI2_IMAGE_RECOGNITION_IMAGES.animalsObjects),
            section('Training with labeled examples', 'Engineers feed datasets: thousands of images tagged cat, bird, car, etc.\n\nMore variety (lighting, breeds, backgrounds) usually improves fairness.\n\nBiased training → repeated mistakes for underrepresented groups.', AI2_IMAGE_RECOGNITION_IMAGES.trainingLabels),
            section('Where image AI helps', 'Photo gallery search (“show dogs”).\n\nNature identification apps on hikes (verify with books).\n\nSorting recycling education demos.\n\nAccessibility alt-text suggestions.\n\nMedical imaging is for experts—not primary kids—but shows field importance.', AI2_IMAGE_RECOGNITION_IMAGES.realWorldUses),
            section('Class discussion questions', 'Why should you label AI-edited images in projects?\n\nWhat if the app calls a wolf a dog?\n\nShould you upload classmates’ faces to random websites? (No.)\n\nHomework: draw before/after flow for one photo labeled in your gallery app.', AI2_IMAGE_RECOGNITION_IMAGES.animalsObjects),
        ]
    ),
];
