/** Class 5 — Windows OS-3 image configuration.
 * Replace Unsplash URLs with bundled imports from:
 *   client/src/assets/images/class5/windows-os-3/
 * when your screenshots are ready.
 */

const u = (photoId) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const WINDOWS_OS3_HUB_IMAGES = {
    hero: u('photo-1516321318423-f06f85e504b3'),
    windowsPreview: u('photo-1486312338219-ce68d2c6f44d'),
    linuxPreview: u('photo-1555949963-aa79dcee981c'),
    macPreview: u('photo-1517694712202-14dd9538aa97'),
    safetyPreview: u('photo-1503676260728-1c00da280a2e'),
};

export const WINDOWS_OS3_INSTALL_WINDOWS_IMAGES = {
    lessonThumbnail: u('photo-1486312338219-ce68d2c6f44d'),
    whatIsInstall: u('photo-1486312338219-ce68d2c6f44d'),
    requirements: u('photo-1516321318423-f06f85e504b3'),
    setupSteps: u('photo-1525182008055-f88b95ff7980'),
    firstBoot: u('photo-1586281380349-632531db7ed4'),
    schoolRules: u('photo-1503676260728-1c00da280a2e'),
};

export const WINDOWS_OS3_INSTALL_LINUX_IMAGES = {
    lessonThumbnail: u('photo-1555949963-aa79dcee981c'),
    whatIsLinux: u('photo-1555949963-aa79dcee981c'),
    distros: u('photo-1516321318423-f06f85e504b3'),
    installSteps: u('photo-1525182008055-f88b95ff7980'),
    desktopPreview: u('photo-1586281380349-632531db7ed4'),
    compareWindows: u('photo-1503676260728-1c00da280a2e'),
};

export const WINDOWS_OS3_INSTALL_MAC_IMAGES = {
    lessonThumbnail: u('photo-1517694712202-14dd9538aa97'),
    whatIsMacOs: u('photo-1517694712202-14dd9538aa97'),
    appleSilicon: u('photo-1486312338219-ce68d2c6f44d'),
    setupAssistant: u('photo-1525182008055-f88b95ff7980'),
    icloudBasics: u('photo-1586281380349-632531db7ed4'),
    compareAll: u('photo-1503676260728-1c00da280a2e'),
};
