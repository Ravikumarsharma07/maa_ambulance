import ContactSection from '@/components/ContactSection'
import FloatingCallBtn from '@/components/FloatingCallBtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceAreas from '@/components/ServiceAreas'

const page = () => {
  return (
    <main>
        <FloatingCallBtn />
        <Header />
        <div className='w-full h-20 md:h-32'></div>
        <ServiceAreas />
        <ContactSection />
        <Footer />
    </main>
  )
}

export default page
