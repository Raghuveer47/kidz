import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip } from '../../class2/input-devices/inputDevicesLessonUi';

/**
 * Class 3 — Scanner: input device (no photos in output-devices folder yet); full lesson like Class 2 style.
 */
export default function ScannerDetail() {
    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-emerald-900">scanner</strong> is an <strong>input device</strong>. It looks
                    at a real page—homework, a photo, a drawing—and builds a digital picture file inside the computer.
                    That is the opposite direction from a printer, which prints from computer to paper.
                </p>
            </div>

            <LessonBlock id="what-is-scanner" title="What is a scanner?" emoji="💡" tone="sky">
                <p>
                    Scanners use a long strip of light and sensors that move under the glass (flatbed) or pull the
                    paper past a fixed line (sheet-fed). Each tiny dot on the page becomes a colour number in the file.
                </p>
                <p>
                    Long ago, people copied documents by hand or with carbon paper. Scanners made it possible to share
                    one paper page with many people by email without retyping.
                </p>
                <BulletList
                    items={[
                        'Used to hand in homework without carrying the only paper copy, to archive old photos, and to make PDFs of worksheets.',
                        'Works best with flat, clean pages—avoid wet glue or glitter that can scratch the glass.',
                        'Some phones use the camera as a “scanner” with an app; a real flatbed scanner is usually sharper for text.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="scanner-types" title="Types of scanner" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Schools and homes often use these styles. You may not have every photo in your folder yet—when you
                    add scanner images, you can match them to these names.
                </p>
                <div className="mt-6 space-y-4 rounded-2xl border-2 border-amber-200/90 bg-amber-50/60 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-amber-900 md:text-xl">Flatbed scanner</h3>
                    <p className="text-slate-700">
                        Looks like a small photocopier. You lift the lid, place the page face-down on the glass, align
                        the corner to the arrow, and close gently. Best for books, thick pages, or fragile photos.
                    </p>
                    <h3 className="text-lg font-extrabold text-amber-900 md:text-xl">Sheet-fed scanner</h3>
                    <p className="text-slate-700">
                        Pulls loose sheets one after another—great for a stack of homework. Not for thick books
                        unless the teacher uses a special book cradle.
                    </p>
                    <h3 className="text-lg font-extrabold text-amber-900 md:text-xl">Handheld / wand (less common)</h3>
                    <p className="text-slate-700">
                        You move slowly across the page; tricky for beginners but portable for small jobs.
                    </p>
                </div>
            </LessonBlock>

            <LessonBlock id="how-scanner-works" title="How does scanning work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Light reflects off the page into sensors (often a CCD or CIS line).',
                        'Software converts brightness and colour into millions of pixels (picture elements).',
                        'You can save as JPG, PNG, or PDF; PDF is common for multi-page homework packets.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-scan" title="Steps to scan neatly" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Clean the glass with a soft lint-free cloth if your teacher allows—no harsh sprays on the glass.',
                        'Place the page straight and close the lid without slamming.',
                        'In the app, choose colour or black-and-white and a sensible resolution (300 dpi is plenty for text).',
                        'Preview, crop empty borders, then scan—rename the file so you can find it later.',
                    ]}
                />
                <LessonTip title="Privacy" tone="violet">
                    <p>
                        Do not scan someone else’s personal ID or medical papers without permission. Scanning is
                        copying—treat the digital file like the original paper.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-scanner" title="How scanners connect" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'USB: plug in and wait for the driver; some need software from the maker’s website.',
                        'Wi‑Fi: the scanner joins the network; you can scan from a phone or laptop without a cable.',
                        'All-in-one: many home printers include a scanner in the same machine—one power cable, two jobs.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="scanner-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Scan is blurry or crooked.',
                            fixes: [
                                'Lay the page flat; press the lid evenly.',
                                'Wipe the glass gently—fingerprints and dust blur the image.',
                                'Choose a higher DPI or turn off “fast preview” if the app offers it.',
                            ],
                        },
                        {
                            problem: 'Colours look wrong.',
                            fixes: [
                                'Check if colour correction or “auto enhance” is on.',
                                'Try scanning in colour vs grayscale to compare.',
                            ],
                        },
                        {
                            problem: 'Scanner not found.',
                            fixes: [
                                'Unplug USB, wait ten seconds, plug back in.',
                                'Restart the computer and open the scan app again.',
                                'Ask an adult to check for updated drivers.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="add-photos-later" title="Add photos to your folder" emoji="📸" tone="emerald">
                <p>
                    When you add real scanner pictures to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">output-devices</code>, name them clearly (for example{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">flatbed-scanner.jpg</code>) and
                    register them in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">class3PartsOutputImages.js</code> so this page can show photo rows like the printer lesson.
                </p>
            </LessonBlock>
        </div>
    );
}
