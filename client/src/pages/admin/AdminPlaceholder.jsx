import React from 'react';
import { Link } from 'react-router-dom';

/** Placeholder pages until modules are ported */
export default function AdminPlaceholder({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-2 max-w-xl text-sm text-slate-600">{description}</p>
      <Link
        to="/admin"
        className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white"
      >
        Back to overview
      </Link>
    </div>
  );
}
