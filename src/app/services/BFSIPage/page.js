import CallToActionSection from '@/app/Components/about/CallToActionSection'
import StatsCounter from '@/app/Components/about/StatsCounter'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import BfsiExpertise from '@/app/Components/Services/BFSI/BfsiExpertise'
import BfsiHeroSection from '@/app/Components/Services/BFSI/BfsiHeroSection'
import BFSIRecruitmentProcess from '@/app/Components/Services/BFSI/BFSIRecruitmentProcess'
import WhyChooseTalentSproutBsfi from '@/app/Components/Services/BFSI/WhyChooseTalentSproutBsfi'
import React from 'react'

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
