import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CallToActionSection from '../Components/about/CallToActionSection'
import LocationMap from '../Components/Contect/LocationMap'

export default function ContectPage() {
  return (
    <div>
    <Navbar/>
    <CallToActionSection/>
    <br/>
    <LocationMap/>
    <br/>
    <Footer/>
      
    </div>
  )
}
