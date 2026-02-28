import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import EmpathyHerosSection from '@/app/Components/Services/EmpathyPersonality/EmpathyHerosSection'
import OrganizationalBenefits from '@/app/Components/Services/EmpathyPersonality/OrganizationalBenefits'
import ProgramWeOffer from '@/app/Components/Services/EmpathyPersonality/ProgramWeOffer'
import TrainingMethodology from '@/app/Components/Services/EmpathyPersonality/TrainingMethodology'
import WhyChooseUsEmpathy from '@/app/Components/Services/EmpathyPersonality/WhyChooseUsEmpathy'
export const metadata = {
  title: "Empathy Personality Development Training ",
  description:
    "Empathy personality development training designed to enhance emotional intelligence, leadership skills, and workplace communication for professionals and corporates.",
  alternates: {
    canonical: "https://www.talentsprout.in/services/empathy-personality-development"
  }
}

export default function EmpathyPage() {
  return (
    <div>
    <Navbar/>
    <EmpathyHerosSection/>
    <ProgramWeOffer/>
    <TrainingMethodology/>
    <WhyChooseUsEmpathy/>
    <OrganizationalBenefits/>
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
