/**
 * Local images for Class 3 — Parts of Computer-2 (output devices).
 * Files live under assets/images/class3/output-devices/
 */

const dotmatrixPrinter = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133431/kidscodingai/assets/images/class3/output-devices/dotmatrix-printer.jpg';
const earBuds = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133431/kidscodingai/assets/images/class3/output-devices/ear-buds.jpg';
const inkjetPrinter = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133432/kidscodingai/assets/images/class3/output-devices/inkjet-printer.jpg';
const laserPrinter = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133432/kidscodingai/assets/images/class3/output-devices/laser-printer.jpg';
const ledMonitor = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133433/kidscodingai/assets/images/class3/output-devices/led-monitor.jpg';
const miniProjector = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133433/kidscodingai/assets/images/class3/output-devices/mini-projector.jpg';
const overEarMicrophone = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133433/kidscodingai/assets/images/class3/output-devices/over-ear-microphone.jpg';
const projectorImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133433/kidscodingai/assets/images/class3/output-devices/projector.jpg';
const soundbarSpeakers = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133434/kidscodingai/assets/images/class3/output-devices/soundbar-speakers.jpg';
const towerSpeakers = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133435/kidscodingai/assets/images/class3/output-devices/tower-speakers.jpg';

/**
 * @typedef {{ src: string; title: string; caption: string }} OutputDeviceImageItem
 */

/** @type {Record<string, OutputDeviceImageItem[]>} */
export const PARTS_OF_COMPUTER_OUTPUT_GALLERIES = {
    printer: [
        {
            src: laserPrinter,
            title: 'Laser printer',
            caption: 'Uses toner and a laser beam to make sharp text—great for lots of school worksheets.',
        },
        {
            src: inkjetPrinter,
            title: 'Inkjet printer',
            caption: 'Sprays tiny drops of ink onto paper—common at home for photos and colorful pages.',
        },
        {
            src: dotmatrixPrinter,
            title: 'Dot matrix printer',
            caption: 'Prints patterns of small dots with a ribbon; older style but tough for simple forms and copies.',
        },
    ],
    /** No scanner photos in output-devices folder — lesson text only on the device page. */
    scanner: [],
    'speakers-headphones': [
        {
            src: towerSpeakers,
            title: 'Tower speakers',
            caption: 'Stand-up speakers that fill a room with music, games, and video sound.',
        },
        {
            src: soundbarSpeakers,
            title: 'Soundbar',
            caption: 'A long slim speaker that often sits under the TV or monitor for clear movie sound.',
        },
    ],
    'ear-buds': [
        {
            src: earBuds,
            title: 'Earbuds',
            caption: 'Tiny speakers you tuck in your ears so only you hear the sound—great for quiet study time.',
        },
    ],
    microphone: [
        {
            src: overEarMicrophone,
            title: 'Headset with microphone',
            caption: 'Headphones plus a boom or built-in mic so you can hear and talk on calls or recordings.',
        },
    ],
    /** Extra gallery keys for more output types (optional routes / future sections). */
    monitor: [
        {
            src: ledMonitor,
            title: 'LED monitor',
            caption: 'A bright flat screen that shows everything the computer draws for your eyes.',
        },
    ],
    projector: [
        {
            src: projectorImg,
            title: 'Projector',
            caption: 'Shines a big picture onto a wall or screen so a whole class can watch together.',
        },
        {
            src: miniProjector,
            title: 'Mini projector',
            caption: 'A small projector you can move easily—still throws a large image for demos or movie night.',
        },
    ],
    'monitor-projector': [
        {
            src: ledMonitor,
            title: 'LED monitor',
            caption: 'A bright flat screen that shows everything the computer draws for your eyes.',
        },
        {
            src: projectorImg,
            title: 'Projector',
            caption: 'Shines a big picture onto a wall or screen so a whole class can watch together.',
        },
        {
            src: miniProjector,
            title: 'Mini projector',
            caption: 'A small projector you can move easily—still throws a large image for demos or movie night.',
        },
    ],
};
