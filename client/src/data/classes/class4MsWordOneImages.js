/** Class 4 — MS Word-1 images (Cloudinary). */

const c = (path) =>
    `https://res.cloudinary.com/dy9zlgjh6/image/upload/kidscodingai/assets/images/class4/ms-word-1/${path}`;

export const MS_WORD1_HUB_HERO = c('ms-word-main-page-images/ms-word-for-kids-main-page-image.png');

export const MS_WORD1_MAIN_PAGE_IMAGES = {
    documentWindow: c('ms-word-main-page-images/document-window-image.png'),
    ribbonHome: c('ms-word-main-page-images/ribbon-and-home-tab-image.png'),
    typingArea: c('ms-word-main-page-images/Typing-area-and-cursor-image.png'),
    saveDocument: c('ms-word-main-page-images/save-early-save-often-image.png'),
};

export const MS_WORD1_WHAT_IS_WORD_IMAGES = {
    lessonThumbnail: c('what-is-word-images/what-is-msword-image.png'),
    whatIsWord: c('what-is-word-images/what-is-msword-image.png'),
    wordHelpsUs: c('what-is-word-images/how-word-help-us-image.png'),
    mainWindowParts: c('what-is-word-images/main-parts-of-ms-word-image.png'),
    howToOpen: c('what-is-word-images/how-to-open-image.png'),
    firstTyping: c('what-is-word-images/type-your-first-lines.png'),
    classroomTips: c('what-is-word-images/class-room-tips-image.png'),
};

export const MS_WORD1_HISTORY_IMAGES = {
    lessonThumbnail: c('history-of-word-images/before-computers-typing-image.png'),
    earlyTyping: c('history-of-word-images/before-computers-typing-image.png'),
    wordGrows: c('history-of-word-images/word-processor-arrives-image.png'),
    msWord1983: c('ms-word-main-page-images/ribbon-and-home-tab-image.png'),
    todayWord: c('ms-word-main-page-images/document-window-image.png'),
};

/* Remaining lesson sections reuse available Cloudinary shots until dedicated assets exist. */
const reuse = MS_WORD1_MAIN_PAGE_IMAGES;

export const MS_WORD1_VS_OTHERS_IMAGES = {
    lessonThumbnail: MS_WORD1_WHAT_IS_WORD_IMAGES.whatIsWord,
    wordVsNotepad: reuse.documentWindow,
    wordVsWordpad: reuse.typingArea,
    wordVsGoogleDocs: reuse.ribbonHome,
    pickRightTool: reuse.saveDocument,
};

export const MS_WORD1_FILE_MENU_IMAGES = {
    lessonThumbnail: reuse.saveDocument,
    newOpenSave: reuse.documentWindow,
    saveAs: reuse.saveDocument,
    printShare: reuse.ribbonHome,
    closeExit: reuse.typingArea,
    fileMenuPractice: MS_WORD1_WHAT_IS_WORD_IMAGES.firstTyping,
};

export const MS_WORD1_HOME_MENU_IMAGES = {
    lessonThumbnail: reuse.ribbonHome,
    homeTabGroups: reuse.ribbonHome,
    ribbonTabs: reuse.documentWindow,
    quickTour: reuse.typingArea,
    homePractice: MS_WORD1_WHAT_IS_WORD_IMAGES.classroomTips,
};

export const MS_WORD1_CLIPBOARD_IMAGES = {
    lessonThumbnail: reuse.typingArea,
    cutCopyPaste: reuse.typingArea,
    pasteOptions: reuse.documentWindow,
    formatPainter: reuse.ribbonHome,
    clipboardShortcuts: reuse.saveDocument,
};

export const MS_WORD1_FONT_IMAGES = {
    lessonThumbnail: reuse.ribbonHome,
    fontNameSize: reuse.typingArea,
    boldItalicUnderline: reuse.documentWindow,
    fontColorHighlight: MS_WORD1_WHAT_IS_WORD_IMAGES.wordHelpsUs,
    capsStrikethrough: reuse.saveDocument,
    fontTips: MS_WORD1_WHAT_IS_WORD_IMAGES.classroomTips,
};

export const MS_WORD1_PARAGRAPH_IMAGES = {
    lessonThumbnail: reuse.documentWindow,
    alignment: reuse.typingArea,
    bulletsNumbering: MS_WORD1_WHAT_IS_WORD_IMAGES.mainWindowParts,
    spacingIndent: reuse.ribbonHome,
    lineSpacingDetail: MS_WORD1_WHAT_IS_WORD_IMAGES.firstTyping,
    paragraphTips: reuse.saveDocument,
};

export const MS_WORD1_STYLES_IMAGES = {
    lessonThumbnail: reuse.ribbonHome,
    whatIsStyle: reuse.documentWindow,
    headingStyles: reuse.ribbonHome,
    applyStyle: reuse.typingArea,
    styleGallery: MS_WORD1_WHAT_IS_WORD_IMAGES.classroomTips,
};

export const MS_WORD1_EDITING_IMAGES = {
    lessonThumbnail: reuse.documentWindow,
    findTool: reuse.typingArea,
    replaceTool: reuse.saveDocument,
    selectAll: reuse.ribbonHome,
    editingPractice: MS_WORD1_WHAT_IS_WORD_IMAGES.firstTyping,
};
