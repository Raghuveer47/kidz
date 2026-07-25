import React from 'react';
import { Paintbrush } from 'lucide-react';
import {
    MS_PAINT2_HUB_HERO,
    MS_PAINT2_MAIN_PAGE_IMAGES,
    MS_PAINT2_SHAPES_IMAGES,
    MS_PAINT2_TOOLS_IMAGES,
} from './class4MsPaintTwoImages';

/** Class 4 — MS Paint-2 hub + two sub-lessons (insert into class4Data.topics). */
export const msPaintTwoTopics = [
    {
        id: 'ms-paint-2',
        title: 'MS PAINT-2',
        category: 'creative_tools',
        icon: <Paintbrush className="w-5 h-5 text-fuchsia-500" />,
        children: [
            { label: 'Working with shapes', topicId: 'ms-paint-2-shapes' },
            { label: 'Working with tools', topicId: 'ms-paint-2-tools' },
        ],
        content: {
            heading: 'MS PAINT-2',
            text:
                'In Class 3 you learned Paint basics—open, draw, text, and colors. Class 4 MS Paint-2 goes deeper into perfect shapes and powerful tools like the fill bucket, brushes, eraser, and zoom. You will build charts and posters faster with neat rectangles, circles, and stars, then master tools that fix mistakes and fill big areas in one click. Practice on a test file first, then make one polished project with a title, labeled shapes, and a clear save name.',
            hubHeroImage: MS_PAINT2_HUB_HERO,
            msPaintSmartBasicsTitle: 'MS Paint-2 — Shapes & Tools',
            paintDetail: {
                intro:
                    'MS Paint-2 is about working smarter, not harder. Shapes give you perfect lines for maps, charts, and diagrams. Tools like Fill, Eraser, Brush sizes, and Color Picker speed up coloring and fixing. You still use Color 1 and Color 2, Undo (Ctrl+Z), and Save often—the habits from Paint-1 stay with you while your drawings look more professional.',
                analogy:
                    'Imagine shapes are cookie cutters: one drag makes a perfect circle or star. Tools are like a toolbox on your desk—the bucket pours paint in one splash, the eraser rubs a line away, and the magnifying glass lets you fix tiny corners. Your canvas is still the same white page; you are just adding better equipment.',
                keyPoints: [
                    {
                        title: 'Shapes save time',
                        body: 'Rectangles, ovals, stars, and arrows stay smooth even when you zoom in—great for science diagrams and flow charts.',
                    },
                    {
                        title: 'Fill closes shapes fast',
                        body: 'Draw a closed outline (or use a shape), then one click with the paint bucket fills the inside without coloring by hand.',
                    },
                    {
                        title: 'Select moves your work',
                        body: 'The Select tool lets you move, resize, or copy a shape or part of the picture after you draw it.',
                    },
                    {
                        title: 'Undo is always there',
                        body: 'Ctrl+Z steps back through mistakes—try bold ideas knowing you can reverse a fill or brush stroke.',
                    },
                    {
                        title: 'Save with clear names',
                        body: 'Use names like Class4_MathChart_Shapes.png so you can open the right file next week.',
                    },
                ],
            },
            subtopicIntro:
                'Use the sidebar under MS PAINT-2 to open Working with shapes and Working with tools.',
            subtopicThumbnails: {
                'ms-paint-2-shapes': MS_PAINT2_SHAPES_IMAGES.lessonThumbnail,
                'ms-paint-2-tools': MS_PAINT2_TOOLS_IMAGES.lessonThumbnail,
            },
            msPaintWhyLearn: [
                'Shapes make school charts look neat without shaky freehand lines.',
                'The fill bucket colors big areas in seconds—perfect for skies, grass, and flags.',
                'Brush sizes and the eraser help you add detail and fix small mistakes.',
                'Color Picker keeps all leaves or all labels the same shade.',
                'These skills prepare you for posters, presentations, and Paint-3 in Class 5.',
            ],
            msPaintHowToStudy: [
                'Read the overview on this page, then open Working with shapes → Working with tools.',
                'Try each step on a practice canvas named Test_Shapes.png.',
                'Draw outlines first, fill second, add text labels last.',
                'Use Undo instead of starting over when one step goes wrong.',
                'Save after each finished section and show your teacher one improved version.',
            ],
            subtopicPages: [
                {
                    topicId: 'ms-paint-2-shapes',
                    label: 'Working with shapes',
                    emoji: '⬛',
                    description:
                        'Use the Shapes group—rectangles, ovals, stars, arrows—outline vs fill, and Select to move or resize.',
                },
                {
                    topicId: 'ms-paint-2-tools',
                    label: 'Working with tools',
                    emoji: '🪣',
                    description:
                        'Master Fill bucket, Eraser, Brush/Pencil sizes, Color Picker, Magnifier, and Undo/Redo.',
                },
            ],
            sections: [
                {
                    subtitle: 'Shapes make neat diagrams',
                    image: MS_PAINT2_MAIN_PAGE_IMAGES.shapesPreview,
                    body:
                        'The Shapes group on the Home ribbon holds lines, rectangles, ovals, triangles, stars, hearts, and arrows. Click a shape, then click-and-drag on the canvas. Hold Shift while dragging some shapes to keep proportions (for example a perfect square or circle). Shapes are ideal for charts, maps, and labeled science drawings where straight edges matter.',
                },
                {
                    subtitle: 'Tools speed up coloring',
                    image: MS_PAINT2_MAIN_PAGE_IMAGES.toolsPreview,
                    body:
                        'Beyond Pencil and Brush, Paint-2 focuses on the Fill with color (paint bucket), Eraser, Color Picker, and Magnifier. The Size dropdown still controls how thick your lines look. Combine tools: draw a closed house with the rectangle shape, fill the roof red and walls yellow, erase a smudge on the door, then pick the same green again with the Color Picker for the tree.',
                },
                {
                    subtitle: 'Fill bucket preview',
                    image: MS_PAINT2_MAIN_PAGE_IMAGES.fillBucketPreview,
                    body:
                        'The paint bucket pours Color 2 (or Color 1) into any closed area. If color “leaks” across the whole screen, your outline has a gap—zoom in with Magnifier, close the gap with Pencil, Undo the flood fill, and try again. Shapes from the ribbon usually fill cleanly.',
                },
                {
                    subtitle: 'Save your shape projects',
                    image: MS_PAINT2_MAIN_PAGE_IMAGES.savePreview,
                    body:
                        'File → Save or Save As after each major step. PNG keeps your chart sharp for school slides. Before you leave a shared PC, close Paint and confirm your file name appears in the folder your teacher chose.',
                },
            ],
        },
    },
    {
        id: 'ms-paint-2-shapes',
        title: 'MS PAINT-2: WORKING WITH SHAPES',
        hideFromSidebar: true,
        category: 'creative_tools',
        icon: <Paintbrush className="w-5 h-5 text-fuchsia-500" />,
        content: {
            heading: 'Working with shapes',
            text:
                'Perfect shapes help you build charts, maps, and posters that look planned—not rushed. This lesson walks through the Shapes group, drawing rectangles and circles, adding stars and arrows, choosing outline and fill colors, and using Select to move or resize what you drew. Work slowly: one shape at a time, then fill, then labels.',
            sections: [
                {
                    subtitle: 'Find the Shapes group',
                    image: MS_PAINT2_SHAPES_IMAGES.shapesGroup,
                    body:
                        'On the Home tab, look for the Shapes group in the ribbon. It shows a gallery of outlines—line, rectangle, oval, triangle, star, callout, and more.\n\nStep 1: Click the small arrow under Shapes to open the full list.\n\nStep 2: Click the shape you need before you touch the canvas.\n\nStep 3: Your cursor becomes a crosshair—ready to drag.\n\nTip: If the wrong shape appears, click Undo and pick again from the gallery.',
                },
                {
                    subtitle: 'Draw rectangles and squares',
                    image: MS_PAINT2_SHAPES_IMAGES.rectangleSquare,
                    body:
                        'Rectangles make boxes, doors, charts, and flags.\n\nStep 1: Choose the rectangle shape.\n\nStep 2: Click where one corner should be, drag diagonally, release.\n\nStep 3: Hold Shift while dragging to force a square.\n\nStep 4: Set Color 1 for the outline and Color 2 for the fill before you draw, or fill after with the paint bucket.\n\nUse squares for grids and rectangles for wide banners.',
                },
                {
                    subtitle: 'Draw circles and ovals',
                    image: MS_PAINT2_SHAPES_IMAGES.circleOval,
                    body:
                        'Ovals make faces, planets, and eggs; circles make wheels, suns, and dots.\n\nStep 1: Pick the oval shape.\n\nStep 2: Drag on the canvas to size it.\n\nStep 3: Hold Shift for a perfect circle.\n\nStep 4: Fill with Color 2 when the outline is closed.\n\nFor diagrams, one large circle with labels around it can show a life cycle or water cycle.',
                },
                {
                    subtitle: 'Stars, hearts, and arrows',
                    image: MS_PAINT2_SHAPES_IMAGES.starHeartArrow,
                    body:
                        'Decorative shapes add emphasis to posters.\n\nStep 1: Open the Shapes gallery and pick a star, heart, or arrow.\n\nStep 2: Drag to size—small stars work as bullet points; large arrows point to important labels.\n\nStep 3: Change outline color for contrast on dark backgrounds.\n\nStep 4: Do not crowd the canvas—two or three accent shapes are enough.\n\nArrows pair well with text labels you add after shapes are placed.',
                },
                {
                    subtitle: 'Outline color and fill color',
                    image: MS_PAINT2_SHAPES_IMAGES.outlineAndFill,
                    body:
                        'Every shape uses Color 1 (outline) and can use Color 2 (fill).\n\nStep 1: Click Color 1, pick a dark outline (black, navy, dark green).\n\nStep 2: Click Color 2, pick a lighter fill (yellow, sky blue, light green).\n\nStep 3: Draw the shape—some versions fill automatically; others need the paint bucket inside.\n\nStep 4: Use light fill + dark outline so labels and edges stay readable.\n\nMatching Class 3 habits: light inside, darker border.',
                },
                {
                    subtitle: 'Select, resize, and move shapes',
                    image: MS_PAINT2_SHAPES_IMAGES.selectResizeMove,
                    body:
                        'After drawing, you can adjust layout without redrawing from scratch.\n\nStep 1: Click the Select tool (dashed rectangle icon).\n\nStep 2: Drag a box around the shape or click it if your Paint version allows.\n\nStep 3: Drag corners to resize; drag the middle to move.\n\nStep 4: Use Copy and Paste from the clipboard group to duplicate a shape (two identical trees, for example).\n\nStep 5: Press Undo if the selection moves the wrong item.\n\nSave when your diagram looks balanced.',
                },
            ],
        },
    },
    {
        id: 'ms-paint-2-tools',
        title: 'MS PAINT-2: WORKING WITH TOOLS',
        hideFromSidebar: true,
        category: 'creative_tools',
        icon: <Paintbrush className="w-5 h-5 text-fuchsia-500" />,
        content: {
            heading: 'Working with tools',
            text:
                'Tools are the buttons that change how you draw, erase, fill, and fix your picture. In this lesson you will practice the paint bucket, eraser, brush and pencil sizes, Color Picker, magnifier zoom, and Undo/Redo. Try each tool on a practice file so you know what to reach for during a timed class activity.',
            sections: [
                {
                    subtitle: 'Fill with color (paint bucket)',
                    image: MS_PAINT2_TOOLS_IMAGES.fillBucket,
                    body:
                        'The Fill tool pours color into a closed area.\n\nStep 1: Click the paint bucket in the Tools group.\n\nStep 2: Choose Color 2 (or Color 1) for the fill color.\n\nStep 3: Click inside a closed shape—watch the area change instantly.\n\nStep 4: If color floods the whole canvas, press Undo, close any gap in the outline with Pencil, then fill again.\n\nBest for skies, grass, large flags, and shape interiors—not tiny details.',
                },
                {
                    subtitle: 'Eraser tool',
                    image: MS_PAINT2_TOOLS_IMAGES.eraser,
                    body:
                        'The Eraser removes pixels you do not want.\n\nStep 1: Select the Eraser.\n\nStep 2: Choose a size from the Size dropdown—small for tight corners, large for big mistakes.\n\nStep 3: Drag over the mistake; only the erased area changes.\n\nStep 4: Switch back to Brush or Pencil to continue drawing.\n\nTip: Eraser does not replace Undo—use both. Undo for whole steps, Eraser for small fixes.',
                },
                {
                    subtitle: 'Brush and pencil sizes',
                    image: MS_PAINT2_TOOLS_IMAGES.brushPencil,
                    body:
                        'Pencil makes thin, sharp lines; Brush makes softer, thicker strokes.\n\nStep 1: Click Pencil or Brush.\n\nStep 2: Open the Size list and pick 1–3 for outlines, 5–8 for bold titles or borders.\n\nStep 3: In the Brushes menu (if shown), try calligraphy or marker styles your teacher allows.\n\nStep 4: Draw test strokes in a corner before working on your main art.\n\nKeep sizes consistent across one project so the chart looks unified.',
                },
                {
                    subtitle: 'Color Picker (eyedropper)',
                    image: MS_PAINT2_TOOLS_IMAGES.colorPicker,
                    body:
                        'Copy an exact color already on your canvas.\n\nStep 1: Click the Color Picker tool.\n\nStep 2: Click the color you want to match—a leaf, a border, or the sky.\n\nStep 3: That color becomes Color 1; draw or outline with the same shade.\n\nStep 4: Use it when you add new shapes that must match older ones.\n\nSaves time versus guessing from the palette.',
                },
                {
                    subtitle: 'Magnifier and zoom',
                    image: MS_PAINT2_TOOLS_IMAGES.magnifier,
                    body:
                        'Zoom helps you fix corners and small text.\n\nStep 1: Click the Magnifier, then click on the canvas to zoom in—or use View → Zoom in.\n\nStep 2: Edit tiny areas (close a gap, sign your name small).\n\nStep 3: Use View → Zoom out or Fit to window to see the whole picture.\n\nStep 4: Check that labels still read clearly at normal zoom before saving.\n\nDo not stay zoomed in so long that you forget the big layout.',
                },
                {
                    subtitle: 'Undo, redo, and clear',
                    image: MS_PAINT2_TOOLS_IMAGES.undoRedoClear,
                    body:
                        'Fix mistakes quickly without starting over.\n\nStep 1: Click Undo (curved arrow) or press Ctrl+Z after a bad fill or stroke.\n\nStep 2: Click Redo if you undo too far.\n\nStep 3: To restart the whole canvas, use Select All (Ctrl+A) then Delete, or open File → New and confirm—only when your teacher says a fresh start is okay.\n\nStep 4: Save good versions with new names (Chart_v2.png) before big experiments.\n\nEnd of lesson: File → Save, close Paint properly on lab PCs.',
                },
            ],
        },
    },
];
