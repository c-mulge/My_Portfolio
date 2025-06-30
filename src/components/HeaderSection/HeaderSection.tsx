'use client';
import React from 'react';

const HeaderSection = () => {
  return (
    <div className="w-full bg-white py-4 px-8 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-2">
        {/* <div className="w-3 h-3 rounded-full bg-green-500 border border-gray-400"></div>
        <div className="w-3 h-3 rounded-full border bg-yellow-500 border-gray-400"></div>
        <div className="w-3 h-3 rounded-full border bg-red-500 border-gray-400"></div> */}
      </div>
      <div className="flex items-center space-x-2">
        {/* SVG for document icon */}
        <span className="text-gray-800 font-medium items-center">About page</span>
      </div>
      <div className="w-4 h-4"></div> {/* Placeholder for right side if needed */}

      {/* Timeline/Ruler */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`h-2 ${i % 5 === 0 ? 'w-px bg-gray-400' : 'w-px bg-gray-300'}`}></div>
        ))}
        <div className="absolute left-[20%] bottom-0 w-3 h-4 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-180"></div>
        <div className="absolute left-[80%] bottom-0 w-3 h-4 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-180"></div>
      </div>
    </div>
  );
};

export default HeaderSection; 