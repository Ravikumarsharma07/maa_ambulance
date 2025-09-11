import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ServiceAreas from '@/components/ServiceAreas';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCallBtn from '@/components/FloatingCallBtn';

export default function Home() {
  return (
    <main>
      <FloatingCallBtn/>
      <Header />
      <HeroSection /> 
      <AboutSection />
      <ServicesSection />
      <ServiceAreas />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}