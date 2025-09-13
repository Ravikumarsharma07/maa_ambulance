import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallBtn from "@/components/FloatingCallBtn";
import ContactSection from "@/components/ContactSection";
import { Services, getServiceBySlug } from "@/constants/Services";
import ServiceAreas from "@/components/ServiceAreas";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import { ChevronRight, Clock, HeartPulse, ShieldCheck, Phone } from "lucide-react";


// 1. Generate SEO metadata for each service page
export async function generateMetadata({
  params,
}: {params: Promise<{service: string}>}): Promise<Metadata> {
  const paramService = await params
  const service = getServiceBySlug(paramService.service);
  if (!service) {
    return {
      title: "Service Not Found - Jyoti Ambulance Services",
    };
  }

  const siteUrl = "https://jyotiambulance.in"; 

  return {
    title: `${service.name} in Delhi | 24/7 Emergency Support | Jyoti Ambulance`,
    description: service.description,
    keywords: `${service.name}, ${service.name} in Delhi, ambulance service, Jyoti Ambulance`,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${siteUrl}/services/${service.slug}`,
      title: `${service.name} in Delhi | Jyoti Ambulance Services`,
      description: service.description,
      siteName: "Jyoti Ambulance Services",
      images: [
        {
          url: `${siteUrl}/${service.imageURL}`, // Use dynamic image
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@jyotiambulance", // Replace with your Twitter handle
      title: `${service.name} in Delhi | Jyoti Ambulance Services`,
      description: service.description,
      images: [`${siteUrl}/${service.imageURL}`],
    },
  };
}

// 2. Generate static pages for all services at build time
export function generateStaticParams() {
  return Services.map((service) => ({
    service: service.slug,
  }));
}

// 3. The Page Component
export default async function ServicePage({ params }: {params: Promise<{service: string}>}) {
  const paramService = await params
  const service = getServiceBySlug(paramService.service);


  if (!service) {
    notFound(); // Triggers the 404 page
  }

  const siteUrl = "https://jyotiambulance.in"; // Replace with your actual domain

  // JSON-LD Schema for the specific service page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    image: `${siteUrl}/${service.imageURL}`,
    provider: {
      "@type": "EmergencyService",
      name: "Jyoti Ambulance Services",
      telephone: "+91-98765-43210", // Use your primary number
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Delhi",
    },
    serviceArea: {
      "@type": "Place",
      name: "Delhi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FloatingCallBtn />
      <Header />
    <article className="container mx-auto px-4 py-12 pt-28 md:pt-44 ">
  {/* BREADCRUMBS for SEO and Navigation */}
  <div className="max-w-7xl mx-auto mb-6 text-sm text-gray-500">
    <Link href="/" className="hover:text-red-600">
      Home
    </Link>
    <ChevronRight className="inline-block w-4 h-4 mx-1" />
    <Link href="/services" className="hover:text-red-600">
      Services
    </Link>
    <ChevronRight className="inline-block w-4 h-4 mx-1" />
    <span className="text-gray-700 font-medium">{service.name}</span>
  </div>

  <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-12">
    {/* --- Main Content (Left Column) --- */}
    <div className="w-full lg:w-2/3">
      {/* Page Title & Subtitle */}
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          {service.name} 
        </h1>
        <p className="text-lg text-gray-600">
          Your Trusted Partner for Rapid Emergency Response
        </p>
      </div>

      {/* Trust Signal: Reviewed By */}
      <div className="text-xs text-gray-500 mb-6 border-b pb-4">
        Medically reviewed by Dr. Anjali Sharma | Last Updated: September 8, 2025
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={service.imageURL}
          alt={`${service.name} in Delhi`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Key Features / Trust Box */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <Clock className="mx-auto h-8 w-8 text-red-600 mb-2" />
          <p className="font-semibold text-sm">24/7 Availability</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <HeartPulse className="mx-auto h-8 w-8 text-red-600 mb-2" />
          <p className="font-semibold text-sm">Certified Paramedics</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <ShieldCheck className="mx-auto h-8 w-8 text-red-600 mb-2" />
          <p className="font-semibold text-sm">Govt. Approved</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-3xl font-bold text-red-600">15</p>
          <p className="font-semibold text-sm">Min Avg. Response</p>
        </div>
      </div>
      
      {/* Main Body Content */}
      <div
        className="prose lg:prose-xl max-w-none prose-h2:font-bold prose-h3:font-semibold"
        dangerouslySetInnerHTML={{ __html: service.content }}
      />
      
      {/* --- DYNAMIC FAQ Section --- */}
      <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
              <details className="p-4 border rounded-lg bg-white shadow-sm">
                  <summary className="font-semibold cursor-pointer">How much does an {service.name} cost in Delhi?</summary>
                  <p className="mt-2 text-gray-700">The cost depends on factors like the type of ambulance, distance, and required medical equipment. Please call us at <a href="tel:+919876543210" className="text-red-600 font-semibold">+91-98765-43210</a> for a transparent, upfront quote.</p>
              </details>
              <details className="p-4 border rounded-lg bg-white shadow-sm">
                  <summary className="font-semibold cursor-pointer">What areas in Delhi do you serve?</summary>
                  <p className="mt-2 text-gray-700">We serve all areas of Delhi NCR, including South Delhi, North Delhi, East Delhi, West Delhi, Gurgaon, Noida, and surrounding regions. Our fleet is strategically placed for the fastest response times across the city.</p>
              </details>
               <details className="p-4 border rounded-lg bg-white shadow-sm">
                  <summary className="font-semibold cursor-pointer">What is included in the {service.name}?</summary>
                  <p className="mt-2 text-gray-700">Our {service.name} includes a certified medical team, essential life-support equipment, and direct transport to the hospital of your choice. Specific equipment varies based on the service selected.</p>
              </details>
          </div>
      </div>
    </div>

    {/* --- Sticky Sidebar (Right Column) --- */}
    <aside className="w-full lg:w-1/3 lg:sticky top-24 h-fit">
      <div className="border rounded-lg p-6 bg-red-50 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-red-800 mb-4">Emergency Helpline</h3>
        <p className="text-center text-gray-600 mb-4">Available 24/7 for Immediate Dispatch</p>
        
        <a
          href="tel:+91-9540944424"
          className="w-full flex items-center justify-center bg-red-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors md:text-xl shadow-md"
        >
          <Phone className="w-6 h-6 mr-3" />
          Call +91-9540944424
        </a>
      </div>

      {/* Related Services */}
      <div className="mt-8">
        <h4 className="font-bold text-xl mb-4">Related Services</h4>
        <ul className="space-y-2">
            <li><Link href="/services/icu-ambulance-services" className="flex justify-between items-center text-gray-700 hover:text-red-600 hover:bg-gray-50 p-3 rounded-md transition-colors"><span>ICU Ambulance</span> <ChevronRight className="w-5 h-5" /></Link></li>
            <li><Link href="/services/air-ambulance-service" className="flex justify-between items-center text-gray-700 hover:text-red-600 hover:bg-gray-50 p-3 rounded-md transition-colors"><span>Air Ambulance</span> <ChevronRight className="w-5 h-5" /></Link></li>
            <li><Link href="/services/mortuary-van-services" className="flex justify-between items-center text-gray-700 hover:text-red-600 hover:bg-gray-50 p-3 rounded-md transition-colors"><span>Mortuary Van Services</span> <ChevronRight className="w-5 h-5" /></Link></li>
        </ul>
      </div>
    </aside>
  </div>
</article>
      <ServicesSection />
      <ServiceAreas />
      <ContactSection />
      <Footer />
    </main>
  );
}