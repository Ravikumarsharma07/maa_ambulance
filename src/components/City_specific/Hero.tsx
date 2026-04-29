"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Heart, 
  Activity,
  Shield
} from "lucide-react";
import { PlaceDetails } from "@/constants/Cities";
import { Number1 } from "@/constants/PhoneNumbers"; // Dynamically importing phone number

// Quick trust stats for the red banner
const stats = [
  { icon: Heart, number: "24/7", text: "Emergency Care" },
  { icon: Clock, number: "15 Min", text: "Avg. Arrival" },
  { icon: Activity, number: "100%", text: "ICU Equipped" },
  { icon: Shield, number: "Govt.", text: "Registered" },
];

const Hero = ({ cityData }: { cityData: PlaceDetails }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper to replace any backend placeholder with your dynamic number
  const formatText = (text?: string) => {
    if (!text) return "";
    return text.replace(/\$\{phoneNumber\}/g, Number1);
  };

  return (
    <section className="pt-28 mt-7 sm:mt-10 pb-12 sm:pt-32 sm:pb-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Breadcrumb for SEO and Accessibility --- */}
        <nav className="flex flex-wrap items-center text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-1 sm:mx-2 text-gray-400" />
          <Link href="/available-areas" className="hover:text-red-600 transition-colors">
            Locations
          </Link>
          <ChevronRight className="w-4 h-4 mx-1 sm:mx-2 text-gray-400" />
          <span className="text-gray-900 font-semibold">{cityData.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ══════════════════════════════════════
              LEFT COLUMN — SEO CONTENT & CTA
          ══════════════════════════════════════ */}
          <div className={`${isMounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-1000`}>
            
            {/* Dynamic SEO Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {cityData.pageHeadline || `Fast & Reliable Ambulance Service in ${cityData.name}`}
            </h1>
            
            {/* Subheadline with dynamic number */}
            <h2 className="text-lg sm:text-xl text-red-600 font-bold mb-5">
              {formatText(cityData.subHeadline) || `24/7 Emergency Ambulance Number in ${cityData.name}: ${Number1}`}
            </h2>
            
            {/* SEO Intro Paragraph (Massive value for local search ranking) */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8">
              {cityData.introParagraph || `Maa Ambulance Service provides prompt and professional medical transport in and around ${cityData.name}. Our dedicated fleet of ICU, Cardiac, and Basic Life Support ambulances ensures safe transit for patients during critical times.`}
            </p>

            {/* Dark Emergency CTA Card (Copied from your About section style) */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-900/20">
              <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.2em] mb-3">
                Emergency Line · Available 24/7 in {cityData.name}
              </p>
              <h3 
                className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need Immediate Help?
              </h3>
              <a
                href={`tel:${Number1}`}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition-all w-full shadow-lg shadow-red-600/30 hover:-translate-y-0.5"
                aria-label={`Call emergency ambulance at ${Number1}`}
              >
                <Phone className="w-6 h-6 animate-pulse" aria-hidden="true" />
                Call Now: {Number1}
              </a>
              <div className="flex items-center justify-center gap-2 mt-5">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Nearest ambulance dispatchers online
                </span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT COLUMN — IMAGES, STATS & TRUST
          ══════════════════════════════════════ */}
          <div className={`${isMounted ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"} transition-all duration-1000 delay-200`}>
            
            {/* Main Image with Gradient & Badges */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/hero-section/ambulance-2.png" // Replace with your best localized or fleet image
                alt={`ICU Ambulance service ready for dispatch in ${cityData.name}`}
                width={640}
                height={420}
                className="w-full h-[280px] sm:h-[360px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent" aria-hidden="true" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-700/50">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Serving {cityData.name}
                </span>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                  <Clock className="w-3.5 h-3.5" />
                  15 Min Response
                </span>
              </div>
            </div>

            {/* Red Stats Bar */}
            <div className="mt-6 bg-red-600 rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-lg shadow-red-600/20">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p 
                    className="text-xl sm:text-2xl font-extrabold text-white leading-none"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-[11px] text-red-100 font-medium mt-1">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Dynamic 'Why Choose Us' Localized Highlights */}
            {cityData.whyChooseUs && cityData.whyChooseUs.length > 0 && (
              <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  Why Choose Us in {cityData.name}
                </h3>
                <div className="space-y-4">
                  {cityData.whyChooseUs.slice(0, 4).map((reason, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                      <span className="text-sm text-gray-700 font-medium leading-snug">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;