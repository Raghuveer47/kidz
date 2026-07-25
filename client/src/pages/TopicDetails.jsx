import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockDatabase } from '../data/mockCurriculum';
import KidTopicSidebar from '../components/topic/KidTopicSidebar';
import KidTopicLessonShell from '../components/topic/KidTopicLessonShell';
import PartsOfComputerOne from '../components/topic/class2/parts-of-computer-1/PartsOfComputerOne';
import PartsOfComputerTwo from '../components/topic/class3/parts-of-computer-2/PartsOfComputerTwo';
import PartsOfComputerSeries from '../components/topic/shared/PartsOfComputerSeries';
import WindowsOsOneHub from '../components/topic/class3/windows-os-1/WindowsOsOneHub';
import WindowsOsOneLesson from '../components/topic/class3/windows-os-1/WindowsOsOneLesson';
import WindowsOsTwoHub from '../components/topic/class4/windows-os-2/WindowsOsTwoHub';
import WindowsOsTwoLesson from '../components/topic/class4/windows-os-2/WindowsOsTwoLesson';
import MsPaintOneHub from '../components/topic/class3/ms-paint-1/MsPaintOneHub';
import MsPaintOneLesson from '../components/topic/class3/ms-paint-1/MsPaintOneLesson';
import MsPaintTwoHub from '../components/topic/class4/ms-paint-2/MsPaintTwoHub';
import MsPaintTwoLesson from '../components/topic/class4/ms-paint-2/MsPaintTwoLesson';
import MsWordOneHub from '../components/topic/class4/ms-word-1/MsWordOneHub';
import MsWordOneLesson from '../components/topic/class4/ms-word-1/MsWordOneLesson';
import MsWordTwoHub from '../components/topic/class5/ms-word-2/MsWordTwoHub';
import MsWordTwoLesson from '../components/topic/class5/ms-word-2/MsWordTwoLesson';
import MsPaintThreeHub from '../components/topic/class5/ms-paint-3/MsPaintThreeHub';
import MsPaintThreeLesson from '../components/topic/class5/ms-paint-3/MsPaintThreeLesson';
import WindowsOsThreeHub from '../components/topic/class5/windows-os-3/WindowsOsThreeHub';
import WindowsOsThreeLesson from '../components/topic/class5/windows-os-3/WindowsOsThreeLesson';
import AiTwoHub from '../components/topic/class5/ai-2/AiTwoHub';
import AiTwoLesson from '../components/topic/class5/ai-2/AiTwoLesson';
import Class6TopicHub from '../components/topic/class6/shared/Class6TopicHub';
import Class6TopicLesson from '../components/topic/class6/shared/Class6TopicLesson';
import WhatIsAiHub from '../components/topic/class4/what-is-ai/WhatIsAiHub';
import WhatIsAiLesson from '../components/topic/class4/what-is-ai/WhatIsAiLesson';
import WhatIsAiSummary from '../components/topic/class4/what-is-ai/WhatIsAiSummary';
import GoodComputerHabitsClass3 from '../components/topic/class3/good-computer-habits/GoodComputerHabitsClass3';
import ScientificCalculatorLesson from '../components/topic/class3/calculator/ScientificCalculatorLesson';
import EthicsClass4 from '../components/topic/class4/ethics/EthicsClass4';
import HealthTipsClass4 from '../components/topic/class4/health-tips/HealthTipsClass4';
import NotepadTutorialClass4 from '../components/topic/class4/notepad/NotepadTutorialClass4';
import NotepadExercisesClass4 from '../components/topic/class4/notepad/NotepadExercisesClass4';
import NotepadFaqClass4 from '../components/topic/class4/notepad/NotepadFaqClass4';
import StaticClassQuiz from '../components/topic/StaticClassQuiz';
import ClassTopicSummary from '../components/topic/ClassTopicSummary';
import TopicImageSectionsList from '../components/topic/shared/TopicImageSectionsList';

