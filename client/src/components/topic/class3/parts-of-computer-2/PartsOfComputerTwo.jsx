import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Class 3 — Parts of Computer-2: same structure as Class 2 Parts of Computer-1
 * (Smart Basics hero, multi-category classification tables, why/how, device CTA).
 */
export default function PartsOfComputerTwo({ content, classId }) {
    const rows = content.classificationRows || [];
    const outputDevicesBase = `/class${classId}/output-devices`;
    const rowsByCategory = rows.reduce((acc, row) => {
        if (!acc[row.category]) acc[row.category] = [];
        acc[row.category].push(row);
        return acc;
    }, {});

    const categoryStyle = {
        'Printing on paper': {
            shell: 'border-violet-300',
            cap: 'from-violet-500 to-fuchsia-500',
            th: 'bg-violet-900 text-violet-50 border-violet-700',
            zebra: 'bg-violet-50/45',
            badge: 'bg-violet-100 text-violet-800 border-violet-300',
        },
        'Screens & projectors': {
            shell: 'border-sky-300',
            cap: 'from-sky-500 to-cyan-500',
            th: 'bg-sky-900 text-sky-50 border-sky-700',
            zebra: 'bg-sky-50/45',
            badge: 'bg-sky-100 text-sky-800 border-sky-300',
        },
        'Speakers & earphones': {
            shell: 'border-rose-300',
            cap: 'from-rose-500 to-pink-500',
            th: 'bg-rose-900 text-rose-50 border-rose-700',
            zebra: 'bg-rose-50/45',
            badge: 'bg-rose-100 text-rose-800 border-rose-300',
        },
        'Headsets & voice': {
            shell: 'border-indigo-300',
            cap: 'from-indigo-500 to-blue-500',
            th: 'bg-indigo-900 text-indigo-50 border-indigo-700',
            zebra: 'bg-indigo-50/45',
            badge: 'bg-indigo-100 text-indigo-800 border-indigo-300',
        },
        'Scanning (input)': {
            shell: 'border-emerald-300',
            cap: 'from-emerald-500 to-teal-500',
            th: 'bg-emerald-900 text-emerald-50 border-emerald-700',
            zebra: 'bg-emerald-50/45',
            badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        },
    };

    const classificationIntro =
        content.classificationIntro ||
        'This table groups devices the way we list them in your notes: category, name, and what the device mainly does.';

    return (
        <div className="space-y-10 font-nunito">
            <section className="relative overflow-hidden rounded-3xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-100 via-sky-50 to-cyan-100 p-6 md:p-8 shadow-[0_12px_28px_-16px_rgba(79,70,229,0.45)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl" />
                <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />

                <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-indigo-300 bg-white/85 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-indigo-800">
                        <span aria-hidden>🧠</span>
                        Smart Basics
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">{content.hardwareTitle}</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg whitespace-pre-line">
                        {content.hardwareBody}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-indigo-200 bg-white/85 p-3">
                            <p className="text-sm font-bold text-indigo-800">
                                Output = from computer to paper, screen, speakers, or wall 📄🔊
                            </p>
                        </div>
                        <div className="rounded-2xl border border-cyan-200 bg-white/85 p-3">
                            <p className="text-sm font-bold text-cyan-800">
                                Input = keyboard, mouse, scanner, mic—information coming in ⌨️🎤
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-xl font-extrabold text-slate-900 md:text-2xl">
                    Parts of a computer — classification
                </h2>
                <p className="mb-4 text-slate-600">{classificationIntro}</p>
                <div className="space-y-7">
                    {Object.entries(rowsByCategory).map(([category, categoryRows]) => (
                        <div
                            key={category}
                            className={`overflow-hidden rounded-2xl border-2 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.32)] ${categoryStyle[category]?.shell || 'border-slate-300'}`}
                        >
                            <div
                                className={`flex items-center gap-2 bg-gradient-to-r px-4 py-3 text-white ${categoryStyle[category]?.cap || 'from-slate-600 to-slate-700'}`}
                            >
                                <span className="text-lg" aria-hidden>
                                    📚
                                </span>
                                <p className="text-sm font-extrabold uppercase tracking-wide">{category}</p>
                                <span
                                    className={`ml-auto inline-flex items-center rounded-full border px-2.5 py-1 text-[0.62rem] font-extrabold ${categoryStyle[category]?.badge || 'bg-white/20 text-white border-white/30'}`}
                                >
                                    {categoryRows.length} items
                                </span>
                            </div>
                            <div className="overflow-x-auto bg-white">
                                <table className="w-full min-w-[660px] border-collapse text-left text-sm">
                                    <thead>
                                        <tr>
                                            <th
                                                className={`border px-4 py-3 font-extrabold ${categoryStyle[category]?.th || 'bg-slate-900 text-slate-50 border-slate-700'}`}
                                            >
                                                Device name
                                            </th>
                                            <th
                                                className={`border px-4 py-3 font-extrabold ${categoryStyle[category]?.th || 'bg-slate-900 text-slate-50 border-slate-700'}`}
                                            >
                                                What it does
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoryRows.map((row, idx) => (
                                            <tr
                                                key={`${category}-${row.device}-${idx}`}
                                                className={
                                                    idx % 2 === 0
                                                        ? 'bg-white'
                                                        : categoryStyle[category]?.zebra || 'bg-slate-50/60'
                                                }
                                            >
                                                <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">
                                                    {row.device}
                                                </td>
                                                <td className="border border-slate-200 px-4 py-3 leading-relaxed text-slate-700">
                                                    {row.function}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-6">
                    <h2 className="text-lg font-extrabold text-emerald-950 md:text-xl">Why we need output devices</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-800">
                        {(content.whyOutputDevices || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-6">
                    <h2 className="text-lg font-extrabold text-amber-950 md:text-xl">How output devices work</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-800">
                        {(content.howOutputDevicesWork || []).map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="rounded-2xl border-2 border-sky-300 bg-white p-1 shadow-md">
                <Link
                    to={`${outputDevicesBase}/printer`}
                    className="flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-4 text-left text-white transition hover:opacity-95"
                >
                    <span className="font-nunito text-base font-extrabold md:text-lg">
                        Output devices — explore each one
                    </span>
                    <ChevronRight className="h-6 w-6 shrink-0" aria-hidden />
                </Link>
                <p className="px-4 pb-4 pt-3 text-sm text-slate-600 md:px-5">
                    Opens the <strong className="text-slate-800">Printer</strong> lesson first. Use the sidebar list
                    under Parts of Computer-2 to open scanner, monitor, projector, speakers, ear buds, or headset &
                    microphone.
                </p>
            </section>
        </div>
    );
}
