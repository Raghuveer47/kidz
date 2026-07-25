import PrinterDetail from './PrinterDetail';
import ScannerDetail from './ScannerDetail';
import MonitorDetail from './MonitorDetail';
import ProjectorDetail from './ProjectorDetail';
import SpeakersHeadphonesDetail from './SpeakersHeadphonesDetail';
import EarBudsDetail from './EarBudsDetail';
import MicrophoneHeadsetDetail from './MicrophoneHeadsetDetail';

/** Maps URL slug → detail component (Class 3 output devices). */
export const OUTPUT_DEVICE_DETAIL_BY_SLUG = {
    printer: PrinterDetail,
    scanner: ScannerDetail,
    monitor: MonitorDetail,
    projector: ProjectorDetail,
    'speakers-headphones': SpeakersHeadphonesDetail,
    'ear-buds': EarBudsDetail,
    microphone: MicrophoneHeadsetDetail,
};

export const OUTPUT_DEVICE_SLUG_LABEL = {
    printer: 'Printer',
    scanner: 'Scanner',
    monitor: 'Monitor',
    projector: 'Projector',
    'speakers-headphones': 'Speakers & headphones',
    'ear-buds': 'Ear buds',
    microphone: 'Headset & microphone',
};
