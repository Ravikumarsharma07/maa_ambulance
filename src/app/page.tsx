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
import CompactVariant from '@/components/CompactVariantHero';
import HeroVariation1 from '@/components/Variation1';

export default function Home() {
  return (
    <main>
      {/* <FloatingCallBtn/> */}
      {/* <Header /> */}
      <HeroVariation1/>
      <CompactVariant />
      <HeroSection 
        title="24x7 Nationwide Ambulance Services – Fast, Reliable, and Affordable"
        subtitle="Reach any hospital in India within minutes"
      />
      <ServicesSection />
      <AboutSection />
      <ServiceAreas />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}