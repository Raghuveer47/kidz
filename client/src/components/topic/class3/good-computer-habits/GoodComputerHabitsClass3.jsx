import React from 'react';
import { GOOD_COMPUTER_HABITS_CHAPTERS } from '../../../../data/classes/class3GoodHabitsContent';
import { LessonBlock, LessonTip } from '../../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../../shared/ImageBesideSection';

/**
 * Class 3 — Good computer habits: uses photos from assets/images/class3/good-habits/
 */
export default function GoodComputerHabitsClass3() {
    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <LessonBlock id="why-habits" title="Why good computer habits matter" emoji="🌟" tone="emerald">
                <p>
                    Computers help you learn, draw, play, and explore—but only when you treat your <strong>body</strong>, your{' '}
                    <strong>eyes</strong>, and the <strong>machine</strong> with care. Small habits today keep you comfortable for years of
                    projects ahead.
                </p>
                <p>
                    The pictures below come from your class <strong>good-habits</strong> folder. Read each section slowly, try the ideas at
                    home or in the lab, and share the tips with friends so everyone stays safe and happy.
                </p>
            </LessonBlock>

            <div className="space-y-10 md:space-y-12">
                {GOOD_COMPUTER_HABITS_CHAPTERS.map((chapter) => (
                    <article
                        key={chapter.id}
                        className="rounded-3xl border-2 border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/30 p-4 shadow-md md:p-6"
                    >
                        <h3 className="mb-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 md:text-2xl">
                            {chapter.title}
                        </h3>
                        <ImageBesideSection
                            section={{
                                image: chapter.image,
                                subtitle: chapter.title,
                                body: chapter.lead,
                                paragraphs: chapter.paragraphs,
                                bullets: chapter.dos,
                            }}
                            imageMaxHeight="min(56vh,480px)"
                            imageColumnWidth="min(100%,460px)"
                            bulletsHeading="Remember"
                            bulletMarkerClass="[&_ul]:marker:text-indigo-600"
                            belowContent={
                                <LessonTip title={chapter.tipTitle} tone="emerald">
                                    {chapter.tipBody}
                                </LessonTip>
                            }
                        />
                    </article>
                ))}
            </div>
        </div>
    );
}
