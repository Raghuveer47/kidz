import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const OurOtherResources = () => {
    return (
        <section className="relative overflow-hidden py-16 font-nunito md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/60 via-indigo-50/40 to-white" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border-2 border-sky-500 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-sky-800 shadow-[3px_3px_0_#38bdf8] sm:text-sm">
                        <Sparkles className="h-4 w-4 text-fuchsia-500" aria-hidden />
                        Our Other Resources
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className="grid items-center gap-8 rounded-3xl border-4 border-sky-300 bg-white/90 p-4 shadow-[8px_8px_0_rgba(56,189,248,0.25)] md:grid-cols-2 md:p-6"
                >
                    <div className="overflow-hidden rounded-2xl border-4 border-blue-500/70 shadow-lg">
                        <img
                            src="/other-resources-story.png"
                            alt="NikhilLearnHub story preview"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="text-slate-800">
                        <h3 className="mb-1 text-3xl font-black text-blue-600 md:text-5xl">NikhilLearnHub.com</h3>
                        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-violet-600 md:text-base">
                            knowledge to everyone
                        </p>
                        <p className="mb-4 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            NikhilLearnHub is a friendly learning corner where kids can explore stories, poems, general
                            knowledge, and technology in both English and Telugu.
                        </p>
                        <p className="mb-6 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                            It is designed to make learning fun, simple, and useful for curious young minds through
                            engaging topics and easy-to-read content.
                        </p>

                        <a
                            href="https://nikhillearnhub.com/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3 text-base font-extrabold text-white shadow-[0_5px_0_rgba(29,78,216,0.5)] transition-all hover:-translate-y-0.5 hover:brightness-110"
                        >
                            Explore Our Content
                            <ExternalLink className="h-4 w-4" aria-hidden />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurOtherResources;
