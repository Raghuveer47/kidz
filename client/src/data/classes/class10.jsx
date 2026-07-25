import React from 'react';
import { ShieldCheck, HardDriveDownload, Code2, Layers, Bot, TableProperties } from 'lucide-react';

export const class10Data = {
    className: "Class 10",
    topics: [
        {
            id: 'viruses-backup',
            title: 'VIRUSES-2 & BACKUP RECOVERY',
            category: 'computer_basics',
            icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
            content: {
                heading: "The Ultimate Security Plan",
                text: "We know viruses exist. Now let's learn how to completely protect our computer so our files are never lost!",
                sections: [
                    { subtitle: "Updating Your PC", image: "https://loremflickr.com/600/400/update,download,bar", body: "Hackers constantly create new viruses. Microsoft constantly creates new armor. Always 'Update' your computer to install the latest, thickest armor." },
                    { subtitle: "What is a Backup?", image: "https://loremflickr.com/600/400/backup,files", body: "A backup is like taking a photograph of all your homework so if the original paper burns in a fire, you still have the exact copy!" },
                    { subtitle: "External Hard Drives", image: "https://loremflickr.com/600/400/hard,drive,usb", body: "You must backup your computer onto a separate, physical box called an External Hard Drive. If your computer totally breaks, you plug the drive into a new computer and boom! Everything is back." },
                    { subtitle: "System Restore", image: "https://loremflickr.com/600/400/time,machine,computer", body: "Windows has a secret Time Machine! If you click a bad link on Tuesday and your PC breaks, you can click 'System Restore' to rewind the computer back to exactly how it was on Monday." }
                ]
            }
        },
        {
            id: 'os-installation',
            title: 'OS INSTALLATION',
            category: 'computer_basics',
            icon: <HardDriveDownload className="w-5 h-5 text-indigo-500" />,
            content: {
                heading: "Building a Brain from Scratch",
                text: "When you build a brand new computer, it is empty. It has no brain. Let's learn to install Windows from scratch!",
                sections: [
                    { subtitle: "The USB Installer", image: "https://loremflickr.com/600/400/usb,flash,drive", body: "You can't download Windows from the internet on an empty computer! You have to borrow a friend's PC to put the giant Windows installer onto a little USB stick." },
                    { subtitle: "The BIOS Screen", image: "https://loremflickr.com/600/400/bios,screen,blue", body: "A scary blue screen called 'BIOS' wakes up first. You press F2 on the keyboard and tell the sleeping motherboard to look at the USB stick." },
                    { subtitle: "Formatting the Hard Drive", image: "https://loremflickr.com/600/400/format,drive", body: "Before installing, the computer wipes the entire Hard Drive completely clean so the brand new OS has a fresh, perfect home." },
                    { subtitle: "The Setup Wizard", image: "https://loremflickr.com/600/400/wizard,setup", body: "A friendly blue setup screen appears and asks you what you want your username to be, and what timezone you live in. Then the amazing desktop loads!" }
                ]
            }
        },
        {
            id: 'excel-3',
            title: 'EXCEL-3',
            category: 'creative_tools',
            icon: <TableProperties className="w-5 h-5 text-emerald-600" />,
            content: {
                heading: "Expert Spreadsheet Techniques",
                text: "Ready to be a data wizard? Let's bend all the rules and make Excel do giant tasks for us automatically.",
                sections: [
                    { subtitle: "Multiple Worksheets", image: "https://loremflickr.com/600/400/worksheets,tabs", body: "One huge grid gets confusing. Look at the bottom! You can click the '+' to add 10 different pages in the same file. One page for English homework, one page for Math." },
                    { subtitle: "Freezing Rows", image: "https://loremflickr.com/600/400/freeze,header", body: "If you scroll down to Row 100, the title 'NAMES' at the top disappears! Click 'Freeze Top Row', and the title locks in place forever." },
                    { subtitle: "Conditional Formatting", image: "https://loremflickr.com/600/400/green,red,cells", body: "Click this magic button to make rules. Tell Excel: 'If a student gets an A, paint the box Green. If they fail, paint it Red.' The spreadsheet changes colors instantly as you type." },
                    { subtitle: "The IF() Formula", image: "https://loremflickr.com/600/400/if,formula,math", body: "You can program Excel using Python tricks! Type =IF(A1>50, 'Pass', 'Fail'). Now, Excel makes the choices automatically." }
                ]
            }
        },
        {
            id: 'c-basics-2',
            title: 'C-2',
            category: 'programming',
            icon: <Code2 className="w-5 h-5 text-gray-700" />,
            content: {
                heading: "Advanced C Programming",
                text: "We know how to print words in C. Now let's learn how C holds variables under lock and key in the memory bank.",
                sections: [
                    { subtitle: "Strict Variables", image: "https://loremflickr.com/600/400/box,integer", body: "In Python, a variable can be a word or a number. In C, you MUST declare it. Write: int score = 10; The 'int' tells C this box forever holds an integer (number)." },
                    { subtitle: "The Float Type", image: "https://loremflickr.com/600/400/float,decimal", body: "What if you need decimals for math? You cannot put 5.5 into an 'int' box. You must write: float money = 5.50; to use decimal numbers." },
                    { subtitle: "Memory Addresses", image: "https://loremflickr.com/600/400/address,memory", body: "The secret to C's insane speed is that you can talk directly to the motherboard's RAM chips by pointing precisely to address '0x7FF', completely bypassing the OS." },
                    { subtitle: "Compiling the Code", image: "https://loremflickr.com/600/400/compile,machine,code", body: "Before you run the game, C runs a 'Compiler' that reads all your English words and turns them into a giant brick of Zeroes and Ones for maximum speed." }
                ]
            }
        },
        {
            id: 'java-1',
            title: 'JAVA-1',
            category: 'programming',
            icon: <Code2 className="w-5 h-5 text-orange-600" />,
            content: {
                heading: "The Heavyweight Language: Java",
                text: "You all know Java already! It is the exact programming language that the entire game of Minecraft is built on.",
                sections: [
                    { subtitle: "Why Java is Different", image: "https://loremflickr.com/600/400/java,coffee,cup", body: "While C is very fast, Java says, 'Write Once, Run Anywhere'. It acts like a translator. A Java game will work perfectly on a Windows PC AND a Mac without any changes." },
                    { subtitle: "Classes and Objects", image: "https://loremflickr.com/600/400/blueprint,house", body: "Java is an 'Object-Oriented' language. First you write a 'Class' which acts like a blueprint of a zombie. Then you spawn 100 zombie 'Objects' from that one blueprint!" },
                    { subtitle: "Public Static Void", image: "https://loremflickr.com/600/400/public,static,void", body: "To start Java, you have to type: public static void main(String[] args). It is a lot of big words! But it just means it is the main front door to your program." },
                    { subtitle: "Printing in Java", image: "https://loremflickr.com/600/400/system,out,print", body: "In Python we use 'print()'. In Java we must be specific and write: System.out.println('Hello World!'); We literally command the System to output a line to the screen." }
                ]
            }
        },
        {
            id: 'css-3',
            title: 'CSS-3 & BOOTSTRAP-1 & JS-1',
            category: 'internet',
            icon: <Layers className="w-5 h-5 text-indigo-500" />,
            content: {
                heading: "Professional Web Development",
                text: "The web is giant and complex. Let's learn the very best shortcuts for painting our sites, and finally make our buttons actually do something!",
                sections: [
                    { subtitle: "The Magic of Bootstrap", image: "https://loremflickr.com/600/400/bootstrap,website", body: "Typing a million lines of CSS is annoying. Instead, programmers use a 'Library' called Bootstrap. It gives us hundreds of beautiful, pre-painted boxes and buttons immediately." },
                    { subtitle: "Flexbox Layouts", image: "https://loremflickr.com/600/400/flexbox,grid", body: "Instead of violently shoving pictures around with margins, we use CSS 'Flexbox'. If you say display: flex, your photos instantly line up side-by-side like a neat deck of cards!" },
                    { subtitle: "What is JavaScript?", image: "https://loremflickr.com/600/400/js,javascript", body: "HTML builds the skeleton. CSS paints the skeleton. JavaScript (JS) is the muscle that makes the skeleton dance! It puts logic and life into a dead website." },
                    { subtitle: "Adding Dark Mode", image: "https://loremflickr.com/600/400/dark,mode,toggle", body: "Because JS is an actual language like Python, we can write a script: If (button = clicked) { change all background color to pitch black }. Now your site has a Dark Mode toggle!" }
                ]
            }
        },
        {
            id: 'ai-tools',
            title: 'AI TOOLS',
            category: 'ai',
            icon: <Bot className="w-5 h-5 text-purple-600" />,
            content: {
                heading: "Everyday AI Software",
                text: "You don't have to be a master programmer to use incredible AI today. Let's look at the amazing tools waiting to help us.",
                sections: [
                    { subtitle: "ChatGPT", image: "https://loremflickr.com/600/400/chat,chatgpt", body: "The famous language model! You can use it to help study for history, build a massive table for a science project, or explain confusing homework like a private tutor." },
                    { subtitle: "Image Gen (Midjourney)", image: "https://loremflickr.com/600/400/midjourney,painting", body: "Want a beautiful, high-quality photograph of an underwater castle? You can generate it in seconds and immediately use it as the cover of your school report." },
                    { subtitle: "GitHub Copilot", image: "https://loremflickr.com/600/400/copilot,code,kids", body: "Programmers use an AI called Copilot. As they type a new Java game, the AI predicts what they want to write next and instantly finishes their sentences for them!" },
                    { subtitle: "DeepL Translate", image: "https://loremflickr.com/600/400/translate,language", body: "Advanced translation AI is so smart it can read an entire book in Spanish, perfectly understand all the slang and the jokes, and flawlessly rewrite the story in perfect English." }
                ]
            }
        }
    ]
};
