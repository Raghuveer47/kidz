import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function MicrophoneDetail({ deviceSlug = 'microphone' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const dynamic = photoByTitle(typesPhotos, 'Dynamic microphone');
    const condenser = photoByTitle(typesPhotos, 'Condenser microphone');
    const ribbon = photoByTitle(typesPhotos, 'Ribbon microphone');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 via-white to-purple-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-purple-900">microphone</strong> (mic) picks up your voice and sound and
                    sends it into the computer so others can hear you in calls, or so apps can record and save audio.
                </p>
            </div>

            <LessonBlock id="what-is-microphone" title="What is a microphone?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> for <em>sound</em>. Keyboards type text; microphones
                    bring in voices, music, and noise levels the software can use.
                </p>
                <p>
                    Microphones have a long history: early versions were used in telephones and radio many decades
                    ago. As computers and the internet grew, microphones became part of online classes, voice chats,
                    and home recordings.
                </p>
                <BulletList
                    items={[
                        'Used in online class, voice chat with friends (with permission), voice notes, and some games.',
                        'Voice assistants listen through a mic—but always ask a grown-up before using those features.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-microphone" title="Types of microphone" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Microphones are built for different jobs: loud stages, quiet classrooms, or studio music. Here is
                    a quick guide, then a row for each photo with a longer explanation.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Loud vs quiet
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Dynamic mics</strong> handle loud sounds and bumps
                            well—think assemblies and stage use.
                        </p>
                        <p>
                            <strong className="text-slate-900">Condenser mics</strong> are more sensitive—great for
                            soft speech but they pick up more background noise too.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of microphones — one photo per row
                    </h3>

                    {dynamic ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={dynamic.src}
                            title={dynamic.title}
                            alt={dynamic.title}
                        >
                            <p>
                                A <strong>dynamic microphone</strong> has a tough design that stands up to loud
                                voices and instruments. It is less likely to distort when someone shouts or when a
                                drum hits nearby—common in classrooms and live events.
                            </p>
                            <p>
                                You still speak clearly and point the mic toward your mouth; do not tap it like a
                                drum—those bumps sound loud in the recording!
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {condenser ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={condenser.src}
                            title={condenser.title}
                            alt={condenser.title}
                        >
                            <p>
                                A <strong>condenser microphone</strong> captures quiet details and soft speech very
                                well. Many USB podcast mics and desktop “talking” mics use this kind.
                            </p>
                            <p>
                                Because it is sensitive, close windows or turn off noisy fans when you record, and
                                mute when you are not speaking in class so everyone hears less hiss.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {ribbon ? (
                        <OneImageDetailRow imageSize="types" src={ribbon.src} title={ribbon.title} alt={ribbon.title}>
                            <p>
                                A <strong>ribbon microphone</strong> is a classic studio style with a warm, smooth
                                sound. You may see it in pictures of radio stations or music recording—handle it
                                gently; older designs can be damaged by very loud blasts.
                            </p>
                            <p>
                                For learning, remember: it is a type of pro mic, not a toy—look, do not touch, unless
                                a teacher or sound engineer says it is okay.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-microphone-works" title="How does a microphone work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Sound waves hit a thin part inside the mic (like a tiny drum skin) that vibrates.',
                        'Those vibrations turn into an electrical signal.',
                        'The computer’s sound card or USB chip measures the signal and software stores or sends it as audio.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-microphone" title="How to use a microphone" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Face the mic (or keep a headset mic a finger-width from your mouth—not too far, not touching.',
                        'Speak clearly at a normal volume; shouting can sound distorted.',
                        'In group calls, mute when you are not talking so others do not hear background noise.',
                        'Ask before recording someone else’s voice; privacy matters.',
                    ]}
                />
                <LessonTip title="Kind habit online" tone="violet">
                    <p>
                        Use headphones during class when you can—it stops your mic from picking up the teacher’s
                        voice from your speakers (echo).
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-microphone" title="How to connect a microphone" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Built-in: already connected; choose it in app settings if there is a list of mics.',
                        'Headset: plug into the pink jack (older PCs), USB port, or single headset jack; or pair if Bluetooth.',
                        'USB mic: plug in, wait for setup, then select it in your meeting or recording app.',
                        'Allow microphone permission when a trusted app asks (browser or classroom software)—with an adult’s OK.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="microphone-troubleshooting" title="Troubleshooting microphone issues" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Nobody hears me in a call.',
                            fixes: [
                                'Unmute yourself in the app and check the computer is not muted.',
                                'Pick the correct microphone in the app’s audio settings.',
                                'On Windows/Mac, check privacy: microphone access allowed for that app.',
                                'Try unplugging and replugging USB, or reconnect Bluetooth.',
                            ],
                        },
                        {
                            problem: 'Sound is scratchy or very quiet.',
                            fixes: [
                                'Move closer to the mic or adjust headset position.',
                                'Lower background noise: close windows, turn off loud fans if possible.',
                                'Boost input volume slightly in sound settings—ask an adult so it does not distort.',
                            ],
                        },
                        {
                            problem: 'Hissing or buzzing.',
                            fixes: [
                                'Separate cables from power cords if you hear electrical hum.',
                                'Try another USB port or cable.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
