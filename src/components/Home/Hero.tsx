'use client'

import { useState, useEffect, ReactNode, useCallback, JSX } from 'react'
import { Linkedin } from 'react-feather'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, StickyNote, X, Coffee, Code2, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface GridState {
  cols: number
  rows: number
  colors: string[]
}

interface DarkGridProps {
  children?: ReactNode
  baseSize?: number
  maxScale?: number
}

const generateDarkColor = (): string => {
  const base = 15
  const variation = Math.random() * 25
  const r = base + variation
  const g = base + variation * 0.7
  const b = base + variation * 0.5
  return `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`
}

function DarkGrid({ children, baseSize = 18, maxScale = 1.3 }: DarkGridProps) {
  const [grid, setGrid] = useState<GridState>({ cols: 0, rows: 0, colors: [] })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const calculateDistance = useCallback((indexA: number, indexB: number, cols: number) => {
    const x1 = indexA % cols
    const y1 = Math.floor(indexA / cols)
    const x2 = indexB % cols
    const y2 = Math.floor(indexB / cols)
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }, [])

  const getHoverScale = useCallback((index: number) => {
    if (hoveredIndex === null || grid.cols === 0) return 1
    const distance = calculateDistance(index, hoveredIndex, grid.cols)
    return Math.max(maxScale - distance * 0.15, 1)
  }, [hoveredIndex, grid.cols, calculateDistance, maxScale])

  useEffect(() => {
    const calculateGrid = () => {
      const gap = 1
      const cols = Math.floor(window.innerWidth / (baseSize + gap))
      const rows = Math.floor(window.innerHeight / (baseSize + gap))

      setGrid({
        cols,
        rows,
        colors: Array.from({ length: cols * rows }, generateDarkColor)
      })
    }

    calculateGrid()
    window.addEventListener('resize', calculateGrid)
    return () => window.removeEventListener('resize', calculateGrid)
  }, [baseSize])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 grid opacity-40"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${baseSize}px)`,
          gridAutoRows: `${baseSize}px`,
          gap: '1px'
        }}
      >
        {grid.colors.map((color, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-out"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: color,
              transform: `scale(${getHoverScale(index)})`,
              borderRadius: '2px'
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  )
}

const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-20 right-20 animate-bounce hidden md:block">
        <div className="w-3 h-3 bg-orange-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 left-32 animate-pulse hidden md:block">
        <div className="w-2 h-2 bg-orange-400 rounded-full opacity-80"></div>
      </div>
      <div className="absolute bottom-32 right-40 animate-ping hidden md:block">
        <div className="w-4 h-4 bg-orange-300 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-20 left-20 hidden md:block">
        <Coffee className="w-6 h-6 text-orange-500/60 animate-pulse" />
      </div>
      <div className="absolute top-32 right-32 hidden md:block">
        <Code2 className="w-5 h-5 text-orange-400/50 animate-bounce" />
      </div>
    </>
  )
}

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Software Developer', 'UI Designer', 'Front-End Developer', 'Problem Solver']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  useEffect(() => {
    gsap.from('.hero-name', {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'back.out(1.7)',
      delay: 0.2
    })

    gsap.from('.hero-role', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      delay: 0.8
    })

    gsap.from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      delay: 1.2
    })

    gsap.from('.social-links', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      delay: 1.6,
      stagger: 0.1
    })
  }, [])

  type SocialItem = {
    icon: JSX.Element
    text: string
    link: string
    color: string
  }

  const socialItems: SocialItem[] = [
    {
      icon: <Github size={18} />,
      text: 'GitHub',
      link: 'https://github.com/c-mulge',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      icon: <Linkedin size={18} />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/channveer-mulge/',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <X size={18} />,
      text: 'Twitter',
      link: 'https://x.com/Cmulge16',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: <StickyNote size={18} />,
      text: 'Resume',
      link: '/My_Resume.pdf',
      color: 'hover:bg-orange-600 hover:text-white'
    }
  ]

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <DarkGrid>
        <FloatingElements />

        {/* Main Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6">
          {/* Greeting */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-xs sm:text-sm font-medium">Available for new opportunities</span>
            </div>

            <h1 className="hero-name text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8">
              Hello, I&#39;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-pulse">
                Channveer
              </span>
            </h1>
          </div>

          {/* Dynamic Role */}
          <div className="hero-role mb-8 h-16 flex items-center">
            <div className="flex items-center gap-3">
              <Zap className="text-orange-500" size={24} />
              <span className="text-xl sm:text-2xl md:text-3xl text-white font-light">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="hero-description text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-xs sm:max-w-md md:max-w-2xl">
            Crafting robust backend systems and elegant user experiences. Passionate about{' '}
            <span className="text-orange-400 font-medium">React</span>,{' '}
            <span className="text-orange-400 font-medium">SQL</span>, and{' '}
            <span className="text-orange-400 font-medium">UI Design</span>.
          </p>

          {/* Social Links */}
          <div className="social-links flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.color}`}
              >
                {item.icon}
                <span className="font-medium text-xs sm:text-sm">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 md:w-48 md:h-48 bg-gradient-radial from-orange-600/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-radial from-orange-400/8 to-transparent rounded-full blur-lg"></div>
        </div>
      </DarkGrid>
    </div>
  )
}

export default Hero
