'use client'
import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import IndustryStaffing from '@/app/Components/Services/Staffing/IndustryStaffing'
import RecruitmentProcess from '@/app/Components/Services/Staffing/RecruitmentProcess'
import StaffingHerosSection from '@/app/Components/Services/Staffing/StaffingHerosSection'
import StaffingModels from '@/app/Components/Services/Staffing/StaffingModels'
import WhyChooseUsStaffing from '@/app/Components/Services/Staffing/WhyChooseUsStaffing'

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
