import React from 'react';
import { Target, Heart, Sparkles, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSnippets = () => {
    const features = [
        {
            emoji: '🎯',
            icon: <Target className="h-7 w-7 text-white" strokeWidth={2.25} />,
            title: 'Vision',
            description: 'We aim to nurture young minds with the skills, creativity, and confidence they need to explore technology fearlessly. We turn uncertainty into excitement, questions into discovery, and small steps into meaningful achievements.',
            border: 'border-sky-400',
            bg: 'from-sky-100 via-white to-cyan-50',
            sticker: 'from-sky-500 to-blue-600',
            shadow: 'rgba(14,165,233,0.18)',
        },
        {
            emoji: '❤️',
            icon: <Heart className="h-7 w-7 text-white" strokeWidth={2.25} />,
            title: 'Mission',
            description: 'Empower children with essential digital skills through fun, engaging, and age-appropriate learning experiences.',
            border: 'border-rose-400',
            bg: 'from-rose-100 via-white to-orange-50',
            sticker: 'from-rose-500 to-orange-500',
            shadow: 'rgba(244,63,94,0.18)',
        },
        {
            emoji: '🤖',
            icon: <Brain className="h-7 w-7 text-white" strokeWidth={2.25} />,
            title: 'Discover AI',
            description: 'We use AI to explain technology in simple, kid-friendly steps with clear examples.',
            border: 'border-violet-400',
            bg: 'from-violet-100 via-white to-fuchsia-50',
            sticker: 'from-violet-500 to-fuchsia-600',
            shadow: 'rgba(139,92,246,0.2)',
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
        hidden: { opacity: 0, y: 22, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 120, damping: 15 },
        },
    };

    return (
        <section id="about" className="relative overflow-hidden pt-20 font-nunito pb-14 md:pb-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-white" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.2]" />
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gradient-to-bl from-cyan-300/40 to-blue-400/20 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gradient-to-tr from-violet-300/35 to-pink-300/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-blue-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-900 shadow-[4px_4px_0_#3b82f6]">
                        <Sparkles className="h-5 w-5 text-amber-500" aria-hidden />
                        Discover AI
                        <Brain className="h-5 w-5 text-violet-600" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                            Our adventure in AI &amp; coding
                        </span>
                    </h2>
                    <p className="text-lg font-semibold text-slate-700 md:text-xl">
                        kidscodingai.com helps kids explore technology clearly and safely—with room to play, learn, and build.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-50px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                rotate: idx % 2 === 0 ? -1.5 : 1.5,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative overflow-hidden rounded-[1.75rem] border-4 ${feature.border} bg-gradient-to-br ${feature.bg} p-7`}
                            style={{ boxShadow: `8px 8px 0 ${feature.shadow}` }}
                        >
                            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/50 blur-2xl" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.sticker} shadow-[4px_4px_0_rgba(0,0,0,0.12)]`}
                                        aria-hidden
                                    >
                                        {feature.icon}
                                    </div>
                                    <span className="text-3xl drop-shadow-sm" aria-hidden>
                                        {feature.emoji}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">{feature.title}</h3>
                                <p className="text-base font-semibold leading-relaxed text-slate-700">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="mt-14 text-center"
                >
                    <Link
                        to="/about-details"
                        className="group inline-flex items-center gap-3 rounded-full border-4 border-indigo-900/15 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-10 py-4 text-lg font-black text-white shadow-[6px_6px_0_rgba(67,56,202,0.35)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_rgba(67,56,202,0.35)]"
                    >
                        Know more
                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSnippets;
