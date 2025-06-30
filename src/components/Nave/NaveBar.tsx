'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleNavigation = (item: string) => {
    if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (item === 'About') document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'Projects') document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'Contact') document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })

    // Automatically close menu on mobile after click
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer">CM</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 navbar-links">
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-500 group-hover:w-full"></span>
            </span>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
