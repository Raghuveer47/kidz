import React from 'react';
import { MonitorPlay, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const skillCards = [
    {
        title: 'Quick topic quizzes',
        level: 'All classes',
        icon: '✅',
        sticker: 'from-lime-400 to-green-500',
        text: '5–10 question quizzes after each topic to quickly check understanding of key ideas.',
        bg: 'from-violet-100 via-white to-indigo-50',
        border: 'border-violet-400',
    },
    {
        title: 'Weekly challenge',
        level: 'Classes 4–8',
        icon: '🎯',
        sticker: 'from-amber-400 to-orange-500',
        text: 'One small task every week, like formatting a document or fixing a buggy program.',
        bg: 'from-amber-100 via-white to-orange-50',
        border: 'border-amber-400',
    },
    {
        title: 'Mock tests',
        level: 'Classes 7–10',
        icon: '📊',
        sticker: 'from-cyan-400 to-blue-500',
        text: 'Longer practice tests that combine questions from multiple chapters and skills.',
        bg: 'from-cyan-100 via-white to-sky-50',
        border: 'border-cyan-400',
    },
];

const skillsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, duration: 0.45 },
    },
};

const skillItemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.94, rotate: 2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

const SkillsSection = () => {
    return (
        <section id="skills" className="relative overflow-hidden py-20 md:py-28 font-nunito">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-200/50 via-fuchsia-100/40 to-indigo-100/70" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#a78bfa_0.5px,transparent_0.5px),linear-gradient(45deg,#a78bfa_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.2]" />
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute right-1/4 top-10 h-40 w-40 rounded-full bg-violet-400/25 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="pointer-events-none absolute bottom-20 left-10 h-52 w-52 rounded-full bg-fuchsia-400/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-violet-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-violet-900 shadow-[4px_4px_0_#7c3aed]">
                        <MonitorPlay className="h-5 w-5 text-violet-600" aria-hidden />
                        Test My Skills
                        <Trophy className="h-5 w-5 text-amber-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                            Level up with quizzes &amp; challenges
                        </span>
                    </h2>
                    <p className="flex flex-wrap items-center justify-center gap-2 text-lg font-semibold text-slate-700 md:text-xl">
                        <Star className="h-5 w-5 fill-amber-400 text-amber-500" aria-hidden />
                        Short tests and brain games so you can show what you learned — and have fun doing it!
                        <Star className="h-5 w-5 fill-amber-400 text-amber-500" aria-hidden />
                    </p>
                </motion.div>

                <motion.div
                    variants={skillsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {skillCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={skillItemVariants}
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? 1.5 : -1.5, transition: { type: 'spring', stiffness: 300 } }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative overflow-hidden rounded-[1.75rem] border-4 ${card.border} bg-gradient-to-br ${card.bg} p-6 shadow-[8px_8px_0_rgba(91,33,182,0.12)] md:p-7`}
                        >
                            <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-violet-300/30 blur-2xl" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-violet-900 shadow-sm ring-2 ring-white/80">
                                        {card.level}
                                    </span>
                                    <div
                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.sticker} text-3xl shadow-[4px_4px_0_rgba(0,0,0,0.15)]`}
                                        aria-hidden
                                    >
                                        {card.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 md:text-2xl">{card.title}</h3>
                                <p className="text-base font-semibold leading-relaxed text-slate-700">{card.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    animate={{
                        borderColor: ['#7c3aed', '#ec4899', '#f59e0b', '#06b6d4', '#7c3aed'],
                    }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                    className="mx-auto mb-6 max-w-3xl rounded-2xl border-4 border-dotted bg-white/75 px-5 py-4 text-center text-base font-semibold leading-relaxed text-slate-700 backdrop-blur-sm md:text-lg"
                >
                    Get certified for what you know today, unlock advanced practice from Class 1 to Class 10, and
                    join our global leaderboard of top performers — subscribe to keep your progress, badges, and
                    spotlight growing month after month.
                </motion.div>

                <div className="flex justify-center">
                    <Link
                        to="/skills"
                        className="group inline-flex items-center gap-3 rounded-full border-4 border-violet-900/25 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-10 py-4 text-lg font-black text-white shadow-[6px_6px_0_rgba(91,33,182,0.4)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_rgba(91,33,182,0.4)]"
                    >
                        Start a quiz
                        <span className="inline-block transition group-hover:translate-x-1" aria-hidden>
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
