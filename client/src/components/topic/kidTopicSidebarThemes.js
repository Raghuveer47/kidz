/**
 * Visual themes for KidTopicSidebar — one palette per class (matches CoursesOverview family colors).
 * Each theme: panel dots, shell border, greeting card, pill, topic rows, icon chips.
 */
export const kidTopicSidebarThemes = {
    '1': {
        style: {
            backgroundColor: '#f0f9ff',
            backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.18) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-sky-200/80 border-r-[6px] border-r-cyan-400 shadow-[8px_12px_32px_-8px_rgba(37,99,235,0.18)]',
        greetingCard:
            'bg-indigo-50 border-2 border-indigo-300/90 shadow-[0_6px_20px_-6px_rgba(79,70,229,0.2)]',
        avatarRing: 'ring-indigo-200/80',
        avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
        titleGradient: 'from-blue-700 to-cyan-600',
        pill: 'bg-amber-100 border-2 border-amber-400/90 text-amber-900',
        sectionLabel: 'text-sky-600',
        linkIdle:
            'bg-sky-100 border-2 border-blue-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-sky-200/80 hover:border-blue-400/80',
        linkActive: 'bg-violet-100 border-2 border-violet-400 shadow-[0_4px_14px_-4px_rgba(139,92,246,0.35)]',
        iconIdle: 'bg-indigo-100/90 border-2 border-indigo-300',
        iconActive: 'bg-cyan-100 border-2 border-cyan-500',
        textActive: 'text-blue-900',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(14, 165, 233, 0.55)',
            thumbHover: 'rgba(2, 132, 199, 0.9)',
            track: 'rgba(14, 165, 233, 0.12)',
        },
    },
    '2': {
        style: {
            backgroundColor: '#faf5ff',
            backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-purple-200/80 border-r-[6px] border-r-fuchsia-400 shadow-[8px_12px_32px_-8px_rgba(126,34,206,0.18)]',
        greetingCard:
            'bg-violet-50 border-2 border-violet-400/85 shadow-[0_6px_20px_-6px_rgba(139,92,246,0.22)]',
        avatarRing: 'ring-violet-200/90',
        avatarBg: 'bg-gradient-to-br from-violet-600 to-fuchsia-500',
        titleGradient: 'from-violet-700 to-fuchsia-600',
        pill: 'bg-lime-100 border-2 border-lime-500/80 text-lime-900',
        sectionLabel: 'text-purple-600',
        linkIdle:
            'bg-purple-100 border-2 border-purple-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-purple-200/70 hover:border-purple-400/80',
        linkActive: 'bg-fuchsia-100 border-2 border-fuchsia-500 shadow-[0_4px_14px_-4px_rgba(192,38,211,0.35)]',
        iconIdle: 'bg-violet-100/90 border-2 border-violet-400',
        iconActive: 'bg-pink-100 border-2 border-pink-500',
        textActive: 'text-violet-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(168, 85, 247, 0.55)',
            thumbHover: 'rgba(147, 51, 234, 0.9)',
            track: 'rgba(168, 85, 247, 0.12)',
        },
    },
    '3': {
        style: {
            backgroundColor: '#ecfdf5',
            backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-emerald-200/80 border-r-[6px] border-r-teal-400 shadow-[8px_12px_32px_-8px_rgba(5,150,105,0.18)]',
        greetingCard:
            'bg-teal-50 border-2 border-teal-400/85 shadow-[0_6px_20px_-6px_rgba(20,184,166,0.22)]',
        avatarRing: 'ring-teal-200/90',
        avatarBg: 'bg-gradient-to-br from-emerald-600 to-teal-500',
        titleGradient: 'from-emerald-700 to-teal-600',
        pill: 'bg-amber-100 border-2 border-amber-400/90 text-amber-950',
        sectionLabel: 'text-emerald-600',
        linkIdle:
            'bg-emerald-100 border-2 border-emerald-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-emerald-200/70 hover:border-emerald-400/80',
        linkActive: 'bg-lime-100 border-2 border-lime-500 shadow-[0_4px_14px_-4px_rgba(132,204,22,0.35)]',
        iconIdle: 'bg-teal-100/90 border-2 border-teal-400',
        iconActive: 'bg-cyan-100 border-2 border-cyan-500',
        textActive: 'text-emerald-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(20, 184, 166, 0.55)',
            thumbHover: 'rgba(13, 148, 136, 0.9)',
            track: 'rgba(20, 184, 166, 0.12)',
        },
        /** Taller panel for expanded topic trees (Windows OS-1, MS Paint-1, etc.). */
        panelHeight: 'h-[300vh] max-h-[640vh]',
    },
    '4': {
        style: {
            backgroundColor: '#fffbeb',
            backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.22) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-amber-200/80 border-r-[6px] border-r-orange-400 shadow-[8px_12px_32px_-8px_rgba(217,119,6,0.2)]',
        greetingCard:
            'bg-orange-50 border-2 border-orange-400/85 shadow-[0_6px_20px_-6px_rgba(249,115,22,0.22)]',
        avatarRing: 'ring-orange-200/90',
        avatarBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
        titleGradient: 'from-amber-800 to-orange-700',
        pill: 'bg-sky-100 border-2 border-sky-400/90 text-sky-950',
        sectionLabel: 'text-amber-700',
        linkIdle:
            'bg-amber-100 border-2 border-amber-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-amber-200/70 hover:border-amber-400/80',
        linkActive: 'bg-orange-100 border-2 border-orange-500 shadow-[0_4px_14px_-4px_rgba(234,88,12,0.35)]',
        iconIdle: 'bg-yellow-100/90 border-2 border-yellow-400',
        iconActive: 'bg-rose-100 border-2 border-rose-500',
        textActive: 'text-amber-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(245, 158, 11, 0.58)',
            thumbHover: 'rgba(234, 88, 12, 0.9)',
            track: 'rgba(245, 158, 11, 0.14)',
        },
        /** Taller panel for MS Word-1, MS Paint-2, Windows OS-2 sub-lessons. */
        panelHeight: 'h-[320vh] max-h-[680vh]',
    },
    '5': {
        style: {
            backgroundColor: '#fdf2f8',
            backgroundImage: 'radial-gradient(rgba(236, 72, 153, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-pink-200/80 border-r-[6px] border-r-rose-400 shadow-[8px_12px_32px_-8px_rgba(219,39,119,0.18)]',
        greetingCard:
            'bg-pink-50 border-2 border-pink-400/85 shadow-[0_6px_20px_-6px_rgba(236,72,153,0.22)]',
        avatarRing: 'ring-pink-200/90',
        avatarBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
        titleGradient: 'from-pink-700 to-rose-600',
        pill: 'bg-violet-100 border-2 border-violet-400/90 text-violet-950',
        sectionLabel: 'text-pink-600',
        linkIdle:
            'bg-pink-100 border-2 border-pink-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-pink-200/70 hover:border-pink-400/80',
        linkActive: 'bg-fuchsia-100 border-2 border-fuchsia-500 shadow-[0_4px_14px_-4px_rgba(192,38,211,0.35)]',
        iconIdle: 'bg-rose-100/90 border-2 border-rose-400',
        iconActive: 'bg-purple-100 border-2 border-purple-500',
        textActive: 'text-pink-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(236, 72, 153, 0.55)',
            thumbHover: 'rgba(219, 39, 119, 0.9)',
            track: 'rgba(236, 72, 153, 0.12)',
        },
    },
    '6': {
        style: {
            backgroundColor: '#ecfeff',
            backgroundImage: 'radial-gradient(rgba(6, 182, 212, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-cyan-200/80 border-r-[6px] border-r-sky-400 shadow-[8px_12px_32px_-8px_rgba(8,145,178,0.18)]',
        greetingCard:
            'bg-sky-50 border-2 border-sky-400/85 shadow-[0_6px_20px_-6px_rgba(14,165,233,0.22)]',
        avatarRing: 'ring-sky-200/90',
        avatarBg: 'bg-gradient-to-br from-cyan-500 to-sky-600',
        titleGradient: 'from-cyan-700 to-sky-700',
        pill: 'bg-amber-100 border-2 border-amber-400/90 text-amber-950',
        sectionLabel: 'text-cyan-700',
        linkIdle:
            'bg-cyan-100 border-2 border-cyan-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-cyan-200/70 hover:border-cyan-400/80',
        linkActive: 'bg-blue-100 border-2 border-blue-500 shadow-[0_4px_14px_-4px_rgba(59,130,246,0.35)]',
        iconIdle: 'bg-sky-100/90 border-2 border-sky-400',
        iconActive: 'bg-indigo-100 border-2 border-indigo-500',
        textActive: 'text-cyan-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(6, 182, 212, 0.55)',
            thumbHover: 'rgba(2, 132, 199, 0.9)',
            track: 'rgba(6, 182, 212, 0.12)',
        },
    },
    '7': {
        style: {
            backgroundColor: '#eef2ff',
            backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-indigo-200/80 border-r-[6px] border-r-violet-400 shadow-[8px_12px_32px_-8px_rgba(79,70,229,0.18)]',
        greetingCard:
            'bg-indigo-50 border-2 border-indigo-400/85 shadow-[0_6px_20px_-6px_rgba(99,102,241,0.22)]',
        avatarRing: 'ring-indigo-200/90',
        avatarBg: 'bg-gradient-to-br from-indigo-600 to-violet-600',
        titleGradient: 'from-indigo-800 to-violet-700',
        pill: 'bg-emerald-100 border-2 border-emerald-400/90 text-emerald-950',
        sectionLabel: 'text-indigo-600',
        linkIdle:
            'bg-indigo-100 border-2 border-indigo-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-indigo-200/70 hover:border-indigo-400/80',
        linkActive: 'bg-violet-100 border-2 border-violet-500 shadow-[0_4px_14px_-4px_rgba(124,58,237,0.35)]',
        iconIdle: 'bg-violet-100/90 border-2 border-violet-400',
        iconActive: 'bg-fuchsia-100 border-2 border-fuchsia-500',
        textActive: 'text-indigo-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(99, 102, 241, 0.55)',
            thumbHover: 'rgba(79, 70, 229, 0.9)',
            track: 'rgba(99, 102, 241, 0.12)',
        },
    },
    '8': {
        style: {
            backgroundColor: '#fff1f2',
            backgroundImage: 'radial-gradient(rgba(244, 63, 94, 0.18) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-rose-200/80 border-r-[6px] border-r-pink-400 shadow-[8px_12px_32px_-8px_rgba(225,29,72,0.16)]',
        greetingCard:
            'bg-rose-50 border-2 border-rose-400/85 shadow-[0_6px_20px_-6px_rgba(244,63,94,0.2)]',
        avatarRing: 'ring-rose-200/90',
        avatarBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
        titleGradient: 'from-rose-800 to-pink-700',
        pill: 'bg-amber-100 border-2 border-amber-400/90 text-amber-950',
        sectionLabel: 'text-rose-600',
        linkIdle:
            'bg-rose-100 border-2 border-rose-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-rose-200/70 hover:border-rose-400/80',
        linkActive: 'bg-pink-100 border-2 border-pink-500 shadow-[0_4px_14px_-4px_rgba(219,39,119,0.35)]',
        iconIdle: 'bg-pink-100/90 border-2 border-pink-400',
        iconActive: 'bg-orange-100 border-2 border-orange-500',
        textActive: 'text-rose-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(244, 63, 94, 0.55)',
            thumbHover: 'rgba(225, 29, 72, 0.9)',
            track: 'rgba(244, 63, 94, 0.12)',
        },
    },
    '9': {
        style: {
            backgroundColor: '#f0fdfa',
            backgroundImage: 'radial-gradient(rgba(20, 184, 166, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-teal-200/80 border-r-[6px] border-r-emerald-400 shadow-[8px_12px_32px_-8px_rgba(15,118,110,0.18)]',
        greetingCard:
            'bg-teal-50 border-2 border-teal-400/85 shadow-[0_6px_20px_-6px_rgba(20,184,166,0.22)]',
        avatarRing: 'ring-teal-200/90',
        avatarBg: 'bg-gradient-to-br from-teal-600 to-emerald-600',
        titleGradient: 'from-teal-800 to-emerald-700',
        pill: 'bg-yellow-100 border-2 border-yellow-500/80 text-yellow-950',
        sectionLabel: 'text-teal-700',
        linkIdle:
            'bg-teal-100 border-2 border-teal-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-teal-200/70 hover:border-teal-400/80',
        linkActive: 'bg-emerald-100 border-2 border-emerald-500 shadow-[0_4px_14px_-4px_rgba(16,185,129,0.35)]',
        iconIdle: 'bg-emerald-100/90 border-2 border-emerald-400',
        iconActive: 'bg-lime-100 border-2 border-lime-500',
        textActive: 'text-teal-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(20, 184, 166, 0.55)',
            thumbHover: 'rgba(15, 118, 110, 0.9)',
            track: 'rgba(20, 184, 166, 0.12)',
        },
    },
    '10': {
        style: {
            backgroundColor: '#fdf4ff',
            backgroundImage: 'radial-gradient(rgba(217, 70, 239, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
        },
        shell: 'border-fuchsia-200/80 border-r-[6px] border-r-purple-400 shadow-[8px_12px_32px_-8px_rgba(162,28,175,0.18)]',
        greetingCard:
            'bg-fuchsia-50 border-2 border-fuchsia-400/85 shadow-[0_6px_20px_-6px_rgba(217,70,239,0.22)]',
        avatarRing: 'ring-fuchsia-200/90',
        avatarBg: 'bg-gradient-to-br from-fuchsia-600 to-purple-600',
        titleGradient: 'from-fuchsia-800 to-purple-700',
        pill: 'bg-cyan-100 border-2 border-cyan-400/90 text-cyan-950',
        sectionLabel: 'text-fuchsia-700',
        linkIdle:
            'bg-fuchsia-100 border-2 border-fuchsia-300/90 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.08)] hover:bg-fuchsia-200/70 hover:border-fuchsia-400/80',
        linkActive: 'bg-purple-100 border-2 border-purple-500 shadow-[0_4px_14px_-4px_rgba(147,51,234,0.35)]',
        iconIdle: 'bg-purple-100/90 border-2 border-purple-400',
        iconActive: 'bg-pink-100 border-2 border-pink-500',
        textActive: 'text-fuchsia-950',
        textIdle: 'text-slate-700 group-hover:text-slate-900',
        scrollbar: {
            thumb: 'rgba(192, 38, 211, 0.55)',
            thumbHover: 'rgba(147, 51, 234, 0.9)',
            track: 'rgba(192, 38, 211, 0.12)',
        },
    },
};

const DEFAULT_PANEL_HEIGHT = 'h-[160vh] max-h-[400vh]';

export function getKidTopicSidebarTheme(classId) {
    const key = String(classId);
    const theme = kidTopicSidebarThemes[key] || kidTopicSidebarThemes['1'];
    return {
        ...theme,
        panelHeight: theme.panelHeight ?? DEFAULT_PANEL_HEIGHT,
        scrollbar: theme.scrollbar ?? kidTopicSidebarThemes['1'].scrollbar,
    };
}
