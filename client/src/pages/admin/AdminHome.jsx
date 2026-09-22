import React, { useCallback, useEffect, useState } from 'react';
import { RefreshCw, Save } from 'lucide-react';
import { homeApi, uploadApi } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const DEFAULT_SECTIONS = [
  'scrollable_images',
  'counters',
  'updates',
  'top_performers',
  'testimonials',
  'quotes',
  'certification',
  'summer_training',
];

export default function AdminHome() {
  const { accessToken } = useAuth();
  const [sections, setSections] = useState([]);
  const [allowed, setAllowed] = useState(DEFAULT_SECTIONS);
  const [active, setActive] = useState('testimonials');
  const [editor, setEditor] = useState('{}');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const load = useCallback(async () => {
    if (!accessToken) return;
    setLoading(true);
    setError('');
    try {
      const res = await homeApi.listSections(accessToken);
      const items = res.data?.items || [];
      const allowedSections = res.data?.allowedSections || DEFAULT_SECTIONS;
      setSections(items);
      setAllowed(allowedSections);
      const current = items.find((s) => s.section === active);
      setEditor(JSON.stringify(current?.data ?? {}, null, 2));
    } catch (err) {
      setError(err.message || 'Failed to load home sections');
    } finally {
      setLoading(false);
    }
  }, [accessToken, active]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    const current = sections.find((s) => s.section === active);
    setEditor(JSON.stringify(current?.data ?? {}, null, 2));
  }, [active, sections]);

  const save = async () => {
    setSaving(true);
    setError('');
    setMessage('');
    try {
      const data = JSON.parse(editor);
      await homeApi.updateSection(accessToken, active, data);
      setMessage(`Saved “${active}”`);
      await load();
    } catch (err) {
      setError(err.message || 'Invalid JSON or save failed');
    } finally {
      setSaving(false);
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    setMessage('');
    try {
      const res = await uploadApi.image(accessToken, file, `kidscodingai/home/${active}`);
      setMessage(`Uploaded: ${res.data?.url}`);
      // Append URL into editor if it's an array of images
      try {
        const parsed = JSON.parse(editor);
        if (Array.isArray(parsed)) {
          setEditor(JSON.stringify([...parsed, res.data.url], null, 2));
        } else if (parsed && typeof parsed === 'object') {
          setEditor(
            JSON.stringify({ ...parsed, lastUploadedUrl: res.data.url }, null, 2)
          );
        }
      } catch {
        /* leave editor as-is */
      }
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Home CMS</h2>
          <p className="mt-1 text-sm text-slate-600">
            Edit homepage section JSON. Public site reads <code>/api/home</code>.
          </p>
        </div>
        <button
          type="button"
          onClick={load}
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
      {message ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          {message}
        </div>
      ) : null}

      {loading ? (
        <p className="text-slate-500">Loading…</p>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
          <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-3">
            {allowed.map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActive(section)}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold ${
                  active === section
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold text-slate-900">{active}</h3>
              <div className="flex flex-wrap gap-2">
                <label className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700">
                  {uploading ? 'Uploading…' : 'Upload image'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={uploadImage}
                  />
                </label>
                <button
                  type="button"
                  onClick={save}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {saving ? 'Saving…' : 'Save section'}
                </button>
              </div>
            </div>
            <textarea
              value={editor}
              onChange={(e) => setEditor(e.target.value)}
              rows={22}
              spellCheck={false}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800"
            />
            <p className="mt-2 text-xs text-slate-500">
              Tip: use Upload image to get a Cloudinary URL, then paste it into the JSON.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
