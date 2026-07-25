import React from 'react';
const scientificCalculatorImage = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133415/kidscodingai/assets/images/class3/calculator/scientific-calculator.png';
import { LessonBlock, BulletList, LessonTip } from '../../class2/input-devices/inputDevicesLessonUi';

const OPERATIONS = [
    {
        title: 'Square and square root',
        emoji: '⬜',
        example: 'Example: 12² and √144',
        steps: [
            'Type 12.',
            'Press x² to get square. Result: 144.',
            'For square root, type 144.',
            'Press √x. Result: 12.',
        ],
    },
    {
        title: 'Power (xʸ)',
        emoji: '🔢',
        example: 'Example: 2⁵',
        steps: [
            'Type 2.',
            'Press xʸ (power key).',
            'Type 5.',
            'Press =. Result: 32.',
        ],
    },
    {
        title: 'Percentage (%)',
        emoji: '💯',
        example: 'Example: 25% of 400',
        steps: [
            'Type 400 x 25.',
            'Press %.',
            'Press =. Result: 100.',
        ],
    },
    {
        title: 'Fraction to decimal',
        emoji: '➗',
        example: 'Example: 7 ÷ 8',
        steps: [
            'Type 7.',
            'Press ÷.',
            'Type 8.',
            'Press =. Result: 0.875.',
        ],
    },
    {
        title: 'Sign change (+/-)',
        emoji: '↕️',
        example: 'Example: make 42 into -42',
        steps: [
            'Type 42.',
            'Press +/-.',
            'Number becomes -42.',
            'Press +/- again to return +42.',
        ],
    },
    {
        title: 'Memory operations (MS, MR, M+, MC)',
        emoji: '🧠',
        example: 'Example: store and reuse a value',
        steps: [
            'Type 75 and press MS (Memory Store).',
            'Clear screen and do another operation.',
            'Press MR to recall 75.',
            'Use M+ to add current result to memory and MC to clear memory.',
        ],
    },
    {
        title: 'Trigonometry (sin, cos, tan)',
        emoji: '📐',
        example: 'Example: sin 30°',
        steps: [
            'Ensure calculator is in DEG mode (degrees).',
            'Type 30.',
            'Press sin.',
            'Result should be 0.5.',
        ],
    },
    {
        title: 'Logarithm and natural log',
        emoji: '📊',
        example: 'Example: log(100), ln(e)',
        steps: [
            'Type 100 and press log. Result: 2.',
            'For ln, type e (or use e constant if available).',
            'Press ln. Result: 1.',
        ],
    },
    {
        title: 'Absolute value (|x|)',
        emoji: '🧭',
        example: 'Example: |-15|',
        steps: [
            'Type -15 using +/- key.',
            'Press abs (absolute value) if available.',
            'Result: 15.',
            'Absolute value means distance from 0, so the answer is always positive.',
        ],
    },
    {
        title: 'Exponential key (EXP / EE)',
        emoji: '🚀',
        example: 'Example: 6.2 × 10³',
        steps: [
            'Type 6.2.',
            'Press EXP (or EE) key.',
            'Type 3 and press =.',
            'Result: 6200.',
        ],
    },
    {
        title: 'Random number (Rand)',
        emoji: '🎲',
        example: 'Example: get a random decimal',
        steps: [
            'Press Rand (or Random) key.',
            'Calculator shows a value between 0 and 1.',
            'Press again for a different value.',
            'Useful for quick classroom games and probability examples.',
        ],
    },
    {
        title: 'Ans key (use previous answer)',
        emoji: '🔁',
        example: 'Example: continue from last result',
        steps: [
            'Solve one sum first, like 25 + 5 = 30.',
            'Press Ans, then × 2, then =.',
            'Result becomes 60 without typing 30 again.',
            'Ans helps chain multiple steps quickly.',
        ],
    },
    {
        title: 'Modulus (remainder)',
        emoji: '🧩',
        example: 'Example: 17 mod 5',
        steps: [
            'Type 17.',
            'Press mod key (or type Mod).',
            'Type 5 and press =.',
            'Result: 2 (the remainder after division).',
        ],
    },
    {
        title: 'Nth root using power',
        emoji: '🌱',
        example: 'Example: fourth root of 16',
        steps: [
            'Type 16.',
            'Press xʸ.',
            'Type (1 ÷ 4) and press =.',
            'Result: 2. This means 2×2×2×2 = 16.',
        ],
    },
    {
        title: 'Scientific notation display',
        emoji: '🛰️',
        example: 'Example: very big/small numbers',
        steps: [
            'Type a very large number like 5000000 and press =.',
            'Calculator may show 5E+6 (scientific notation).',
            'Type a tiny number like 0.00045 and note E-4 style display.',
            'Read E+ as multiply by powers of 10 and E- as divide by powers of 10.',
        ],
    },
    {
        title: 'Angle conversion (DMS and decimal)',
        emoji: '🧭',
        example: 'Example: 30° 15\' 0\" to decimal',
        steps: [
            'Enter angle in DMS format if your calculator supports it.',
            'Use dms/deg key to convert between degree-minute-second and decimal.',
            'Check converted value in decimal degrees.',
            'Useful when trigonometry questions use mixed angle formats.',
        ],
    },
    {
        title: 'Permutations (nPr)',
        emoji: '🔀',
        example: 'Example: 5P2',
        steps: [
            'Type 5.',
            'Press nPr key.',
            'Type 2 and press =.',
            'Result: 20 (ordered arrangements).',
        ],
    },
    {
        title: 'Combinations (nCr)',
        emoji: '🧺',
        example: 'Example: 5C2',
        steps: [
            'Type 5.',
            'Press nCr key.',
            'Type 2 and press =.',
            'Result: 10 (groups without order).',
        ],
    },
    {
        title: 'Hyperbolic functions (sinh, cosh, tanh)',
        emoji: '🌊',
        example: 'Example: sinh(0)',
        steps: [
            'Find hyp or hyperbolic mode.',
            'Type 0 and press sinh.',
            'Result: 0.',
            'Try small values first to understand these advanced keys.',
        ],
    },
    {
        title: 'Inverse hyperbolic (asinh, acosh, atanh)',
        emoji: '🌀',
        example: 'Example: asinh(0)',
        steps: [
            'Open inverse/hyp mode if available.',
            'Type 0 and choose asinh.',
            'Result: 0.',
            'These are advanced; use when teacher asks specifically.',
        ],
    },
    {
        title: 'Base-2 logarithm (log₂)',
        emoji: '2️⃣',
        example: 'Example: log₂(8)',
        steps: [
            'Type 8.',
            'Press log₂ key (or use change-of-base).',
            'Press =.',
            'Result: 3.',
        ],
    },
    {
        title: 'Base-10 exponent (10ˣ)',
        emoji: '🔟',
        example: 'Example: 10³',
        steps: [
            'Type 3.',
            'Press 10ˣ key.',
            'Press =.',
            'Result: 1000.',
        ],
    },
    {
        title: 'Natural exponent (eˣ)',
        emoji: '📈',
        example: 'Example: e²',
        steps: [
            'Type 2.',
            'Press eˣ key.',
            'Press =.',
            'Result is about 7.389.',
        ],
    },
    {
        title: 'Convert decimal to fraction',
        emoji: '🍰',
        example: 'Example: 0.75 to fraction',
        steps: [
            'Type 0.75 and press =.',
            'Press fraction/decimal convert key (often d/c or F↔D).',
            'Display changes to 3/4.',
            'Press again to return decimal form.',
        ],
    },
    {
        title: 'Mixed fraction conversion',
        emoji: '🥪',
        example: 'Example: 7/4 to mixed number',
        steps: [
            'Enter 7/4 as a fraction.',
            'Press fraction format key if available.',
            'Calculator can show 1 3/4 in mixed form.',
            'Use this in class when answers need mixed fractions.',
        ],
    },
    {
        title: 'Round to fixed decimals',
        emoji: '🎯',
        example: 'Example: round 12.6789 to 2 decimals',
        steps: [
            'Open settings for fixed decimal places.',
            'Set display to 2 decimal places.',
            'Type 12.6789 and press =.',
            'Display shows 12.68.',
        ],
    },
    {
        title: 'Store variable values',
        emoji: '📦',
        example: 'Example: save value in A',
        steps: [
            'Type a value like 25.',
            'Press store/sto key, then choose variable A.',
            'Later type A and continue calculation.',
            'Great for repeating formulas quickly.',
        ],
    },
    {
        title: 'Recall variable in equation',
        emoji: '🧪',
        example: 'Example: 2A + 3 when A=25',
        steps: [
            'After storing A=25, type 2 × A + 3.',
            'Press =.',
            'Result: 53.',
            'Change A and repeat to compare outputs fast.',
        ],
    },
];

