import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

/** Class 2 — Keyboard: full kid-friendly lesson (what / types + photos / how / use / connect / fix). */
export default function KeyboardDetail({ deviceSlug = 'keyboard' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');
    const extraPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'extra');

    const standard = photoByTitle(typesPhotos, 'Standard keyboard');
    const flexible = photoByTitle(typesPhotos, 'Flexible keyboard');
    const foldable = photoByTitle(typesPhotos, 'Foldable keyboard');

    const parts = photoByTitle(extraPhotos, 'Main parts of a keyboard');
    const arrows = photoByTitle(extraPhotos, 'Arrow keys');
    const functions = photoByTitle(extraPhotos, 'Function keys (F1–F12)');
    const specials = photoByTitle(extraPhotos, 'Special keys');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-5 shadow-md md:p-7">
                <p className="text-justify text-lg leading-relaxed text-slate-700 md:text-xl">
                    The <strong className="text-indigo-900">keyboard</strong> is one of the main ways we talk to a
                    computer. When you press keys, you send letters, numbers, and commands so the machine can show
                    words on the screen, save homework, and run programs.
                </p>
            </div>

            <LessonBlock id="what-is-keyboard" title="What is a keyboard?" emoji="💡" tone="sky">
                <p>
                    A keyboard is an <strong>input device</strong>. That means it brings information{' '}
                    <em>into</em> the computer (like typing your name), instead of showing pictures{' '}
                    <em>out</em> like a screen does.
                </p>
                <p>
                    Keyboards have an interesting history: long ago, people used <strong>typewriters</strong> to type
                    on paper. When computers became common, early keyboards were designed to feel familiar, so people
                    could type easily. That is why we still use the <strong>QWERTY</strong> layout today in most
                    schools and homes.
                </p>
                <BulletList
                    items={[
                        'It has many keys: letters, numbers, symbols, and special keys (Enter, Space, arrows, and more).',
                        'You use it for schoolwork, searching, passwords, games, and shortcuts that help you work faster.',
                        'Every key is like a tiny switch: when you press it, the computer learns which key you chose.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-keyboard" title="Types of keyboard" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Keyboards are not all the same! Teachers group them by <strong>how they connect</strong> (wire or
                    no wire), <strong>how they are shaped</strong> (flat, roll-up, or folding), and{' '}
                    <strong>how keys feel</strong> when you press. Read the ideas below, then look at the photos—one
                    picture per row with a longer explanation.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        How they connect
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Wired keyboard</strong> — A cable (usually USB) plugs
                            straight into the computer. The keyboard gets power from that cable, so you do not put
                            batteries inside it. The cable stays in one place, but you always know it is connected if
                            the plug fits well.
                        </p>
                        <p>
                            <strong className="text-slate-900">Wireless keyboard</strong> — No cable to the computer.
                            It talks through a small USB stick in a port, or through <strong>Bluetooth</strong> like
                            headphones. You must remember batteries or charging, and sometimes you pair it once with
                            help from a grown-up.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Shapes and styles — one photo per row
                    </h3>

                    {standard ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={standard.src}
                            title={standard.title}
                            alt={standard.title}
                        >
                            <p>
                                A <strong>standard keyboard</strong> is the kind you picture when someone says
                                “keyboard”: keys in a familiar layout—letters in the middle, a number row along the
                                top, a long Space bar, and Enter, Shift, and Backspace where you expect them. It is
                                often used on a desk with a desktop computer, but the <em>same layout idea</em> is
                                used on many laptops too: flat keys in rows, just built into the laptop instead of a
                                separate block. That is why we call it “standard”: it is the usual layout for
                                learning to type and doing homework.
                            </p>
                            <p>
                                Standard keyboards can be full-size (with a number pad on the right) or a bit smaller
                                without the pad. They are great for typing long stories, practicing touch-typing, and
                                using shortcuts that work the same way at school and at home.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {flexible ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={flexible.src}
                            title={flexible.title}
                            alt={flexible.title}
                        >
                            <p>
                                A <strong>flexible keyboard</strong> is made from soft, bendy material—often rubber or
                                silicone—so you can <strong>roll it up</strong>, bend it slightly, or pack it in a
                                narrow space. It is not the same as a foldable keyboard: flexible ones do{' '}
                                <strong>not</strong> have a hinge in the middle like a book. They behave more like a
                                thin mat that you unroll on a table.
                            </p>
                            <p>
                                People use them for travel, small desks, or when they want something light and spill
                                friendly (some can be wiped clean). The keys may feel softer than a hard plastic
                                keyboard, and you must press a bit more deliberately so each key registers.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {foldable ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={foldable.src}
                            title={foldable.title}
                            alt={foldable.title}
                        >
                            <p>
                                A <strong>foldable keyboard</strong> has hinges in the middle so it{' '}
                                <strong>folds in half</strong> like a book or small notebook. When you open it, it
                                looks like a normal keyboard; when you fold it, it fits in a pocket or small pouch.
                                This is different from a flexible roll-up keyboard: foldables keep a rigid, flat
                                typing surface when open, and they fold in two, not roll into a tube.
                            </p>
                            <p>
                                Foldable keyboards are often used with tablets or phones and may connect
                                wirelessly—check with an adult to pair safely. They are handy for trips when you want
                                real keys but not a big bag.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>

                <div className="mt-8 rounded-2xl border-2 border-violet-200/80 bg-violet-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 md:text-xl">
                        How keys feel
                    </h3>
                    <p className="mt-3 text-slate-700">
                        Some keyboards feel <strong>soft and quiet</strong> when you press; others give a small{' '}
                        <strong>click</strong> or bump so you know the key pressed. Both are “right”—they are
                        different designs (like membrane vs mechanical). What matters is that you press straight down,
                        do not smash, and take breaks so your fingers stay happy.
                    </p>
                </div>
            </LessonBlock>

            <LessonBlock id="how-keyboard-works" title="How does a keyboard work?" emoji="⚙️" tone="sky">
                <p>You do not need to be an engineer to understand the basics:</p>
                <BulletList
                    items={[
                        'Under each key is a small circuit. When you press down, the circuit closes (connects).',
                        'The keyboard’s brain reads which key was pressed and sends a code to the computer—like a secret number for that key.',
                        'The computer’s software turns that code into a letter on the screen (or a shortcut action). That is why the same keyboard can type in English or another language if settings change.',
                        'Lights like Caps Lock or Num Lock show modes: all capitals, or using the number pad for numbers.',
                    ]}
                />
            </LessonBlock>

            {extraPhotos.length > 0 ? (
                <LessonBlock id="keyboard-key-zones" title="Zoom in on important keys" emoji="🔍" tone="emerald">
                    <p>
                        These pictures show <strong>groups of keys</strong> you will see on almost every keyboard—not
                        different “types,” but super useful zones to recognize. Each row has <strong>one photo</strong>{' '}
                        and a longer description.
                    </p>

                    <div className="mt-8 space-y-8">
                        {parts ? (
                            <OneImageDetailRow
                                imageSize="tall"
                                src={parts.src}
                                title={parts.title}
                                alt={parts.title}
                            >
                                <p>
                                    This view shows a <strong>whole keyboard layout</strong> so you can see how keys
                                    are grouped: the big letter area in the center, the number row above, the Space
                                    bar and modifier keys along the bottom, and often a number pad or arrow area on
                                    the side.
                                </p>
                                <p>
                                    Learning this “map” helps you find keys without staring—your fingers learn where
                                    Home row, Enter, and Shift live. Every keyboard follows the same big ideas even if
                                    some keys move a little on laptops or small models.
                                </p>
                            </OneImageDetailRow>
                        ) : null}

                        {arrows ? (
                            <OneImageDetailRow
                                imageSize="tall"
                                src={arrows.src}
                                title={arrows.title}
                                alt={arrows.title}
                            >
                                <p>
                                    The <strong>arrow keys</strong> are usually four keys in a triangle or cross:
                                    up, down, left, and right. They move the cursor or selection on the screen without
                                    using the mouse—great for editing a sentence, moving in a game, or going through a
                                    list.
                                </p>
                                <p>
                                    Practice: put your cursor in the middle of a line and use only arrows to move
                                    letter by letter. That builds control for homework and coding games later.
                                </p>
                            </OneImageDetailRow>
                        ) : null}

                        {functions ? (
                            <OneImageDetailRow
                                imageSize="tall"
                                src={functions.src}
                                title={functions.title}
                                alt={functions.title}
                            >
                                <p>
                                    The <strong>function keys</strong> sit in a row along the top of many keyboards,
                                    labeled <strong>F1</strong> through <strong>F12</strong> (sometimes more). Each
                                    program can give them a job—like opening help, refreshing a page, or changing
                                    volume in a game.
                                </p>
                                <p>
                                    On laptops you might need to hold <strong>Fn</strong> to use them as F-keys;
                                    sometimes the same keys also show brightness or sound icons. If something does
                                    not work, ask a grown-up to check “Fn lock” or keyboard settings.
                                </p>
                            </OneImageDetailRow>
                        ) : null}

                        {specials ? (
                            <OneImageDetailRow
                                imageSize="tall"
                                src={specials.src}
                                title={specials.title}
                                alt={specials.title}
                            >
                                <p>
                                    <strong>Special keys</strong> include Shift, Ctrl (Control), Alt, Windows or
                                    Command, and sometimes Menu. They almost never work alone—instead you hold one
                                    and press another key for a shortcut (like copy and paste).
                                </p>
                                <p>
                                    Learning a few safe shortcuts (with a teacher’s list) saves time. Remember:{' '}
                                    <strong>Shift</strong> makes capitals, <strong>Ctrl</strong> often combines with
                                    letters for commands, and <strong>Alt</strong> sometimes opens menus.
                                </p>
                            </OneImageDetailRow>
                        ) : null}
                    </div>
                </LessonBlock>
            ) : null}

            <LessonBlock id="how-to-use-keyboard" title="How to use a keyboard" emoji="✋" tone="rose">
                <p>Good habits help you type faster and avoid sore hands.</p>
                <BulletList
                    items={[
                        'Sit with your back straight, screen at eye level, and feet on the floor if you can.',
                        'Keep wrists relaxed—not bent up or down. Let your fingers do the moving.',
                        'Learn the home row: left hand on A, S, D, F and right hand on J, K, L. Bump marks on F and J help you find the place without looking.',
                        'Use the big Space bar between words. Enter goes to a new line or confirms. Backspace deletes the letter before the cursor.',
                        'Hold Shift while pressing a letter for a capital letter. Caps Lock makes many capitals in a row—turn it off when you are done.',
                        'Arrow keys move the typing cursor; practice them when you edit a sentence.',
                    ]}
                />
                <LessonTip title="Star habit for kids">
                    <p>
                        Try short typing games a few minutes a day. Accuracy first, speed later—and take breaks
                        every 20–30 minutes to stretch your fingers.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-keyboard" title="How to connect a keyboard to a computer" emoji="🔌" tone="sky">
                <p>
                    <strong>Desktop or USB keyboard:</strong>
                </p>
                <BulletList
                    items={[
                        'Find a USB port on the computer (thin rectangular slot).',
                        'Push the plug in gently the right way round—never force it.',
                        'Wait a few seconds; the computer usually sets it up by itself.',
                    ]}
                />
                <p className="pt-2">
                    <strong>Wireless with a dongle:</strong>
                </p>
                <BulletList
                    items={[
                        'Plug the tiny receiver into USB.',
                        'Turn the keyboard on (switch or power button).',
                        'If it does not work, check batteries or charge the keyboard.',
                    ]}
                />
                <p className="pt-2">
                    <strong>Bluetooth (with a grown-up if needed):</strong>
                </p>
                <BulletList
                    items={[
                        'Open Bluetooth settings on the computer.',
                        'Put the keyboard in pairing mode (see its manual—often a key combo).',
                        'Choose the keyboard from the list and confirm pairing.',
                    ]}
                />
                <p className="pt-2">
                    <strong>Laptop:</strong> The keyboard is already connected inside the machine—no extra plug
                    needed for the built-in keys.
                </p>
            </LessonBlock>

            <LessonBlock id="keyboard-troubleshooting" title="Troubleshooting keyboard issues" emoji="🛠️" tone="indigo">
                <p>If something goes wrong, stay calm. Try these steps—and ask a parent or teacher when unsure.</p>
                <TroubleList
                    rows={[
                        {
                            problem: 'Nothing appears when I type.',
                            fixes: [
                                'Click inside the text box or app so the computer knows where typing should go.',
                                'If wireless, check power switch, batteries, or charge. Try the USB dongle in another port.',
                                'Unplug the USB keyboard and plug it back in, or restart the computer once.',
                            ],
                        },
                        {
                            problem: 'Wrong letters or symbols show up.',
                            fixes: [
                                'The computer might be set to another language or keyboard layout—ask a grown-up to check Region & language / Keyboard settings.',
                                'If numbers type weirdly on the right side, try pressing Num Lock once.',
                            ],
                        },
                        {
                            problem: 'A key feels stuck or repeats the same letter.',
                            fixes: [
                                'Gently tilt the keyboard and tap out crumbs (turn it off or unplug first if you can).',
                                'Do not hit keys hard—pressing straight down is enough.',
                                'If liquid was spilled, turn off and unplug, then ask an adult for help cleaning.',
                            ],
                        },
                        {
                            problem: 'The computer says it does not see the keyboard.',
                            fixes: [
                                'Try a different USB port or another cable if yours is detachable.',
                                'Restart the computer after plugging in.',
                                'On school or family PCs, ask for help with drivers or Bluetooth pairing.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
