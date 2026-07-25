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
 * Class 3 — Speakers & headphones: tower + soundbar from output-devices folder.
 */
export default function SpeakersHeadphonesDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES['speakers-headphones'] || [];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-r from-rose-50 via-white to-orange-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    <strong className="text-rose-900">Speakers</strong> and <strong className="text-rose-900">headphones</strong> are{' '}
                    <strong>output devices</strong> for sound. They turn electrical audio signals into vibrations in
                    the air that your ears hear as music, voices, game effects, and beeps.
                </p>
            </div>

            <LessonBlock id="what-is-sound-output" title="What do speakers and headphones do?" emoji="💡" tone="sky">
                <p>
                    The computer creates numbers that describe sound waves—loudness, pitch, and timing. An amplifier
                    makes those signals strong enough to move speaker cones so you can hear clear audio.
                </p>
                <p>
                    This lesson focuses on room audio devices. Ear buds are covered in their own subtopic page so you
                    can learn safe in-ear listening separately.
                </p>
                <BulletList
                    items={[
                        'Used for online classes, music practice, games, and accessibility (screen readers).',
                        'Keep volume comfortable, especially during long study sessions.',
                        'Wireless headphones use Bluetooth; remember to charge them and pair them with a grown-up if needed.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-speakers" title="Types in your photos — tower and soundbar" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Your <strong>output-devices</strong> folder shows two common room-audio devices here: tall tower
                    speakers and a long soundbar. Each fits a different setup.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Quick comparison
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Tower speakers</strong> — Often sold in pairs for
                            stereo (left and right). Good bass and clear voices when you have desk space.
                        </p>
                        <p>
                            <strong className="text-slate-900">Soundbar</strong> — Sits under a monitor or TV; some
                            models include a small subwoofer for deep bass without two big boxes.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Study each photo in detail
                    </h3>

                    {photos.map((p) => (
                        <OneImageDetailRow key={p.title} imageSize="types" src={p.src} title={p.title} alt={p.title}>
                            <p>{p.caption}</p>
                            <p>
                                When you set up speakers at home, leave a little space between the speaker and the
                                wall—bass can boom if the speaker is pushed flat against the corner.
                            </p>
                        </OneImageDetailRow>
                    ))}
                </div>
            </LessonBlock>

            <LessonBlock id="how-sound-works" title="How does the computer make sound?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Apps or the browser send digital audio to the sound card or USB audio chip.',
                        'The chip converts numbers to an electrical wave that matches the speaker’s movement.',
                        'Stereo means left and right channels; some games use surround sound with many speakers.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="safe-listening" title="Safe listening habits" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Follow the 60/60 rule: about 60% volume for no more than 60 minutes before a break.',
                        'If your ears ring after listening, the volume was too high—turn it down next time.',
                        'Never share earbuds in a way that hurts hygiene—use your own tips or clean shared gear with adult help.',
                    ]}
                />
                <LessonTip title="Classroom" tone="violet">
                    <p>
                        Unless the teacher says it is okay, keep headphones off one ear so you can still hear fire
                        alarms and instructions in the room.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-audio" title="How to connect speakers or headphones" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        '3.5 mm jack: plug green for speakers, pink often for mic on some desktops; laptops may use one combo port.',
                        'USB: some headsets or speakers use USB for both power and sound; install drivers if asked.',
                        'Bluetooth: pairing is in Settings; forget old devices when you sell or give away headphones.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="audio-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'No sound at all.',
                            fixes: [
                                'Check the speaker icon in the taskbar: is output muted?',
                                'Try the front and back audio ports on a desktop tower.',
                                'For Bluetooth, confirm the headset is connected and charged.',
                            ],
                        },
                        {
                            problem: 'Buzzing or humming.',
                            fixes: [
                                'Move cables away from power cables; messy bundles can pick up noise.',
                                'Try a different USB port if you use a USB sound card.',
                            ],
                        },
                        {
                            problem: 'Only one ear works on headphones.',
                            fixes: [
                                'Plug in fully; wiggle gently to see if the jack is loose.',
                                'Test with another device—if the same, the headphone may be damaged.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
