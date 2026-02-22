import Footer from "./Components/Footer/Footer";
import GrowTogetherCTA from "./Components/Landingpage/GrowTogetherCTA";
import HeroSection from "./Components/Landingpage/HeroSection";
import MissionVision from "./Components/Landingpage/MissionVision";
import OurServices from "./Components/Landingpage/OurServices";
import PartnersSection from "./Components/Landingpage/PartnersSection";
import StatsSection from "./Components/Landingpage/StatsSection";
import WhoWeAre from "./Components/Landingpage/WhoWeAre";
import WhyTalentSprout from "./Components/Landingpage/WhyChooseTalentSprout";
import Navbar from "./Components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection></PartnersSection>
      {/* <WhoWeAre/> */}
      {/* <MissionVision/> */}
      <OurServices />
      {/* <StatsSection/> */}
      <WhyTalentSprout />
      {/* <GrowTogetherCTA/> */}
      <br></br>
      <Footer />
    </>
  );
}
