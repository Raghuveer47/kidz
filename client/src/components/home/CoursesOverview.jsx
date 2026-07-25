import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const classesData = [
    {
        classNum: 1,
        title: 'Class 1',
        emoji: '🎒',
        border: 'border-blue-400',
        headerGradient: 'from-blue-500 to-indigo-600',
        cardGradient: 'from-sky-50 via-white to-blue-50/90',
        shadow: 'rgba(37,99,235,0.18)',
        bullet: 'bg-blue-400',
        topics: [
            { id: 'computer-alphabets-1', name: 'COMPUTER ALPHABETS-1' },
            { id: 'computer-alphabets-2', name: 'COMPUTER ALPHABETS-2' },
            { id: 'computer-alphabets-3', name: 'COMPUTER ALPHABETS-3' },
            { id: 'computer-images-1', name: 'COMPUTER IMAGES-1' },
        ],
    },
    {
        classNum: 2,
        title: 'Class 2',
        emoji: '🌟',
        border: 'border-violet-400',
        headerGradient: 'from-violet-500 to-purple-600',
        cardGradient: 'from-violet-50 via-white to-purple-50/90',
        shadow: 'rgba(124,58,237,0.18)',
        bullet: 'bg-violet-400',
        topics: [
            { id: 'computer-images-2', name: 'COMPUTER IMAGES-2' },
            { id: 'computer-parts-1', name: 'PARTS OF COMPUTER-1' },
            { id: 'uses-of-computer', name: 'USES OF COMPUTER' },
            { id: 'start-shutdown', name: 'START AND SHUTDOWN OPTIONS' },
        ],
    },
    {
        classNum: 3,
        title: 'Class 3',
        emoji: '🌱',
        border: 'border-emerald-400',
        headerGradient: 'from-emerald-500 to-teal-600',
        cardGradient: 'from-emerald-50 via-white to-teal-50/90',
        shadow: 'rgba(5,150,105,0.18)',
        bullet: 'bg-emerald-400',
        topics: [
            { id: 'parts-of-computer-2', name: 'PARTS OF COMPUTER-2' },
            { id: 'windows-os-1', name: 'WINDOWS OS-1' },
            { id: 'good-computer-habits', name: 'GOOD COMPUTER HABITS' },
            { id: 'typing-1', name: 'TYPING-1' },
            { id: 'calculator', name: 'CALCULATOR' },
            { id: 'ms-paint-1', name: 'MS PAINT-1' },
        ],
    },
    {
        classNum: 4,
        title: 'Class 4',
        emoji: '🎨',
        border: 'border-amber-400',
        headerGradient: 'from-amber-500 to-orange-500',
        cardGradient: 'from-amber-50 via-white to-orange-50/90',
        shadow: 'rgba(217,119,6,0.2)',
        bullet: 'bg-amber-400',
        topics: [
            { id: 'parts-of-computer-3', name: 'PARTS OF COMPUTER-3' },
            { id: 'ethics', name: 'ETHICS' },
            { id: 'health-tips', name: 'HEALTH TIPS' },
            { id: 'windows-os-2', name: 'WINDOWS OS-2' },
            { id: 'typing-2', name: 'TYPING-2' },
            { id: 'notepad-tutorial', name: 'NOTEPAD TUTORIAL' },
            { id: 'notepad-exercises', name: 'NOTEPAD EXERCISES' },
            { id: 'notepad-faq', name: 'NOTEPAD FAQ' },
            { id: 'ms-paint-2', name: 'MS PAINT-2' },
            { id: 'ms-word-1', name: 'MS WORD-1' },
            { id: 'what-is-ai', name: 'WHAT IS AI' },
        ],
    },
    {
        classNum: 5,
        title: 'Class 5',
        emoji: '🎪',
        border: 'border-pink-400',
        headerGradient: 'from-pink-500 to-rose-600',
        cardGradient: 'from-pink-50 via-white to-rose-50/90',
        shadow: 'rgba(236,72,153,0.2)',
        bullet: 'bg-pink-400',
        topics: [
            { id: 'parts-of-computer-4', name: 'PARTS OF COMPUTER-4' },
            { id: 'file-management', name: 'FILE MANAGEMENT' },
            { id: 'ms-paint-3', name: 'MS PAINT-3' },
            { id: 'ms-word-2', name: 'MS WORD-2' },
            { id: 'windows-os-3', name: 'WINDOWS OS-3' },
            { id: 'typing-skills-3', name: 'TYPING SKILLS-3' },
            { id: 'ai-2', name: 'AI-2' },
        ],
    },
    {
        classNum: 6,
        title: 'Class 6',
        emoji: '🚀',
        border: 'border-cyan-400',
        headerGradient: 'from-cyan-500 to-blue-600',
        cardGradient: 'from-cyan-50 via-white to-sky-50/90',
        shadow: 'rgba(6,182,212,0.2)',
        bullet: 'bg-cyan-400',
        topics: [
            { id: 'parts-of-computer-5', name: 'PARTS OF COMPUTER-5' },
            { id: 'windows-os-4', name: 'WINDOWS OS-4' },
            { id: 'typing-skills-4', name: 'TYPING SKILLS-4' },
            { id: 'ms-word-3', name: 'MS WORD-3' },
            { id: 'ms-ppt-1', name: 'MS PPT-1' },
            { id: 'algorithms', name: 'ALGORITHMS' },
            { id: 'ai-3', name: 'AI-3' },
        ],
    },
    {
        classNum: 7,
        title: 'Class 7',
        emoji: '⚡',
        border: 'border-indigo-400',
        headerGradient: 'from-indigo-500 to-violet-600',
        cardGradient: 'from-indigo-50 via-white to-violet-50/90',
        shadow: 'rgba(79,70,229,0.2)',
        bullet: 'bg-indigo-400',
        topics: [
            { id: 'command-prompt', name: 'WORKING WITH COMMAND PROMPT' },
            { id: 'ms-word-4', name: 'MS WORD-4' },
            { id: 'ppt-2', name: 'PPT-2' },
            { id: 'flowcharts', name: 'FLOWCHARTS' },
            { id: 'python-1', name: 'PYTHON-1' },
            { id: 'internet-1', name: 'INTERNET-1' },
            { id: 'html-1', name: 'HTML-1' },
            { id: 'ai-4', name: 'AI-4' },
        ],
    },
    {
        classNum: 8,
        title: 'Class 8',
        emoji: '🎯',
        border: 'border-rose-400',
        headerGradient: 'from-rose-500 to-red-600',
        cardGradient: 'from-rose-50 via-white to-orange-50/90',
        shadow: 'rgba(244,63,94,0.2)',
        bullet: 'bg-rose-400',
        topics: [
            { id: 'windows-control-panel', name: 'WINDOWS CONTROL PANEL' },
            { id: 'excel-1', name: 'EXCEL-1' },
            { id: 'ppt-3', name: 'PPT-3' },
            { id: 'python-2', name: 'PYTHON-2' },
            { id: 'internet-2', name: 'INTERNET-2' },
            { id: 'html-2', name: 'HTML-2' },
            { id: 'css-1', name: 'CSS-1' },
            { id: 'machine-learning', name: 'MACHINE LEARNING' },
        ],
    },
    {
        classNum: 9,
        title: 'Class 9',
        emoji: '🔐',
        border: 'border-teal-400',
        headerGradient: 'from-teal-500 to-emerald-600',
        cardGradient: 'from-teal-50 via-white to-emerald-50/90',
        shadow: 'rgba(20,184,166,0.2)',
        bullet: 'bg-teal-400',
        topics: [
            { id: 'viruses-security', name: 'VIRUSES-1 & SECURITY BASICS' },
            { id: 'excel-2', name: 'EXCEL-2' },
            { id: 'python-3', name: 'PYTHON-3' },
            { id: 'c-basics-1', name: 'C-1' },
            { id: 'html-3', name: 'HTML-3' },
            { id: 'css-2', name: 'CSS-2' },
            { id: 'gen-ai', name: 'GEN AI' },
            { id: 'math-for-ai', name: 'MATH FOR AI' },
        ],
    },
    {
        classNum: 10,
        title: 'Class 10',
        emoji: '🏆',
        border: 'border-fuchsia-400',
        headerGradient: 'from-fuchsia-500 to-pink-600',
        cardGradient: 'from-fuchsia-50 via-white to-pink-50/90',
        shadow: 'rgba(192,38,211,0.2)',
        bullet: 'bg-fuchsia-400',
        topics: [
            { id: 'viruses-backup', name: 'VIRUSES-2 & BACKUP RECOVERY' },
            { id: 'os-installation', name: 'OS INSTALLATION' },
            { id: 'excel-3', name: 'EXCEL-3' },
            { id: 'c-basics-2', name: 'C-2' },
            { id: 'java-1', name: 'JAVA-1' },
            { id: 'css-3', name: 'CSS-3 & BOOTSTRAP-1 & JS-1' },
            { id: 'ai-tools', name: 'AI TOOLS' },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 16 },
    },
};

