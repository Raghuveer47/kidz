import React, { useCallback, useEffect, useState } from 'react';
import { Plus, RefreshCw, Trash2, Users, X } from 'lucide-react';
import { batchesApi, usersApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const emptyForm = {
  name: '',
  code: '',
  description: '',
  classLevel: '',
  startDate: '',
  endDate: '',
  isActive: true,
};

export default function AdminBatches() {
  const { accessToken } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');
  const [studentsModal, setStudentsModal] = useState(null);
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [studentSearch, setStudentSearch] = useState('');

  const load = useCallback(async () => {
    if (!accessToken) return;
    setLoading(true);
    setError('');
    try {
      const res = await batchesApi.list(accessToken, { limit: 50 });
      setItems(res.data?.items || []);
    } catch (err) {
      setError(err.message || 'Failed to load batches');
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setForm(emptyForm);
    setFormError('');
    setModal({ mode: 'create' });
  };

  const openEdit = (batch) => {
    setForm({
      name: batch.name || '',
      code: batch.code || '',
      description: batch.description || '',
      classLevel: batch.classLevel ? String(batch.classLevel) : '',
      startDate: batch.startDate ? String(batch.startDate).slice(0, 10) : '',
      endDate: batch.endDate ? String(batch.endDate).slice(0, 10) : '',
      isActive: batch.isActive !== false,
    });
    setFormError('');
    setModal({ mode: 'edit', id: batch._id });
  };

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      const payload = {
        name: form.name.trim(),
        code: form.code.trim().toUpperCase(),
        description: form.description.trim(),
        classLevel: form.classLevel ? Number(form.classLevel) : null,
        startDate: form.startDate || '',
        endDate: form.endDate || '',
        isActive: form.isActive,
      };
      if (modal.mode === 'create') await batchesApi.create(accessToken, payload);
      else await batchesApi.update(accessToken, modal.id, payload);
      setModal(null);
      await load();
    } catch (err) {
      setFormError(err.message || 'Failed to save batch');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (batch) => {
    if (!window.confirm(`Delete batch “${batch.name}”?`)) return;
    try {
      await batchesApi.remove(accessToken, batch._id);
      await load();
    } catch (err) {
      setError(err.message || 'Failed to delete');
    }
  };

  const openStudents = async (batch) => {
    setStudentsModal(batch);
    setSelectedIds([]);
    setStudentSearch('');
    try {
      const [inBatch, all] = await Promise.all([
        batchesApi.listStudents(accessToken, { batchCode: batch.code, limit: 100 }),
        usersApi.list(accessToken, { role: 'student', limit: 100 }),
      ]);
      setStudents(inBatch.data?.items || []);
      setAllStudents(all.data?.items || []);
    } catch (err) {
      setError(err.message || 'Failed to load students');
    }
  };

  const addSelected = async () => {
    if (!selectedIds.length) return;
    try {
      await batchesApi.addStudents(accessToken, studentsModal.code, selectedIds);
      await openStudents(studentsModal);
    } catch (err) {
      setError(err.message || 'Failed to add students');
    }
  };

  const removeStudent = async (userId) => {
    try {
      await batchesApi.removeStudents(accessToken, studentsModal.code, [userId]);
      await openStudents(studentsModal);
    } catch (err) {
      setError(err.message || 'Failed to remove student');
    }
  };

  const filteredCandidates = (Array.isArray(allStudents) ? allStudents : []).filter((u) => {
    const already = students.some((s) => s._id === u._id);
    if (already) return false;
    if (!studentSearch.trim()) return true;
    const q = studentSearch.toLowerCase();
    return u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Batches</h2>
          <p className="mt-1 text-sm text-slate-600">Summer / school groups and enrollments.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={load}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white"
          >
            <Plus className="h-4 w-4" />
            Add batch
          </button>
        </div>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Class</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  Loading…
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  No batches yet.
                </td>
              </tr>
            ) : (
              items.map((batch) => (
                <tr key={batch._id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-semibold text-slate-900">{batch.name}</td>
                  <td className="px-4 py-3 font-mono text-xs">{batch.code}</td>
                  <td className="px-4 py-3">{batch.classLevel ? `Class ${batch.classLevel}` : '—'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        batch.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {batch.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openStudents(batch)}
                        className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                        title="Students"
                      >
                        <Users className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => openEdit(batch)}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => remove(batch)}
                        className="rounded-lg border border-rose-200 p-2 text-rose-600"
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
      </div>

      {modal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <form
            onSubmit={save}
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">{modal.mode === 'create' ? 'Add batch' : 'Edit batch'}</h3>
              <button type="button" onClick={() => setModal(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {formError ? <p className="mb-3 text-sm font-medium text-rose-600">{formError}</p> : null}
            <div className="space-y-3">
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Batch name"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <input
                required
                value={form.code}
                onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
                placeholder="Code (e.g. SUMMER26)"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm uppercase"
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Description"
                rows={2}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <select
                value={form.classLevel}
                onChange={(e) => setForm((f) => ({ ...f, classLevel: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              >
                <option value="">No class link</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    Class {n}
                  </option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => setForm((f) => ({ ...f, isActive: e.target.checked }))}
                />
                Active
              </label>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-bold text-white disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save batch'}
            </button>
          </form>
        </div>
      ) : null}

      {studentsModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h3 className="text-lg font-bold">Students — {studentsModal.name}</h3>
                <p className="text-xs text-slate-500">Code {studentsModal.code}</p>
              </div>
              <button type="button" onClick={() => setStudentsModal(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-4 overflow-y-auto p-5 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-bold text-slate-800">In batch ({students.length})</p>
                <ul className="space-y-1">
                  {students.map((s) => (
                    <li
                      key={s._id}
                      className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm"
                    >
                      <span>
                        {s.name}
                        <span className="block text-xs text-slate-500">{s.email}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => removeStudent(s._id)}
                        className="text-xs font-bold text-rose-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  {!students.length ? (
                    <li className="text-sm text-slate-500">No students enrolled.</li>
                  ) : null}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold text-slate-800">Add students</p>
                <input
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search…"
                  className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <ul className="mb-3 max-h-48 space-y-1 overflow-y-auto">
                  {filteredCandidates.map((s) => (
                    <li key={s._id}>
                      <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(s._id)}
                          onChange={() => {
                            setSelectedIds((prev) =>
                              prev.includes(s._id)
                                ? prev.filter((id) => id !== s._id)
                                : [...prev, s._id]
                            );
                          }}
                        />
                        <span>
                          {s.name}
                          <span className="block text-xs text-slate-500">{s.email}</span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={addSelected}
                  disabled={!selectedIds.length}
                  className="w-full rounded-xl bg-slate-900 py-2 text-sm font-bold text-white disabled:opacity-40"
                >
                  Add selected ({selectedIds.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
