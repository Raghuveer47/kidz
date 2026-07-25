import React from 'react';
import { Settings, TableProperties, Presentation, Code2, Globe2, BrainCircuit } from 'lucide-react';

export const class8Data = {
    className: "Class 8",
    topics: [
        {
            id: 'windows-control-panel',
            title: 'WINDOWS CONTROL PANEL',
            category: 'computer_basics',
            icon: <Settings className="w-5 h-5 text-gray-700" />,
            content: {
                heading: "The Master Control Room",
                text: "The Control Panel is the secret room where you can change how your entire computer acts and looks!",
                sections: [
                    { subtitle: "What is the Control Panel?", image: "https://loremflickr.com/600/400/control,panel,gear", body: "It's like the settings menu on a phone, but much more powerful. You use it to install printers, change mouse speed, or fix broken internet connections." },
                    { subtitle: "Changing the Mouse", image: "https://loremflickr.com/600/400/mouse,click,fast", body: "Is your mouse arrow moving too fast or too slow? Go to the 'Mouse' settings! You can make it zip across the screen or crawl like a turtle." },
                    { subtitle: "Adding User Accounts", image: "https://loremflickr.com/600/400/passwords,users,kids", body: "If your brother shares the computer, you can use the Control Panel to give him his own account with a separate password and a different wallpaper!" },
                    { subtitle: "Uninstalling Programs", image: "https://loremflickr.com/600/400/uninstall,trash", body: "When you are totally done with a game and want more space, you go to 'Programs and Features' to safely delete it from the hard drive forever." }
                ]
            }
        },
        {
            id: 'excel-1',
            title: 'EXCEL-1',
            category: 'creative_tools',
            icon: <TableProperties className="w-5 h-5 text-emerald-600" />,
            content: {
                heading: "The Magic Math Grid",
                text: "Microsoft Excel looks like a giant piece of graph paper. Let's learn to use it as a super-smart calculator!",
                sections: [
                    { subtitle: "What is Excel?", image: "https://loremflickr.com/600/400/spreadsheet,excel", body: "Excel is a Spreadsheet program. An accountant or scientist uses it to quickly add up hundreds of numbers at the same time." },
                    { subtitle: "Cells and Rows", image: "https://loremflickr.com/600/400/grid,cells", body: "Every little box is called a 'Cell'. The lines going across are 'Rows' with Numbers (1, 2, 3) and the up-down lines are 'Columns' with Letters (A, B, C). Cell B2 is exactly in the middle!" },
                    { subtitle: "Typing Data", image: "https://loremflickr.com/600/400/typing,numbers,data", body: "You can click any cell and type words or numbers. For example, make a list of your friends in Column A, and type their ages next to their names in Column B." },
                    { subtitle: "The Magic AutoSum", image: "https://loremflickr.com/600/400/autosum,calculator", body: "Highlight ten boxes with numbers in them, then click the 'AutoSum' button (it looks like a weird zig-zag). It instantly adds them all together and prints the total at the bottom!" }
                ]
            }
        },
        {
            id: 'ppt-3',
            title: 'PPT-3',
            category: 'creative_tools',
            icon: <Presentation className="w-5 h-5 text-orange-500" />,
            content: {
                heading: "Professional Slideshow Flow",
                text: "To make an amazing presentation, we need to add sound effects and learn to use 'Master Slides'!",
                sections: [
                    { subtitle: "Adding Sound Effects", image: "https://loremflickr.com/600/400/applause,sound,kids", body: "You can add sounds to your slide! Make a picture of a dog bark when you click it, or make a cheering sound play when the final slide appears." },
                    { subtitle: "Master Slides", image: "https://loremflickr.com/600/400/master,template", body: "A Master Slide is a magic background template. If you put a school logo on the 'Master Slide', it will automatically appear perfectly on all 50 slides without you having to copy it." },
                    { subtitle: "Hyperlinking Slides", image: "https://loremflickr.com/600/400/buttons,hyperlink", body: "You don't always have to go in order! You can add a button to Slide 1 that jumps instantly to Slide 10 when you click it in front of the class." },
                    { subtitle: "Export as Video", image: "https://loremflickr.com/600/400/video,export", body: "Did you know PowerPoint can turn your slideshow into a movie? Click 'File' > 'Export as Video', and you can upload your presentation straight to YouTube!" }
                ]
            }
        },
        {
            id: 'python-2',
            title: 'PYTHON-2',
            category: 'programming',
            icon: <Code2 className="w-5 h-5 text-yellow-500" />,
            content: {
                heading: "Making Python Decisions",
                text: "Let's make our code smart! We will teach the Python computer how to ask questions and make choices.",
                sections: [
                    { subtitle: "If and Else Statements", image: "https://loremflickr.com/600/400/crossroads,sign", body: "An 'If statement' checks a rule. If age = 10: print('You are older than 9!'). If the rule isn't true, Python goes to 'Else' and does something different instead!" },
                    { subtitle: "User Inputs", image: "https://loremflickr.com/600/400/keyboard,typing,input", body: "To ask the user a question, type: name = input('What is your name?'). The computer stops and waits patiently for the human to type an answer." },
                    { subtitle: "While Loops", image: "https://loremflickr.com/600/400/loop,circle,spin", body: "A 'Loop' repeats code over and over automatically. Type: While score < 100: print('Keep playing!'). The game won't stop until the score gets very high." },
                    { subtitle: "Making a Guessing Game", image: "https://loremflickr.com/600/400/guessing,number", body: "Using all these tools together, we can program a game where the computer thinks of a secret number between 1 and 10, and you have to guess it using a While Loop!" }
                ]
            }
        },
        {
            id: 'internet-2',
            title: 'INTERNET-2',
            category: 'internet',
            icon: <Globe2 className="w-5 h-5 text-blue-500" />,
            content: {
                heading: "Internet Safety and Cloud Storage",
                text: "The internet connects everything, but we need to stay safe and understand where our files actually go.",
                sections: [
                    { subtitle: "Creating Strong Passwords", image: "https://loremflickr.com/600/400/padlock,password", body: "Never use '1234' or 'password'. A strong password is a mix of big letters, numbers, and symbols—like G3n!u$B0y51." },
                    { subtitle: "What is 'The Cloud'?", image: "https://loremflickr.com/600/400/cloud,computing", body: "The Cloud isn't really a white fluffy cloud! It just means your pictures are saved on a giant server in another state, so if your iPad breaks, your photos are still safe." },
                    { subtitle: "Downloading Safely", image: "https://loremflickr.com/600/400/download,shield", body: "Only download games from official stores like Google Play or Steam. If you download files from strange websites, they might have hidden viruses inside them." },
                    { subtitle: "HTTPS Security", image: "https://loremflickr.com/600/400/https,lock", body: "Look at the very top of your browser! If the URL starts with 'HTTPS' and has a tiny lock next to it, it means your connection is private and safe to use." }
                ]
            }
        },
        {
            id: 'html-2',
            title: 'HTML-2',
            category: 'internet',
            icon: <Code2 className="w-5 h-5 text-orange-600" />,
            content: {
                heading: "Adding Images and Links to Websites",
                text: "Our webpages from Class 7 just had text. Let's make them look like real websites with pictures and clickable links!",
                sections: [
                    { subtitle: "Adding an Image Tag", image: "https://loremflickr.com/600/400/html,image,tag", body: "To put a photo on your site, use the <img> tag! You have to tell it the exact name of the picture: <img src='mydog.jpg'>." },
                    { subtitle: "Creating Clickable Links", image: "https://loremflickr.com/600/400/hyperlink,blue", body: "We use the anchor <a> tag to make links! If you type <a href='google.com'>Click Here</a>, the words turn blue, and clicking them takes you to Google." },
                    { subtitle: "Making Ordered Lists", image: "https://loremflickr.com/600/400/number,list,123", body: "Need to write a numbered recipe? Use the <ol> tag. It automatically numbers your steps '1, 2, 3' in a perfectly straight column down the page." },
                    { subtitle: "Making Bulleted Lists", image: "https://loremflickr.com/600/400/bullet,dots", body: "The <ul> (Unordered List) tag does the exact same thing, but instead of using numbers, it prints neat black dots (bullets) next to every item." }
                ]
            }
        },
        {
            id: 'css-1',
            title: 'CSS-1',
            category: 'internet',
            icon: <Code2 className="w-5 h-5 text-indigo-400" />,
            content: {
                heading: "Painting HTML with CSS",
                text: "HTML is like the skeleton of a website. 'CSS' is the colorful clothing we put on top to make it look amazing!",
                sections: [
                    { subtitle: "What is CSS?", image: "https://loremflickr.com/600/400/css,design", body: "CSS stands for Cascading Style Sheets. It is a completely different code language that works directly with HTML to paint colors and change sizes." },
                    { subtitle: "Coloring Paragraphs", image: "https://loremflickr.com/600/400/colorful,paragraph", body: "In CSS, you target the part of the website you want to paint. You can write: p { color: blue; } to instantly turn all normal text bright blue!" },
                    { subtitle: "Changing Backgrounds", image: "https://loremflickr.com/600/400/background,color", body: "You can write body { background-color: yellow; } to change your entire massive webpage from a boring white screen to a sunny yellow canvas." },
                    { subtitle: "Adding Padding", image: "https://loremflickr.com/600/400/cushion,padding", body: "If your text is squished too close to the edges of the box, you add 'padding'. It acts like invisible squishy foam, pushing the ugly borders away from your words." }
                ]
            }
        },
        {
            id: 'machine-learning',
            title: 'MACHINE LEARNING',
            category: 'ai',
            icon: <BrainCircuit className="w-5 h-5 text-fuchsia-600" />,
            content: {
                heading: "How Computers Teach Themselves",
                text: "Normally, humans have to write every line of code. But with Machine Learning, computers are smart enough to write their own rules by looking at patterns!",
                sections: [
                    { subtitle: "What is Machine Learning?", image: "https://loremflickr.com/600/400/machine,learning,robot", body: "It is a special subject inside AI where instead of being permanently programmed, computers use math to learn from their mistakes and get better." },
                    { subtitle: "The Mario Game Example", image: "https://loremflickr.com/600/400/mario,playing,game", body: "An ML program tries to play Super Mario but falls off a cliff immediately. It tells itself, 'Mistake! Walking forward was bad. Let's try Jumping next time!' The computer learns the game by playing over and over." },
                    { subtitle: "Recommendation Engines", image: "https://loremflickr.com/600/400/netflix,movies", body: "Machine Learning runs YouTube, TikTok, and Netflix. Every time you skip a video, the robot learns you didn't like it. Over time, it perfectly predicts what you DO want to watch!" },
                    { subtitle: "Neural Networks", image: "https://loremflickr.com/600/400/brain,neurons", body: "To do incredibly difficult tasks, scientists design ML using 'Neural Networks'. This means laying out thousands of mini math calculators connected to mimic the neurons in a real human brain." }
                ]
            }
        }
    ]
};
