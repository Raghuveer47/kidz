import React, { useEffect } from 'react';
import { Target, Heart, Lightbulb, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutDetails = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const details = [
        {
            id: 'vision',
            icon: <Target className="w-10 h-14 text-blue-500" />,
            title: "Vision",
            content: "Our vision is to nurture young minds with the skills, creativity, and confidence they need to explore technology fearlessly. We aim to turn uncertainty into excitement, questions into discovery, and small steps into meaningful achievements."
        },
        {
            id: 'mission',
            icon: <Heart className="w-10 h-10 text-rose-500" />,
            title: "Mission",
            content: "Our mission is to empower children with essential digital skills through fun, engaging, and age-appropriate learning experiences.",
            missionPoints: [
                "Empower children with essential digital skills through fun, engaging, and age-appropriate learning experiences.",
                "Foster creativity by encouraging exploration, experimentation, and hands-on interaction with technology.",
                "Build confidence by supporting every child’s learning journey, no matter their starting point.",
                "Transform curiosity into discovery by nurturing a mindset of questioning, problem-solving, and innovation.",
                "Create a safe and inclusive environment where children feel comfortable to learn, make mistakes, and grow.",
                "Inspire a love for technology that turns small achievements into meaningful progress and lifelong skills.",
                "Equip young learners to become independent thinkers and future creators in a digital world."
            ]
        },
        {
            id: 'role-of-ai',
            icon: <Lightbulb className="w-10 h-10 text-amber-500" />,
            title: "Role of AI",
            content: "We use AI to explain technology in simple, kid-friendly steps with clear examples.",
            aiPoints: [
                "AI creates personalized learning paths based on each child's level and pace.",
                "Interactive AI activities turn coding and computer concepts into fun hands-on practice.",
                "Smart feedback helps children correct mistakes quickly and understand concepts better.",
                "AI-powered examples connect real-world technology ideas to classroom learning.",
                "Safety-first AI guidance promotes responsible and ethical use of digital tools."
            ]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-sky-50 bg-blend-soft-light pb-24 pt-22">
            {/* Background decorations */}
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute left-0 top-0 -z-10 h-96 w-full bg-gradient-to-b from-cyan-100/70 via-indigo-100/50 to-transparent"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute left-10 top-10 h-72 w-72 rounded-full bg-sky-300 opacity-25 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                className="absolute right-20 top-20 h-72 w-72 rounded-full bg-violet-300 opacity-25 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 left-40 h-72 w-72 rounded-full bg-pink-300 opacity-25 blur-3xl"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-16 text-center md:mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-sky-800 shadow-[4px_4px_0_#38bdf8] sm:text-sm"
                    >
                        <Star className="h-4 w-4 fill-amber-400 text-amber-500" aria-hidden />
                        About KidsCodingAI.com
                        <Sparkles className="h-4 w-4 text-fuchsia-500" aria-hidden />
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="mb-7 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
                        <span className="inline-block bg-gradient-to-r from-blue-700 via-indigo-500 to-violet-500 bg-clip-text px-2 pb-2 text-transparent">
                            Vision, Mission & AI
                        </span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-slate-700 md:text-2xl">
                        Discover the values behind <span className="px-1 font-black text-slate-900">KIDS.TECHGURU.AI</span> and how we make learning technology fun, friendly, and meaningful for every child.
                    </motion.p>
                </motion.div>

                <div className="space-y-14 md:space-y-16">
                    {details.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            key={item.id}
                            id={item.id}
                            className={`flex flex-col items-center gap-8 md:flex-row md:gap-14 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon / Illustrative Side */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex w-full justify-center md:w-1/3"
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-200 to-violet-200 blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="relative flex items-center justify-center rounded-full border-4 border-white bg-white p-8 shadow-[6px_6px_0_rgba(59,130,246,0.2)] md:p-10">
                                        {React.cloneElement(item.icon, { className: 'w-16 h-16 md:w-20 md:h-20 text-slate-800' })}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <div className="group w-full rounded-3xl border-4 border-sky-200 bg-white/85 p-7 shadow-[8px_8px_0_rgba(56,189,248,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(56,189,248,0.24)] md:w-2/3 md:p-10">
                                <h3 className="mb-5 text-3xl font-extrabold text-gray-900 transition-colors group-hover:text-blue-700 md:text-4xl">
                                    {item.title}
                                </h3>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 64 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="mb-7 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400"
                                />
                                <p className="text-lg font-medium leading-relaxed text-gray-700 md:text-xl">
                                    {item.content}
                                </p>
                                {item.missionPoints && (
                                    <div className="mt-8">
                                        <h4 className="mb-4 text-xl font-black text-gray-900 md:text-2xl">Our Mission</h4>
                                        <ul className="space-y-3 text-base leading-relaxed text-gray-700 md:text-lg">
                                            {item.missionPoints.map((point) => (
                                                <li key={point} className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.aiPoints && (
                                    <div className="mt-8">
                                        <h4 className="mb-4 text-xl font-black text-gray-900 md:text-2xl">How This Website Uses AI</h4>
                                        <ul className="space-y-3 text-base leading-relaxed text-gray-700 md:text-lg">
                                            {item.aiPoints.map((point) => (
                                                <li key={point} className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;
