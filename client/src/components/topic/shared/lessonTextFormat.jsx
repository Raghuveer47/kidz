import React from 'react';

/**
 * Leading labels in kid lesson copy (Step 1:, Part 2 —, DRAW:, 1. Clipboard —, Tip:, etc.)
 */
const LEAD_LABEL =
    /^(?:(?:Step|Part) \d+\s*[:\-—](?:\s*[A-Z]+)?\s*:?\s*|(?:Step|Part) \d+\s*[:\-—]\s*|\d+\.\s+[^—\n]+[—–-]\s*|Tip:\s*|Remember:\s*|How to use them:\s*|Why use shapes\?\s*|[A-Z]{2,}(?:\s+[A-Z]+)*:\s*)/;

/** Bold the step/part/tool label at the start of a paragraph when present. */
export function formatLessonParagraph(text) {
    if (!text || typeof text !== 'string') return text;

    const match = text.match(LEAD_LABEL);
    if (!match) return text;

    const lead = match[0];
    const rest = text.slice(lead.length);

    return (
        <>
            <strong className="font-bold text-slate-900">{lead}</strong>
            {rest}
        </>
    );
}
