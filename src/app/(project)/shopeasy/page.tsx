"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import OnlyBtn from "@/components/Button/Button";
import { Github, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

const frontend = [
  "AI",
  "Next JS",
  "Tailwind Css",
  "GSAP",
  "Framer Motion",
  "Redis",
  "Type Script",
  "Shad CN",
  "React",
  "Zod",
  "Axios",
];
const backend = [
  "GoLang",
  "GRPC",
  "Gin",
  "Postgres",
  "SQLC",
  "Paseto",
  "Redis",
];

const productDisplayImages = [
  "/product1.png",
  "/product2.png",
  "https://automobilist.com/cdn/shop/products/59008_source_1668180485.jpg?v=1743658118&width=700",
];

const serverManagementImages = [
  "/create1.png",
  "/create0.png",
  "/group1.png",
  "/group0.png",
];

gsap.registerPlugin(ScrollTrigger);

const PangatPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentPreMadeBlockImageIndex, setCurrentPreMadeBlockImageIndex] =
    useState(0);
  const [currentProductImageIndex, setCurrentProductImageIndex] = useState(0);

  useEffect(() => {
    const preMadeBlockInterval = setInterval(() => {
      setCurrentPreMadeBlockImageIndex(
        (idx) => (idx + 1) % serverManagementImages.length
      );
    }, 2000);
    return () => clearInterval(preMadeBlockInterval);
  }, []);

  useEffect(() => {
    gsap.set(".pangat-intro-image", { scale: 0, y: 0, opacity: 1 });
    const tl = gsap.timeline({
      onComplete: () => setShowContent(true),
    });
    tl.to(".pangat-intro-overlay", {
      y: "0%",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        ".pangat-intro-image",
        {
          scale: 1,
          duration: 1.0,
          ease: "power3.out",
          delay: -0.8,
        },
        "<"
      )
      .to(
        ".pangat-intro-overlay",
        {
          y: "100%",
          duration: 1.2,
          ease: "power2.in",
          delay: 0.6,
        },
        ">-0.6"
      )
      .to(
        ".pangat-intro-image",
        {
          y: "100%",
          opacity: 0,
          duration: 1.2,
          ease: "power2.in",
          delay: -0.8,
        },
        "<"
      );
  }, []);

  useEffect(() => {
    if (showContent) {
      const sections = [
        { trigger: ".pangat-main-image-wrapper" },
        { trigger: ".real-time-messaging-section" },
        { trigger: ".circular-text-block" },
        { trigger: ".audio-video-section" },
        { trigger: ".video-call-section" },
      ];
      gsap.fromTo(
        ".pangat-main-title",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1.5, ease: "expo.out" }
      );
      gsap.fromTo(
        ".pangat-second-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "expo.out" }
      );
      sections.forEach(({ trigger }) => {
        gsap.fromTo(
          trigger,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger, start: "top 80%" },
          }
        );
      });
    }
  }, [showContent]);

  useEffect(() => {
    gsap.to(".product-slider-image", { opacity: 0, duration: 0.5 });
    gsap.to(`.product-slider-image-${currentProductImageIndex}`, {
      opacity: 1,
      duration: 0.5,
    });
  }, [currentProductImageIndex]);

  const nextSlide = () => {
    setCurrentProductImageIndex(
      (prevIndex) => (prevIndex + 1) % productDisplayImages.length
    );
  };

  const prevSlide = () => {
    setCurrentProductImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productDisplayImages.length) %
        productDisplayImages.length
    );
  };

  return (
    <>
      {/* Intro Animation */}
      <div className="relative font-sans min-h-screen bg-[#FFC900] text-black pt-[10vh]">
        <div className="pangat-intro-overlay fixed inset-0 bg-[#FF5C00] z-50 flex items-center justify-center">
          <Image
            src="/star.png"
            alt="Intro"
            width={120}
            height={120}
            className="pangat-intro-image w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
            priority
          />
        </div>

        {/* Main Section */}
        {showContent && (
          <main className="container px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-20 relative z-20 max-w-[90rem] mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-none pangat-main-title pr-12">
              Flexible, beautiful
              <br />
              and simple.
              <span className="text-[#FFFF]"> It's the Semplice way.</span>
            </h1>

            <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-24 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold pangat-second-title">
                ShopEasy
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-700 font-semibold max-w-3xl">
                A Donation & E-commerce Platform for Colleges and NGOs
              </p>
            </div>

            <div className="w-full flex justify-start">
                <OnlyBtn
              className="bg-blue-700 text-white h-12 w-32 sm:h-14 sm:w-36 md:h-[60px] md:w-[140px] font-bold flex items-center justify-center gap-2 hover:text-zinc-800 mb-6 sm:mb-8 text-sm sm:text-base"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              <span>Skill Use</span>
              <MoveRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </OnlyBtn>
            </div>

            <div className="w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl pangat-main-image-wrapper mb-8 sm:mb-12 md:mb-14 bg-black">
              <Image
                src={"/shop.png"}
                alt="Page Builder UI"
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-700"
                priority
              />
            </div>

            <div className="flex gap-3 sm:gap-5">
              <a
                href="https://github.com/siddheshRajendraNimbalkar/collage-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OnlyBtn className="bg-white text-black h-12 w-28 sm:h-14 sm:w-32 md:h-[60px] md:w-[120px] font-bold flex items-center justify-center gap-2 hover:text-[#FF5C00] text-sm sm:text-base">
                  <span>GITHUB</span>
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                </OnlyBtn>
              </a>
            </div>
          </main>
        )}
      </div>

      {/* Circular Text Block */}
      <div className="bg-white min-h-[50vh] sm:min-h-[60vh] w-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 border-b">
        <div className="bg-[#23A094] p-4 sm:p-6 md:p-8 rounded-full shadow-lg text-center border-2 border-black max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <div className="bg-orange-500 p-4 sm:p-6 md:p-8 rounded-full border-2 border-black">
            <div className="bg-[#FFC900] text-sm sm:text-base md:text-lg lg:text-xl px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-12 rounded-full text-black circular-text-block border-2">
              <p className="leading-relaxed">
                Shop Easy is a full-stack collaboration and marketplace platform
                built for college staff and NGOs...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic UI Section */}
      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#FC6800] p-4 sm:p-6 flex items-center justify-center">
          <div className="w-full max-w-lg lg:max-w-none">
            <Image
              src="/complete.png"
              alt="button1"
              width={600}
              height={600}
              className="w-full h-auto shadow-md"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#131313] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center text-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 text-white pangat-main-title">
            Dynamic UI, Powered by Animation
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 pangat-second-title max-w-md">
            Explore fluid animations using modern frontend libraries.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["GSAP", "Framer Motion", "Tailwind CSS", "Clsx", "Swiper"].map(
              (item, idx) => (
                <span
                  key={idx}
                  className="p-2 sm:p-3 bg-white text-black text-xs sm:text-sm rounded-md font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Redis Banner */}
      <div className="">
        <div className="w-full overflow-hidden">
          <img
            src="/search.png"
            alt="search"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full flex justify-center bg-[#DFDDD0] py-4 sm:py-6">
          <h1 className="text-lg sm:text-xl md:text-2xl px-4 font-bold text-[#252A16] text-center">
            Search Bar Powered by Redis...
          </h1>
        </div>
      </div>

      {/* Product Image Slider */}
      <div className="flex flex-col lg:flex-row w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen bg-[#2e2e2e] text-white">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-full">
          {productDisplayImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity product-slider-image product-slider-image-${index}`}
            />
          ))}
          <div className="absolute inset-0 flex justify-between items-center px-2 sm:px-4">
            <button
              onClick={prevSlide}
              className="bg-black/20 hover:bg-black/40 rounded-full p-1 sm:p-2 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/20 hover:bg-black/40 rounded-full p-1 sm:p-2 transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="sm:w-12 sm:h-12" />
            </button>
          </div>
          <div className="absolute bottom-4 flex gap-2">
            {productDisplayImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  idx === currentProductImageIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentProductImageIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
            GoLang Makes Web Faster.
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
            Built with performance, concurrency and speed in mind.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 gap-6 sm:gap-8">
        <div className="bg-[#F1F333] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-start w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4">
            <Image
              src="https://assets.gumroad.com/assets/discover/drawing-9fb474a77e8f85d359ee1b906f46c2f6833696fd9b2acd79b29552d9b7b00781.svg"
              alt="frontend"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
            Front End
          </h3>
          <div className="flex flex-wrap gap-2">
            {frontend.map((item, index) => (
              <span
                key={index}
                className="bg-white text-black px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm border border-gray-300 rounded-full font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#FF90E8] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-start w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4">
            <Image
              src="https://assets.gumroad.com/assets/discover/film-bb2c44fa3a48b6cdaf5fa288c0386e8d17e532909ed54ea987d137092f99c3cc.svg"
              alt="backend"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
            Back End
          </h3>
          <div className="flex flex-wrap gap-2">
            {backend.map((item, index) => (
              <span
                key={index}
                className="bg-white text-black px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm border border-gray-300 rounded-full font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PangatPage;
