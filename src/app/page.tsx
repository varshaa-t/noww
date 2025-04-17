import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  
  return (
    <div className="font-primary bg-primary-yellow">
      <div className="flex h-screen rounded-b-3xl overflow-hidden lg:h-[115vh]">
        <div className="h-full bg-[url('/images/hero-section-img.webp')] bg-cover bg-[0%_50%] w-full md:w-1/2"></div>
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
