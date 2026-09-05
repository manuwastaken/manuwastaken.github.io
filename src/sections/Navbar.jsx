import React, { useState } from 'react';
import { motion } from "framer-motion";

function Navigation({ onItemClick }) {
  return (
    <ul className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 text-xs font-mono">
      <li>
        <a 
          onClick={onItemClick}
          className="text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5" 
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a 
          onClick={onItemClick}
          className="text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5" 
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a 
          onClick={onItemClick}
          className="text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5" 
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a 
          onClick={onItemClick}
          className="text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5" 
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="max-w-4xl mx-auto rounded-full bg-midnight/80 border border-white/10 backdrop-blur-xl px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Brand/Logo */}
        <a href="#home" className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
          <span className="size-2 rounded-full bg-lavender" />
          Abdul Rehman
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <Navigation />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
        >
          <img
            src={isOpen ? `${import.meta.env.BASE_URL}assets/close.svg` : `${import.meta.env.BASE_URL}assets/menu.svg`}
            className="w-5 h-5"
            alt="Toggle Menu"
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          className="sm:hidden mt-2 p-4 rounded-3xl bg-midnight/95 border border-white/10 backdrop-blur-2xl text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Navigation onItemClick={() => setIsOpen(false)} />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;