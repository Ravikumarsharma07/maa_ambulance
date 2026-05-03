import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import cities, { City } from "@/constants/Cities";
import ServiceAreas from "@/components/ServiceAreas";
import FloatingCallBtn from "@/components/FloatingCallBtn";
import Hero from "@/components/City_specific/Hero";
import HowToBookAmbulance from "@/components/City_specific/HowToBookAmbulance";
import AreasWeServe from "@/components/City_specific/AreasWeServe";
import FAQs from "@/components/City_specific/FAQs";
import WhyChooseUs from "@/components/City_specific/WhyChooseUs";
import ServicesOffered from "@/components/City_specific/ServicesOffered";
import HospitalsWeServe from "@/components/City_specific/HospitalsWeServe";
import OutOfStation from "@/components/City_specific/OutOfStation";
import { Number1 } from "@/constants/PhoneNumbers";
import { AboutService } from "@/components/City_specific/AboutService";
import HeroVariantTwo from "@/components/City_specific/Hero-2";
import PartnersSection from "@/components/PartnersSection";

const findCity = (cities: City[], paramCity: string) => {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].places.find(
      (place) => place.name.toLowerCase() === paramCity.toLowerCase()
    );
    if (city) {
      return city;
    }
  }
};

// Define a constant for your site's base URL

const SITE_URL = "https://maambulanceservice.com/";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const citySlug = (await params).city;
  const cityData = findCity(cities, citySlug.split("-").splice(3).join(" ")); // A more robust lookup by the slug itself

  // --- Fallback for Not Found Pages ---
  if (!cityData) {
    return {
      title: "Ambulance Service Not Found | Maa Ambulance Services",
      description:
        "We provide 24/7 ambulance services across major cities. Please check our locations page to find service in your area.",
    };
  }
  const nearbyCities = cityData.nearByCities?.slice(0, 3) || [];
  const nerbyCityNames = nearbyCities.map((city) => city).join(", ");
  // --- Core Metadata from our Optimized Data Structure ---
  const title =`All types of emergency ambulance service in ${cityData.name} ${nerbyCityNames} state 2010`;
  const description = `All types of ambulance service [ ${Number1} ] Icu ventilator, Basic ambulance, Mobile Mortuary, Mukti rath & Monthly rental ambulance servce ${cityData.name} ${nerbyCityNames} `;
  const canonicalUrl = `${SITE_URL}/${cityData.slug}`;
  const imageUrl = `${SITE_URL}/company-logo.png`;

  return {
    // --- IMPORTANT: Set metadataBase to resolve relative image URLs ---
    metadataBase: new URL(SITE_URL),

    // --- Main SEO Tags ---
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },

    // --- Open Graph (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalUrl,
      title: title, // Use the primary optimized title
      description: description, // Use the primary optimized description
      siteName: "Maa Ambulance Services",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Best Private Ambulance Service in ${cityData.name}`,
        },
      ],
    },

    // --- Additional Important Tags ---
    robots: {
      index: true,
      follow: true,
    },

    // --- JSON-LD Schema for Rich Results (Crucial for Local Services) ---
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EmergencyService",
        name: `Maa Ambulance Service in ${cityData.name}`,
        description: description,
        url: canonicalUrl,
        telephone: Number1, // Your main contact number
        image: imageUrl,
        areaServed: {
          "@type": "City",
          name: cityData.name,
        },
        provider: {
          "@type": "Organization",
          name: "Maa Ambulance Services",
          url: SITE_URL,
        },
      }),
    },
  };
}

// Generate static paths for all cities
export function generateStaticParams() {
  const staticPaths: { city: string }[] = [];
  for (let i = 0; i < cities.length; i++) {
    cities[i].places.forEach((place) => {
      staticPaths.push({ city: place.slug });
    });
  }
  return staticPaths;
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const paramCity = await params;
  const city = paramCity.city.split("-").splice(3).join(" ");
  const cityData = findCity(cities, city);
  if (!cityData) return notFound();

  // JSON-LD Schema for city-specific page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Maa Ambulance Service - ${cityData.name}`,
    description: `24x7 Emergency ambulance services in ${cityData.name}. ICU ambulances, air ambulances, and emergency medical transport with trained staff and advanced equipment.`,
    url: `https://maabulanceservice.com/${cityData.slug}`,
    telephone: `${Number1}`,
    image: "https://maambulanceservice.com/company-logo.png", // ✅ Add logo/representative image
    priceRange: "599 INR - 10,000 INR", // ✅ Optional but helps Google display rich snippets
    sameAs: [
      "https://www.facebook.com/maaambulanceservice/",
      "https://www.instagram.com/maaambulanceservices/",
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
      {/* <Hero cityData={cityData} /> */}
      <HeroVariantTwo cityData={cityData} />
      <AboutService cityData={cityData} /> {/* City-specific content section */} 
      <ServicesSection /> {/* types of ambulance services */}
      <AreasWeServe cityData={cityData} /> {/* cities we serve in that specific state of India */}

      <HowToBookAmbulance cityData={cityData} /> 
      {/* <WhyChooseUs whyUs={cityData.whyChooseUs} city={cityData.name} /> */}
      <AboutSection /> {/* general about section of company */}
      <HospitalsWeServe
        hospitals={cityData.hospitalsServed}
        city={cityData.name}
      />
      <PartnersSection />
      {/* <ServicesOffered services={cityData.servicesOffered} /> */}
      <OutOfStation city={cityData.name} />
      <FAQs faqs={cityData.faqs} city={cityData.name} />
      <ServiceAreas />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
