/**
 * Class 1 — Computer Alphabets-2 (hardware): icon URLs for each letter.
 * Uses Iconify's public API (SVG) so icons load reliably without depending on Icons8 PNG slugs.
 * https://iconify.design/docs/api/
 */

const q = (collection, icon, params = '') =>
    `https://api.iconify.design/${collection}/${icon}.svg${params ? `?${params}` : ''}`;

/** @type {readonly string[]} A → Z, same order as sections in class1.jsx computer-alphabets-2 */
export const COMPUTER_ALPHABETS_2_ICON_URLS = [
    q('game-icons', 'abacus', 'width=480&height=480'),
    q('mdi', 'battery-medium', 'width=480&height=480'),
    q('mdi', 'cpu-64-bit', 'width=480&height=480'),
    q('mdi', 'harddisk', 'width=480&height=480'),
    q('mdi', 'lightning-bolt', 'width=480&height=480'),
    q('mdi', 'usb-flash-drive', 'width=480&height=480'),
    q('mdi', 'expansion-card', 'width=480&height=480'),
    q('mdi', 'developer-board', 'width=480&height=480'),
    q('mdi', 'keyboard-outline', 'width=480&height=480'),
    q('mdi', 'headphones', 'width=480&height=480'),
    q('mdi', 'database-outline', 'width=480&height=480'),
    q('mdi', 'webcam', 'width=480&height=480'),
    q('mdi', 'microphone', 'width=480&height=480'),
    q('mdi', 'ethernet', 'width=480&height=480'),
    q('mdi', 'monitor', 'width=480&height=480'),
    q('mdi', 'power-plug', 'width=480&height=480'),
    q('mdi', 'keyboard-variant', 'width=480&height=480'),
    q('mdi', 'memory', 'width=480&height=480'),
    q('mdi', 'speaker', 'width=480&height=480'),
    q('mdi', 'trackpad', 'width=480&height=480'),
    q('mdi', 'usb', 'width=480&height=480'),
    q('mdi', 'fan', 'width=480&height=480'),
    q('mdi', 'webcam', 'width=480&height=480'),
    q('mdi', 'server', 'width=480&height=480'),
    q('mdi', 'call-split', 'width=480&height=480'),
    q('mdi', 'folder-zip-outline', 'width=480&height=480'),
];
