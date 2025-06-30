'use client'

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: "Project 1",
    image: "/eco.png", // Placeholder image
    description: "A brief description of Project 1."
  },
  {
    name: "Project 2",
    image: "/eco.png",
    description: "A brief description of Project 2."
  },
  {
    name: "Project 3",
    image: "/eco.png",
    description: "A brief description of Project 3."
  },
  {
    name: "Project 4",
    image: "/eco.png",
    description: "A brief description of Project 4."
  },
  {
    name: "Project 5",
    image: "/eco.png",
    description: "A brief description of Project 5."
  },
];

const ProjectScroller = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-[#131313] text-[#ECE7E1]">
      <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
      <div className="flex overflow-x-auto space-x-8 px-4 py-4 scrollbar-hide">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex-none w-64 p-4 border border-[#ECE7E1] rounded-lg shadow-lg bg-[#FF5C00] text-[#131313]"
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              fill
              width={200} 
              height={200} 
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScroller; 