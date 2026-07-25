import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function MouseDetail({ deviceSlug = 'mouse' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const wired = photoByTitle(typesPhotos, 'Wired mouse');
    const wireless = photoByTitle(typesPhotos, 'Wireless mouse');
    const optical = photoByTitle(typesPhotos, 'Optical mouse');
    const gaming = photoByTitle(typesPhotos, 'Gaming mouse');
    const trackball = photoByTitle(typesPhotos, 'Trackball');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-amber-900">mouse</strong> is a pointing device. You move it on a desk or
                    pad, and a little arrow on the screen moves with you so you can open apps, click buttons, and
                    draw boxes around things.
                </p>
            </div>

            <LessonBlock id="what-is-mouse" title="What is a mouse?" emoji="💡" tone="sky">
                <p>
                    A mouse is an <strong>input device</strong>. It tells the computer <em>where</em> you want to
                    point and <em>when</em> you want to click.
                </p>
                <p>
                    The first computer mouse was built in the 1960s as a small wooden box with wheels. Later, ball
                    mice became popular, and today most are optical or wireless. Even though the shape improved over
                    time, the core idea stayed the same: move your hand, move the pointer.
                </p>
                <BulletList
                    items={[
                        'Most mice have at least a left button, a right button, and often a scroll wheel in the middle.',
                        'You use it with a keyboard: type with keys, point and click with the mouse.',
                        'Trackpads on laptops do a similar job with your finger instead of a separate mouse.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-mouse" title="Types of mouse" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Mice come in different shapes! We sort them by <strong>how they connect</strong> to the computer,
                    how they <strong>read movement</strong> (sensor or trackball), and special designs for{' '}
                    <strong>games</strong>. Below is one photo per row with a longer story for each kind.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        How they connect
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Wired mouse</strong> — A USB cable carries both power
                            and signals. You never change batteries in the mouse itself; the cable must reach a free
                            port.
                        </p>
                        <p>
                            <strong className="text-slate-900">Wireless mouse</strong> — No tail to the PC. It uses a
                            tiny USB receiver or <strong>Bluetooth</strong>. You switch it on, and sometimes pair once
                            with a grown-up’s help. Remember batteries or charging!
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of mice — one photo per row
                    </h3>

                    {wired ? (
                        <OneImageDetailRow imageSize="types" src={wired.src} title={wired.title} alt={wired.title}>
                            <p>
                                A <strong>wired mouse</strong> plugs straight into the computer with a cable. It is
                                ready the moment you plug it in—no pairing step. The cord should be long enough to move
                                freely but not so long that it tangles; many desks use a small clip to keep the wire
                                tidy.
                            </p>
                            <p>
                                Great for school computers where wireless is not allowed, or when you never want to
                                worry about batteries running out during homework.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {wireless ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={wireless.src}
                            title={wireless.title}
                            alt={wireless.title}
                        >
                            <p>
                                A <strong>wireless mouse</strong> lets you slide and click without a cable dragging on
                                the desk. It usually needs a battery inside or a rechargeable cell—check the lights or
                                power switch when the pointer stops moving.
                            </p>
                            <p>
                                Keep the tiny USB dongle safe if your mouse uses one; without it, the computer may not
                                “see” the mouse. Bluetooth models pair like wireless headphones.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {optical ? (
                        <OneImageDetailRow imageSize="types" src={optical.src} title={optical.title} alt={optical.title}>
                            <p>
                                An <strong>optical mouse</strong> shines a small light on the desk and reads how that
                                pattern moves—almost every modern corded or wireless mouse works this way. Use a mouse
                                pad or non-glossy surface so the sensor stays happy.
                            </p>
                            <p>
                                “Laser” mice are a fancier kind of optical sensor that can work on more surfaces, but
                                the idea is the same: track movement without a rolling ball inside.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {gaming ? (
                        <OneImageDetailRow imageSize="types" src={gaming.src} title={gaming.title} alt={gaming.title}>
                            <p>
                                A <strong>gaming mouse</strong> is shaped for long sessions and may have extra buttons
                                on the side for skills in games. It still does normal clicks for school—just more
                                comfortable for quick moves.
                            </p>
                            <p>
                                Software from the maker sometimes lets you change what each button does (ask an adult
                                before installing). Pick a size that fits your hand so your fingers rest naturally.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {trackball ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={trackball.src}
                            title={trackball.title}
                            alt={trackball.title}
                        >
                            <p>
                                A <strong>trackball</strong> keeps the body still: you spin a ball with your thumb or
                                fingers, and the pointer moves on screen. It saves desk space and helps some people
                                with sore wrists because the arm moves less.
                            </p>
                            <p>
                                You clean the ball and sockets gently when movement feels rough—turn it off or unplug
                                first, then ask an adult if you are unsure.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-mouse-works" title="How does a mouse work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Sensors watch how the mouse slides and send “move” messages many times per second.',
                        'When you press a button, the computer gets a click signal at the current arrow position.',
                        'The scroll wheel sends “scroll up/down” so long pages move without dragging the bar.',
                        'Software turns all of that into what you see: opening icons, selecting text, or closing windows.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-mouse" title="How to use a mouse" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Rest your hand lightly; move the whole mouse—not only the wrist twisted sideways.',
                        'Left click usually selects or opens. Right click often opens a small extra menu.',
                        'Double-click (two quick left clicks) opens files or programs on many computers.',
                        'Drag: hold the left button down while moving to move icons or select text.',
                        'Use a clean mouse pad or desk so the sensor tracks smoothly.',
                    ]}
                />
                <LessonTip title="Ergonomics for kids" tone="emerald">
                    <p>
                        Take breaks. If your hand feels tired, shake it gently and stretch fingers. A mouse that fits
                        your hand size is easier than one too big or too small.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-mouse" title="How to connect a mouse to a computer" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'USB wired: plug into any free USB port; wait a few seconds.',
                        'Wireless dongle: plug the receiver, switch the mouse on, move it—pointer should wake up.',
                        'Bluetooth: turn on pairing on the mouse, add it in the computer’s Bluetooth settings (ask an adult the first time).',
                        'Some laptops use only the touchpad unless you plug in or pair a mouse—that is normal.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="mouse-troubleshooting" title="Troubleshooting mouse issues" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'The pointer does not move.',
                            fixes: [
                                'Check wireless power and batteries; try re-plugging the USB receiver.',
                                'Use a different surface—some glass tables confuse optical mice; try a pad or paper.',
                                'Restart the computer once after reconnecting.',
                            ],
                        },
                        {
                            problem: 'Clicks do the wrong thing or double-click by accident.',
                            fixes: [
                                'Open mouse settings and slow down double-click speed if needed.',
                                'Clean the button edges gently; sticky snacks can cause double clicks.',
                            ],
                        },
                        {
                            problem: 'Scroll wheel skips or sticks.',
                            fixes: [
                                'Blow very gently around the wheel (no liquids) or ask an adult to clean carefully.',
                                'Try another USB port for wired mice.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
