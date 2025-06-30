'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import OnlyBtn from '@/components/Button/Button';
import { Github, MoveRight } from 'lucide-react';

const frontend = ["Next JS", "Tailwind Css", "Type Script", "Shad CN", "Live Kit", "React", "Next Auth", "Zod", "React Hook Form", "Axios"];
const backend = ["Next JS", "GoLang", "Gorilla Web Socket", "Gin", "Postgres", "Prisma", "SQLC", "Next Auth", "Zod"];

gsap.registerPlugin(ScrollTrigger);

const serverManagementImages = [
  "/create1.png",
  "/create0.png",
  "/group1.png",
  "/group0.png"
];

const PangatPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentPreMadeBlockImageIndex, setCurrentPreMadeBlockImageIndex] = useState(0);

  useEffect(() => {
    const preMadeBlockInterval = setInterval(() => {
      setCurrentPreMadeBlockImageIndex((idx) => (idx + 1) % serverManagementImages.length);
    }, 2000);

    return () => clearInterval(preMadeBlockInterval);
  }, []);

  useEffect(() => {
    gsap.set(".pangat-intro-image", { scale: 0, y: 0, opacity: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        setShowContent(true);
      },
    });

    tl.to(".pangat-intro-overlay", {
      y: "0%",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(".pangat-intro-image", {
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
        delay: -0.8,
      }, "<")
      .to(".pangat-intro-overlay", {
        y: "100%",
        duration: 1.2,
        ease: "power2.in",
        delay: 0.6,
      }, ">-0.6")
      .to(".pangat-intro-image", {
        y: "100%",
        opacity: 0,
        duration: 1.2,
        ease: "power2.in",
        delay: -0.8,
      }, "<");
  }, []);

  useEffect(() => {
    if (showContent) {
      gsap.fromTo('.pangat-main-title', { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' });
      gsap.fromTo('.pangat-second-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'expo.out' });
      gsap.fromTo('.pangat-main-image-wrapper', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.pangat-main-image-wrapper', start: 'top 80%' } });
      gsap.fromTo('.real-time-messaging-section', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.real-time-messaging-section', start: 'top 80%' } });
      gsap.fromTo('.circular-text-block', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.circular-text-block', start: 'top 80%' } });
      gsap.fromTo('.audio-video-section', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.audio-video-section', start: 'top 80%' } });
      gsap.fromTo('.video-call-section', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.video-call-section', start: 'top 80%' } });
    }
  }, [showContent]);

  return (
    <>
      <div className="relative font-sans min-h-screen bg-[#FD92E7] text-black pt-[10vh]">
        <div className="pangat-intro-overlay fixed inset-0 bg-[#FF5C00] z-50 flex items-center justify-center">
          <Image src="/star.png" alt="Intro Image" width={120} height={120} className="pangat-intro-image" priority />
        </div>

        {showContent && (
          <main className="flex flex-col items-start px-6 py-16 sm:px-8 md:px-12 lg:px-20 relative z-20 max-w-[90rem] mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-none pangat-main-title pr-12">
              Flexible, beautiful<br />and simple.<span className="text-[#FFFF]"> It's the Semplice way.</span>
            </h1>

            <div className="mt-[15vh] mb-12 px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black pangat-second-title">
                Pangat
              </h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-zinc-700 font-semibold max-w-3xl mx-auto">
                A Real-Time Social Media & Communication Platform
              </p>
            </div>

            <OnlyBtn
              className='bg-blue-700 text-white cursor-pointer h-[60px] mb-5 w-[140px] font-bold border-none flex justify-center items-center gap-2 hover:text-zinc-800'
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              <div>Skill Use</div>
              <div><MoveRight size={18} /></div>
            </OnlyBtn>

            <div className="w-full relative h-[26rem] sm:h-[30rem] md:h-[34rem] rounded-xl overflow-hidden shadow-2xl pangat-main-image-wrapper mb-14 bg-black">
              <Image src={'/pangat01.png'} alt="Page Builder UI" fill style={{ objectFit: 'cover' }} className="transition-opacity duration-700" priority />
            </div>

            <div className='flex gap-5'>
              <a href="https://github.com/siddheshRajendraNimbalkar/PANGAT" target='_blank'>
                <OnlyBtn className='bg-white cursor-pointer h-[60px] w-[120px] font-bold border-none flex justify-center items-center gap-2 hover:text-[#FF5C00]'>
                  <div>GITHUB</div>
                  <div><Github size={18} /></div>
                </OnlyBtn>
              </a>
            </div>
          </main>
        )}
      </div>

      <div className='bg-white h-[80vh] w-full flex justify-center items-center p-10 border-b'>
        <div className='bg-[#23A094] p-8 rounded-full shadow-lg text-center border-2 border-black'>
          <div className='bg-orange-500 p-8 rounded-full shadow-lg text-center border-2 border-black'>
            <div className='bg-[#FFC900] text-xl px-8 md:px-16 py-8 md:py-12 text-black uppercase rounded-full border-2 shadow-lg circular-text-block max-w-4xl'>
              <p>Pangat is a modern, full-stack social media and real-time communication platform inspired by community-based interaction models like Discord...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features part */}
      <div className="text-black">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#FB91E5] relative p-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Server & Group Management</h2>
            <p className="text-lg mb-10 text-gray-800">
              Create & manage servers representing communities or topics.
              Inside each server, users can create multiple groups – text, audio & video.
            </p>
            <div className="overflow-hidden absolute bottom-0 right-0 w-full h-1/2 shadow-lg">
              <Image src={serverManagementImages[currentPreMadeBlockImageIndex]} alt="social" fill style={{ objectFit: 'cover' }} className="object-right" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#FF5C00] real-time-messaging-section">
            <div className="relative w-full h-[30rem] overflow-hidden shadow-2xl">
              <Image src="/chat.png" alt="Pre-made blocks showcase" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className='flex justify-end items-end flex-col p-6'>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Real-Time Messaging →</h2>
              <p className="text-lg mb-10 text-gray-900 font-bold">
                1-on-1 DMs and group messaging support with WebSocket (Gorilla).
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full min-h-screen bg-[#1a1a1a] text-white audio-video-section'>
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <Image src="/conv.jpg" alt="Gallery Image" fill style={{ objectFit: 'cover' }} className="transition-opacity duration-700" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 bg-[#23A094] text-zinc-900">
            <h2 className="text-5xl font-extrabold mb-6">Audio & Video Communication</h2>
            <p className="text-lg mb-8 text-zinc-700">
              Integrated with LiveKit for scalable WebRTC communication.
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center video-call-section'>
          <div className='w-full lg:w-1/2 p-4'>
            <Image src="https://assets.gumroad.com/assets/about/book-gumhead-ba981fd5fb02fe2934371d85a7ca2b5921736c92a82e629f625d1dd050825840.svg" alt="cartoon" height={500} width={500} />
          </div>
          <div className='w-full lg:w-1/2 bg-[#1E1E1E] h-full lg:h-screen flex justify-center items-center flex-col p-4'>
            <h1 className='text-2xl font-extrabold w-full p-1 bg-fuchsia-500 text-center'>This is How Video And Call Section Look Like</h1>
            <Image src="/video.png" alt="video" height={500} width={500} />
          </div>
        </div>

        {/* ✅ Responsive Skill Display Section */}
        <div className='w-full bg-white flex justify-center items-center p-6 md:p-10 gap-6 flex-col lg:flex-row min-h-[80vh]'>

          {/* Frontend Card */}
          <div className="bg-[#F1F333] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-start text-white w-full max-w-md lg:max-w-[30%]">
            <Image src="https://assets.gumroad.com/assets/discover/drawing-9fb474a77e8f85d359ee1b906f46c2f6833696fd9b2acd79b29552d9b7b00781.svg" alt="Pangat Logo" width={80} height={80} className="mb-4" />
            <h3 className="text-2xl sm:text-3xl text-black mb-4 font-bold">Front End</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {frontend.map((item, index) => (
                <span key={index} className="bg-white text-zinc-800 rounded-full px-4 py-1 text-sm border border-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-[#FF90E8] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-start text-white w-full max-w-md lg:max-w-[30%]">
            <Image src="https://assets.gumroad.com/assets/discover/film-bb2c44fa3a48b6cdaf5fa288c0386e8d17e532909ed54ea987d137092f99c3cc.svg" alt="Pangat Logo" width={80} height={80} className="mb-4" />
            <h3 className="text-2xl sm:text-3xl text-black mb-4 font-bold">Back End</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {backend.map((item, index) => (
                <span key={index} className="bg-white text-gray-800 rounded-full px-4 py-1 text-sm border border-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PangatPage;
