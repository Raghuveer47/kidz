import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ImageBesideSection from '../../shared/ImageBesideSection';

/**
 * Class 3 — Windows OS-1 hub: Smart Basics hero, vocabulary preview, why/how, CTA — blue/slate palette.
 */
export default function WindowsOsOneHub({ content, classId }) {
    const osDetail = content.osDetail || {};
    const hubHeroImage = content.hubHeroImage;

    const heroTitle = content.windowsOsSmartBasicsTitle || 'Operating system — Smart Basics';

    return (
        <div className="space-y-10 font-nunito">
            {/* Smart Basics hero — mirrors Parts-of-Computer-2 hero; colours: blue / slate */}
            <section className="relative overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 p-6 shadow-[0_12px_28px_-16px_rgba(37,99,235,0.35)] md:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-300/25 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-slate-300/30 blur-2xl" />

                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-blue-400 bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-blue-900">
                        <span aria-hidden>🧠</span>
                        Smart Basics
                    </div>
                    <h2 className="text-xl font-extrabold text-blue-900 md:text-2xl">{heroTitle}</h2>

                    <div className="mt-4 overflow-hidden">
                        {hubHeroImage ? (
                            <div className="mx-auto mb-4 w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow-inner lg:mb-0 lg:float-left lg:mr-8">
                                <img
                                    src={hubHeroImage}
                                    alt=""
                                    className="h-auto w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ) : null}
                        <div className="space-y-3 text-justify">
                            <p className="text-base leading-relaxed text-slate-700 md:text-lg">{osDetail.intro}</p>
                            <p className="text-base leading-relaxed text-slate-700 md:text-lg">{osDetail.analogy}</p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-blue-300 bg-white/90 p-3 shadow-sm">
                            <p className="text-justify text-sm font-bold text-blue-900">
                                Apps (Paint, browser…) run <strong>inside</strong> Windows—the OS starts first and hosts every program.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-300 bg-white/90 p-3 shadow-sm">
                            <p className="text-justify text-sm font-bold text-slate-800">
                                Hardware needs <strong>drivers</strong>—small helpers Windows installs so keyboard, screen, and printer work together.
                            </p>
                        </div>
                    </div>

                    {(osDetail.keyPoints || []).length > 0 ? (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {(osDetail.keyPoints || []).map((point) => (
                                <article
                                    key={point.title}
                                    className="rounded-2xl border border-blue-200/90 bg-white/95 p-4 shadow-sm"
                                >
                                    <h3 className="text-base font-extrabold text-blue-950 md:text-lg">{point.title}</h3>
                                    <p className="mt-1 text-justify text-sm leading-relaxed text-slate-700 md:text-base">
                                        {point.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>

            {/* Quick vocabulary — same structural slot as hub sections in data */}
            {(content.sections || []).length > 0 ? (
                <section>
                    <h2 className="mb-4 text-xl font-extrabold text-slate-900 md:text-2xl">Desktop vocabulary (preview)</h2>
                    <div className="space-y-4">
                        {content.sections.map((section, idx) => (
                            <div
                                key={section.subtitle}
                                className="overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-sm"
                            >
                                <div className="bg-gradient-to-r from-slate-600 to-blue-700 px-4 py-2.5 text-sm font-extrabold text-white">
                                    {idx + 1}. {section.subtitle}
                                </div>
                                {section.image ? (
                                    <ImageBesideSection
                                        section={{
                                            subtitle: section.subtitle,
                                            image: section.image,
                                            body: section.body,
                                        }}
                                        imageMaxHeight="min(56vh,480px)"
                                        imageColumnWidth="min(100%,460px)"
                                        bulletMarkerClass="[&_ul]:marker:text-blue-600"
                                        textClassName="text-justify text-sm leading-relaxed text-slate-700 md:text-base [&_li]:text-justify"
                                    />
                                ) : (
                                    <p className="whitespace-pre-line p-4 text-justify text-sm leading-relaxed text-slate-700 md:p-5 md:text-base">
                                        {section.body}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ) : null}

            {/* Why / How — same grid idea as Parts-of-Computer-2; slate + blue (not emerald/amber) */}
            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/70 p-6">
                    <h2 className="text-lg font-extrabold text-blue-950 md:text-xl">Why we study the OS</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                        {(content.windowsOsWhyLearn || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border-2 border-slate-400 bg-slate-50/90 p-6">
                    <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">How to use this unit</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                        {(content.windowsOsHowToStudy || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA — first lesson (not output-devices) */}
            <section className="rounded-2xl border-2 border-blue-400 bg-white p-1 shadow-md">
                <Link
                    to={`/class${classId}/windows-os-1-history.html`}
                    className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 px-5 py-4 text-left text-white transition hover:opacity-95"
                >
                    <span className="font-nunito text-base font-extrabold md:text-lg">Start with History →</span>
                    <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                </Link>
                <p className="px-4 pb-4 pt-3 text-justify text-sm text-slate-600 md:px-5">
                    Opens <strong className="text-slate-800">Windows OS-1: History</strong>. Use the sidebar to open Versions, OS functions, or Overview.
                </p>
            </section>
        </div>
    );
}
