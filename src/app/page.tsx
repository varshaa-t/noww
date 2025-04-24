"use client";

import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Home() {

  const heroImageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    if(!heroImageRef.current) return;

    gsap.from(heroImageRef.current, {
      scale: 1.25,
      duration: 1,
      delay: 1
    })

  }, []);
  
  return (
    <div className="font-primary bg-primary-yellow">
      <div className="flex h-screen rounded-b-3xl overflow-hidden lg:h-[115vh]">
        <div className="overflow-hidden w-full md:w-1/2">
          <div ref={heroImageRef} className="h-full bg-[url('/images/hero-section-img.webp')] bg-cover bg-[0%_50%]"></div>
        </div>
        <div className="w-1/2 h-full bg-primary-blue hidden md:block"></div>
        <Navbar />
        <HeroSection/>
      </div>
      <div>
        <ExploreSection/>
      </div>
      <AboutSection/>
    </div>
  );
}
