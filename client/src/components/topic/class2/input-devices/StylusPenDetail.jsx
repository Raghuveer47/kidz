import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function StylusPenDetail({ deviceSlug = 'stylus-pen' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const stylus = photoByTitle(typesPhotos, 'Stylus pen');
    const haptic = photoByTitle(typesPhotos, 'Haptic stylus');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-blue-200 bg-gradient-to-r from-sky-50 via-white to-indigo-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-indigo-900">stylus</strong> or <strong className="text-indigo-900">digital pen</strong>{' '}
                    is a pointer for touchscreens. It helps you write neatly, draw thin lines, and tap small buttons
                    that fingers find tricky.
                </p>
            </div>

            <LessonBlock id="what-is-stylus" title="What is a stylus?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> for touch. Some tablets only need your finger; a stylus
                    adds precision for notes and art.
                </p>
                <p>
                    The stylus idea is very old?people have always used pens to write. Digital styluses started as
                    simple screen pointers and later became smart pens with pressure and tilt, making tablets useful
                    for handwriting and drawing.
                </p>
                <BulletList
                    items={[
                        'Feels closer to pencil or pen on paper—especially with the right apps.',
                        'Reduces fingerprints on the screen when you draw for a long time.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-stylus" title="Types of stylus" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Pens can be simple rubber tips that act like a finger, or smart pens with batteries, pressure, and
                    even vibration. Below: one photo per row with a longer explanation.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Passive vs active
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Passive</strong> styluses need no battery—they act like
                            a thin finger.
                        </p>
                        <p>
                            <strong className="text-slate-900">Active / haptic</strong> pens use electronics for
                            pressure, palm rejection, or tiny vibrations.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of styluses — one photo per row
                    </h3>

                    {stylus ? (
                        <OneImageDetailRow imageSize="types" src={stylus.src} title={stylus.title} alt={stylus.title}>
                            <p>
                                A <strong>stylus pen</strong> (often passive) has a slim tip so you can write small
                                letters and tap tiny icons. It is cheaper and works on many touch screens—great for
                                first steps in digital drawing.
                            </p>
                            <p>
                                Press lightly; if the line is too thick, check app brush settings. Replace the tip
                                when it wears out—your tablet manual lists the right size.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {haptic ? (
                        <OneImageDetailRow imageSize="types" src={haptic.src} title={haptic.title} alt={haptic.title}>
                            <p>
                                A <strong>haptic stylus</strong> adds gentle buzzes or taps so drawing on glass feels
                                more like pencil on paper. It pairs with apps that support the feature and may need
                                charging or pairing like Bluetooth.
                            </p>
                            <p>
                                Turn off strong vibration if your hand gets tired, and always use a pen approved for
                                your tablet so the screen stays safe.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-stylus-works" title="How does a stylus work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'The screen senses the pen’s tip position (and sometimes tilt and pressure).',
                        'Active pens talk to the tablet with wireless signals so the tablet can ignore your resting palm.',
                        'Drawing apps turn those signals into lines, colors, and brush sizes.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-stylus" title="How to use a stylus" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Hold it like a pencil; do not press harder than needed—screens scratch if you use metal tips not meant for your device.',
                        'Use only pens recommended for your tablet to protect the coating.',
                        'Replace worn tips when lines get fuzzy (follow the maker’s guide).',
                        'Cap or store the pen in a case so it does not roll off the desk.',
                    ]}
                />
                <LessonTip title="School use" tone="sky">
                    <p>
                        Styluses are great for math practice, tracing letters, and digital art—practice keeping
                        strokes smooth and your wrist relaxed.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-stylus" title="How to connect a stylus" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Passive pens: nothing to pair—just touch the screen.',
                        'Bluetooth active pens: charge them, turn on, pair in tablet settings, sometimes attach magnetically to charge.',
                        'Some tablets only work with their own brand of pen; check compatibility before buying.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="stylus-troubleshooting" title="Troubleshooting" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Lines are missing or jumpy.',
                            fixes: [
                                'Clean the screen and pen tip with a soft dry cloth.',
                                'Charge the pen if it is battery-powered.',
                                'Remove thick screen protectors that some pens dislike.',
                            ],
                        },
                        {
                            problem: 'Palm marks appear while drawing.',
                            fixes: [
                                'Turn on palm rejection in the app or tablet settings if available.',
                                'Wear a drawing glove that covers the side of the hand (optional).',
                            ],
                        },
                        {
                            problem: 'Pen not pairing.',
                            fixes: [
                                'Forget device and pair again; update tablet software.',
                                'Confirm you bought the pen model that matches your tablet.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
