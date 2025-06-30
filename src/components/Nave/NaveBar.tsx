'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer">Channveer</div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-orange-500 text-lg font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

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
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-300 hover:text-orange-500 text-xl font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
