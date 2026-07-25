import React from 'react';
import { LessonBlock, BulletList, TroubleList, LessonTip, OneImageDetailRow } from './inputDevicesLessonUi';
import { getInputDeviceGalleryByGroup } from '../../../../data/classes/class2PartsInputImages';
import { photoByTitle } from './inputDevicePhotoUtils';

export default function BarcodeReaderDetail({ deviceSlug = 'barcode-reader' }) {
    const typesPhotos = getInputDeviceGalleryByGroup(deviceSlug, 'types');

    const laser = photoByTitle(typesPhotos, 'Laser barcode reader');
    const omni = photoByTitle(typesPhotos, 'Omnidirectional reader');

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-lime-200 bg-gradient-to-r from-lime-50 via-white to-emerald-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    A <strong className="text-emerald-900">barcode reader</strong> reads striped or square codes on
                    labels and sends the product or item number into the computer—much faster and more accurate than
                    typing long codes by hand.
                </p>
            </div>

            <LessonBlock id="what-is-barcode-reader" title="What is a barcode reader?" emoji="💡" tone="sky">
                <p>
                    It is an <strong>input device</strong> for <em>codes</em>. Shops, libraries, and warehouses use
                    it so computers know exactly which item was scanned.
                </p>
                <p>
                    Barcode technology was developed in the 20th century to speed up checkout and record keeping. Once
                    scanners arrived in stores, billing became much faster and more accurate than typing each product
                    code by hand.
                </p>
                <BulletList
                    items={[
                        'Barcodes are like printed passwords for products: each pattern stands for numbers or text.',
                        'Quick beep usually means “read OK”; the cashier or system sees the right price or record.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="types-of-barcode-reader" title="Types of barcode reader" emoji="🎨" tone="indigo">
                <p className="text-base leading-relaxed md:text-lg">
                    Handheld laser scanners sweep a line across the code; big checkout windows read codes from many
                    angles. Here is a short compare, then one photo per row with details.
                </p>

                <div className="mt-6 space-y-6 rounded-2xl border-2 border-sky-200/80 bg-sky-50/50 p-4 md:p-6">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-700 md:text-xl">
                        Laser line vs window
                    </h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <strong className="text-slate-900">Laser</strong> — You aim a thin line at the stripes;
                            common in handheld guns.
                        </p>
                        <p>
                            <strong className="text-slate-900">Omnidirectional</strong> — Many laser lines in a
                            pattern; the cashier can wave the item quickly without perfect angles.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 md:text-xl">
                        Kinds of readers — one photo per row
                    </h3>

                    {laser ? (
                        <OneImageDetailRow imageSize="types" src={laser.src} title={laser.title} alt={laser.title}>
                            <p>
                                A <strong>laser barcode reader</strong> shines a bright line across the barcode. You
                                hold the trigger, line up the barcode, and hear a beep when the numbers match.
                                Cashiers use it all day for fast checkout.
                            </p>
                            <p>
                                <strong>Safety:</strong> never point the laser at eyes or faces—use it only on
                                barcodes, with adults in charge at the store.
                            </p>
                        </OneImageDetailRow>
                    ) : null}

                    {omni ? (
                        <OneImageDetailRow imageSize="types" src={omni.src} title={omni.title} alt={omni.title}>
                            <p>
                                An <strong>omnidirectional reader</strong> sits in a big glass window on the counter.
                                Lasers crisscross inside so the code can be read from many directions—great when items
                                slide past quickly on a belt.
                            </p>
                            <p>
                                It reduces “try again” beeps because the code does not have to line up perfectly
                                like a single handheld line.
                            </p>
                        </OneImageDetailRow>
                    ) : null}
                </div>
            </LessonBlock>

            <LessonBlock id="how-barcode-works" title="How does it work?" emoji="⚙️" tone="sky">
                <BulletList
                    items={[
                        'Dark bars and light spaces reflect light differently; sensors measure the pattern.',
                        'Software decodes the pattern into digits or letters the store system understands.',
                        'That data can look up price, stock count, or library book details instantly.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="how-to-use-barcode-reader" title="How to use a barcode reader" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Aim the laser or window at the whole code, steady for a moment until you hear a beep.',
                        'Keep the code flat and clean; wrinkles and glare can confuse readers.',
                        'In stores, only staff scan items for purchase—do not point lasers at eyes or people.',
                    ]}
                />
                <LessonTip title="Laser safety" tone="violet">
                    <p>
                        Never look into a laser barcode scanner or shine it at anyone’s face. Store scanners are for
                        adults to operate during checkout.
                    </p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-barcode-reader" title="How it connects to a computer" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Many checkout scanners act like a keyboard: when they read a code, they “type” the numbers into the active field.',
                        'USB scanners plug into the computer; wireless models use Bluetooth or a base station.',
                        'Setup is often done by shop IT or a teacher—drivers pair the reader with inventory software.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="barcode-troubleshooting" title="Troubleshooting" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'No beep; code not accepted.',
                            fixes: [
                                'Straighten the label; wipe dust off the glass window on the scanner.',
                                'Try a slightly different angle; move closer or farther per device hints.',
                            ],
                        },
                        {
                            problem: 'Wrong item appears on screen.',
                            fixes: [
                                'Scan again slowly; confirm it is the correct barcode for that product.',
                                'Staff may need to fix the database if the label and system disagree.',
                            ],
                        },
                        {
                            problem: 'Reader not talking to the computer.',
                            fixes: [
                                'Check USB cable or wireless base power.',
                                'Restart the software; re-pair Bluetooth with help from an adult.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
