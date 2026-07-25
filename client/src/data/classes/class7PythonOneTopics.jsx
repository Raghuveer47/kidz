import React from 'react';
import { Code2 } from 'lucide-react';

const pyIcon = <Code2 className="w-5 h-5 text-amber-600" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'programming',
        icon: pyIcon,
        content: { heading, text, sections },
    };
}

/** Class 7 (e) — Python-1 hub + beginner lessons + variables unit. */
export const pythonOneTopics = [
    {
        id: 'python-1',
        title: 'PYTHON-1',
        category: 'programming',
        icon: pyIcon,
        children: [
            { label: 'What is Python? (simple explanation)', topicId: 'python-1-what-is-python' },
            { label: 'Installing Python / Using online editors (Colab)', topicId: 'python-1-installing' },
            { label: 'Writing first program: print()', topicId: 'python-1-print' },
            { label: 'Comments in Python', topicId: 'python-1-comments' },
            { label: 'Basic input/output (input() and print())', topicId: 'python-1-input-output' },
            { label: 'Activity: Hello, My Name is…', topicId: 'python-1-activity-hello' },
            { label: 'Variables (storing information)', topicId: 'python-1-variables' },
            { label: 'Data types: Numbers & Strings', topicId: 'python-1-data-types' },
            { label: 'Simple calculations (+, -, *, /)', topicId: 'python-1-calculations' },
            { label: 'Combining text and numbers', topicId: 'python-1-combine-text-numbers' },
            { label: 'Activity: Simple calculator program', topicId: 'python-1-activity-calculator' },
        ],
        content: {
            heading: 'PYTHON-1',
            text:
                'Class 7 Python-1 is beginner level: install or use Colab, print messages, comments, input/output, variables, numbers, strings, math, and two fun activities—a name greeting and a simple calculator.',
            hubHeroImage: 'https://loremflickr.com/800/500/python,code,programming,kids',
            unitTitle: 'Python-1 — Getting Started & Variables',
            firstLessonId: 'python-1-what-is-python',
            firstLessonLabel: 'What is Python?',
            badgeLabel: 'Code Adventures',
            unitDetail: {
                intro:
                    'Python reads like English with indentation instead of many braces. It powers websites, games, data science, and AI tools. This unit builds confidence: run print("Hello"), ask input(), store values in variables, and combine text with numbers—always typing code yourself, not only reading.',
                analogy:
                    'Python is a patient robot friend. print() is it speaking aloud. input() is it listening. Variables are labeled jars on a shelf—score jar holds 10, name jar holds "Asha". Activities are mini missions to prove the robot understood you.',
                keyPoints: [
                    { title: 'Beginner stage', body: 'print, comments, input, first activities.' },
                    { title: 'Variables & types', body: 'int, float, str and simple math.' },
                    { title: 'Online or local', body: 'Colab in browser or python.org install with teacher help.' },
                    { title: 'Activities', body: 'Hello name program and two-number calculator.' },
                ],
            },
            unitWhyLearn: [
                'Python is a top language for schools and industry.',
                'Directly supports flowcharts and algorithms from earlier classes.',
                'Foundation for Class 8–9 Python and AI projects.',
            ],
            unitHowToStudy: [
                'Type every example—do not copy-paste without reading.',
                'Fix typos calmly; error messages are hints.',
                'Save files as hello.py, calculator.py in your project folder.',
                'Complete both activities before moving to Python-2.',
            ],
            sections: [
                section('print("Hello World")', 'First line every coder remembers.', 'https://loremflickr.com/700/450/hello,world,code'),
                section('Variables', 'name = "Riya"  age = 12', 'https://loremflickr.com/700/450/variable,code,learning'),
            ],
        },
    },
    subLesson(
        'python-1-what-is-python',
        'What is Python?',
        'What is Python?',
        'Python is a popular programming language known for clear syntax—great for beginners and professionals.',
        [
            section(
                'Simple explanation',
                'Python is a language humans write and computers execute step by step. Created by Guido van Rossum; named after Monty Python comedy, not the snake!\n\nUsed for: web apps, automation, games (Pygame), science, AI, and school learning.',
                'https://loremflickr.com/700/450/python,programming,education'
            ),
            section(
                'Why Python for Class 7',
                'Readable: print("Hi") almost looks like English.\n\nHuge community—millions of free tutorials.\n\nSame language beginners and NASA engineers use (different project sizes).',
                'https://loremflickr.com/700/450/student,coding,laptop',
                {
                    bullets: ['Indentation (spaces) matters in Python.', 'Case sensitive: Name and name differ.', 'Start small; grow projects each year.'],
                }
            ),
        ]
    ),
    subLesson(
        'python-1-installing',
        'Installing Python / Colab',
        'Installing Python & Using Online Editors',
        'Run Python on school PCs via install or browser tools like Google Colab—follow teacher policy.',
        [
            section(
                'Install from python.org',
                'Download Python 3 for Windows/Mac with adult help.\n\nCheck “Add Python to PATH” on Windows installer.\n\nOpen IDLE or VS Code → verify: print("OK") runs.',
                'https://loremflickr.com/700/450/install,software,computer'
            ),
            section(
                'Google Colab (online)',
                'Visit colab.research.google.com (if school allows).\n\nNew notebook → code cell → run print("Hello from Colab").\n\nNo install needed; save notebook to Google Drive.\n\nDo not upload personal secrets to cloud notebooks.',
                'https://loremflickr.com/700/450/browser,cloud,coding',
                {
                    bullets: ['School lab may use only local install—ask first.', 'Never share login passwords.', 'Download .py files to portfolio folder.'],
                }
            ),
        ]
    ),
    subLesson(
        'python-1-print',
        'print()',
        'Writing Your First Program — print()',
        'The print() function displays text or numbers on the screen.',
        [
            section(
                'Syntax',
                'print("Hello, World!")\n\nprint(2026)\n\nprint("Score:", 10)\n\nQuotes around text (strings). Numbers without quotes.',
                'https://loremflickr.com/700/450/code,screen,hello'
            ),
            section(
                'Common mistakes',
                'Missing quote: print(Hi) → error.\n\nWrong capital P: Print() fails—Python is case sensitive.\n\nFix one line at a time; rerun after each fix.',
                'https://loremflickr.com/700/450/debug,code,error'
            ),
        ]
    ),
    subLesson(
        'python-1-comments',
        'Comments',
        'Comments in Python',
        'Comments explain code to humans; Python ignores them when running.',
        [
            section(
                'How to write comments',
                '# This line is a comment\n\nprint("Visible")  # end-of-line comment\n\nUse comments to describe tricky steps, your name, date, or activity goal.',
                'https://loremflickr.com/700/450/notes,code,documentation'
            ),
            section(
                'Good commenting habits',
                'Not every line needs a comment.\n\nDo comment WHY you chose a formula.\n\nTeachers read comments to understand your thinking.',
                'https://loremflickr.com/700/450/student,notebook,study'
            ),
        ]
    ),
    subLesson(
        'python-1-input-output',
        'input() and print()',
        'Basic Input and Output',
        'input() waits for keyboard text; print() shows results.',
        [
            section(
                'input() basics',
                'name = input("Enter your name: ")\n\nprint("Hello,", name)\n\ninput() always returns a string—even if user types digits.',
                'https://loremflickr.com/700/450/keyboard,input,terminal'
            ),
            section(
                'Combining in one program',
                'city = input("City? ")\n\nprint("I live in", city)\n\nPrompt strings guide the user—write clear questions.',
                'https://loremflickr.com/700/450/chat,terminal,text'
            ),
        ]
    ),
    subLesson(
        'python-1-activity-hello',
        'Activity: Hello, My Name is…',
        'Activity — Hello, My Name is…',
        'Build a program that asks your name and age, then greets you politely.',
        [
            section(
                'Steps',
                '1. Ask name with input().\n\n2. Ask age (as text for now).\n\n3. print greeting using both.\n\nExample output: Hello, My Name is Sam and I am 12 years old.',
                'https://loremflickr.com/700/450/kids,coding,project'
            ),
            section(
                'Starter code',
                'name = input("What is your name? ")\n\nage = input("How old are you? ")\n\nprint("Hello, My Name is", name, "and I am", age, "years old.")\n\nSave as hello_name.py and run twice with different answers.',
                'https://loremflickr.com/700/450/python,script,file',
                {
                    bulletsHeading: 'Extension',
                    bullets: ['Add favourite subject question.', 'Add comment at top with your class and date.', 'Show teacher both runs saved in screenshot.'],
                }
            ),
        ]
    ),
    subLesson(
        'python-1-variables',
        'Variables',
        'Variables — Storing Information',
        'Variables are names attached to values in memory: score = 10, name = "Asha".',
        [
            section(
                'Creating variables',
                'x = 5\n\nmessage = "Done"\n\nprice = 19.99\n\nUse descriptive names: total_marks not t.\n\nReassign: score = score + 1',
                'https://loremflickr.com/700/450/variable,storage,data'
            ),
            section(
                'Rules',
                'Start with letter or underscore; no spaces (use underscore).\n\nCase matters: Score ≠ score.\n\nDo not use Python keywords like print as variable names.',
                'https://loremflickr.com/700/450/code,rule,naming'
            ),
        ]
    ),
    subLesson(
        'python-1-data-types',
        'Data types',
        'Data Types — Numbers and Strings',
        'Common types: int (whole numbers), float (decimals), str (text).',
        [
            section(
                'Examples',
                'age = 12          # int\n\nheight = 1.52      # float\n\nname = "Ravi"      # str\n\ntype(age) shows int in interactive mode.',
                'https://loremflickr.com/700/450/numbers,text,data'
            ),
            section(
                'Converting types',
                'int("5") → 5 for math.\n\nstr(100) → "100" for joining text.\n\nWill learn more in Python-2; for now know input() gives str.',
                'https://loremflickr.com/700/450/convert,type,code'
            ),
        ]
    ),
    subLesson(
        'python-1-calculations',
        'Simple calculations',
        'Simple Calculations (+, -, *, /)',
        'Python works as a calculator with standard operators.',
        [
            section(
                'Operators',
                'a = 10 + 3   # 13\n\nb = 10 - 3   # 7\n\nc = 10 * 3   # 30\n\nd = 10 / 3   # 3.333... float division\n\nUse parentheses: (2 + 3) * 4 → 20',
                'https://loremflickr.com/700/450/math,calculator,code'
            ),
            section(
                'Integer division extras',
                '// whole division\n\n% remainder (helps even/odd)\n\n** power (5**2 = 25) — bonus for curious students.',
                'https://loremflickr.com/700/450/mathematics,learning,school'
            ),
        ]
    ),
    subLesson(
        'python-1-combine-text-numbers',
        'Combining text and numbers',
        'Combining Text and Numbers',
        'Mix strings and numbers carefully—convert or use commas in print.',
        [
            section(
                'print with commas',
                'score = 95\n\nprint("Your score is", score)\n\nCommas add space automatically—easy for beginners.',
                'https://loremflickr.com/700/450/text,number,combine'
            ),
            section(
                'f-strings (intro)',
                'name = "Lee"\n\nmarks = 88\n\nprint(f"{name} scored {marks}")\n\nf-strings embed variables inside {} — modern and readable.',
                'https://loremflickr.com/700/450/string,format,code'
            ),
        ]
    ),
    subLesson(
        'python-1-activity-calculator',
        'Activity: Simple calculator',
        'Activity — Simple Calculator Program',
        'Ask for two numbers and print sum, difference, product, and quotient.',
        [
            section(
                'Steps',
                '1. a = input("First number? ") — convert with int() or float().\n\n2. b = input("Second number? ")\n\n3. print all four operations.\n\n4. Handle divide by zero with teacher (if b==0 message).',
                'https://loremflickr.com/700/450/calculator,program,python'
            ),
            section(
                'Sample solution outline',
                'a = float(input("First number: "))\n\nb = float(input("Second number: "))\n\nprint("Sum:", a + b)\n\nprint("Difference:", a - b)\n\nprint("Product:", a * b)\n\nprint("Quotient:", a / b)\n\nSave calculator.py; test with 10 and 2.',
                'https://loremflickr.com/700/450/code,project,complete',
                {
                    bullets: ['Comment each section.', 'Show teacher two test runs.', 'Bonus: add modulo for even/odd check.'],
                }
            ),
        ]
    ),
];
