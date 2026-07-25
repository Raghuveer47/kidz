import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { mockDatabase } from '../data/mockCurriculum';
import KidTopicSidebar from '../components/topic/KidTopicSidebar';
import KidTopicLessonShell from '../components/topic/KidTopicLessonShell';
import {
    LessonBlock,
    BulletList,
    TroubleList,
    LessonTip,
} from '../components/topic/class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../components/topic/shared/ImageBesideSection';

const PARTS_TOPIC_BY_CLASS = {
    '4': 'parts-of-computer-3',
    '5': 'parts-of-computer-4',
    '6': 'parts-of-computer-5',
};

const HERO_META = {
    '4': { emoji: '💾', badge: 'Class 4 · Memory & storage', gradient: 'from-indigo-600 via-sky-600 to-cyan-700' },
    '5': { emoji: '🧩', badge: 'Class 5 · Core hardware', gradient: 'from-violet-600 via-fuchsia-600 to-purple-700' },
    '6': { emoji: '🌐', badge: 'Class 6 · Networking parts', gradient: 'from-emerald-600 via-teal-600 to-cyan-700' },
};

const CLASS_TONE = { '4': 'sky', '5': 'indigo', '6': 'emerald' };

const LESSON_DETAILS = {
    ram: {
        emoji: '🧠',
        what: ['RAM is temporary memory where active work stays while the computer is ON.', 'It helps apps open faster and makes multitasking smoother.'],
        how: ['When you open a program, needed data is copied from storage into RAM.', 'CPU reads and updates that data quickly while you work.', 'After shutdown, RAM data is cleared.'],
        uses: ['Running browser tabs, games, and coding tools smoothly.', 'Switching between apps without long waiting.'],
    },
    rom: {
        emoji: '📘',
        what: ['ROM stores startup instructions that help a computer boot safely.', 'It keeps data even when power is OFF.'],
        how: ['When power starts, ROM gives first instructions to the system.', 'Then the operating system loading process begins.'],
        uses: ['Safe startup every day.', 'Storing fixed firmware information.'],
    },
    'hard-disk-drive': {
        emoji: '🗄️',
        what: ['HDD is long-term storage for files, photos, videos, and software.', 'It remembers data even after shutdown.'],
        how: ['Inside HDD, spinning disks and read/write heads store data magnetically.', 'The computer fetches data from HDD when needed.'],
        uses: ['Saving homework folders and class projects.', 'Keeping old files for future use.'],
    },
    'open-flash-drive': {
        emoji: '🔬',
        what: ['This shows internal parts of a flash drive: memory chip and tiny circuits.', 'Small components work together to store digital files.'],
        how: ['The memory chip saves data in electronic cells.', 'The USB connector helps transfer files between devices.'],
        uses: ['Understanding hardware internals in a simple way.', 'Learning that even small devices have complex parts.'],
    },
    'flash-drive': {
        emoji: '🧳',
        what: ['A flash drive is portable storage used to carry files.', 'It is small, light, and easy to plug into USB ports.'],
        how: ['You copy files from computer to drive, then paste on another system.', 'Safe eject is needed before removing it.'],
        uses: ['Carrying school notes between home and class.', 'Quick backup of important files.'],
    },
    'memory-cards': {
        emoji: '🧩',
        what: ['Memory cards are tiny storage chips used in phones, cameras, and tablets.', 'They store photos, videos, and app data.'],
        how: ['Device writes data to the card through contacts (pins).', 'Card can be removed and read in another compatible device.'],
        uses: ['Expanding storage in mobile devices.', 'Moving media files quickly.'],
    },
    'external-ssd': {
        emoji: '⚡',
        what: ['External SSD is fast outside storage connected by cable.', 'It is usually faster and more shock-safe than old HDDs.'],
        how: ['It uses flash memory chips to read/write data quickly.', 'USB cable sends power and data together.'],
        uses: ['Fast backup of videos and project folders.', 'Moving large files in less time.'],
    },
    'computer-cabinet': {
        emoji: '🧱',
        what: ['Cabinet is the outer case that protects computer internals.', 'It keeps parts fixed, safe, and cooled with airflow.'],
        how: ['It holds motherboard, PSU, drives, and fans in proper positions.', 'Vent holes and fans help heat leave the system.'],
        uses: ['Protecting delicate parts from dust and accidental touch.', 'Keeping computer organized for maintenance.'],
    },
    cpu: {
        emoji: '🧠',
        what: ['CPU is the main processing brain of the computer.', 'It follows instructions from programs and operating system.'],
        how: ['CPU executes tiny instruction steps very fast (millions per second).', 'It works with RAM and storage to complete tasks.'],
        uses: ['Opening apps, solving calculations, running games.', 'Managing overall computer operations.'],
    },
    gpu: {
        emoji: '🎮',
        what: ['GPU is specialized for graphics and visual calculations.', 'It draws images, animation frames, and video output.'],
        how: ['GPU processes many visual tasks in parallel.', 'It helps CPU by taking heavy graphics workload.'],
        uses: ['Smooth games and video playback.', 'Better rendering in design/3D tools.'],
    },
    motherboard: {
        emoji: '🛣️',
        what: ['Motherboard is the main circuit board connecting all components.', 'It is the communication highway of the computer.'],
        how: ['CPU, RAM, storage, and ports connect to motherboard slots.', 'Data travels through board pathways to the right part.'],
        uses: ['Enables all components to work as one system.', 'Supports upgrades like RAM/storage additions.'],
    },
    'power-supply': {
        emoji: '🔋',
        what: ['PSU converts wall electricity into safe power for components.', 'Different parts get different required voltages.'],
        how: ['AC power enters PSU, then PSU converts to DC output lines.', 'Cables deliver power to motherboard, drives, and GPU.'],
        uses: ['Running the whole computer safely.', 'Protecting components from unstable power.'],
    },
    'laptop-ports': {
        emoji: '🔌',
        what: ['Ports are connection slots for devices and cables.', 'Each port type is made for specific data/power jobs.'],
        how: ['USB transfers data and can supply power.', 'HDMI sends video/audio to external screens.'],
        uses: ['Connecting pen drives, projectors, headphones, chargers.', 'Sharing files and displays in class.'],
    },
    nic: {
        emoji: '📡',
        what: ['NIC lets a computer connect to network/internet.', 'It can be wired Ethernet or wireless Wi-Fi.'],
        how: ['NIC sends and receives data packets through network medium.', 'It gives the device a network identity for communication.'],
        uses: ['Internet access for research and classes.', 'File sharing in lab networks.'],
    },
    router: {
        emoji: '🌐',
        what: ['Router shares internet to many devices.', 'It directs packets to correct device paths.'],
        how: ['Router receives data from ISP and forwards it locally.', 'It uses routing tables and Wi-Fi broadcasting.'],
        uses: ['Home/school internet sharing.', 'Basic network security with passwords.'],
    },
    switch: {
        emoji: '🛜',
        what: ['Switch connects devices in one local network.', 'It sends data only to intended destination device.'],
        how: ['Switch learns device addresses and maps them to ports.', 'Then it forwards packets efficiently.'],
        uses: ['Computer lab networking.', 'Fast file transfer inside local network.'],
    },
    hub: {
        emoji: '📢',
        what: ['Hub also connects multiple devices but is less smart.', 'It sends incoming data to all ports.'],
        how: ['Hub broadcasts packets without checking destination.', 'This creates extra traffic on busy networks.'],
        uses: ['Simple/basic networks.', 'Learning difference between old and new network devices.'],
    },
};

