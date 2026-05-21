"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectDisplay = () => {
  useEffect(() => {
    const animateProject = (id: number, direction: "left" | "right") => {
      const xStart = direction === "left" ? -100 : 100;
      const xImage = direction === "left" ? 100 : -100;

      gsap.from(`.project-${id}-title`, {
        opacity: 0,
        x: xStart,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(`.project-${id}-detail`, {
        opacity: 0,
        x: xStart,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(`.project-${id}-image`, {
        opacity: 0,
        x: xImage,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.project-${id}-container`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    };

    animateProject(1, "left");
    animateProject(2, "right");
    animateProject(3, "left");
    animateProject(4, "right");
  }, []);

  return (
    <div
      id="projects-section"
      className="relative bg-black text-white min-h-screen py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-start mb-24">
          <Image
            src="/star.png"
            alt="Star"
            height={50}
            width={50}
            className="mr-4"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-orange-500">
            Project & Experiments
          </h2>
        </div>

        <div className="flex flex-col space-y-24">
          {/* Project Items */}
          {[
            {
              id: 1,
              title: "Carental",
              status: "Completed",
              tech: "HTML, CSS, PHP, SQL",
              description:
                "A full-stack car renting platform focused on smooth booking experience, authentication, and database integration.",
              link: "/carental",
              img: "/create0.png",
              direction: "left",
            },
            {
              id: 2,
              title: "Smart Spend",
              status: "Ongoing",
              tech: "Python, SQL, Data Analytics",
              description:
                "A personal finance and analytics platform designed to track expenses and generate meaningful spending insights.",
              link: "/shopeasy",
              img: "/product1.png",
              direction: "right",
            },
            {
              id: 3,
              title: "CodeHub",
              status: "Contributor",
              tech: "Full Stack Development • APIs • Databases",
              description:
                "Contributed to scalable application features and backend development as part of a collaborative development environment.",
              link: "/codehub",
              img: "/product1.png",
              direction: "left",
            },
            // { id: 3, title: 'Go Bank', tech: 'GoLang', link: '/bank', img: '/Golang.webp', direction: 'left' },
            // { id: 4, title: 'Blogging Website', tech: 'ReactJS, HonoJS, Cloudflare', link: '/blogging', img: '/blog.png', direction: 'right' }
          ].map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.direction === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 project-${project.id}-container`}
            >
              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 border border-orange-500/20 text-orange-300">
                    {project.status}
                  </span>
                </div>
                <h3
                  className={`text-4xl md:text-6xl font-bold uppercase tracking-tight text-orange-400 project-${project.id}-title`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-lg md:text-xl uppercase text-gray-300 project-${project.id}-detail`}
                >
                  {project.tech}
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="self-start bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-medium text-base transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Explore Project
                </a>
              </div>

              {/* Project Image */}
              <div
                className={`w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden rounded-2xl project-${project.id}-image`}
              >
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
          {/* Mini Projects Section */}
          <div className="mt-8">
            <div className="mb-16 text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                AI/ML Explorations
              </h3>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Small projects and experiments exploring machine learning,
                analytics, recommendation systems, and data-driven solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sentiment Analysis Model",
                  tech: "Python • NLP • Scikit-learn",
                  description:
                    "Built a machine learning model to classify text sentiment into positive and negative categories.",
                },
                {
                  title: "Movie Recommendation System",
                  tech: "Python • Machine Learning",
                  description:
                    "Developed a recommendation engine suggesting movies based on similarity and user preferences.",
                },
                {
                  title: "Stock Prediction Analysis",
                  tech: "Python • Pandas • Data Visualization",
                  description:
                    "Analyzed stock trends and visualized market patterns using data analytics techniques.",
                },
                {
                  title: "Data Visualization Dashboard",
                  tech: "Python • SQL • Analytics",
                  description:
                    "Created interactive dashboards and visual reports for extracting insights from datasets.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-3xl border border-orange-500/10 bg-gradient-to-br from-gray-900/70 to-gray-800/30 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold text-orange-400 mb-4">
                    {project.title}
                  </h4>

                  <p className="text-sm uppercase tracking-wide text-orange-200 mb-4">
                    {project.tech}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
    </div>
  );
};

export default ProjectDisplay;
