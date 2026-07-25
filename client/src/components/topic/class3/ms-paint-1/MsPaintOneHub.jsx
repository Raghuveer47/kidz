import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ImageBesideSection from '../../shared/ImageBesideSection';

/**
 * Class 3 — MS PAINT-1 hub: Smart Basics hero, vocabulary preview, lesson cards — rose/fuchsia palette.
 */
export default function MsPaintOneHub({ content, classId }) {
    const paintDetail = content.paintDetail || {};
    const hubHeroImage = content.hubHeroImage;
    const heroTitle = content.msPaintSmartBasicsTitle || 'MS Paint — Smart Basics';

    const heroBelowContent = (
        <div className="space-y-5">
            {paintDetail.analogy ? (
                <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">{paintDetail.analogy}</p>
            ) : null}
            <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-fuchsia-300 bg-white/90 p-3 shadow-sm">
                    <p className="text-justify text-sm font-bold text-rose-900">
                        <strong>Bitmap art</strong>—Paint stores your picture as a grid of tiny dots (pixels), perfect for bold
                        drawings and labels.
                    </p>
                </div>
                <div className="rounded-2xl border border-rose-300 bg-white/90 p-3 shadow-sm">
                    <p className="text-justify text-sm font-bold text-slate-800">
                        <strong>Undo is your friend</strong>—Ctrl+Z (or the curved arrow) steps back if a stroke or fill goes
                        wrong.
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
                            <h3 className="text-base font-extrabold text-rose-950 md:text-lg">{point.title}</h3>
                            <p className="mt-1 text-justify text-sm leading-relaxed text-slate-700 md:text-base">{point.body}</p>
                        </article>
                    ))}
                </div>
            ) : null}
        </div>
    );

    return (
        <div className="space-y-10 font-nunito">
            <section className="relative overflow-hidden rounded-3xl border-2 border-fuchsia-400 bg-gradient-to-br from-rose-50 via-fuchsia-50 to-rose-100 p-6 shadow-[0_12px_28px_-16px_rgba(192,38,211,0.32)] md:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-300/25 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-rose-300/30 blur-2xl" />

                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-fuchsia-400 bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-rose-900">
                        <span aria-hidden>🧠</span>
                        Smart Basics
                    </div>
                    <h2 className="text-xl font-extrabold text-rose-950 md:text-2xl">{heroTitle}</h2>

                    {hubHeroImage ? (
                        <ImageBesideSection
                            section={{
                                image: hubHeroImage,
                                subtitle: heroTitle,
                                body: paintDetail.intro,
                            }}
                            imageMaxHeight="min(56vh,480px)"
                            imageColumnWidth="min(100%,460px)"
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
                    <h2 className="mb-4 text-xl font-extrabold text-slate-900 md:text-2xl">Paint vocabulary (preview)</h2>
                    <div className="space-y-4">
                        {content.sections.map((section, idx) => (
                            <div
                                key={section.subtitle}
                                className="overflow-hidden rounded-2xl border-2 border-rose-200 bg-white shadow-sm"
                            >
                                <div className="bg-gradient-to-r from-rose-600 to-fuchsia-700 px-4 py-2.5 text-sm font-extrabold text-white">
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
                    <h2 className="text-lg font-extrabold text-rose-950 md:text-xl">Why we study Paint</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                        {(content.msPaintWhyLearn || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border-2 border-rose-400 bg-rose-50/90 p-6">
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
                    to={`/class${classId}/ms-paint-1-what-paint-does.html`}
                    className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-rose-600 to-fuchsia-700 px-5 py-4 text-left text-white transition hover:opacity-95"
                >
                    <span className="font-nunito text-base font-extrabold md:text-lg">Start with What Paint does? →</span>
                    <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                </Link>
                <p className="px-4 pb-4 pt-3 text-justify text-sm text-slate-600 md:px-5">
                    Opens the first lesson. Use the sidebar under <strong className="text-slate-800">MS PAINT-1</strong> for Text and
                    Colors anytime.
                </p>
            </section>
        </div>
    );
}
