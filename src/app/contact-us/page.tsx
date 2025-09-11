import ContactSection from '@/components/ContactSection'
import FloatingCallBtn from '@/components/FloatingCallBtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <main>
        <FloatingCallBtn />
        <Header />
        <div className='w-full h-20 md:h-32'></div>
        <ContactSection />
        <Footer />
    </main>
  )
}

export default page
