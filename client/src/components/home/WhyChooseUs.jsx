import React from 'react';
import { CheckCircle2, Award, Users, BookOpen, Clock, Zap, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const reasons = [
        {
            emoji: '🏅',
            icon: <Award className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Expert Designed Curriculum',
            description: 'Lessons shaped by people who build real tech — and teachers who know kids.',
            border: 'border-amber-400',
            bg: 'from-amber-50 via-white to-orange-50',
            sticker: 'from-amber-500 to-orange-500',
            shadow: 'rgba(245,158,11,0.2)',
        },
        {
            emoji: '👫',
            icon: <Users className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Age-Appropriate Learning',
            description: 'Words, pace, and projects matched for Class 1 through Class 10.',
            border: 'border-sky-400',
            bg: 'from-sky-50 via-white to-cyan-50',
            sticker: 'from-sky-500 to-cyan-500',
            shadow: 'rgba(14,165,233,0.2)',
        },
        {
            emoji: '📚',
            icon: <BookOpen className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Rich Resource Library',
            description: 'Projects, quizzes, and guides so there is always something new to try.',
            border: 'border-emerald-400',
            bg: 'from-emerald-50 via-white to-teal-50',
            sticker: 'from-emerald-500 to-teal-500',
            shadow: 'rgba(16,185,129,0.2)',
        },
        {
            emoji: '⏰',
            icon: <Clock className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Flexible Learning Pacing',
            description: 'Learn when it fits your day — all materials stay ready for you.',
            border: 'border-violet-400',
            bg: 'from-violet-50 via-white to-fuchsia-50',
            sticker: 'from-violet-500 to-fuchsia-500',
            shadow: 'rgba(139,92,246,0.2)',
        },
        {
            emoji: '⚡',
            icon: <Zap className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Interactive Projects',
            description: 'Build and tinker so ideas stick — not just definitions on a page.',
            border: 'border-rose-400',
            bg: 'from-rose-50 via-white to-pink-50',
            sticker: 'from-rose-500 to-pink-500',
            shadow: 'rgba(244,63,94,0.2)',
        },
        {
            emoji: '✅',
            icon: <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2.25} />,
            title: 'Verified Certification',
            description: 'Earn certificates when you finish — great for school folders and smiles.',
            border: 'border-indigo-400',
            bg: 'from-indigo-50 via-white to-blue-50',
            sticker: 'from-indigo-500 to-blue-600',
            shadow: 'rgba(99,102,241,0.2)',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 18, scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 130, damping: 16 },
        },
    };

    return (
        <section className="relative overflow-hidden pb-20 pt-10 font-nunito md:pb-28 md:pt-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-sky-50/50 to-amber-50/30" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.15]" />
            <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.65, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[480px] translate-x-1/4 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-300/15 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-amber-300/25 to-rose-300/15 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: '-100px' }}
                        transition={{ duration: 0.55 }}
                        className="lg:w-1/2"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-sky-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-sky-900 shadow-[4px_4px_0_#0ea5e9]">
                            <Star className="h-5 w-5 fill-amber-400 text-amber-500" aria-hidden />
                            Why Choose Us
                            <Sparkles className="h-4 w-4 text-violet-500" aria-hidden />
                        </div>
                        <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                                The fun place to learn tech
                            </span>
                        </h2>
                        <p className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
                            Built for curious kids who love to click, create, and ask &quot;what if?&quot;
                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-slate-700">
                            We skip boring memorization. Your child gets hands-on practice — from first steps on a computer to games, projects, and friendly introductions to AI.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: '-50px' }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            {reasons.map((reason, idx) => (
                                <motion.div
                                    key={reason.title}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -6,
                                        rotate: idx % 2 === 0 ? -1 : 1,
                                        transition: { type: 'spring', stiffness: 320 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`relative overflow-hidden rounded-[1.5rem] border-4 ${reason.border} bg-gradient-to-br ${reason.bg} p-5`}
                                    style={{ boxShadow: `6px 6px 0 ${reason.shadow}` }}
                                >
                                    <div className="absolute -right-4 top-6 h-20 w-20 rounded-full bg-white/60 blur-xl" />
                                    <div className="relative flex flex-col gap-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div
                                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${reason.sticker} shadow-[3px_3px_0_rgba(0,0,0,0.12)]`}
                                                aria-hidden
                                            >
                                                {reason.icon}
                                            </div>
                                            <span className="text-2xl" aria-hidden>
                                                {reason.emoji}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-black leading-snug text-slate-900 md:text-lg">{reason.title}</h3>
                                        <p className="text-sm font-semibold leading-relaxed text-slate-700">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
