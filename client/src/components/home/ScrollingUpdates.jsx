import React, { useState, useEffect } from 'react';
import { Sparkles, Megaphone } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

const scrollTransition = {
    duration: 18,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'loop',
};

const ScrollingCard = ({ group, itemVariants, direction = 'up' }) => {
    const controls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);
    const isDown = direction === 'down';

    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else {
            controls.start({
                y: isDown ? 0 : '-50%',
                transition: scrollTransition,
            });
        }
    }, [isHovered, controls, isDown]);

    useEffect(() => {
        controls.set(isDown ? '-50%' : 0);
        controls.start({
            y: isDown ? 0 : '-50%',
            transition: scrollTransition,
        });
    }, [controls, isDown]);

    return (
        <motion.div
            variants={itemVariants}
            className={`relative flex h-96 flex-col overflow-hidden rounded-[1.75rem] border-4 ${group.border} bg-white shadow-[8px_8px_0_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[10px_10px_0_rgba(15,23,42,0.1)]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`z-10 flex items-center gap-3 bg-gradient-to-r ${group.headerGradient} p-5 shadow-md`}
            >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/25 text-2xl shadow-inner" aria-hidden>
                    {group.emoji}
                </span>
                <div className="min-w-0 text-left">
                    <h4 className="text-lg font-black tracking-wide text-white drop-shadow-sm">{group.title}</h4>
                    <p className="text-xs font-bold text-white/90">{group.tagline}</p>
                </div>
            </div>

            <div className="relative flex-1 overflow-hidden bg-gradient-to-b from-slate-50/80 to-white">
                <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-10 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />

                <motion.div
                    initial={{ y: isDown ? '-50%' : 0 }}
                    animate={controls}
                    className="absolute flex w-full flex-col gap-5 px-5 py-6"
                >
                    {[...group.items, ...group.items].map((item, i) => (
                        <div key={i} className="group/item flex items-start gap-3">
                            <div
                                className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${group.bullet} ring-2 ring-white shadow-sm transition-transform group-hover/item:scale-125`}
                            />
                            <p className="text-base font-semibold leading-relaxed text-slate-700 group-hover/item:text-slate-900">
                                {item}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div
                className={`flex items-center justify-center gap-2 border-t-4 ${group.border} bg-gradient-to-r ${group.footerTint} px-3 py-3 text-center`}
            >
                <span className={`h-2.5 w-2.5 animate-pulse rounded-full ${group.bullet}`} />
                <span className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Hover to pause &amp; read</span>
            </div>
        </motion.div>
    );
};

const ScrollingUpdates = () => {
    const updateGroups = [
        {
            title: 'Platform Updates',
            tagline: 'Fresh stuff on the site',
            emoji: '⚡',
            headerGradient: 'from-amber-500 via-orange-500 to-rose-500',
            border: 'border-amber-300',
            bullet: 'bg-amber-400',
            footerTint: 'from-amber-50 to-orange-50',
            items: [
                'New intuitive dashboard design launched for students',
                'Mobile App v2.0 is now available on App Store',
                'Parents can now track real-time quiz performance',
                'Added 50+ new AI-generated practice exercises',
            ],
        },
        {
            title: 'Training & Courses',
            tagline: 'Classes & live fun',
            emoji: '📣',
            headerGradient: 'from-sky-500 via-blue-500 to-indigo-600',
            border: 'border-sky-400',
            bullet: 'bg-sky-400',
            footerTint: 'from-sky-50 to-indigo-50',
            items: [
                'Registration for Summer Coding Bootcamp is open',
                'New Advanced Generative AI module added for Class 9 & 10',
                'Live Q&A session with Microsoft engineers this weekend',
                'Free Python introductory masterclass starting tomorrow',
            ],
        },
        {
            title: 'Latest Tech News',
            tagline: 'Stories from the tech world',
            emoji: '🏆',
            headerGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
            border: 'border-emerald-400',
            bullet: 'bg-emerald-400',
            footerTint: 'from-emerald-50 to-teal-50',
            items: [
                'Kid from Class 8 wins the National App Innovation Challenge',
                'How AI is revolutionizing personalized learning',
                'The importance of teaching cybersecurity basics to children',
                'Top 10 essential coding languages to learn in 2024',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-100/60 via-fuchsia-50/50 to-cyan-100/50" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#f472b6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.2]" />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-gradient-to-br from-pink-300/40 to-rose-400/25 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="pointer-events-none absolute -right-12 bottom-20 h-64 w-64 rounded-full bg-gradient-to-tl from-cyan-300/35 to-violet-300/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-100px' }}
                    transition={{ duration: 0.55 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-fuchsia-500 bg-white/95 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-fuchsia-900 shadow-[4px_4px_0_#d946ef]">
                        <Megaphone className="h-5 w-5 text-fuchsia-600" aria-hidden />
                        Stay Updated
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                        <span className="bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                            Updates, Training events, Tech news
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-semibold text-slate-700 md:text-xl">
                        Scroll the cards to peek at what&apos;s new — pause anytime by hovering so you don&apos;t miss a line.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-50px' }}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-3"
                >
                    {updateGroups.map((group, idx) => (
                        <ScrollingCard
                            key={idx}
                            group={group}
                            itemVariants={itemVariants}
                            direction={group.title === 'Training & Courses' ? 'down' : 'up'}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ScrollingUpdates;
