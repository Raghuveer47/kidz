import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from '../../class2/input-devices/inputDevicesLessonUi';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from '../../../../data/classes/class3PartsOutputImages';

export default function MonitorDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES.monitor || [];
    const monitor = photos[0];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-sky-200 bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-sky-900">monitor</strong> is a visual <strong>output device</strong>.
                    It displays words, images, animations, videos, and app windows right in front of you so you can
                    read clearly, edit carefully, and learn comfortably.
                </p>
            </div>

            <LessonBlock id="what-is-monitor" title="What is a monitor?" emoji="??" tone="sky">
                <p>
                    Think of the monitor as the computer's face. The CPU does calculations and decisions inside, but
                    the monitor is where you <em>see</em> those results. Without it, you would not know what file you
                    opened, which key you typed, or whether your project is correct.
                </p>
                <BulletList
                    items={[
                        'Used for reading chapters, typing notes, coding practice, online classes, and video calls.',
                        'Modern LED monitors are slimmer and brighter than many old CRT-style displays.',
                        'Screen quality depends on resolution, refresh rate, panel type, and colour calibration.',
                    ]}
                />
            </LessonBlock>

            {monitor ? (
                <LessonBlock id="monitor-photo" title="Your folder photo — LED monitor" emoji="??" tone="indigo">
                    <OneImageDetailRow imageSize="types" src={monitor.src} title={monitor.title} alt={monitor.title}>
                        <p>{monitor.caption}</p>
                        <p>
                            In this type, LEDs provide backlight so text stays crisp and bright. For study, place the
                            monitor at eye level and about an arm's length away to reduce neck bending and eye strain.
                        </p>
                    </OneImageDetailRow>
                </LessonBlock>
            ) : null}

            <LessonBlock id="monitor-types" title="Common monitor types" emoji="??" tone="indigo">
                <BulletList
                    items={[
                        'LED monitor: most common in homes and schools; bright and power-efficient.',
                        'IPS panel: better colour and side viewing angles, useful for art/design.',
                        'TN panel: often faster response, sometimes used for gaming labs.',
                        'Curved monitor: wraps slightly around your view, mostly for immersive work/games.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="monitor-work" title="How monitor output works" emoji="??" tone="sky">
                <BulletList
                    items={[
                        'The computer sends video data through HDMI, DisplayPort, or USB-C.',
                        'Monitor electronics decode that signal and map it to tiny pixels.',
                        'Each pixel has red, green, and blue sub-pixels; mixing them creates many colours.',
                        'Refresh rate (like 60 Hz or 120 Hz) controls how many times per second the screen updates.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="monitor-healthy-use" title="Healthy and smart usage" emoji="?" tone="rose">
                <BulletList
                    items={[
                        'Set brightness to match room light: too bright tires eyes, too dim strains reading.',
                        'Increase text scaling when needed instead of leaning forward.',
                        'Follow the 20-20-20 habit: every 20 minutes, look 20 feet away for 20 seconds.',
                        'Keep a clean screen; dust and fingerprints reduce clarity and cause glare.',
                    ]}
                />
                <LessonTip title="Posture tip" tone="emerald">
                    <p>
                        Sit with your back supported, feet flat, and keyboard close enough so shoulders stay relaxed.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-monitor" title="How to connect a monitor" emoji="??" tone="sky">
                <BulletList
                    items={[
                        'Turn monitor and computer off before plugging cables when possible.',
                        'Connect via HDMI/DisplayPort/USB-C and tighten if screws are present (VGA style).',
                        'Turn on devices and choose the correct monitor input source from monitor menu.',
                        'In display settings, choose Duplicate (same on both) or Extend (extra workspace).',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="monitor-troubles" title="If something goes wrong" emoji="???" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'No picture on screen.',
                            fixes: [
                                'Check monitor power light and cable connection at both ends.',
                                'Try another cable or another port on the computer.',
                                'Use display shortcut (Win + P) to select a visible display mode.',
                            ],
                        },
                        {
                            problem: 'Blurred text or wrong size.',
                            fixes: [
                                'Set monitor to native resolution (for example 1920x1080).',
                                'Adjust scaling (125%/150%) instead of using non-native resolution.',
                                'Run ClearType text tuning on Windows for sharper fonts.',
                            ],
                        },
                        {
                            problem: 'Screen flicker or colour tint.',
                            fixes: [
                                'Check if cable is damaged or loosely connected.',
                                'Lower refresh rate temporarily and test.',
                                'Update graphics driver with adult/teacher help.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
