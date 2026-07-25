import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { LessonPointList } from '../../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../../shared/ImageBesideSection';

/** Class 5 — AI-2 sub-lessons: rose palette, back link to hub. */
export default function AiTwoLesson({ content, classId, showBackLink = true }) {
    const sections = content.sections || [];
    const textTone = 'text-justify text-base leading-relaxed text-slate-700 md:text-lg [&_li]:text-justify';

    return (
        <div className="space-y-10 font-nunito">
            {showBackLink ? (
                <div className="rounded-2xl border-2 border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 p-4 shadow-sm">
                    <Link
                        to={`/class${classId}/ai-2.html`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-rose-900 transition hover:text-rose-700 md:text-base"
                    >
                        <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                        Back to AI-2 overview
                    </Link>
                </div>
            ) : null}

            <section className="relative overflow-hidden rounded-3xl border-2 border-rose-400 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 p-6 shadow-[0_12px_28px_-16px_rgba(244,63,94,0.28)] md:p-8">
                <div className="pointer-events-none absolute -right-8 top-0 h-28 w-28 rounded-full bg-rose-200/40 blur-2xl" />
                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-rose-400 bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-rose-900">
                        <span aria-hidden>✨</span>
                        Lesson
                    </div>
                    <h2 className="text-xl font-extrabold text-rose-950 md:text-2xl">{content.heading}</h2>
                    <p className="mt-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg">{content.text}</p>
                </div>
            </section>

            <section>
                <h3 className="mb-4 text-lg font-extrabold text-slate-900 md:text-xl">Topics in this lesson</h3>
                <div className="space-y-6">
                    {sections.map((section, idx) => (
                        <div
                            key={`${section.subtitle}-${idx}`}
                            className="overflow-hidden rounded-2xl border-2 border-rose-400 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.2)]"
                        >
                            <div className="flex flex-wrap items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-700 px-4 py-3 text-white">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-extrabold">
                                    {idx + 1}
                                </span>
                                <p className="min-w-0 flex-1 text-sm font-extrabold md:text-base">{section.subtitle}</p>
                            </div>
                            <div className="bg-white">
                                {section.image ? (
                                    <ImageBesideSection
                                        section={section}
                                        textPosition="below"
                                        imageMaxHeight="min(80vh,720px)"
                                        imageColumnWidth="100%"
                                        imageFrameClassName="max-w-none"
                                        pointsHeading={section.pointsHeading ?? section.bulletsHeading}
                                        pointMarkerClass="text-rose-600"
                                        textClassName={textTone}
                                        wrapClassName="p-5 sm:p-6"
                                    />
                                ) : (
                                    <div className={`p-5 sm:p-6 ${textTone}`}>
                                        {section.body ? (
                                            <p className="whitespace-pre-line text-justify text-slate-800">{section.body}</p>
                                        ) : null}
                                        {Array.isArray(section.points ?? section.bullets) &&
                                        (section.points ?? section.bullets).length > 0 ? (
                                            <div className={section.body ? 'mt-3 md:mt-4' : ''}>
                                                {(section.pointsHeading ?? section.bulletsHeading) ? (
                                                    <p className="mb-2 text-justify font-extrabold text-slate-900">
                                                        {section.pointsHeading ?? section.bulletsHeading}
                                                    </p>
                                                ) : null}
                                                <LessonPointList
                                                    items={section.points ?? section.bullets}
                                                    markerClass="text-rose-600"
                                                />
                                            </div>
                                        ) : null}
                                        {Array.isArray(section.paragraphs) && section.paragraphs.length > 0 ? (
                                            <div className={section.body || (section.points ?? section.bullets)?.length ? 'mt-3 md:mt-4 space-y-3' : 'space-y-3'}>
                                                {section.paragraphs.map((para, i) => (
                                                    <p key={i} className="whitespace-pre-line text-justify text-slate-800">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