export default function ScientificCalculatorLesson() {
    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <section className="rounded-3xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                {/* Top band: heading + short intro beside the image — avoids empty space under the image */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 lg:gap-8">
                    <div className="min-w-0 flex-1 space-y-3.5 text-justify hyphens-auto">
                        <h2 className="text-left text-2xl font-extrabold text-indigo-900 md:text-3xl">
                            Scientific Calculator
                        </h2>
                        <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                            This Class 3 lesson helps you master scientific calculator skills using the built-in{' '}
                            <strong className="font-semibold text-slate-800">Windows Calculator</strong> in Scientific mode—not
                            just pressing buttons, but understanding <em>why</em> each key is used and how to read the answer on
                            the screen.
                        </p>
                        <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                            In <strong className="font-semibold text-slate-800">Standard</strong> mode you can add, subtract,
                            multiply, and divide. In <strong className="font-semibold text-slate-800">Scientific</strong> mode you
                            unlock powers and roots, percentages, memory keys, trigonometry (sin, cos, tan), logarithms,
                            exponents, and more. That is the toolkit you need for many class sums and science-style numbers as you
                            move up grades.
                        </p>
                    </div>
                    <div className="flex shrink-0 justify-center sm:justify-end sm:pt-1">
                        <figure className="m-0 leading-none">
                            <div className="flex w-fit max-w-full items-center justify-center rounded-xl border border-indigo-200/90 bg-white/95 p-1.5 shadow-sm sm:p-2">
                                <img
                                    src={scientificCalculatorImage}
                                    alt="Scientific mode in the Windows Calculator app, showing extra keys for powers, roots, and trigonometry"
                                    className="block h-auto max-h-[min(42vh,320px)] w-auto max-w-[min(100%,200px)] object-contain object-center sm:max-w-[min(100%,210px)] lg:max-h-[min(46vh,340px)] lg:max-w-[min(100%,200px)]"
                                    loading="lazy"
                                />
                            </div>
                        </figure>
                    </div>
                </div>

                {/* Rest of the intro — compact divider so the pale band above is not overly tall */}
                <div className="mt-4 space-y-3 border-t border-indigo-200/35 pt-4 text-justify hyphens-auto md:mt-5 md:pt-5">
                    <div>
                        <p className="text-left text-base font-semibold text-indigo-900 md:text-lg">On this page you will:</p>
                        <div className="mt-1 [&_li]:text-justify">
                            <BulletList
                                items={[
                                    'Follow Step 1 to open Scientific mode and recognize the new keys on your screen.',
                                    'Work through numbered Operation cards (powers, roots, %, fractions, memory, sin/cos/tan, logs, and more)—each card has a short example you can copy key-for-key.',
                                    'Use the Step 3 practice routine to build speed slowly: simple numbers first, then harder ones, and explain one problem aloud to prove you understand.',
                                    'Compare your own Calculator window with the photo here so you know you are in the right mode (menu, Scientific, and the extra row of keys).',
                                ]}
                            />
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                        Every calculator app looks slightly different, but the <strong className="font-semibold text-slate-800">ideas</strong>{' '}
                        stay the same: find Scientific mode, check whether angles are in degrees when you use sin/cos/tan, and
                        always glance at the display before you press the next key. If your screen does not match the photo, ask
                        your teacher to point to the same keys on your device—then continue with the steps below.
                    </p>
                </div>
            </section>

            <LessonBlock id="open-scientific-mode" title="Step 1: Open Scientific mode" emoji="🧮" tone="sky">
                <BulletList
                    items={[
                        'Open Calculator from Start menu.',
                        'Click the menu icon (three lines) on top-left.',
                        'Select Scientific mode.',
                        'You will now see extra keys like x², √, sin, cos, tan, log, and memory keys.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="operations-guide" title="Step-by-step scientific operations" emoji="🚀" tone="indigo">
                <p className="mb-4 text-sm font-semibold text-slate-600 md:text-base">
                    Each card is numbered: <strong className="text-indigo-800">Operation 1</strong>,{' '}
                    <strong className="text-indigo-800">Operation 2</strong>, and so on—follow them in order or pick one
                    topic to practice.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                    {OPERATIONS.map((item, opIndex) => (
                        <article
                            key={`${item.title}-${opIndex}`}
                            className="rounded-2xl border-2 border-indigo-200 bg-white/95 p-4 shadow-sm"
                        >
                            <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                                Operation {opIndex + 1}
                            </p>
                            <h3 className="mt-1 text-lg font-extrabold text-indigo-900">
                                <span aria-hidden>{item.emoji} </span>
                                {item.title}
                            </h3>
                            <p className="mt-1 text-sm font-bold text-slate-700">{item.example}</p>
                            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
                                {item.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </article>
                    ))}
                </div>
            </LessonBlock>

            <LessonBlock id="practice-routine" title="Step 3: Practice routine for students" emoji="✅" tone="emerald">
                <BulletList
                    items={[
                        'Practice Operation 1–10 first to build strong basics.',
                        'Then do Operation 11–20 with examples from class notes.',
                        'Try Operation 21–30 for advanced practice one by one.',
                        'After each set, explain one solved example aloud to check understanding.',
                    ]}
                />
                <LessonTip title="Teacher Tip" tone="violet">
                    <p>
                        Start with simple values first (like 10, 25, 100) and then move to larger numbers. Accuracy is
                        more important than speed.
                    </p>
                </LessonTip>
            </LessonBlock>
        </div>
    );
}