const CoursesOverview = () => {
    return (
        <section id="classes" className="relative overflow-hidden py-20 font-nunito md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/40 to-indigo-50/50" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]" />
            <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-gradient-to-br from-blue-300/35 to-indigo-400/20 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tl from-cyan-300/30 to-violet-300/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-indigo-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-indigo-900 shadow-[4px_4px_0_#6366f1]">
                        <GraduationCap className="h-5 w-5 text-indigo-600" aria-hidden />
                        Structured Curriculum
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                            Your learning path, class by class
                        </span>
                    </h2>
                    <p className="text-lg font-semibold text-slate-700 md:text-xl">
                        Tap your grade to jump into topics — from first clicks and paint apps to coding, web, and modern AI tools.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {classesData.map((cls, idx) => (
                        <motion.div
                            key={cls.classNum}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                rotate: idx % 2 === 0 ? -1 : 1,
                                transition: { type: 'spring', stiffness: 280 },
                            }}
                            whileTap={{ scale: 0.99 }}
                            className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border-4 ${cls.border} bg-gradient-to-b ${cls.cardGradient}`}
                            style={{ boxShadow: `8px 8px 0 ${cls.shadow}` }}
                        >
                            <div
                                className={`flex items-center justify-between gap-3 bg-gradient-to-r ${cls.headerGradient} px-4 py-4 shadow-md`}
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <span
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-2xl shadow-inner"
                                        aria-hidden
                                    >
                                        {cls.emoji}
                                    </span>
                                    <h3 className="truncate text-xl font-black tracking-tight text-white drop-shadow-sm">{cls.title}</h3>
                                </div>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/25 text-white">
                                    <img
                                        src="/logo.jpg"
                                        alt="KidsCodingAI favicon"
                                        className="h-7 w-7 rounded-md object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = '/logoimg.jpeg';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-grow flex-col p-5 pt-5">
                                <ul className="flex flex-col gap-1">
                                    {cls.topics.map((topic) => (
                                        <li key={topic.id}>
                                            <Link
                                                to={`/class${cls.classNum}/${topic.id}.html`}
                                                className="group/link flex items-start gap-2.5 rounded-xl px-2 py-2 text-sm font-bold text-slate-700 transition hover:bg-white/80 hover:text-indigo-700"
                                            >
                                                <span
                                                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${cls.bullet} ring-2 ring-white shadow-sm transition group-hover/link:scale-125`}
                                                />
                                                <span className="leading-snug">{topic.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoursesOverview;
