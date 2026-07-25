import { Children, isValidElement } from 'react';

/** Flatten React nodes into plain text (keeps words from <strong>, etc.). */
export function extractText(node) {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (isValidElement(node)) return extractText(node.props.children);
    return '';
}

/**
 * Turn lesson JSX children (<p>, BulletList, fragments) into ImageBesideSection fields.
 */
export function contentFromChildren(children) {
    const paragraphs = [];
    const bullets = [];

    const walk = (nodes) => {
        Children.forEach(nodes, (child) => {
            if (child == null || typeof child === 'boolean') return;

            if (!isValidElement(child)) {
                const text = String(child).trim();
                if (text) paragraphs.push(text);
                return;
            }

            if (Array.isArray(child.props?.items)) {
                bullets.push(...child.props.items.filter(Boolean));
                return;
            }

            const type = child.type;
            if (type === 'p' || type === 'li') {
                const text = extractText(child.props.children).trim();
                if (text) paragraphs.push(text);
                return;
            }

            if (child.props?.children) walk(child.props.children);
        });
    };

    walk(children);

    return { body: '', paragraphs, bullets };
}

export const IMAGE_LAYOUT_PRESETS = {
    default: {
        imageMaxHeight: 'min(65vh,480px)',
        imageColumnWidth: 'min(100%,340px)',
    },
    types: {
        imageMaxHeight: 'min(56vh,480px)',
        imageColumnWidth: 'min(100%,460px)',
    },
    tall: {
        imageMaxHeight: 'min(70vh,560px)',
        imageColumnWidth: 'min(100%,400px)',
    },
};
