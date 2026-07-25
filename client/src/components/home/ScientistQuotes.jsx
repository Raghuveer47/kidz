import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ScientistQuotes = () => {
    const quotes = [
        {
            text: "C is not a big language, and it is not well served by a big manual.",
            author: "Dennis Ritchie",
            role: "Creator of the C programming language",
            cardBg: 'from-rose-50 via-pink-50 to-orange-50',
            cardBorderHover: 'hover:border-rose-300',
            cardShadowHover: 'hover:shadow-[10px_10px_0_rgba(244,63,94,0.2)]',
        },
        {
            text: "Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another’s code; too little and expressiveness is endangered.",
            author: "Guido van Rossum",
            role: "Creator of Python",
            cardBg: 'from-sky-50 via-cyan-50 to-blue-50',
            cardBorderHover: 'hover:border-cyan-300',
            cardShadowHover: 'hover:shadow-[10px_10px_0_rgba(6,182,212,0.2)]',
        },
        {
            text: "Java was not designed to replace any other language; it was designed to be easier to use.",
            author: "James Gosling",
            role: "Creator of the Java programming language",
            cardBg: 'from-violet-50 via-fuchsia-50 to-indigo-50',
            cardBorderHover: 'hover:border-violet-300',
            cardShadowHover: 'hover:shadow-[10px_10px_0_rgba(139,92,246,0.2)]',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative overflow-hidden py-24 font-nunito">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-100 via-sky-100 to-violet-100" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.22]" />
            <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-cyan-300/35 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-16"
                >
                    <Lightbulb className="w-8 h-8 text-amber-500" />
                    <h2 className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                        Words of Inspiration
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {quotes.map((quote, idx) => (
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            key={idx}
                            className={`relative rounded-2xl border-4 border-white/85 bg-gradient-to-br ${quote.cardBg} p-8 shadow-[8px_8px_0_rgba(14,116,144,0.18)] transition-all ${quote.cardBorderHover} ${quote.cardShadowHover}`}
                        >
                            <span className="absolute -top-4 left-6 text-6xl font-serif text-fuchsia-500/35">"</span>
                            <p className="relative z-10 mb-8 pt-4 text-lg italic leading-relaxed text-slate-700">
                                {quote.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 to-violet-200 font-bold text-xl text-violet-700">
                                    {quote.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{quote.author}</h4>
                                    <p className="text-sm text-slate-600">{quote.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        to="/scientists"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-violet-200 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:from-violet-600 hover:to-fuchsia-600"
                    >
                        Know more about scientists
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ScientistQuotes;
