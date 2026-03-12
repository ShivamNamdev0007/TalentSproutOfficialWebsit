
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import PrivacyNotice from '../Components/PrivacyPolicy/PrivacyNotice'
import PageBanner from '../Components/PrivacyPolicy/PageBanner'

export const metadata = {
  title: "Privacy Policy | TalentSprout Recruitment & Staffing",
  description:
    "Read TalentSprout's Privacy Policy to understand how we collect, use, and protect your personal information when using our recruitment and staffing services.",
 
}
export default function PrivacyPage() {
  return (
    <div>
    <Navbar/>
    <PageBanner/>

    <PrivacyNotice/>

      
    </div>
  )
}
