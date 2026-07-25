import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Static class quiz — answers are not revealed until the learner subscribes.
 * Shows selection state only; correct/wrong highlighting and score breakdown require subscription.
 */
const StaticClassQuiz = ({ className, questions = [] }) => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const answeredCount = Object.keys(answers).length;
    const allAnswered = questions.length > 0 && answeredCount === questions.length;

    const onSelect = (qIdx, optionIdx) => {
        if (submitted) return;
        setAnswers((prev) => ({ ...prev, [qIdx]: optionIdx }));
    };

    const onSubmit = () => {
        if (!allAnswered) return;
        setSubmitted(true);
    };

    const onRetry = () => {
        setAnswers({});
        setSubmitted(false);
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 via-sky-50 to-cyan-50 p-5">
                <p className="text-sm font-bold text-indigo-800 md:text-base">
                    Quiz time for {className}! Answer all {questions.length} questions, then submit. Your choices are
                    saved—but to see which answers are correct and get your real score, subscribe below.
                </p>
            </div>

            <div className="space-y-4">
                {questions.map((q, qIdx) => (
                    <div key={qIdx} className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm">
                        <p className="mb-3 text-base font-extrabold text-slate-900 md:text-lg">
                            Q{qIdx + 1}. {q.question}
                        </p>
                        <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                                const isSelected = answers[qIdx] === optIdx;

                                return (
                                    <label
                                        key={optIdx}
                                        className={[
                                            'flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 transition',
                                            isSelected
                                                ? 'border-indigo-400 bg-indigo-50'
                                                : 'border-slate-200 bg-slate-50 hover:bg-slate-100',
                                            submitted ? 'cursor-default' : '',
                                        ].join(' ')}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${qIdx}`}
                                            checked={isSelected}
                                            onChange={() => onSelect(qIdx, optIdx)}
                                            disabled={submitted}
                                            className="h-4 w-4"
                                        />
                                        <span className="text-sm font-semibold text-slate-700 md:text-base">{opt}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {!submitted ? (
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onSubmit}
                        disabled={!allAnswered}
                        className={[
                            'rounded-full px-5 py-2.5 text-sm font-extrabold text-white transition md:text-base',
                            allAnswered ? 'bg-indigo-600 hover:bg-indigo-700' : 'cursor-not-allowed bg-slate-300',
                        ].join(' ')}
                    >
                        Submit Quiz
                    </button>
                    <span className="text-sm font-bold text-slate-600">
                        {answeredCount}/{questions.length} answered
                    </span>
                </div>
            ) : (
                <div className="relative space-y-4 overflow-hidden rounded-3xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 via-sky-50 to-cyan-50 p-5 shadow-[0_14px_30px_-14px_rgba(79,70,229,0.35)] md:p-6">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-300/30 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-cyan-300/40 blur-2xl" />

                    <div className="relative rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                                ✅
                            </span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                                🔒
                            </span>
                        </div>
                        <p className="text-lg font-extrabold text-amber-950 md:text-xl">
                            Quiz submitted! You answered all {questions.length} questions.
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-amber-900 md:text-base">
                            Correct answers are locked. Subscribe to see which choices were right, read short
                            explanations, and track your score over time.
                        </p>
                    </div>

                    <div className="relative rounded-2xl border-2 border-violet-300 bg-gradient-to-r from-violet-100 via-sky-100 to-cyan-100 p-4 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-base shadow-sm">
                                🚀
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-base shadow-sm">
                                🎯
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-base shadow-sm">
                                🏆
                            </span>
                        </div>
                        <p className="font-nunito text-sm font-extrabold leading-relaxed text-indigo-900 md:text-base">
                            To check correct answers and test your skills fully, go for a subscription. You will get
                            answer keys for class quizzes, more practice questions, level-based challenges, and guided
                            assessments so you can improve step by step and prepare for certifications with confidence.
                        </p>
                    </div>

                    <div className="relative flex flex-wrap items-center gap-3 pt-1">
                        <Link
                            to="/pricing"
                            className="inline-flex items-center gap-3 rounded-full border-2 border-blue-300 bg-gradient-to-r from-white to-blue-50 px-5 py-3 text-sm font-extrabold text-blue-700 shadow-[0_8px_16px_-10px_rgba(37,99,235,0.65)] transition hover:from-blue-50 hover:to-blue-100 md:text-base"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Subscribe to See Correct Answers
                        </Link>

                        <button
                            type="button"
                            onClick={onRetry}
                            className="rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100"
                        >
                            Retry Quiz
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaticClassQuiz;
