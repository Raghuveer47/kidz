import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipboardList, Clock, LogIn, Sparkles } from 'lucide-react';
import { quizzesApi } from '../lib/api';
import { useAuth } from '../context/AuthContext';

export default function Quizzes() {
  const { accessToken, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [classLevel, setClassLevel] = useState(user?.classLevel ? String(user.classLevel) : '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    if (!accessToken) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await quizzesApi.list(accessToken, {
        limit: 50,
        classLevel: classLevel || undefined,
        publishedOnly: 'true',
      });
      setQuizzes(res.data?.items || []);
    } catch (err) {
      setError(err.message || 'Could not load quizzes');
      setQuizzes([]);
    } finally {
      setLoading(false);
    }
  }, [accessToken, classLevel]);

  useEffect(() => {
    load();
  }, [load]);

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
          <ClipboardList className="h-8 w-8" />
        </span>
        <h1 className="mt-5 text-3xl font-extrabold text-slate-900">Fun Quizzes</h1>
        <p className="mt-2 text-slate-600">
          Sign in to play quizzes for your class and see your score right away.
        </p>
        <Link
          to="/signin?next=/quizzes"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-violet-700"
        >
          <LogIn className="h-4 w-4" />
          Sign in to start
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Fun Quizzes</h1>
          <p className="mt-1 text-slate-600">Pick a quiz and test what you learned.</p>
        </div>
        <select
          value={classLevel}
          onChange={(e) => setClassLevel(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
        >
          <option value="">All classes</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              Class {n}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <p className="mt-10 text-center text-slate-500">Loading quizzes…</p>
      ) : quizzes.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
          <p className="mt-3 font-semibold text-slate-800">No quizzes here yet</p>
          <p className="mt-1 text-sm text-slate-500">
            New quizzes appear as soon as your teacher publishes them.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {quizzes.map((quiz) => (
            <button
              key={quiz._id}
              type="button"
              onClick={() => navigate(`/quizzes/${quiz._id}`)}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">
                  Class {quiz.classLevel}
                </span>
                {quiz.timeLimitMinutes ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    {quiz.timeLimitMinutes} min
                  </span>
                ) : null}
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-violet-700">
                {quiz.title}
              </h2>
              {quiz.description ? (
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{quiz.description}</p>
              ) : null}
              <p className="mt-3 text-xs font-semibold text-slate-500">
                {quiz.questionCount} questions · pass {quiz.passPercent}%
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
