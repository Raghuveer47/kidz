import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function JoystickGamepadDetail({ deviceSlug = 'joystick-gamepad' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const arcade = photoByTitle(typesPhotos, 'Arcade joystick');
    const digital = photoByTitle(typesPhotos, 'Digital joystick');
    const analog = photoByTitle(typesPhotos, 'Analog joystick');
    const flight = photoByTitle(typesPhotos, 'Flight joystick');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 via-white to-rose-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    <strong className="text-orange-900">Joysticks</strong> and <strong className="text-rose-900">gamepads</strong>{' '}
                    are input devices made for games. Sticks and buttons send many commands quickly—moving characters,
                    driving cars, or flying planes in software.
                </p>
            </div>

            <LessonBlock id="what-is-joystick" title="What is a joystick or gamepad?" emoji="💡" tone="sky">
                <p>
                    They are <strong>input devices</strong> for <em>play and simulation</em>. Instead of only typing
                    keys, you steer with sticks and press action buttons.
                </p>
                <p>
                    Joysticks first became famous in arcade machines and flight simulators. Later, home game consoles
                    introduced gamepads with many buttons, and modern controllers now include smooth analog sticks for
                    3D movement.
                </p>
                <BulletList
                    items={[
                        'Arcade sticks feel like old coin-op games; flight sticks mimic airplane controls.',
                        'Gamepads fit two hands with thumb sticks and shoulder buttons—common on consoles and PC.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-joystick" title="Types you might see" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Joysticks differ by how they read direction—digital steps, smooth analog tilt, arcade style, or
                    full flight controls. Read the short guide, then one photo per row with a story for each.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Digital vs analog
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Digital</strong> sticks send simple directions—up,
                            down, left, right—like four arrows.
                        </p>
                        <p>
                            <strong className="text-slate-900">Analog</strong> sticks send smooth angles and how far
                            you push—better for 3D games and flying.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of joysticks — one photo per row
                    </h3>

                    {arcade ? (
                        <OneImageDetailRow imageSize="types" src={arcade.src} title={arcade.title} alt={arcade.title}>
                            <p>
                                An <strong>arcade joystick</strong> has a short stick and big buttons like classic
                                arcade games. It is great for fighting games and retro titles where quick taps and
                                combos matter.
                            </p>
                            <p>
                                The stick usually moves in eight directions; practice small movements so you do not
                                wear out the switches by slamming.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {digital ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={digital.src}
                            title={digital.title}
                            alt={digital.title}
                        >
                            <p>
                                A <strong>digital joystick</strong> sends clear on/off signals for each direction.
                                Simple games and some robots use this style because it is easy to program and very
                                reliable.
                            </p>
                            <p>
                                You will not get smooth half-speed movement like analog—only full direction steps.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {analog ? (
                        <OneImageDetailRow imageSize="types" src={analog.src} title={analog.title} alt={analog.title}>
                            <p>
                                An <strong>analog joystick</strong> tilts in a full circle and measures how far you
                                push—perfect for driving, flying, and looking around in 3D worlds. Most modern
                                gamepads use two analog sticks.
                            </p>
                            <p>
                                Let the stick return to center when you let go; do not twist harder than needed.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {flight ? (
                        <OneImageDetailRow imageSize="types" src={flight.src} title={flight.title} alt={flight.title}>
                            <p>
                                A <strong>flight joystick</strong> copies airplane controls: a sturdy stick, throttle
                                levers, and many buttons for cockpit games. It is bigger than a normal gamepad and
                                sits on the desk.
                            </p>
                            <p>
                                Calibrate it in the game’s settings so “neutral” matches your rest position—ask an
                                adult for help the first time.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-joystick-works" title="How do they work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Each stick position and button press sends codes to the computer or console.',
                        'Analog sticks measure how far you push, not just left/right—so walking vs running can feel natural.',
                        'Games map buttons to jump, shoot, pause, etc.; the same controller can work in many games.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-joystick" title="How to use them well" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Hold the controller firmly but not squeezed; thumbs rest on sticks without pressing too hard.',
                        'Learn which button does what in each game—menus often show a picture map.',
                        'Take breaks: stretch hands and look away from the screen every 20–30 minutes.',
                        'Follow family rules for age ratings and screen time.',
                    ]}
                />
                <LessonTip title="Balance" tone="emerald">
                    <p>
                        Games build reflexes and fun, but homework, sleep, and outdoor play matter too. Play
                        age-appropriate games and be kind to teammates online.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-joystick" title="How to connect to a computer" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'USB: plug in; many PCs recognize common controllers automatically.',
                        'Bluetooth: pair like a wireless mouse—hold the pair button on the pad, add in settings.',
                        'Wireless adapters: some consoles use a USB receiver sold with the controller.',
                        'Install companion software only from trusted sources, with an adult.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="joystick-troubleshooting" title="Troubleshooting" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Game does not respond to the controller.',
                            fixes: [
                                'Check USB connection or Bluetooth battery.',
                                'In game settings, choose “controller” or calibrate inputs.',
                                'Restart the game; on PC, try a different USB port.',
                            ],
                        },
                        {
                            problem: 'Stick drifts (character moves alone).',
                            fixes: [
                                'Clean around the stick base gently; avoid food dust.',
                                'Some apps let you adjust dead zone—ask an adult to help in settings.',
                            ],
                        },
                        {
                            problem: 'Buttons stick or double-press.',
                            fixes: [
                                'Gently clean; do not pour liquid into the device.',
                                'If dropped hard, ask an adult about repair or warranty.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
