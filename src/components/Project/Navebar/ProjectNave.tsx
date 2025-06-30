'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'

const ProjectNave = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleNavigation = (item: string) => {
    if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (item === 'About') document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'Projects') document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'Contact') document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })

    // Automatically close the mobile menu after click
    setMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-orange-500/10 border-b border-orange-500/20' : 'bg-black/80 backdrop-blur-lg shadow-md'}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer">
          CM
        </div>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex space-x-8 navbar-links">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <span
              key={item}
              className="relative text-sm uppercase tracking-wider text-white cursor-pointer hover:text-orange-400 transition-colors duration-300 group"
              onClick={() => handleNavigation(item)}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-500 group-hover:w-full"></span>
            </span>
          ))}
        </div> */}

        {/* Social Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/c-mulge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 group"
            title="GitHub"
          >
            <Github size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/channveer-mulge/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-orange-500 border border-orange-500 text-black hover:bg-gray-800 hover:text-orange-400 hover:border-gray-700 transition-all duration-300 group"
            title="LinkedIn"
          >
            <Linkedin size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm py-6 px-8 flex flex-col space-y-6 animate-slide-down">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <span
              key={item}
              className="relative text-sm uppercase tracking-wider text-white cursor-pointer hover:text-orange-400 transition-colors duration-300 group"
              onClick={() => handleNavigation(item)}
            >
              {item}
navigateTo              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-500 group-hover:w-full"></span>
            </span>
          ))}

          {/* Mobile Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700">
            <a
              href="https://github.com/c-mulge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/channveer-mulge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-orange-500 border border-orange-500 text-black hover:bg-gray-800 hover:text-orange-400 transition-all duration-300"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default ProjectNave
