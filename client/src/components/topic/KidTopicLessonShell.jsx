import React from 'react';
import { motion } from 'framer-motion';

/** Default hero emoji + gradient per class (1–10) for topic lesson pages. */
export const CLASS_HERO_DEFAULTS = {
    '1': { emoji: '🌟', gradient: 'from-sky-500 via-cyan-500 to-indigo-600' },
    '2': { emoji: '📗', gradient: 'from-indigo-500 via-violet-600 to-fuchsia-600' },
    '3': { emoji: '📙', gradient: 'from-amber-500 via-orange-500 to-rose-600' },
    '4': { emoji: '📕', gradient: 'from-rose-500 via-pink-500 to-purple-600' },
    '5': { emoji: '📘', gradient: 'from-blue-500 via-indigo-500 to-violet-600' },
    '6': { emoji: '💡', gradient: 'from-lime-500 via-emerald-500 to-teal-600' },
    '7': { emoji: '🎯', gradient: 'from-violet-500 via-purple-500 to-fuchsia-600' },
    '8': { emoji: '🚀', gradient: 'from-orange-500 via-red-500 to-rose-600' },
    '9': { emoji: '✨', gradient: 'from-teal-500 via-cyan-500 to-blue-600' },
    '10': { emoji: '🏆', gradient: 'from-amber-500 via-yellow-500 to-orange-500' },
};

function heroForClass(classId) {
    return CLASS_HERO_DEFAULTS[classId] || CLASS_HERO_DEFAULTS['1'];
}

/** Justify flowing lesson text for Class 2–10 without overriding explicit alignments. */
function justifyBodyClasses(classId) {
    const n = Number.parseInt(String(classId ?? '1'), 10);
    if (!Number.isFinite(n) || n < 2 || n > 10) return '';
    return [
        '[&_p]:text-justify',
        '[&_li]:text-justify',
        '[&_.text-center_p]:text-center',
        '[&_.text-left_p]:text-left',
        '[&_.text-right_p]:text-right',
        '[&_pre]:text-left',
        '[&_code]:text-left',
    ].join(' ');
}

const PATTERN_SVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

/**
 * Kid-friendly shell: pattern background, breadcrumb row, narrow sidebar + main column,
 * gradient hero, dashed separator, content area (matches Class 2 input device pages).
 */
export default function KidTopicLessonShell({
    classId,
    breadcrumb,
    sidebar,
    heroEmoji,
    heroTitle,
    heroTagline,
    heroGradient,
    /** String or node (e.g. icon + label). Default: `Class {id} · Topic lesson`. */
    heroBadge,
    /** Extra Tailwind classes for the hero intro paragraph. Omit to use full width + justified + relaxed leading. */
    heroTaglineClassName,
    /** Extra Tailwind classes for the hero title (e.g. whitespace-nowrap for long headings). */
    heroTitleClassName,
    children,
    mainKey,
}) {
    const h = heroForClass(String(classId || '1'));
    const emoji = heroEmoji ?? h.emoji;
    const gradient = heroGradient ?? h.gradient;
    const badge = heroBadge ?? `Class ${classId} · Topic lesson`;

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-amber-50 via-violet-50 to-sky-100 font-nunito">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{ backgroundImage: PATTERN_SVG }}
                aria-hidden
            />

            <div className="relative border-b-2 border-white/60 bg-white/70 py-4 px-1.5 shadow-sm backdrop-blur-md sm:px-2 lg:pl-2 lg:pr-6 xl:pr-8">
                <div className="flex w-full min-w-0 flex-wrap items-center gap-x-1 gap-y-1 text-sm font-bold text-slate-600">
                    {breadcrumb}
                </div>
            </div>

            <div className="relative flex w-full min-w-0 flex-grow flex-col gap-4 px-1.5 py-6 sm:px-2 sm:py-7 lg:flex-row lg:gap-5 lg:pl-2 lg:pr-6 xl:pr-8">
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full shrink-0 lg:w-[14rem] xl:w-[14.5rem]"
                >
                    {sidebar}
                </motion.div>

                <motion.div
                    key={mainKey}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="w-full min-w-0 flex-1"
                >
                    <div className="mb-6 overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_24px_60px_-20px_rgba(79,70,229,0.35)] ring-4 ring-indigo-200/60">
                        <div
                            className={`relative overflow-hidden bg-gradient-to-br px-5 py-5 text-white sm:px-7 sm:py-6 md:px-8 md:py-6 ${gradient}`}
                        >
                            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                            <div className="pointer-events-none absolute -bottom-10 left-1/4 h-32 w-32 rounded-full bg-yellow-300/30 blur-2xl" />
                            <div className="relative flex w-full min-w-0 flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-4">
                                <div className="w-full min-w-0">
                                    <div className="mb-1.5 inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/15 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4">
                                        {badge}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                        <span className="select-none text-4xl sm:text-5xl md:text-6xl" aria-hidden>
                                            {emoji}
                                        </span>
                                        <h1
                                            className={[
                                                'font-extrabold leading-[1.12] tracking-tight',
                                                heroTitleClassName ||
                                                    'max-w-3xl text-balance text-2xl sm:text-[1.65rem] md:text-4xl lg:text-[2.35rem]',
                                            ].join(' ')}
                                        >
                                            {heroTitle}
                                        </h1>
                                    </div>
                                    {heroTagline ? (
                                        <p
                                            className={[
                                                'mt-2 text-base font-semibold text-white/95 sm:text-lg md:text-xl line-clamp-6',
                                                heroTaglineClassName ||
                                                    'w-full max-w-none text-justify leading-relaxed',
                                            ].join(' ')}
                                        >
                                            {heroTagline}
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div
                            className={[
                                'border-t-4 border-dashed border-indigo-100 bg-gradient-to-b from-white to-indigo-50/30 p-6 md:p-10 lg:p-12',
                                justifyBodyClasses(classId),
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {children}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
