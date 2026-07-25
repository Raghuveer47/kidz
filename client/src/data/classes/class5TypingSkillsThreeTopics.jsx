import React from 'react';
import { Keyboard } from 'lucide-react';
import {
    TYPING_SKILLS3_IMAGES,
    TYPING_SKILLS3_WARM_UP,
    TYPING_SKILLS3_PRACTICE,
    TYPING_SKILLS3_CHALLENGE,
} from './class5TypingSkillsThreeContent';

const typingIcon = <Keyboard className="w-5 h-5 text-slate-700" />;

function section(subtitle, body, image, bullets) {
    const s = { subtitle, body, image };
    if (bullets?.length) s.bullets = bullets;
    return s;
}

/** Class 5 — Typing Skills-3: sentence practice page. */
export const typingSkillsThreeTopics = [
    {
        id: 'typing-skills-3',
        title: 'TYPING SKILLS-3',
        category: 'computer_basics',
        icon: typingIcon,
        content: {
            heading: 'Typing Skills-3 — Typing Sentences (Practice Page)',
            text:
                'Class 5 Typing Skills-3 moves from single words and keys to full sentences. You will practice capitals at the start, periods at the end, one space between words, and calm finger movement on the home row. Accuracy comes first—speed grows when sentences feel easy. Open Notepad or Word, type each practice line below without peeking at the keyboard when you can, and ask your teacher to check spacing and punctuation.',
            sections: [
                section(
                    'Why we practice full sentences',
                    'Sentences are how we write stories, answers, and messages in school. Typing a sentence means combining letters, spaces, capitals, and punctuation in the right order.\n\nClass 3 Typing-1 taught the home row. Class 4 Typing-2 taught Shift, Caps Lock, Backspace, and Delete. Class 5 adds real lines you might use in homework—so your fingers learn rhythm: word → space → word → period.',
                    TYPING_SKILLS3_IMAGES.hero
                ),
                section(
                    'Posture and finger placement (quick review)',
                    'Before you start:\n\n• Sit tall, feet flat, screen at eye level.\n\n• Rest left fingers on A S D F and right on J K L ; (home row).\n\n• Look at the screen, not the keys, when possible.\n\n• Use both thumbs for the spacebar—one press between every word.\n\n• Take a short eye break after every ten sentences.',
                    TYPING_SKILLS3_IMAGES.posture,
                    [
                        'Wrists straight—not bent up or down.',
                        'Elbows close to your sides, relaxed shoulders.',
                        'No food or drinks near the keyboard.',
                    ]
                ),
                section(
                    'Capitals, periods, and spacing rules',
                    'Start every new sentence with a capital letter (Shift + letter or Caps Lock for many capitals—turn Caps Lock off after titles).\n\nEnd statements with a full stop (.). Questions use (?); exclamations use (!) when your teacher allows.\n\nOne space after a period before the next sentence—not five spaces.\n\nComma (,) has no space before it, one space after: I like math, science, and art.\n\nFix errors with Backspace; do not hammer the keyboard.',
                    TYPING_SKILLS3_IMAGES.punctuation
                ),
                section(
                    'Warm-up sentences — type each line twice',
                    'Type these short lines in Notepad or Word. Say each word in your head as you press the key.\n\nCopy the list exactly—including capital letters and periods.',
                    TYPING_SKILLS3_IMAGES.warmUp,
                    TYPING_SKILLS3_WARM_UP.map((line, i) => `${i + 1}. ${line}`)
                ),
                section(
                    'Practice sentences — main drill',
                    'These sentences use school vocabulary. Type each line once slowly, then once faster with fewer mistakes.\n\nSave as TypingSkills3_Practice.txt when finished.',
                    TYPING_SKILLS3_IMAGES.practice,
                    TYPING_SKILLS3_PRACTICE.map((line, i) => `${i + 1}. ${line}`)
                ),
                section(
                    'Challenge sentences — longer lines',
                    'Ready for more? Type each challenge sentence without stopping in the middle unless you need to fix a mistake.\n\nBreathe, reset fingers on home row, then start the next line.',
                    TYPING_SKILLS3_IMAGES.challenge,
                    TYPING_SKILLS3_CHALLENGE.map((line, i) => `${i + 1}. ${line}`)
                ),
                section(
                    'Write your own sentence',
                    'Create three original sentences in your notebook or file:\n\n1. A sentence about your favorite subject.\n\n2. A sentence about a computer habit you follow.\n\n3. A polite sentence you might email a teacher (practice only—send only with permission).\n\nCheck: capital start, end punctuation, single spaces, no random capitals in the middle.',
                    TYPING_SKILLS3_IMAGES.practice
                ),
                section(
                    'Teacher check and daily habit',
                    'Ask your teacher to mark:\n\n☐ Correct capital at the start of each sentence\n\n☐ Correct ending punctuation\n\n☐ One space between words\n\n☐ Neat file saved with a clear name\n\n☐ Good posture for the whole session\n\nPractice ten minutes on three different days each week—small daily practice beats one long session before exams.',
                    TYPING_SKILLS3_IMAGES.checklist
                ),
            ],
        },
    },
];
