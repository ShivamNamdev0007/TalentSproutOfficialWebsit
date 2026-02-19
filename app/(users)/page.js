import Footer from "@/Components/Footer/Footer";
import GrowTogetherCTA from "@/Components/Landingpage/GrowTogetherCTA";
import HeroSection from "@/Components/Landingpage/HeroSection";
import MissionVision from "@/Components/Landingpage/MissionVision";
import OurServices from "@/Components/Landingpage/OurServices"; 
import StatsSection from "@/Components/Landingpage/StatsSection";
import WhoWeAre from "@/Components/Landingpage/WhoWeAre";
import WhyTalentSprout from "@/Components/Landingpage/WhyTalentSprout";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <WhoWeAre/>
   <MissionVision/>
    <OurServices/>
    {/* <StatsSection/> */}
    <WhyTalentSprout/>
    <GrowTogetherCTA/>
    <Footer/>
   </>
  );
}
