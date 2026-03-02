import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CallToActionSection from '../Components/about/CallToActionSection'
import LocationMap from '../Components/Contect/LocationMap'
import ContactSection from '../Components/Contect/ContactSection'

export default function ContectPage() {
  return (
    <div>
    <Navbar/>
    <ContactSection/>
    <CallToActionSection/>
    <br/>
    <LocationMap/>
    <br/>
    <Footer/>
      
    </div>
  )
}
