/** Class 5 — MS Paint-3 image configuration.
 * Replace Unsplash URLs with bundled imports from:
 *   client/src/assets/images/class5/ms-paint-3/
 * when your screenshots are ready.
 */

const u = (photoId) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const MS_PAINT3_HUB_HERO = u('photo-1513364776144-60967b0f800f');

export const MS_PAINT3_MAIN_PAGE_IMAGES = {
    imageToolsPreview: u('photo-1513364776144-60967b0f800f'),
    exercisesPreview: u('photo-1460661419341-7a755a762657'),
    certificationPreview: u('photo-1522202176988-66273c2fd55f'),
    savePreview: u('photo-1586281380349-632531db7ed4'),
};

export const MS_PAINT3_IMAGE_IMAGES = {
    lessonThumbnail: u('photo-1513364776144-60967b0f800f'),
    openImage: u('photo-1513364776144-60967b0f800f'),
    resizeCanvas: u('photo-1460661419341-7a755a762657'),
    rotateFlip: u('photo-1503602642458-232111445657'),
    cropSelect: u('photo-1525182008055-f88b95ff7980'),
    pasteCombine: u('photo-1586281380349-632531db7ed4'),
    imagePractice: u('photo-1516321318423-f06f85e504b3'),
};

export const MS_PAINT3_EXERCISES_IMAGES = {
    lessonThumbnail: u('photo-1460661419341-7a755a762657'),
    warmUp: u('photo-1513364776144-60967b0f800f'),
    builder: u('photo-1525182008055-f88b95ff7980'),
    challenger: u('photo-1503602642458-232111445657'),
    teacherCheck: u('photo-1522202176988-66273c2fd55f'),
};

export const MS_PAINT3_CERTIFICATION_IMAGES = {
    lessonThumbnail: u('photo-1522202176988-66273c2fd55f'),
    skillsChecklist: u('photo-1522202176988-66273c2fd55f'),
    portfolio: u('photo-1513364776144-60967b0f800f'),
    teacherSignOff: u('photo-1503676260728-1c00da280a2e'),
    celebrate: u('photo-1460661419341-7a755a762657'),
};
