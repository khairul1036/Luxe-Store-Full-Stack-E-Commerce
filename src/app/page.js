import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import HeroCarousel from "./(public)/(pages)/home/components/HeroCarousel";

export default function Home() {
  return (
    <div className="px-5">
      {/* <Sidebar></Sidebar> */}
      {/* <div className="w-9/12"></div> */}
      <HeroCarousel />
    </div>
  );
}
