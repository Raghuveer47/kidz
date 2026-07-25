import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const themes = {
    privacy: {
        mesh: 'from-sky-200/80 via-indigo-100/90 to-violet-100/80',
        blobA: 'bg-sky-400/25',
        blobB: 'bg-fuchsia-400/20',
        cardBorder: 'border-sky-300',
        cardShadow: 'shadow-[10px_10px_0_rgba(14,165,233,0.2)]',
        pill: 'border-sky-400 bg-sky-50 text-sky-900',
        h1: 'from-sky-600 to-indigo-600',
        h2Bar: 'border-sky-400 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-900',
        link: '[&_a]:font-bold [&_a]:text-sky-600 [&_a]:underline [&_a]:decoration-2 [&_a]:decoration-sky-300 [&_a]:underline-offset-2 hover:[&_a]:bg-sky-100 hover:[&_a]:text-sky-800 [&_a]:rounded [&_a]:px-0.5',
    },
    cookies: {
        mesh: 'from-amber-100/90 via-orange-50 to-rose-50/90',
        blobA: 'bg-amber-400/30',
        blobB: 'bg-orange-300/25',
        cardBorder: 'border-amber-300',
        cardShadow: 'shadow-[10px_10px_0_rgba(251,191,36,0.25)]',
        pill: 'border-amber-400 bg-amber-50 text-amber-950',
        h1: 'from-amber-600 to-orange-600',
        h2Bar: 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-950',
        link: '[&_a]:font-bold [&_a]:text-amber-700 [&_a]:underline [&_a]:decoration-2 [&_a]:decoration-amber-300 [&_a]:underline-offset-2 hover:[&_a]:bg-amber-100 hover:[&_a]:text-amber-900 [&_a]:rounded [&_a]:px-0.5',
    },
    terms: {
        mesh: 'from-violet-100/90 via-fuchsia-50 to-sky-50/80',
        blobA: 'bg-violet-400/25',
        blobB: 'bg-cyan-300/20',
        cardBorder: 'border-violet-300',
        cardShadow: 'shadow-[10px_10px_0_rgba(167,139,250,0.25)]',
        pill: 'border-violet-400 bg-violet-50 text-violet-950',
        h1: 'from-violet-600 to-fuchsia-600',
        h2Bar: 'border-violet-400 bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-950',
        link: '[&_a]:font-bold [&_a]:text-violet-700 [&_a]:underline [&_a]:decoration-2 [&_a]:decoration-violet-300 [&_a]:underline-offset-2 hover:[&_a]:bg-violet-100 hover:[&_a]:text-violet-900 [&_a]:rounded [&_a]:px-0.5',
    },
};

const LEGAL_NAV = [
    { to: '/privacy', label: 'Privacy', labelMd: 'Privacy Policy' },
    { to: '/cookies', label: 'Cookies', labelMd: 'Cookie Policy' },
    { to: '/terms', label: 'Terms', labelMd: 'Terms & Conditions' },
];

const navActiveClass = {
    '/privacy': 'border-sky-500 bg-sky-500 text-white shadow-md ring-2 ring-sky-200',
    '/cookies': 'border-amber-500 bg-amber-500 text-white shadow-md ring-2 ring-amber-200',
    '/terms': 'border-violet-600 bg-violet-600 text-white shadow-md ring-2 ring-violet-200',
};

const navInactiveClass =
    'border-slate-200/90 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]';

/**
 * @param {'privacy'|'cookies'|'terms'} variant
 */
