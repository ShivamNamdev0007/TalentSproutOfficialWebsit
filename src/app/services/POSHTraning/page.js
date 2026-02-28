import CallToActionSection from '@/app/Components/about/CallToActionSection'
import Footer from '@/app/Components/Footer/Footer'
import Navbar from '@/app/Components/Navbar/Navbar'
import PoshHeros from '@/app/Components/Services/POSHTraning/PoshHeros'
import PoshServices from '@/app/Components/Services/POSHTraning/PoshServices'
import React from 'react'

export default function POSHTraningPage() {
  return (
    <div>
    <Navbar/>
    <PoshHeros/> 
    <PoshServices/>   
    <CallToActionSection/>
    <Footer/>
      
    </div>
  )
}
