import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import HeroCarousel from "./(public)/(pages)/home/components/HeroCarousel";
import DeliverySteps from "./(public)/(pages)/home/components/WhyPickUs";
import PopularBrands from "./(public)/(pages)/home/components/PopularBrands";

export default function Home() {
  return (
    <div className="space-y-10 px-5">
      {/* <Sidebar></Sidebar> */}
      {/* <div className="w-9/12"></div> */}
      <HeroCarousel />
      <DeliverySteps></DeliverySteps>
      <PopularBrands></PopularBrands>
    </div>
  );
}
