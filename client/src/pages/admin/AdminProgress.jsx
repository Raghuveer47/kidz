import React, { useCallback, useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { progressApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

export default function AdminProgress() {
  const { accessToken } = useAuth();
  const [summary, setSummary] = useState(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [classLevel, setClassLevel] = useState('');
  const [search, setSearch] = useState('');
  const [searchApplied, setSearchApplied] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(
    async (pageNumber = 1) => {
      if (!accessToken) return;
      setLoading(true);
      setError('');
      try {
        const [sumRes, listRes] = await Promise.all([
          progressApi.summary(accessToken),
          progressApi.list(accessToken, {
            page: pageNumber,
            limit: 20,
            classLevel: classLevel || undefined,
            search: searchApplied || undefined,
          }),
        ]);
        setSummary(sumRes.data);
        setItems(listRes.data?.items || []);
        setPage(listRes.data?.page || 1);
        setTotalPages(listRes.data?.totalPages || 1);
      } catch (err) {
        setError(err.message || 'Failed to load progress');
      } finally {
        setLoading(false);
      }
    },
    [accessToken, classLevel, searchApplied]
  );

  useEffect(() => {
    load(1);
  }, [load]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Progress</h2>
          <p className="mt-1 text-sm text-slate-600">
            Best quiz scores per student (updated on each attempt).
          </p>
        </div>
        <button
          type="button"
          onClick={() => load(page)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ['Progress rows', summary?.totalRecords],
          ['Passed quizzes', summary?.passed],
          ['Students tracked', summary?.uniqueStudents],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">{loading ? '…' : value ?? 0}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <select
          value={classLevel}
          onChange={(e) => setClassLevel(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="">All classes</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              Class {n}
            </option>
          ))}
        </select>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setSearchApplied(search.trim());
          }}
          placeholder="Search student or quiz"
          className="min-w-[200px] flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={() => setSearchApplied(search.trim())}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white"
        >
          Search
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Student</th>
              <th className="px-4 py-3">Quiz</th>
              <th className="px-4 py-3">Best</th>
              <th className="px-4 py-3">Attempts</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last try</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  Loading…
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  No progress yet — students earn rows when they submit quizzes.
                </td>
              </tr>
            ) : (
              items.map((row) => (
                <tr key={row._id} className="border-t border-slate-100">
                  <td className="px-4 py-3">
                    <p className="font-semibold">{row.userId?.name || '—'}</p>
                    <p className="text-xs text-slate-500">{row.userId?.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{row.quizId?.title || '—'}</p>
                    <p className="text-xs text-slate-500">
                      Class {row.classLevel}
                      {row.topicSlug ? ` · ${row.topicSlug}` : ''}
                    </p>
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {row.bestScore}/{row.maxScore} ({row.bestPercent}%)
                  </td>
                  <td className="px-4 py-3">{row.attempts}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        row.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {row.passed ? 'Passed' : 'In progress'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    {row.lastAttemptAt ? new Date(row.lastAttemptAt).toLocaleString() : '—'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {totalPages > 1 ? (
          <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => load(page - 1)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-xs font-semibold text-slate-500">
              Page {page} / {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => load(page + 1)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
