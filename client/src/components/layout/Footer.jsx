import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const exploreLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Pricing & Plans', path: '/pricing' },
        { name: 'Success Stories', path: '/success' },
    ];

    const usefulLinks = [
        { name: 'Scratch Coding Platform', url: 'https://scratch.mit.edu' },
        { name: 'nikhillearnhub.com', url: 'https://nikhillearnhub.com' },
        { name: 'Python Official Docs', url: 'https://docs.python.org/3/tutorial/index.html' },
        { name: 'HTML/CSS Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-cyan-300/35 bg-[radial-gradient(circle_at_20%_15%,rgba(217,70,239,0.2),transparent_32%),radial-gradient(circle_at_80%_85%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(135deg,#0a1a35_0%,#112f56_42%,#1b2f6f_100%)] pt-10 pb-6 sm:pt-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(191,219,254,0.14)_1px,transparent_0)] [background-size:24px_24px]" />
            <motion.div
                aria-hidden
                animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-20 top-6 h-44 w-44 rounded-full bg-fuchsia-400/26 blur-3xl"
            />
            <motion.div
                aria-hidden
                animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="pointer-events-none absolute -right-20 bottom-4 h-52 w-52 rounded-full bg-cyan-300/28 blur-3xl"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 12: Useful Links (Integrated into Footer top section for better UX) */}
                <div className="mb-8 grid grid-cols-1 gap-8 sm:gap-10 md:mb-10 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Column */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <Link to="/" className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                            <motion.img
                                src="/logoimg.jpeg"
                                alt="kidscodingai.com logo"
                                className="h-12 w-12 rounded-xl object-contain bg-white"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.span
                                className="bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-200 bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl"
                                animate={{ textShadow: ['0 0 0px rgba(255,211,119,0)', '0 0 18px rgba(255,211,119,0.45)', '0 0 0px rgba(255,211,119,0)'] }}
                                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                KidsCodingAI.COM
                            </motion.span>
                        </Link>
                        <p className="mb-5 text-center text-sm font-semibold leading-relaxed text-[#e8ddc6] sm:text-base md:text-left">
                            Empowering the next generation of innovators with world-class computer education, programming skills, and AI knowledge.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            <motion.a href="#" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#112d4f] text-[#7ec7ff] ring-1 ring-cyan-300/35 transition-all hover:bg-[#1f4a77] hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </motion.a>
                            <motion.a href="#" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#112d4f] text-[#f79ab7] ring-1 ring-fuchsia-300/35 transition-all hover:bg-[#1f4a77] hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                            <motion.a href="#" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#112d4f] text-[#7dd3fc] ring-1 ring-sky-300/35 transition-all hover:bg-[#1f4a77] hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a href="#" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#112d4f] text-[#93c5fd] ring-1 ring-blue-300/35 transition-all hover:bg-[#1f4a77] hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                        <div className="mt-5 flex flex-nowrap items-center justify-center gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 md:justify-start [&::-webkit-scrollbar]:hidden">
                            <Link
                                to="/privacy"
                                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-cyan-200/70 bg-gradient-to-r from-cyan-500/35 to-sky-500/35 px-2.5 py-1.5 text-[11px] font-semibold text-cyan-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-100 hover:from-cyan-400/45 hover:to-sky-400/45 hover:text-white sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-fuchsia-200/70 bg-gradient-to-r from-fuchsia-500/30 to-violet-500/35 px-2.5 py-1.5 text-[11px] font-semibold text-fuchsia-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-fuchsia-100 hover:from-fuchsia-400/45 hover:to-violet-400/45 hover:text-white sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                to="/cookies"
                                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-amber-200/70 bg-gradient-to-r from-amber-500/30 to-orange-500/35 px-2.5 py-1.5 text-[11px] font-semibold text-amber-100 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-100 hover:from-amber-400/45 hover:to-orange-400/45 hover:text-white sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="rounded-2xl border border-cyan-300/30 bg-[#0f2540]/55 p-4 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.08)]">
                        <motion.h4 whileHover={{ scale: 1.04 }} className="mb-5 inline-flex rounded-full border border-cyan-200/65 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(34,211,238,0.35)] sm:text-sm">Explore</motion.h4>
                        <ul className="space-y-4">
                            {exploreLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="flex items-center gap-2 text-base font-semibold text-[#f0e7d2] transition-colors hover:text-[#ffd377] sm:text-lg">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffd377]"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Our Info */}
                    <div className="rounded-2xl border border-fuchsia-300/30 bg-[#0f2540]/55 p-4 shadow-[inset_0_0_0_1px_rgba(232,121,249,0.1)]">
                        <motion.h4 whileHover={{ scale: 1.04 }} className="mb-5 inline-flex rounded-full border border-fuchsia-200/65 bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(217,70,239,0.35)] sm:text-sm">Contact Us</motion.h4>
                        <ul className="space-y-3 text-sm text-[#f0e7d2] sm:text-base">
                            <li>
                                <span className="block text-sm font-semibold text-[#ffd377]">Email</span>
                                <a href="mailto:info@kidscodingai.com" className="break-all text-base hover:text-[#ffd377]">
                                    info@kidscodingai.com
                                </a>
                            </li>
                            <li>
                                <span className="block text-sm font-semibold text-[#ffd377]">Location</span>
                                <span className="text-base">Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Useful External Links */}
                    <div className="rounded-2xl border border-amber-300/35 bg-[#0f2540]/55 p-4 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.12)] md:col-span-2 lg:col-span-1">
                        <motion.h4 whileHover={{ scale: 1.04 }} className="mb-4 inline-flex whitespace-nowrap rounded-full border border-amber-200/70 bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(251,146,60,0.35)] sm:text-sm">Useful Resources</motion.h4>
                        <ul className="space-y-3">
                            {usefulLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-semibold text-[#f0e7d2] transition-colors group hover:text-[#ffd377] sm:text-lg">
                                        <ExternalLink className="h-4 w-4 text-[#ffd377] transition-colors group-hover:text-[#ffe5a5]" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Newsletter — full width of footer so text + controls never overlap */}
                <div className="mt-6 w-full">
                    <div className="box-border w-full rounded-2xl border-2 border-cyan-300/35 bg-[#0d2240]/90 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.15)]">
                        <div className="flex w-full flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                                <motion.span whileHover={{ scale: 1.02 }} className="w-fit shrink-0 rounded-full border border-cyan-200/65 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white sm:px-4 sm:text-xs">
                                    Newsletter
                                </motion.span>
                                <p
                                    title="Get updates about new classes, projects, and resources for your child."
                                    className="min-w-0 flex-1 text-left text-sm font-medium leading-relaxed text-[#e9e1cd] sm:text-[15px] md:text-base lg:whitespace-nowrap"
                                >
                                    Get updates about new classes, projects, and resources for your child.
                                </p>
                            </div>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex w-full shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3 lg:w-auto lg:min-w-0 lg:max-w-[min(100%,26rem)]"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Your email address"
                                    className="box-border min-h-[44px] w-full min-w-0 flex-1 rounded-full border-2 border-cyan-200/45 bg-[#f3f8ff] px-4 py-2.5 text-sm text-[#334155] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:min-w-[14rem]"
                                />
                                <motion.button
                                    type="submit"
                                    className="box-border min-h-[44px] w-full shrink-0 whitespace-nowrap rounded-full bg-gradient-to-b from-cyan-300 to-blue-500 px-6 py-2.5 text-sm font-black text-[#0f172a] shadow-[0_3px_0_rgba(30,64,175,0.7)] transition-all hover:brightness-105 sm:w-auto"
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-2 border-t border-cyan-300/30 pt-4 text-center text-xs font-semibold text-[#dbeafe] sm:text-sm md:flex-row md:text-left">
                    <p className="flex w-full items-center justify-center text-center">
                        <span>© {currentYear} kidscodingai.com. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
