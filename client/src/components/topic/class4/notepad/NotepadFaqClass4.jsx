import React from 'react';
import { Link } from 'react-router-dom';
import { NOTEPAD_FAQ_CATEGORIES } from '../../../../data/classes/class4NotepadContent';
import { NOTEPAD_IMAGES } from '../../../../data/classes/class4NotepadImages';
import { LessonBlock, LessonPointList } from '../../class2/input-devices/inputDevicesLessonUi';

export default function NotepadFaqClass4() {
    const totalQuestions = NOTEPAD_FAQ_CATEGORIES.reduce((n, cat) => n + cat.items.length, 0);

    return (
        <div className="space-y-8 font-nunito md:space-y-10">
            <LessonBlock id="notepad-faq-intro" title="Notepad FAQ — answers for Class 4" emoji="❓" tone="rose">
                <p>
                    {totalQuestions} detailed answers grouped by topic. Tap any question to expand. Read from top to bottom
                    the first time, or jump to a section when you are stuck in the lab.
                </p>
                <LessonPointList
                    items={NOTEPAD_FAQ_CATEGORIES.map((c) => `${c.title} (${c.items.length} questions)`)}
                    markerClass="text-rose-600 bg-rose-100"
                />
                <p className="mt-4 text-sm font-bold text-rose-800">
                    <Link to="/class4/notepad-tutorial.html" className="underline hover:text-rose-600">
                        Tutorial
                    </Link>
                    {' · '}
                    <Link to="/class4/notepad-exercises.html" className="underline hover:text-rose-600">
                        Exercises
                    </Link>
                </p>
            </LessonBlock>

            {NOTEPAD_IMAGES.faqHelp ? (
                <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border-2 border-rose-200 shadow-md">
                    <img
                        src={NOTEPAD_IMAGES.faqHelp}
                        alt="Student getting help with computer questions"
                        className="h-auto w-full object-cover"
                        loading="lazy"
                    />
                </div>
            ) : null}

            {NOTEPAD_FAQ_CATEGORIES.map((category) => (
                <section key={category.id} className="space-y-3">
                    <h2 className="border-b-2 border-dashed border-rose-200 pb-2 text-lg font-extrabold text-rose-950 md:text-xl">
                        {category.title}
                    </h2>
                    {category.items.map((item) => (
                        <details
                            key={item.id}
                            className="group rounded-2xl border-2 border-rose-200/90 bg-white shadow-sm open:bg-rose-50/40"
                        >
                            <summary className="cursor-pointer list-none px-4 py-4 text-base font-extrabold text-rose-950 marker:content-none md:px-5 md:text-lg [&::-webkit-details-marker]:hidden">
                                <span className="flex items-start justify-between gap-3">
                                    <span>{item.question}</span>
                                    <span
                                        className="shrink-0 text-rose-500 transition group-open:rotate-180"
                                        aria-hidden
                                    >
                                        ▼
                                    </span>
                                </span>
                            </summary>
                            <div className="space-y-3 border-t border-rose-100 px-4 pb-4 pt-3 text-justify text-base leading-relaxed text-slate-700 md:px-5 md:text-lg">
                                {item.answer.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </details>
                    ))}
                </section>
            ))}
        </div>
    );
}
