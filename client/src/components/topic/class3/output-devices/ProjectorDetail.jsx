import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from '../../class2/input-devices/inputDevicesLessonUi';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from '../../../../data/classes/class3PartsOutputImages';

export default function ProjectorDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES.projector || [];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-indigo-900">projector</strong> is an output device that shows the
                    computer image on a big wall or projection screen. It helps the whole class see one lesson at the
                    same time, so teaching and discussion become easier.
                </p>
            </div>

            <LessonBlock id="what-is-projector" title="What is a projector?" emoji="??" tone="sky">
                <p>
                    A monitor is for one person at a desk. A projector is for groups. It takes the same video signal
                    from the computer, but instead of pixels on a panel, it sends light through a lens to make a large
                    image at distance.
                </p>
                <BulletList
                    items={[
                        'Great for classroom slides, coding demos, movies, and science diagrams.',
                        'Image quality depends on brightness (lumens), focus, distance, and room light.',
                        'Projectors need a clear surface and proper alignment for readable text.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="projector-photos" title="Your folder photos — projector types" emoji="??" tone="indigo">
                <div className="space-y-8">
                    {photos.map((p) => (
                        <OneImageDetailRow key={p.title} imageSize="types" src={p.src} title={p.title} alt={p.title}>
                            <p>{p.caption}</p>
                            <p>
                                Full-size models are common in schools and meeting halls. Mini projectors are easier
                                to carry and useful for small group learning or quick portable presentations.
                            </p>
                        </OneImageDetailRow>
                    ))}
                </div>
            </LessonBlock>

            <LessonBlock id="projector-types" title="Common projector technologies" emoji="??" tone="indigo">
                <BulletList
                    items={[
                        'LCD projectors: bright colours and clear text for presentations.',
                        'DLP projectors: sharp motion and good contrast for videos.',
                        'LED/laser light source: longer life and faster startup in many new models.',
                        'Mini pico projectors: very portable, but usually less bright in bright rooms.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="projector-work" title="How projector output works" emoji="??" tone="sky">
                <BulletList
                    items={[
                        'Computer video signal reaches the projector via HDMI/USB-C/VGA (older setups).',
                        'Inside, a light source and image chip build each frame from the video signal.',
                        'Lens projects the image onto wall/screen; focus ring sharpens the picture.',
                        'Keystone correction straightens image when projector is not perfectly centered.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="projector-setup" title="Setup and safety tips" emoji="?" tone="rose">
                <BulletList
                    items={[
                        'Place projector on stable flat surface or secure mount.',
                        'Dim lights for better contrast and easier reading.',
                        'Keep cables taped/managed so nobody trips.',
                        'Do not look directly into projector lens; bright light can hurt eyes.',
                        'Allow cooling time before unplugging some models.',
                    ]}
                />
                <LessonTip title="Classroom tip" tone="violet">
                    <p>
                        Stand beside the beam while teaching and use a pointer so you do not block key words.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-projector" title="How to connect a projector" emoji="??" tone="sky">
                <BulletList
                    items={[
                        'Connect power and video cable first, then switch on projector and computer.',
                        'Choose correct source input (HDMI 1/HDMI 2/USB-C).',
                        'Press Win + P and choose Duplicate for teaching or Extend for presenter view.',
                        'Adjust focus, zoom, and keystone before starting the lesson.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="projector-troubles" title="If something goes wrong" emoji="???" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'No image on wall.',
                            fixes: [
                                'Check cable connection and selected source input on projector menu.',
                                'Use Win + P to switch display mode.',
                                'Restart both projector and laptop after reconnecting cable.',
                            ],
                        },
                        {
                            problem: 'Image is blurry or trapezoid-shaped.',
                            fixes: [
                                'Turn focus ring slowly until text becomes sharp.',
                                'Use keystone correction and align projector straight to screen center.',
                                'Adjust projector distance to match screen size.',
                            ],
                        },
                        {
                            problem: 'Image is too dim.',
                            fixes: [
                                'Reduce room light or close curtains.',
                                'Switch projector to brighter mode (presentation mode).',
                                'Ask an adult to check lamp/light-source health if it remains dim.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
