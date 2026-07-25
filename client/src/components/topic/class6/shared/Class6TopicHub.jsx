import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ImageBesideSection from '../../shared/ImageBesideSection';
import { CLASS6_THEMES } from './class6Themes';

/** Class 6 — reusable hub for multi-lesson units. */
export default function Class6TopicHub({
    content,
    classId,
    theme = 'teal',
    hubId,
    hubSidebarTitle,
    firstLessonId,
    firstLessonLabel,
    badgeLabel = 'Class 6',
    whyTitle = 'Why we study this unit',
    howTitle = 'How to use this unit',
    previewTitle,
}) {
    const t = CLASS6_THEMES[theme] || CLASS6_THEMES.teal;
    const unitDetail = content.unitDetail || {};
    const hubHeroImage = content.hubHeroImage;
    const heroTitle = content.unitTitle || content.heading;
    const sidebarLabel = hubSidebarTitle || content.heading;
    const startId = firstLessonId || content.firstLessonId;
    const startLabel = firstLessonLabel || content.firstLessonLabel;
    const previewHeading = previewTitle || `${sidebarLabel} topics (preview)`;

    const heroBelowContent = (
        <div className="space-y-5">
            {unitDetail.analogy ? (
                <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">{unitDetail.analogy}</p>
            ) : null}
            {(unitDetail.keyPoints || []).length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                    {(unitDetail.keyPoints || []).map((point) => (
                        <article
                            key={point.title}
                            className={`rounded-2xl border ${t.borderCard} bg-white/95 p-4 shadow-sm`}
                        >
                            <h3 className={`text-base font-extrabold md:text-lg ${t.titleText}`}>{point.title}</h3>
                            <p className="mt-1 text-justify text-sm leading-relaxed text-slate-700 md:text-base">
                                {point.body}
                            </p>
                        </article>
                    ))}
                </div>
            ) : null}
        </div>
    );

    return (
        <div className="space-y-10 font-nunito">
            <section
                className={`relative overflow-hidden rounded-3xl border-2 ${t.border} bg-gradient-to-br ${t.heroGradient} p-6 shadow-[0_12px_28px_-16px_var(--hero-shadow)] md:p-8`}
                style={{ '--hero-shadow': t.heroShadow }}
            >
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${t.blur} blur-2xl`} />
                <div className="relative">
                    <div
                        className={`mb-3 inline-flex items-center gap-2 rounded-full border-2 ${t.badgeBorder} bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide ${t.accentText}`}
                    >
                        <span aria-hidden>📘</span>
                        {badgeLabel}
                    </div>
                    <h2 className={`text-xl font-extrabold md:text-2xl ${t.titleText}`}>{heroTitle}</h2>
                    {hubHeroImage ? (
                        <ImageBesideSection
                            section={{ image: hubHeroImage, subtitle: heroTitle, body: unitDetail.intro }}
                            textPosition="below"
                            imageMaxHeight="min(75vh,720px)"
                            imageColumnWidth="100%"
                            imageFrameClassName="w-full max-w-4xl"
                            bulletMarkerClass={`[&_ul]:marker:${t.marker}`}
                            wrapClassName="mt-4 p-0"
                            belowContent={heroBelowContent}
                        />
                    ) : (
                        <div className="mt-4 space-y-5">
                            <div className="space-y-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                                {unitDetail.intro ? <p>{unitDetail.intro}</p> : null}
                                {unitDetail.analogy ? <p>{unitDetail.analogy}</p> : null}
                            </div>
                            {heroBelowContent}
                        </div>
                    )}
                </div>
            </section>

            {(content.sections || []).length > 0 ? (
                <section>
                    <h2 className="mb-4 text-xl font-extrabold text-slate-900 md:text-2xl">{previewHeading}</h2>
                    <div className="space-y-4">
                        {content.sections.map((section, idx) => (
                            <div
                                key={section.subtitle}
                                className={`overflow-hidden rounded-2xl border-2 ${t.borderLight} bg-white shadow-sm`}
                            >
                                <div
                                    className={`bg-gradient-to-r ${t.sectionHeader} px-4 py-2.5 text-sm font-extrabold text-white`}
                                >
                                    {idx + 1}. {section.subtitle}
                                </div>
                                {section.image ? (
                                    <ImageBesideSection
                                        section={section}
                                        textPosition="below"
                                        imageMaxHeight="min(80vh,720px)"
                                        imageColumnWidth="100%"
                                        imageFrameClassName="max-w-none"
                                        bulletMarkerClass={`[&_ul]:marker:${t.marker}`}
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

            {(content.unitWhyLearn || []).length > 0 || (content.unitHowToStudy || []).length > 0 ? (
                <section className="grid gap-6 md:grid-cols-2">
                    {(content.unitWhyLearn || []).length > 0 ? (
                        <div className={`rounded-2xl border-2 ${t.cardBorder} ${t.cardBg} p-6`}>
                            <h2 className={`text-lg font-extrabold md:text-xl ${t.titleText}`}>{whyTitle}</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                                {content.unitWhyLearn.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {(content.unitHowToStudy || []).length > 0 ? (
                        <div className={`rounded-2xl border-2 ${t.border} bg-white/90 p-6`}>
                            <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">{howTitle}</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-justify text-slate-800 [&_li]:text-justify">
                                {content.unitHowToStudy.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </section>
            ) : null}

            {startId && startLabel ? (
                <section className={`rounded-2xl border-2 ${t.border} bg-white p-1 shadow-md`}>
                    <Link
                        to={`/class${classId}/${startId}.html`}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r ${t.ctaGradient} px-5 py-4 text-left text-white transition hover:opacity-95`}
                    >
                        <span className="font-nunito text-base font-extrabold md:text-lg">Start with {startLabel} →</span>
                        <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                    </Link>
                    <p className="px-4 pb-4 pt-3 text-justify text-sm text-slate-600 md:px-5">
                        Opens the first lesson. Use the sidebar under{' '}
                        <strong className="text-slate-800">{sidebarLabel}</strong> for all sub-lessons anytime.
                    </p>
                </section>
            ) : null}
        </div>
    );
}
