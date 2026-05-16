import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Number1 } from "@/constants/PhoneNumbers";

// ==============================
// Site Configuration
// ==============================
const SITE_NAME = "Maa Ambulance Services";
const SITE_URL = "https://www.maambulanceservice.com";
const SITE_LOGO = `${SITE_URL}/company-logo.png`;
const GOOGLE_ANALYTICS_ID = "G-FTGK5SNL61";

const COMPANY_ADDRESS = {
  streetAddress: "Sector-2, Rohini, Delhi 110085",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110085",
  addressCountry: "IN",
};

// ==============================
// Fonts
// ==============================
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ==============================
// SEO Metadata
// ==============================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | 24/7 Emergency Ambulance Services in Pan India`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Book 24/7 emergency ambulance services in Delhi NCR. ICU ambulance, ventilator ambulance, oxygen ambulance, and patient transport with trained paramedics.",

  keywords: [
    "ambulance service",
    "ambulance service in Delhi",
    "ICU ambulance",
    "oxygen ambulance",
    "ventilator ambulance",
    "emergency ambulance",
    "24/7 ambulance service",
    "patient transport ambulance",
    "ambulance near me",
    "Delhi NCR ambulance service",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: `${SITE_NAME} | 24/7 Emergency Ambulance Services`,
    description:
      "Fast and reliable ambulance services in Delhi NCR with ICU, oxygen, ventilator, and emergency support available 24/7.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",

    images: [
      {
        url: SITE_LOGO,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Emergency Ambulance Services`,
    description:
      "24/7 ambulance services with ICU, oxygen, and ventilator support in Pan India.",
    images: [SITE_LOGO],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ==============================
// Root Layout
// ==============================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",

    name: SITE_NAME,

    slogan: "Your Trusted 24/7 Ambulance Partner",

    description:
      "Maa Ambulance Services provides immediate emergency medical transportation across Delhi NCR with ICU, oxygen, ventilator, and patient transfer ambulance services.",

    image: SITE_LOGO,

    url: SITE_URL,

    telephone: Number1,

    priceRange: "₹499 - ₹10,000",

    address: {
      "@type": "PostalAddress",
      ...COMPANY_ADDRESS,
    },

    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
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
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
