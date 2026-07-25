import React from 'react';
import ImageBesideSection from '../../shared/ImageBesideSection';
import { contentFromChildren, IMAGE_LAYOUT_PRESETS } from '../../shared/contentFromChildren';

const LESSON_TEXT =
    'text-justify text-base leading-relaxed text-slate-700 md:text-lg [&_li]:text-justify';

const TONE_STYLES = {
    indigo:
        'border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/30 shadow-[0_10px_36px_-14px_rgba(99,102,241,0.35)]',
    sky: 'border-sky-200/90 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30 shadow-[0_10px_36px_-14px_rgba(14,165,233,0.3)]',
    rose: 'border-rose-200/90 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/25 shadow-[0_10px_36px_-14px_rgba(244,63,94,0.22)]',
    emerald:
        'border-emerald-200/90 bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/25 shadow-[0_10px_36px_-14px_rgba(16,185,129,0.25)]',
};

/** Gradient text + matching dashed rule under section titles (kid-friendly, tone-matched). */
const LESSON_H2_TITLE = {
    indigo: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600',
    sky: 'text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600',
    rose: 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600',
    emerald: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600',
};

const LESSON_H2_RULE = {
    indigo: 'border-indigo-300/80',
    sky: 'border-sky-300/80',
    rose: 'border-rose-300/80',
    emerald: 'border-emerald-300/80',
};

/** Section with anchor id — wrapped in a soft “card” for kids */
export function LessonBlock({ id, title, emoji, children, tone = 'indigo' }) {
    const shell = TONE_STYLES[tone] || TONE_STYLES.indigo;
    const titleGrad = LESSON_H2_TITLE[tone] || LESSON_H2_TITLE.indigo;
    const rule = LESSON_H2_RULE[tone] || LESSON_H2_RULE.indigo;
    return (
        <section id={id} className={`scroll-mt-28 rounded-3xl border-2 p-5 md:p-7 ${shell}`}>
            <h2
                className={`mb-4 flex flex-wrap items-center gap-2 border-b-2 border-dashed pb-3 text-xl font-extrabold tracking-tight md:text-2xl ${rule}`}
            >
                {emoji ? (
                    <span className="select-none text-3xl md:text-4xl" aria-hidden>
                        {emoji}
                    </span>
                ) : null}
                <span className={titleGrad}>{title}</span>
            </h2>
            <div className="space-y-3 text-justify text-base leading-relaxed text-slate-700 md:text-lg [&_li]:text-justify">
                {children}
            </div>
        </section>
    );
}

