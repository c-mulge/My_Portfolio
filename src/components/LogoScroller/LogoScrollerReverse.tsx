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
  "System Design Enthusiastic ",
  "Open Source Contributor ",
  "Problem Solver ",
];

const LogoScrollerReverse = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-[#FF5C00] border-y border-[#ECE7E1]">
      <style jsx>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {rotatingTexts.map((text, index) => (
          <div key={index} className="mx-8 inline-block">
            <span className="text-4xl font-extrabold text-[#131313] opacity-70 hover:opacity-100 transition-opacity duration-300">{text}</span>
          </div>
        ))}
        {/* Duplicate texts for seamless infinite scroll */}
        {rotatingTexts.map((text, index) => (
          <div key={`duplicate-${index}`} className="mx-8 inline-block">
            <span className="text-4xl font-extrabold text-[#131313] opacity-70 hover:opacity-100 transition-opacity duration-300">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScrollerReverse; 