import React from 'react';
import { Quote, Star, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: 'The kidscodingai.com platform completely changed how my son sees computers. He used to just play games, now he builds them. The Python modules for Class 7 are phenomenal.',
            author: 'Mrs. Sharma',
            role: 'Parent of Class 7 Student',
            image: 'https://i.pravatar.cc/150?img=32',
            emoji: '👩‍👦',
            border: 'border-sky-400',
            bg: 'from-sky-50 via-white to-cyan-50',
            shadow: 'rgba(14,165,233,0.18)',
            stars: 'fill-amber-400 text-amber-400',
        },
        {
            id: 2,
            text: 'As a school principal, finding a curriculum that teaches actual coding to 4th graders seemed impossible until we found this platform. It is safe, structured, and incredibly engaging.',
            author: 'Dr. Vikram Rao',
            role: 'School Principal',
            image: 'https://i.pravatar.cc/150?img=11',
            emoji: '🏫',
            border: 'border-violet-400',
            bg: 'from-violet-50 via-white to-fuchsia-50',
            shadow: 'rgba(139,92,246,0.18)',
            stars: 'fill-amber-400 text-amber-400',
        },
        {
            id: 3,
            text: 'I learned how to make my own website and styled it with CSS! The projects are so fun that it does not even feel like studying. Now I am learning basic AI concepts.',
            author: 'Sneha',
            role: 'Class 8 Student',
            image: 'https://i.pravatar.cc/150?img=5',
            emoji: '✨',
            border: 'border-rose-400',
            bg: 'from-rose-50 via-white to-orange-50',
            shadow: 'rgba(244,63,94,0.18)',
            stars: 'fill-amber-400 text-amber-400',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
        <section className="relative overflow-hidden py-20 font-nunito md:py-28">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/80 via-white to-sky-50/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.15]" />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-gradient-to-bl from-amber-200/50 to-rose-300/30 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-300/40 to-cyan-200/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-rose-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-rose-900 shadow-[4px_4px_0_#f43f5e]">
                        <Heart className="h-5 w-5 fill-rose-400 text-rose-500" aria-hidden />
                        Happy Learners
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-cyan-500 bg-clip-text text-transparent">
                            Smiles, stories &amp; five-star days
                        </span>
                    </h2>
                    <p className="text-lg font-semibold text-slate-700 md:text-xl">
                        Loved by parents, students, and teachers — real words from real classrooms and homes.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-60px' }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                rotate: idx % 2 === 0 ? -1.5 : 1.5,
                                transition: { type: 'spring', stiffness: 280 },
                            }}
                            whileTap={{ scale: 0.99 }}
                            className={`relative overflow-hidden rounded-[1.75rem] border-4 ${item.border} bg-gradient-to-br ${item.bg} p-7 md:p-8`}
                            style={{ boxShadow: `8px 8px 0 ${item.shadow}` }}
                        >
                            <Quote
                                className="absolute right-6 top-6 h-14 w-14 text-indigo-200/80"
                                strokeWidth={1.25}
                                aria-hidden
                            />
                            <div className="relative mb-5 flex items-start justify-between gap-3">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-5 w-5 ${item.stars}`} aria-hidden />
                                    ))}
                                </div>
                                <span className="text-3xl drop-shadow-sm" aria-hidden>
                                    {item.emoji}
                                </span>
                            </div>

                            <p className="relative z-10 mb-8 min-h-[7rem] text-base font-semibold italic leading-relaxed text-slate-700 md:min-h-[6.5rem]">
                                &ldquo;{item.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 border-t-2 border-white/80 pt-6">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="h-14 w-14 rounded-2xl border-4 border-white object-cover shadow-md"
                                />
                                <div className="min-w-0 text-left">
                                    <h3 className="font-black text-slate-900">{item.author}</h3>
                                    <p className="text-sm font-bold text-slate-600">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
