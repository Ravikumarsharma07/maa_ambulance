import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import cities, { City } from "@/constants/Cities";
import ServiceAreas from "@/components/ServiceAreas";
import FloatingCallBtn from "@/components/FloatingCallBtn";
import HeroVariantTwo from "@/components/City_specific/Hero-2";
import HowToBookAmbulance from "@/components/City_specific/HowToBookAmbulance";
import AreasWeServe from "@/components/City_specific/AreasWeServe";
import FAQs from "@/components/City_specific/FAQs";
import HospitalsWeServe from "@/components/City_specific/HospitalsWeServe";
import OutOfStation from "@/components/City_specific/OutOfStation";
import { Number1 } from "@/constants/PhoneNumbers";
import { AboutService } from "@/components/City_specific/AboutService";
import PartnersSection from "@/components/PartnersSection";

// --- Corrected Base URL (No trailing slash) ---
const SITE_URL = "https://www.maambulanceservice.com";

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

const findState = (cities: City[], paramCity: string) => {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].places.find(
      (place) => place.name.toLowerCase() === paramCity.toLowerCase()
    );
    if (city) {
      return cities[i].name;
    }
  }
};

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const citySlug = (await params).city;
  const parsedCityName = citySlug.split("-").slice(3).join(" ");
  const cityData = findCity(cities, parsedCityName);

  // --- Fallback for Not Found Pages ---
  if (!cityData) {
    return {
      title: "Ambulance Service Not Found | Maa Ambulance Services",
      description:
        "We provide 24/7 ambulance services across major cities. Please check our locations page to find service in your area.",
    };
  }
  const state = findState(cities, parsedCityName) || "";
  const displayState = state == cityData.name ? ", India" : `, ${state}`;
  // --- Optimized SEO Tags (Hyper-Local for maximum CTR) ---
  const title = `Ambulance Service in ${cityData.name}${displayState} – ICU, 24/7 Emergency & Private | Maa Ambulance`;
  // Using .slice(4) assumes your number string starts with "+91-" or similar. Adjust if needed.
  const displayPhone = Number1.length > 10 ? Number1.slice(4) : Number1; 
  const description = `Need an ambulance in ${cityData.name}? Maa Ambulance Service provides 24/7 ICU, BLS & private ambulance. Trusted since 2010. Call ${displayPhone} – dispatched in 15 min.`;
  
  const canonicalUrl = `${SITE_URL}/${citySlug}`;
  const imageUrl = `${SITE_URL}/company-logo.png`;

  return {
    metadataBase: new URL(SITE_URL),
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalUrl,
      title: title,
      description: description,
      siteName: "Maa Ambulance Services",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Maa Ambulance Service in ${cityData.name}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

// 2. MAIN PAGE COMPONENT
export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const paramCity = await params;
  const citySlug = paramCity.city;
  const parsedCityName = citySlug.split("-").slice(3).join(" ");
  const cityData = findCity(cities, parsedCityName);
  
  if (!cityData) return notFound();

  // 3. CONSOLIDATED JSON-LD SCHEMA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "MedicalBusiness"],
    name: `Maa Ambulance Service - ${cityData.name}`,
    description: `24/7 ICU Ambulance, Mortuary, Mukti Rath & Monthly Rental in ${cityData.name}.`,
    url: `${SITE_URL}/${citySlug}`,
    telephone: Number1,
    image: `${SITE_URL}/company-logo.png`,
    priceRange: "₹599 - ₹10,000",
    sameAs: [
      "https://www.facebook.com/maaambulanceservice/",
      "https://www.instagram.com/maaambulanceservices/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: cityData.name,
    },
    availableService: [
      {
        "@type": "MedicalService",
        name: `Emergency ICU Ambulance in ${cityData.name}`,
      },
      {
        "@type": "MedicalService",
        name: `Mortuary & Mukti Rath in ${cityData.name}`,
      },
      {
        "@type": "MedicalService",
        name: `Air Ambulance in ${cityData.name}`,
      }
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
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
      <HeroVariantTwo cityData={cityData} />
      <AboutService cityData={cityData} />
      <ServicesSection />
      <AreasWeServe cityData={cityData} />
      <HowToBookAmbulance cityData={cityData} />
      <HospitalsWeServe
        hospitals={cityData.hospitalsServed}
        city={cityData.name}
      />
      <PartnersSection />
      <OutOfStation city={cityData.name} />
      <FAQs faqs={cityData.faqs} city={cityData.name} />
      <ContactSection />
      <Footer />
    </main>
  );
}
