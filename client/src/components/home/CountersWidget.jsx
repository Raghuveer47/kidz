import React from 'react';
import { Users, Library, CheckCircle, Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = React.useState(0);
    const nodeRef = React.useRef(null);
    const isInView = useInView(nodeRef, { once: false, margin: "-100px" });

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value.replace(/,/g, ''));
            if (start === end) return;

            let totalMilSecs = duration * 1000;
            let incrementTime = (totalMilSecs / end) * 2;

            const timer = setInterval(() => {
                start += Math.ceil(end / (totalMilSecs / 50));
                if (start > end) start = end;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, 50);

            return () => clearInterval(timer);
        }
    }, [value, duration, isInView]);

    return <span ref={nodeRef}>{count.toLocaleString()}+</span>;
};

const CountersWidget = () => {
    const stats = [
        {
            icon: <Users className="w-8 h-8 text-white" />,
            label: "Visitors Per Day",
            value: "1000",
            bgColor: "bg-blue-500",
            shadowColor: "shadow-blue-500/30"
        },
        {
            icon: <Library className="w-8 h-8 text-white" />,
            label: "Curated Courses",
            value: "100",
            bgColor: "bg-emerald-500",
            shadowColor: "shadow-emerald-500/30"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-white" />,
            label: "Interactive Quizzes",
            value: "10000",
            bgColor: "bg-purple-500",
            shadowColor: "shadow-purple-500/30"
        },
        {
            icon: <Code className="w-8 h-8 text-white" />,
            label: "Student Projects",
            value: "500",
            bgColor: "bg-amber-500",
            shadowColor: "shadow-amber-500/30"
        }
    ];

    return (
        <section className="py-20 bg-gray-900 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className={`w-20 h-20 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-6 shadow-xl ${stat.shadowColor} transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300`}>
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                <AnimatedCounter value={stat.value} />
                            </div>
                            <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountersWidget;