/** Prev/next lesson buttons for Class 1 (same order as the sidebar). */
function ClassOneTopicNav({ topics, activeTopicId }) {
    const list = topics.filter((t) => !t.hideFromSidebar);
    const idx = list.findIndex((t) => t.id === activeTopicId);
    if (idx < 0) return null;
    const prev = idx > 0 ? list[idx - 1] : null;
    const next = idx < list.length - 1 ? list[idx + 1] : null;
    if (!prev && !next) return null;

    const basePath = '/class1';

    return (
        <nav
            className="mt-10 flex flex-col gap-4 border-t border-indigo-100 pt-8 sm:flex-row sm:items-stretch sm:justify-between"
            aria-label="Previous and next Class 1 topic"
        >
            <div className="flex min-h-[3.25rem] flex-1 justify-start">
                {prev ? (
                    <Link
                        to={`${basePath}/${prev.id}.html`}
                        className="inline-flex max-w-full items-center gap-2 rounded-xl border-2 border-indigo-200 bg-white px-4 py-3 text-left text-sm font-extrabold text-indigo-900 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50/90 active:scale-[0.98]"
                    >
                        <ChevronLeft className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden />
                        <span className="min-w-0">
                            <span className="block text-[0.65rem] font-bold uppercase tracking-wide text-indigo-600">
                                Previous topic
                            </span>
                            <span className="block leading-snug sm:text-sm">{prev.title}</span>
                        </span>
                    </Link>
                ) : (
                    <span className="hidden min-h-0 sm:block sm:w-14" aria-hidden />
                )}
            </div>
            <div className="flex min-h-[3.25rem] flex-1 justify-end">
                {next ? (
                    <Link
                        to={`${basePath}/${next.id}.html`}
                        className="inline-flex max-w-full items-center gap-2 rounded-xl border-2 border-indigo-400 bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 text-right text-sm font-extrabold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                        <span className="min-w-0">
                            <span className="block text-[0.65rem] font-bold uppercase tracking-wide text-white/90">
                                Next topic
                            </span>
                            <span className="block leading-snug sm:text-sm">{next.title}</span>
                        </span>
                        <ChevronRight className="h-5 w-5 shrink-0" aria-hidden />
                    </Link>
                ) : null}
            </div>
        </nav>
    );
}

