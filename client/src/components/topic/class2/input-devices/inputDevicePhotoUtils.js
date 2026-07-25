/** Find gallery item by exact title (Class 2 input device lessons). */
export function photoByTitle(items, title) {
    if (!items?.length) return undefined;
    return items.find((p) => p.title === title);
}
