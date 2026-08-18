import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { quizzesApi } from '../lib/api';
import { useAuth } from '../context/AuthContext';

const CARD = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm';
const INPUT =
  'w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-400';

function shuffle(list) {
  const arr = [...(list || [])];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Admins get full quiz payloads; students get stripped fields. Normalize both. */
function toPlayableQuestion(q) {
  return {
    ...q,
    matchLeftItems: q.matchLeftItems || (q.matchPairs || []).map((p) => p.left),
    matchRightOptions: q.matchRightOptions || shuffle((q.matchPairs || []).map((p) => p.right)),
    reorderItems: q.reorderItems || shuffle(q.correctOrder || []),
    categoryNames: q.categoryNames || (q.categories || []).map((c) => c.name),
    categoryItems:
      q.categoryItems || shuffle((q.categories || []).flatMap((c) => c.items || [])),
    labelCount: q.labelCount ?? (q.correctAnswers || []).length,
    hotspotCount: q.hotspotCount ?? (q.hotspotRegions || []).length,
  };
}

/** Starting answer value for each question type. */
function initialAnswer(q) {
  switch (q.questionType) {
    case 'multiple_choice_multiple':
      return [];
    case 'fill_in_blank':
    case 'open_ended':
    case 'draw':
      return '';
    case 'labeling':
      return new Array(q.labelCount || 0).fill('');
    case 'match':
      return new Array((q.matchLeftItems || []).length).fill('');
    case 'reorder':
    case 'drag_drop':
      return [...(q.reorderItems || [])];
    case 'categorize':
      return {};
    case 'hotspot':
      return [];
    default:
      return null;
  }
}

function OptionList({ q, value, onChange, multi }) {
  return (
    <div className="space-y-2">
      {(q.options || []).map((opt, i) => {
        const picked = multi ? (value || []).includes(i) : value === i;
        return (
          <label
            key={i}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
              picked ? 'border-violet-400 bg-violet-50' : 'border-slate-200 hover:bg-slate-50'
            }`}
          >
            <input
              type={multi ? 'checkbox' : 'radio'}
              name={`q-${q._id}`}
              checked={picked}
              onChange={() => {
                if (!multi) return onChange(i);
                const set = new Set(value || []);
                if (set.has(i)) set.delete(i);
                else set.add(i);
                return onChange([...set].sort((a, b) => a - b));
              }}
            />
            {q.optionImages?.[i] ? (
              <img
                src={q.optionImages[i]}
                alt=""
                className="h-16 w-16 rounded-lg border border-slate-200 object-cover"
              />
            ) : null}
            <span className="text-sm font-medium text-slate-800">{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

function QuestionBody({ q, value, onChange }) {
  const type = q.questionType;

  if (['multiple_choice_single', 'true_false', 'passage', 'image_based', 'poll'].includes(type)) {
    return <OptionList q={q} value={value} onChange={onChange} multi={false} />;
  }

  if (type === 'multiple_choice_multiple') {
    return <OptionList q={q} value={value} onChange={onChange} multi />;
  }

  if (type === 'dropdown') {
    return (
      <select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value === '' ? null : Number(e.target.value))}
        className={INPUT}
      >
        <option value="">Choose an answer…</option>
        {(q.options || []).map((opt, i) => (
          <option key={i} value={i}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  if (type === 'fill_in_blank') {
    return (
      <input
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer"
        className={INPUT}
      />
    );
  }

  if (['open_ended', 'draw'].includes(type)) {
    return (
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder={type === 'draw' ? 'Describe or link your drawing' : 'Write your answer'}
        className={INPUT}
      />
    );
  }

  if (type === 'labeling') {
    return (
      <div className="space-y-2">
        {(value || []).map((label, i) => (
          <input
            key={i}
            value={label}
            onChange={(e) => {
              const next = [...value];
              next[i] = e.target.value;
              onChange(next);
            }}
            placeholder={`Label ${i + 1}`}
            className={INPUT}
          />
        ))}
      </div>
    );
  }

  if (type === 'match') {
    return (
      <div className="space-y-2">
        {(q.matchLeftItems || []).map((left, i) => (
          <div key={i} className="flex flex-wrap items-center gap-2">
            <span className="min-w-[120px] rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800">
              {left}
            </span>
            <select
              value={value?.[i] || ''}
              onChange={(e) => {
                const next = [...(value || [])];
                next[i] = e.target.value;
                onChange(next);
              }}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="">Choose…</option>
              {(q.matchRightOptions || []).map((right) => (
                <option key={right} value={right}>
                  {right}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  }

  if (['reorder', 'drag_drop'].includes(type)) {
    const move = (from, to) => {
      if (to < 0 || to >= value.length) return;
      const next = [...value];
      [next[from], next[to]] = [next[to], next[from]];
      onChange(next);
    };
    return (
      <ol className="space-y-2">
        {(value || []).map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              {i + 1}
            </span>
            <span className="flex-1 text-sm font-medium text-slate-800">{item}</span>
            <button
              type="button"
              onClick={() => move(i, i - 1)}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-bold"
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => move(i, i + 1)}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-bold"
            >
              ↓
            </button>
          </li>
        ))}
      </ol>
    );
  }

  if (type === 'categorize') {
    const placed = value || {};
    const findCategory = (item) =>
      Object.keys(placed).find((name) => (placed[name] || []).includes(item)) || '';
    return (
      <div className="space-y-2">
        {(q.categoryItems || []).map((item) => (
          <div key={item} className="flex flex-wrap items-center gap-2">
            <span className="min-w-[120px] rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800">
              {item}
            </span>
            <select
              value={findCategory(item)}
              onChange={(e) => {
                const next = {};
                (q.categoryNames || []).forEach((name) => {
                  next[name] = (placed[name] || []).filter((x) => x !== item);
                });
                if (e.target.value) next[e.target.value] = [...(next[e.target.value] || []), item];
                onChange(next);
              }}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="">Choose a group…</option>
              {(q.categoryNames || []).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'hotspot') {
    const clicks = value || [];
    return (
      <div>
        <p className="mb-2 text-xs font-semibold text-slate-500">
          Click on the picture ({clicks.length}/{q.hotspotCount || 1} marked)
        </p>
        <div className="relative inline-block">
          <img
            src={q.imageUrl}
            alt=""
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const point = {
                x: Math.round(((e.clientX - rect.left) / rect.width) * 100),
                y: Math.round(((e.clientY - rect.top) / rect.height) * 100),
              };
              const next = [...clicks, point].slice(-(q.hotspotCount || 1));
              onChange(next);
            }}
            className="max-h-72 cursor-crosshair rounded-xl border border-slate-200"
          />
          {clicks.map((c, i) => (
            <span
              key={i}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              className="absolute -ml-3 -mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white"
            >
              {i + 1}
            </span>
          ))}
        </div>
        {clicks.length ? (
          <button
            type="button"
            onClick={() => onChange([])}
            className="mt-2 block text-xs font-semibold text-violet-700 hover:underline"
          >
            Clear marks
          </button>
        ) : null}
      </div>
    );
  }

  return <p className="text-sm text-slate-500">This question type is not supported yet.</p>;
}

export default function QuizTake() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { accessToken, isLoggedIn } = useAuth();

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(null);

  const load = useCallback(async () => {
    if (!accessToken) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await quizzesApi.getById(accessToken, id);
      const data = res.data;
      data.questions = (data.questions || []).map(toPlayableQuestion);
      setQuiz(data);
      const start = {};
      (data.questions || []).forEach((q) => {
        start[q._id] = initialAnswer(q);
      });
      setAnswers(start);
      setResult(null);
      if (data.timeLimitMinutes > 0) setSecondsLeft(data.timeLimitMinutes * 60);
    } catch (err) {
      setError(err.message || 'Could not load this quiz');
    } finally {
      setLoading(false);
    }
  }, [accessToken, id]);

  useEffect(() => {
    load();
  }, [load]);

  const answeredCount = useMemo(() => {
    if (!quiz) return 0;
    return (quiz.questions || []).filter((q) => {
      const a = answers[q._id];
      if (a === null || a === undefined || a === '') return false;
      if (Array.isArray(a)) return a.some((v) => v !== '' && v !== null);
      if (typeof a === 'object') return Object.values(a).some((list) => list?.length);
      return true;
    }).length;
  }, [quiz, answers]);

  const submit = useCallback(
    async ({ auto = false } = {}) => {
      if (!quiz || submitting) return;
      const blank = quiz.questions.length - answeredCount;
      if (
        !auto &&
        blank > 0 &&
        !window.confirm(
          `You still have ${blank} question${blank > 1 ? 's' : ''} without an answer. Submit anyway?`
        )
      ) {
        return;
      }
      setSubmitting(true);
      setError('');
      try {
        const payload = (quiz.questions || []).map((q) => {
          const a = answers[q._id];
          if (a === null || a === undefined) return { questionId: q._id };
          return { questionId: q._id, answer: a };
        });
        const res = await quizzesApi.submitAttempt(accessToken, quiz._id, payload);
        setResult(res.data);
        setSecondsLeft(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        setError(err.message || 'Could not submit your answers');
      } finally {
        setSubmitting(false);
      }
    },
    [quiz, answers, accessToken, submitting, answeredCount]
  );

  useEffect(() => {
    if (secondsLeft === null || result) return undefined;
    if (secondsLeft <= 0) {
      submit({ auto: true });
      return undefined;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, result, submit]);

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-slate-700">Please sign in to take this quiz.</p>
        <Link
          to={`/signin?next=/quizzes/${id}`}
          className="mt-4 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white"
        >
          Sign in
        </Link>
      </div>
    );
  }

  if (loading) return <p className="py-16 text-center text-slate-500">Loading quiz…</p>;

  if (error && !quiz) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-semibold text-rose-700">{error}</p>
        <Link to="/quizzes" className="mt-4 inline-flex text-sm font-bold text-violet-700">
          Back to quizzes
        </Link>
      </div>
    );
  }

  if (result) {
    const cleared = result.passed;
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <span
          className={`inline-flex h-20 w-20 items-center justify-center rounded-full ${
            cleared ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}
        >
          {cleared ? <Trophy className="h-10 w-10" /> : <RotateCcw className="h-10 w-10" />}
        </span>
        <h1 className="mt-5 text-3xl font-extrabold text-slate-900">
          {cleared ? 'Great job!' : 'Good try!'}
        </h1>
        <p className="mt-2 text-slate-600">{quiz.title}</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ['Score', `${result.score}/${result.maxScore}`],
            ['Percent', `${result.percent}%`],
            ['Result', cleared ? 'Passed' : 'Try again'],
          ].map(([label, val]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
              <p className="mt-1 text-xl font-extrabold text-slate-900">{val}</p>
            </div>
          ))}
        </div>

        {result.pendingReview > 0 ? (
          <p className="mt-4 text-sm text-slate-600">
            {result.pendingReview} written answer{result.pendingReview > 1 ? 's' : ''} will be
            checked by your teacher.
          </p>
        ) : null}

        <div className="mt-6 space-y-2 text-left">
          {(quiz.questions || []).map((q, i) => {
            const graded = result.answers?.find((a) => String(a.questionId) === String(q._id));
            if (!graded?.autoGraded) return null;
            return (
              <div
                key={q._id}
                className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3"
              >
                {graded.isCorrect ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                )}
                <p className="text-sm text-slate-800">
                  <span className="font-bold">Q{i + 1}.</span> {q.questionText}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={load}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
          >
            Try again
          </button>
          <button
            type="button"
            onClick={() => navigate('/quizzes')}
            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white"
          >
            More quizzes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/quizzes"
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-violet-700"
      >
        <ArrowLeft className="h-4 w-4" />
        All quizzes
      </Link>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">{quiz.title}</h1>
          <p className="mt-1 text-sm text-slate-600">
            Class {quiz.classLevel} · {quiz.questions.length} questions · {quiz.totalMarks} marks
          </p>
        </div>
        {secondsLeft !== null ? (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${
              secondsLeft < 60 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Clock className="h-4 w-4" />
            {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:
            {String(secondsLeft % 60).padStart(2, '0')}
          </span>
        ) : null}
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-violet-600 transition-all"
          style={{ width: `${(answeredCount / quiz.questions.length) * 100}%` }}
        />
      </div>
      <p className="mt-1 text-xs font-semibold text-slate-500">
        {answeredCount} of {quiz.questions.length} answered
      </p>

      {error ? (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="mt-6 space-y-4">
        {quiz.questions.map((q, i) => (
          <div key={q._id} className={CARD}>
            <div className="flex items-start justify-between gap-3">
              <p className="font-bold text-slate-900">
                <span className="text-violet-700">Q{i + 1}.</span> {q.questionText}
              </p>
              <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                {q.marks} mark{q.marks > 1 ? 's' : ''}
              </span>
            </div>

            {q.passageText ? (
              <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-slate-700">
                {q.passageText}
              </p>
            ) : null}

            {q.imageUrl && q.questionType !== 'hotspot' ? (
              <img
                src={q.imageUrl}
                alt=""
                className="mt-3 max-h-56 rounded-xl border border-slate-200 object-contain"
              />
            ) : null}

            <div className="mt-4">
              <QuestionBody
                q={q}
                value={answers[q._id]}
                onChange={(val) => setAnswers((prev) => ({ ...prev, [q._id]: val }))}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => submit()}
        disabled={submitting}
        className="mt-6 w-full rounded-xl bg-violet-600 px-5 py-4 text-base font-bold text-white shadow-md transition hover:bg-violet-700 disabled:opacity-50"
      >
        {submitting ? 'Checking your answers…' : 'Submit answers'}
      </button>
    </div>
  );
}
