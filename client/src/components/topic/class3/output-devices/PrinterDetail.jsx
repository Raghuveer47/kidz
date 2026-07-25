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
 * Class 3 — Printer: types from output-devices folder (laser, inkjet, dot matrix).
 */
export default function PrinterDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES.printer || [];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-violet-200 bg-gradient-to-r from-violet-50 via-white to-fuchsia-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-violet-900">printer</strong> is an <strong>output device</strong>. It takes
                    files and pictures from inside the computer and puts them onto real paper—homework, birthday
                    cards, worksheets, and photos you can hold in your hand.
                </p>
            </div>

            <LessonBlock id="what-is-printer" title="What is a printer?" emoji="💡" tone="sky">
                <p>
                    Printers do not “read” your mind; they follow instructions from the computer. When you click Print,
                    the program sends a page description: where each letter goes, which colours to use, and how big
                    the picture should be.
                </p>
                <p>
                    People invented printing long before computers—think of printing presses and books. Today’s home and
                    school printers are smaller, but the idea is the same: repeat the same pattern on many sheets
                    quickly and neatly.
                </p>
                <BulletList
                    items={[
                        'Used for homework, permission slips, art projects, and photos from a trip.',
                        'Needs paper and ink or toner; the computer also needs a driver so it knows the printer type.',
                        'Always ask a grown-up before changing cartridges—some inks stain clothes and tables.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-printer" title="Types of printer — see your folder photos" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Your <strong>output-devices</strong> folder shows three common families: laser,
                    inkjet, and dot matrix. Each uses a different trick to leave marks on paper. Read the short guide,
                    then study each photo row.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        How they are different
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Laser</strong> — dry powder called toner is fused
                            onto paper with heat. Very fast for lots of black text.
                        </p>
                        <p>
                            <strong className="text-slate-900">Inkjet</strong> — liquid ink sprays through tiny
                            nozzles. Excellent for colour photos and colourful posters.
                        </p>
                        <p>
                            <strong className="text-slate-900">Dot matrix</strong> — a ribbon is hit by tiny pins,
                            building letters from dots. Older and noisier, but tough for forms and carbon copies.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        One detailed photo per type
                    </h3>

                    {photos.map((p) => (
                        <OneImageDetailRow key={p.title} imageSize="types" src={p.src} title={p.title} alt={p.title}>
                            <p>{p.caption}</p>
                            <p>
                                When you recognise the printer type in a classroom or lab, you can guess how to load
                                paper: laser trays often slide out; inkjets may have a rear feed slot; dot matrix may
                                use continuous fan-fold paper with holes on the sides.
                            </p>
                        </OneImageDetailRow>
                    ))}
                </div>
            </LessonBlock>

            <LessonBlock id="how-printer-works" title="How does printing work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'You choose Print in an app; the computer sends a stream of data to the printer.',
                        'The printer’s brain (controller) turns that data into motor moves and laser flashes or ink drops.',
                        'Paper moves through rollers; the image builds line by line until the page drops into the tray.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="use-printer-safely" title="How to use a printer safely" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Check that paper is not crumpled and the tray is not overfilled.',
                        'Never pull hard on stuck paper—open the cover the way the teacher shows you and remove gently.',
                        'Do not touch hot rollers or the fuser area on a laser printer right after printing.',
                        'Recycle misprints when possible; use draft mode to save ink when you only need a rough copy.',
                    ]}
                />
                <LessonTip title="Eco tip" tone="emerald">
                    <p>
                        Print double-sided when your teacher allows it—half the paper for the same number of pages!
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-printer" title="How printers connect" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'USB cable: plug into the computer or a USB hub; the computer may install a driver automatically.',
                        'Wi‑Fi / network: the printer joins the same network as the laptop; you pick it from the print list.',
                        'Bluetooth: less common for big printers, but some small portable models use it.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="printer-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Blank streaks or faded text on laser prints.',
                            fixes: [
                                'Shake the toner cartridge gently side to side (if your teacher says it is safe).',
                                'Check that toner is not empty.',
                                'Try a different paper type setting in the print dialog.',
                            ],
                        },
                        {
                            problem: 'Colours look wrong on inkjet.',
                            fixes: [
                                'Run the printer’s “clean printhead” or “align cartridges” from its software.',
                                'Make sure the right paper type (plain vs photo) is selected.',
                            ],
                        },
                        {
                            problem: 'Paper jam.',
                            fixes: [
                                'Turn off the printer if smoke or burning smell—tell an adult immediately.',
                                'Otherwise, remove paper in the direction it rolls, bit by bit, without tearing.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
