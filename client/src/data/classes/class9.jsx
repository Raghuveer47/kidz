import React from 'react';
import { ShieldAlert, TableProperties, Code2, Globe2, Sparkles, TerminalSquare } from 'lucide-react';

export const class9Data = {
    className: "Class 9",
    topics: [
        {
            id: 'viruses-security',
            title: 'VIRUSES-1 & SECURITY BASICS',
            category: 'computer_basics',
            icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
            content: {
                heading: "Defending Against Digital Bugs",
                text: "Computers can get sick just like humans! Let's learn about the tiny, evil programs that cause trouble and how we stop them.",
                sections: [
                    { subtitle: "What is a Computer Virus?", image: "https://loremflickr.com/600/400/virus,bug,computer", body: "A computer virus is a bad piece of code written by a hacker. If it gets inside your PC, it can delete your files or make the computer run super slow." },
                    { subtitle: "How Do They Spread?", image: "https://loremflickr.com/600/400/email,virus", body: "Viruses hide inside fake websites or suspicious emails. If you download a 'Free Game' from a stranger, it might actually be a virus in disguise!" },
                    { subtitle: "Antivirus Software", image: "https://loremflickr.com/600/400/shield,antivirus", body: "Antivirus is like a security guard for your computer. It constantly scans every file you download to make sure no bad bugs are hiding inside." },
                    { subtitle: "Phishing Scams", image: "https://loremflickr.com/600/400/phishing,hook,email", body: "Sometimes a hacker sends an email pretending to be your bank, asking for your password. This trick is called 'Phishing'. Never give your password away!" }
                ]
            }
        },
        {
            id: 'excel-2',
            title: 'EXCEL-2',
            category: 'creative_tools',
            icon: <TableProperties className="w-5 h-5 text-emerald-600" />,
            content: {
                heading: "Formulas and Charts in Excel",
                text: "We learned to add numbers. Now let's turn those numbers into beautiful, colorful graphs!",
                sections: [
                    { subtitle: "Writing Formulas", image: "https://loremflickr.com/600/400/math,formula,excel", body: "You don't just have to add. You can click a cell and type =A1*B1. Excel will instantly multiply the two boxes together like a math genius." },
                    { subtitle: "Creating a Pie Chart", image: "https://loremflickr.com/600/400/pie,chart,colorful", body: "Highlight your list of favorite fruits and how many kids like them. Click 'Insert' -> 'Pie Chart', and Excel instantly draws a perfect, colorful circle showing the winner!" },
                    { subtitle: "Bar Graphs", image: "https://loremflickr.com/600/400/bar,graph,tall", body: "A Bar Graph is great for comparing things. The taller the colored bar, the bigger the number! It makes it super easy to read data without looking at math." },
                    { subtitle: "Sorting Data", image: "https://loremflickr.com/600/400/sort,alphabetical", body: "Have a messy list of 100 names? Click 'Sort A to Z', and Excel instantly rearranges the entire list into perfect alphabetical order." }
                ]
            }
        },
        {
            id: 'python-3',
            title: 'PYTHON-3',
            category: 'programming',
            icon: <Code2 className="w-5 h-5 text-yellow-500" />,
            content: {
                heading: "Functions and Lists in Python",
                text: "To build bigger games, we need to organize our code so it doesn't become a giant, confusing mess.",
                sections: [
                    { subtitle: "Creating a List", image: "https://loremflickr.com/600/400/list,inventory,game", body: "In a video game, you need an inventory. You can write: backpack = ['Sword', 'Apple', 'Shield']. Python remembers exactly what items you have!" },
                    { subtitle: "What is a Function?", image: "https://loremflickr.com/600/400/factory,machine", body: "A Function is like a mini-factory. We write a chunk of code once, name it 'Jump()', and then we can use it 100 times without ever typing the code again." },
                    { subtitle: "Passing Arguments", image: "https://loremflickr.com/600/400/giving,box", body: "We can give 'ingredients' to our function factory. For example, if we call Jump(5), the factory knows we want the character to jump exactly 5 feet high." },
                    { subtitle: "Importing Modules", image: "https://loremflickr.com/600/400/library,books,magic", body: "Other programmers have already written amazing code! In Python, you can type 'import math' to instantly borrow their super-advanced calculator tools for your own game." }
                ]
            }
        },
        {
            id: 'c-basics-1',
            title: 'C-1',
            category: 'programming',
            icon: <TerminalSquare className="w-5 h-5 text-indigo-500" />,
            content: {
                heading: "The Legendary Language: C",
                text: "Python is easy to read, but 'C' is the legendary, lightning-fast language used to build the Xbox and PlayStation!",
                sections: [
                    { subtitle: "Why learn C?", image: "https://loremflickr.com/600/400/racecar,fast", body: "Because C code talks directly to the computer's motherboard, it runs much faster than Python. It is the language for high-speed video games." },
                    { subtitle: "The Main Function", image: "https://loremflickr.com/600/400/door,entrance", body: "In C, your code won't run unless it starts exactly here: int main(). This is the front door of the program where the computer enters." },
                    { subtitle: "Printing in C", image: "https://loremflickr.com/600/400/print,c,code", body: "Instead of 'print', C uses a confusing older word. You must write: printf('Hello World!'); Don't forget the semicolon at the end!" },
                    { subtitle: "Strict Rules", image: "https://loremflickr.com/600/400/rules,strict,teacher", body: "C is very picky! If you forget a single semicolon (;) or spelled 'printf' wrong, the whole game crashes immediately and yells at you." }
                ]
            }
        },
        {
            id: 'html-3',
            title: 'HTML-3',
            category: 'internet',
            icon: <Globe2 className="w-5 h-5 text-orange-600" />,
            content: {
                heading: "Building Website Forms",
                text: "Websites aren't just for reading; they are for talking back! Let's build boxes so users can answer questions.",
                sections: [
                    { subtitle: "The <form> Tag", image: "https://loremflickr.com/600/400/form,paper", body: "Whenever you log into Roblox, you use a form. To build it, you wrap everything in the massive <form> tag to tell the browser you are collecting answers." },
                    { subtitle: "Text Inputs", image: "https://loremflickr.com/600/400/text,box,typing", body: "The <input type='text'> tag literally draws an empty white rectangular box on the screen where the human can click and type their name." },
                    { subtitle: "Radio Buttons", image: "https://loremflickr.com/600/400/radio,buttons,circle", body: "Want them to pick 'Yes' or 'No'? The <input type='radio'> tag creates little circles. You can only click ONE circle at a time, like a multiple-choice test." },
                    { subtitle: "The Submit Button", image: "https://loremflickr.com/600/400/submit,button", body: "At the very end, you use <input type='submit'>. This puts a giant button on the page that officially sends all their typed answers to the secret server." }
                ]
            }
        },
        {
            id: 'css-2',
            title: 'CSS-2',
            category: 'internet',
            icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
            content: {
                heading: "Styling and Spacing Your Website",
                text: "Now that we have ugly forms and text, let's learn how CSS makes everything align perfectly in the middle of the screen.",
                sections: [
                    { subtitle: "The Box Model", image: "https://loremflickr.com/600/400/box,model,css", body: "CSS treats every picture and word like it is sitting inside an invisible cardboard box. We have to tell the box exactly how big it is allowed to be." },
                    { subtitle: "Margin Spacing", image: "https://loremflickr.com/600/400/margin,space", body: "Unlike 'padding' (which is inside the box), 'Margin' pushes OTHER boxes away. If two pictures are touching, add Margin to shove them apart." },
                    { subtitle: "Changing Fonts", image: "https://loremflickr.com/600/400/fonts,styles,css", body: "You can write font-family: 'Arial'; to instantly change the boring website letters into a clean, modern, professional font." },
                    { subtitle: "Aligning Text", image: "https://loremflickr.com/600/400/center,text,css", body: "By default, text is stuck to the left wall. You can write text-align: center; and it beautifully moves the title right into the middle of the screen!" }
                ]
            }
        },
        {
            id: 'gen-ai',
            title: 'GEN AI',
            category: 'ai',
            icon: <Sparkles className="w-5 h-5 text-purple-600" />,
            content: {
                heading: "The Magic of Generative AI",
                text: "Most AI just looks for patterns. But Generative AI is capable of creating completely new, original art and stories from scratch!",
                sections: [
                    { subtitle: "What is Generative AI?", image: "https://loremflickr.com/600/400/magic,wand,ai", body: "While old AI could only answer true/false questions, 'Gen-AI' can generate a 10-page story or paint a picture of a flying cat that has never existed before." },
                    { subtitle: "Image Generators", image: "https://loremflickr.com/600/400/painting,canvas,robot", body: "Programs like Midjourney let you type 'A dog in an astronaut suit on Mars', and in exactly 10 seconds, the AI paints a masterpiece for you!" },
                    { subtitle: "Text Generators", image: "https://loremflickr.com/600/400/typing,robot,essay", body: "ChatGPT is a text generator. It doesn't copy from Google; instead, it writes completely original sentences word-by-word based on what you asked." },
                    { subtitle: "The Risk of Hallucinations", image: "https://loremflickr.com/600/400/confused,robot,lying", body: "Sometimes Gen-AI tries too hard to be helpful. If it doesn't know the answer to your math homework, it might confidently invent a fake answer! Always double-check its work." }
                ]
            }
        },
        {
            id: 'math-for-ai',
            title: 'MATH FOR AI',
            category: 'ai',
            icon: <TableProperties className="w-5 h-5 text-rose-500" />,
            content: {
                heading: "The Secret Language of AI",
                text: "You can't program an AI by just speaking English. Underneath the hood, an AI is really just an enormous math equation!",
                sections: [
                    { subtitle: "Why does AI need Math?", image: "https://loremflickr.com/600/400/math,chalkboard", body: "A computer can only understand Zeroes and Ones. When it looks at a picture of a cat, it actually translates all the pixels into a giant spreadsheet of numbers." },
                    { subtitle: "Probability and Guesses", image: "https://loremflickr.com/600/400/dice,probability", body: "AI is a game of guessing. It uses 'Probability' (the math of chances) to say, 'I am 95% sure this picture is a dog, and 5% sure it is a cat'." },
                    { subtitle: "Algebra and Weights", image: "https://loremflickr.com/600/400/scales,math", body: "Inside a neural network, some clues are more important than others. The AI uses Algebra to give heavy 'weight' to the bark sound, and less weight to the fur color." },
                    { subtitle: "Statistics", image: "https://loremflickr.com/600/400/chart,statistics", body: "AI looks at millions of examples to find the average. By studying the statistics, it learns the 'normal' way a human speaks so it can talk back normally." }
                ]
            }
        }
    ]
};
