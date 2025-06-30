'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectDisplay = () => {
  useEffect(() => {
    const animateProject = (id: number, direction: 'left' | 'right') => {
      const xStart = direction === 'left' ? -100 : 100
      const xImage = direction === 'left' ? 100 : -100

      gsap.from(`.project-${id}-title`, {
        opacity: 0,
        x: xStart,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(`.project-${id}-detail`, {
        opacity: 0,
        x: xStart,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from(`.project-${id}-image`, {
        opacity: 0,
        x: xImage,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    animateProject(1, 'left')
    animateProject(2, 'right')
    animateProject(3, 'left')
    animateProject(4, 'right')
  }, [])

  return (
    <div id="projects-section" className="relative bg-black text-white min-h-screen py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-start mb-24">
          <Image src="/star.png" alt="Star" height={50} width={50} className="mr-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-orange-500">
            Projects
          </h2>
        </div>

        <div className="flex flex-col space-y-24">
          {/* Project Items */}
          {[
            { id: 1, title: 'Carental - A Car renting platform', tech: 'Html, Css, Php, SQL', link: '/pangat', img: '/create0.png', direction: 'left' },
            { id: 2, title: 'Shop Easy (Ecommerce)', tech: 'NextJS, GoLang, AI', link: '/shopeasy', img: '/product1.png', direction: 'right' },
            // { id: 3, title: 'Go Bank', tech: 'GoLang', link: '/bank', img: '/Golang.webp', direction: 'left' },
            // { id: 4, title: 'Blogging Website', tech: 'ReactJS, HonoJS, Cloudflare', link: '/blogging', img: '/blog.png', direction: 'right' }
          ].map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 project-${project.id}-container`}
            >
              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h3 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight text-orange-400 project-${project.id}-title`}>
                  {project.title}
                </h3>
                <p className={`text-lg md:text-xl uppercase text-gray-300 project-${project.id}-detail`}>
                  {project.tech}
                </p>
                <a
                  href={project.link}
                  className="self-start bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-medium text-base transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View More
                </a>
              </div>

              {/* Project Image */}
              <div className={`w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden rounded-2xl project-${project.id}-image`}>
                <Image
                  src={project.img}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-60 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
    </div>
  )
}

export default ProjectDisplay
