import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ImageBesideSection from './ImageBesideSection';

/**
 * Reusable overview block for Parts of Computer-3/4/5 topics.
 * Each section with an image uses ImageBesideSection (MS Paint–style layout).
 */
export default function PartsOfComputerSeries({ topic }) {
    const firstChild = topic?.children?.[0];
    const childRouteBase = topic?.childRouteBase;
    const sections = topic?.content?.sections || [];

    return (
        <div className="space-y-8 font-nunito">
            <section className="relative overflow-hidden rounded-3xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-100 via-sky-50 to-cyan-100 p-6 md:p-8 shadow-[0_12px_28px_-16px_rgba(79,70,229,0.45)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl" />
                <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-indigo-300 bg-white/85 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-indigo-800">
                        <span aria-hidden>🧠</span>
                        Smart Basics
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">{topic?.content?.heading}</h2>
                    <p className="mt-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                        {topic?.content?.text}
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                {sections.map((section, idx) => (
                    <article
                        key={section.slug || section.subtitle}
                        className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-[0_10px_22px_-14px_rgba(15,23,42,0.35)]"
                    >
                        <div className="bg-gradient-to-r from-indigo-600 to-sky-600 px-4 py-2.5 text-sm font-extrabold text-white">
                            {idx + 1}. {section.subtitle}
                        </div>
                        {section.image ? (
                            <ImageBesideSection
                                section={section}
                                imageMaxHeight="min(56vh,480px)"
                                imageColumnWidth="min(100%,460px)"
                                bulletMarkerClass="[&_ul]:marker:text-indigo-600"
                            />
                        ) : (
                            <p className="whitespace-pre-line p-4 text-justify text-base leading-relaxed text-slate-700 md:p-6 md:text-lg">
                                {section.body}
                            </p>
                        )}
                    </article>
                ))}
            </section>

            {childRouteBase && firstChild ? (
                <section className="rounded-2xl border-2 border-sky-300 bg-white p-1 shadow-md">
                    <Link
                        to={`${childRouteBase}${firstChild.slug}`}
                        className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-4 text-left text-white transition hover:opacity-95"
                    >
                        <span className="text-base font-extrabold md:text-lg">Explore each part one by one</span>
                        <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                    </Link>
                    <p className="px-4 pb-4 pt-3 text-justify text-sm text-slate-600 md:px-5">
                        Opens the <strong className="text-slate-800">{firstChild.label}</strong> lesson first. Use
                        the sidebar list under <strong className="text-slate-800">{topic?.title}</strong> to open all
                        subtopics.
                    </p>
                </section>
            ) : null}
        </div>
    );
}
