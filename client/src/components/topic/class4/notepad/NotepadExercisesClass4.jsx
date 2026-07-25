import React from 'react';
import { Link } from 'react-router-dom';
import {
    NOTEPAD_EXERCISES,
    NOTEPAD_EXERCISES_INTRO,
} from '../../../../data/classes/class4NotepadContent';
import { NOTEPAD_IMAGES } from '../../../../data/classes/class4NotepadImages';
import { LessonBlock, LessonPointList } from '../../class2/input-devices/inputDevicesLessonUi';

const LEVEL_STYLES = {
    'Warm-up': 'bg-emerald-100 text-emerald-900 border-emerald-300',
    Builder: 'bg-sky-100 text-sky-900 border-sky-300',
    Challenger: 'bg-violet-100 text-violet-900 border-violet-300',
};

export default function NotepadExercisesClass4() {
    const exercisesByLevel = ['Warm-up', 'Builder', 'Challenger'].map((level) => ({
        level,
        exercises: NOTEPAD_EXERCISES.filter((ex) => ex.level === level),
    }));

    let exCounter = 0;

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <LessonBlock id="notepad-exercises-intro" title={NOTEPAD_EXERCISES_INTRO.title} emoji="🎯" tone="rose">
                <p>{NOTEPAD_EXERCISES_INTRO.summary}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {NOTEPAD_EXERCISES_INTRO.levels.map((lv) => (
                        <div key={lv.name} className="rounded-xl border border-rose-200 bg-white/80 p-3">
                            <p className="font-extrabold text-rose-900">
                                {lv.name} (Ex. {lv.range})
                            </p>
                            <p className="mt-1 text-sm text-slate-700">{lv.focus}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-sm font-bold text-rose-800">
                    Read the{' '}
                    <Link to="/class4/notepad-tutorial.html" className="underline hover:text-rose-600">
                        Notepad Tutorial
                    </Link>{' '}
                    first if any step feels new.
                </p>
            </LessonBlock>

            {NOTEPAD_IMAGES.exerciseList ? (
                <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-rose-200 shadow-md">
                    <img
                        src={NOTEPAD_IMAGES.exerciseList}
                        alt="Student practicing typing exercises"
                        className="h-auto w-full object-cover"
                        loading="lazy"
                    />
                </div>
            ) : null}

            {exercisesByLevel.map(({ level, exercises }) =>
                exercises.length > 0 ? (
                    <div key={level} className="space-y-6">
                        <h2 className="flex flex-wrap items-center gap-2 text-lg font-extrabold text-rose-950">
                            <span
                                className={`rounded-full border-2 px-3 py-1 text-sm uppercase ${LEVEL_STYLES[level] || ''}`}
                            >
                                {level}
                            </span>
                        </h2>

                        {exercises.map((ex) => {
                            exCounter += 1;
                            return (
                                <article
                                    key={ex.id}
                                    className="rounded-3xl border-2 border-rose-200/90 bg-gradient-to-br from-white via-rose-50/50 to-amber-50/30 p-5 shadow-md md:p-6"
                                >
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <span className="text-2xl" aria-hidden>
                                            {ex.emoji}
                                        </span>
                                        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-800">
                                            Exercise {exCounter} · ~{ex.timeMinutes} min
                                        </span>
                                        <span
                                            className={`rounded-full border px-2 py-0.5 text-xs font-bold ${LEVEL_STYLES[ex.level] || ''}`}
                                        >
                                            {ex.level}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-extrabold text-rose-950 md:text-xl">{ex.title}</h3>
                                    <p className="mt-2 text-justify text-base font-semibold text-slate-700">{ex.goal}</p>

                                    <div className="mt-4">
                                        <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-rose-700">
                                            Your tasks
                                        </p>
                                        <LessonPointList items={ex.tasks} markerClass="text-rose-600 bg-rose-100" />
                                    </div>

                                    {ex.hints?.length > 0 ? (
                                        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/90 p-4">
                                            <p className="text-sm font-extrabold text-amber-900">Hints</p>
                                            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-justify text-sm text-amber-950 md:text-base">
                                                {ex.hints.map((hint, i) => (
                                                    <li key={i}>{hint}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}

                                    {ex.sampleOutput ? (
                                        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                            <p className="text-sm font-extrabold text-slate-800">Sample output</p>
                                            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap font-mono text-sm text-slate-700">
                                                {ex.sampleOutput}
                                            </pre>
                                        </div>
                                    ) : null}

                                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                                        <p className="text-sm font-extrabold text-emerald-900">Teacher check</p>
                                        <p className="mt-1 text-justify text-sm text-emerald-800 md:text-base">
                                            {ex.check}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : null
            )}
        </div>
    );
}
