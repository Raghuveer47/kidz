import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function ScannerDetail({ deviceSlug = 'scanner' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const flatbed = photoByTitle(typesPhotos, 'Flatbed scanner');
    const document = photoByTitle(typesPhotos, 'Document scanner');
    const pen = photoByTitle(typesPhotos, 'Pen scanner');
    const slide = photoByTitle(typesPhotos, 'Slide scanner');
    const drum = photoByTitle(typesPhotos, 'Drum scanner');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-emerald-900">scanner</strong> reads flat paper—drawings, photos, or
                    text—and turns it into a digital file on the computer, like a very neat, even photograph of the
                    page.
                </p>
            </div>

            <LessonBlock id="what-is-scanner" title="What is a scanner?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> that brings <em>pictures of pages</em> into the computer.
                    You can email homework, keep a backup of art, or make a PDF when allowed.
                </p>
                <p>
                    Scanners grew from photocopy and image-reading machines used in offices and print shops. As they
                    became smaller and cheaper, homes and schools started using them to digitize homework, photos, and
                    important paper records.
                </p>
                <BulletList
                    items={[
                        'Different from a webcam: scanners move light across the page slowly for sharp, flat results.',
                        'Many phones have a “scan” mode in camera apps—handy when no flatbed is nearby.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-scanner" title="Types of scanner" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Scanners come in many shapes: flat glass like a copier, feeders that swallow stacks of pages,
                    handheld pens, and special machines for slides or huge prints. Here is a quick overview, then
                    one big photo per type with details.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Home vs office vs special
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Flatbed</strong> — One page at a time on glass; best for
                            photos and thick books (where allowed).
                        </p>
                        <p>
                            <strong className="text-slate-900">Document feeder</strong> — Pulls many sheets quickly
                            for homework packets or office forms.
                        </p>
                        <p>
                            <strong className="text-slate-900">Pen / slide / drum</strong> — Special tools for lines
                            of text, tiny slides, or very high quality prints.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of scanners — one photo per row
                    </h3>

                    {flatbed ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={flatbed.src}
                            title={flatbed.title}
                            alt={flatbed.title}
                        >
                            <p>
                                A <strong>flatbed scanner</strong> looks like a small photocopier: you lift the lid,
                                place the page face down on the glass, and close gently. The light moves under the
                                glass and builds a sharp image.
                            </p>
                            <p>
                                Great for drawings, photos, and single worksheets. Keep the glass clean and the page
                                flat for best results.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {document ? (
                        <OneImageDetailRow
                            imageSize="types"
                            src={document.src}
                            title={document.title}
                            alt={document.title}
                        >
                            <p>
                                A <strong>document scanner</strong> (with a feeder) pulls many sheets through a slot
                                one after another. Offices use it to scan long reports fast; at home it saves time
                                when you have many pages of homework to save.
                            </p>
                            <p>
                                Remove staples first, align pages neatly, and never force paper if it jams—ask an
                                adult to clear safely.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {pen ? (
                        <OneImageDetailRow imageSize="types" src={pen.src} title={pen.title} alt={pen.title}>
                            <p>
                                A <strong>pen scanner</strong> is a thin wand you drag across a line of text like a
                                highlighter. It reads a narrow strip at a time—handy for quotes from books (with
                                permission).
                            </p>
                            <p>
                                Move slowly and steadily; crooked drags can confuse the software.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {slide ? (
                        <OneImageDetailRow imageSize="types" src={slide.src} title={slide.title} alt={slide.title}>
                            <p>
                                A <strong>slide scanner</strong> is made for tiny photo slides or film strips. It
                                shines light through the film to make a big digital picture—used in photography and
                                archives.
                            </p>
                            <p>
                                You may see one in a museum or photo lab; treat it as a careful, grown-up tool.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {drum ? (
                        <OneImageDetailRow imageSize="types" src={drum.src} title={drum.title} alt={drum.title}>
                            <p>
                                A <strong>drum scanner</strong> is a large professional machine. The image wraps
                                around a spinning drum for extremely sharp scans—used for posters, art, and print
                                shops.
                            </p>
                            <p>
                                You will not have one in a normal classroom, but now you know the name if you see it
                                in a video about printing!
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-scanner-works" title="How does a scanner work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'A bright bar of light moves under the glass (or across the page) and sensors read brightness and color.',
                        'Software builds an image from millions of tiny dots (pixels).',
                        'OCR (optical character recognition) can sometimes turn printed words into editable text—results vary.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-scanner" title="How to use a scanner" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Place the page straight, align corners, and close the lid gently without pressing hard on glass.',
                        'Choose color or black-and-white and a sensible resolution (higher = bigger file).',
                        'Preview if the app offers it—crop to only what you need.',
                        'Only scan books or worksheets you are allowed to copy; respect copyright and school rules.',
                    ]}
                />
                <LessonTip title="Clear scans" tone="emerald">
                    <p>
                        Fingerprints smudge glass—wipe with a soft cloth. Avoid shadows: lay the page flat and close
                        the lid evenly.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-scanner" title="How to connect a scanner" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'USB: plug in, install software if the computer asks, then open the scan app.',
                        'Some printers are “all-in-one” with scan buttons—same machine, two jobs.',
                        'Network scanners at school may need a teacher to log you in or pick the right device name.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="scanner-troubleshooting" title="Troubleshooting scanner issues" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Computer says no scanner found.',
                            fixes: [
                                'Check USB cable and power on the printer/scanner.',
                                'Restart the computer and try again.',
                                'Install or update the manufacturer’s software with an adult’s help.',
                            ],
                        },
                        {
                            problem: 'Stripes or blurs on the image.',
                            fixes: [
                                'Clean the glass with a proper screen/glass cleaner (ask an adult).',
                                'Rescan with the page flatter and lid fully closed.',
                            ],
                        },
                        {
                            problem: 'Paper jam in feeder models.',
                            fixes: [
                                'Follow the machine’s instructions; pull gently in the direction shown—never yank.',
                                'Ask staff or a parent; do not poke sharp objects inside.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
