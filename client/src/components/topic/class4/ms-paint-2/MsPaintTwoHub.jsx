import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ImageBesideSection from '../../shared/ImageBesideSection';

/**
 * Class 4 — MS PAINT-2 hub: Smart Basics hero, vocabulary preview, lesson CTA — fuchsia palette.
 */
export default function MsPaintTwoHub({ content, classId }) {
    const paintDetail = content.paintDetail || {};
    const hubHeroImage = content.hubHeroImage;
    const heroTitle = content.msPaintSmartBasicsTitle || 'MS Paint-2 — Shapes & Tools';

    const heroBelowContent = (
        <div className="space-y-5">
            {paintDetail.analogy ? (
                <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">{paintDetail.analogy}</p>
            ) : null}
            <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-fuchsia-300 bg-white/90 p-3 shadow-sm">
                    <p className="text-justify text-sm font-bold text-fuchsia-900">
                        <strong>Shapes</strong> give perfect edges for charts—use Select to move them after you draw.
                    </p>
                </div>
                <div className="rounded-2xl border border-violet-300 bg-white/90 p-3 shadow-sm">
                    <p className="text-justify text-sm font-bold text-slate-800">
                        <strong>Tools</strong> like Fill, Eraser, and Color Picker save time when you color big areas.
                    </p>
                </div>
            </div>
            {(paintDetail.keyPoints || []).length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                    {(paintDetail.keyPoints || []).map((point) => (
                        <article
                            key={point.title}
                            className="rounded-2xl border border-fuchsia-200/90 bg-white/95 p-4 shadow-sm"
                        >
                            <h3 className="text-base font-extrabold text-fuchsia-950 md:text-lg">{point.title}</h3>
                            <p className="mt-1 text-justify text-sm leading-relaxed text-slate-700 md:text-base">{point.body}</p>
                        </article>
                    ))}
                </div>
            ) : null}
        </div>
    );

    return (
        <div className="space-y-10 font-nunito">
            <section className="relative overflow-hidden rounded-3xl border-2 border-fuchsia-400 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-rose-50 p-6 shadow-[0_12px_28px_-16px_rgba(192,38,211,0.32)] md:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-300/25 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-300/30 blur-2xl" />

                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-fuchsia-400 bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-fuchsia-900">
                        <span aria-hidden>🧠</span>
                        Smart Basics
                    </div>
                    <h2 className="text-xl font-extrabold text-fuchsia-950 md:text-2xl">{heroTitle}</h2>

                    {hubHeroImage ? (
                        <ImageBesideSection
                            section={{
                                image: hubHeroImage,
                                subtitle: heroTitle,
                                body: paintDetail.intro,
                            }}
                            textPosition="below"
                            imageMaxHeight="min(75vh,720px)"
                            imageColumnWidth="100%"
                            imageFrameClassName="w-full max-w-4xl"
                            bulletMarkerClass="[&_ul]:marker:text-fuchsia-600"
                            wrapClassName="mt-4 p-0"
                            belowContent={heroBelowContent}
                        />
                    ) : (
                        <div className="mt-4 space-y-5">
                            <div className="space-y-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                                {paintDetail.intro ? <p>{paintDetail.intro}</p> : null}
                                {paintDetail.analogy ? <p>{paintDetail.analogy}</p> : null}
                            </div>
                            {heroBelowContent}
                        </div>
                    )}
                </div>
            </section>

            {(content.sections || []).length > 0 ? (
                <section>
                    <h2 className="mb-4 text-xl font-extrabold text-slate-900 md:text-2xl">Shapes &amp; tools (preview)</h2>
                    <div className="space-y-4">
                        {content.sections.map((section, idx) => (
                            <div
                                key={section.subtitle}
                                className="overflow-hidden rounded-2xl border-2 border-fuchsia-200 bg-white shadow-sm"
                            >
                                <div className="bg-gradient-to-r from-fuchsia-600 to-violet-700 px-4 py-2.5 text-sm font-extrabold text-white">
                                    {idx + 1}. {section.subtitle}
                                </div>
                                {section.image ? (
                                    <ImageBesideSection
                                        section={section}
                                        textPosition="below"
                                        imageMaxHeight="min(80vh,720px)"
                                        imageColumnWidth="100%"
                                        imageFrameClassName="max-w-none"
                                        bulletMarkerClass="[&_ul]:marker:text-fuchsia-600"
                                    />
                                ) : (
                                    <p className="whitespace-pre-line p-4 text-justify text-base leading-relaxed text-slate-700 md:p-5 md:text-lg">
                                        {section.body}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ) : null}

            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-fuchsia-300 bg-fuchsia-50/70 p-6">
                    <h2 className="text-lg font-extrabold text-fuchsia-950 md:text-xl">Why we study Paint-2</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                        {(content.msPaintWhyLearn || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border-2 border-violet-400 bg-violet-50/90 p-6">
                    <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">How to use this unit</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                        {(content.msPaintHowToStudy || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="rounded-2xl border-2 border-fuchsia-400 bg-white p-1 shadow-md">
                <Link
                    to={`/class${classId}/ms-paint-2-shapes.html`}
                    className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-700 px-5 py-4 text-left text-white transition hover:opacity-95"
                >
                    <span className="font-nunito text-base font-extrabold md:text-lg">Start with Working with shapes →</span>
                    <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                </Link>
                <p className="px-4 pb-4 pt-3 text-justify text-sm text-slate-600 md:px-5">
                    Opens the first lesson. Use the sidebar under <strong className="text-slate-800">MS PAINT-2</strong> for Working
                    with tools anytime.
                </p>
            </section>
        </div>
    );
}
