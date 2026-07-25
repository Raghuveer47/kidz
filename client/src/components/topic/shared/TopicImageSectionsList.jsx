import React from 'react';
import { BulletList } from '../class2/input-devices/inputDevicesLessonUi';
import ImageBesideSection from './ImageBesideSection';

const VARIANTS = {
    default: {
        card: 'rounded-2xl border border-gray-100 bg-gray-50 p-0 overflow-hidden',
        header: 'mb-0 flex items-center gap-3 bg-transparent px-5 pt-5 text-xl font-bold text-gray-800 md:text-2xl',
        badge: 'flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-primary shadow-sm',
        bodyWrap: 'bg-white',
    },
    slate: {
        card: 'overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-[0_12px_24px_-14px_rgba(15,23,42,0.35)]',
        header: 'px-5 pt-5 text-xl font-extrabold text-indigo-900 md:text-2xl md:px-6',
        badge: null,
        bodyWrap: 'bg-white',
    },
};

/**
 * Numbered sections with image + text using ImageBesideSection (overflow below image on large screens).
 */
export default function TopicImageSectionsList({ sections = [], variant = 'default', className = 'space-y-10' }) {
    const styles = VARIANTS[variant] || VARIANTS.default;
    const bulletTone =
        'text-justify text-base font-semibold leading-relaxed text-gray-700 md:text-lg [&_li]:text-justify';

    return (
        <div className={className}>
            {sections.map((section, idx) => (
                <div key={`${section.subtitle}-${idx}`} className={styles.card}>
                    <h3 className={styles.header}>
                        {styles.badge ? (
                            <div className={styles.badge}>{idx + 1}</div>
                        ) : null}
                        {section.subtitle}
                    </h3>
                    <div className={styles.bodyWrap}>
                        {section.image ? (
                            <ImageBesideSection
                                section={section}
                                imageMaxHeight="min(65vh,520px)"
                                imageColumnWidth="min(100%,42%)"
                                bulletMarkerClass="[&_ul]:marker:text-primary"
                                textClassName={bulletTone}
                            />
                        ) : (
                            <div className="p-5 md:p-7">
                                {section.body ? (
                                    <p className={`whitespace-pre-line text-justify ${bulletTone}`}>{section.body}</p>
                                ) : null}
                                {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                                    <div className={section.body ? 'mt-3 md:mt-4' : ''}>
                                        <BulletList items={section.bullets} />
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
