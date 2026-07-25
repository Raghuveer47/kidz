import KeyboardDetail from './KeyboardDetail';
import MouseDetail from './MouseDetail';
import TouchpadDetail from './TouchpadDetail';
import MicrophoneDetail from './MicrophoneDetail';
import WebcamDetail from './WebcamDetail';
import ScannerDetail from './ScannerDetail';
import JoystickGamepadDetail from './JoystickGamepadDetail';
import StylusPenDetail from './StylusPenDetail';
import BarcodeReaderDetail from './BarcodeReaderDetail';

/** Maps URL slug → detail component (Class 2 input devices). */
export const INPUT_DEVICE_DETAIL_BY_SLUG = {
    keyboard: KeyboardDetail,
    mouse: MouseDetail,
    touchpad: TouchpadDetail,
    microphone: MicrophoneDetail,
    webcam: WebcamDetail,
    scanner: ScannerDetail,
    'joystick-gamepad': JoystickGamepadDetail,
    'stylus-pen': StylusPenDetail,
    'barcode-reader': BarcodeReaderDetail,
};

export const INPUT_DEVICE_SLUG_LABEL = {
    keyboard: 'Keyboard',
    mouse: 'Mouse',
    touchpad: 'Touchpad',
    microphone: 'Microphone',
    webcam: 'Webcam',
    scanner: 'Scanner',
    'joystick-gamepad': 'Joystick / Gamepad',
    'stylus-pen': 'Stylus / Pen',
    'barcode-reader': 'Barcode Reader',
};
