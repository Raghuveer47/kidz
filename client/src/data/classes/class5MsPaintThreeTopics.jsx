import React from 'react';
import { Paintbrush } from 'lucide-react';
import {
    MS_PAINT3_HUB_HERO,
    MS_PAINT3_MAIN_PAGE_IMAGES,
    MS_PAINT3_IMAGE_IMAGES,
    MS_PAINT3_EXERCISES_IMAGES,
    MS_PAINT3_CERTIFICATION_IMAGES,
} from './class5MsPaintThreeImages';

const paintIcon = <Paintbrush className="w-5 h-5 text-fuchsia-500" />;

function section(subtitle, body, image, bullets) {
    return bullets ? { subtitle, body, image, bullets } : { subtitle, body, image };
}

function subLesson(id, title, heading, text, sections) {
    return {
        id,
        title,
        hideFromSidebar: true,
        category: 'creative_tools',
        icon: paintIcon,
        content: { heading, text, sections },
    };
}

/** Class 5 — MS Paint-3 hub + three sub-lessons (insert into class5Data.topics). */
export const msPaintThreeTopics = [
    {
        id: 'ms-paint-3',
        title: 'MS PAINT-3',
        category: 'creative_tools',
        icon: paintIcon,
        children: [
            { label: 'Working with image', topicId: 'ms-paint-3-image' },
            { label: "Exercise's page", topicId: 'ms-paint-3-exercises' },
            { label: 'Certification page', topicId: 'ms-paint-3-certification' },
        ],
        content: {
            heading: 'MS PAINT-3',
            text:
                'Class 5 MS Paint-3 is the advanced Paint unit. You already learned basics in Class 3 and shapes plus tools in Class 4. Now you will edit existing images—open photos, crop and resize, rotate and flip, paste and combine pictures—then complete graded exercises and work toward your Paint-3 certification. Use a practice folder your teacher creates and save every project with a clear file name.',
            hubHeroImage: MS_PAINT3_HUB_HERO,
            msPaintSmartBasicsTitle: 'MS Paint-3 — Images, Practice & Certificate',
            paintDetail: {
                intro:
                    'Paint-3 moves from drawing on a blank canvas to working with real image files. You can open a photo from a school folder, trim unwanted edges, turn it sideways, mirror it, and paste another picture beside it for a collage. The Exercises page gives step-by-step projects from warm-up to challenger level. The Certification page lists skills your teacher checks before awarding your MS Paint-3 certificate.',
                analogy:
                    'Think of Paint-3 like a digital craft table. Class 3 gave you paper and crayons. Class 4 gave you stencils (shapes) and better scissors (tools). Class 3 on this table lets you cut photos from magazines, rotate them, glue pieces together, and present a finished poster your teacher can stamp as “certified artist.”',
                keyPoints: [
                    {
                        title: 'Open and edit photos',
                        body: 'File → Open loads .jpg or .png files. Resize canvas or selection when the picture needs more room or a tighter crop.',
                    },
                    {
                        title: 'Rotate and flip',
                        body: 'Home → Rotate fixes sideways phone photos. Flip horizontal mirrors faces or arrows for symmetry projects.',
                    },
                    {
                        title: 'Select and crop',
                        body: 'Select tool boxes the area to keep; Crop removes the rest—great for focusing on one object in a busy photo.',
                    },
                    {
                        title: 'Paste and combine',
                        body: 'Copy from another Paint file or clipboard, paste, then move layers with Select for simple collages.',
                    },
                    {
                        title: 'Graded exercises',
                        body: 'Warm-up, Builder, and Challenger tasks build skills in order—do not skip ahead until warm-ups feel easy.',
                    },
                    {
                        title: 'Certification goals',
                        body: 'Complete exercises, save a portfolio file, and show your teacher the checklist on the Certification page.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under MS PAINT-3 to open Working with image, Exercises, and Certification.',
            subtopicThumbnails: {
                'ms-paint-3-image': MS_PAINT3_IMAGE_IMAGES.lessonThumbnail,
                'ms-paint-3-exercises': MS_PAINT3_EXERCISES_IMAGES.lessonThumbnail,
                'ms-paint-3-certification': MS_PAINT3_CERTIFICATION_IMAGES.lessonThumbnail,
            },
            msPaintWhyLearn: [
                'Editing images helps science reports, social studies posters, and computer lab projects look polished.',
                'Crop and rotate fix common phone-photo problems without needing another app.',
                'Collage skills combine drawings and photos for creative fair entries.',
                'Exercises train you for timed lab activities and practical checks.',
                'Certification celebrates real skills—save habits, neat files, and finished artwork.',
                'Paint-3 prepares you for digital design topics in higher classes.',
            ],
            msPaintHowToStudy: [
                'Read this overview, then complete Working with image before Exercises.',
                'Save a copy before rotate or crop—you can always reopen the original.',
                'Do Exercises in order: Warm-up → Builder → Challenger.',
                'Keep all exercise files in one folder for Certification review.',
                'Ask your teacher to sign the Certification checklist when every skill is demonstrated.',
            ],
            subtopicPages: [
                {
                    topicId: 'ms-paint-3-image',
                    label: 'Working with image',
                    emoji: '🖼️',
                    description: 'Open photos, resize canvas, rotate, flip, crop, paste, and combine images.',
                },
                {
                    topicId: 'ms-paint-3-exercises',
                    label: "Exercise's page",
                    emoji: '🎯',
                    description: 'Nine graded Paint projects from warm-up tracing to challenger collage.',
                },
                {
                    topicId: 'ms-paint-3-certification',
                    label: 'Certification page',
                    emoji: '🏅',
                    description: 'Skills checklist, portfolio requirements, and teacher sign-off for Paint-3.',
                },
            ],
            sections: [
                section(
                    'Working with image (preview)',
                    'Paint-3 image skills start with File → Open. Use Select to highlight part of a picture, then Crop to keep only that area. Home → Resize and Skew changes canvas size when you need extra space for labels. Rotate right/left fixes orientation; Flip horizontal creates mirror effects. Paste (Ctrl+V) brings in clips from other files or screenshots.',
                    MS_PAINT3_MAIN_PAGE_IMAGES.imageToolsPreview
                ),
                section(
                    'Exercises (preview)',
                    'The Exercises page lists nine tasks in three levels. Warm-ups practice open, save, and simple crop. Builders add rotate, text labels, and shape overlays. Challengers combine two images into one themed poster with a title and border.',
                    MS_PAINT3_MAIN_PAGE_IMAGES.exercisesPreview
                ),
                section(
                    'Certification (preview)',
                    'To earn MS Paint-3 certification you demonstrate: open and save PNG/JPEG correctly, crop and rotate without losing quality, use Undo wisely, complete at least six exercises, and submit one portfolio piece your teacher approves.',
                    MS_PAINT3_MAIN_PAGE_IMAGES.certificationPreview
                ),
                section(
                    'Save and lab habits',
                    'File → Save As after every exercise. Use names like Class5_Paint3_Ex4_Rotate.png. Close Paint properly on shared PCs. Never edit another student’s folder. Log out when the period ends.',
                    MS_PAINT3_MAIN_PAGE_IMAGES.savePreview
                ),
            ],
        },
    },
    subLesson(
        'ms-paint-3-image',
        'MS PAINT-3: WORKING WITH IMAGE',
        'Working with image',
        'This lesson teaches advanced image editing inside MS Paint: opening existing pictures, changing canvas size, rotating and flipping, cropping with Select, and pasting to build simple collages. Work on copies of teacher-provided photos—never delete the original file.',
        [
            section(
                'Open an image in Paint',
                'Step 1: File → Open (or right-click a .jpg/.png → Open with → Paint).\n\nStep 2: Browse to your class folder → select image → Open.\n\nStep 3: Check the title bar shows the filename—not “Untitled.”\n\nStep 4: File → Save As immediately with a new name like Butterfly_Edit1.png so the original stays safe.\n\nSupported formats: PNG (sharp, good for charts), JPEG (photos), BMP (large files—use PNG when teacher allows).',
                MS_PAINT3_IMAGE_IMAGES.openImage
            ),
            section(
                'Resize canvas and image',
                'Home → Resize and Skew opens a dialog.\n\nResize by Percentage — shrink to 50% for smaller file size (ask teacher first).\n\nResize by Pixels — set exact width/height for lab templates.\n\nMaintain aspect ratio checkbox — keep photo proportions so faces do not stretch.\n\nSkew (optional) — tilts image for special effects; use sparingly on school work.\n\nIf canvas is too small, increase pixels before pasting large screenshots.',
                MS_PAINT3_IMAGE_IMAGES.resizeCanvas
            ),
            section(
                'Rotate and flip',
                'Home → Rotate:\n\n• Rotate right 90° — fixes photos taken sideways.\n\n• Rotate left 90° — opposite direction.\n\n• Rotate 180° — upside-down correction.\n\nFlip vertical — flips top to bottom.\n\nFlip horizontal — mirror image (useful for symmetry art or arrow direction).\n\nTip: Rotate before adding text labels so words stay readable.',
                MS_PAINT3_IMAGE_IMAGES.rotateFlip
            ),
            section(
                'Crop with Select',
                'Step 1: Click Select (dashed rectangle) on Home.\n\nStep 2: Drag a box around the area to keep.\n\nStep 3: Click Crop in the Image group (or right-click → Crop if available).\n\nStep 4: Everything outside the box disappears.\n\nUse Crop to remove extra background from a plant photo or focus on one face in a group picture.\n\nUndo (Ctrl+Z) restores the full image if you cropped too much.',
                MS_PAINT3_IMAGE_IMAGES.cropSelect
            ),
            section(
                'Paste and combine images',
                'Method 1 — From another Paint file: Open image A, Select All (Ctrl+A), Copy (Ctrl+C). Open image B (or widen canvas), Paste (Ctrl+V), drag to position.\n\nMethod 2 — Screenshot: Win+Shift+S captures screen area → Paste into Paint.\n\nUse Select to move pasted layer before clicking elsewhere.\n\nAdd a text label (Class 3 skill) under each pasted part for science posters.\n\nSave collage as Class5_Collage.png when layout looks balanced.',
                MS_PAINT3_IMAGE_IMAGES.pasteCombine
            ),
            section(
                'Image editing practice lab',
                '15-minute drill:\n\n1. Open teacher sample photo → Save As MyImage_Practice.png.\n\n2. Rotate if sideways.\n\n3. Crop to center subject.\n\n4. Paste a small shape or second image from clipboard.\n\n5. Add your name with Text tool.\n\n6. Save and show teacher before moving to Exercises page.',
                MS_PAINT3_IMAGE_IMAGES.imagePractice
            ),
        ]
    ),
    subLesson(
        'ms-paint-3-exercises',
        'MS PAINT-3: EXERCISES',
        "Exercise's page",
        'Complete these nine exercises in order. Each includes a goal, steps, and what your teacher checks. Save every file in your Class5_Paint3 folder with the exercise number in the name.',
        [
            section(
                'Warm-up exercises (1–3)',
                'Exercise 1 — Open and save\n\nOpen any school-approved photo. Save As Ex1_OpenSave.png. Teacher checks: correct folder, clear filename.\n\nExercise 2 — Simple crop\n\nCrop to show only the main object. Save As Ex2_Crop.png. Teacher checks: no important part cut off.\n\nExercise 3 — Rotate fix\n\nUse a sideways sample image. Rotate until upright. Save As Ex3_Rotate.png.',
                MS_PAINT3_EXERCISES_IMAGES.warmUp,
                [
                    'Warm-up tip: If stuck, reopen Working with image lesson from the sidebar.',
                    'Use Undo instead of reopening when one step goes wrong.',
                ]
            ),
            section(
                'Builder exercises (4–6)',
                'Exercise 4 — Resize canvas\n\nAdd 200 pixels width for a side label area. Type a one-line caption. Save As Ex4_Resize.png.\n\nExercise 5 — Flip and mirror\n\nDraw or open an arrow shape. Flip horizontal. Save As Ex5_Flip.png.\n\nExercise 6 — Shape overlay chart\n\nOpen a map or diagram photo. Add three rectangle shapes with labels. Save As Ex6_Chart.png.',
                MS_PAINT3_EXERCISES_IMAGES.builder,
                [
                    'Builder tip: Outline shapes with dark Color 1, light fill Color 2.',
                    'Keep labels readable—dark text on light fill.',
                ]
            ),
            section(
                'Challenger exercises (7–9)',
                'Exercise 7 — Two-image collage\n\nPaste a second image beside the first. Align with Select. Save As Ex7_Collage.png.\n\nExercise 8 — Themed poster\n\nTopic: Save Water or Clean School. Title text + one cropped photo + two shapes. Save As Ex8_Poster.png.\n\nExercise 9 — Portfolio piece\n\nYour best Paint-3 work combining image edit + shapes + text. Save As Ex9_Portfolio.png for Certification.',
                MS_PAINT3_EXERCISES_IMAGES.challenger,
                [
                    'Challenger tip: Plan layout on paper before opening Paint.',
                    'Exercise 9 is the file you may submit for certification review.',
                ]
            ),
            section(
                'Teacher check rubric',
                'For each exercise teachers may mark:\n\n✓ File opens and saves without error\n\n✓ Task completed as described\n\n✓ Neat naming (Ex#_Topic.png)\n\n✓ Appropriate content for school\n\n✓ Logged out and desk clean after lab\n\nComplete at least six of nine exercises (including Ex 9) before requesting certification.',
                MS_PAINT3_EXERCISES_IMAGES.teacherCheck
            ),
        ]
    ),
    subLesson(
        'ms-paint-3-certification',
        'MS PAINT-3: CERTIFICATION',
        'Certification page',
        'MS Paint-3 certification shows you can open, edit, combine, and save images responsibly in the computer lab. Review the checklist below with your teacher. When every skill is demonstrated, you earn your Class 5 Paint-3 certificate.',
        [
            section(
                'What certification means',
                'Certification is not a online button—it is your teacher confirming you mastered Paint-3 skills. You will show saved files, explain one tool you used (crop, rotate, paste), and follow lab rules. The certificate recognizes effort, neat work, and honest use of school computers.',
                MS_PAINT3_CERTIFICATION_IMAGES.skillsChecklist
            ),
            section(
                'Skills checklist',
                'Before asking for certification, confirm you can:\n\n☐ Open JPEG or PNG with File → Open\n\n☐ Save As with clear filename in the correct folder\n\n☐ Crop using Select + Crop\n\n☐ Rotate or flip an image correctly\n\n☐ Paste and move a second image for collage\n\n☐ Use Undo when a step fails\n\n☐ Complete Exercises 1–6 and portfolio Exercise 9\n\n☐ Use only teacher-approved photos and original drawings',
                MS_PAINT3_CERTIFICATION_IMAGES.skillsChecklist,
                [
                    'Ask your teacher which exercises are required if you missed a lab day.',
                    'Portfolio file: Ex9_Portfolio.png or teacher-approved substitute.',
                ]
            ),
            section(
                'Portfolio submission',
                'Prepare one folder (digital or printed screenshot) containing:\n\n1. Ex9_Portfolio.png — your best Paint-3 piece.\n\n2. One warm-up file showing crop or rotate.\n\n3. One builder or challenger file with shapes and labels.\n\nName the folder: YourName_Paint3_Cert_Class5.\n\nTeacher may ask you to explain two steps you used while demonstrating live in Paint.',
                MS_PAINT3_CERTIFICATION_IMAGES.portfolio
            ),
            section(
                'Teacher sign-off',
                'When ready, raise your hand during lab or office hour. Teacher verifies checklist, opens your files, and records certification in the class register. Some schools print a certificate card; others add a digital badge in the learning portal. If you need more practice, teacher assigns one exercise to redo—learning matters more than speed.',
                MS_PAINT3_CERTIFICATION_IMAGES.teacherSignOff
            ),
            section(
                'After you are certified',
                'Celebrate by helping a classmate with Crop or Save As. Keep your portfolio for Class 6 open house. Continue good habits: save often, kind digital citizenship, and creative projects that follow school rules. Paint-3 certified students are ready for advanced computer topics ahead!',
                MS_PAINT3_CERTIFICATION_IMAGES.celebrate
            ),
        ]
    ),
];
