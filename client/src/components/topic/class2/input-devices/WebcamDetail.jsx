import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function WebcamDetail({ deviceSlug = 'webcam' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const builtIn = photoByTitle(typesPhotos, 'Built-in camera');
    const external = photoByTitle(typesPhotos, 'External webcam');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-r from-pink-50 via-white to-violet-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-violet-900">webcam</strong> is a small video camera that sends live
                    picture into your computer—so teachers and family can see you during video calls or lessons.
                </p>
            </div>

            <LessonBlock id="what-is-webcam" title="What is a webcam?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> for <em>video</em> (and sometimes audio if it has a
                    built-in mic). The computer shows your image in apps like classroom meet or video chat.
                </p>
                <p>
                    Early webcams were used mainly by researchers and then became popular for family video calls. Over
                    time, cameras became smaller and clearer, so now laptops, tablets, and classrooms use them every
                    day for learning and meetings.
                </p>
                <BulletList
                    items={[
                        'Helps with remote learning, show-and-tell, and staying in touch with people you trust.',
                        'Can be used for simple recordings when your project needs a video clip.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-webcam" title="Types of webcam" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    You can use a <strong>camera built into the laptop</strong> or add a <strong>separate webcam</strong>{' '}
                    on a desktop. Both do the same job: send live video to the computer. One photo per row below.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Built-in vs add-on
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Built-in</strong> — Always above the screen on a laptop;
                            nothing to plug in.
                        </p>
                        <p>
                            <strong className="text-slate-900">External</strong> — Clips on the monitor or sits on a
                            stand; plugs in with USB—great for tower PCs that have no camera.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of webcams — one photo per row
                    </h3>

                    {builtIn ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={builtIn.src}
                            title={builtIn.title}
                            alt={builtIn.title}
                        >
                            <p>
                                A <strong>built-in camera</strong> lives in the thin bezel above your laptop screen.
                                It is always there when you open the lid—no extra plug. Some have a privacy shutter
                                you slide closed when not in class.
                            </p>
                            <p>
                                Lighting matters: face a lamp or window in front of you, not behind, so your face is
                                bright and clear for the teacher.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {external ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={external.src}
                            title={external.title}
                            alt={external.title}
                        >
                            <p>
                                An <strong>external webcam</strong> clips on top of the monitor or stands on a small
                                tripod. It connects with USB, and sometimes has a mic built in. Families use it on
                                desktop computers that do not have a camera in the screen.
                            </p>
                            <p>
                                Ask an adult to help install drivers the first time, and choose this camera in
                                the meeting app if both built-in and external cameras show up.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-webcam-works" title="How does a webcam work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'A sensor captures many photos per second; software turns that stream into video.',
                        'Light matters: a bright, even room looks clearer than a very dark corner.',
                        'The computer compresses video so it can travel over the internet to other people.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-webcam" title="How to use a webcam" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Sit so your face is centered; avoid strong light behind you (window) that makes you a dark silhouette.',
                        'Look toward the camera when you speak—it feels more friendly to listeners.',
                        'Use only apps and links your teacher or parents approve.',
                        'Mute or stop video when asked, or when you leave the room.',
                    ]}
                />
                <LessonTip title="Safety and privacy" tone="violet">
                    <p>
                        Never join video calls with strangers. Cover the camera or close it when not in use if your
                        family prefers. Tell an adult if anyone asks for private pictures or video.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-webcam" title="How to connect a webcam" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Built-in: no plug; apps list it as a camera device.',
                        'USB webcam: plug in, wait for drivers, choose it in the meeting app’s camera menu.',
                        'Allow camera permission only for trusted apps.',
                        'If two cameras exist (built-in + USB), pick the one you want in settings.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="webcam-troubleshooting" title="Troubleshooting webcam issues" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Black screen or camera not found.',
                            fixes: [
                                'Check a physical privacy shutter is open if your laptop has one.',
                                'Select the right camera in the app.',
                                'Close other apps that might be using the camera exclusively.',
                                'Restart the app or computer; replug USB webcams.',
                            ],
                        },
                        {
                            problem: 'Picture is blurry or dark.',
                            fixes: [
                                'Clean the lens gently with a soft dry cloth.',
                                'Add a lamp in front of you, not behind.',
                            ],
                        },
                        {
                            problem: 'Video freezes or lags.',
                            fixes: [
                                'Ask others to close heavy downloads; use wired internet if possible.',
                                'Lower video quality in app settings on slow connections.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
