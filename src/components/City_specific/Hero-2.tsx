"use client";

import { PlaceDetails } from "@/constants/Cities";
import { Number1 } from "@/constants/PhoneNumbers";
import {
  Ambulance,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

/* ── static config ─────────────────────────────────────────────── */
const quickFeatures = [
  { icon: Clock, text: "24/7 Dispatch" },
  { icon: Heart, text: "ICU-Level Care" },
  { icon: Shield, text: "Safe Transit" },
  { icon: MapPin, text: "Pan-India Reach" },
];

const globalStats = [
  { number: "62,000+", label: "Families Served" },
  { number: "15 Min", label: "Avg. Response" },
  { number: "53+", label: "Cities Covered" },
  { number: "4+", label: "Years Experience" },
];

const trustBadges = [
  { icon: Shield, text: "Government Registered" },
  { icon: CheckCircle2, text: "Certified Paramedics" },
  { icon: CircleDot, text: "GPS-Tracked Fleet" },
];

/* ── component ─────────────────────────────────────────────────── */
const HeroVariantTwo = ({ cityData }: { cityData: PlaceDetails }) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = "delay-0") =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-gray-950 overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20"
    >
      {/* ── subtle background ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/ambulance.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.07]"
        />
        {/* radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/90 to-gray-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className={`mb-8 ${fadeUp()}`}>
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                href="/available-areas"
                className="hover:text-gray-300 transition-colors"
              >
                Locations
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-gray-300 font-medium">{cityData.name}</li>
          </ol>
        </nav>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ════════════════════════════════
               LEFT — headline + content
          ════════════════════════════════ */}
          <div className={fadeUp()}>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-[0.18em]">
                Available 24/7 in {cityData.name}
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {cityData.pageHeadline ?? (
                <>
                  Fast &amp; Reliable Ambulance Service in{" "}
                  <span className="text-red-500">{cityData.name}</span>
                </>
              )}
            </h1>

            {/* Sub headline */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              {cityData.subHeadline}
            </p>

            {/* Intro */}
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {cityData.introParagraph}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={`tel:${Number1}`}
                className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-colors"
                aria-label={`Call Maa Ambulance emergency line at ${Number1}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call for Emergency Ambulance
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-semibold px-5 py-3.5 rounded-xl transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Quick feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {quickFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl py-4 px-3 hover:border-red-500/30 transition-colors"
                >
                  <feat.icon
                    className="w-5 h-5 text-red-400 mb-2"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-gray-300">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Why choose us */}
            {cityData.whyChooseUs && (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-6">
                <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Why Choose Us in {cityData.name}
                </h2>
                <ul className="space-y-2.5">
                  {cityData.whyChooseUs.map((reason, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-red-500 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby cities */}
            {cityData.nearByCities && cityData.nearByCities.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Also serving nearby
                </p>
                <div className="flex flex-wrap gap-2">
                  {cityData.nearByCities.map((city, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ════════════════════════════════
               RIGHT — cards + trust
          ════════════════════════════════ */}
          <div className={fadeUp("delay-150")}>
            {/* ── Emergency dark card ── */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-5">
              <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.2em] mb-3">
                Emergency Line · Available 24/7
              </p>
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need Ambulance in {cityData.name}?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Nearest ICU ambulance dispatched immediately. Our coordinators
                know every route in {cityData.name} and surrounding South Delhi
                areas.
              </p>

              <a
                href={`tel:${Number1}`}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-6 py-3.5 rounded-xl transition-colors w-full"
                aria-label={`Call Maa Ambulance at ${Number1}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {Number1}
              </a>

              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-gray-400">
                  Dispatchers online now
                </span>
              </div>

              {/* Mini stats row */}
              <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-3 gap-3 text-center">
                {[
                  { number: "15 Min", label: "Avg Response" },
                  { number: "46+", label: "Daily Shifts" },
                  { number: "98%", label: "Safety Rate" },
                ].map((s, i) => (
                  <div key={i}>
                    <p
                      className="text-xl font-extrabold text-white"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.number}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-600 text-center mt-4">
                Serving {cityData.name} · {cityData.nearByCities?.slice(0, 3).join(" · ")} &amp; more
              </p>
            </div>

            {/* ── Services offered ── */}
            {cityData.servicesOffered && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Services in {cityData.name}
                  </h2>
                  <span className="text-[11px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">
                    {cityData.servicesOffered.length} available
                  </span>
                </div>
                <div className="space-y-3">
                  {cityData.servicesOffered.map((svc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
                    >
                      <span
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/10 border border-red-500/20 shrink-0"
                        aria-hidden="true"
                      >
                        <Ambulance className="w-4 h-4 text-red-500" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-gray-200">
                          {svc.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Hospitals served ── */}
            {cityData.hospitalsServed && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Hospitals We Serve
                  </h2>
                  <span className="text-[11px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">
                    {cityData.hospitalsServed.length} partners
                  </span>
                </div>
                <ul className="space-y-2">
                  {cityData.hospitalsServed.map((hospital, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-gray-300"
                    >
                      <Building2
                        className="w-3.5 h-3.5 text-red-500 shrink-0"
                        aria-hidden="true"
                      />
                      {hospital}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── Trust badges ── */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:border-red-500/20 transition-colors"
                >
                  <badge.icon
                    className="w-3.5 h-3.5 text-red-500"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Global Stats Bar ── */}
        <div
          className={`mt-12 bg-red-600 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ${fadeUp(
            "delay-300"
          )}`}
        >
          {globalStats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-xl sm:text-2xl font-extrabold text-white leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[11px] text-red-100 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Google Rating Strip ── */}
        <div
          className={`mt-5 flex flex-wrap items-center justify-between gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-4 ${fadeUp(
            "delay-[400ms]"
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white" aria-hidden="true">
                MY
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-200">Mahesh Yadav</p>
              <p className="text-xs text-gray-500">
                Founder &amp; Director, Maa Ambulance Service
              </p>
            </div>
          </div>

          <blockquote className="text-xs text-gray-500 italic max-w-xs hidden sm:block">
            "Every life deserves fast, reliable, and caring emergency transport —
            at a price every family can afford."
          </blockquote>

          <div
            className="flex items-center gap-1"
            aria-label="4.8 out of 5 stars on Google"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            ))}
            <span className="ml-1.5 text-sm font-bold text-gray-200">4.8</span>
            <span className="text-xs text-gray-500 ml-1">Google Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariantTwo;