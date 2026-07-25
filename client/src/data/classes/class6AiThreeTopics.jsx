import React from 'react';
import { Sparkles } from 'lucide-react';
import {
    AI3_HUB_HERO,
    AI3_ML,
    AI3_TRAIN,
    AI3_PATTERN,
    AI3_DATA,
    AI3_ALGO,
} from './class6AiThreeImages';

const aiIcon = <Sparkles className="w-5 h-5 text-violet-600" />;

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

/** Class 6 (g) — AI-3 hub + five ML basics sub-lessons. */
export const aiThreeTopics = [
    {
        id: 'ai-3',
        title: 'AI-3',
        category: 'ai',
        icon: aiIcon,
        children: [
            { label: 'What is Machine Learning? (learning from examples)', topicId: 'ai-3-machine-learning' },
            { label: 'Training vs Testing (like practice and exam)', topicId: 'ai-3-training-testing' },
            { label: 'Pattern Recognition (finding similarities)', topicId: 'ai-3-pattern-recognition' },
            { label: 'Good Data vs Bad Data (why quality matters)', topicId: 'ai-3-good-bad-data' },
            { label: 'Simple Algorithm Idea (step-by-step thinking)', topicId: 'ai-3-simple-algorithm' },
        ],
        content: {
            heading: 'AI-3',
            text:
                'Class 6 AI-3 explains Basic AI Working in kid-friendly language: how machines learn from examples, practice before exams, spot patterns, need good data, and follow step-by-step algorithms—building on AI-2 from Class 5.',
            hubHeroImage: AI3_HUB_HERO,
            unitTitle: 'AI-3 — Basic AI Working (Simplified)',
            firstLessonId: 'ai-3-machine-learning',
            firstLessonLabel: 'What is Machine Learning?',
            badgeLabel: 'AI Adventures',
            unitDetail: {
                intro:
                    'You already met AI in phones, games, and apps (Class 5 AI-2). AI-3 goes one level deeper—without heavy maths. Machine Learning means the program improves after seeing many examples, like you getting better at spelling after practice lists. Training is practice; testing is the exam. Pattern recognition is spotting “these photos all have cats.” Good data teaches fair lessons; bad data teaches silly mistakes. Simple algorithms are the step lists underneath it all.',
                analogy:
                    'Imagine teaching a robot friend to sort fruit. You show 100 apples and 100 oranges (training). You hide labels and ask “What is this?” (testing). The robot notices patterns—round red vs round orange skin. If you accidentally label a tomato as apple, that bad data confuses it. Your written sorting steps are the algorithm the robot tries to improve.',
                keyPoints: [
                    { title: 'Machine Learning', body: 'Learn from examples instead of only fixed rules.' },
                    { title: 'Training vs Testing', body: 'Practice data teaches; test data checks if learning worked on new items.' },
                    { title: 'Patterns', body: 'AI finds similarities—shapes, words, sounds—in large datasets.' },
                    { title: 'Data quality', body: 'Wrong labels or biased examples produce wrong AI behaviour.' },
                    { title: 'Algorithms', body: 'Clear steps still matter—ML adjusts numbers inside those steps.' },
                ],
            },
            unitWhyLearn: [
                'Understand news and ads about “AI learning” without fear or magic thinking.',
                'Connect to Algorithms topic—code plus data work together.',
                'Build safe habits: question surprising AI answers; protect personal data.',
                'Prepare for Class 7–9 coding and deeper AI units.',
            ],
            unitHowToStudy: [
                'Read lessons in sidebar order; draw one cartoon for each idea.',
                'Try classroom demos: sort cards, then hide labels and test a friend.',
                'Write three examples of good vs bad training data from daily life.',
                'Link each AI-3 lesson back to one AI-2 example (face unlock, recommendations).',
            ],
            sections: [
                section('Machine Learning in one sentence', 'Programs that get better after seeing many labeled examples.', AI3_ML),
                section('Practice vs exam', 'Training set vs test set—never peek at exam answers while studying.', AI3_TRAIN),
                section('Patterns everywhere', 'Same shape, same word, same voice tone—patterns are clues.', AI3_PATTERN),
            ],
        },
    },
    subLesson(
        'ai-3-machine-learning',
        'What is Machine Learning?',
        'What is Machine Learning?',
        'Machine Learning (ML) is a type of AI where software improves its guesses after studying many examples—not because a human typed every possible answer.',
        [
            section(
                'Learning from examples',
                'Traditional program: teacher writes every rule (“if email has ALL CAPS, mark spam”).\n\nMachine Learning: show 10,000 spam and 10,000 normal emails; computer finds patterns itself.\n\nMore good examples usually mean better guesses.',
                AI3_ML
            ),
            section(
                'Where kids see ML',
                'Keyboard word suggestions after you type many messages.\n\nVideo sites recommending next clip based on watch history.\n\nPhoto app grouping “beach” pictures together.\n\nSpam filter hiding junk mail.',
                AI3_ML,
                {
                    bullets: ['ML needs data—photos, text, clicks.', 'It is not thinking like a human with feelings.', 'Adults still responsible for safe use in schools.'],
                }
            ),
            section(
                'ML vs normal code',
                'Calculator follows fixed rules—2+2 always 4.\n\nML spam filter may update when new junk tricks appear.\n\nBoth need testing before trusting in real life.',
                AI3_ML
            ),
        ]
    ),
    subLesson(
        'ai-3-training-testing',
        'Training vs Testing',
        'Training vs Testing — Practice and Exam',
        'Data split into training (practice) and testing (exam) shows if AI learned general ideas or just memorized answers.',
        [
            section(
                'Training phase',
                'Feed labeled examples: “This is cat”, “This is dog”.\n\nModel adjusts internal settings to reduce mistakes on training set.\n\nLike doing homework with answer key visible—learn patterns.',
                AI3_TRAIN
            ),
            section(
                'Testing phase',
                'Hide new pictures the model never saw.\n\nAsk for cat or dog.\n\nHigh score on test data = useful learning; low score = memorized or bad data.',
                AI3_TRAIN,
                {
                    bulletsHeading: 'Classroom analogy',
                    bullets: [
                        'Training = practice worksheets with teacher help.',
                        'Testing = surprise quiz with new questions.',
                        'Cheating by putting test answers in practice = invalid ML experiment.',
                    ],
                }
            ),
            section(
                'Why split matters',
                'If you test on same photos you trained on, AI might “memorize” not “understand.”\n\nScientists keep test data locked until final check.\n\nFair exams for AI teach honest engineering.',
                AI3_TRAIN
            ),
        ]
    ),
    subLesson(
        'ai-3-pattern-recognition',
        'Pattern Recognition',
        'Pattern Recognition — Finding Similarities',
        'Pattern recognition means noticing features that repeat—edges in faces, letter shapes in handwriting, beats in music.',
        [
            section(
                'What is a pattern?',
                'Cats often have pointy ears and whiskers.\n\nLetter “A” has two slants and a bar.\n\nYour friend’s voice has a unique pitch pattern.\n\nAI converts patterns into numbers and compares distances.',
                AI3_PATTERN
            ),
            section(
                'Examples',
                'Face unlock: match live face pattern to enrolled pattern.\n\nOCR homework scan: match ink shapes to alphabet patterns.\n\nMusic app: match song fingerprint to database.',
                AI3_PATTERN,
                {
                    bullets: ['Patterns can misfire on unusual cases—glasses, accents, rare fonts.', 'More diverse training patterns improve fairness.', 'Humans override when AI unsure.'],
                }
            ),
            section(
                'Try a paper activity',
                'Draw five squares and five triangles. Cover names—can partner sort correctly?\n\nThat is pattern recognition without a computer.',
                AI3_PATTERN
            ),
        ]
    ),
    subLesson(
        'ai-3-good-bad-data',
        'Good Data vs Bad Data',
        'Good Data vs Bad Data — Why Quality Matters',
        'AI learns whatever you feed it. Garbage in, garbage out—wrong labels, missing groups, or mean bias create untrustworthy AI.',
        [
            section(
                'Good data traits',
                'Correct labels (photo really is a dog).\n\nEnough examples for each category.\n\nDiverse faces, accents, handwriting styles.\n\nCollected with permission and privacy rules.',
                AI3_DATA
            ),
            section(
                'Bad data problems',
                'Labels swapped by mistake.\n\nOnly one skin tone in face dataset.\n\nCopy-paste spam repeats.\n\nPrivate chats scraped without consent—never OK in school projects.',
                AI3_DATA,
                {
                    bulletsHeading: 'Ask these questions',
                    bullets: [
                        'Who collected this data and why?',
                        'Are some groups missing?',
                        'Could mistakes in labels confuse the AI?',
                    ],
                }
            ),
            section(
                'Kid-friendly rule',
                'Before trusting AI homework help, check a textbook or ask teacher—models trained on random internet text can be wrong or unsafe.',
                AI3_DATA
            ),
        ]
    ),
    subLesson(
        'ai-3-simple-algorithm',
        'Simple Algorithm Idea',
        'Simple Algorithm Idea — Step-by-Step Thinking',
        'Even ML systems rely on algorithm skeletons: repeat steps, compare errors, adjust, stop when good enough.',
        [
            section(
                'Algorithm + learning loop',
                '1. Start with random guesses.\n2. Measure wrong answers.\n3. Adjust slightly to reduce errors.\n4. Repeat many times.\n5. Stop and test on new data.\n\nPseudocode is planning language—not full Python yet.',
                AI3_ALGO
            ),
            section(
                'Connect to Algorithms topic',
                'Sorting books by height uses fixed algorithm—no training.\n\nCat detector uses algorithm loop plus training images.\n\nBoth need clear start, steps, and stop condition.',
                AI3_ALGO,
                {
                    bullets: ['Write steps on paper before coding.', 'Flowcharts show decisions (if/else).', 'Class 7 introduces more formal flowcharts.'],
                }
            ),
            section(
                'Safety habit',
                'Algorithms in apps should be explainable to users in simple words.\n\nIf nobody can explain why AI decided something important, ask an adult to double-check.',
                AI3_ALGO
            ),
        ]
    ),
];
