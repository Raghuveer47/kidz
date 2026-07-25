import React from 'react';
import { Star, TrendingUp, Trophy, Sparkles, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

const TopPerformers = () => {
    const performers = [
        {
            id: 1,
            name: 'Aarav K.',
            classLevel: 'Class 5',
            achievement: 'Completed 15 AI Basics Projects',
            avatar: '/top-performers/aarav.jpg',
            score: '99.8%',
            location: 'Bengaluru',
            parent: 'Parent: Karthik Kumar',
            emoji: '🥇',
            border: 'border-amber-400',
            bg: 'from-amber-50 via-white to-orange-50',
            shadow: 'rgba(245,158,11,0.22)',
            rankBg: 'from-amber-400 to-orange-500',
            ring: 'from-amber-400 to-orange-400',
        },
        {
            id: 2,
            name: 'Priya S.',
            classLevel: 'Class 8',
            achievement: 'Built a fully functional Python Chatbot',
            avatar: '/top-performers/priya.jpg',
            score: '99.5%',
            location: 'Hyderabad',
            parent: 'Parent: Sneha Sharma',
            emoji: '🥈',
            border: 'border-slate-400',
            bg: 'from-slate-50 via-white to-sky-50',
            shadow: 'rgba(100,116,139,0.2)',
            rankBg: 'from-slate-500 to-slate-600',
            ring: 'from-slate-300 to-sky-400',
        },
        {
            id: 3,
            name: 'Rohan M.',
            classLevel: 'Class 3',
            achievement: 'Mastered MS Paint Advanced Drawing',
            avatar: '/top-performers/rohan.jpg',
            score: '98.9%',
            location: 'Pune',
            parent: 'Parent: Meera Mehta',
            emoji: '🥉',
            border: 'border-orange-400',
            bg: 'from-orange-50 via-white to-amber-50',
            shadow: 'rgba(234,88,12,0.2)',
            rankBg: 'from-orange-500 to-amber-600',
            ring: 'from-orange-300 to-amber-400',
        },
        {
            id: 4,
            name: 'Diya V.',
            classLevel: 'Class 10',
            achievement: 'Certified in Java & React Basics',
            avatar: '/top-performers/diya.jpg',
            score: '98.7%',
            location: 'Chennai',
            parent: 'Parent: Varun Verma',
            emoji: '⭐',
            border: 'border-rose-400',
            bg: 'from-rose-50 via-white to-pink-50',
            shadow: 'rgba(244,63,94,0.2)',
            rankBg: 'from-rose-500 to-pink-600',
            ring: 'from-rose-400 to-fuchsia-400',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 22, scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 120, damping: 16 },
        },
    };

    return (
        <section className="relative overflow-hidden border-t-4 border-amber-200/60 py-20 font-nunito md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-violet-50/50" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]" />
            <motion.div
                animate={{ rotate: [0, 3, 0], y: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute right-10 top-20 h-48 w-48 rounded-full bg-gradient-to-br from-violet-300/35 to-fuchsia-300/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mb-14 flex flex-col items-stretch gap-8 md:mb-16 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-violet-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-violet-900 shadow-[4px_4px_0_#8b5cf6]">
                            <Trophy className="h-5 w-5 text-amber-500" aria-hidden />
                            Hall of Fame
                            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                        </div>
                        <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                                Top Performers
                            </span>
                        </h2>
                        <p className="text-lg font-semibold text-slate-700 md:text-xl">
                            High-fives to students who keep leveling up — coding, creativity, and big smiles.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border-4 border-violet-200 bg-gradient-to-r from-violet-100 to-fuchsia-100 px-6 py-3 text-sm font-black text-violet-900 shadow-[4px_4px_0_rgba(139,92,246,0.35)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(139,92,246,0.35)]"
                        >
                            View leaderboard
                            <TrendingUp className="h-4 w-4" aria-hidden />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                    {performers.map((student, idx) => (
                        <motion.div
                            key={student.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                rotate: idx % 2 === 0 ? -1.5 : 1.5,
                                transition: { type: 'spring', stiffness: 280 },
                            }}
                            whileTap={{ scale: 0.99 }}
                            className={`group relative overflow-hidden rounded-[1.75rem] border-4 ${student.border} bg-gradient-to-b ${student.bg} px-6 pb-7 pt-10 text-center`}
                            style={{ boxShadow: `8px 8px 0 ${student.shadow}` }}
                        >
                            <div
                                className={`absolute -right-1 -top-1 flex h-12 w-12 items-center justify-center rounded-bl-2xl rounded-tr-[1.5rem] bg-gradient-to-br ${student.rankBg} text-lg font-black text-white shadow-md ring-2 ring-white`}
                            >
                                #{idx + 1}
                            </div>
                            <div className="absolute right-3 top-14 text-2xl" aria-hidden>
                                {student.emoji}
                            </div>

                            <div className="relative mx-auto mb-5 w-32">
                                <div
                                    className={`absolute -inset-1 rounded-full bg-gradient-to-tr ${student.ring} opacity-60 blur-sm transition group-hover:opacity-90`}
                                />
                                <img
                                    src={student.avatar}
                                    alt={student.name}
                                    className="relative z-10 h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg transition group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute -bottom-1 left-1/2 z-20 flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-white px-2 py-0.5 shadow-md ring-2 ring-amber-100">
                                    <Medal className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" aria-hidden />
                                </div>
                            </div>

                            <h3 className="mb-1 text-xl font-black text-slate-900">{student.name}</h3>
                            <div className="mb-3 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-violet-800 shadow-sm ring-2 ring-white/80">
                                {student.classLevel}
                            </div>
                            <div className="mb-4 text-xs font-semibold leading-snug text-slate-600">
                                <div className="text-slate-500">{student.location}</div>
                                {student.parent && <div className="mt-2 text-[11px] font-bold text-slate-500">{student.parent}</div>}
                            </div>

                            <p className="mb-5 min-h-[3.5rem] border-b-2 border-white/70 pb-5 text-sm font-semibold leading-snug text-slate-700">
                                {student.achievement}
                            </p>

                            <div className="flex items-center justify-center gap-2 font-black text-violet-700">
                                <TrendingUp className="h-5 w-5 text-fuchsia-500" aria-hidden />
                                <span className="text-lg">{student.score}</span>
                                <span className="text-sm font-extrabold text-slate-600">score</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TopPerformers;
