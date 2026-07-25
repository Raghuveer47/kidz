import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const bookCards = [
    {
        title: 'Basics of Computers',
        age: 'Classes 1–4',
        icon: '📘',
        sticker: 'bg-sky-400',
        text: 'Picture-heavy books that introduce parts of a computer, mouse and keyboard practice, and simple safety rules.',
        bg: 'from-sky-100 via-white to-cyan-50',
        border: 'border-sky-300',
    },
    {
        title: 'Coding Storybooks',
        age: 'Classes 3–6',
        icon: '📖',
        sticker: 'bg-rose-400',
        text: 'Fun stories that use characters and cartoons to explain loops, patterns, and logic in an easy way.',
        bg: 'from-rose-100 via-white to-amber-50',
        border: 'border-rose-300',
    },
    {
        title: 'Python & Web Starters',
        age: 'Classes 7–10',
        icon: '💻',
        sticker: 'bg-emerald-400',
        text: 'Beginner-friendly Python and HTML/CSS books that match the topics students learn on kidscodingai.com.',
        bg: 'from-emerald-100 via-white to-teal-50',
        border: 'border-emerald-300',
    },
];

const booksContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, duration: 0.45 },
    },
};

const bookItemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.94, rotate: -2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

const BooksSection = () => {
    return (
        <section id="books" className="relative overflow-hidden py-20 md:py-28 font-nunito">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/90 via-orange-50/80 to-rose-100/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fbbf24_1.5px,transparent_1.5px)] [background-size:22px_22px] opacity-[0.35]" />
            <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full bg-gradient-to-br from-amber-300/50 to-orange-400/30 blur-2xl md:h-72 md:w-72"
            />
            <motion.div
                animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="pointer-events-none absolute -left-20 bottom-16 h-56 w-56 rounded-full bg-gradient-to-tr from-rose-300/40 to-pink-400/25 blur-2xl md:h-80 md:w-80"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-amber-400/80 bg-white/90 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-amber-900 shadow-[4px_4px_0_#f59e0b]">
                        <BookOpen className="h-5 w-5 text-amber-600" aria-hidden />
                        Buy Books
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                            Story-time meets computers
                        </span>
                    </h2>
                    <p className="text-lg font-semibold text-slate-700 md:text-xl">
                        Colourful books that make tech feel like an adventure — easy for kids to read and for parents to choose.
                    </p>
                </motion.div>

                <motion.div
                    variants={booksContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-80px' }}
                    className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {bookCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={bookItemVariants}
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.5 : 1.5, transition: { type: 'spring', stiffness: 300 } }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative overflow-hidden rounded-[1.75rem] border-4 ${card.border} bg-gradient-to-br ${card.bg} p-6 shadow-[8px_8px_0_rgba(15,23,42,0.08)] md:p-7`}
                        >
                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/50 blur-2xl" />
                            <div className="relative flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-700 shadow-sm ring-2 ring-white/80">
                                        {card.age}
                                    </span>
                                    <div
                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${card.sticker} text-3xl shadow-[4px_4px_0_rgba(0,0,0,0.12)]`}
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
                        to="/books"
                        className="group inline-flex items-center gap-3 rounded-full border-4 border-amber-900/20 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-10 py-4 text-lg font-black text-white shadow-[6px_6px_0_rgba(180,83,9,0.45)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_rgba(180,83,9,0.45)]"
                    >
                        See all books
                        <span className="inline-block transition group-hover:translate-x-1" aria-hidden>
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BooksSection;
