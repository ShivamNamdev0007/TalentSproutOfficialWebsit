import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import PoshHeros from '@/app/Components/Services/POSHTraning/PoshHeros'
import PoshServices from '@/app/Components/Services/POSHTraning/PoshServices'

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
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
