import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, HeartHandshake, Shield } from 'lucide-react';
import { API_BASE } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

function StatCard({ label, value, icon: Icon, tone }) {
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ${tone}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">{value ?? '—'}</p>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { accessToken } = useAuth();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${API_BASE}/api/admin/stats`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error?.message || 'Failed to load stats');
        if (!cancelled) setStats(data.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load stats');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    if (accessToken) load();
    return () => {
      cancelled = true;
    };
  }, [accessToken]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900">Overview</h2>
        <p className="mt-1 text-sm text-slate-600">
          Users module is live. Curriculum outline CMS is live. Quizzes come next.
        </p>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total users"
          value={loading ? '…' : stats?.totalUsers}
          icon={Users}
          tone="border-slate-200"
        />
        <StatCard
          label="Students"
          value={loading ? '…' : stats?.students}
          icon={GraduationCap}
          tone="border-cyan-100"
        />
        <StatCard
          label="Parents"
          value={loading ? '…' : stats?.parents}
          icon={HeartHandshake}
          tone="border-amber-100"
        />
        <StatCard
          label="Admins"
          value={loading ? '…' : stats?.admins}
          icon={Shield}
          tone="border-violet-100"
        />
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-900">Coming next</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>
            <Link to="/admin/users" className="font-semibold text-cyan-700 hover:underline">
              Users
            </Link>{' '}
            — create, roles, ban/activate
          </li>
          <li>
            <Link to="/admin/curriculum" className="font-semibold text-cyan-700 hover:underline">
              Curriculum
            </Link>{' '}
            — Class 1–10 topic outline
          </li>
          <li>Quiz bank + attempts / reports</li>
        </ul>
      </div>
    </div>
  );
}
