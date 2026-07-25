import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function TouchpadDetail({ deviceSlug = 'touchpad' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const capacitive = photoByTitle(typesPhotos, 'Capacitive touchpad');
    const resistive = photoByTitle(typesPhotos, 'Resistive touchpad');
    const haptic = photoByTitle(typesPhotos, 'Haptic touchpad');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-teal-200 bg-gradient-to-r from-cyan-50 via-white to-teal-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-teal-900">touchpad</strong> (trackpad) is a flat pad below the keyboard
                    on many laptops. Your finger slides on it like a mouse, without carrying a separate device.
                </p>
            </div>

            <LessonBlock id="what-is-touchpad" title="What is a touchpad?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> for pointing and clicking. The computer reads where your
                    finger touches and how it moves.
                </p>
                <p>
                    Touchpads became common when laptops got smaller and people needed a built-in pointer without
                    carrying a mouse. Early touchpads were simple and less smooth, but modern ones added gestures like
                    two-finger scroll and tap-to-click.
                </p>
                <BulletList
                    items={[
                        'It saves space when you travel—keyboard and pointer in one laptop.',
                        'You can often tap to click, or press the bottom corners like buttons.',
                        'Many touchpads support multi-finger gestures (scroll, zoom) when the software allows it.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-touchpad" title="Types of touchpad" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Touchpads are built in different ways to sense your finger. Some feel like a phone screen; others
                    need a firmer press; some give a tiny buzz when you tap. Read the short science box, then see each
                    type in a big photo with details.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Touch vs pressure
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Capacitive</strong> pads notice the tiny electrical
                            touch of your skin—like a smartphone screen.
                        </p>
                        <p>
                            <strong className="text-slate-900">Resistive</strong> pads notice <em>pressure</em> and can
                            work with a stylus or gloved finger on some machines.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of touchpads — one photo per row
                    </h3>

                    {capacitive ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={capacitive.src}
                            title={capacitive.title}
                            alt={capacitive.title}
                        >
                            <p>
                                A <strong>capacitive touchpad</strong> is the most common on laptops today. It
                                detects your finger’s presence without you pushing hard—light slides and taps work
                                best with dry, clean fingers.
                            </p>
                            <p>
                                Two-finger scroll and pinch-to-zoom are often built in. If the pad feels too sensitive,
                                sensitivity can be lowered in settings with an adult.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {resistive ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={resistive.src}
                            title={resistive.title}
                            alt={resistive.title}
                        >
                            <p>
                                A <strong>resistive touchpad</strong> uses layers that press together when you push.
                                It can work when you wear thin gloves or use a blunt stylus meant for resistive
                                screens—less common on home laptops, more in special tools.
                            </p>
                            <p>
                                You may need a slightly firmer press than on a capacitive pad, so practice moving
                                slowly until it feels natural.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {haptic ? (
                        <OneImageDetailRow imageSize="types" src={haptic.src} title={haptic.title} alt={haptic.title}>
                            <p>
                                A <strong>haptic touchpad</strong> adds small vibrations or a click sensation when you
                                tap, so it feels more like pressing a real button even though the surface is smooth
                                glass or plastic.
                            </p>
                            <p>
                                It can help you know the computer “heard” your tap—useful in quiet class or when you
                                are learning to tap instead of physically clicking.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-touchpad-works" title="How does a touchpad work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'A grid under the surface notices finger position and movement.',
                        'The laptop sends that as pointer movement to the screen—same idea as a mouse, but with touch.',
                        'Drivers (small programs) decide whether one finger moves the cursor, two fingers scroll, etc.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-touchpad" title="How to use a touchpad" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Use a dry, clean fingertip; wet or very dry hands can act jumpy.',
                        'Slide one finger to move the pointer. Tap once to click, or press the physical button area if your laptop has one.',
                        'Two-finger scroll: slide two fingers up/down to move a long page.',
                        'Practice precision: move slowly for tiny targets like checkboxes.',
                    ]}
                />
                <LessonTip title="When homework needs a mouse" tone="violet">
                    <p>
                        For long drawing or games, an external mouse can feel easier—and that is okay. The touchpad
                        is still perfect for class and travel.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-touchpad" title="How the touchpad connects" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'On a laptop, the touchpad is built in and connected inside—no cable for you to plug.',
                        'If you add a USB or Bluetooth mouse, both can work; settings let you choose speed and sensitivity.',
                        'External trackpads exist for desktops but are less common; they connect by USB or Bluetooth like a mouse.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="touchpad-troubleshooting" title="Troubleshooting touchpad issues" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'The pointer does not move or the pad seems dead.',
                            fixes: [
                                'Check if a keyboard key disabled the touchpad (some laptops use Fn + a touchpad icon).',
                                'Restart the laptop.',
                                'In settings, make sure the touchpad is turned on (ask an adult to open Touchpad settings).',
                            ],
                        },
                        {
                            problem: 'Cursor jumps or is too fast/slow.',
                            fixes: [
                                'Wipe the pad gently with a soft dry cloth.',
                                'Adjust pointer speed and sensitivity in settings.',
                                'Rest palms away from the pad while typing if possible.',
                            ],
                        },
                        {
                            problem: 'Gestures do not work.',
                            fixes: [
                                'Gestures depend on the laptop brand and drivers—update or check gesture toggles in settings.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
