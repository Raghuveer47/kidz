/** Class 4 — Notepad tutorial images from assets/images/class4/notepad-tutorial/ */

const notepadHero = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133475/kidscodingai/assets/images/class4/notepad-tutorial/notepad-tutorial-heading-image.png';
const whatIsNotepadImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133478/kidscodingai/assets/images/class4/notepad-tutorial/what-is-notepad-image.png';
const openNotepadImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133473/kidscodingai/assets/images/class4/notepad-tutorial/how-to-open-notepad-image.png';
const windowPartsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133476/kidscodingai/assets/images/class4/notepad-tutorial/parts-of-notepad-image.png';
const cursorEditImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133471/kidscodingai/assets/images/class4/notepad-tutorial/cursor-enter-tab-and-fixing-mistakes.png';
const saveFileImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133478/kidscodingai/assets/images/class4/notepad-tutorial/save-and-save-as-image.png';
const openFileImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133475/kidscodingai/assets/images/class4/notepad-tutorial/open-files-organize-image.png';
const keyboardShortcutsImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133474/kidscodingai/assets/images/class4/notepad-tutorial/keyboard-shortcuts-image.png';
const selectCopyPasteImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133477/kidscodingai/assets/images/class4/notepad-tutorial/select-copy-cut-paste-image.png';
const fileNamingImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133471/kidscodingai/assets/images/class4/notepad-tutorial/file-naming-image.png';
const findReplaceImg = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133473/kidscodingai/assets/images/class4/notepad-tutorial/find-and-replace-image.png';

const u = (photoId) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;

export const NOTEPAD_IMAGES = {
    hero: notepadHero,
    plainText: whatIsNotepadImg,
    windowParts: windowPartsImg,
    openNotepad: openNotepadImg,
    typing: u('photo-1525182008055-f88b95ff7980'),
    cursorEdit: cursorEditImg,
    saveFile: saveFileImg,
    openFile: openFileImg,
    shortcuts: keyboardShortcutsImg,
    selectCopyPaste: selectCopyPasteImg,
    findReplace: findReplaceImg,
    wordWrap: u('photo-1432888490225-38eb01ebff9c'),
    font: u('photo-1586281380349-632531db7ed4'),
    statusBar: u('photo-1486312338219-ce68d2c6f44d'),
    printPage: u('photo-1586953208448-b95a79798f07'),
    fileExplorer: fileNamingImg,
    exerciseList: u('photo-1456513080510-7bf3a84b82f8'),
    faqHelp: u('photo-1434030214721-48fd9f934ca4'),
    advancedAscii: u('photo-1516321490107-8aefc966d420'),
};
