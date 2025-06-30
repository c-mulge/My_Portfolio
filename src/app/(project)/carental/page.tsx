'use client'

import React, { useEffect, useState } from 'react'
import { Github, ArrowRight, MessageCircle, Users, Video, Server } from 'lucide-react'

const frontend = ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "LiveKit", "React Hook Form", "Zod"]
const backend = ["Next.js", "Go", "WebSocket", "Gin", "PostgreSQL", "Prisma", "SQLC"]

const features = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Server Management",
    description: "Create and manage community servers with organized channels and groups.",
    image: "/create1.png"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Real-time Messaging",
    description: "Lightning-fast messaging with WebSocket technology for instant communication.",
    image: "/chat.png"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video & Audio Calls",
    description: "High-quality video and audio communication powered by LiveKit.",
    image: "/video.png"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Building",
    description: "Build thriving communities with advanced moderation and management tools.",
    image: "/group1.png"
  }
]

const PangatPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF5C00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Real-time Communication Platform
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Build Communities.
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Connect People.</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Pangat brings people together through powerful real-time messaging, video calls, and community management tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://github.com/siddheshRajendraNimbalkar/PANGAT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25 font-semibold"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
                
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold"
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main App Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border border-orange-500/20">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-orange-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-400 font-mono">pangat.app</div>
              </div>
            </div>
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-orange-500/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <MessageCircle className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Preview</h3>
                <p className="text-gray-400">Interactive demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build and manage thriving online communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                      : 'border-gray-800 hover:border-orange-500/50 hover:shadow-md hover:bg-gray-900/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-all duration-300 ${
                      activeFeature === index ? 'bg-orange-500 text-black' : 'bg-gray-800 text-orange-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Preview */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-8 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <div className="text-black text-4xl">
                    {features[activeFeature].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-400 mb-4">Feature demonstration</p>
                <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-300">
              Leveraging the latest tools and frameworks for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-black rounded-2xl p-8 shadow-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 border border-orange-500/30">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg text-sm font-medium border border-orange-500/30 hover:bg-orange-500/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-black rounded-2xl p-8 shadow-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 border border-orange-500/30">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg text-sm font-medium border border-orange-500/30 hover:bg-orange-500/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400">Real-time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
              <div className="text-gray-400">Scalable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-400">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">0ms</div>
              <div className="text-gray-400">Latency Goal</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of communities already using Pangat to connect, communicate, and grow together.
          </p>
          <a 
            href="https://github.com/siddheshRajendraNimbalkar/PANGAT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black text-orange-400 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
          >
            <Github className="w-5 h-5 mr-2" />
            Get Started on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold">Pangat</span>
            </div>
            <div className="text-gray-400 text-sm">
              Built with <span className="text-orange-500">❤️</span> for communities worldwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PangatPage