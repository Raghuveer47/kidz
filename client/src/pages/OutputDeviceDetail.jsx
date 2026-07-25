import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { mockDatabase } from '../data/mockCurriculum';
import KidTopicSidebar from '../components/topic/KidTopicSidebar';
import KidTopicLessonShell from '../components/topic/KidTopicLessonShell';
import {
    OUTPUT_DEVICE_DETAIL_BY_SLUG,
    OUTPUT_DEVICE_SLUG_LABEL,
} from '../components/topic/class3/output-devices/outputDeviceDetailRegistry';

const CLASS_ID = '3';
const TOPIC_ID = 'parts-of-computer-2';

const DEVICE_PAGE_FUN = {
    printer: {
        emoji: '🖨️',
        tagline: 'From screen to paper—your art becomes real!',
        gradient: 'from-violet-600 via-fuchsia-600 to-purple-700',
    },
    scanner: {
        emoji: '🖼️',
        tagline: 'Paper goes in, pictures show up on screen!',
        gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    },
    monitor: {
        emoji: '🖥️',
        tagline: 'Your personal display for clear, sharp learning.',
        gradient: 'from-sky-600 via-cyan-600 to-indigo-700',
    },
    projector: {
        emoji: '📽️',
        tagline: 'Project your lesson big so everyone can see.',
        gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    },
    'speakers-headphones': {
        emoji: '🔊',
        tagline: 'Fill the room—or keep the sound just for you!',
        gradient: 'from-rose-500 via-orange-500 to-amber-600',
    },
    'ear-buds': {
        emoji: '🎧',
        tagline: 'Tiny earbuds, private sound, safe listening habits!',
        gradient: 'from-amber-500 via-orange-500 to-rose-600',
    },
    microphone: {
        emoji: '🎧',
        tagline: 'Hear clearly, speak clearly—one headset, two jobs!',
        gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    },
};

/**
 * Class 3 — output device lesson pages (elaborate lessons + folder photos), same idea as Class 2 input devices.
 */
const OutputDeviceDetail = () => {
    const { deviceSlug } = useParams();
    const classData = mockDatabase[CLASS_ID];
    const DetailComponent = deviceSlug ? OUTPUT_DEVICE_DETAIL_BY_SLUG[deviceSlug] : null;
    const title = deviceSlug ? OUTPUT_DEVICE_SLUG_LABEL[deviceSlug] : null;
    const fun = deviceSlug ? DEVICE_PAGE_FUN[deviceSlug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [deviceSlug]);

    if (!DetailComponent || !title) {
        return <Navigate to="/class3/parts-of-computer-2.html" replace />;
    }

    return (
        <KidTopicLessonShell
            classId={CLASS_ID}
            mainKey={deviceSlug}
            heroEmoji={fun?.emoji || '💻'}
            heroTitle={title}
            heroTagline={fun?.tagline || 'Learn what this device does.'}
            heroGradient={fun?.gradient || 'from-slate-600 to-slate-800'}
            heroBadge={
                <>
                    <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                    Class 3 · Output device
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
                        to="/class3/parts-of-computer-2.html"
                        className="rounded-lg px-2 py-1 text-indigo-600 transition hover:bg-indigo-50"
                    >
                        Parts of Computer-2
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="font-extrabold text-slate-900">{title}</span>
                </>
            }
            sidebar={
                <KidTopicSidebar
                    topics={classData.topics}
                    activeTopicId={TOPIC_ID}
                    classId={CLASS_ID}
                    className={classData.className}
                />
            }
        >
            <DetailComponent deviceSlug={deviceSlug} />
            <div className="mt-12 rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-5 text-center md:p-6">
                <Link
                    to="/class3/parts-of-computer-2.html"
                    className="inline-flex items-center gap-2 text-lg font-extrabold text-slate-800 underline decoration-4 decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
                >
                    ← Back to Parts of Computer-2
                </Link>
            </div>
        </KidTopicLessonShell>
    );
};

export default OutputDeviceDetail;