const TopicDetails = () => {
    const { classId, classSlug, topicId, topicIdHtml } = useParams();
    const location = useLocation();
    const resolvedClassSource = classId || classSlug || '1';
    const normalizedClassId = resolvedClassSource.replace(/^class/i, '') || '1';
    const normalizedTopicId = topicId || (topicIdHtml ? topicIdHtml.replace(/\.html$/i, '') : '');
    const [activeTopic, setActiveTopic] = useState(normalizedTopicId);

    // Ensure page scrolls to top on init
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [normalizedClassId, normalizedTopicId]);

    // Update active topic if URL changes
    useEffect(() => {
        setActiveTopic(normalizedTopicId);
    }, [normalizedTopicId]);

    useEffect(() => {
        const raw = location.hash?.replace(/^#/, '');
        if (!raw) return;
        requestAnimationFrame(() => {
            document.getElementById(raw)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }, [location.hash, normalizedTopicId]);

    const classData = mockDatabase[normalizedClassId] || mockDatabase['1'];
    const currentTopicData = classData.topics.find(t => t.id === activeTopic) || classData.topics[0];
    const numericClassId = Number.parseInt(normalizedClassId, 10);
    const nextClassData = Number.isNaN(numericClassId) ? null : mockDatabase[String(numericClassId + 1)];
    const nextClassFirstTopicId = nextClassData?.topics?.[0]?.id;
    const nextClassPath = nextClassFirstTopicId
        ? `/class${numericClassId + 1}/${nextClassFirstTopicId}.html`
        : null;
    const nextClassLabel = nextClassData?.className || (Number.isNaN(numericClassId) ? null : `Class ${numericClassId + 1}`);

    return (
        <KidTopicLessonShell
            classId={normalizedClassId}
            mainKey={activeTopic}
            heroTitle={currentTopicData.content.heading}
            heroTitleClassName={
                currentTopicData.content.headingSingleLine
                    ? 'whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-[1.75rem]'
                    : undefined
            }
            heroTagline={currentTopicData.content.text}
            heroBadge={`${classData.className} · Topic lesson`}
            breadcrumb={
                <>
                    <Link to="/" className="rounded-lg px-2 py-1 text-indigo-600 transition hover:bg-indigo-50">
                        Home
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="rounded-lg bg-violet-100 px-2 py-1 text-violet-900">{classData.className}</span>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="font-extrabold text-slate-900">{currentTopicData.title}</span>
                </>
            }
            sidebar={
                <KidTopicSidebar
                    topics={classData.topics}
                    activeTopicId={activeTopic}
                    classId={normalizedClassId}
                    className={classData.className}
                />
            }
        >
                        {/* Content Sections */}
                        {normalizedClassId === '1' && currentTopicData.id === 'computer-alphabets-1' ? (
                            // Puzzle / blocks style overlay cards for Class 1 - Alphabets Set 1
                            <div className="space-y-8">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, margin: "-80px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.04 }
                                        }
                                    }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                                >
                                    {currentTopicData.content.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 24, scale: 0.96 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: { duration: 0.45, ease: "easeOut" }
                                                }
                                            }}
                                            whileHover={{ y: -6, rotate: idx % 2 === 0 ? 1.5 : -1.5, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl"
                                        >
                                            <div className="flex h-56 items-center justify-center bg-sky-900/90 p-4 sm:h-64 lg:h-72">
                                                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/95 shadow-inner">
                                                    <img
                                                        src={section.image}
                                                        alt={section.subtitle}
                                                        className="h-full w-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="border-t border-cyan-300/35 bg-gradient-to-r from-[#1b1f4b] via-[#1e3a8a] to-[#0f766e] px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                                                <h3 className="text-base font-extrabold leading-snug text-[#F2F527] drop-shadow-[0_1px_2px_rgba(15,23,42,0.7)] sm:text-lg">
                                                    {section.subtitle}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                            </div>
                        ) : normalizedClassId === '1' && currentTopicData.id === 'computer-alphabets-2' ? (
                            // Icon-style alphabet cards for Class 1 - Alphabets Set 2 (static grid, hover-only animation)
                            <div className="space-y-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentTopicData.content.sections.map((section, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col rounded-3xl shadow-md border border-gray-100 bg-white overflow-hidden transition-all duration-300 min-h-[15rem] hover:shadow-xl hover:-translate-y-1"
                                        >
                                            {/* Top colored icon area */}
                                            <div className="bg-blue-500 flex flex-col items-center justify-center px-6 pt-8 pb-6">
                                                <div className="w-20 h-20 sm:w-40 sm:h-32 mb-3 rounded-2xl bg-white/95 shadow-md flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={section.image}
                                                        alt={section.subtitle}
                                                        className="w-14 h-14 sm:w-40 sm:h-36 object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="text-white text-3xl sm:text-4xl font-extrabold drop-shadow-sm leading-none">
                                                    {idx + 1 <= 26 ? String.fromCharCode(65 + idx) : '?'}
                                                </div>
                                            </div>

                                            {/* Bottom title area */}
                                            <div className="bg-white px-6 py-4 text-center flex items-center justify-center">
                                                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                                                    {section.subtitle}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                            </div>
                        ) : normalizedClassId === '1' && currentTopicData.id === 'computer-alphabets-3' ? (
                            // Aligned grid layout for Class 1 - Alphabets Set 3 (same alignment as Set 1)
                            <div className="space-y-8">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, margin: "-80px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.04 }
                                        }
                                    }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                                >
                                    {currentTopicData.content.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 24, scale: 0.96 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: { duration: 0.45, ease: "easeOut" }
                                                }
                                            }}
                                            whileHover={{ y: -6, rotate: idx % 2 === 0 ? 1.5 : -1.5, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl"
                                        >
                                            <div className="flex h-56 items-center justify-center bg-sky-900/90 p-4 sm:h-64 lg:h-72">
                                                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/95 shadow-inner">
                                                    <img
                                                        src={section.image}
                                                        alt={section.subtitle}
                                                        className="h-full w-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="border-t border-cyan-300/35 bg-gradient-to-r from-[#1b1f4b] via-[#1e3a8a] to-[#0f766e] px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                                                <h3 className="text-base font-extrabold leading-snug text-[#F2F527] drop-shadow-[0_1px_2px_rgba(15,23,42,0.7)] sm:text-lg">
                                                    {section.subtitle}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                            </div>
                        ) : normalizedClassId === '2' && currentTopicData.id === 'computer-parts-1' ? (
                            <PartsOfComputerOne
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '3' && currentTopicData.id === 'parts-of-computer-2' ? (
                            <PartsOfComputerTwo
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : (normalizedClassId === '4' && currentTopicData.id === 'parts-of-computer-3') ||
                          (normalizedClassId === '5' && currentTopicData.id === 'parts-of-computer-4') ||
                          (normalizedClassId === '6' && currentTopicData.id === 'parts-of-computer-5') ? (
                            <PartsOfComputerSeries topic={currentTopicData} />
                        ) : normalizedClassId === '3' && currentTopicData.id === 'windows-os-1' ? (
                            <WindowsOsOneHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'windows-os-2' ? (
                            <WindowsOsTwoHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '3' && currentTopicData.id === 'windows-os-1-overview' ? (
                            <div className="space-y-8 font-nunito">
                                <div className="rounded-3xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                                    <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                                        This page is your practical map of daily Windows use. Read each block, then try
                                        the same action on a practice file in the lab.
                                    </p>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                        {[
                                            'Open File Explorer with Win + E',
                                            'Use clear file names and folders',
                                            'Safely eject USB drives every time',
                                        ].map((tip) => (
                                            <div
                                                key={tip}
                                                className="rounded-2xl border border-indigo-200 bg-white/90 p-3 text-justify text-sm font-bold text-indigo-900"
                                            >
                                                {tip}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <TopicImageSectionsList
                                    sections={currentTopicData.content.sections || []}
                                    variant="slate"
                                    className="space-y-6"
                                />
                            </div>
                        ) : normalizedClassId === '3' && currentTopicData.id === 'good-computer-habits' ? (
                            <GoodComputerHabitsClass3 />
                        ) : normalizedClassId === '3' && currentTopicData.id === 'calculator' ? (
                            <ScientificCalculatorLesson />
                        ) : normalizedClassId === '3' && currentTopicData.id === 'ms-paint-1' ? (
                            <MsPaintOneHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'ms-paint-2' ? (
                            <MsPaintTwoHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'ms-word-1' ? (
                            <MsWordOneHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '5' && currentTopicData.id === 'ms-word-2' ? (
                            <MsWordTwoHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '5' && currentTopicData.id === 'ms-paint-3' ? (
                            <MsPaintThreeHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '5' && currentTopicData.id === 'windows-os-3' ? (
                            <WindowsOsThreeHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'what-is-ai' ? (
                            <WhatIsAiHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'ethics' ? (
                            <EthicsClass4 />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'health-tips' ? (
                            <HealthTipsClass4 />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'notepad-tutorial' ? (
                            <NotepadTutorialClass4 />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'notepad-exercises' ? (
                            <NotepadExercisesClass4 />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'notepad-faq' ? (
                            <NotepadFaqClass4 />
                        ) : (normalizedClassId === '1' && currentTopicData.id === 'computer-images-1') ||
                          (normalizedClassId === '2' && currentTopicData.id === 'computer-images-2') ? (
                            <div className="space-y-7">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center rounded-full border-2 border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-indigo-700 shadow-sm">
                                        Picture Explorer
                                    </span>
                                    <span className="inline-flex items-center rounded-full border-2 border-amber-300 bg-amber-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-700 shadow-sm">
                                        Learn by seeing 👀
                                    </span>
                                </div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, margin: "-80px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
                                    }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                >
                                    {currentTopicData.content.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 20, scale: 0.97 },
                                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } }
                                            }}
                                            whileHover={{ y: -9, rotate: idx % 2 === 0 ? -1.2 : 1.2, scale: 1.01 }}
                                            className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-[0_12px_26px_-14px_rgba(15,23,42,0.35)]"
                                        >
                                            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-200/50 blur-2xl" />
                                            <div className="pointer-events-none absolute -left-8 bottom-6 h-16 w-16 rounded-full bg-fuchsia-200/40 blur-2xl" />
                                            {section.image && (
                                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                                    <img
                                                        src={section.image}
                                                        alt={section.subtitle}
                                                        className="w-full h-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                                                </div>
                                            )}
                                            <div className="relative flex flex-grow flex-col p-5">
                                                <h3 className="mb-2 text-lg font-black text-slate-900 leading-snug">
                                                    {section.subtitle}
                                                </h3>
                                                <p className="text-[0.95rem] leading-relaxed text-slate-700 font-semibold">
                                                    {section.body}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                {normalizedClassId === '1' ? (
                                    <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                                ) : null}
                            </div>
                        ) : normalizedClassId === '2' && currentTopicData.id === 'uses-of-computer' ? (
                            <TopicImageSectionsList
                                sections={currentTopicData.content.sections}
                                variant="slate"
                                className="space-y-6"
                            />
                        ) : normalizedClassId === '2' && currentTopicData.id === 'start-shutdown' ? (
                            <div className="space-y-7">
                                <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 to-cyan-50 p-4">
                                    <p className="text-sm md:text-base font-bold text-indigo-800">
                                        🌟 Tip for kids: Always <span className="underline">save your work first</span>, then use the menu to shut down.
                                    </p>
                                </div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, margin: "-80px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                                    }}
                                    className="grid grid-cols-1 gap-7 lg:grid-cols-2"
                                >
                                    {currentTopicData.content.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 18, scale: 0.98 },
                                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } }
                                            }}
                                            whileHover={{ y: -6, rotate: idx % 2 === 0 ? -1 : 1 }}
                                            className="group overflow-hidden rounded-3xl border-4 border-indigo-200 bg-gradient-to-br from-white via-sky-50 to-violet-50 shadow-[0_14px_28px_-14px_rgba(79,70,229,0.35)]"
                                        >
                                            <div className=" w-full bg-white p-3 md:p-4">
                                                <img
                                                    src={section.image}
                                                    alt={section.subtitle}
                                                    className="h-full w-full object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-4 md:p-5">
                                                <h3 className="text-lg font-extrabold text-indigo-900 md:text-xl">
                                                    {section.subtitle}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ) : (normalizedClassId === '3' || normalizedClassId === '5' || normalizedClassId === '6' || normalizedClassId === '7') &&
                          currentTopicData.id === 'class-summary' ? (
                            <ClassTopicSummary
                                className={classData.className}
                                classId={normalizedClassId}
                                content={currentTopicData.content}
                                nextClassPath={nextClassPath}
                                nextClassLabel={nextClassLabel}
                            />
                        ) : (normalizedClassId === '1' || normalizedClassId === '2') &&
                          currentTopicData.id === 'class-summary' ? (
                            <div className="space-y-6 font-nunito">
                                <div className="relative overflow-hidden rounded-[1.35rem] border-4 border-indigo-200 bg-gradient-to-br from-indigo-100/95 via-white to-cyan-50 p-5 shadow-[6px_6px_0_rgba(99,102,241,0.12)] md:p-6">
                                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
                                    <div className="pointer-events-none absolute -bottom-8 left-8 h-20 w-20 rounded-full bg-violet-300/25 blur-2xl" />
                                    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                        <span
                                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-amber-300 to-orange-400 text-2xl shadow-md"
                                            aria-hidden
                                        >
                                            🎒
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="flex flex-wrap items-center gap-2 text-lg font-black text-indigo-950 md:text-xl">
                                                <Sparkles className="h-5 w-5 text-amber-500" aria-hidden />
                                                Your learning map
                                            </p>
                                            <p className="mt-1 text-justify text-sm font-bold leading-relaxed text-indigo-800/95 md:text-base">
                                                Each colorful row is one topic from {classData.className}. The second column tells you the
                                                superpower you practice—read it like a checklist before you move on!
                                            </p>
                                        </div>
                                        <div className="hidden shrink-0 rounded-2xl border-2 border-dashed border-indigo-300/80 bg-white/70 px-4 py-3 text-center sm:block">
                                            <BookOpen className="mx-auto h-8 w-8 text-indigo-500" aria-hidden />
                                            <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-indigo-600">
                                                Read &amp; cheer
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-[1.25rem] border-4 border-slate-200/90 bg-white shadow-[0_14px_40px_-18px_rgba(15,23,42,0.25)]">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-separate border-spacing-0 text-left">
                                            <caption className="sr-only">
                                                Summary of topics and learning outcomes for {classData.className}
                                            </caption>
                                            <thead>
                                                <tr className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 text-white shadow-inner">
                                                    <th
                                                        scope="col"
                                                        className="rounded-tl-2xl px-4 py-4 text-xs font-black uppercase tracking-[0.12em] sm:px-5 sm:text-sm md:px-6"
                                                    >
                                                        <span className="inline-flex items-center gap-2">
                                                            <span aria-hidden>📚</span>
                                                            Topic we studied
                                                        </span>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="rounded-tr-2xl px-4 py-4 text-xs font-black uppercase tracking-[0.12em] sm:px-5 sm:text-sm md:px-6"
                                                    >
                                                        <span className="inline-flex items-center gap-2">
                                                            <span aria-hidden>✨</span>
                                                            What you get good at
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="font-nunito">
                                                {(currentTopicData.content.summaryRows || []).map((row, idx) => {
                                                    const rowEmojis = ['🔤', '🧩', '🌐', '🖼️', '🏆', '💡', '🎯'];
                                                    const mark = rowEmojis[idx % rowEmojis.length];
                                                    const stripe = idx % 2 === 0 ? 'bg-sky-50/90' : 'bg-violet-50/40';
                                                    return (
                                                        <motion.tr
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true, margin: '-20px' }}
                                                            transition={{ duration: 0.35, delay: Math.min(idx * 0.06, 0.36) }}
                                                            className={[
                                                                stripe,
                                                                'border-t border-indigo-100/80 align-top transition-colors hover:bg-amber-50/50',
                                                                idx === (currentTopicData.content.summaryRows || []).length - 1
                                                                    ? 'last:border-b-0'
                                                                    : '',
                                                            ].join(' ')}
                                                        >
                                                            <td
                                                                className={[
                                                                    'max-w-[min(100%,14rem)] border-l-4 border-indigo-500 px-4 py-4 sm:max-w-[18rem] sm:px-5 md:px-6',
                                                                    idx === (currentTopicData.content.summaryRows || []).length - 1
                                                                        ? 'rounded-bl-2xl'
                                                                        : '',
                                                                ].join(' ')}
                                                            >
                                                                <span className="inline-flex items-start gap-2.5">
                                                                    <span
                                                                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-indigo-200 bg-white text-lg shadow-sm"
                                                                        aria-hidden
                                                                    >
                                                                        {mark}
                                                                    </span>
                                                                    <span className="text-sm font-extrabold leading-snug text-slate-900 sm:text-base">
                                                                        {row.topic}
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td
                                                                className={[
                                                                    'px-4 py-4 text-justify text-sm font-semibold leading-relaxed text-slate-700 sm:px-5 sm:text-base md:px-6 md:leading-loose',
                                                                    idx === (currentTopicData.content.summaryRows || []).length - 1
                                                                        ? 'rounded-br-2xl'
                                                                        : '',
                                                                ].join(' ')}
                                                            >
                                                                <span className="inline-flex items-start gap-2">
                                                                    <span
                                                                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500"
                                                                        aria-hidden
                                                                    />
                                                                    <span className="text-justify">{row.outcome}</span>
                                                                </span>
                                                            </td>
                                                        </motion.tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="border-t border-indigo-100/80 bg-gradient-to-r from-indigo-50/80 to-cyan-50/60 px-4 py-3 text-justify text-xs font-bold text-indigo-800 sm:text-sm">
                                        Tip: Ask a grown-up to read one row with you and tick the ideas you already know!
                                    </p>
                                </div>
                                {normalizedClassId === '1' ? (
                                    <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                                ) : null}
                                {nextClassPath ? (
                                    <div className="pt-1">
                                        <Link
                                            to={nextClassPath}
                                            className="inline-flex items-center gap-2 rounded-xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm md:text-base font-extrabold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                                        >
                                            {`Go to ${nextClassLabel}`}
                                            <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                ) : null}
                            </div>
                        ) : (normalizedClassId === '1' ||
                              normalizedClassId === '2' ||
                              normalizedClassId === '3' ||
                              normalizedClassId === '5' ||
                              normalizedClassId === '6' ||
                              normalizedClassId === '7') &&
                          currentTopicData.id === 'class-quiz' ? (
                            <div className="space-y-8">
                                <StaticClassQuiz
                                    className={classData.className}
                                    questions={currentTopicData.content.quizQuestions || []}
                                />
                                {normalizedClassId === '1' ? (
                                    <ClassOneTopicNav topics={classData.topics} activeTopicId={activeTopic} />
                                ) : null}
                            </div>
                        ) : normalizedClassId === '3' &&
                          currentTopicData.id.startsWith('ms-paint-1-') &&
                          currentTopicData.id !== 'ms-paint-1' ? (
                            <MsPaintOneLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '4' &&
                          currentTopicData.id.startsWith('ms-paint-2-') &&
                          currentTopicData.id !== 'ms-paint-2' ? (
                            <MsPaintTwoLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '4' &&
                          currentTopicData.id.startsWith('ms-word-1-') &&
                          currentTopicData.id !== 'ms-word-1' ? (
                            <MsWordOneLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '5' &&
                          currentTopicData.id.startsWith('ms-word-2-') &&
                          currentTopicData.id !== 'ms-word-2' ? (
                            <MsWordTwoLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '5' &&
                          currentTopicData.id.startsWith('ms-paint-3-') &&
                          currentTopicData.id !== 'ms-paint-3' ? (
                            <MsPaintThreeLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '5' &&
                          currentTopicData.id.startsWith('windows-os-3-') &&
                          currentTopicData.id !== 'windows-os-3' ? (
                            <WindowsOsThreeLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '5' && currentTopicData.id === 'ai-2' ? (
                            <AiTwoHub content={currentTopicData.content} classId={normalizedClassId} />
                        ) : normalizedClassId === '5' &&
                          currentTopicData.id.startsWith('ai-2-') &&
                          currentTopicData.id !== 'ai-2' ? (
                            <AiTwoLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'windows-os-4' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="teal"
                                hubId="windows-os-4"
                                hubSidebarTitle="WINDOWS OS-4"
                                badgeLabel="Windows & Files"
                            />
                        ) : normalizedClassId === '6' &&
                          currentTopicData.id.startsWith('windows-os-4-') &&
                          currentTopicData.id !== 'windows-os-4' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="teal"
                                hubId="windows-os-4"
                                hubLabel="WINDOWS OS-4"
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'typing-skills-4' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="slate"
                                hubId="typing-skills-4"
                                hubSidebarTitle="TYPING SKILLS-4"
                                badgeLabel="Keyboard Skills"
                            />
                        ) : normalizedClassId === '6' &&
                          currentTopicData.id.startsWith('typing-skills-4-') &&
                          currentTopicData.id !== 'typing-skills-4' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="slate"
                                hubId="typing-skills-4"
                                hubLabel="TYPING SKILLS-4"
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'ms-word-3' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="indigo"
                                hubId="ms-word-3"
                                hubSidebarTitle="MS WORD-3"
                                badgeLabel="Word Skills"
                            />
                        ) : normalizedClassId === '6' &&
                          currentTopicData.id.startsWith('ms-word-3-') &&
                          currentTopicData.id !== 'ms-word-3' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="indigo"
                                hubId="ms-word-3"
                                hubLabel="MS WORD-3"
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'ms-ppt-1' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="ms-ppt-1"
                                hubSidebarTitle="MS PPT-1"
                                badgeLabel="Presentations"
                            />
                        ) : normalizedClassId === '6' &&
                          currentTopicData.id.startsWith('ms-ppt-1-') &&
                          currentTopicData.id !== 'ms-ppt-1' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="ms-ppt-1"
                                hubLabel="MS PPT-1"
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'algorithms' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="emerald"
                                showBackLink={false}
                            />
                        ) : normalizedClassId === '6' && currentTopicData.id === 'ai-3' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="violet"
                                hubId="ai-3"
                                hubSidebarTitle="AI-3"
                                badgeLabel="AI Adventures"
                            />
                        ) : normalizedClassId === '6' &&
                          currentTopicData.id.startsWith('ai-3-') &&
                          currentTopicData.id !== 'ai-3' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="violet"
                                hubId="ai-3"
                                hubLabel="AI-3"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'command-prompt' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="slate"
                                showBackLink={false}
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'ms-word-4' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="blue"
                                hubId="ms-word-4"
                                hubSidebarTitle="MS WORD-4"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('ms-word-4-') &&
                          currentTopicData.id !== 'ms-word-4' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="blue"
                                hubId="ms-word-4"
                                hubLabel="MS WORD-4"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'ppt-2' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="ppt-2"
                                hubSidebarTitle="PPT-2"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('ppt-2-') &&
                          currentTopicData.id !== 'ppt-2' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="ppt-2"
                                hubLabel="PPT-2"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'flowcharts' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="emerald"
                                showBackLink={false}
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'python-1' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="amber"
                                hubId="python-1"
                                hubSidebarTitle="PYTHON-1"
                                badgeLabel="Code Adventures"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('python-1-') &&
                          currentTopicData.id !== 'python-1' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="amber"
                                hubId="python-1"
                                hubLabel="PYTHON-1"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'internet-1' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="cyan"
                                hubId="internet-1"
                                hubSidebarTitle="INTERNET-1"
                                badgeLabel="Connected World"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('internet-1-') &&
                          currentTopicData.id !== 'internet-1' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="cyan"
                                hubId="internet-1"
                                hubLabel="INTERNET-1"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'html-1' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="html-1"
                                hubSidebarTitle="HTML-1"
                                badgeLabel="Web Builder"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('html-1-') &&
                          currentTopicData.id !== 'html-1' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="orange"
                                hubId="html-1"
                                hubLabel="HTML-1"
                            />
                        ) : normalizedClassId === '7' && currentTopicData.id === 'ai-4' ? (
                            <Class6TopicHub
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="rose"
                                hubId="ai-4"
                                hubSidebarTitle="AI-4"
                                badgeLabel="AI Lab"
                            />
                        ) : normalizedClassId === '7' &&
                          currentTopicData.id.startsWith('ai-4-') &&
                          currentTopicData.id !== 'ai-4' ? (
                            <Class6TopicLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                theme="rose"
                                hubId="ai-4"
                                hubLabel="AI-4"
                            />
                        ) : normalizedClassId === '3' &&
                          currentTopicData.id.startsWith('windows-os-1-') &&
                          currentTopicData.id !== 'windows-os-1' ? (
                            <WindowsOsOneLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                                showBackLink={currentTopicData.id !== 'windows-os-1-history'}
                            />
                        ) : normalizedClassId === '4' &&
                          currentTopicData.id.startsWith('windows-os-2-') &&
                          currentTopicData.id !== 'windows-os-2' ? (
                            <WindowsOsTwoLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'what-is-ai-summary' ? (
                            <WhatIsAiSummary
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : normalizedClassId === '4' && currentTopicData.id === 'what-is-ai-test' ? (
                            <div className="space-y-8 font-nunito">
                                <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-violet-50 p-4 shadow-sm">
                                    <Link
                                        to={`/class${normalizedClassId}/what-is-ai.html`}
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-purple-900 transition hover:text-purple-700 md:text-base"
                                    >
                                        <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                                        Back to WHAT IS AI overview
                                    </Link>
                                </div>
                                <StaticClassQuiz
                                    className="WHAT IS AI"
                                    questions={currentTopicData.content.quizQuestions || []}
                                />
                            </div>
                        ) : normalizedClassId === '4' &&
                          currentTopicData.id.startsWith('what-is-ai-') &&
                          currentTopicData.id !== 'what-is-ai' &&
                          currentTopicData.id !== 'what-is-ai-summary' &&
                          currentTopicData.id !== 'what-is-ai-test' ? (
                            <WhatIsAiLesson
                                content={currentTopicData.content}
                                classId={normalizedClassId}
                            />
                        ) : (
                            <TopicImageSectionsList sections={currentTopicData.content.sections} />
                        )}

        </KidTopicLessonShell>
    );
};

export default TopicDetails;
