
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import PageBanner from '../Components/TermsofService/PageBanner.jsx'
import TermsConditions from '../Components/TermsofService/TermsConditions'

export const metadata = {
  title: "Terms of Service | TalentSprout Recruitment & Staffing",
  description:
    "Read the official Terms of Service for TalentSprout. Understand the rules, policies, and conditions governing the use of our recruitment and staffing services.",
 
}
export default function TermsPage() {
  return (
    <div>
    <Navbar/>
    <PageBanner/>
    <TermsConditions/>  
    </div>
  )
}
