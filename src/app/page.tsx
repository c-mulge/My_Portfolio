import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import NaveBar from "@/components/Nave/NaveBar";
// import HeaderSection from "@/components/HeaderSection/HeaderSection";
import ProjectDisplay from "@/components/Project/ProjectDisplay";
import ContactPage from "@/components/Contact/Contact";
import LogoScroller from "@/components/LogoScroller/LogoScroller";
import LogoScrollerReverse from "@/components/LogoScroller/LogoScrollerReverse";

export default function Home() {
  return (
    <div>
      <NaveBar />
      <div className="h-[10px]"></div>
      <Hero />
      {/* <HeaderSection /> */}
      <About />
      <div className="logo">
        <LogoScroller />
        <LogoScrollerReverse />
      </div>
      <ProjectDisplay />
      <ContactPage />
    </div>
  );
}
