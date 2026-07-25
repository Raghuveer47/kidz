import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const summerTraining = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133511/kidscodingai/assets/images/training/summer-training.jpg';
const trainingImage2 = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133512/kidscodingai/assets/images/training/training-image-2.png';

const SummerTrainingSection = () => {
    return (
        <section
            id="summer-training"
            className="relative overflow-hidden border-y border-sky-200/70 py-16 font-nunito md:py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-amber-50/60 to-orange-50/80" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.14]" />
            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-16 top-0 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-amber-300/35 to-orange-300/25 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] -translate-x-1/4 rounded-full bg-gradient-to-tr from-sky-300/30 to-cyan-300/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-amber-500 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-amber-900 shadow-[4px_4px_0_#fbbf24] sm:text-sm">
                            <Sun className="h-5 w-5 fill-amber-400 text-amber-600" aria-hidden />
                            Summer program
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
                            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-sky-600 bg-clip-text text-transparent">
                                Summer training
                            </span>
                        </h2>
                        <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-slate-700 md:text-xl">
                            Keep minds active and curious with structured coding and AI exploration over the holidays—fun
                            projects, clear milestones, and room to experiment.
                        </p>
                        <a
                            href="https://tinyurl.com/summer-coaching"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-base font-black text-white shadow-[5px_5px_0_rgba(234,88,12,0.35)] ring-2 ring-orange-400/40 transition hover:translate-y-0.5 hover:from-amber-400 hover:to-orange-400 hover:shadow-[3px_3px_0_rgba(234,88,12,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 active:translate-y-1 active:shadow-none"
                        >
                            Enroll for Summer Coaching
                            <ArrowRight className="h-5 w-5" aria-hidden />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
                    >
                        <div className="relative overflow-hidden rounded-[1.75rem] border-[3px] border-sky-400 shadow-[8px_8px_0_rgba(56,189,248,0.35),0_20px_40px_-12px_rgba(14,165,233,0.25)] ring-2 ring-white/90">
                            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem]" aria-hidden>
                                <img
                                    src={summerTraining}
                                    alt=""
                                    className="h-full min-h-full w-full min-w-full scale-110 object-cover object-center blur-2xl saturate-150"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-amber-50/40 to-sky-100/50" />
                            </div>
                            <div className="relative z-[1] bg-white/35 p-4 sm:p-6">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <img
                                        src={summerTraining}
                                        alt="Summer training program — KidsCodingAI"
                                        className="h-full max-h-[520px] w-full rounded-2xl object-cover object-center drop-shadow-[0_16px_32px_rgba(14,165,233,0.22)]"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                    <img
                                        src={trainingImage2}
                                        alt="Summer coaching training program — KidsCodingAI"
                                        className="h-full max-h-[520px] w-full rounded-2xl object-cover object-center drop-shadow-[0_16px_32px_rgba(14,165,233,0.22)]"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SummerTrainingSection;
