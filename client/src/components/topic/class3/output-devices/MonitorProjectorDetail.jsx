import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from '../../class2/input-devices/inputDevicesLessonUi';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from '../../../../data/classes/class3PartsOutputImages';

export default function MonitorProjectorDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES['monitor-projector'] || [];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-sky-200 bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    <strong className="text-sky-900">Monitors</strong> and <strong className="text-sky-900">projectors</strong>{' '}
                    are output devices for visuals. A monitor is best for one student at a desk, while a projector is
                    best for sharing the same screen with a whole class.
                </p>
            </div>

            <LessonBlock id="what-monitor-projector" title="What are monitor and projector?" emoji="💡" tone="sky">
                <BulletList
                    items={[
                        'Monitor: a personal screen that shows text, pictures, and videos directly in front of you.',
                        'Projector: throws a big image onto a wall/screen so many people can watch together.',
                        'Both show output from the same computer; only the display size and setup style are different.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-visual-devices" title="Your folder photos — monitor and projectors" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    These images come directly from your <strong>output-devices</strong> folder.
                </p>
                <div className="mt-8 space-y-8">
                    {photos.map((p) => (
                        <OneImageDetailRow key={p.title} imageSize="types" src={p.src} title={p.title} alt={p.title}>
                            <p>{p.caption}</p>
                            <p>
                                Use a monitor for focused reading and typing. Use a projector when everyone needs to
                                see the same slide, code, or video at once.
                            </p>
                        </OneImageDetailRow>
                    ))}
                </div>
            </LessonBlock>

            <LessonBlock id="how-visual-output-works" title="How do they work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'The computer sends video data through HDMI/DisplayPort/USB-C.',
                        'A monitor turns that data into pixels on the panel.',
                        'A projector shines that data through a lens to make a large image on a surface.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="setup-tips" title="Setup tips" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Keep monitor at eye level to reduce neck strain.',
                        'For projector, dim room lights for clearer contrast.',
                        'Adjust resolution and scaling so text is sharp and readable.',
                    ]}
                />
                <LessonTip title="Classroom tip" tone="violet">
                    <p>Stand beside the projection beam while teaching so you do not block important content.</p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="visual-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'No display on monitor/projector.',
                            fixes: [
                                'Check cable is fully inserted on both ends.',
                                'Use display shortcut (Win + P) to choose Duplicate/Extend.',
                                'Select the correct input source on monitor/projector menu.',
                            ],
                        },
                        {
                            problem: 'Image looks blurry.',
                            fixes: [
                                'Set native resolution in display settings.',
                                'Refocus projector lens or clean monitor screen gently.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
