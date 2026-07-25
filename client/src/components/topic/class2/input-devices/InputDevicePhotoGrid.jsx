import React from 'react';

const PLAYFUL_RING = [
    'ring-2 ring-sky-400/80 border-sky-300',
    'ring-2 ring-violet-400/80 border-violet-300',
    'ring-2 ring-amber-400/80 border-amber-300',
    'ring-2 ring-rose-400/80 border-rose-300',
    'ring-2 ring-emerald-400/80 border-emerald-300',
    'ring-2 ring-fuchsia-400/80 border-fuchsia-300',
];

/**
 * @param {{
 *   items: { src: string; title: string; caption: string }[];
 *   variant?: 'default' | 'playful';
 * }} props
 */
export default function InputDevicePhotoGrid({ items, variant = 'default' }) {
    if (!items?.length) return null;

    const playful = variant === 'playful';

    return (
        <div
            className={
                playful
                    ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid grid-cols-1 gap-4 sm:grid-cols-2'
            }
        >
            {items.map((item, idx) => {
                const ring = PLAYFUL_RING[idx % PLAYFUL_RING.length];
                return (
                    <figure
                        key={`${item.title}-${idx}`}
                        className={
                            playful
                                ? `group overflow-hidden rounded-3xl border-4 border-white bg-white ${ring} shadow-[0_12px_40px_-12px_rgba(79,70,229,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-12px_rgba(79,70,229,0.45)]`
                                : 'overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/80 shadow-sm'
                        }
                    >
                        <div
                            className={
                                playful
                                    ? 'relative flex h-40 items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4 sm:h-44'
                                    : 'flex h-44 items-center justify-center bg-white p-3 sm:h-52'
                            }
                        >
                            {playful && (
                                <span
                                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-amber-950 shadow-sm"
                                    aria-hidden
                                >
                                    {idx + 1}
                                </span>
                            )}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="max-h-full max-w-full object-contain drop-shadow-sm transition duration-300 group-hover:scale-[1.03]"
                                loading="lazy"
                            />
                        </div>
                        <figcaption
                            className={
                                playful
                                    ? 'border-t-2 border-dashed border-indigo-200/80 bg-gradient-to-r from-indigo-50/90 via-white to-violet-50/80 px-4 py-3.5'
                                    : 'border-t border-slate-100 px-4 py-3'
                            }
                        >
                            <p
                                className={
                                    playful
                                        ? 'font-extrabold text-indigo-950'
                                        : 'font-extrabold text-slate-900'
                                }
                            >
                                {item.title}
                            </p>
                            <p
                                className={
                                    playful
                                        ? 'mt-1.5 text-sm font-semibold leading-relaxed text-slate-600'
                                        : 'mt-1 text-sm leading-relaxed text-slate-600'
                                }
                            >
                                {item.caption}
                            </p>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
}
