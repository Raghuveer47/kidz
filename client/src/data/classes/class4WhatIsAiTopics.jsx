import React from 'react';
import { Sparkles, ClipboardCheck, FileText } from 'lucide-react';
import {
    WHAT_IS_AI_HUB_HERO,
    WHAT_IS_AI_HUB_SECTION_IMAGES,
    WHAT_IS_AI_MEANING_IMAGES,
    WHAT_IS_AI_HUMAN_VS_AI_IMAGES,
    WHAT_IS_AI_EVERYWHERE_IMAGES,
    WHAT_IS_AI_VS_ROBOTS_IMAGES,
    WHAT_IS_AI_SMART_DEVICES_IMAGES,
    WHAT_IS_AI_DATA_IMAGES,
} from './class4WhatIsAiImages';

/** Class 4 — What is AI hub + six sub-lessons. Images optional until added in class4WhatIsAiImages.js */
export const whatIsAiTopics = [
    {
        id: 'what-is-ai',
        title: 'WHAT IS AI',
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        children: [
            { label: 'What is Artificial Intelligence?', topicId: 'what-is-ai-meaning' },
            { label: 'Difference between Human Intelligence and AI', topicId: 'what-is-ai-human-vs-ai' },
            { label: 'Where do we see AI?', topicId: 'what-is-ai-everywhere' },
            { label: 'AI vs Robots (not the same!)', topicId: 'what-is-ai-vs-robots' },
            { label: 'Introduction to Smart Devices', topicId: 'what-is-ai-smart-devices' },
            { label: 'What is Data?', topicId: 'what-is-ai-data' },
            { label: 'Summary', topicId: 'what-is-ai-summary' },
            { label: 'Test', topicId: 'what-is-ai-test' },
        ],
        content: {
            heading: 'WHAT IS AI',
            text:
                'Artificial Intelligence (AI) is computer technology that finds useful patterns in information—speech, pictures, text, or game moves—and then helps complete tasks such as answering a spoken question, sorting photos, or suggesting the next video. This unit explains AI in clear steps: what the words mean, how human thinking differs from machine pattern work, where AI appears in daily life, how robots relate (and do not relate) to AI, how smart speakers work, and why data matters for learning and privacy. Each lesson adds detail so the full picture becomes easier to remember and discuss in class.',
            hubHeroImage: WHAT_IS_AI_HUB_HERO,
            aiSmartBasicsTitle: 'Artificial Intelligence — Smart Basics',
            aiDetail: {
                intro:
                    'Many cartoons show one metal character that talks, learns, and feels emotions all at once. Real technology is usually split into parts: software that recognizes patterns (AI), physical machines that move (robots), and recorded information that trains systems (data). In school and at home, AI most often appears as invisible code inside phones, apps, and speakers—not as a walking android. Learning accurate words early helps students describe what a device is actually doing instead of guessing from movie scenes.',
                analogy:
                    'Picture a huge library with millions of sticky notes on every shelf. A human librarian can read one story, understand the moral, and recommend it to a friend with a smile. An AI-style helper cannot live the story, but it can count which books are borrowed together and place similar titles near the front desk. The helper suggests; the human still reads, chooses, and decides what is appropriate for age and mood. AI in real life works more like that counting and sorting—very fast, very wide, but not the same as a full human mind.',
                keyPoints: [
                    {
                        title: 'AI learns from examples (data)',
                        body:
                            'Photos labeled “cat” or “dog,” sentences corrected by teachers, or game moves that led to wins become training material. The system adjusts internal settings until its guesses match past examples. More good data usually means better patterns—until the problem changes or the data is unfair.',
                    },
                    {
                        title: 'Humans remain responsible',
                        body:
                            'AI can draft text, suggest routes, or filter spam, but trusted adults and clear rules still govern homework honesty, health choices, money, and safety. Treat every AI answer as a draft to check, not a final authority.',
                    },
                    {
                        title: 'Robots ≠ AI (always)',
                        body:
                            'A robot arm in a factory might follow simple rules only. A music app might use AI without any moving metal body. Ask: Does it move in the physical world? Does it learn patterns from recorded data?',
                    },
                    {
                        title: 'AI is already in daily tools',
                        body:
                            'Keyboard word prediction, face grouping in galleries, game opponents, traffic maps, and video recommendations all use pattern-based software. Noticing these features builds digital awareness.',
                    },
                    {
                        title: 'Privacy and permission matter',
                        body:
                            'Smart speakers, cameras, and apps can store voice clips, locations, or contacts. Schools and families set mute rules, delete old recordings, and approve apps before class demos.',
                    },
                    {
                        title: 'Six lessons, one complete map',
                        body:
                            'Lesson 1 defines AI. Lesson 2 compares humans and machines. Lesson 3 tours everyday places. Lesson 4 separates robots from software. Lesson 5 introduces Alexa and Google Assistant safely. Lesson 6 explains data with photos, videos, and text examples.',
                    },
                ],
            },
            subtopicIntro:
                'Open the six lessons from the sidebar in order for the smoothest path, or jump to the lesson that matches today’s discussion. Each page has numbered sections with definitions, examples, and classroom habits.',
            subtopicThumbnails: {
                'what-is-ai-meaning': WHAT_IS_AI_MEANING_IMAGES.lessonThumbnail,
                'what-is-ai-human-vs-ai': WHAT_IS_AI_HUMAN_VS_AI_IMAGES.lessonThumbnail,
                'what-is-ai-everywhere': WHAT_IS_AI_EVERYWHERE_IMAGES.lessonThumbnail,
                'what-is-ai-vs-robots': WHAT_IS_AI_VS_ROBOTS_IMAGES.lessonThumbnail,
                'what-is-ai-smart-devices': WHAT_IS_AI_SMART_DEVICES_IMAGES.lessonThumbnail,
                'what-is-ai-data': WHAT_IS_AI_DATA_IMAGES.lessonThumbnail,
            },
            aiWhyLearn: [
                'AI vocabulary appears in news, ads, and classroom tools—clear definitions reduce fear and hype.',
                'Knowing where AI runs (apps, phones, speakers) supports smart habits and privacy rules.',
                'Comparing human and machine strengths encourages teamwork instead of competition.',
                'Separating robots from software prevents inaccurate homework and presentation answers.',
                'Understanding data explains why photos, messages, and voice clips matter for training and safety.',
                'Class 5 and later topics build on this foundation for coding, research, and digital ethics.',
            ],
            aiHowToStudy: [
                'Read this overview once, then complete lessons 1 through 6 using the sidebar links.',
                'Keep a notebook with three columns: “I saw this,” “Machine pattern,” “Human decision.”',
                'Bring one real example from home (speaker, game, or app) for class discussion.',
                'Practice the “two questions” from lesson 4 on any device: Does it move? Does it learn from data?',
                'After lesson 6, write a short summary paragraph in own words—no copied definitions.',
                'Review with a teacher before trying any new AI app or smart speaker demo in the lab.',
            ],
            subtopicPages: [
                {
                    topicId: 'what-is-ai-meaning',
                    label: 'What is Artificial Intelligence?',
                    emoji: '🤖',
                    description:
                        'Full meaning of AI, training from examples, voice assistants (Siri-style helpers), limits, and questions for adults.',
                },
                {
                    topicId: 'what-is-ai-human-vs-ai',
                    label: 'Difference between Human Intelligence and AI',
                    emoji: '🧠',
                    description:
                        'Side-by-side strengths: feelings, creativity, context versus speed, scale, and pattern matching—plus teamwork.',
                },
                {
                    topicId: 'what-is-ai-everywhere',
                    label: 'Where do we see AI?',
                    emoji: '📱',
                    description:
                        'Phones, games, YouTube-style recommendations, maps, filters, and how to spot pattern-based features.',
                },
                {
                    topicId: 'what-is-ai-vs-robots',
                    label: 'AI vs Robots (not the same!)',
                    emoji: '🦾',
                    description:
                        'Physical robots versus invisible AI software, combined systems, examples, and facts versus fiction.',
                },
                {
                    topicId: 'what-is-ai-smart-devices',
                    label: 'Introduction to Smart Devices',
                    emoji: '🔊',
                    description:
                        'Connected gadgets, wake words, Alexa and Google Assistant overview, privacy, and school rules.',
                },
                {
                    topicId: 'what-is-ai-data',
                    label: 'What is Data?',
                    emoji: '📊',
                    description:
                        'Photos, videos, text, and numbers as data; why AI needs many examples; personal data safety.',
                },
                {
                    topicId: 'what-is-ai-summary',
                    label: 'Summary',
                    emoji: '📋',
                    description:
                        'Review all six lessons—definitions, examples, safety habits, and key ideas before the test.',
                },
                {
                    topicId: 'what-is-ai-test',
                    label: 'Test',
                    emoji: '🏆',
                    description:
                        'Quiz on AI basics: voice assistants, human vs machine, daily AI, robots, smart devices, and data.',
                },
            ],
            sections: [
                {
                    subtitle: 'What “intelligence” means in technology',
                    image: WHAT_IS_AI_HUB_SECTION_IMAGES.intelligencePreview,
                    body:
                        'Intelligence means using information to solve problems or make useful choices. A student shows human intelligence when planning a fair test experiment, reading emotions on a friend’s face, or fixing a broken sentence in an essay. A computer shows machine intelligence when multiplying huge numbers instantly, sorting a million photos by date, or flagging suspicious email. Artificial Intelligence is a special branch of machine intelligence where the program improves its pattern guesses after seeing many training examples—not because it magically gains a soul overnight.',
                },
                {
                    subtitle: 'Patterns, predictions, and training',
                    image: WHAT_IS_AI_HUB_SECTION_IMAGES.patternsPreview,
                    body:
                        'Most classroom AI examples are predictors: What word likely comes next while typing? Which thumbnail might get another click? Which turn helped other players win? Training is the preparation phase—engineers and researchers feed labeled data (this sound means “yes,” this pixel cluster means “road”) until error rates drop. After training, the live app still only predicts from math; it does not truly understand homework, friendship, or school rules unless humans encode those limits separately.',
                },
                {
                    subtitle: 'Lesson 1 preview — defining AI',
                    image: WHAT_IS_AI_MEANING_IMAGES.lessonThumbnail,
                    body:
                        'The first sub-lesson spells out Artificial and Intelligence, walks through fruit-sorting and voice-assistant examples, and lists what AI is not (a replacement parent, a secret diary, or a guaranteed truth machine). Expect step-by-step voice flows and a checklist of questions for trusted adults.',
                },
                {
                    subtitle: 'Lesson 2 preview — human mind vs machine',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.lessonThumbnail,
                    body:
                        'The second sub-lesson builds a fair comparison chart: empathy, imagination, and social context on the human side; speed, scale, and tireless repetition on the machine side. It ends with combined workflows—doctor plus scan software, student plus spelling checker—where the human signs the final decision.',
                },
                {
                    subtitle: 'Lessons 3–4 preview — daily life and robots',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.lessonThumbnail,
                    body:
                        'Lesson 3 maps AI inside phones, games, streaming recommendations, maps, and camera filters. Lesson 4 untangles robots (bodies that move) from AI (software patterns), with movie myths versus classroom STEM kits.',
                },
                {
                    subtitle: 'Lessons 5–6 preview — speakers and data',
                    image: WHAT_IS_AI_DATA_IMAGES.lessonThumbnail,
                    body:
                        'Lesson 5 explains smart speakers: wake words, cloud processing, Alexa and Google Assistant at a high level, mute habits, and lab rules. Lesson 6 defines data as photos, videos, text, and sensor numbers; shows why huge training sets matter; and reviews personal data safety.',
                },
                {
                    subtitle: 'Curious, careful habits for every lesson',
                    image: WHAT_IS_AI_HUB_SECTION_IMAGES.safeHabitsPreview,
                    body:
                        'Healthy habits repeat across the unit: ask who built the tool, what it records, and whether school policy allows it; compare surprising answers with textbooks or trusted websites; never share passwords, addresses, or private stories with apps; give credit for human work on projects; mute microphones after demos. AI can support learning when boundaries stay clear.',
                },
            ],
        },
    },
    {
        id: 'what-is-ai-meaning',
        title: 'WHAT IS AI: ARTIFICIAL INTELLIGENCE',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'What is Artificial Intelligence?',
            text:
                'Artificial Intelligence (AI) describes computer systems built by people that learn from large collections of examples and then perform tasks such as recognizing speech, labeling images, filtering spam, or suggesting the next word while typing. The word artificial means designed and manufactured—not grown inside a biological brain. The word intelligence here means useful skill with information, not emotions or friendship. This lesson builds a clear definition, shows how training works, explores voice assistants as a familiar example, explains limits honestly, and ends with safety questions for trusted adults.',
            sections: [
                {
                    subtitle: 'A clear definition students can remember',
                    image: WHAT_IS_AI_MEANING_IMAGES.lettersAi,
                    body:
                        'A working definition for Class 4: AI is computer software (sometimes paired with chips or speakers) that finds patterns in data and makes predictions or suggestions based on those patterns after training.',
                    pointsHeading: 'Three ideas in that definition',
                    points: [
                        'Computer software — runs on devices people already use.',
                        'Patterns in data — learns from many labeled examples.',
                        'Predictions or suggestions — outputs are guesses, not guaranteed facts.',
                    ],
                    paragraphs: [
                        'AI is not automatically a talking robot. AI is not automatically correct. AI is a tool shaped by human designers, trainers, and safety rules.',
                    ],
                },
                {
                    subtitle: 'What the letters A and I stand for',
                    image: WHAT_IS_AI_MEANING_IMAGES.lettersAi,
                    body:
                        'Breaking the phrase apart prevents memorizing letters without meaning.',
                    pointsHeading: 'Artificial',
                    points: [
                        'Made by engineers, scientists, and companies—not born naturally.',
                        'Runs on hardware people manufacture: phones, laptops, servers, speakers.',
                        'Can be updated, patched, or turned off—unlike a living brain.',
                    ],
                    pointsHeading: 'Intelligence (in this unit)',
                    points: [
                        'Skill at handling information: classify, predict, translate, recommend.',
                        'Not the same as feelings, conscience, or true understanding of every joke.',
                        'Measured by task success (accuracy, speed), not by friendship.',
                    ],
                },
                {
                    subtitle: 'How AI learns from many examples',
                    image: WHAT_IS_AI_MEANING_IMAGES.learnFromExamples,
                    body:
                        'Training is the study phase before the public uses an app. Humans or tools label examples; the program adjusts internal numbers until outputs match labels often enough.',
                    pointsHeading: 'Classroom-friendly example — fruit photos',
                    points: [
                        'Step 1: Collect thousands of pictures tagged apple or orange.',
                        'Step 2: The program compares color blobs, shapes, and textures.',
                        'Step 3: On a new photo, it predicts a label with a confidence score.',
                        'Step 4: Wrong guesses mean more diverse training photos are needed.',
                    ],
                    paragraphs: [
                        'Speech assistants train on countless human recordings—different accents, volumes, and background noise. More balanced data usually improves fairness; skewed data can cause repeated mistakes for underrepresented voices.',
                    ],
                },
                {
                    subtitle: 'Voice assistants — simple everyday AI',
                    image: WHAT_IS_AI_MEANING_IMAGES.voiceAssistants,
                    body:
                        'Voice assistants (such as phone helpers that respond to spoken questions) are one of the easiest AI examples for children to observe. They show how pattern matching connects sound → text → action → spoken answer.',
                    pointsHeading: 'Typical steps inside the device and cloud',
                    points: [
                        'Microphone captures sound waves when the wake phrase or button is used.',
                        'Speech-to-text model converts audio into words using trained patterns.',
                        'Intent model decides whether the user asked for weather, music, or a timer.',
                        'Response service picks words or plays media; text-to-speech reads the reply aloud.',
                    ],
                    pointsHeading: 'Real tasks students might hear demonstrated',
                    points: [
                        '“What time is it?” — reads clock data.',
                        '“Play a study playlist.” — links to approved music services.',
                        '“How tall is Mount Everest?” — fetches facts from a connected knowledge source (still worth verifying in books).',
                    ],
                    paragraphs: [
                        'Assistants work best in quiet rooms with clear speech and stable internet. They may mishear similar words, struggle with uncommon names, or answer confidently even when wrong—another reason adults supervise use.',
                    ],
                },
                {
                    subtitle: 'What AI is good at — and what it is not',
                    image: WHAT_IS_AI_MEANING_IMAGES.toolNotPerson,
                    body:
                        'Listing limits prevents treating AI like a person or like magic.',
                    pointsHeading: 'AI is generally strong at',
                    points: [
                        'Repeating pattern tasks millions of times without boredom.',
                        'Scanning huge libraries for matches (spam, faces, similar songs).',
                        'Offering fast drafts or suggestions when rules are clear.',
                    ],
                    pointsHeading: 'AI is weak or unsafe at',
                    points: [
                        'Replacing human kindness, trust, or counseling.',
                        'Guaranteeing truth—especially on news, health, or history without sources.',
                        'Keeping secrets—data may be stored on company servers.',
                        'Knowing local school rules unless programmed explicitly.',
                    ],
                    paragraphs: [
                        'Politeness toward a speaker is good manners, but politeness does not make the machine a friend. Sensitive stories, passwords, and private photos belong with parents, teachers, or counselors—not with open microphones.',
                    ],
                },
                {
                    subtitle: 'Questions to ask a trusted adult',
                    image: WHAT_IS_AI_MEANING_IMAGES.askTrustedAdult,
                    body:
                        'A short question list turns curiosity into safe exploration.',
                    pointsHeading: 'Before using a new AI app or speaker',
                    points: [
                        'Who created this tool, and is it allowed at school?',
                        'What does it record—voice, location, contacts, camera?',
                        'Where are recordings stored, and how can they be deleted?',
                        'Does it cost money or show ads to children?',
                    ],
                    pointsHeading: 'After a surprising answer',
                    points: [
                        'Which textbook or official site confirms this fact?',
                        'Did the tool guess from patterns without real understanding?',
                        'Should the device be muted or logged out on a shared computer?',
                    ],
                    paragraphs: [
                        'Writing answers in a science notebook—definition, one example, one limit, one safety rule—helps revision before tests and projects.',
                    ],
                },
            ],
        },
    },
    {
        id: 'what-is-ai-human-vs-ai',
        title: 'WHAT IS AI: HUMAN INTELLIGENCE VS AI',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'Difference between Human Intelligence and AI',
            headingSingleLine: true,
            text:
                'Human intelligence grows through bodies, emotions, families, schools, sleep, and culture. Machine AI—as taught in Class 4—means fast pattern processing on recorded data inside computers. The two overlap in some tasks (both can play chess or translate phrases) but they differ in how learning happens, what “understanding” means, and who is responsible for final choices. This lesson compares strengths fairly, warns against myths, and shows how humans plus machines produce the best outcomes in hospitals, classrooms, and creative projects.',
            sections: [
                {
                    subtitle: 'Human intelligence — mind, body, and experience',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.humanBrainStrengths,
                    body:
                        'Human thinking is biological and social. Neurons, hormones, memory, and practice all interact.',
                    pointsHeading: 'Humans often excel at',
                    points: [
                        'Meaning and metaphor — poetry about rain differs from a rainfall chart.',
                        'Empathy — noticing when a classmate needs help without being told.',
                        'Flexible common sense — applying one kindness lesson in a new playground.',
                        'Linking senses — smell of chalk can trigger a memory of last year’s fair.',
                        'Moral reasoning with context — fairness depends on situation and culture.',
                    ],
                    paragraphs: [
                        'Human learning can be efficient from a single story: one warning about hot stoves teaches caution in many kitchens. Humans also forget, daydream, and get tired—normal limits, not failures.',
                    ],
                },
                {
                    subtitle: 'AI intelligence — patterns at enormous scale',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.computerStrengths,
                    body:
                        'Machine AI in school examples usually means software trained on huge datasets.',
                    pointsHeading: 'Computers and AI often excel at',
                    points: [
                        'Speed — millions of math operations per second.',
                        'Scale — comparing every pixel in a million photos overnight.',
                        'Consistency — the same rule applied the same way each time (when data fits).',
                        'Tireless repetition — checking spelling on long documents without losing focus.',
                        'Detecting faint patterns — cracks in metal, spam keywords, unusual bank charges.',
                    ],
                    paragraphs: [
                        'AI does not need sleep, but it also does not automatically care about truth or kindness unless humans design checks. When data changes (new slang, new road), old patterns may fail until retraining occurs.',
                    ],
                },
                {
                    subtitle: 'Feelings, creativity, and social context',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.feelingsCreativity,
                    body:
                        'Art, music, drama, and ethical debates connect to lived experience. AI tools can remix styles seen in training data—generate cartoon filters, suggest rhymes, or imitate painters—but the machine does not genuinely feel joy, grief, or stage fright.',
                    pointsHeading: 'Why context matters',
                    points: [
                        'Laughter at a comedy club is appropriate; laughter during a memorial is not—humans read the room.',
                        'Sarcasm and idioms confuse literal pattern systems unless specially trained.',
                        'Creative class projects should stay human-led; AI may assist research only with teacher permission and citation rules.',
                    ],
                    paragraphs: [
                        'A fair sentence for tests: “AI can imitate style; humans supply lived meaning.”',
                    ],
                },
                {
                    subtitle: 'Speed, memory, and types of forgetting',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.speedMemory,
                    body:
                        'Comparison is not about declaring a winner—it is about picking the right helper.',
                    pointsHeading: 'Memory contrast',
                    points: [
                        'AI can store exact formulas and retrieve them instantly tomorrow—until an update changes the file.',
                        'Humans may forget a password yet remember how to ride a bicycle after years—procedural memory in muscles.',
                        'Humans connect autobiographical memories (birthday parties) with emotion; machines store copies unless programmed otherwise.',
                    ],
                    pointsHeading: 'Task fit examples',
                    points: [
                        'Machine-friendly: scanning thousands of multiple-choice sheets for wrong bubbles.',
                        'Human-friendly: comforting a nervous presenter before speech day.',
                        'Combined: AI highlights grammar issues; human fixes tone to stay respectful.',
                    ],
                },
                {
                    subtitle: 'Myths to avoid in homework and presentations',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.feelingsCreativity,
                    body:
                        'Clear myths keep answers accurate.',
                    points: [
                        'Myth: “AI thinks exactly like a human brain.” Fact: AI uses different math structures; brains are not copied byte for byte.',
                        'Myth: “If AI is smarter, humans are useless.” Fact: Humans set goals, values, and final decisions.',
                        'Myth: “AI has emotions because it says ‘I’m sad.’” Fact: Words are generated from patterns, not felt mood.',
                    ],
                },
                {
                    subtitle: 'Best results when human and machine work together',
                    image: WHAT_IS_AI_HUMAN_VS_AI_IMAGES.humanPlusMachine,
                    body:
                        'Modern workplaces and hospitals combine both sides deliberately.',
                    pointsHeading: 'Example workflows',
                    points: [
                        'Medicine — scan software marks suspicious areas; doctors interpret with training and patient history.',
                        'Writing — spelling and grammar tools flag issues; students revise ideas and citations themselves.',
                        'Environment — satellite AI estimates deforestation; humans pass laws and plant trees.',
                        'Accessibility — speech-to-text helps hearing support; humans choose final lesson materials.',
                    ],
                    paragraphs: [
                        'Class activity: draw a three-column chart—Tasks for humans / Tasks for AI / Tasks for both—and fill five rows from school life. Update the chart yearly as tools change.',
                    ],
                },
            ],
        },
    },
    {
        id: 'what-is-ai-everywhere',
        title: 'WHAT IS AI: WHERE DO WE SEE AI?',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'Where do we see AI?',
            text:
                'AI often hides inside familiar icons—a keyboard, a game controller, a video app, or a camera. Recognizing these features helps explain why content feeds change, why opponents adapt, or why photos group faces automatically. This lesson walks through phones and tablets, games, YouTube-style recommendations, maps and traffic tools, and creative filters, always tying each feature back to data, patterns, and human choice.',
            sections: [
                {
                    subtitle: 'Why AI feels invisible',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.phonesTablets,
                    body:
                        'Companies rarely label every pattern system as “AI” on the home screen. Instead, features appear as autocomplete, “For you” rows, or “Enhance” buttons. Invisibility does not mean magic—it means engineers embedded models inside products people already trust.',
                    points: [
                        'Spotting AI starts with curiosity: What prediction is happening here?',
                        'What data might have trained it (past clicks, photos, messages)?',
                        'Who can turn the feature off in settings?',
                    ],
                },
                {
                    subtitle: 'Phones and tablets — daily pocket examples',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.phonesTablets,
                    body:
                        'Mobile devices pack several pattern systems into one screen.',
                    pointsHeading: 'Common features',
                    points: [
                        'Keyboard prediction — suggests next word from typing history and general language statistics.',
                        'Voice typing — converts speech to text with trained audio models.',
                        'Photo galleries — cluster faces, pets, or trips using image pattern matching.',
                        'Night camera modes — brighten dark shots using trained noise reduction.',
                        'Spam call labeling — compares numbers and phrases to known scam patterns.',
                    ],
                    paragraphs: [
                        'Settings menus list permissions (camera, mic, contacts). Reviewing permissions is part of digital citizenship, not only AI study.',
                    ],
                },
                {
                    subtitle: 'Games and interactive apps',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.gamesApps,
                    body:
                        'Games use AI-style opponents and adaptive difficulty to keep play challenging but not impossible.',
                    pointsHeading: 'Patterns in play',
                    points: [
                        'Opponent bots — aim, dodge, or build strategies from trained game logs.',
                        'Dynamic difficulty — adjusts speed or enemy strength when players win or lose often.',
                        'Procedural content — some apps generate levels from rules learned across many players.',
                    ],
                    paragraphs: [
                        'The game does not “feel” victory; it changes variables (health, speed, spawn rate). Discussing that difference builds critical thinking about advertisements that claim “lifelike AI characters.”',
                    ],
                },
                {
                    subtitle: 'Video, music, and recommendation feeds',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.recommendations,
                    body:
                        'Streaming platforms (including YouTube-style sites) suggest what to watch next using watch history, likes, skips, and similar accounts.',
                    pointsHeading: 'How the loop works',
                    points: [
                        'Data in — which videos were watched, paused, or skipped.',
                        'Pattern model — predicts engagement if another similar clip is shown.',
                        'Feed out — autoplay and rows labeled “Up next” or “For you.”',
                    ],
                    pointsHeading: 'Healthy human actions',
                    points: [
                        'Search new subjects on purpose (science demos, craft tutorials, sports skills).',
                        'Follow educational channels teachers recommend.',
                        'Turn off endless autoplay when focus is required for homework.',
                    ],
                    paragraphs: [
                        'Recommendation AI optimizes attention; it does not automatically optimize learning goals. Humans steer the feed toward quality.',
                    ],
                },
                {
                    subtitle: 'Maps, traffic, and translation helpers',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.mapsTraffic,
                    body:
                        'Navigation apps estimate arrival times using traffic speeds reported from many phones, accidents, weather, and road closures. Camera translation overlays match letters and phrases to dictionaries and grammar models.',
                    pointsHeading: 'Strengths',
                    points: [
                        'Fast rerouting when a highway closes.',
                        'Readable signs in another language during travel projects.',
                    ],
                    pointsHeading: 'Limits',
                    points: [
                        'Pedestrian safety still needs human attention to cars and local signs.',
                        'Rare dialects or handwriting may translate poorly—verify with a teacher.',
                    ],
                },
                {
                    subtitle: 'Cameras, filters, and edited reality',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.camerasFilters,
                    body:
                        'Portrait modes detect people and blur backgrounds. Social filters add objects, makeup, or age effects using image models trained on many faces.',
                    pointsHeading: 'Classroom habits',
                    points: [
                        'Label AI-enhanced images when teachers require honesty in projects.',
                        'Compare filtered photos with originals to discuss beauty standards and trust.',
                        'Ask whether a viral image might be generated or edited before sharing.',
                    ],
                    paragraphs: [
                        'Creativity and fun are valid; so is truthfulness. AI filters are tools, not proof of real events.',
                    ],
                },
                {
                    subtitle: 'Quick checklist — “Is this AI?”',
                    image: WHAT_IS_AI_EVERYWHERE_IMAGES.recommendations,
                    body:
                        'Students can run through four questions on any app feature:',
                    points: [
                        'Does it predict or suggest based on past data?',
                        'Was it trained on many examples rather than one manual rule?',
                        'Can it adapt when habits change?',
                        'Does a human still choose whether to accept the suggestion?',
                    ],
                    paragraphs: [
                        'If most answers are yes, the feature likely uses AI-style pattern learning—even if the marketing label says only “smart” or “auto.”',
                    ],
                },
            ],
        },
    },
    {
        id: 'what-is-ai-vs-robots',
        title: 'WHAT IS AI: AI VS ROBOTS',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'AI vs Robots (not the same!)',
            text:
                'Movies often show one character that talks, walks, and “feels” simultaneously. In real engineering, the words separate: robots are physical systems that sense and move; AI is often invisible software that learns patterns from data. Some products combine both; many use only one. This lesson defines each term, gives classroom examples, compares systems with and without AI, and contrasts fiction with school-safe lab robots.',
            sections: [
                {
                    subtitle: 'Two vocabulary words, two different jobs',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.whatIsRobot,
                    body:
                        'Using the wrong word in a test answer mixes categories. Precision earns marks and respect in STEM fairs.',
                    points: [
                        'Robot → usually hardware that moves or manipulates objects in the physical world.',
                        'AI → usually software (and data) that predicts, classifies, or generates information.',
                        'Combined product → robot body + AI models (optional).',
                    ],
                },
                {
                    subtitle: 'What is a robot?',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.whatIsRobot,
                    body:
                        'Robots include factory arms, warehouse carts, vacuum cleaners that roam floors, drone toys, and rover kits in STEM clubs.',
                    pointsHeading: 'Core parts',
                    points: [
                        'Sensors — touch, distance, camera, gyroscope.',
                        'Brain board — runs code (simple rules or learned models).',
                        'Actuators — motors, wheels, grippers, lights.',
                        'Power — batteries or cables.',
                    ],
                    pointsHeading: 'Decision types',
                    points: [
                        'Rule-based — “if bump sensor, then turn left” (no learning required).',
                        'AI-based — camera finds a line or object using trained models.',
                    ],
                    paragraphs: [
                        'Movement in space is the usual classroom test: if it has no body, calling it a robot is usually inaccurate.',
                    ],
                },
                {
                    subtitle: 'What is AI software?',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.whatIsAiSoftware,
                    body:
                        'AI can live entirely inside apps and servers.',
                    pointsHeading: 'Examples without wheels',
                    points: [
                        'Spam filters studying word patterns in email.',
                        'Recommendation engines on video sites.',
                        'Chat helpers that predict text replies from huge sentence datasets.',
                        'Medical software flagging odd pixels in X-rays (human doctor still decides).',
                    ],
                    paragraphs: [
                        'News headlines that say “AI robot” often shorten two layers into one catchy phrase—readers should split the meaning.',
                    ],
                },
                {
                    subtitle: 'When robot bodies and AI minds combine',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.bodyAndMind,
                    body:
                        'Modern devices may stack both layers.',
                    pointsHeading: 'Combined examples',
                    points: [
                        'Delivery drones — cameras + route models + motors.',
                        'Hospital carts — map AI + obstacle sensors.',
                        'Space rovers — rock image classifiers + arm controls.',
                    ],
                    pointsHeading: 'Two diagnostic questions',
                    points: [
                        'Does it move or act physically? → robot aspect.',
                        'Does it learn or predict from large datasets? → AI aspect.',
                    ],
                    paragraphs: [
                        'A dancing toy following a fixed choreography is a robot with simple rules, not necessarily AI.',
                    ],
                },
                {
                    subtitle: 'Comparison table for notebooks',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.withAndWithoutAi,
                    body:
                        'Copy and extend this table in notes:',
                    pointsHeading: 'Robot without learned AI models',
                    points: [
                        'Timed dance toy — repeats stored moves.',
                        'Line-following STEM car — reads dark strips with sensors.',
                        'Vending machine — releases item on button press.',
                    ],
                    pointsHeading: 'AI without robot body',
                    points: [
                        'Phone keyboard suggestions.',
                        'Language translation app.',
                        'Photo “enhance” filter.',
                    ],
                    pointsHeading: 'Both together',
                    points: [
                        'Research rover on another planet.',
                        'Some warehouse sorting arms with vision systems.',
                    ],
                },
                {
                    subtitle: 'Movies versus real school robots',
                    image: WHAT_IS_AI_VS_ROBOTS_IMAGES.moviesVsReal,
                    body:
                        'Fiction skips safety testing, power limits, and ethics boards.',
                    pointsHeading: 'Movie shortcuts',
                    points: [
                        'Instant learning of every language overnight.',
                        'Human-like emotions with no training data shown.',
                        'No battery charging or repair scenes.',
                    ],
                    pointsHeading: 'Real lab focus',
                    points: [
                        'Small tasks — maze solve, pick-and-place, color sorting.',
                        'Adult supervision, safety glasses, taped boundaries.',
                        'Honest labels in posters: rule-based vs AI vision.',
                    ],
                    paragraphs: [
                        'Enjoy stories, then write two sentences in science notebooks: “Fact from class” and “Fiction from film.”',
                    ],
                },
            ],
        },
    },
    {
        id: 'what-is-ai-smart-devices',
        title: 'WHAT IS AI: SMART DEVICES',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'Introduction to Smart Devices',
            text:
                'Smart devices connect to the internet, receive updates, and often include microphones, speakers, cameras, or home-automation controls managed by apps. Voice assistants such as Alexa and Google Assistant are famous examples that use AI speech models. This lesson explains what “smart” means, how wake words work, what happens in the cloud, how privacy settings help, and which habits schools expect during demonstrations.',
            sections: [
                {
                    subtitle: 'What makes a device “smart”',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.smartDevice,
                    body:
                        '“Smart” usually means connected and updatable—not automatically wise or kind.',
                    pointsHeading: 'Traits of smart gadgets',
                    points: [
                        'Network link — Wi‑Fi or Bluetooth to routers and phones.',
                        'Remote control — apps switch lights, locks, or speakers.',
                        'Cloud services — heavy AI processing may run on distant servers.',
                        'Firmware updates — companies patch bugs or add features later.',
                    ],
                    pointsHeading: 'Examples at home or school demos',
                    points: [
                        'Smart bulbs scheduled for energy projects.',
                        'Thermostats learning weekly schedules (pattern-based).',
                        'Speakers answering spoken questions with AI speech models.',
                    ],
                    paragraphs: [
                        'A pocket calculator can be powerful but is not “smart” in this sense if it never connects or updates online.',
                    ],
                },
                {
                    subtitle: 'Wake words and when microphones listen',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.wakeWord,
                    body:
                        'Speakers often wait for a short phrase—brand name or custom word—before sending full commands to the cloud. That design saves power and reduces accidental recordings, but hardware microphones still exist.',
                    pointsHeading: 'What students should know',
                    points: [
                        'Wake phrase ≠ entire conversation stored forever, but short clips may be logged for improvement unless settings opt out (with adult help).',
                        'Mute buttons and power switches are real controls—use them after class demos.',
                        'Covering a camera or unplugging a speaker ends many risks instantly.',
                    ],
                    paragraphs: [
                        'Shared bedrooms and labs need extra caution: no secret passwords, addresses, or medical details spoken near open mics.',
                    ],
                },
                {
                    subtitle: 'Alexa and Google Assistant — clear overview',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.alexaAssistant,
                    body:
                        'Both families connect speakers to calendars, music, reminders, smart home gadgets, and trivia—through phone apps and voice.',
                    pointsHeading: 'Similar flow',
                    points: [
                        'Wake word or button → microphone on.',
                        'Audio sent (often encrypted) to company servers.',
                        'Speech-to-text + intent detection models run.',
                        'Answer or action returns to the speaker or linked phone.',
                    ],
                    pointsHeading: 'Differences students might notice',
                    points: [
                        'App names, voice tones, and supported smart home brands vary.',
                        'Languages and regional features depend on country settings.',
                        'School accounts should never store personal passwords on shared tablets.',
                    ],
                    paragraphs: [
                        'Class demos work best with teacher-written command lists (timers, spelling words, approved facts) instead of free chat during lessons.',
                    ],
                },
                {
                    subtitle: 'Privacy settings and permission screens',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.privacyPermission,
                    body:
                        'Digital citizenship includes reading permission pop-ups instead of tapping “allow” automatically.',
                    pointsHeading: 'Review with an adult',
                    points: [
                        'Voice history — listen, delete old clips.',
                        'Location — turn off if not needed for the task.',
                        'Contacts and calendars — grant only when the feature requires them.',
                        'Purchase voice shopping — disable for child profiles.',
                    ],
                    paragraphs: [
                        'A calculator app should not demand contact lists. A map app may need location for traffic—justify each permission.',
                    ],
                },
                {
                    subtitle: 'Classroom and lab rules (sample list)',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.classroomRules,
                    body:
                        'Schools adapt rules; below is a template teachers can post near devices.',
                    points: [
                        'Demo only when a teacher starts the session and ends with mute/power off.',
                        'No recording classmates’ voices or names into assistants.',
                        'Use school Wi‑Fi policies; no personal accounts on shared PCs.',
                        'Report odd or rude answers immediately—do not treat them as jokes to share online.',
                        'Rotate topics: timers, definitions, approved songs—not open gossip.',
                    ],
                    paragraphs: [
                        'Respect for classmates concentrating matters more than showing off tricks.',
                    ],
                },
                {
                    subtitle: 'Safe alternatives when speakers are not allowed',
                    image: WHAT_IS_AI_SMART_DEVICES_IMAGES.smartDevice,
                    body:
                        'If policy blocks live microphones, learning can continue with diagrams, printed command flows, and videos teachers approve. Students still draw the path: sound → text → pattern model → answer. The concept matters even when hardware is absent.',
                },
            ],
        },
    },
    {
        id: 'what-is-ai-data',
        title: 'WHAT IS AI: WHAT IS DATA?',
        hideFromSidebar: true,
        category: 'ai',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'What is Data?',
            text:
                'Data is recorded information stored and processed by machines. Photos, videos, text messages, temperature readings, and mouse clicks all count. AI systems need large amounts of relevant data to learn patterns; poor or unfair data creates poor or unfair results. This lesson defines data with kid-clear examples, explores each media type, explains training scale, and reviews personal data safety for school and home.',
            sections: [
                {
                    subtitle: 'Data = information machines can store',
                    image: WHAT_IS_AI_DATA_IMAGES.dataIsInformation,
                    body:
                        'If it can be saved on a drive or sent across a network, it is probably data.',
                    pointsHeading: 'Forms students already create',
                    points: [
                        'Typed homework files.',
                        'Drawings saved as PNG or JPEG.',
                        'Voice memos and video clips.',
                        'Spreadsheet tables for science measurements.',
                    ],
                    pointsHeading: 'How computers store it',
                    points: [
                        'Binary digits (bits) for all content.',
                        'Metadata — dates, file names, camera settings.',
                        'Tags and labels added by humans or apps.',
                    ],
                    paragraphs: [
                        'No data → nothing to train. Messy data → confused AI. Balanced, legal, respectful data → healthier outcomes.',
                    ],
                },
                {
                    subtitle: 'Photos as data',
                    image: WHAT_IS_AI_DATA_IMAGES.photosData,
                    body:
                        'A digital photo is a grid of pixels, each with color numbers.',
                    pointsHeading: 'Training use',
                    points: [
                        'Labels like cat, cloud, crack, or leaf teach classifiers.',
                        'Face grouping links similar portraits—shows pattern power and privacy risk.',
                    ],
                    pointsHeading: 'Habits',
                    points: [
                        'Think before uploading classmates’ faces to public sites.',
                        'Crop sensitive backgrounds (house numbers, name tags) when possible.',
                    ],
                },
                {
                    subtitle: 'Videos as data',
                    image: WHAT_IS_AI_DATA_IMAGES.videosData,
                    body:
                        'Video combines many image frames per second plus audio tracks.',
                    pointsHeading: 'Why platforms study video data',
                    points: [
                        'Watch time and skip points predict the next recommendation.',
                        'Editing tools track motion to stabilize shaky hands.',
                    ],
                    pointsHeading: 'Storage lesson',
                    points: [
                        'One minute of HD video can exceed hundreds of photos in size—cleanup and backup matter on school laptops.',
                    ],
                },
                {
                    subtitle: 'Text and numbers as data',
                    image: WHAT_IS_AI_DATA_IMAGES.textNumbersData,
                    body:
                        'Every message, essay, search box entry, and quiz score can become text or numeric data.',
                    pointsHeading: 'Examples',
                    points: [
                        'Spelling tools compare words to dictionaries and huge phrase lists.',
                        'Weather stations log temperature streams for graphs.',
                        'Fitness bands count steps as number series.',
                    ],
                    paragraphs: [
                        'Graphs turn numbers into stories humans read; AI can spot trends humans might miss when lists are enormous.',
                    ],
                },
                {
                    subtitle: 'Why AI needs so many examples',
                    image: WHAT_IS_AI_DATA_IMAGES.aiNeedsExamples,
                    body:
                        'Pattern learning is statistical. Rare cases need many samples or explicit human rules.',
                    pointsHeading: 'Problems when data is thin or biased',
                    points: [
                        'Face unlock failing for underrepresented groups if training photos lacked diversity.',
                        'Translation errors for dialects with few written samples.',
                        'History answers sounding one-sided if textbooks in training omitted regions.',
                    ],
                    pointsHeading: 'What responsible teams do',
                    points: [
                        'Collect diverse, permission-based datasets.',
                        'Document sources and limits.',
                        'Test before public release and patch when harm appears.',
                    ],
                },
                {
                    subtitle: 'Personal data and protection habits',
                    image: WHAT_IS_AI_DATA_IMAGES.personalDataSafe,
                    body:
                        'Personal data identifies or describes a private life.',
                    pointsHeading: 'Examples to protect',
                    points: [
                        'Full name, home address, school name combined with class details.',
                        'Passwords, OTP codes, bank or ID numbers.',
                        'Private photos, medical notes, diary entries.',
                    ],
                    pointsHeading: 'Protection habits',
                    points: [
                        'Strong passwords and locked screens on shared devices.',
                        'Ask adults before joining new apps that scan contacts.',
                        'Report bullying or creepy messages—screenshots with teacher help.',
                        'Prefer minimal sharing: AI services should collect only what they need; students can also share less.',
                    ],
                    paragraphs: [
                        'Unit closing thought: AI power grows with data; human judgment grows with ethics, sleep, and practice—both belong in a modern classroom.',
                    ],
                },
            ],
        },
    },
    {
        id: 'what-is-ai-summary',
        title: 'WHAT IS AI: SUMMARY',
        hideFromSidebar: true,
        category: 'ai',
        icon: <FileText className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'WHAT IS AI — Summary of All Lessons',
            text:
                'This page brings together every idea from the WHAT IS AI unit: the main overview, all six lessons, and habits for safe, curious learning. Read each card slowly like a study guide, then try the test when you feel ready.',
            summaryIntro: [
                'Welcome to your WHAT IS AI review! You studied how computers find patterns in data, how that differs from human thinking, where AI appears in phones and games, why robots are not the same as AI software, how smart speakers work, and why photos and messages count as data. This summary helps you remember the big picture before the test.',
                'Use the sidebar to reopen any lesson if a card feels tricky. The best review habit is to explain one example from home—a voice assistant, a game opponent, or a video recommendation—in your own words to a friend or teacher.',
            ],
            summaryChecklist: [
                'Define Artificial Intelligence in one sentence using the words patterns, data, and predictions.',
                'Give two examples of human strengths and two examples of machine strengths from the human vs AI lesson.',
                'Name three places you see AI in daily life (phone, game, or app examples count).',
                'Explain the difference between a robot (moves in the physical world) and AI software (learns patterns—may have no body).',
                'Describe what a wake word is and one privacy habit for smart speakers like Alexa or Google Assistant.',
                'Define data with examples: at least one photo, one video, and one text example.',
                'List two safety rules: ask a trusted adult before new apps, and never share passwords with microphones or chatbots.',
            ],
            summaryRows: [
                {
                    topic: 'What is Artificial Intelligence?',
                    emoji: '🤖',
                    outcome:
                        'Artificial Intelligence means computer software that learns from many examples (data) and then makes predictions or suggestions—such as turning speech into text, sorting photos, or suggesting the next word while typing. “Artificial” means made by people; “intelligence” here means useful skill with information, not real feelings. Voice assistants are a familiar example: microphone → speech patterns → answer. AI is a tool, not a person, and adults still check important facts.',
                    highlights: [
                        'Training uses labeled examples (cat photos, corrected sentences, game moves).',
                        'Voice assistants: wake phrase, speech-to-text, intent, spoken reply.',
                        'AI is strong at speed and repetition; weak at kindness, truth without sources, and keeping secrets.',
                        'Always ask a trusted adult who built a tool, what it records, and whether school allows it.',
                    ],
                },
                {
                    topic: 'Difference between Human Intelligence and AI',
                    emoji: '🧠',
                    outcome:
                        'Human intelligence grows through emotions, culture, senses, and lived experience. People excel at empathy, creativity, metaphor, and moral context. Machine AI excels at speed, scale, tireless pattern matching, and scanning huge datasets. AI can imitate words but does not genuinely feel joy or grief. Best results come from teamwork: doctors plus scan software, students plus spelling checkers—humans make the final decision.',
                    highlights: [
                        'Humans: empathy, flexible common sense, linking memories with emotion.',
                        'Machines: millions of operations per second, consistent rules, faint pattern detection.',
                        'Myth to avoid: “AI thinks exactly like a human brain.”',
                        'Class activity: chart tasks for humans, for AI, and for both together.',
                    ],
                },
                {
                    topic: 'Where do we see AI?',
                    emoji: '📱',
                    outcome:
                        'AI often hides inside familiar tools—not always labeled “AI” on the screen. Phones use keyboard prediction, voice typing, photo face grouping, and spam call labeling. Games use adaptive opponents and difficulty. YouTube-style apps recommend videos from watch history and skips. Maps estimate traffic; camera apps blur backgrounds and apply filters. Ask: Does it predict from past data? Was it trained on many examples? Does a human still choose?',
                    highlights: [
                        'Phones: word prediction, galleries, night camera modes.',
                        'Games: bots, dynamic difficulty, procedural levels.',
                        'Recommendations: “For you” rows optimize attention—humans steer toward learning goals.',
                        'Healthy habits: turn off endless autoplay for homework; search new subjects on purpose.',
                    ],
                },
                {
                    topic: 'AI vs Robots (not the same!)',
                    emoji: '🦾',
                    outcome:
                        'Robots are physical systems with sensors, motors, and actuators that move or manipulate objects. AI is often invisible software that classifies, predicts, or generates from data. Some products combine both (delivery drones, rovers); many use only one layer. A dancing toy with fixed choreography may be a robot without learned AI. A music app may use AI with no metal body. Two questions: Does it move physically? Does it learn from large datasets?',
                    highlights: [
                        'Robot without AI: line-following car, timed dance toy, vending machine.',
                        'AI without robot: keyboard suggestions, translation apps, spam filters.',
                        'Both together: research rovers, warehouse arms with vision.',
                        'Movies skip safety limits—classroom robots do small, supervised tasks.',
                    ],
                },
                {
                    topic: 'Introduction to Smart Devices',
                    emoji: '🔊',
                    outcome:
                        'Smart devices connect to the internet, receive updates, and often include microphones or cameras managed by apps. “Smart” means connected and updatable—not automatically wise. Wake words (brand names) trigger cloud processing for Alexa and Google Assistant: audio → text → intent → action → spoken reply. Review voice history, mute after demos, and never speak passwords or private stories near open microphones. Schools use teacher-written command lists for safe demos.',
                    highlights: [
                        'Traits: Wi‑Fi, remote apps, cloud AI, firmware updates.',
                        'Wake word saves power but microphones still exist—use mute and unplug when done.',
                        'Privacy: delete old voice clips, disable voice shopping on child profiles.',
                        'Lab rules: demo only with teacher, no recording classmates, report odd answers.',
                    ],
                },
                {
                    topic: 'What is Data?',
                    emoji: '📊',
                    outcome:
                        'Data is recorded information machines can store and process: photos (pixel grids), videos (frames plus audio), text messages, numbers from sensors, and click history. AI needs large, diverse, permission-based datasets to learn patterns; thin or biased data causes repeated mistakes. Personal data—name with address, passwords, private photos—must be protected with strong passwords, locked screens, and adult permission before new apps.',
                    highlights: [
                        'Photos: labeled training for classifiers; face grouping shows power and privacy risk.',
                        'Videos: large files; platforms study watch time for recommendations.',
                        'Text and numbers: spelling tools, weather logs, step counters.',
                        'Protection: share less, report bullying with teacher help, minimal app permissions.',
                    ],
                },
            ],
            summaryFooter: [
                'If you can explain each card without reading it word-for-word, you are ready for the WHAT IS AI test. Revisit any lesson from the sidebar for pictures and step-by-step sections.',
                'After the test, keep noticing AI in daily life with the two-question habit: Does it move? Does it learn from data? That curiosity will help you in Class 5 and beyond.',
            ],
            sections: [],
        },
    },
    {
        id: 'what-is-ai-test',
        title: 'WHAT IS AI: TEST',
        hideFromSidebar: true,
        category: 'ai',
        icon: <ClipboardCheck className="w-5 h-5 text-purple-600" />,
        content: {
            heading: 'WHAT IS AI — Test (8 Questions)',
            text:
                'Answer all questions from the WHAT IS AI unit—definitions, voice assistants, human vs machine, daily examples, robots, smart devices, and data. Submit when finished. Subscribe to unlock full answer feedback and scoring.',
            quizQuestions: [
                {
                    question:
                        'What is the best Class 4 definition of Artificial Intelligence (AI)?',
                    options: [
                        'Computer software that learns patterns from data and makes predictions or suggestions',
                        'A metal robot that automatically has human feelings',
                        'Any device that plugs into the wall',
                        'Magic that never makes mistakes',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Voice assistants (like phone helpers that answer spoken questions) are a good example of AI because they:',
                    options: [
                        'Convert speech to text and choose actions using trained patterns',
                        'Replace parents and teachers completely',
                        'Work only without electricity or internet',
                        'Never mishear similar words',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Which pair shows a human strength versus a typical machine AI strength?',
                    options: [
                        'Empathy and moral context vs speed and scanning huge datasets',
                        'Both only excel at sleeping and dreaming',
                        'Humans multiply millions of numbers faster than any computer',
                        'Machines always understand every joke and sarcasm',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Where might you see AI-style pattern learning in everyday life?',
                    options: [
                        'Keyboard word suggestions, game opponents, and video recommendations',
                        'Only inside science-fiction movies',
                        'Nowhere—AI is not used in phones or apps yet',
                        'Only when a robot walks down the school corridor',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Which statement about robots and AI is most accurate?',
                    options: [
                        'Robots move in the physical world; AI is often software—some products use both',
                        'Robot and AI always mean exactly the same thing',
                        'Every app on a phone is automatically a walking robot',
                        'AI must always have arms and wheels to work',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Smart speakers such as Alexa or Google Assistant usually start listening for a full command after:',
                    options: [
                        'A wake word or button press sends audio for cloud processing',
                        'They secretly record every conversation all day with no controls',
                        'The student shares their password aloud',
                        'The device grows a biological brain overnight',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'Which examples are all types of data that machines can store?',
                    options: [
                        'A digital photo, a video clip, and a typed message',
                        'Only feelings that cannot be written down',
                        'Only paper notebooks that never touch a computer',
                        'Only robot wheels and motors with no files',
                    ],
                    correctOptionIndex: 0,
                },
                {
                    question:
                        'What is the safest habit when using AI apps or smart speakers at school or home?',
                    options: [
                        'Ask a trusted adult about permissions, mute mics after use, and never share passwords',
                        'Share your full address and OTP codes to test if the AI is smart',
                        'Believe every answer without checking books or teachers',
                        'Install unknown apps without permission to win a fake prize',
                    ],
                    correctOptionIndex: 0,
                },
            ],
            sections: [],
        },
    },
];
