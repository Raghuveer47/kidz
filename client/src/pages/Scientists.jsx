import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Scientists = () => {
    const scientists = [
        {
            name: 'Dennis Ritchie',
            title: 'Creator of the C programming language',
            highlight: 'Helped create the C language and the Unix operating system, which power many modern systems today.',
        },
        {
            name: 'Guido van Rossum',
            title: 'Creator of Python',
            highlight: 'Designed Python to be simple and readable, making it one of the best first languages for kids and beginners.',
        },
        {
            name: 'James Gosling',
            title: 'Creator of Java',
            highlight: 'Created Java, a language used in everything from large enterprise systems to Android apps.',
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
                        <Lightbulb className="w-4 h-4" />
                        Know more about scientists
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        The minds behind your favourite programming languages
                    </h1>
                    <p className="text-lg text-gray-600">
                        These inventors changed the world of technology. Learning a bit about their stories can inspire kids to build and
                        explore with code.
                    </p>
                </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {scientists.map((person, idx) => (
                    <motion.div
                        key={person.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h2>
                        <p className="text-sm font-semibold text-primary mb-3">{person.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{person.highlight}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
                This page is a quick introduction. Encourage your child to search and read more about these scientists and how their ideas shaped modern computing.
            </div>
            </div>
        </section>
    );
};

export default Scientists;

