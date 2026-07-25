import React from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificationDetails = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-primary to-blue-900 relative overflow-hidden text-white">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
                        Valuable Certificates for Every Milestone
                    </h2>

                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                        Upon successful completion of each class curriculum or technology module, students receive verifiable certificates. These certificates add immense value to your child's educational portfolio, proving their proficiency in modern computing and AI.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {['Easily Shareable on LinkedIn & School Profiles', 'Lifetime Validity'].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                                <span className="text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-2 border-white/50 hover:bg-gray-100">
                        <Download className="w-5 h-5" />
                        View Sample Certificate
                    </button>
                </motion.div>

                {/* Right Certificate Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:w-1/2 w-full mt-10 lg:mt-0"
                >
                    <div className="relative w-full overflow-hidden rounded-2xl border-4 border-white/70 bg-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/certificate-sample.png"
                            alt="Sample certificate"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CertificationDetails;