export function BulletList({ items, className = '' }) {
    return (
        <ul
            className={[
                'mt-1 list-disc space-y-2.5 pl-5 marker:text-indigo-500 [&_li]:text-justify [&_li]:leading-relaxed',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

/** Numbered key points for kid lessons — no dot symbols, no “bullet” wording. */
export function LessonPointList({ items, className = '', markerClass = 'text-indigo-600' }) {
    if (!items?.length) return null;
    return (
        <ol
            className={[
                'mt-1 list-none space-y-3 pl-0 [&_li]:text-justify [&_li]:leading-relaxed',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {items.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-800">
                    <span
                        className={[
                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-extrabold',
                            markerClass,
                        ].join(' ')}
                        aria-hidden
                    >
                        {i + 1}
                    </span>
                    <span className="min-w-0 flex-1 pt-0.5">{item}</span>
                </li>
            ))}
        </ol>
    );
}

/** One photo per row + rich text (MS Paint–style: beside image, overflow below). */
export function OneImageDetailRow({
    src,
    title,
    alt,
    children,
    imageSize = 'default',
    bulletMarkerClass = '[&_ul]:marker:text-indigo-600',
}) {
    const layout = IMAGE_LAYOUT_PRESETS[imageSize] || IMAGE_LAYOUT_PRESETS.default;
    const { paragraphs, bullets } = contentFromChildren(children);

    return (
        <section className="overflow-hidden rounded-2xl border-2 border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/30 shadow-md">
            <h3 className="border-b border-indigo-100/90 bg-white/60 px-4 py-3 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 md:px-6 md:text-2xl">
                {title}
            </h3>
            <ImageBesideSection
                section={{
                    image: src,
                    subtitle: title,
                    alt: alt || title,
                    paragraphs,
                    bullets,
                }}
                imageMaxHeight={layout.imageMaxHeight}
                imageColumnWidth={layout.imageColumnWidth}
                bulletMarkerClass={bulletMarkerClass}
                textClassName={LESSON_TEXT}
                wrapClassName="p-4 md:p-6"
            />
        </section>
    );
}

/** Image + text; overflow below image on large screens (same behavior as MS Paint-1). */
export function ImageSideAndBelowRow({
    src,
    title,
    alt,
    besideChildren,
    belowChildren,
    imageSize = 'types',
    showTitle = true,
    bulletMarkerClass = '[&_ul]:marker:text-indigo-600',
}) {
    const layout = IMAGE_LAYOUT_PRESETS[imageSize] || IMAGE_LAYOUT_PRESETS.types;
    const beside = contentFromChildren(besideChildren);
    const below = contentFromChildren(belowChildren);

    const section = {
        image: src,
        subtitle: title,
        body: beside.body,
        paragraphs: [...beside.paragraphs, ...below.paragraphs],
        bullets: [...beside.bullets, ...below.bullets],
    };

    const belowContent =
        belowChildren && below.paragraphs.length === 0 && below.bullets.length === 0 ? (
            <div className={`space-y-3 ${LESSON_TEXT}`}>{belowChildren}</div>
        ) : null;

    return (
        <section className="overflow-hidden rounded-2xl border-2 border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/30 shadow-md">
            {showTitle ? (
                <h3 className="border-b border-indigo-100/90 bg-white/60 px-4 py-3 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 md:px-6 md:text-2xl">
                    {title}
                </h3>
            ) : null}
            <ImageBesideSection
                section={section}
                imageMaxHeight={layout.imageMaxHeight}
                imageColumnWidth={layout.imageColumnWidth}
                bulletMarkerClass={bulletMarkerClass}
                textClassName={LESSON_TEXT}
                wrapClassName="p-4 md:p-6"
                belowContent={belowContent}
            />
        </section>
    );
}

export function TypesPhotoCallout({ children, heading = 'See these types in real photos!' }) {
    return (
        <div className="mt-5 rounded-2xl border-2 border-dashed border-amber-400/70 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 p-4 shadow-inner md:p-5">
            <p className="mb-3 flex flex-wrap items-center gap-2 font-extrabold">
                <span className="text-2xl" aria-hidden>
                    📸
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                    {heading}
                </span>
            </p>
            {children}
        </div>
    );
}

/** Kid-friendly “if this happens, try that” troubleshooting */
export function TroubleList({ rows }) {
    return (
        <div className="mt-2 space-y-4 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/95 to-orange-50/70 p-4 md:p-5">
            {rows.map((row, i) => (
                <div
                    key={i}
                    className="border-b border-amber-200/70 pb-4 last:border-b-0 last:pb-0"
                >
                    <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                        {row.problem}
                    </p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-orange-700">Try this</p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-700">
                        {row.fixes.map((fix, j) => (
                            <li key={j}>{fix}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export function LessonTip({ title, children, tone = 'sky' }) {
    const styles = {
        sky: 'border-sky-300 bg-gradient-to-r from-sky-50 to-cyan-50',
        emerald: 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50',
        violet: 'border-violet-300 bg-gradient-to-r from-violet-50 to-fuchsia-50',
    };
    const titleGrad = {
        sky: 'text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-cyan-700',
        emerald: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700',
        violet: 'text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-700',
    };
    return (
        <aside
            className={`rounded-2xl border-2 p-4 md:p-5 ${styles[tone] || styles.sky}`}
            aria-label={title}
        >
            <p className={`flex items-center gap-2 font-extrabold ${titleGrad[tone] || titleGrad.sky}`}>
                <span aria-hidden>⭐</span>
                {title}
            </p>
            <div className="mt-2 text-slate-700">{children}</div>
        </aside>
    );
}
