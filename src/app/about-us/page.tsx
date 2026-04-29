import AboutHeroSection from '@/components/aboutUs/AboutHeroSection'
import MissionSection from '@/components/aboutUs/MissionSection'
import WhyChooseUsSection from '@/components/aboutUs/WhyChooseUs'
import ContactSection from '@/components/ContactSection'
import FloatingCallBtn from '@/components/FloatingCallBtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceAreas from '@/components/ServiceAreas'
import React from 'react'

const page = () => {
  return (
    <main>
      <FloatingCallBtn />
      <Header />
      <AboutHeroSection/>
      <WhyChooseUsSection/>
      {/* <MissionSection/> */}
      <ServiceAreas />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default page
