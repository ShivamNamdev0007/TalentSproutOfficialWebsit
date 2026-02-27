import AboutHero from "../Components/about/AboutHero";
import CallToActionSection from "../Components/about/CallToActionSection";
import LeadershipSection from "../Components/about/LeadershipSection";
import MissionVision from "../Components/about/MissionVision";
import StatsCounter from "../Components/about/StatsCounter";
import WhoWeAre from "../Components/about/WhoWeAre";
import WhyChooseUs from "../Components/about/WhyChooseUs";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";



export default function AboutPage() {
  return (
    <>
    <Navbar/>
      <AboutHero/>
      <WhoWeAre/>
      <MissionVision/>
      <LeadershipSection/>
      <StatsCounter/>
      <WhyChooseUs/>
      <CallToActionSection/>
      <br></br>
      <Footer/>
    </>
  );
}