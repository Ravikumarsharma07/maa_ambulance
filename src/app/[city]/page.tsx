import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import cities from "@/constants/Cities";
import ServiceAreas from "@/components/ServiceAreas";
import FloatingCallBtn from "@/components/FloatingCallBtn";
import Hero from "@/components/City_specific/Hero";
import HowToBookAmbulance from "@/components/City_specific/HowToBookAmbulance";
import AreasWeServe from "@/components/City_specific/AreasWeServe";

const findCity = (cities: { name: string; slug: string; places: { name: string; slug: string }[] }[], paramCity: string)=>{
  for(let i = 0; i < cities.length; i++){
    const city = cities[i].places.find((place) => place.name.toLowerCase() === paramCity.toLowerCase())
    if(city){
      return city
    }
  }
}
// Generate metadata for each city page
export async function generateMetadata({
  params,
}: { params: Promise<{city: string}>}): Promise<Metadata> {
  
  const paramCity =await params
  const city = paramCity.city.split("-").splice(3).join(" ")

  const cityData = findCity(cities, city);
  if (!cityData) {
    return {
      title: "City Not Found - Jyoti Ambulance Services",
    };
  }
  return {
    title: `24x7 Ambulance Service in ${cityData.name} - Fast Emergency Medical Transport | Jyoti Ambulance`,
    description: `Professional ambulance service in ${cityData.name}. 24/7 ICU ambulance, air ambulance, emergency medical transport. Fast response time. Call +91-98765-43210`,
    keywords: `ambulance service in ${cityData.name}, ambulance near me ${cityData.name}, best ambulance service in ${cityData.name}, ambulance service, emergency ambulance ${cityData.name}, ICU ambulance ${cityData.name}, medical transport ${cityData.name}`,
    alternates: {
      canonical: `https://jyotiambulance.in/${cityData.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://jyotiambulance.in/${cityData.slug}`,
      title: `24x7 Ambulance Service in ${cityData.name} - Jyoti Ambulance Services`,
      description: `Fast, reliable ambulance services in ${cityData.name}. ICU ambulance, air ambulance, emergency medical transport with trained staff.`,
      siteName: "Jyoti Ambulance Services",
      images: [
        {
          url: "/ambulance.png",
          width: 1200,
          height: 630,
          alt: `Ambulance Service in ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@jyotiambulance",
      title: `24x7 Ambulance Service in ${cityData.name} - Jyoti Ambulance Services`,
      description: `Fast, reliable ambulance services in ${cityData.name}. ICU ambulance, air ambulance, emergency medical transport.`,
      images: ["/images/ambulance-city.jpg"],
    },
  };
}

// Generate static paths for all cities
export function generateStaticParams() {
  const staticPaths: { city: string }[] = [];
  for (let i = 0; i < cities.length; i++) {
    cities[i].places.forEach((place) => {
      staticPaths.push({ city: place.slug });
    })
  }
  return staticPaths
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const paramCity = await params
  const city = paramCity.city.split("-").splice(3).join(" ")
  const cityData = findCity(cities, city);
  if (!cityData) return (
    notFound()
  )

  // JSON-LD Schema for city-specific page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Jyoti Ambulance Service - ${cityData.name}`,
    description: `24x7 ambulance services in ${cityData.name}. ICU ambulances, air ambulances, and emergency medical transport with trained staff and advanced equipment.`,
    url: `https://jyotiambulance.in/${cityData.slug}`,
    telephone: "+91-98765-43210",
    image: "https://jyotiambulance.com/ambulance.png", // ✅ Add logo/representative image
    priceRange: "₹₹ - ₹₹₹", // ✅ Optional but helps Google display rich snippets
    sameAs: [
      "https://www.facebook.com/jyotiambulanceservices/",
      "https://www.instagram.com/jyotiambulanceservices/",
      "https://x.com/jyotiambulance4",
      "https://in.pinterest.com/jyotiambulance/",
      "https://www.youtube.com/channel/UCljuoYlZFsPQ_GnuC_R7ltw",
    ], // ✅ Social profiles (if available)
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressRegion: cityData.name,
      addressCountry: "IN",
    },
    availableService: [
      {
        "@type": "MedicalService",
        name: `Emergency Ambulance Service in ${cityData.name}`,
        serviceType: "Emergency Medical Transport",
        areaServed: {
          "@type": "City",
          name: cityData.name,
        },
      },
      {
        "@type": "MedicalService",
        name: `ICU Ambulance in ${cityData.name}`,
        serviceType: "Intensive Care Medical Transport",
        areaServed: {
          "@type": "City",
          name: cityData.name,
        },
      },
      {
        "@type": "MedicalService",
        name: `Air Ambulance in ${cityData.name}`,
        serviceType: "Air Medical Transport",
        areaServed: {
          "@type": "City",
          name: cityData.name,
        },
      },
    ],
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    areaServed: {
      "@type": "City",
      name: cityData.name,
      addressRegion: cityData.name,
      addressCountry: "IN",
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
      <Hero cityData={cityData} />
      {/* City-specific content section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Ambulance Services in {cityData.name}
            </h1>
            <p className="md:text-xl text-gray-800">
              Your trusted partner for 24/7 emergency medical transport.
            </p>
          </div>

          <div className="mt-12 text-[16px] text-gray-700 leading-relaxed space-y-6">
            <p>
              Are you looking for a fast and reliable{" "}
              <strong>ambulance service in {cityData.name}</strong>? Jyoti
              Ambulance Services offers comprehensive and immediate medical
              transport solutions across {cityData.name} and its surrounding
              areas. Our modern, fully-equipped ambulance fleet is strategically
              positioned to guarantee the quickest response time for any medical
              emergency.
            </p>

            {/* Section targeting the "Ambulance Number" keyword */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-red-500">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Emergency Ambulance Number in {cityData.name}
              </h2>
              <p className="max-sm:text-[16px]">
                For immediate assistance, dial our 24-hour emergency{" "}
                <strong>ambulance number in {cityData.name}</strong>. Our
                dispatch team is ready to assist you day and night.
              </p>
              <p className="text-xl md:text-2xl font-bold bg-red-100 hover:bg-red-200 w-max p-2 px-4 rounded-full text-red-600 mt-4 tracking-wider">
                <a href="tel:+91-9540944424">+91-9540944424</a>{" "}
                {/* Replace with your actual phone number */}
              </p>
            </div>

            <h2 className=" text-xl md:text-2xl font-bold text-gray-900 pt-4">
              Our Range of Ambulance Services in {cityData.name}
            </h2>
            <p>
              We provide a variety of ambulance options to cater to different
              medical needs, ensuring patient safety and comfort. Our services
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Advanced Life Support (ALS) Ambulances:</strong>{" "}
                Equipped with ICU facilities, ventilators, and cardiac monitors
                for critical patients.
              </li>
              <li>
                <strong>Basic Life Support (BLS) Ambulances:</strong> Ideal for
                non-emergency patient transport and stable patients.
              </li>
              <li>
                <strong>Patient Transport Ambulance:</strong> For safe and
                comfortable transfer to and from hospitals, clinics, and homes
                in {cityData.name}.
              </li>
              <li>
                <strong>Air Ambulance Services:</strong> Coordinating fast and
                secure air medical transport for long-distance and critical
                transfers.
              </li>
            </ul>

            <p>
              We are proud to serve all major private and government hospitals,
              specialty clinics, and residential areas within {cityData.name}.
              In addition to our local focus, we also provide seamless
              inter-state patient transfers to and from regions like{" "}
              <Link
                href="/ambulance-service-in-delhi-ncr"
                className="text-blue-600 underline font-semibold"
              >
                Delhi NCR
              </Link>
              ,{" "}
              <Link
                href="/ambulance-service-in-uttar-pradesh"
                className="text-blue-600 underline font-semibold"
              >
                Uttar Pradesh
              </Link>
              , and{" "}
              <Link
                href="/ambulance-service-in-bihar"
                className="text-blue-600 underline font-semibold"
              >
                Bihar
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <HowToBookAmbulance cityData={cityData} />
      <AreasWeServe cityData={cityData} />
      <ServiceAreas />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
