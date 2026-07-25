import React from 'react';
import { TerminalSquare } from 'lucide-react';

const cmdIcon = <TerminalSquare className="w-5 h-5 text-slate-700" />;

function section(subtitle, body, image, extra = {}) {
    return { subtitle, body, image, ...extra };
}

/** Class 7 (a) — Working with Command Prompt (single page). */
export const commandPromptTopic = {
    id: 'command-prompt',
    title: 'WORKING WITH COMMAND PROMPT',
    category: 'computer_basics',
    icon: cmdIcon,
    content: {
        heading: 'Working with Command Prompt',
        text:
            'The Command Prompt (cmd) is a text-based way to talk to Windows—like a backstage pass behind icons and menus. Class 7 learns safe, useful commands: open cmd, list folders, change directory, make folders, and clear the screen.',
        sections: [
            section(
                'What is Command Prompt?',
                'Command Prompt runs text commands you type instead of clicking. Old DOS systems used similar commands; modern Windows still includes cmd for technicians and learners.\n\nOpening it: Start → type cmd → Enter (or Windows Terminal). The window shows a path like C:\\Users\\YourName> waiting for your command.',
                'https://loremflickr.com/700/450/command,prompt,terminal'
            ),
            section(
                'Essential commands',
                'dir — list files and folders in the current location.\n\ncd FolderName — change directory (enter a folder).\n\ncd .. — go up one folder.\n\nmkdir ProjectName — make a new folder.\n\ncls — clear the screen.\n\nexit — close Command Prompt.',
                'https://loremflickr.com/700/450/typing,command,keyboard',
                {
                    bulletsHeading: 'Example session',
                    bullets: [
                        'cd Desktop → move to Desktop.',
                        'mkdir Class7Lab → create folder Class7Lab.',
                        'dir → see Class7Lab in the list.',
                        'cls → clean screen before next command.',
                    ],
                }
            ),
            section(
                'Paths and safety',
                'Paths use backslashes on Windows: C:\\Users\\Student\\Documents.\n\nTab key can auto-complete folder names.\n\nNever run commands you do not understand from random websites.\n\nOn school PCs, follow teacher rules—some commands are blocked.\n\ndel and format can delete data—students observe demos only unless assigned.',
                'https://loremflickr.com/700/450/computer,safety,rules'
            ),
            section(
                'Why learn cmd?',
                'Programmers use terminals for Python, Git, and servers.\n\nIT staff fix networks with commands faster than many clicks.\n\nUnderstanding cmd helps you read error messages and logs in later classes.',
                'https://loremflickr.com/700/450/developer,terminal,code'
            ),
        ],
    },
};
