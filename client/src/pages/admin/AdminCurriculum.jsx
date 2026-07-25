import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus, RefreshCw, Trash2, Pencil, Database, X } from 'lucide-react';
import { curriculumApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const CATEGORIES = [
  'COMPUTER BASICS',
  'CREATIVE TOOLS',
  'PROGRAMMING',
  'INTERNET',
  'AI',
];

const emptyForm = {
  title: '',
  category: 'COMPUTER BASICS',
  description: '',
  isActive: true,
};

export default function AdminCurriculum() {
  const { accessToken } = useAuth();
  const [classLevel, setClassLevel] = useState(1);
  const [summary, setSummary] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState(null);
  const [modal, setModal] = useState(null); // { mode: 'create'|'edit', topic? }
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const load = useCallback(async () => {
    if (!accessToken) return;
    setLoading(true);
    setError('');
    try {
      const [classesRes, topicsRes] = await Promise.all([
        curriculumApi.classes(accessToken),
        curriculumApi.listTopics({ classLevel }, accessToken),
      ]);
      setSummary(classesRes.data?.classes || []);
      setTopics(Array.isArray(topicsRes.data) ? topicsRes.data : []);
    } catch (err) {
      setError(err.message || 'Failed to load curriculum');
      setTopics([]);
    } finally {
      setLoading(false);
    }
  }, [accessToken, classLevel]);

  useEffect(() => {
    load();
  }, [load]);

  const classCounts = useMemo(() => {
    const map = {};
    summary.forEach((c) => {
      map[c.classLevel] = c.total;
    });
    return map;
  }, [summary]);

  const openCreate = () => {
    setForm(emptyForm);
    setFormError('');
    setModal({ mode: 'create' });
  };

  const openEdit = (topic) => {
    setForm({
      title: topic.title || '',
      category: topic.category || 'COMPUTER BASICS',
      description: topic.description || '',
      isActive: topic.isActive !== false,
    });
    setFormError('');
    setModal({ mode: 'edit', topic });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      const payload = {
        title: form.title.trim(),
        category: form.category,
        description: form.description.trim(),
        isActive: form.isActive,
      };
      if (modal.mode === 'create') {
        await curriculumApi.createTopic(accessToken, {
          ...payload,
          classLevel,
        });
      } else {
        await curriculumApi.updateTopic(accessToken, modal.topic._id, payload);
      }
      setModal(null);
      await load();
    } catch (err) {
      setFormError(err.message || 'Failed to save topic');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (topic) => {
    setBusyId(topic._id);
    try {
      await curriculumApi.updateTopic(accessToken, topic._id, {
        isActive: !topic.isActive,
      });
      await load();
    } catch (err) {
      setError(err.message || 'Failed to update topic');
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (topic) => {
    if (!window.confirm(`Delete “${topic.title}”?`)) return;
    setBusyId(topic._id);
    try {
      await curriculumApi.deleteTopic(accessToken, topic._id);
      await load();
    } catch (err) {
      setError(err.message || 'Failed to delete topic');
    } finally {
      setBusyId(null);
    }
  };

  const handleSeed = async () => {
    if (
      !window.confirm(
        'Replace all curriculum topics with the default Class 1–10 outline? Existing CMS edits will be lost.'
      )
    ) {
      return;
    }
    setSeeding(true);
    setError('');
    try {
      await curriculumApi.seed(accessToken);
      await load();
    } catch (err) {
      setError(err.message || 'Failed to seed curriculum');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Curriculum</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage Class 1–10 topic outline (titles, category, active). Lesson content stays in the site for now.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={load}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            type="button"
            onClick={handleSeed}
            disabled={seeding}
            className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:opacity-50"
          >
            <Database className="h-4 w-4" />
            {seeding ? 'Seeding…' : 'Seed outline'}
          </button>
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add topic
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
          const active = classLevel === n;
          const count = classCounts[n] ?? 0;
          return (
            <button
              key={n}
              type="button"
              onClick={() => setClassLevel(n)}
              className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
                active
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Class {n}
              <span className={`ml-1.5 text-xs font-semibold ${active ? 'text-slate-300' : 'text-slate-400'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
          <h3 className="text-sm font-bold text-slate-800">Class {classLevel} topics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs font-bold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Topic</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    Loading topics…
                  </td>
                </tr>
              ) : topics.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    No topics yet. Click <strong>Seed outline</strong> or <strong>Add topic</strong>.
                  </td>
                </tr>
              ) : (
                topics.map((topic, idx) => {
                  const busy = busyId === topic._id;
                  return (
                    <tr key={topic._id} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-400">{idx + 1}</td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900">{topic.title}</p>
                        <p className="text-xs text-slate-400">{topic.slug}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                          {topic.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${
                            topic.isActive
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {topic.isActive ? 'Active' : 'Hidden'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => openEdit(topic)}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleToggleActive(topic)}
                            className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          >
                            {topic.isActive ? 'Hide' : 'Show'}
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleDelete(topic)}
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
      </div>

      {modal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                {modal.mode === 'create' ? `Add topic — Class ${classLevel}` : 'Edit topic'}
              </h3>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-3 p-5">
              {formError ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {formError}
                </div>
              ) : null}
              <input
                required
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Topic title"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Short description (optional)"
                rows={3}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => setForm((f) => ({ ...f, isActive: e.target.checked }))}
                />
                Active (visible)
              </label>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {saving ? 'Saving…' : modal.mode === 'create' ? 'Create' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
