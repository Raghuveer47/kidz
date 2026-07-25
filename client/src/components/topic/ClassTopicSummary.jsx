import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Sparkles, Target } from 'lucide-react';

const JUSTIFY =
    'text-justify text-sm font-semibold leading-relaxed text-slate-700 sm:text-base md:leading-loose';

/**
 * Rich class summary: justified intro, detailed topic cards, optional checklist and footer.
 * Used for Class 3 (and any class that provides summaryRows with highlights).
 */
export default function ClassTopicSummary({
    className,
    classId,
    content,
    nextClassPath,
    nextClassLabel,
}) {
    const rows = content.summaryRows || [];
    const introParagraphs = content.summaryIntro
        ? (Array.isArray(content.summaryIntro) ? content.summaryIntro : [content.summaryIntro])
        : content.text
          ? [content.text]
          : [];

    const checklist = content.summaryChecklist || [];
    const footerParagraphs = content.summaryFooter
        ? Array.isArray(content.summaryFooter)
            ? content.summaryFooter
            : [content.summaryFooter]
        : [];

    const rowEmojis = ['🖨️', '🪟', '💺', '⌨️', '🔢', '🎨', '📝', '🏆'];

    return (
        <div className="space-y-8 font-nunito">
            <div className="relative overflow-hidden rounded-[1.35rem] border-4 border-emerald-200 bg-gradient-to-br from-emerald-50/95 via-white to-amber-50 p-5 shadow-[6px_6px_0_rgba(16,185,129,0.12)] md:p-7">
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-300/35 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-emerald-300/30 blur-2xl" />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <span
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-amber-300 to-orange-400 text-3xl shadow-md"
                        aria-hidden
                    >
                        📋
                    </span>
                    <div className="min-w-0 flex-1 space-y-3">
                        <p className="flex flex-wrap items-center gap-2 text-lg font-black text-emerald-950 md:text-2xl">
                            <Sparkles className="h-5 w-5 text-amber-500 shrink-0" aria-hidden />
                            {content.heading || `${className} — Learning Summary`}
                        </p>
                        {introParagraphs.map((para, i) => (
                            <p key={i} className={JUSTIFY}>
                                {para}
                            </p>
                        ))}
                    </div>
                    <div className="hidden shrink-0 rounded-2xl border-2 border-dashed border-emerald-300/90 bg-white/80 px-4 py-3 text-center sm:block">
                        <BookOpen className="mx-auto h-9 w-9 text-emerald-600" aria-hidden />
                        <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-emerald-700">
                            Read &amp; review
                        </p>
                    </div>
                </div>
            </div>

            {checklist.length > 0 ? (
                <div className="rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50/90 via-white to-violet-50/80 p-5 md:p-6">
                    <p className="mb-3 flex items-center gap-2 text-base font-extrabold text-indigo-950 md:text-lg">
                        <Target className="h-5 w-5 text-indigo-500 shrink-0" aria-hidden />
                        Before you move to the next class, can you…
                    </p>
                    <ul className="space-y-2.5 pl-1">
                        {checklist.map((item, i) => (
                            <li
                                key={i}
                                className={`flex gap-2.5 ${JUSTIFY}`}
                            >
                                <span
                                    className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[0.65rem] font-black text-white"
                                    aria-hidden
                                >
                                    {i + 1}
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            <div>
                <h3 className="mb-4 text-lg font-extrabold text-slate-900 md:text-xl">
                    Topics you studied — in detail
                </h3>
                <div className="space-y-5">
                    {rows.map((row, idx) => {
                        const mark = row.emoji || rowEmojis[idx % rowEmojis.length];
                        const highlights = row.highlights || [];
                        return (
                            <motion.article
                                key={row.topic}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-24px' }}
                                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.3) }}
                                className="overflow-hidden rounded-2xl border-2 border-slate-200/90 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.2)]"
                            >
                                <div className="flex flex-wrap items-center gap-2 border-b border-indigo-100 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-4 py-3 text-white md:px-5">
                                    <span
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white/30 bg-white/15 text-xl"
                                        aria-hidden
                                    >
                                        {mark}
                                    </span>
                                    <h4 className="min-w-0 flex-1 text-sm font-extrabold tracking-wide sm:text-base md:text-lg">
                                        {row.topic}
                                    </h4>
                                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider">
                                        Topic {idx + 1}
                                    </span>
                                </div>
                                <div className="space-y-4 p-4 md:p-6">
                                    <p className={JUSTIFY}>{row.outcome}</p>
                                    {highlights.length > 0 ? (
                                        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                                            <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-emerald-800">
                                                Key ideas to remember
                                            </p>
                                            <ul className="space-y-2">
                                                {highlights.map((point, hi) => (
                                                    <li
                                                        key={hi}
                                                        className={`flex gap-2 ${JUSTIFY} text-sm md:text-[0.95rem]`}
                                                    >
                                                        <span
                                                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                                                            aria-hidden
                                                        />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {footerParagraphs.length > 0 ? (
                <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50/80 p-5 md:p-6">
                    <p className="mb-3 text-base font-extrabold text-amber-950 md:text-lg">
                        Final words for {className}
                    </p>
                    <div className="space-y-3">
                        {footerParagraphs.map((para, i) => (
                            <p key={i} className={JUSTIFY}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            ) : null}

            <p className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-center text-xs font-bold text-indigo-800 sm:text-sm text-justify">
                Tip: Read one topic card with a parent or teacher, then open that lesson from the sidebar if you want
                to practice again. When you feel ready, try the {className} quiz!
            </p>

            {nextClassPath ? (
                <div className="pt-1">
                    <Link
                        to={nextClassPath}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] md:text-base"
                    >
                        {`Go to ${nextClassLabel}`}
                        <ChevronRight className="h-4 w-4" aria-hidden />
                    </Link>
                </div>
            ) : null}
        </div>
    );
}
