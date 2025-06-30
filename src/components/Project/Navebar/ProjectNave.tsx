'use client'

import React from 'react'
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const ProjectNave = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-black h-[10vh] flex justify-between items-center ${className}`}>
        <div className="logo text-[#ECE7E1] text-4xl font-bold">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors duration-300">Channveer</Link>
        </div>
        <div className="social flex space-x-0">
            <Link
              href="https://github.com/c-mulge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[10vh] w-[10vh] flex items-center justify-center bg-[#131313] border-r border-[#ECE7E1] transition-colors duration-300 group hover:bg-[#ECE7E1]"
            >
              <Github size={32} className="text-[#ECE7E1] group-hover:text-[#131313] transition-colors duration-300"/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/channveer-mulge/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[10vh] w-[10vh] flex items-center justify-center bg-[#FF5C00] transition-colors duration-300 group hover:bg-[#131313]"
            >
              <Linkedin size={32} className="text-[#131313] group-hover:text-[#FF5C00] transition-colors duration-300"/>
            </Link>
        </div>
    </div>
  )
}

export default ProjectNave