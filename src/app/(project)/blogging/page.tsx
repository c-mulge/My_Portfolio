'use client'

import OnlyBtn from '@/components/Button/Button';
import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const frontend = ["React", "Tailwind CSS", "TypeScript", "Zod", "React Hook Form", "Axios"];
  const backend = ["Hono.js", "Prisma", "Cloudflare", "Zod"];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-10">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          BLOGGING WEBSITE
        </h1>

        <div className="bg-[#23A094] p-6 rounded-full shadow-lg border-2 border-black">
          <div className="bg-orange-500 p-6 rounded-full shadow-lg border-2 border-black">
            <div className="bg-[#FFC900] text-lg md:text-xl px-12 py-8 text-black uppercase rounded-full border-2 shadow-lg max-w-3xl text-center">
              <p>
                A platform for creating, managing, and sharing blogs with a rich text editor and authentication.
                <br />
                Enhanced security and performance via Cloudflare.
                <br />
                Efficient database management with Prisma ORM.
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/siddheshRajendraNimbalkar/bloginigWeb"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          <OnlyBtn className="bg-black text-white cursor-pointer h-[60px] w-[150px] font-bold border-none flex justify-center items-center gap-2 hover:bg-zinc-800 transition">
            <span>GITHUB</span>
            <Github size={18} />
          </OnlyBtn>
        </a>
      </section>

      {/* TECH STACK SECTION */}
      <section className="bg-white py-16 px-6 flex flex-wrap justify-center items-start gap-10">
        {/* Frontend Card */}
        <div className="bg-[#F1F333] p-8 rounded-xl shadow-xl flex flex-col items-start w-full max-w-sm">
          <Image
            src="https://assets.gumroad.com/assets/discover/drawing-9fb474a77e8f85d359ee1b906f46c2f6833696fd9b2acd79b29552d9b7b00781.svg"
            alt="Frontend Icon"
            width={80}
            height={80}
            className="mb-6"
          />
          <h3 className="text-2xl text-black font-bold mb-6">Front End</h3>
          <div className="flex flex-wrap gap-2">
            {frontend.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-black rounded-full px-4 py-1 text-sm border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-[#FF90E8] p-8 rounded-xl shadow-xl flex flex-col items-start w-full max-w-sm">
          <Image
            src="https://assets.gumroad.com/assets/discover/film-bb2c44fa3a48b6cdaf5fa288c0386e8d17e532909ed54ea987d137092f99c3cc.svg"
            alt="Backend Icon"
            width={80}
            height={80}
            className="mb-6"
          />
          <h3 className="text-2xl text-black font-bold mb-6">Back End</h3>
          <div className="flex flex-wrap gap-2">
            {backend.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-black rounded-full px-4 py-1 text-sm border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
