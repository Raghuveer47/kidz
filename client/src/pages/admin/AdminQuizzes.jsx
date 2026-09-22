import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Plus, RefreshCw, Trash2, Pencil, X, Eye, EyeOff, FileSpreadsheet } from 'lucide-react';
import { quizzesApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const QUESTION_TYPES = [
  { value: 'multiple_choice_single', label: 'MCQ (Single Correct)', group: 'Basic' },
  { value: 'multiple_choice_multiple', label: 'MCQ (Multiple Correct)', group: 'Basic' },
  { value: 'true_false', label: 'True / False', group: 'Basic' },
  { value: 'fill_in_blank', label: 'Fill in the Blank', group: 'Basic' },
  { value: 'passage', label: 'Passage', group: 'Basic' },
  { value: 'dropdown', label: 'Drop Down', group: 'Interactive' },
  { value: 'image_based', label: 'Image Based', group: 'Interactive' },
  { value: 'match', label: 'Match the Following', group: 'Interactive' },
  { value: 'reorder', label: 'Arrange / Reorder', group: 'Interactive' },
  { value: 'categorize', label: 'Categorize', group: 'Interactive' },
  { value: 'poll', label: 'Poll', group: 'Open ended' },
  { value: 'open_ended', label: 'Open Ended', group: 'Open ended' },
];

const TYPE_GROUPS = ['Basic', 'Interactive', 'Open ended'];

const NEEDS_OPTIONS = [
  'multiple_choice_single',
  'multiple_choice_multiple',
  'true_false',
  'dropdown',
  'passage',
  'image_based',
  'poll',
];
const NEEDS_SINGLE_ANSWER = [
  'multiple_choice_single',
  'true_false',
  'dropdown',
  'passage',
  'image_based',
];
const NEEDS_IMAGE = ['image_based'];

const emptyQuestion = () => ({
  questionType: 'multiple_choice_single',
  questionText: '',
  imageUrl: '',
  passageText: '',
  options: ['', '', '', ''],
  optionImages: ['', '', '', ''],
  correctOptionIndex: 0,
  correctOptionIndices: [],
  correctAnswers: [''],
  matchPairs: [{ left: '', right: '' }],
  correctOrder: ['', ''],
  categories: [{ name: '', items: [''] }],
  marks: 1,
  difficulty: 'easy',
  explanation: '',
});

const emptyForm = {
  title: '',
  description: '',
  classLevel: 1,
  topicSlug: '',
  isPublished: false,
  timeLimitMinutes: 10,
  passPercent: 50,
  questions: [emptyQuestion()],
};

const cleanList = (list) => (list || []).map((v) => String(v ?? '').trim()).filter(Boolean);

export default function AdminQuizzes() {
  const { accessToken } = useAuth();
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [classLevel, setClassLevel] = useState('');
  const [search, setSearch] = useState('');
  const [searchApplied, setSearchApplied] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState(null);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);
  const [excelOpen, setExcelOpen] = useState(false);
  const [excelMeta, setExcelMeta] = useState({
    title: '',
    classLevel: '1',
    defaultMarks: '1',
    isPublished: false,
  });
  const [excelBusy, setExcelBusy] = useState(false);
  const [excelError, setExcelError] = useState('');
  const excelInputRef = useRef(null);

  const load = useCallback(
    async (pageNumber = 1) => {
      if (!accessToken) return;
      setLoading(true);
      setError('');
      try {
        const res = await quizzesApi.list(accessToken, {
          page: pageNumber,
          limit: 20,
          classLevel: classLevel || undefined,
          search: searchApplied || undefined,
        });
        const data = res.data || {};
        setQuizzes(Array.isArray(data.items) ? data.items : []);
        setPage(data.page || pageNumber);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total ?? 0);
      } catch (err) {
        setError(err.message || 'Failed to load quizzes');
        setQuizzes([]);
      } finally {
        setLoading(false);
      }
    },
    [accessToken, classLevel, searchApplied]
  );

  useEffect(() => {
    load(1);
  }, [load]);

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchApplied(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(id);
  }, [search]);

  const openCreate = () => {
    setForm({ ...emptyForm, questions: [emptyQuestion()] });
    setFormError('');
    setModal({ mode: 'create' });
  };

  const openEdit = async (quiz) => {
    setFormError('');
    setBusyId(quiz._id);
    try {
      const res = await quizzesApi.getById(accessToken, quiz._id);
      const q = res.data;
      setForm({
        title: q.title || '',
        description: q.description || '',
        classLevel: q.classLevel || 1,
        topicSlug: q.topicSlug || '',
        isPublished: Boolean(q.isPublished),
        timeLimitMinutes: q.timeLimitMinutes ?? 10,
        passPercent: q.passPercent ?? 50,
        questions: (q.questions || []).map((item) => ({
          ...emptyQuestion(),
          ...item,
          options: item.options?.length ? item.options : ['', '', '', ''],
          optionImages: item.optionImages?.length
            ? item.optionImages
            : new Array(item.options?.length || 4).fill(''),
          correctOptionIndices: item.correctOptionIndices || [],
          correctAnswers: item.correctAnswers?.length ? item.correctAnswers : [''],
          matchPairs: item.matchPairs?.length ? item.matchPairs : [{ left: '', right: '' }],
          correctOrder: item.correctOrder?.length ? item.correctOrder : ['', ''],
          categories: item.categories?.length ? item.categories : [{ name: '', items: [''] }],
        })),
      });
      setModal({ mode: 'edit', id: quiz._id });
    } catch (err) {
      setError(err.message || 'Failed to load quiz');
    } finally {
      setBusyId(null);
    }
  };

  const updateQuestion = (index, patch) => {
    setForm((f) => ({
      ...f,
      questions: f.questions.map((q, i) => (i === index ? { ...q, ...patch } : q)),
    }));
  };

  const changeType = (index, questionType) => {
    const patch = { questionType };
    if (questionType === 'true_false') {
      patch.options = ['True', 'False'];
      patch.optionImages = ['', ''];
      patch.correctOptionIndex = 0;
    }
    updateQuestion(index, patch);
  };

  const updateOption = (qIndex, optIndex, value, field = 'options') => {
    setForm((f) => ({
      ...f,
      questions: f.questions.map((q, i) => {
        if (i !== qIndex) return q;
        const list = [...(q[field] || [])];
        list[optIndex] = value;
        return { ...q, [field]: list };
      }),
    }));
  };

  const toggleMultiCorrect = (qIndex, optIndex) => {
    setForm((f) => ({
      ...f,
      questions: f.questions.map((q, i) => {
        if (i !== qIndex) return q;
        const picks = new Set(q.correctOptionIndices || []);
        if (picks.has(optIndex)) picks.delete(optIndex);
        else picks.add(optIndex);
        return { ...q, correctOptionIndices: [...picks].sort((a, b) => a - b) };
      }),
    }));
  };

  const buildQuestionPayload = (q) => {
    const type = q.questionType;
    const payload = {
      questionType: type,
      questionText: q.questionText.trim(),
      marks: Number(q.marks) || 1,
      difficulty: q.difficulty || 'easy',
      explanation: (q.explanation || '').trim(),
    };

    if (q.imageUrl?.trim() || NEEDS_IMAGE.includes(type)) {
      payload.imageUrl = (q.imageUrl || '').trim();
    }
    if (type === 'passage') payload.passageText = (q.passageText || '').trim();

    if (NEEDS_OPTIONS.includes(type)) {
      const kept = [];
      const keptImages = [];
      (q.options || []).forEach((opt, i) => {
        if (String(opt).trim()) {
          kept.push(String(opt).trim());
          keptImages.push((q.optionImages?.[i] || '').trim());
        }
      });
      if (kept.length < 2) throw new Error('Each option question needs at least 2 options');
      payload.options = kept;
      if (keptImages.some(Boolean)) payload.optionImages = keptImages;

      if (NEEDS_SINGLE_ANSWER.includes(type)) {
        payload.correctOptionIndex = Math.min(q.correctOptionIndex ?? 0, kept.length - 1);
      }
      if (type === 'multiple_choice_multiple') {
        const picks = (q.correctOptionIndices || []).filter((i) => i < kept.length);
        if (picks.length === 0) throw new Error('Select at least one correct option');
        payload.correctOptionIndices = picks;
      }
    }

    if (type === 'fill_in_blank') {
      const answers = cleanList(q.correctAnswers);
      if (!answers.length) throw new Error('Add at least one accepted answer');
      payload.correctAnswers = answers;
    }

    if (type === 'match') {
      const pairs = (q.matchPairs || [])
        .map((p) => ({ left: p.left.trim(), right: p.right.trim() }))
        .filter((p) => p.left && p.right);
      if (!pairs.length) throw new Error('Add at least one match pair');
      payload.matchPairs = pairs;
    }

    if (type === 'reorder') {
      const order = cleanList(q.correctOrder);
      if (order.length < 2) throw new Error('Add at least two items to arrange');
      payload.correctOrder = order;
    }

    if (type === 'categorize') {
      const categories = (q.categories || [])
        .map((c) => ({ name: c.name.trim(), items: cleanList(c.items) }))
        .filter((c) => c.name && c.items.length);
      if (!categories.length) throw new Error('Add at least one category with items');
      payload.categories = categories;
    }

    return payload;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        classLevel: Number(form.classLevel),
        topicSlug: form.topicSlug.trim().toLowerCase(),
        isPublished: form.isPublished,
        timeLimitMinutes: Number(form.timeLimitMinutes) || 0,
        passPercent: Number(form.passPercent) || 50,
        questions: form.questions.map(buildQuestionPayload),
      };

      if (modal.mode === 'create') {
        await quizzesApi.create(accessToken, payload);
      } else {
        await quizzesApi.update(accessToken, modal.id, payload);
      }
      setModal(null);
      await load(page);
    } catch (err) {
      setFormError(err.message || 'Failed to save quiz');
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublish = async (quiz) => {
    setBusyId(quiz._id);
    try {
      await quizzesApi.update(accessToken, quiz._id, { isPublished: !quiz.isPublished });
      await load(page);
    } catch (err) {
      setError(err.message || 'Failed to update publish status');
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (quiz) => {
    if (!window.confirm(`Delete quiz “${quiz.title}”? Attempts will also be removed.`)) return;
    setBusyId(quiz._id);
    try {
      await quizzesApi.remove(accessToken, quiz._id);
      await load(page);
    } catch (err) {
      setError(err.message || 'Failed to delete quiz');
    } finally {
      setBusyId(null);
    }
  };

  const downloadExcelTemplate = () => {
    const csv = [
      'question,type,optionA,optionB,optionC,optionD,correctOption,marks',
      'What is the brain of a computer?,multiple_choice_single,CPU,Monitor,Keyboard,Mouse,A,1',
      'Select input devices,multiple_choice_multiple,Keyboard,Monitor,Mouse,Speaker,"A,C",2',
      'A mouse is an input device,true_false,,,,,TRUE,1',
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz-import-template.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExcelImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setExcelBusy(true);
    setExcelError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', excelMeta.title.trim() || file.name.replace(/\.\w+$/, ''));
      formData.append('classLevel', excelMeta.classLevel);
      formData.append('defaultMarks', excelMeta.defaultMarks);
      formData.append('isPublished', String(excelMeta.isPublished));
      await quizzesApi.uploadExcel(accessToken, formData);
      setExcelOpen(false);
      await load(1);
    } catch (err) {
      setExcelError(err.message || 'Import failed');
    } finally {
      setExcelBusy(false);
      if (excelInputRef.current) excelInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Quizzes</h2>
          <p className="mt-1 text-sm text-slate-600">
            Question bank by class — MCQ, image based, match, reorder and more.
            {total ? ` ${total} total` : null}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => load(page)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            type="button"
            onClick={() => {
              setExcelError('');
              setExcelOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Import Excel
          </button>
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add quiz
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search title…"
          className="min-w-[180px] flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-400 focus:bg-white"
        />
        <select
          value={classLevel}
          onChange={(e) => {
            setClassLevel(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
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
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Quiz</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Questions</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    Loading quizzes…
                  </td>
                </tr>
              ) : quizzes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    No quizzes yet. Click <strong>Add quiz</strong> to create one.
                  </td>
                </tr>
              ) : (
                quizzes.map((quiz) => {
                  const busy = busyId === quiz._id;
                  return (
                    <tr key={quiz._id} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900">{quiz.title}</p>
                        {quiz.topicSlug ? (
                          <p className="text-xs text-slate-400">{quiz.topicSlug}</p>
                        ) : null}
                      </td>
                      <td className="px-4 py-3 text-slate-600">Class {quiz.classLevel}</td>
                      <td className="px-4 py-3 text-slate-600">{quiz.questionCount ?? 0}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold ${
                            quiz.isPublished
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {quiz.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => openEdit(quiz)}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleTogglePublish(quiz)}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          >
                            {quiz.isPublished ? (
                              <EyeOff className="h-3.5 w-3.5" />
                            ) : (
                              <Eye className="h-3.5 w-3.5" />
                            )}
                            {quiz.isPublished ? 'Unpublish' : 'Publish'}
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleDelete(quiz)}
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
                onClick={() => load(page - 1)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={page >= totalPages || loading}
                onClick={() => load(page + 1)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {modal ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/40 p-4">
          <div className="my-6 w-full max-w-3xl rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                {modal.mode === 'create' ? 'Add quiz' : 'Edit quiz'}
              </h3>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-5">
              {formError ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {formError}
                </div>
              ) : null}

              <input
                required
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Quiz title"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Short description (optional)"
                rows={2}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <select
                  value={form.classLevel}
                  onChange={(e) => setForm((f) => ({ ...f, classLevel: Number(e.target.value) }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Class {n}
                    </option>
                  ))}
                </select>
                <input
                  value={form.topicSlug}
                  onChange={(e) => setForm((f) => ({ ...f, topicSlug: e.target.value }))}
                  placeholder="Topic slug (opt)"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                />
                <input
                  type="number"
                  min={0}
                  value={form.timeLimitMinutes}
                  onChange={(e) => setForm((f) => ({ ...f, timeLimitMinutes: e.target.value }))}
                  placeholder="Minutes"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.passPercent}
                  onChange={(e) => setForm((f) => ({ ...f, passPercent: e.target.value }))}
                  placeholder="Pass %"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
              </div>

              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={(e) => setForm((f) => ({ ...f, isPublished: e.target.checked }))}
                />
                Published (students can take it)
              </label>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-800">Questions</h4>
                  <button
                    type="button"
                    onClick={() =>
                      setForm((f) => ({ ...f, questions: [...f.questions, emptyQuestion()] }))
                    }
                    className="text-xs font-bold text-cyan-700 hover:underline"
                  >
                    + Add question
                  </button>
                </div>

                {form.questions.map((q, qi) => {
                  const type = q.questionType;
                  const showOptions = NEEDS_OPTIONS.includes(type);
                  const singleAnswer = NEEDS_SINGLE_ANSWER.includes(type);
                  const multiAnswer = type === 'multiple_choice_multiple';

                  return (
                    <div
                      key={qi}
                      className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-bold uppercase text-slate-500">
                          Question {qi + 1}
                        </p>
                        <div className="flex items-center gap-2">
                          <select
                            value={type}
                            onChange={(e) => changeType(qi, e.target.value)}
                            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold"
                          >
                            {TYPE_GROUPS.map((group) => (
                              <optgroup key={group} label={group}>
                                {QUESTION_TYPES.filter((t) => t.group === group).map((t) => (
                                  <option key={t.value} value={t.value}>
                                    {t.label}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                          {form.questions.length > 1 ? (
                            <button
                              type="button"
                              onClick={() =>
                                setForm((f) => ({
                                  ...f,
                                  questions: f.questions.filter((_, i) => i !== qi),
                                }))
                              }
                              className="text-xs font-semibold text-rose-600"
                            >
                              Remove
                            </button>
                          ) : null}
                        </div>
                      </div>

                      <input
                        required
                        value={q.questionText}
                        onChange={(e) => updateQuestion(qi, { questionText: e.target.value })}
                        placeholder="Question text"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                      />

                      {type === 'passage' ? (
                        <textarea
                          value={q.passageText}
                          onChange={(e) => updateQuestion(qi, { passageText: e.target.value })}
                          placeholder="Passage text"
                          rows={3}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                        />
                      ) : null}

                      <div className="flex items-center gap-2">
                        <input
                          value={q.imageUrl}
                          onChange={(e) => updateQuestion(qi, { imageUrl: e.target.value })}
                          placeholder={
                            NEEDS_IMAGE.includes(type)
                              ? 'Image URL (required for image based)'
                              : 'Question image URL (optional)'
                          }
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                        {q.imageUrl ? (
                          <img
                            src={q.imageUrl}
                            alt=""
                            className="h-10 w-10 rounded object-cover"
                          />
                        ) : null}
                      </div>

                      {showOptions ? (
                        <div className="space-y-2">
                          {(q.options || []).map((opt, oi) => (
                            <div key={oi} className="flex items-center gap-2">
                              {multiAnswer ? (
                                <input
                                  type="checkbox"
                                  checked={(q.correctOptionIndices || []).includes(oi)}
                                  onChange={() => toggleMultiCorrect(qi, oi)}
                                  title="Mark as correct"
                                />
                              ) : singleAnswer ? (
                                <input
                                  type="radio"
                                  name={`correct-${qi}`}
                                  checked={q.correctOptionIndex === oi}
                                  onChange={() => updateQuestion(qi, { correctOptionIndex: oi })}
                                  title="Mark as correct"
                                />
                              ) : (
                                <span className="w-4" />
                              )}
                              <input
                                value={opt}
                                onChange={(e) => updateOption(qi, oi, e.target.value)}
                                placeholder={`Option ${oi + 1}`}
                                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                              />
                              <input
                                value={q.optionImages?.[oi] || ''}
                                onChange={(e) =>
                                  updateOption(qi, oi, e.target.value, 'optionImages')
                                }
                                placeholder="Option image URL"
                                className="w-44 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs"
                              />
                            </div>
                          ))}
                          {type !== 'true_false' && (q.options?.length || 0) < 6 ? (
                            <button
                              type="button"
                              onClick={() =>
                                updateQuestion(qi, {
                                  options: [...(q.options || []), ''],
                                  optionImages: [...(q.optionImages || []), ''],
                                })
                              }
                              className="text-xs font-semibold text-cyan-700 hover:underline"
                            >
                              + Add option
                            </button>
                          ) : null}
                        </div>
                      ) : null}

                      {type === 'fill_in_blank' ? (
                        <div className="space-y-2">
                          {(q.correctAnswers || []).map((ans, ai) => (
                            <input
                              key={ai}
                              value={ans}
                              onChange={(e) => {
                                const list = [...q.correctAnswers];
                                list[ai] = e.target.value;
                                updateQuestion(qi, { correctAnswers: list });
                              }}
                              placeholder={`Accepted answer ${ai + 1}`}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                            />
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              updateQuestion(qi, { correctAnswers: [...q.correctAnswers, ''] })
                            }
                            className="text-xs font-semibold text-cyan-700 hover:underline"
                          >
                            + Add accepted answer
                          </button>
                        </div>
                      ) : null}

                      {type === 'match' ? (
                        <div className="space-y-2">
                          {(q.matchPairs || []).map((pair, pi) => (
                            <div key={pi} className="flex gap-2">
                              <input
                                value={pair.left}
                                onChange={(e) => {
                                  const pairs = [...q.matchPairs];
                                  pairs[pi] = { ...pairs[pi], left: e.target.value };
                                  updateQuestion(qi, { matchPairs: pairs });
                                }}
                                placeholder="Left item"
                                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                              />
                              <input
                                value={pair.right}
                                onChange={(e) => {
                                  const pairs = [...q.matchPairs];
                                  pairs[pi] = { ...pairs[pi], right: e.target.value };
                                  updateQuestion(qi, { matchPairs: pairs });
                                }}
                                placeholder="Matches with"
                                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                              />
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              updateQuestion(qi, {
                                matchPairs: [...q.matchPairs, { left: '', right: '' }],
                              })
                            }
                            className="text-xs font-semibold text-cyan-700 hover:underline"
                          >
                            + Add pair
                          </button>
                        </div>
                      ) : null}

                      {type === 'reorder' ? (
                        <div className="space-y-2">
                          {(q.correctOrder || []).map((item, ri) => (
                            <input
                              key={ri}
                              value={item}
                              onChange={(e) => {
                                const order = [...q.correctOrder];
                                order[ri] = e.target.value;
                                updateQuestion(qi, { correctOrder: order });
                              }}
                              placeholder={`Step ${ri + 1} (correct order)`}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                            />
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              updateQuestion(qi, { correctOrder: [...q.correctOrder, ''] })
                            }
                            className="text-xs font-semibold text-cyan-700 hover:underline"
                          >
                            + Add step
                          </button>
                        </div>
                      ) : null}

                      {type === 'categorize' ? (
                        <div className="space-y-2">
                          {(q.categories || []).map((cat, ci) => (
                            <div key={ci} className="flex gap-2">
                              <input
                                value={cat.name}
                                onChange={(e) => {
                                  const cats = [...q.categories];
                                  cats[ci] = { ...cats[ci], name: e.target.value };
                                  updateQuestion(qi, { categories: cats });
                                }}
                                placeholder="Category name"
                                className="w-1/3 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                              />
                              <input
                                value={(cat.items || []).join(', ')}
                                onChange={(e) => {
                                  const cats = [...q.categories];
                                  cats[ci] = {
                                    ...cats[ci],
                                    items: e.target.value.split(',').map((s) => s.trim()),
                                  };
                                  updateQuestion(qi, { categories: cats });
                                }}
                                placeholder="Items (comma separated)"
                                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                              />
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              updateQuestion(qi, {
                                categories: [...q.categories, { name: '', items: [''] }],
                              })
                            }
                            className="text-xs font-semibold text-cyan-700 hover:underline"
                          >
                            + Add category
                          </button>
                        </div>
                      ) : null}

                      <div className="flex flex-wrap gap-2">
                        <input
                          type="number"
                          min={0}
                          value={q.marks}
                          onChange={(e) => updateQuestion(qi, { marks: e.target.value })}
                          placeholder="Marks"
                          className="w-24 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                        <select
                          value={q.difficulty}
                          onChange={(e) => updateQuestion(qi, { difficulty: e.target.value })}
                          className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm"
                        >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </select>
                        <input
                          value={q.explanation}
                          onChange={(e) => updateQuestion(qi, { explanation: e.target.value })}
                          placeholder="Explanation (optional)"
                          className="min-w-[160px] flex-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

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
                  {saving ? 'Saving…' : modal.mode === 'create' ? 'Create quiz' : 'Save changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {excelOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Import quiz from Excel</h3>
              <button type="button" onClick={() => setExcelOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-3 text-sm text-slate-600">
              Supports MCQ single, MCQ multiple, and True/False. Columns:{' '}
              <code className="text-xs">question, type, optionA–D, correctOption, marks</code>
            </p>
            {excelError ? (
              <p className="mb-3 text-sm font-medium text-rose-600">{excelError}</p>
            ) : null}
            <div className="space-y-3">
              <input
                value={excelMeta.title}
                onChange={(e) => setExcelMeta((m) => ({ ...m, title: e.target.value }))}
                placeholder="Quiz title"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={excelMeta.classLevel}
                  onChange={(e) => setExcelMeta((m) => ({ ...m, classLevel: e.target.value }))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Class {n}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min={1}
                  value={excelMeta.defaultMarks}
                  onChange={(e) => setExcelMeta((m) => ({ ...m, defaultMarks: e.target.value }))}
                  placeholder="Default marks"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={excelMeta.isPublished}
                  onChange={(e) => setExcelMeta((m) => ({ ...m, isPublished: e.target.checked }))}
                />
                Publish after import
              </label>
              <button
                type="button"
                onClick={downloadExcelTemplate}
                className="text-sm font-semibold text-cyan-700 hover:underline"
              >
                Download CSV template
              </button>
              <input
                ref={excelInputRef}
                type="file"
                accept=".xlsx,.xls,.csv"
                disabled={excelBusy}
                onChange={handleExcelImport}
                className="block w-full text-sm"
              />
              {excelBusy ? <p className="text-sm text-slate-500">Importing…</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
