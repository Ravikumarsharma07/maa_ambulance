import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from 'next/font/google';
import Script from "next/script";
import { Number1 } from "@/constants/PhoneNumbers";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible while the font loads
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maa Ambulance Services | Best Emergency Ambulance Services in India",
  description:
    "Book 24/7 emergency, ICU, and air ambulance services across India. Fast response with trained paramedics.",
  openGraph: {
    title: "Maa Ambulance Services | Best Emergency Ambulance Services in India",
    description:
      "Reliable ambulance booking in all over India. ICU, ventilator, and air ambulance available 24/7.",
    url: "https://maambulanceservice.com/",
    type: "website",
    images: [
      {
        url: "https://maambulanceservice.com/company-logo.png",
        width: 1200,
        height: 630,
        alt: "Maa Ambulance Services",
      },
    ],
  },
  alternates: {
    canonical: "https://maambulanceservice.com/ambulance-service-in-delhi-ncr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Jyoti Ambulance Services",
    slogan: "Your Trusted 24/7 Ambulance Partner in India",
    description:
      "Jyoti Ambulance provides immediate 24/7 emergency medical transport services across Delhi, Gurgaon, Noida, Bihar, Uttar Pradesh, Uttarakhand, and NCR. ICU, Ventilator, Cardiac, and Air Ambulance transfers with trained paramedics.",
    image: "https://jyotiambulance.in/jyoti-ambulance-logo-2.png",
    url: "https://maambulanceservice.com/",
    telephone: `${Number1}`,
    priceRange: "499 INR - 10,000 INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector-2, Rohini, Delhi 110085",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110085",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Bihar" },
      { "@type": "City", name: "Uttar Pradesh" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "AdministrativeArea", name: "National Capital Region" },
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
  <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FTGK5SNL61"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FTGK5SNL61');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
