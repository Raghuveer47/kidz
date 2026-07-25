import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Brain, Smartphone, Database, Cloud, Zap, Cpu } from 'lucide-react';

const TechnologyDetails = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const technologies = [
        {
            id: 'fullstack',
            icon: <Code className="w-12 h-12 text-blue-500" />,
            title: "Full Stack Web Development",
            syllabusLabel: "View Full Stack Syllabus",
            description: "Learn to build comprehensive, production-ready web applications from scratch.",
            tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
            gradient: "from-blue-500 to-indigo-600",
            bgLight: "bg-blue-50"
        },
        {
            id: 'cybersecurity',
            icon: <Shield className="w-12 h-12 text-emerald-500" />,
            title: "Cyber Security & Ethical Hacking",
            syllabusLabel: "View Cyber Security Syllabus",
            description: "Understand the fundamentals of network security, cryptography, and safe online practices.",
            tags: ["Network Security", "Cryptography", "Ethical Hacking", "Digital Forensics"],
            gradient: "from-emerald-400 to-teal-500",
            bgLight: "bg-emerald-50"
        },
        {
            id: 'ai',
            icon: <Brain className="w-12 h-12 text-purple-500" />,
            title: "Artificial Intelligence & AI Tools",
            syllabusLabel: "View AI Syllabus",
            description: "Dive into the world of machine learning, neural networks, and generative AI platforms.",
            tags: ["Machine Learning", "Neural Networks", "Generative AI", "Python"],
            gradient: "from-purple-500 to-fuchsia-500",
            bgLight: "bg-purple-50"
        },
        {
            id: 'mobile',
            icon: <Smartphone className="w-12 h-12 text-amber-500" />,
            title: "Mobile App Development",
            syllabusLabel: "View Mobile App Syllabus",
            description: "Design, build, and deploy native and cross-platform mobile applications.",
            tags: ["React Native", "Flutter", "iOS", "Android"],
            gradient: "from-amber-400 to-orange-500",
            bgLight: "bg-amber-50"
        },
        {
            id: 'data',
            icon: <Database className="w-12 h-12 text-cyan-500" />,
            title: "Data Science & Analytics",
            syllabusLabel: "View Data Science Syllabus",
            description: "Learn how to collect, analyze, and visualize data to make informed decisions.",
            tags: ["Python", "Pandas", "SQL", "Data Visualization"],
            gradient: "from-cyan-400 to-blue-500",
            bgLight: "bg-cyan-50"
        },
        {
            id: 'cloud',
            icon: <Cloud className="w-12 h-12 text-sky-500" />,
            title: "Cloud Computing",
            syllabusLabel: "View Cloud Syllabus",
            description: "Understand the infrastructure that powers modern applications.",
            tags: ["AWS", "Azure", "Cloud Architecture", "Deployment"],
            gradient: "from-sky-400 to-indigo-500",
            bgLight: "bg-sky-50"
        },
        {
            id: 'game',
            icon: <Zap className="w-12 h-12 text-rose-500" />,
            title: "Game Development",
            syllabusLabel: "View Game Development Syllabus",
            description: "Create interactive 2D and 3D games using industry-standard engines.",
            tags: ["Unity", "C#", "Game Design", "3D Modeling"],
            gradient: "from-rose-400 to-red-500",
            bgLight: "bg-rose-50"
        },
        {
            id: 'iot',
            icon: <Cpu className="w-12 h-12 text-lime-500" />,
            title: "Internet of Things (IoT)",
            syllabusLabel: "View IoT Syllabus",
            description: "Connect hardware with software by programming microcontrollers and sensors.",
            tags: ["Arduino", "Raspberry Pi", "Sensors", "Robotics Basics"],
            gradient: "from-lime-400 to-green-500",
            bgLight: "bg-lime-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            {/* Header Section */}
            <div className="bg-gray-900 text-white py-20 relative overflow-hidden mt-[-96px] pt-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology Tracks</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover comprehensive learning paths designed to turn curious beginners into proficient creators across the most in-demand fields in tech.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Technologies Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {technologies.map((tech) => (
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.01 }}
                            key={tech.id}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col sm:flex-row group transition-all duration-300"
                        >
                            <div className={`sm:w-1/3 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                                    className={`w-24 h-24 rounded-2xl ${tech.bgLight} flex items-center justify-center mb-4 shadow-inner relative z-10 bg-white`}
                                >
                                    {tech.icon}
                                </motion.div>
                            </div>

                            <div className="sm:w-2/3 p-8 flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {tech.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {tech.description}
                                </p>

                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Skills Covered</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.tags.map((tag, i) => (
                                            <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${tech.bgLight} text-gray-700 border border-gray-100`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className={`mt-8 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${tech.gradient} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-90 hover:opacity-100`}>
                                    {tech.syllabusLabel}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default TechnologyDetails;
