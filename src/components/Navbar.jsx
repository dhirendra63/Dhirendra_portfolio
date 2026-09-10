import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { data } from '../data/portfolioData';
// import { FaEye } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Coding', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-gradient cursor-pointer"
                >
                    {data.name}
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-sm hover:text-accentCyan transition-colors">
                            {link}
                        </a>
                    ))}
     <a href="/resume_dhirendra.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-full bg-accentPurple text-white font-semibold hover:bg-accentPurple/90 transition-all">
   Resume
  {/* <FaEye /> */}
</a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-darkNavy p-6 flex flex-col gap-4 border-b border-white/10"
                >
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg">
                            {link}
                        </a>
                    ))}
                    <a href={data.resumeUrl} download className="bg-accentPurple text-center py-3 rounded-xl font-medium">
                        Download Resume
                    </a>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
