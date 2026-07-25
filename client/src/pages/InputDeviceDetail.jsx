import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { mockDatabase } from '../data/mockCurriculum';
import KidTopicSidebar from '../components/topic/KidTopicSidebar';
import KidTopicLessonShell from '../components/topic/KidTopicLessonShell';
import {
    INPUT_DEVICE_DETAIL_BY_SLUG,
    INPUT_DEVICE_SLUG_LABEL,
} from '../components/topic/class2/input-devices/inputDeviceDetailRegistry';

const CLASS_ID = '2';

/** Kid-friendly hero copy per device slug */
const DEVICE_PAGE_FUN = {
    keyboard: {
        emoji: '⌨️',
        tagline: 'Tap, type, and learn—your keys are superpowers!',
        gradient: 'from-sky-500 via-indigo-500 to-violet-600',
    },
    mouse: {
        emoji: '🖱️',
        tagline: 'Point, click, and explore the screen like a detective!',
        gradient: 'from-amber-500 via-orange-500 to-rose-500',
    },
    touchpad: {
        emoji: '👆',
        tagline: 'Slide your finger—your laptop’s built-in magic pad!',
        gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    },
    microphone: {
        emoji: '🎤',
        tagline: 'Let your voice travel through the computer!',
        gradient: 'from-fuchsia-500 via-purple-500 to-indigo-600',
    },
    webcam: {
        emoji: '📷',
        tagline: 'Smile! Your camera shares your world safely.',
        gradient: 'from-violet-500 via-purple-500 to-pink-500',
    },
    scanner: {
        emoji: '🖼️',
        tagline: 'Turn paper into pictures the computer can keep!',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    },
    'joystick-gamepad': {
        emoji: '🎮',
        tagline: 'Buttons and sticks—game time with smart controls!',
        gradient: 'from-orange-500 via-red-500 to-rose-600',
    },
    'stylus-pen': {
        emoji: '✏️',
        tagline: 'Draw and write as neatly as on real paper!',
        gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    },
    'barcode-reader': {
        emoji: '📊',
        tagline: 'Beep! Stripes and squares become numbers in a flash!',
        gradient: 'from-lime-600 via-emerald-500 to-teal-600',
    },
};

/**
 * Standalone lesson page for Class 2 input devices (e.g. /class2/input-devices/keyboard).
 */
const InputDeviceDetail = () => {
    const { deviceSlug } = useParams();
    const classData = mockDatabase[CLASS_ID];
    const DetailComponent = deviceSlug ? INPUT_DEVICE_DETAIL_BY_SLUG[deviceSlug] : null;
    const title = deviceSlug ? INPUT_DEVICE_SLUG_LABEL[deviceSlug] : null;
    const fun = deviceSlug ? DEVICE_PAGE_FUN[deviceSlug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [deviceSlug]);

    if (!DetailComponent || !title) {
        return <Navigate to="/class2/computer-parts-1.html" replace />;
    }

    return (
        <KidTopicLessonShell
            classId={CLASS_ID}
            mainKey={deviceSlug}
            heroEmoji={fun?.emoji || '💻'}
            heroTitle={title}
            heroTagline={
                fun?.tagline || 'Learn how this device works and how people use it every day.'
            }
            heroGradient={fun?.gradient || 'from-indigo-500 to-violet-600'}
            heroBadge={
                <>
                    <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                    Class 2 · Input device
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
                        to="/class2/computer-parts-1.html"
                        className="rounded-lg px-2 py-1 text-indigo-600 transition hover:bg-indigo-50"
                    >
                        Parts of Computer-1
                    </Link>
                    <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-indigo-300" />
                    <span className="font-extrabold text-slate-900">{title}</span>
                </>
            }
            sidebar={
                <KidTopicSidebar
                    topics={classData.topics}
                    activeTopicId="computer-parts-1"
                    classId={CLASS_ID}
                    className={classData.className}
                />
            }
        >
            <DetailComponent deviceSlug={deviceSlug} />
            <div className="mt-12 rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-5 text-center md:p-6">
                <Link
                    to="/class2/computer-parts-1.html"
                    className="inline-flex items-center gap-2 text-lg font-extrabold text-indigo-700 underline decoration-4 decoration-indigo-300 underline-offset-4 transition hover:text-indigo-900"
                >
                    ← Back to Parts of Computer-1
                </Link>
            </div>
        </KidTopicLessonShell>
    );
};

export default InputDeviceDetail;
