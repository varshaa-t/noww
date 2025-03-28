"use client";

import { useAtomValue } from "jotai";
import DownArrow from "../../public/icons/DownArrow";
import { isOpenState } from "@/jotai/atoms/isOpen";
import HeroSectionLogo from "./HeroSectionLogo";

function HeroSection() {

  const isOpen = useAtomValue(isOpenState);

    return (
      <div className={`text-primary-yellow ${isOpen ? "hidden" : "block"}`}>
        <div className="absolute left-[6.5vw] top-[40%] sm:top-[35%] lg:top-[30%] flex flex-col items-center justify-center space-y-4 lg:space-y-12">
          <HeroSectionLogo/>
          <div className="md:text-[5vw] lg:text-[66px]">ADVISORY</div>
        </div>
        <div className="absolute left-[6.5vw] flex top-[80%] lg:top-[95%] lg:space-x-[40vw] xl:space-x-[50vw] 2xl:space-x-[60vw] items-center">
          <div className="tracking-tight text-2xl w-[400px] sm:w-96 md:w-[45vw] md:text-3xl lg:text-4xl xl:w-[30vw] 2xl:w-[25vw]">
            <div>Trusted independent</div>
            <div>tenant representation</div>
          </div>
          <div className="hidden lg:block">
            <DownArrow/>
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroSection;
  