import React, { useMemo } from 'react';
import { LessonPointList } from '../class2/input-devices/inputDevicesLessonUi';
import { formatLessonParagraph } from './lessonTextFormat';

const POINT_LINE = /^[•●○\-–]\s+/;

/** Split body text into prose and numbered point lines (lines starting with • etc.). */
function parseBodyIntoParts(rawBody) {
    const paragraphs = [];
    const points = [];
    let pointsHeading = null;
    const parts = rawBody.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

    for (const part of parts) {
        const lines = part.split('\n').map((l) => l.trim()).filter(Boolean);
        const pointLines = lines.filter((l) => POINT_LINE.test(l));
        const otherLines = lines.filter((l) => !POINT_LINE.test(l));

        if (pointLines.length > 0) {
            if (otherLines.length === 1 && /:\s*$/.test(otherLines[0])) {
                pointsHeading = pointsHeading || otherLines[0].replace(/:\s*$/, '');
            } else if (otherLines.length > 0) {
                paragraphs.push(otherLines.join('\n'));
            }
            points.push(...pointLines.map((l) => l.replace(POINT_LINE, '')));
        } else if (lines.length === 1 && /:\s*$/.test(lines[0])) {
            pointsHeading = pointsHeading || lines[0].replace(/:\s*$/, '');
        } else {
            paragraphs.push(part);
        }
    }

    return { paragraphs, points, pointsHeading };
}

function normalizeSection(section) {
    let points = [...(section.points ?? section.bullets ?? [])];
    let paragraphs = section.paragraphs ?? [];
    let body = section.body ?? '';
    let pointsHeading = section.pointsHeading ?? section.bulletsHeading ?? null;

    if (paragraphs.length === 0 && body) {
        const parsed = parseBodyIntoParts(body);
        if (parsed.points.length > 0) {
            points = [...parsed.points, ...points];
            pointsHeading = pointsHeading || parsed.pointsHeading;
        }
        if (parsed.paragraphs.length > 1) {
            paragraphs = parsed.paragraphs;
            body = '';
        } else if (parsed.paragraphs.length === 1) {
            body = parsed.paragraphs[0];
        } else if (parsed.paragraphs.length === 0) {
            body = '';
        }
    } else if (paragraphs.length === 0 && body && points.length === 0) {
        const parts = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
        if (parts.length > 1) {
            paragraphs = parts;
            body = '';
        }
    }

    return { ...section, body, paragraphs, points, pointsHeading };
}

/**
 * Image + lesson text. Default: image floats left on large screens; text wraps beside it
 * then continues full width below the image.
 * textPosition="below" = full-width image, all text underneath.
 */
export default function ImageBesideSection({
    section,
    imageMaxHeight = 'min(70vh,560px)',
    imageColumnWidth = 'min(100%,520px)',
    textPosition = 'beside',
    belowContent = null,
    pointsHeading = null,
    /** @deprecated Use pointsHeading */
    bulletsHeading = null,
    pointMarkerClass = 'text-indigo-600',
    bulletMarkerClass,
    textClassName = 'text-justify text-base leading-relaxed text-slate-700 md:text-lg [&_li]:text-justify',
    wrapClassName = 'p-4 md:p-5',
    imageFrameClassName = 'max-w-xl',
}) {
    const normalized = useMemo(() => normalizeSection(section), [section]);
    const { body, paragraphs, points, pointsHeading: sectionPointsHeading } = normalized;
    const resolvedPointsHeading = pointsHeading ?? bulletsHeading ?? sectionPointsHeading ?? null;
    const markerTone = bulletMarkerClass?.includes('fuchsia')
        ? 'text-fuchsia-600'
        : bulletMarkerClass?.includes('blue')
          ? 'text-blue-600'
          : pointMarkerClass;

    const textBelowImage = textPosition === 'below';
    const textTone = textClassName;

    const renderParagraphs = (items) =>
        items.map((text, i) => (
            <p key={i} className="w-full text-justify text-slate-800 md:leading-relaxed">
                {formatLessonParagraph(text)}
            </p>
        ));

    const renderBodyText = (text) => {
        if (!text) return null;
        const parts = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
        if (parts.length <= 1) {
            return (
                <p className="w-full whitespace-pre-line text-justify text-slate-800 md:leading-relaxed">
                    {formatLessonParagraph(text)}
                </p>
            );
        }
        return (
            <div className="space-y-3">
                {parts.map((part, i) => (
                    <p key={i} className="w-full text-justify text-slate-800 md:leading-relaxed">
                        {formatLessonParagraph(part)}
                    </p>
                ))}
            </div>
        );
    };

    const renderTextBlock = () => (
        <div className={`min-w-0 space-y-3 ${textTone}`}>
            {body ? renderBodyText(body) : null}
            {points.length > 0 ? (
                <div>
                    {resolvedPointsHeading ? (
                        <p className="mb-2 text-justify font-extrabold text-slate-900">
                            {resolvedPointsHeading}
                        </p>
                    ) : null}
                    <LessonPointList items={points} markerClass={markerTone} />
                </div>
            ) : null}
            {paragraphs.length > 0 ? renderParagraphs(paragraphs) : null}
            {belowContent}
        </div>
    );

    const imageBlock = (
        <div
            className={
                textBelowImage
                    ? 'mx-auto mb-4 flex w-full justify-center'
                    : 'mx-auto mb-4 flex w-full justify-center lg:float-left lg:mb-3 lg:mr-6 lg:shrink-0'
            }
            style={{ width: '100%', maxWidth: imageColumnWidth }}
        >
            <div
                className={[
                    'flex w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white p-3 shadow-inner md:p-4',
                    imageFrameClassName,
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                <img
                    src={section.image}
                    alt={section.subtitle || 'Lesson illustration'}
                    className={[
                        'h-auto w-full max-w-full object-contain',
                        textBelowImage ? 'mx-auto' : '',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    style={{
                        maxHeight: imageMaxHeight,
                        minHeight: textBelowImage ? 'min(360px, 55vw)' : 'min(280px, 45vw)',
                        width: '100%',
                    }}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
    );

    if (textBelowImage) {
        return (
            <div className={['relative', wrapClassName].filter(Boolean).join(' ')}>
                <div className="flex flex-col gap-4 md:gap-6">
                    {imageBlock}
                    {renderTextBlock()}
                </div>
            </div>
        );
    }

    return (
        <div className={['relative', wrapClassName].filter(Boolean).join(' ')}>
            {imageBlock}
            {renderTextBlock()}
            <div className="clear-both" aria-hidden />
        </div>
    );
}
