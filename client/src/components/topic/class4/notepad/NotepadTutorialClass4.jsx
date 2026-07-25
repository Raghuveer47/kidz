import React from 'react';
import { Link } from 'react-router-dom';
import {
    NOTEPAD_TUTORIAL_INTRO,
    NOTEPAD_TUTORIAL_STEPS,
} from '../../../../data/classes/class4NotepadContent';
import { NOTEPAD_IMAGES } from '../../../../data/classes/class4NotepadImages';
import { LessonBlock, LessonTip, LessonPointList } from '../../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from '../../shared/ImageBesideSection';

const LEVEL_STYLES = {
    Beginner: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    Intermediate: 'bg-sky-100 text-sky-900 border-sky-300',
    Advanced: 'bg-violet-100 text-violet-900 border-violet-300',
};

export default function NotepadTutorialClass4() {
    const stepsByLevel = ['Beginner', 'Intermediate', 'Advanced'].map((level) => ({
        level,
        steps: NOTEPAD_TUTORIAL_STEPS.filter((s) => s.level === level),
    }));

    let lessonCounter = 0;

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <section className="relative overflow-hidden rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-white via-rose-50/60 to-orange-50/50 p-6 shadow-md md:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-rose-300 bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-rose-900">
                    <span aria-hidden>📓</span>
                    {NOTEPAD_TUTORIAL_INTRO.title}
                </div>
                <div className="mt-4 overflow-hidden">
                    {NOTEPAD_IMAGES.hero ? (
                        <div className="mx-auto mb-4 w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-rose-200 bg-white shadow-inner lg:mb-0 lg:float-left lg:mr-8">
                            <img
                                src={NOTEPAD_IMAGES.hero}
                                alt="Student learning to write on a computer"
                                className="h-auto w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ) : null}
                    <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">
                        {NOTEPAD_TUTORIAL_INTRO.summary}
                    </p>
                </div>
                <div className="mt-6 clear-both grid gap-3 sm:grid-cols-3">
                    {NOTEPAD_TUTORIAL_INTRO.learningPath.map((path) => (
                        <div
                            key={path.level}
                            className="rounded-2xl border-2 border-rose-200 bg-white/90 p-4 shadow-sm"
                        >
                            <p className="text-lg font-extrabold text-rose-900">
                                <span aria-hidden>{path.emoji} </span>
                                {path.level}
                            </p>
                            <p className="mt-1 text-justify text-sm text-slate-700">{path.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm font-bold text-rose-800">
                    Practice:{' '}
                    <Link to="/class4/notepad-exercises.html" className="underline hover:text-rose-600">
                        Notepad Exercises
                    </Link>
                    {' · '}
                    <Link to="/class4/notepad-faq.html" className="underline hover:text-rose-600">
                        Notepad FAQ
                    </Link>
                </p>
            </section>

            {stepsByLevel.map(({ level, steps }) =>
                steps.length > 0 ? (
                    <div key={level} className="space-y-8">
                        <h2 className="flex flex-wrap items-center gap-2 text-lg font-extrabold text-rose-950 md:text-xl">
                            <span
                                className={`rounded-full border-2 px-3 py-1 text-sm uppercase tracking-wide ${LEVEL_STYLES[level] || LEVEL_STYLES.Beginner}`}
                            >
                                {level} level
                            </span>
                            <span className="text-slate-600">
                                {steps.length} lesson{steps.length > 1 ? 's' : ''}
                            </span>
                        </h2>

                        {steps.map((step) => {
                            lessonCounter += 1;
                            return (
                                <article
                                    key={step.id}
                                    className="rounded-3xl border-2 border-rose-200/90 bg-gradient-to-br from-white via-rose-50/40 to-fuchsia-50/30 p-4 shadow-md md:p-6"
                                >
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-extrabold uppercase tracking-wide text-rose-600">
                                            Lesson {lessonCounter} of {NOTEPAD_TUTORIAL_STEPS.length}
                                        </span>
                                        <span
                                            className={`rounded-full border px-2 py-0.5 text-xs font-bold ${LEVEL_STYLES[step.level] || ''}`}
                                        >
                                            {step.level}
                                        </span>
                                    </div>
                                    <h3 className="mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent md:text-2xl">
                                        {step.title}
                                    </h3>
                                    <ImageBesideSection
                                        section={{
                                            image: step.image,
                                            subtitle: step.title,
                                            body: step.lead,
                                            paragraphs: step.paragraphs,
                                            bullets: step.steps,
                                        }}
                                        imageMaxHeight="min(56vh,480px)"
                                        imageColumnWidth="min(100%,460px)"
                                        bulletsHeading="Practice steps"
                                        bulletMarkerClass="[&_ul]:marker:text-rose-500"
                                        belowContent={
                                            <LessonTip title={step.tipTitle} tone="violet">
                                                {step.tipBody}
                                            </LessonTip>
                                        }
                                    />
                                </article>
                            );
                        })}
                    </div>
                ) : null
            )}

            <LessonBlock id="tutorial-finish" title="You finished the tutorial path" emoji="🎉" tone="emerald">
                <p>
                    You now know Notepad from opening the app to advanced Find & Replace and file habits. Complete the
                    twelve exercises to prove your skills, and keep the FAQ open during lab time when something confusing
                    happens.
                </p>
                <LessonPointList
                    items={[
                        'Beginner: you can open Notepad and type a saved About Me card.',
                        'Intermediate: you use Ctrl+S, folders, and shortcuts confidently.',
                        'Advanced: you can Find/Replace, use Word Wrap, and explain .txt vs Word files.',
                    ]}
                    markerClass="text-emerald-700 bg-emerald-100"
                />
            </LessonBlock>
        </div>
    );
}
