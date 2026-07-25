/**
 * Class 3 — Good computer habits: images from assets/images/class3/good-habits/
 */

const gentleHands = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133417/kidscodingai/assets/images/class3/good-habits/gentle-hands.png';
const noFoodNoDrink = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133417/kidscodingai/assets/images/class3/good-habits/no-food-no-drink.png';
const protectYourEyes = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133417/kidscodingai/assets/images/class3/good-habits/protect-your-eyes.png';
const sitUpStraight = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133419/kidscodingai/assets/images/class3/good-habits/sit-up-straight.png';

/**
 * @typedef {{
 *   id: string;
 *   title: string;
 *   image: string;
 *   alt: string;
 *   lead: string;
 *   paragraphs: string[];
 *   dos: string[];
 *   tipTitle: string;
 *   tipBody: string;
 * }} GoodHabitChapter
 */

/** @type {GoodHabitChapter[]} */
export const GOOD_COMPUTER_HABITS_CHAPTERS = [
    {
        id: 'sit-posture',
        title: 'Sit up straight — happy back, happy brain',
        image: sitUpStraight,
        alt: 'Illustration reminding kids to sit with a straight back and feet on the floor at the computer',
        lead: 'Your body is not a noodle! When you sit like a sleepy banana, your neck and back get tired faster, and it is harder to focus on fun lessons.',
        paragraphs: [
            'Choose a chair where your feet can rest flat on the floor (or use a small footrest if you are still growing). Your knees should bend gently, not squeeze tight.',
            'Slide close enough to type without reaching, but leave a little space so your elbows can relax near your sides—not stuck out like airplane wings.',
            'Keep the top of the screen near your eye level when possible. If the screen is too low, you bend your neck down for a long time and that can give you a “heavy head” feeling.',
            'Take a “posture reset” every 20 minutes: sit tall, roll your shoulders back once, and wiggle your fingers before you keep working.',
        ],
        dos: [
            'Use a cushion behind your lower back if the chair feels big—little supports help a lot.',
            'Tell a teacher or parent if the chair or table feels wrong; small changes prevent big aches.',
        ],
        tipTitle: 'Classroom star move',
        tipBody: 'Pretend a gentle string is pulling the top of your head toward the ceiling. That is the same tall-but-relaxed feeling athletes use!',
    },
    {
        id: 'protect-eyes',
        title: 'Protect your eyes — distance, breaks, and light',
        image: protectYourEyes,
        alt: 'Illustration about protecting eyes while using a computer screen',
        lead: 'Screens are bright and interesting, but your eyes are muscles too. They get tired if you stare without blinking or sit too close.',
        paragraphs: [
            'Try the “arm-length” rule: sit about one full arm away from the laptop or monitor (not nose-to-screen!). If text looks tiny, ask an adult to zoom in instead of moving your face closer.',
            'Blink on purpose! When we concentrate, we blink less, and dry eyes feel scratchy. A few slow blinks every few minutes helps a lot.',
            'Use the 20-20-20 trick: every 20 minutes, look at something about 20 feet away for 20 seconds—like a poster, window, or tree outside. It is a mini vacation for your eye muscles.',
            'Ask to lower bright glare: tilt the screen slightly, close strong curtains if the sun reflects on the glass, or move a shiny lamp away from the screen.',
        ],
        dos: [
            'Tell an adult if you see double, get headaches often, or squint a lot—they may schedule an eye check.',
            'Wash hands before rubbing eyes; germs from the keyboard can travel to your face.',
        ],
        tipTitle: 'Screen buddy rule',
        tipBody: 'If you and a friend both use computers, remind each other to look up and stretch when the teacher says “eye break!”',
    },
    {
        id: 'no-food-drink',
        title: 'No food or drink at the keyboard — keep spills away',
        image: noFoodNoDrink,
        alt: 'Illustration showing no food and no drink near the computer',
        lead: 'Crunchy chips and sticky juice feel fun, but crumbs and liquids are enemies of keyboards, mice, and laptops. One accident can stop a whole project.',
        paragraphs: [
            'Liquids can sneak under keys in seconds. Even “just a little splash” can make letters type wrong, make the trackpad jump, or turn off the machine.',
            'Crumbs attract tiny bugs and dust, and they jam keys so “E” might not work on spelling day. Greasy fingers also smudge the screen and make it harder to read.',
            'Eat snacks at the lunch table or kitchen counter, then wash or wipe your hands before you touch the computer again.',
            'If your school allows water bottles, keep them in a separate spot away from cables—knocking a bottle over is one of the most common accidents.',
        ],
        dos: [
            'If something spills, do not panic—tell an adult right away and power off safely if they say so.',
            'Use a closed snack box in your bag for later; do not balance open food on your desk beside the laptop.',
        ],
        tipTitle: 'Golden habit',
        tipBody: 'Treat the computer area like a science lab table: clean hands, clear space, and food saved for break time.',
    },
    {
        id: 'gentle-hands',
        title: 'Gentle hands — kind keys, safe mouse',
        image: gentleHands,
        alt: 'Illustration reminding kids to press keyboard keys gently and hold the mouse carefully',
        lead: 'Keys and buttons look tough, but they are delicate switches. When you tap like a woodpecker, keys can pop off, letters wear out, and the noise distracts everyone.',
        paragraphs: [
            'Press each key lightly until you feel a small click. Fast typing comes from practice and rhythm, not from smashing harder.',
            'Hold the mouse or trackpad with relaxed fingers. Drag items slowly; if something will not move, ask for help instead of yanking the cable.',
            'Never lift a laptop by the screen alone—support the base with both hands when you carry it. Dropping a laptop can crack the display or hurt your toes!',
            'Keep pencils, rulers, and toys away from the keyboard so they do not fall between keys while you work.',
        ],
        dos: [
            'Clean hands help: paint, clay, and glue on fingers can stick inside keys.',
            'If a key feels stuck, tell an adult—do not poke sharp objects into the gaps.',
        ],
        tipTitle: 'Quiet ninja typing',
        tipBody: 'Imagine your fingers are little raindrops landing softly on a leaf. Same keys, same letters—just calmer and kinder to the machine.',
    },
];
