"use client";

import { useAtomValue } from "jotai";
import DownArrow from "../../public/icons/DownArrow";
import { isOpenState } from "@/jotai/atoms/isOpen";
import HeroSectionLogo from "./HeroSectionLogo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function HeroSection() {

  const isOpen = useAtomValue(isOpenState);
  const heroLogoRef = useRef<HTMLDivElement | null>(null);
  const heroCenterTextRef = useRef<HTMLDivElement | null>(null);
  const heroLeftTextRef = useRef<HTMLDivElement | null>(null);
  const heroArrowRef = useRef<HTMLDivElement | null>(null);

  const lines = ["Trusted independent", "tenant representation"];

  useGSAP(() => {

    if(!heroCenterTextRef.current || !heroLeftTextRef.current) return;

    gsap.from(heroCenterTextRef.current, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.2
    })

    const ctx = gsap.context(() => {
      gsap.from(".word", {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 50,
        stagger: 0.15,
        delay: 0.2,
        autoAlpha: 1
      });
    }, heroLeftTextRef);    
    
    return () => ctx.revert();

  }, []);

  useGSAP(() => {

    if(!heroLogoRef.current || !heroArrowRef.current) return;

    gsap.from(heroLogoRef.current, {
      opacity: 0,
      autoAlpha: 0,
      clipPath: "inset(0% 0% 15% 0%)",
      y: 50,
      delay: 1
    })

    gsap.from(heroArrowRef.current, {
      opacity: 0,
      autoAlpha: 0,
      y: 50,
      delay: 1
    })

  }, []);

  return (
    <div className={`text-primary-yellow ${isOpen ? "hidden" : "block"}`}>
      <div className="absolute left-[6.5vw] top-[40%] flex flex-col items-center justify-center space-y-4 sm:top-[35%] lg:top-[30%] lg:space-y-12">
        <div className="invisible" ref={heroLogoRef}>
          <HeroSectionLogo/>
        </div>
        <div
          ref={heroCenterTextRef} 
          className="invisible md:text-[5vw] lg:text-[66px]"
        >
            ADVISORY
          </div>
      </div>
      <div className="absolute left-[6.5vw] flex items-center top-[80%] lg:top-[95%] lg:space-x-[40vw] xl:space-x-[50vw] 2xl:space-x-[60vw]">
        <div 
          ref={heroLeftTextRef}
          className="tracking-tight text-2xl w-[340px] sm:w-96 md:w-[45vw] md:text-3xl lg:text-4xl xl:w-[30vw] 2xl:w-[25vw]"
        >
          {lines.map((line, index) => (
            <div key={index}>
              {line.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="word inline-block mr-2"
                >
                  {word}
                </span>
              ))
              }
            </div>
          ))}
        </div>
        <div
          ref={heroArrowRef} 
          className="hidden lg:block"
        >
          <DownArrow
            page="landing"
          />
        </div>
      </div>
    </div>
  )
  }
  
  export default HeroSection;
  