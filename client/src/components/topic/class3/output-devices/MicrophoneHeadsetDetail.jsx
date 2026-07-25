import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from '../../class2/input-devices/inputDevicesLessonUi';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from '../../../../data/classes/class3PartsOutputImages';

/**
 * Class 3 — Headset with microphone: gallery uses over-ear headset photo (output + input in one device).
 */
export default function MicrophoneHeadsetDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES.microphone || [];
    const headset = photos[0];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-indigo-900">headset with a microphone</strong> combines two jobs: the
                    headphones are an <strong>output</strong> device (you hear sound), and the microphone is an{' '}
                    <strong>input</strong> device (the computer hears you). Class 3 lists this under “microphone”
                    because talking in class is often the skill you practise first.
                </p>
            </div>

            <LessonBlock id="what-is-headset" title="What is a headset?" emoji="💡" tone="sky">
                <p>
                    A boom microphone sits on a small arm near your mouth, or tiny mics hide inside the ear cups.
                    Gaming headsets use big cushions for long sessions; office headsets may be lighter for video calls.
                </p>
                <p>
                    Using a headset instead of speakers plus a separate desk mic reduces echo: your teacher hears you
                    clearly without the computer playing their voice back into your microphone.
                </p>
                <BulletList
                    items={[
                        'Used for online class, voice chat with friends (with permission), team games, and voice recording.',
                        'Mute the mic when you are not speaking in a group call—background noise distracts everyone.',
                        'Adjust the headband so the ear cups seal; too loose and you lose bass; too tight and your head hurts.',
                    ]}
                />
            </LessonBlock>

            {headset ? (
                <LessonBlock id="photo-headset" title="Your folder photo — over-ear headset" emoji="📸" tone="indigo">
                    <p className="text-base leading-relaxed md:text-lg">
                        This picture from your <strong>output-devices</strong> folder shows a typical over-ear
                        headset with a microphone. Read the caption and the extra notes below.
                    </p>
                    <div className="mt-8">
                        <OneImageDetailRow
                            imageSize="types"
                            src={headset.src}
                            title={headset.title}
                            alt={headset.title}
                        >
                            <p>{headset.caption}</p>
                            <p>
                                <strong>Position:</strong> Move the boom so the mic sits a finger-width to the side of
                                your mouth, not in front of your nose (breathing noise) or under your chin (too quiet).
                            </p>
                            <p>
                                <strong>Care:</strong> Wipe ear pads occasionally with a slightly damp cloth; sweat
                                and dust can make them smell. Store with the cable loosely coiled—never kink a wire
                                tight around the headset.
                            </p>
                        </OneImageDetailRow>
                    </div>
                </LessonBlock>
            ) : null}

            <LessonBlock id="how-headset-works" title="How does the headset work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Headphone drivers: like tiny speakers, they move air to create sound waves in your ears.',
                        'Microphone capsule: vibrations from your voice become a small electrical signal.',
                        'The computer’s sound card or USB chip handles both directions; apps may show separate “input” and “output” levels.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="use-headset-well" title="How to use a headset for class" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Plug in before the lesson starts—USB headsets need a moment to be recognised.',
                        'In the video app, pick the correct microphone if the list shows more than one.',
                        'Speak clearly at a normal volume; the mic is closer than a room mic.',
                        'Raise your hand in the chat if you cannot hear—do not shout into the mic.',
                    ]}
                />
                <LessonTip title="Kind habit" tone="violet">
                    <p>
                        When you join a call from a shared room, tell family members you are on a class so they know
                        to keep voices down.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-headset" title="How headsets connect" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Two plugs (pink and green): older PCs use separate mic and headphone jacks; sometimes a splitter combines them.',
                        'Single TRRS plug: one hole for both mic and headphones on many laptops.',
                        'USB or wireless: USB often includes its own sound card; wireless needs pairing and charging.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="headset-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Others cannot hear you.',
                            fixes: [
                                'Unmute in the app and check the mic is not physically switched off on the cable.',
                                'In system settings, choose the right input device.',
                                'Try another USB port or re-pair Bluetooth.',
                            ],
                        },
                        {
                            problem: 'You hear yourself with a delay (echo).',
                            fixes: [
                                'Turn off “listen to this device” in Windows sound settings unless you need it.',
                                'Lower speaker volume or use closed-back headphones.',
                            ],
                        },
                        {
                            problem: 'Sound is only in one ear.',
                            fixes: [
                                'Check the balance slider in sound settings (should be centre).',
                                'Test with another device—if the same, the headset may need repair.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
