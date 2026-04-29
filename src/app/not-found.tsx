"use client";

import FloatingCallBtn from "@/components/FloatingCallBtn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Number1 } from "@/constants/PhoneNumbers";
import { Phone, ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="bg-[#F8F7F4] mt-10 min-h-screen flex flex-col">
      <Header />
      <FloatingCallBtn />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-28 sm:pt-36 pb-16 text-center">

        {/* ── STATUS BADGE ── */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
          Page Not Found
        </div>

        {/* ── HEADING ── */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Coming Soon
        </h1>

        {/* ── SUBTEXT ── */}
        <p className="text-sm sm:text-base text-gray-500 max-w-md leading-relaxed mb-8">
          We're building something important here. Our advanced ambulance
          service features are arriving soon — designed to help you faster in
          critical moments.
        </p>

        {/* ── NAVIGATION ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 px-5 py-3 rounded-2xl transition-all active:scale-95"
            aria-label="Go back to the previous page"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Go Back
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-5 py-3 rounded-2xl transition-all active:scale-95"
            aria-label="Go to Maa Ambulance homepage"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>

        {/* ── EMERGENCY CARD ── */}
        <div className="w-full max-w-sm bg-gray-900 rounded-3xl overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-7 flex flex-col items-center text-center gap-4">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400">
              Emergency Line · 24/7
            </p>
            <p
              className="text-lg sm:text-xl font-extrabold text-white leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Need urgent help right now?
            </p>
            <p className="text-xs text-gray-400">
              Our dispatch team answers in under 3 rings — no hold music, no
              queues.
            </p>
            <a
              href={`tel:${Number1}`}
              className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all"
              aria-label={`Call Maa Ambulance emergency line at ${Number1}`}
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              {Number1}
            </a>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-gray-500">Dispatchers online now</span>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}