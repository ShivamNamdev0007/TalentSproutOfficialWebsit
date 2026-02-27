import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import EmpathyHerosSection from '@/app/Components/Services/EmpathyPersonality/EmpathyHerosSection'
import React from 'react'

export default function EmpathyPage() {
  return (
    <div>
    <Navbar/>
    <EmpathyHerosSection/>
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
