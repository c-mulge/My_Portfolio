'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, ArrowRight, Car, CreditCard, List, MessageCircle } from 'lucide-react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const frontend = ["HTML", "CSS", "JavaScript"]
const backend = ["PHP", "SQL"]

const features = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Car Booking",
    description: "Easily book cars with real-time availability and secure confirmation.",
    image: "/carental01.png"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Integration",
    description: "Seamless payment system for hassle-free transactions.",
    image: "/carental02.png"
  },
  {
    icon: <List className="w-8 h-8" />,
    title: "Car Listing",
    description: "Detailed car listings with filtering and sorting options.",
    image: "/carental03.png"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Customer Reviews",
    description: "Genuine customer feedback and ratings for better decision-making.",
    image: "/carental04.png"
  }
]

const CarentalPage = () => {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Car Rental Made Easy
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find. Book. <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Drive.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Carental is your one-stop solution for renting cars with real-time availability, easy payments, and trusted customer reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#" 
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage a smooth and efficient car rental platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feature List */}
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

            {/* Feature Image */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="rounded-xl mb-6 max-h-96 mx-auto"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                priority
              />
              <h3 className="text-2xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
              <p className="text-gray-400 mb-4">Feature Preview</p>
              <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-300">Built with reliable and proven web technologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black rounded-2xl p-8 shadow-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
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

            <div className="bg-black rounded-2xl p-8 shadow-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
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

      {/* Gallery Section */}
<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        A quick visual tour of the Carental platform.
      </p>
    </div>

    <Carousel 
      showThumbs={false} 
      infiniteLoop 
      autoPlay 
      interval={3000} 
      showStatus={false} 
      dynamicHeight={false}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      {features.map((feature, index) => (
        <div key={index}>
          <Image 
            src={feature.image}
            alt={feature.title}
            width={1200}
            height={600}
            className="object-cover rounded-xl"
          />
          <p className="legend">{feature.title}</p>
        </div>
      ))}
    </Carousel>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold">Carental</span>
            </div>
            <div className="text-gray-400 text-sm">
              Made with <span className="text-orange-500">🚗</span> for smooth rides everywhere
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CarentalPage
