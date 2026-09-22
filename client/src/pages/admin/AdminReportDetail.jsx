import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { reportsApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

export default function AdminReportDetail() {
  const { id } = useParams();
  const { accessToken } = useAuth();
  const [attempt, setAttempt] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const res = await reportsApi.getAttempt(accessToken, id);
        if (!cancelled) setAttempt(res.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load attempt');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    if (accessToken && id) load();
    return () => {
      cancelled = true;
    };
  }, [accessToken, id]);

  if (loading) return <p className="text-slate-500">Loading attempt…</p>;
  if (error) {
    return (
      <div>
        <p className="font-semibold text-rose-700">{error}</p>
        <Link to="/admin/reports" className="mt-3 inline-flex text-sm font-bold text-cyan-700">
          Back to reports
        </Link>
      </div>
    );
  }

  const quiz = attempt?.quizId;
  const user = attempt?.userId;

  return (
    <div className="space-y-6">
      <Link
        to="/admin/reports"
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-cyan-700"
      >
        <ArrowLeft className="h-4 w-4" />
        All reports
      </Link>

      <div>
        <h2 className="text-2xl font-extrabold text-slate-900">{quiz?.title || 'Attempt'}</h2>
        <p className="mt-1 text-sm text-slate-600">
          {user?.name} · {user?.email} · Class {attempt.classLevel}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ['Score', `${attempt.score}/${attempt.maxScore}`],
          ['Percent', `${attempt.percent}%`],
          ['Result', attempt.passed ? 'Passed' : 'Failed'],
          ['Pending review', attempt.pendingReview || 0],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
            <p className="mt-1 text-xl font-extrabold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900">Answers</h3>
        {(attempt.answers || []).map((ans, i) => {
          const question = (quiz?.questions || []).find(
            (q) => String(q._id) === String(ans.questionId)
          );
          return (
            <div
              key={`${ans.questionId}-${i}`}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-2">
                {ans.autoGraded ? (
                  ans.isCorrect ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                  )
                ) : (
                  <span className="mt-0.5 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                    Review
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900">
                    Q{i + 1}. {question?.questionText || String(ans.questionId)}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Type: {question?.questionType || '—'} · Marks: {ans.marksAwarded}
                    {question?.marks != null ? `/${question.marks}` : ''}
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-2 text-xs text-slate-700">
                    {JSON.stringify(ans.answer, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
