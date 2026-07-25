import React from 'react';
import { Layers, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projectCards = [
    {
        title: 'Presentation portfolio',
        level: 'Beginner',
        icon: '🖼️',
        sticker: 'from-pink-400 to-rose-500',
        text: 'Create a small set of slides about a favourite topic using images, animations, and proper formatting.',
        bg: 'from-pink-100 via-white to-orange-50',
        border: 'border-pink-400',
    },
    {
        title: 'First coding app',
        level: 'Intermediate',
        icon: '🧩',
        sticker: 'from-emerald-400 to-teal-500',
        text: 'Build a calculator, quiz, or small game using Scratch or Python, and share it with family.',
        bg: 'from-emerald-100 via-white to-lime-50',
        border: 'border-emerald-400',
    },
    {
        title: 'Mini AI project',
        level: 'Advanced',
        icon: '🤖',
        sticker: 'from-sky-400 to-indigo-500',
        text: 'Plan or build a tiny AI experiment, like an image-based story or chatbot idea, with guidance from a mentor.',
        bg: 'from-sky-100 via-white to-cyan-50',
        border: 'border-sky-400',
    },
];

const projectsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, duration: 0.45 },
    },
};

const projectItemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.94, rotate: -2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative overflow-hidden py-20 md:py-28 font-nunito">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-100/80 via-teal-50/70 to-emerald-100/80" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.25]" />
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-10 top-1/3 h-64 w-64 rounded-full bg-gradient-to-bl from-cyan-300/40 to-teal-400/25 blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="pointer-events-none absolute bottom-24 left-0 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-300/35 to-lime-300/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-teal-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-teal-900 shadow-[4px_4px_0_#0d9488]">
                        <Layers className="h-5 w-5 text-teal-600" aria-hidden />
                        Projects
                        <Rocket className="h-5 w-5 text-orange-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                            Build cool stuff you can show off
                        </span>
                    </h2>
                    <p className="text-lg font-semibold text-slate-700 md:text-xl">
                        From slide shows to games and tiny AI ideas — real projects that help you feel like a creator, not just a learner.
                    </p>
                </motion.div>

                <motion.div
                    variants={projectsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {projectCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={projectItemVariants}
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.5 : 1.5, transition: { type: 'spring', stiffness: 300 } }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative overflow-hidden rounded-[1.75rem] border-4 ${card.border} bg-gradient-to-br ${card.bg} p-6 shadow-[8px_8px_0_rgba(13,148,136,0.15)] md:p-7`}
                        >
                            <div className="absolute -right-4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-200/40 blur-2xl" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-teal-900 shadow-sm ring-2 ring-white/80">
                                        {card.level}
                                    </span>
                                    <div
                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.sticker} text-3xl shadow-[4px_4px_0_rgba(0,0,0,0.12)]`}
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

                <div className="flex justify-center">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-3 rounded-full border-4 border-teal-900/20 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 px-10 py-4 text-lg font-black text-white shadow-[6px_6px_0_rgba(15,118,110,0.4)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_rgba(15,118,110,0.4)]"
                    >
                        Explore projects
                        <span className="inline-block transition group-hover:translate-x-1" aria-hidden>
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
