import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-sky-50 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.12]" />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="pointer-events-none absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl rounded-3xl border-4 border-emerald-200 bg-white/90 p-8 text-center shadow-[8px_8px_0_rgba(16,185,129,0.18)] md:p-12"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-emerald-400/80 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-800 shadow-[3px_3px_0_#10b981]">
                        <Layers className="w-4 h-4" />
                        Projects
                        <Sparkles className="h-4 w-4 text-emerald-500" />
                    </div>
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                        Project ideas to practice what you learn
                    </h1>
                    <p className="text-lg font-medium leading-relaxed text-slate-700">
                        Project content will be shared soon.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-slate-500 md:text-base">
                        We are preparing creative, hands-on project packs for different classes and skill levels.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

