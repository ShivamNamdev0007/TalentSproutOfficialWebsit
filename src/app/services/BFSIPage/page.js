import CallToActionSection from '@/app/Components/about/CallToActionSection'
import StatsCounter from '@/app/Components/about/StatsCounter'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import BfsiExpertise from '@/app/Components/Services/BFSI/BfsiExpertise'
import BfsiHeroSection from '@/app/Components/Services/BFSI/BfsiHeroSection'
import BFSIRecruitmentProcess from '@/app/Components/Services/BFSI/BFSIRecruitmentProcess'
import WhyChooseTalentSproutBsfi from '@/app/Components/Services/BFSI/WhyChooseTalentSproutBsfi'
import React from 'react'

export const metadata = {
  title: "BFSI Recruitment & Staffing Services",
  description:
    "Specialized BFSI recruitment and staffing services to help banks, financial institutions, and insurance companies hire top talent in India.",
  alternates: {
    canonical: "https://www.talentsprout.in/services/bfsi-recruitment"
  }
}
export default function BFSIPage() {
  return (
    <div>
    <Navbar/>
    <BfsiHeroSection/>
    <BfsiExpertise/>
    <BFSIRecruitmentProcess/>
    <StatsCounter/>
    <WhyChooseTalentSproutBsfi/>
    <CallToActionSection/>
    <br/>
    <Footer/>
      
    </div>
  )
}
