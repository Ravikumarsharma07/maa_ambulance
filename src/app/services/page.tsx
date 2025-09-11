import FAQSection from '@/components/FAQSection'
import FloatingCallBtn from '@/components/FloatingCallBtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceAreas from '@/components/ServiceAreas'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
  return (
    <main>
      <FloatingCallBtn />
      <Header />
      <div className='w-full h-20 md:h-32'></div>
      <ServicesSection />

      <ServiceAreas />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default page
