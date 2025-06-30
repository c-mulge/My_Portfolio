'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Zap, Coffee, Heart, Lightbulb, Rocket, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  useEffect(() => {
    // Enhanced animations for about page
    gsap.fromTo(".about-hero", 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(".stats-card", 
      { opacity: 0, scale: 0.8, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 1, 
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(".skill-item", 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(".timeline-item", 
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate skill progress bars
    gsap.to(".skill-progress", {
      width: "var(--progress)",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  }, []);


  const skills = [
    { name: "Next.js", level: 95, category: "Frontend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "C/C++", level: 78, category: "Languages" },
    { name: "Java", level: 78, category: "Languages" },
    { name: "TypeScript", level: 93, category: "Frontend" },
    { name: "Python", level: 80, category: "Backend" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Always exploring cutting-edge technologies to solve complex problems in creative ways.",
      icon: Lightbulb,
      color: "from-orange-400 to-yellow-400"
    },
    {
      title: "Quality Code",
      description: "Writing clean, maintainable, and scalable code that stands the test of time.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Client Success",
      description: "Your project's success is my success. Building lasting partnerships through exceptional results.",
      icon: Heart,
      color: "from-orange-600 to-pink-600"
    },
    {
      title: "Continuous Growth",
      description: "Never stop learning. Constantly upgrading skills to deliver the best solutions.",
      icon: Rocket,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "Carental- Car Renting Platform",
      role: "Freelance Developer",
      description: "Developing modern web solutions for Car Renting, focusing on efficiency and user experience.",
      achievements: ["Modern UI/UX design", "Performance optimization", "Industry-specific features"]
    },
    {
      year: "2025",
      title: "CodeHub",
      role: "Backend + Fullstack Developer",
      description: "Built comprehensive thrift marketplace with real-time features, payment integration, and scalable architecture.",
      achievements: ["Real-time chat system", "Payment gateway integration", "Advanced search & filtering"]
    },
    {
      year: "2023",
      title: "Multiple Projects",
      role: "Freelance Developer",
      description: "Delivered various web solutions including e-commerce platforms, portfolio websites, and business applications.",
      achievements: ["15+ successful projects", "5-star client ratings", "Long-term partnerships"]
    },
  ];

  const techStack = {
    languages: ['C/C++', 'JavaScript', 'Python', 'Java'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    // backend: ['Node.js', 'Express.js', 'Hono.js', 'gRPC', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    tools: ['Docker', 'Git', 'Linux']
  };

  return (
    <div id="about-section" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-orange-600/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-orange-400/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="about-hero px-6 py-20 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Coffee className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">About Me</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">The Developer Behind</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              The Code
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            I&#39;m Channveer, a passionate full-stack developer from Pune, Maharashtra. 
            I specialize in building scalable frontend systems and intuitive user interfaces 
            that solve real-world problems. My journey in tech is driven by curiosity, 
            innovation, and a genuine love for creating impactful digital experiences.
          </p>

          <div className="flex items-center justify-center gap-2 text-orange-400 mb-12">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Based in Pune, Maharashtra, India</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 rounded-full p-2 border border-orange-500/20">
              {['journey', 'skills', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <div className="timeline-section">
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                My Professional Journey
              </h2>
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <div key={index} className="timeline-item relative pl-8 pb-8 border-l-2 border-orange-500/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-4 border-black"></div>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                        <div>
                          <div className="text-orange-400 font-bold text-lg mb-2">{item.year}</div>
                          <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-orange-300 font-medium">{item.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/20">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="skills-section">
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                Technical Expertise
              </h2>
              
              {/* Skills Progress */}
              <div className="skills-grid grid lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6">Core Skills</h3>
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                            {skill.category}
                          </span>
                        </div>
                        <span className="text-orange-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="skill-progress h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                          style={{'--progress': `${skill.level}%`} as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Categories */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6">Tech Stack</h3>
                  {Object.entries(techStack).map(([category, techs], index) => (
                    <div key={index} className="skill-item">
                      <h4 className="text-white font-semibold mb-3 capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="values-section">
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                What Drives Me
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="skill-item">
                    <div className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <value.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="px-6 py-20 bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-medium">Let&#39;s Collaborate</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Extraordinary?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you have a groundbreaking idea, need to scale your existing platform, 
                or want to modernize your tech stack, I&#39;m here to help transform your vision into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                <span className="flex items-center gap-2">
                  Start a Project
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-orange-500/30 text-orange-400 font-bold rounded-2xl hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-orange-500/20">
              <p className="text-gray-400 text-sm">
                Coffee-fueled coding sessions • Available for remote collaboration • 
                <span className="text-orange-400"> Always learning, always growing</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;