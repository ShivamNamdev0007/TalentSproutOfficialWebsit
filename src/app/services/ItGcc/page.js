import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ItGccHeroSection from '../../Components/Services/ItGcc/ItGccHeroSection'
import Footer from '../../Components/Footer/Footer'
import RolesSection from '@/app/Components/Services/ItGcc/RolesSection'
import CallToActionSection from '@/app/Components/about/CallToActionSection'
import RecruitmentProcess from '@/app/Components/Services/ItGcc/RecruitmentProcess'
import WhyChooseTalentSprout from '@/app/Components/Services/ItGcc/WhyChooseTalentSprout'

export default function ItGccPage() {
  return (
    <div>
      <Navbar/>
      <ItGccHeroSection/>
      <RolesSection/>
      <RecruitmentProcess/>
      <WhyChooseTalentSprout/>
      <CallToActionSection/>      
      <br/>
      <Footer/>
    </div>
  )
}