const LegalPageLayout = ({ title, children, variant = 'privacy', emoji = '📋', kidLine }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = themes[variant] || themes.privacy;

    return (
        <div
            className={`font-nunito relative min-h-screen overflow-x-hidden pb-20 pt-20 sm:pb-24 sm:pt-24 md:pt-28 ${t.mesh} bg-gradient-to-br`}
        >
            <div className={`pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full blur-3xl ${t.blobA}`} />
            <div className={`pointer-events-none absolute -right-20 bottom-32 h-72 w-72 rounded-full blur-3xl ${t.blobB}`} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.12]" />

            <div className="relative z-10 mx-auto w-full max-w-4xl px-3 sm:px-6 lg:max-w-5xl lg:px-8">
                <Link
                    to="/"
                    className={`mb-5 inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-extrabold transition-all hover:-translate-x-0.5 hover:shadow-md sm:mb-8 ${t.pill}`}
                >
                    <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
                    Back to fun home
                </Link>

                <div
                    className={`rounded-3xl border-4 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:rounded-[2rem] sm:p-8 md:p-10 ${t.cardBorder} ${t.cardShadow}`}
                >
                    <header className="mb-6 text-center sm:mb-8 sm:text-left">
                        <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                            <span
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-white to-slate-50 text-3xl shadow-lg ring-2 ring-black/5 sm:h-16 sm:w-16 sm:text-4xl"
                                aria-hidden
                            >
                                {emoji}
                            </span>
                            <div className="min-w-0 flex-1">
                                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-slate-600 sm:text-xs">
                                    <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                                    For kids &amp; grown-ups
                                </div>
                                <h1
                                    className={`bg-gradient-to-r bg-clip-text text-[1.65rem] font-black leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.5rem] ${t.h1}`}
                                >
                                    {title}
                                </h1>
                                {kidLine ? (
                                    <p className="mt-2 text-[0.95rem] font-bold leading-snug text-slate-600 sm:text-lg">
                                        {kidLine}
                                    </p>
                                ) : null}
                                <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-500 sm:justify-start sm:text-sm">
                                    <span className="rounded-full bg-slate-100 px-3 py-1">kidscodingai.com</span>
                                    <span className="hidden text-slate-400 sm:inline">·</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 sm:bg-transparent sm:px-0">
                                        Last updated: March 21, 2026
                                    </span>
                                </p>
                            </div>
                        </div>
                    </header>

                    <nav
                        className="mb-8 border-t border-slate-200/90 pt-6"
                        aria-label="Legal pages on this site"
                    >
                        <p className="mb-3 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 sm:mb-4 sm:text-left sm:text-xs">
                            Jump to another page
                        </p>
                        <ul className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-3 sm:gap-3">
                            {LEGAL_NAV.map((item) => {
                                const isActive = location.pathname === item.to;
                                return (
                                    <li key={item.to} className="min-w-0">
                                        <Link
                                            to={item.to}
                                            className={`flex min-h-[48px] w-full items-center justify-center rounded-2xl border-2 px-3 py-3 text-center text-sm font-extrabold leading-tight transition-all sm:min-h-[52px] sm:px-4 sm:text-base ${
                                                isActive ? navActiveClass[item.to] : navInactiveClass
                                            }`}
                                            aria-current={isActive ? 'page' : undefined}
                                            title={item.labelMd}
                                        >
                                            <span className="min-[400px]:hidden">{item.label}</span>
                                            <span className="hidden min-[400px]:inline">{item.labelMd}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <article
                        className={`space-y-6 text-base font-medium leading-relaxed text-slate-700 ${t.link} [&>p:first-of-type]:text-lg [&>p:first-of-type]:font-semibold [&>p:first-of-type]:leading-relaxed [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:rounded-2xl [&_h2]:border-2 [&_h2]:py-3 [&_h2]:pl-3 [&_h2]:pr-4 [&_h2]:text-base [&_h2]:font-black [&_h2]:leading-tight [&_h2]:sm:text-lg [&_h2]:md:text-xl [&_h2]:first:mt-0 ${t.h2Bar} [&_li]:marker:text-slate-400 [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:sm:pl-6 [&_ul]:marker:text-lg`}
                    >
                        {children}
                    </article>
                </div>
            </div>
        </div>
    );
};

export default LegalPageLayout;
