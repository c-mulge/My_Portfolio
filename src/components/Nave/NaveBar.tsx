'use client'

import { Github, Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".navbar-container", { opacity: 0, y: -30, duration: 0.8, ease: "power3.out" });
    gsap.from(".navbar-logo", { opacity: 0, x: -20, duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsap.from(".navbar-links span", { opacity: 0, y: -10, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.4 });
    gsap.from(".navbar-social a", { opacity: 0, x: 20, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.6 });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-orange-500/20 transition-all duration-500 ${scrolled ? 'shadow-xl bg-black/50' : ''} navbar-container`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="navbar-logo text-2xl font-extrabold text-orange-400 cursor-pointer tracking-wide"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          CM
        </div>

        {/* Links */}
        <div className="flex space-x-8 navbar-links">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <span
              key={item}
              className="relative text-sm uppercase tracking-wider text-white cursor-pointer hover:text-orange-400 transition-colors duration-300 group"
              onClick={() => {
                if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
                else if (item === 'About') document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                else if (item === 'Projects') document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                else if (item === 'Contact') document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-500 group-hover:w-full"></span>
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 navbar-social">
          <a href="https://github.com/c-mulge" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors duration-300">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/channveer-Mulge/" target='_blank' rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors duration-300">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
