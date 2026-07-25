import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    whileHover={{ scale: 1.12, y: -5, rotate: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 rounded-full border border-cyan-100/70 bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500 p-3 text-white shadow-[0_8px_30px_rgba(15,23,42,0.35)] transition-all duration-300 pointer-events-auto hover:from-cyan-200 hover:via-sky-300 hover:to-fuchsia-400"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-6 w-6 drop-shadow-[0_2px_4px_rgba(15,23,42,0.35)]" strokeWidth={2.8} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
