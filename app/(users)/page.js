import Footer from "@/Components/Footer/Footer";
import GrowTogetherCTA from "@/Components/Landingpage/GrowTogetherCTA";
import HeroSection from "@/Components/Landingpage/HeroSection";
import OurServices from "@/Components/Landingpage/OurServices";
import WhyTalentSprout from "@/Components/Landingpage/WhyTalentSprout";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
    <OurServices/>
    <WhyTalentSprout/>
    <GrowTogetherCTA/>
    <Footer/>
   </>
  );
}
