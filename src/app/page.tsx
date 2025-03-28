import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  
  return (
    <div className="font-primary">
      <div className="flex h-screen rounded-b-3xl overflow-hidden lg:h-[115vh]">
        <div className="h-full bg-[url('/images/hero-section-img.webp')] bg-cover bg-[0%_50%] w-full md:w-1/2"></div>
        <div className="w-1/2 h-full bg-primary-blue hidden md:block"></div>
        <Navbar />
        <HeroSection/>
      </div>
    </div>
  );
}
