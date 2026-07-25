import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { BulletList } from '../../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../../shared/ImageBesideSection';

/**
 * Class 4 — MS Word-1 sub-lessons: blue/indigo palette, back link to hub.
 */
export default function MsWordOneLesson({ content, classId, showBackLink = true }) {
    const sections = content.sections || [];
    const bulletTone =
        'text-justify text-base leading-relaxed text-slate-700 md:text-lg [&_li]:text-justify [&_ul]:marker:text-blue-600';

    return (
        <div className="space-y-10 font-nunito">
            {showBackLink ? (
                <div className="rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm">
                    <Link
                        to={`/class${classId}/ms-word-1.html`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-900 transition hover:text-blue-700 md:text-base"
                    >
                        <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                        Back to MS WORD-1 overview
                    </Link>
                </div>
            ) : null}

            <section className="relative overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 p-6 shadow-[0_12px_28px_-16px_rgba(37,99,235,0.28)] md:p-8">
                <div className="pointer-events-none absolute -right-8 top-0 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl" />
                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-blue-400 bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-blue-900">
                        <span aria-hidden>📝</span>
                        Lesson
                    </div>
                    <h2 className="text-xl font-extrabold text-blue-950 md:text-2xl">{content.heading}</h2>
                    <p className="mt-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg">{content.text}</p>
                </div>
            </section>

            <section>
                <h3 className="mb-4 text-lg font-extrabold text-slate-900 md:text-xl">Topics in this lesson</h3>
                <div className="space-y-6">
                    {sections.map((section, idx) => (
                        <div
                            key={`${section.subtitle}-${idx}`}
                            className="overflow-hidden rounded-2xl border-2 border-blue-400 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.2)]"
                        >
                            <div className="flex flex-wrap items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 text-white">
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
                                        bulletMarkerClass="[&_ul]:marker:text-blue-600"
                                    />
                                ) : (
                                    <div className={`p-5 sm:p-6 ${bulletTone}`}>
                                        {section.body ? (
                                            <p className="whitespace-pre-line text-justify text-slate-800">{section.body}</p>
                                        ) : null}
                                        {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                                            <div className={section.body ? 'mt-3 md:mt-4' : ''}>
                                                <BulletList items={section.bullets} />
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
