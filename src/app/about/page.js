import AboutHero from "../Components/about/AboutHero";
import LeadershipSection from "../Components/about/LeadershipSection";
import MissionVision from "../Components/about/MissionVision";
import WhoWeAre from "../Components/about/WhoWeAre";
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
      <Footer/>
    </>
  );
}