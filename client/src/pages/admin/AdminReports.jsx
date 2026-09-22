import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Trash2, Eye } from 'lucide-react';
import { reportsApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

export default function AdminReports() {
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
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(
    async (pageNumber = 1) => {
      if (!accessToken) return;
      setLoading(true);
      setError('');
      try {
        const [sumRes, listRes] = await Promise.all([
          reportsApi.summary(accessToken),
          reportsApi.listAttempts(accessToken, {
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
        setError(err.message || 'Failed to load reports');
      } finally {
        setLoading(false);
      }
    },
    [accessToken, classLevel, searchApplied]
  );

  useEffect(() => {
    load(1);
  }, [load]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this attempt?')) return;
    setBusyId(id);
    try {
      await reportsApi.removeAttempt(accessToken, id);
      await load(page);
    } catch (err) {
      setError(err.message || 'Failed to delete');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Reports</h2>
          <p className="mt-1 text-sm text-slate-600">Quiz attempts, scores, and pending review.</p>
        </div>
        <button
          type="button"
          onClick={() => load(page)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
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

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ['Attempts', summary?.totalAttempts],
          ['Passed', summary?.passed],
          ['Pending review', summary?.pendingReview],
          ['Avg %', summary?.averagePercent],
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
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Result</th>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3" />
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
                  No attempts yet.
                </td>
              </tr>
            ) : (
              items.map((row) => (
                <tr key={row._id} className="border-t border-slate-100">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900">{row.userId?.name || '—'}</p>
                    <p className="text-xs text-slate-500">{row.userId?.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800">{row.quizId?.title || '—'}</p>
                    <p className="text-xs text-slate-500">Class {row.classLevel ?? row.quizId?.classLevel}</p>
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {row.score}/{row.maxScore} ({row.percent}%)
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        row.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {row.passed ? 'Passed' : 'Failed'}
                    </span>
                    {row.pendingReview > 0 ? (
                      <span className="ml-1 text-xs text-slate-500">· {row.pendingReview} review</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    {row.createdAt ? new Date(row.createdAt).toLocaleString() : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <Link
                        to={`/admin/reports/${row._id}`}
                        className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        disabled={busyId === row._id}
                        onClick={() => handleDelete(row._id)}
                        className="rounded-lg border border-rose-200 p-2 text-rose-600 hover:bg-rose-50 disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
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
