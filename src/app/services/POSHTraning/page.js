import CallToActionSection from '@/app/Components/about/CallToActionSection'
import StatsCounter from '@/app/Components/about/StatsCounter'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import IndustriesWeServe from '@/app/Components/Services/POSHTraning/IndustriesWeServe'
import OurPoshServices from '@/app/Components/Services/POSHTraning/OurPoshServices'
import PoshHeros from '@/app/Components/Services/POSHTraning/PoshHeros'
import PoshServices from '@/app/Components/Services/POSHTraning/PoshServices'
import TrainingMethodology from '@/app/Components/Services/POSHTraning/TrainingMethodology'
import WhyPoshMatters from '@/app/Components/Services/POSHTraning/WhyPoshMatters'

export const metadata = {
  title: "POSH Training & Compliance Services ",
  description:
    "POSH training and compliance services to ensure a safe, respectful, and legally compliant workplace under the POSH Act in India.",
  alternates: {
    canonical: "https://www.talentsprout.in/services/posh-training"
  }
}

export default function POSHTraningPage() {
  return (
    <div>
    <Navbar/>
    <PoshHeros/> 
    <PoshServices/>
    <OurPoshServices/>
    <StatsCounter/>   
    <TrainingMethodology/>
    <IndustriesWeServe/>
    <WhyPoshMatters/>
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
