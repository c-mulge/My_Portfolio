'use client'
import React from 'react';

const rotatingTexts = [
  "Building Scalable Systems ",
  "Crafting Powerful APIs ",
  "Developing Intuitive UIs ",
  "Real-time Applications ",
  "Distributed Systems ",
  "Cloud-Native Solutions ",
  "Web3 Exploration ",
  "System Design Enthusiast",
  "Open Source Contributor ",
  "Problem Solver"
];

const LogoScroller = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-black border-y border-[#ECE7E1]">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Adjusted speed */
        }
      `}</style>
      <div className="flex animate-marquee whitespace-nowrap">
        {rotatingTexts.map((text, index) => (
          <div key={index} className="mx-8 inline-block">
            <span className="text-4xl font-extrabold text-[#ECE7E1] opacity-70 hover:opacity-100 transition-opacity duration-300">{text}</span>
          </div>
        ))}
        {/* Duplicate texts for seamless infinite scroll */}
        {rotatingTexts.map((text, index) => (
          <div key={`duplicate-${index}`} className="mx-8 inline-block">
            <span className="text-4xl font-extrabold text-[#ECE7E1] opacity-70 hover:opacity-100 transition-opacity duration-300">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;