import Footer from "@/Components/Footer/Footer";
import CounterSection from "@/Components/Landingpage/CounterSection";
import HeroSection from "@/Components/Landingpage/HeroSection";
import HeroSection2 from "@/Components/Landingpage/HeroSection2";
import OurServices from "@/Components/Landingpage/OurServices"; 
import PartnersSection from "@/Components/Landingpage/PartnersSection";
import TestimonialSection from "@/Components/Landingpage/TestimonialSection";
import WhyTalentSprout from "@/Components/Landingpage/WhyChooseTalentSprout";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <PartnersSection/> 
    <OurServices/>
    <CounterSection/>
    <WhyTalentSprout/>
    <TestimonialSection/>
    <HeroSection2/>
    <Footer/>
   </>
  );
}