export default function PartsComputerDetail({ fixedClassId }) {
    const { classId, deviceSlug } = useParams();
    const normalizedClassId = (fixedClassId || classId || '').replace(/^class/i, '');
    const topicId = PARTS_TOPIC_BY_CLASS[normalizedClassId];
    const classData = mockDatabase[normalizedClassId];
    const topic = classData?.topics?.find((t) => t.id === topicId);
    const section = topic?.content?.sections?.find((s) => s.slug === deviceSlug);
    const child = topic?.children?.find((c) => c.slug === deviceSlug);
    const meta = HERO_META[normalizedClassId];
    const lesson = LESSON_DETAILS[deviceSlug] || {};
    const tone = CLASS_TONE[normalizedClassId] || 'sky';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [normalizedClassId, deviceSlug]);

    if (!classData || !topic || !section || !child) {
        const fallback = topicId ? `/class${normalizedClassId}/${topicId}.html` : '/';
        return <Navigate to={fallback} replace />;
    }

    return (
        <KidTopicLessonShell
            classId={normalizedClassId}
            mainKey={deviceSlug}
            heroEmoji={meta?.emoji || '💻'}
            heroTitle={child.label}
            heroTagline={lesson.what?.[0] || section.body}
            heroGradient={meta?.gradient || 'from-slate-600 to-slate-800'}
            heroBadge={
                <>
                    <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                    {meta?.badge || `${classData.className} · Parts lesson`}
                </>
            }
            breadcrumb={
                <>
                    <Link to="/" className="rounded-lg px-2 py-1 text-indigo-600 transition hover:bg-indigo-50">
                        Home
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="rounded-lg bg-violet-100 px-2 py-1 text-violet-900">{classData.className}</span>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <Link
                        to={`/class${normalizedClassId}/${topic.id}.html`}
                        className="rounded-lg px-2 py-1 text-indigo-600 transition hover:bg-indigo-50"
                    >
                        {topic.title}
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="font-extrabold text-slate-900">{child.label}</span>
                </>
            }
            sidebar={
                <KidTopicSidebar
                    topics={classData.topics}
                    activeTopicId={topic.id}
                    classId={normalizedClassId}
                    className={classData.className}
                />
            }
        >
            <div className="space-y-8 font-nunito md:space-y-10">
                <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-5 shadow-md md:p-7">
                    <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                        <strong className="text-indigo-900">{section.subtitle}</strong> is an important computer part.
                        Learn it step by step: what it is, how it works, where we use it, and how to stay safe while
                        using computer hardware.
                    </p>
                </div>

                <LessonBlock id="what-is-this-part" title="What is this part?" emoji={lesson.emoji || '💡'} tone={tone}>
                    <BulletList items={lesson.what || [section.body]} />
                </LessonBlock>

                <LessonBlock id="see-real-part" title="See the real device" emoji="📸" tone="indigo">
                    <ImageBesideSection
                        section={{
                            image: section.image,
                            subtitle: section.subtitle,
                            body: section.body,
                        }}
                        imageMaxHeight="min(56vh,480px)"
                        imageColumnWidth="min(100%,460px)"
                        bulletMarkerClass="[&_ul]:marker:text-indigo-600"
                        wrapClassName="p-0"
                    />
                    <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                        Try to identify this device in your school lab or at home. Real-life spotting helps you
                        remember names faster than memorizing only definitions.
                    </p>
                </LessonBlock>

                <LessonBlock id="how-it-works" title="How does it work?" emoji="⚙️" tone="sky">
                    <BulletList
                        items={
                            lesson.how || [
                                'This part works together with other components inside or outside the computer.',
                                'When software gives instructions, hardware parts respond and complete the task.',
                                'Good maintenance and correct usage keep hardware reliable for longer time.',
                            ]
                        }
                    />
                </LessonBlock>

                <LessonBlock id="where-used" title="Where do we use it?" emoji="🏫" tone="emerald">
                    <BulletList
                        items={
                            lesson.uses || [
                                'In school for labs, digital learning, and projects.',
                                'At home for study, internet use, and creativity.',
                                'In offices and businesses for faster daily work.',
                            ]
                        }
                    />
                </LessonBlock>

                <LessonBlock id="safety-tips" title="Safety and smart habits" emoji="✋" tone="rose">
                    <BulletList
                        items={[
                            'Handle ports, cables, and hardware gently; never force any plug.',
                            'Always ask a teacher/parent before opening or changing internal parts.',
                            'Save files often and keep a backup for important school work.',
                            'Keep food and water away from computer devices.',
                        ]}
                    />
                    <LessonTip title="Kid Pro Tip" tone="violet">
                        <p>
                            Learn device names and jobs together: if you know <strong>what</strong> a part does, you
                            can solve basic computer problems faster.
                        </p>
                    </LessonTip>
                </LessonBlock>

                <LessonBlock id="troubleshooting" title="If something goes wrong" emoji="🛠️" tone="indigo">
                    <TroubleList
                        rows={[
                            {
                                problem: `${section.subtitle} not working as expected.`,
                                fixes: [
                                    'Check cable/connection/port first.',
                                    'Restart the computer and test again.',
                                    'Check if the correct settings or device mode is selected.',
                                ],
                            },
                            {
                                problem: `Computer becomes slow while using ${child.label}.`,
                                fixes: [
                                    'Close extra apps and retry.',
                                    'Check available storage and clean unnecessary files.',
                                    'Ask teacher/parent to verify hardware health.',
                                ],
                            },
                        ]}
                    />
                </LessonBlock>

                <div className="rounded-2xl border-2 border-slate-200 bg-slate-50/60 p-5 text-center md:p-6">
                    <Link
                        to={`/class${normalizedClassId}/${topic.id}.html`}
                        className="inline-flex items-center gap-2 text-lg font-extrabold text-slate-800 underline decoration-4 decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
                    >
                        {`← Back to ${topic.title}`}
                    </Link>
                </div>
            </div>
        </KidTopicLessonShell>
    );
}
