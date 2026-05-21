"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Github,
  // ArrowRight,
  Car,
  CreditCard,
  List,
  MessageCircle,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["PHP", "SQL", "MySQL"];

const concepts = [
  "Authentication",
  "CRUD Operations",
  "Responsive Design",
  "Database Relationships",
  "Booking Workflow",
  "Dynamic Listings",
];

const features = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Car Booking",
    description:
      "Easily book cars with real-time availability and secure confirmation.",
    image: "/carental01.png",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Integration",
    description: "Seamless payment system for hassle-free transactions.",
    image: "/carental02.png",
  },
  {
    icon: <List className="w-8 h-8" />,
    title: "Car Listing",
    description: "Detailed car listings with filtering and sorting options.",
    image: "/carental03.png",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Customer Reviews",
    description:
      "Genuine customer feedback and ratings for better decision-making.",
    image: "/carental04.png",
  },
];

const contributions = [
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Frontend Development",
    description:
      "Designed responsive user interfaces and smooth booking workflows.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & Database",
    description:
      "Built backend logic and managed relational database interactions.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Authentication System",
    description:
      "Implemented user authentication and booking validation workflows.",
  },
];

const stats = [
  {
    value: "4+",
    label: "Core Features",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "SQL",
    label: "Database Integration",
  },
  {
    value: "Full Stack",
    label: "Development",
  },
];

const CarentalPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Completed Project
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find. Book.{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Drive.
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                A full-stack car rental platform focused on smooth booking
                workflows, secure user interactions, and seamless browsing
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25 font-semibold"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>

                {/* <button
                  onClick={() =>
                    document
                      .getElementById("overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold"
                >
                  Explore Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="overview" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Project Overview
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Carental was built to simplify the car renting experience through a
            clean and user-friendly platform. The project focuses on smooth
            booking workflows, secure data handling, and intuitive browsing for
            users looking to rent vehicles efficiently.
          </p>
        </div>
      </section>

      {/* PROJECT STATS */}
      <section className="py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-gray-900/60 to-gray-800/20 text-center hover:border-orange-500/40 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-orange-400 mb-2">
                  {stat.value}
                </h3>

                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Designed to deliver a seamless and user-friendly car rental
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* FEATURE LIST */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                      : "border-gray-800 hover:border-orange-500/50 hover:bg-gray-900/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-orange-500 text-black"
                          : "bg-gray-800 text-orange-400"
                      }`}
                    >
                      {feature.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURE IMAGE */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="rounded-xl mb-6 max-h-96 mx-auto"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                priority
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                {features[activeFeature].title}
              </h3>

              <p className="text-gray-400 mb-4">Feature Preview</p>

              <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-14 text-center">
            My Contribution
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contributions.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-black border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="text-orange-400 mb-6">{item.icon}</div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies & Concepts
            </h2>

            <p className="text-xl text-gray-300">
              Tools and concepts used while building the platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* FRONTEND */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>

              <div className="flex flex-wrap gap-3">
                {frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Backend & Database
              </h3>

              <div className="flex flex-wrap gap-3">
                {backend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CONCEPTS */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Core Concepts
              </h3>

              <div className="flex flex-wrap gap-3">
                {concepts.map((concept, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg border border-orange-500/20"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES & LEARNINGS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
              <Lightbulb className="w-4 h-4" />
              Learnings
            </div>

            <h2 className="text-4xl font-bold text-white">
              Challenges & Growth
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              One of the biggest challenges while building Carental was managing
              booking workflows and ensuring smooth interactions between users,
              listings, and database records.
            </p>

            <p>
              Through this project, I strengthened my understanding of backend
              logic, relational databases, CRUD operations, authentication
              systems, and responsive application design.
            </p>

            <p>
              This project also helped me improve my problem-solving approach
              and gave me practical experience in building complete full-stack
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Gallery
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A quick visual walkthrough of the Carental platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-orange-500/20 text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side */}

            {/* Right Side */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Designed & developed by Channveer Mulge
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarentalPage;
