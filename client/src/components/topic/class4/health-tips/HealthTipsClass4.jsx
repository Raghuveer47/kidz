import React from 'react';
import { CLASS4_HEALTH_TIPS_CHAPTERS } from '../../../../data/classes/class4HealthTipsContent';
import { LessonBlock, LessonTip } from '../../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../../shared/ImageBesideSection';

export default function HealthTipsClass4() {
    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <LessonBlock id="why-health-tips" title="Why computer health tips matter" emoji="💪" tone="rose">
                <p>
                    Computers help us learn and create, but our body needs care while using screens. Healthy digital habits protect
                    your <strong>eyes</strong>, <strong>posture</strong>, and <strong>energy levels</strong>.
                </p>
                <p>
                    The sections below use your Class 4 health-tips images and explain easy daily habits students can follow at
                    school and home.
                </p>
            </LessonBlock>

            <div className="space-y-10 md:space-y-12">
                {CLASS4_HEALTH_TIPS_CHAPTERS.map((chapter) => (
                    <article
                        key={chapter.id}
                        className="rounded-3xl border-2 border-rose-200/90 bg-gradient-to-br from-white via-rose-50/40 to-fuchsia-50/30 p-4 shadow-md md:p-6"
                    >
                        <h3 className="mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent md:text-2xl">
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
                            bulletMarkerClass="[&_ul]:marker:text-rose-500"
                            belowContent={
                                <LessonTip title={chapter.tipTitle} tone="violet">
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
