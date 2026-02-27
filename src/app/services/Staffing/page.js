'use client'
import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import StaffingHerosSection from '@/app/Components/Services/Staffing/StaffingHerosSection'

export default function StaffingPage() {
  return (
    <div>
    <Navbar/>
    <StaffingHerosSection/>
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
