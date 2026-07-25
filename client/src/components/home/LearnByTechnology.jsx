import React from 'react';
import { Layers, Shield, Smartphone, Brain, ArrowRight, Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const technologies = [
    {
        emoji: '💻',
        icon: <Code className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={2.25} />,
        title: 'Full Stack Development',
        description: 'Build real websites — buttons, pages, and the secret kitchen behind the screen!',
        border: 'border-blue-400',
        bg: 'from-sky-100 via-white to-indigo-50',
        sticker: 'from-blue-500 to-indigo-600',
        shadow: 'rgba(37,99,235,0.15)',
    },
    {
        emoji: '🛡️',
        icon: <Shield className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={2.25} />,
        title: 'Cyber Security',
        description: 'Learn the hero moves: passwords, privacy, and staying safe online.',
        border: 'border-emerald-400',
        bg: 'from-emerald-100 via-white to-teal-50',
        sticker: 'from-emerald-500 to-teal-600',
        shadow: 'rgba(5,150,105,0.15)',
    },
    {
        emoji: '🤖',
        icon: <Brain className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={2.25} />,
        title: 'Artificial Intelligence',
        description: 'Meet smart machines — patterns, predictions, and how computers “think.”',
        border: 'border-violet-400',
        bg: 'from-violet-100 via-white to-fuchsia-50',
        sticker: 'from-violet-500 to-fuchsia-600',
        shadow: 'rgba(124,58,237,0.15)',
    },
    {
        emoji: '📱',
        icon: <Smartphone className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={2.25} />,
        title: 'Mobile App Development',
        description: 'Design bouncy apps for phones — taps, swipes, and your own mini ideas.',
        border: 'border-amber-400',
        bg: 'from-amber-100 via-white to-orange-50',
        sticker: 'from-amber-500 to-orange-600',
        shadow: 'rgba(217,119,6,0.15)',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.95, rotate: -1 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
};

const LearnByTechnology = () => {
    return (
        <section id="technologies" className="relative overflow-hidden py-20 font-nunito md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-100/70 via-sky-50/80 to-white" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#6366f1_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-[0.22]" />
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-gradient-to-bl from-blue-400/30 to-indigo-400/20 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-300/35 to-violet-300/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mb-14 flex flex-col gap-10 md:mb-16 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-indigo-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-indigo-900 shadow-[4px_4px_0_#6366f1]">
                            <Layers className="h-5 w-5 text-indigo-600" aria-hidden />
                            Learn by Technology
                            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                        </div>
                        <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                                Pick your superpower
                            </span>
                        </h2>
                        <p className="text-lg font-semibold leading-relaxed text-slate-700 md:text-xl">
                            Four fun tracks — tap the one that sounds coolest and explore games, projects, and lessons built around it.
                        </p>
                    </div>

                    <div className="flex shrink-0 justify-center md:justify-end">
                        <Link
                            to="/technologies"
                            className="group inline-flex items-center gap-3 rounded-full border-4 border-indigo-900/20 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-black text-white shadow-[6px_6px_0_rgba(67,56,202,0.4)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_rgba(67,56,202,0.4)] md:px-10 md:text-lg"
                        >
                            Explore all tracks
                            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={tech.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                rotate: idx % 2 === 0 ? -1.5 : 1.5,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative h-full overflow-hidden rounded-[1.75rem] border-4 ${tech.border} bg-gradient-to-br ${tech.bg}`}
                            style={{ boxShadow: `8px 8px 0 ${tech.shadow}` }}
                        >
                            <Link
                                to="/technologies"
                                className="group relative flex h-full flex-col p-6 md:p-7"
                            >
                                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/45 blur-2xl" />
                                <div className="relative mb-5 flex items-start justify-between gap-3">
                                    <div
                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.sticker} shadow-[4px_4px_0_rgba(0,0,0,0.15)]`}
                                        aria-hidden
                                    >
                                        {tech.icon}
                                    </div>
                                    <span className="text-3xl drop-shadow-sm" aria-hidden>
                                        {tech.emoji}
                                    </span>
                                </div>
                                <h3 className="mb-3 text-xl font-black text-slate-900 md:text-[1.35rem]">{tech.title}</h3>
                                <p className="mb-6 flex-grow text-base font-semibold leading-relaxed text-slate-700">{tech.description}</p>
                                <div className="mt-auto flex items-center gap-2 text-sm font-black text-indigo-600">
                                    {`View ${tech.title} details`}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LearnByTechnology;
