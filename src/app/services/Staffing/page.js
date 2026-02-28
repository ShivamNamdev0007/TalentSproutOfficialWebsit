
import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import IndustryStaffing from '@/app/Components/Services/Staffing/IndustryStaffing'
import RecruitmentProcess from '@/app/Components/Services/Staffing/RecruitmentProcess'
import StaffingHerosSection from '@/app/Components/Services/Staffing/StaffingHerosSection'
import StaffingModels from '@/app/Components/Services/Staffing/StaffingModels'
import WhyChooseUsStaffing from '@/app/Components/Services/Staffing/WhyChooseUsStaffing'
export const metadata = {
  title: "Staffing & Recruitment Services | Talent Sprout",
  description:
    "End-to-end staffing and recruitment services to help businesses hire top talent across industries with flexible hiring models.",
  alternates: {
    canonical: "https://www.talentsprout.in/services/staffing-services"
  }
}

export default function StaffingPage() {
  return (
    <div>
    <Navbar/>
    <StaffingHerosSection/>
    <StaffingModels/>
    <RecruitmentProcess/>
    <WhyChooseUsStaffing/>
    <IndustryStaffing/>
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
