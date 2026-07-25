import React, { useCallback, useEffect, useState } from 'react';
import { Plus, RefreshCw, Search, Trash2, Ban, CheckCircle2, X } from 'lucide-react';
import { usersApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const PAGE_SIZE = 20;

const ROLE_OPTIONS = [
  { value: '', label: 'All roles' },
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' },
  { value: 'subscriber', label: 'Subscriber' },
  { value: 'content_admin', label: 'Content admin' },
  { value: 'super_admin', label: 'Super admin' },
];

const STATUS_OPTIONS = [
  { value: '', label: 'All status' },
  { value: 'active', label: 'Active' },
  { value: 'banned', label: 'Banned' },
];

const CREATE_ROLES = ['student', 'parent', 'subscriber', 'content_admin', 'super_admin'];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  password: '',
  roles: ['student'],
  classLevel: '',
  status: 'active',
};

function RoleBadge({ role }) {
  const tones = {
    super_admin: 'bg-violet-100 text-violet-800',
    content_admin: 'bg-sky-100 text-sky-800',
    parent: 'bg-amber-100 text-amber-800',
    subscriber: 'bg-emerald-100 text-emerald-800',
    student: 'bg-slate-100 text-slate-700',
  };
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${tones[role] || tones.student}`}>
      {role.replace('_', ' ')}
    </span>
  );
}

function StatusBadge({ status }) {
  const active = status === 'active';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
        active ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
      }`}
    >
      {active ? <CheckCircle2 className="h-3 w-3" /> : <Ban className="h-3 w-3" />}
      {active ? 'Active' : 'Banned'}
    </span>
  );
}

export default function AdminUsers() {
  const { accessToken } = useAuth();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [searchApplied, setSearchApplied] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  const loadUsers = useCallback(
    async (pageNumber = 1) => {
      if (!accessToken) return;
      setLoading(true);
      setError('');
      try {
        const res = await usersApi.list(accessToken, {
          page: pageNumber,
          limit: PAGE_SIZE,
          search: searchApplied || undefined,
          role: role || undefined,
          status: status || undefined,
        });
        const data = res.data || {};
        setUsers(Array.isArray(data.items) ? data.items : []);
        setPage(data.page || pageNumber);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total ?? 0);
      } catch (err) {
        setError(err.message || 'Failed to load users');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    },
    [accessToken, searchApplied, role, status]
  );

  useEffect(() => {
    loadUsers(1);
  }, [loadUsers]);

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchApplied(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(id);
  }, [search]);

  const handleToggleStatus = async (user) => {
    const next = user.status === 'active' ? 'banned' : 'active';
    setBusyId(user._id);
    try {
      await usersApi.update(accessToken, user._id, { status: next });
      await loadUsers(page);
    } catch (err) {
      setError(err.message || 'Failed to update status');
    } finally {
      setBusyId(null);
    }
  };

  const handleRoleChange = async (user, nextRole) => {
    setBusyId(user._id);
    try {
      await usersApi.update(accessToken, user._id, { roles: [nextRole] });
      await loadUsers(page);
    } catch (err) {
      setError(err.message || 'Failed to update role');
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (user) => {
    if (!window.confirm(`Delete ${user.name || user.email}? This cannot be undone.`)) return;
    setBusyId(user._id);
    try {
      await usersApi.remove(accessToken, user._id);
      await loadUsers(page === 1 ? 1 : Math.min(page, totalPages));
    } catch (err) {
      setError(err.message || 'Failed to delete user');
    } finally {
      setBusyId(null);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormError('');
    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        roles: form.roles,
        status: form.status,
      };
      if (form.phone.trim()) payload.phone = form.phone.trim();
      if (form.classLevel !== '') payload.classLevel = Number(form.classLevel);

      await usersApi.create(accessToken, payload);
      setShowCreate(false);
      setForm(emptyForm);
      await loadUsers(1);
    } catch (err) {
      setFormError(err.message || 'Failed to create user');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Users</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage students, parents, and admins. {total ? `${total} total` : null}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => loadUsers(page)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            type="button"
            onClick={() => {
              setForm(emptyForm);
              setFormError('');
              setShowCreate(true);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add user
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone…"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-cyan-400 focus:bg-white"
          />
        </div>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
        >
          {ROLE_OPTIONS.map((opt) => (
            <option key={opt.value || 'all'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value || 'all-status'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    Loading users…
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => {
                  const primaryRole = user.roles?.[0] || 'student';
                  const busy = busyId === user._id;
                  return (
                    <tr key={user._id} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                        {user.phone ? <p className="text-xs text-slate-400">{user.phone}</p> : null}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {(user.roles || []).map((r) => (
                            <RoleBadge key={r} role={r} />
                          ))}
                          <select
                            value={primaryRole}
                            disabled={busy}
                            onChange={(e) => handleRoleChange(user, e.target.value)}
                            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 disabled:opacity-50"
                          >
                            {CREATE_ROLES.map((r) => (
                              <option key={r} value={r}>
                                {r.replace('_', ' ')}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {user.classLevel ? `Class ${user.classLevel}` : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={user.status || 'active'} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleToggleStatus(user)}
                            className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          >
                            {user.status === 'active' ? 'Ban' : 'Activate'}
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleDelete(user)}
                            className="inline-flex items-center gap-1 rounded-lg border border-rose-200 px-2.5 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:opacity-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 ? (
          <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
            <p className="text-xs text-slate-500">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={page <= 1 || loading}
                onClick={() => loadUsers(page - 1)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={page >= totalPages || loading}
                onClick={() => loadUsers(page + 1)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {showCreate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">Add user</h3>
              <button
                type="button"
                onClick={() => setShowCreate(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleCreate} className="space-y-3 p-5">
              {formError ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {formError}
                </div>
              ) : null}
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="Email"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="Phone (optional)"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <input
                required
                type="password"
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                placeholder="Password (min 8 chars)"
                minLength={8}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.roles[0]}
                  onChange={(e) => setForm((f) => ({ ...f, roles: [e.target.value] }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  {CREATE_ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r.replace('_', ' ')}
                    </option>
                  ))}
                </select>
                <select
                  value={form.classLevel}
                  onChange={(e) => setForm((f) => ({ ...f, classLevel: e.target.value }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">Class (optional)</option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Class {n}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {saving ? 'Creating…' : 'Create user'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
