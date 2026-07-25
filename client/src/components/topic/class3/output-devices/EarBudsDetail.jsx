import React from 'react';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
    OneImageDetailRow,
} from '../../class2/input-devices/inputDevicesLessonUi';
import { PARTS_OF_COMPUTER_OUTPUT_GALLERIES } from '../../../../data/classes/class3PartsOutputImages';

export default function EarBudsDetail() {
    const photos = PARTS_OF_COMPUTER_OUTPUT_GALLERIES['ear-buds'] || [];
    const earBud = photos[0];

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-5 shadow-md md:p-7">
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    <strong className="text-amber-900">Ear buds</strong> are tiny output devices that sit in your ears and
                    play sound only for you. They are useful for focused study, online classes, and travel.
                </p>
            </div>

            <LessonBlock id="what-are-earbuds" title="What are ear buds?" emoji="💡" tone="sky">
                <BulletList
                    items={[
                        'Small in-ear headphones with very compact speaker drivers.',
                        'Good when you need personal listening without disturbing others.',
                        'Available in wired and Bluetooth versions.',
                    ]}
                />
            </LessonBlock>

            {earBud ? (
                <LessonBlock id="earbud-photo" title="Your folder photo — Earbuds" emoji="📸" tone="indigo">
                    <OneImageDetailRow imageSize="types" src={earBud.src} title={earBud.title} alt={earBud.title}>
                        <p>{earBud.caption}</p>
                        <p>
                            Choose a proper ear-tip size so earbuds stay in place comfortably and give better sound.
                        </p>
                    </OneImageDetailRow>
                </LessonBlock>
            ) : null}

            <LessonBlock id="safe-volume" title="Safe volume habits" emoji="✋" tone="rose">
                <BulletList
                    items={[
                        'Keep volume moderate; avoid full volume for long periods.',
                        'Use the 60/60 habit: around 60% volume for up to 60 minutes, then rest.',
                        'Stop immediately if ears ring or feel tired.',
                    ]}
                />
                <LessonTip title="Health tip" tone="emerald">
                    <p>Clean ear tips and keep earbuds dry to avoid irritation and sound blockage.</p>
                </LessonTip>
            </LessonBlock>

            <LessonBlock id="connect-earbuds" title="How to connect ear buds" emoji="🔌" tone="sky">
                <BulletList
                    items={[
                        'Wired: plug into 3.5 mm audio jack or USB-C adapter.',
                        'Wireless: pair in Bluetooth settings and keep battery charged.',
                        'Choose earbuds as active output device in sound settings.',
                    ]}
                />
            </LessonBlock>

            <LessonBlock id="earbuds-troubles" title="If something goes wrong" emoji="🛠️" tone="indigo">
                <TroubleList
                    rows={[
                        {
                            problem: 'Sound from one side only.',
                            fixes: [
                                'Check balance settings are centered.',
                                'Reconnect earbuds and test with another device.',
                            ],
                        },
                        {
                            problem: 'Bluetooth keeps disconnecting.',
                            fixes: [
                                'Charge earbuds fully and keep close to the device.',
                                'Forget and pair again from Bluetooth settings.',
                            ],
                        },
                    ]}
                />
            </LessonBlock>
        </div>
    );
}
