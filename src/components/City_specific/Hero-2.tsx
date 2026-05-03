"use client";

import { PlaceDetails } from "@/constants/Cities";
import { Number1 } from "@/constants/PhoneNumbers";
import {
  Ambulance,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
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

/* ── static config ──────────────────────────────────────────────── */
const quickFeatures = [
  { icon: Clock,    text: "24/7 Dispatch" },
  { icon: Heart,    text: "ICU-Level Care" },
  { icon: Shield,   text: "Safe Transit" },
  { icon: MapPin,   text: "Pan-India Reach" },
];

const globalStats = [
  { number: "62,000+", label: "Families Served" },
  { number: "15 Min",  label: "Avg. Response" },
  { number: "100+",     label: "Cities Covered" },
  { number: "4+",      label: "Years Experience" },
];

/* ── component ──────────────────────────────────────────────────── */
const Hero = ({ cityData }: { cityData: PlaceDetails }) => {
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
      className="relative bg-gray-950 overflow-hidden pt-24 pb-14 mt-10 sm:mt-16 sm:pb-20"
    >
      {/* ── background ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/90 to-gray-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className={`mb-8 ${fadeUp()}`}>
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" aria-hidden="true" /></li>
            <li><Link href="/available-areas" className="hover:text-gray-300 transition-colors">Locations</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" aria-hidden="true" /></li>
            <li className="text-gray-300 font-medium">{cityData.name}</li>
          </ol>
        </nav>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ════ LEFT — headline + content ════ */}
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
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3">
              {cityData.subHeadline}
            </p>

            {/* Intro */}
            <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-3">
              {cityData.introParagraph}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={`tel:${Number1}`}
                className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-red-900/40 transition-all"
                aria-label={`Call Maa Ambulance at ${Number1}`}
              >
                <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
                Call for Emergency
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-semibold px-5 py-3.5 rounded-2xl transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Feature pills */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {quickFeatures.map((feat) => (
                <div
                  key={feat.text}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl py-4 px-3 hover:border-red-500/30 transition-colors"
                >
                  <feat.icon className="w-5 h-5 text-red-400 mb-2" aria-hidden="true" />
                  <span className="text-xs font-semibold text-gray-300">{feat.text}</span>
                </div>
              ))}
            </div> */}

            {/* Services offered chips */}
            {cityData.servicesOffered && cityData.servicesOffered.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Services in {cityData.name}
                </p>
                <div className="flex flex-col gap-2">
                  {cityData.servicesOffered.map((svc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3"
                    >
                      <span
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-600/10 border border-red-500/20 shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <Ambulance className="w-3.5 h-3.5 text-red-500" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-gray-200">{svc.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby cities */}
            {/* {cityData.nearByCities && cityData.nearByCities.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Also serving nearby
                </p>
                <div className="flex flex-wrap gap-2">
                  {cityData.nearByCities.map((city, i) => (
                    <Link
                      key={i}
                      href={`/ambulance-service-in-${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-red-500/20 px-3 py-1.5 rounded-full transition-all"
                      aria-label={`Ambulance service in ${city}`}
                    >
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          {/* ════ RIGHT — image + emergency card ════ */}
          <div className={`flex flex-col gap-5 ${fadeUp("delay-150")}`}>

            {/* ── Ambulance image card ── */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-gray-900 h-[280px] sm:h-[340px] lg:h-[400px]">
              <Image
                src="/hero-section/ambulance-4.png"
                alt={`Maa Ambulance Service ICU ambulance ready for emergency dispatch in ${cityData.name}`}
                fill
                priority
                className="object-cover opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent"
                aria-hidden="true"
              />

              {/* Overlay pills */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-2 rounded-full">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Fleet Active · {cityData.name}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  ICU Equipped
                </span>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-2 text-center">
                <p
                  className="text-lg font-extrabold text-white leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  15 Min
                </p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Avg Response</p>
              </div>
            </div>

            {/* ── Emergency CTA card ── */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 sm:p-6">
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-2">
                Emergency Line · 24/7
              </p>
              <h3
                className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need Ambulance in {cityData.name}?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-5">
                Nearest ICU ambulance dispatched immediately. Coordinators know
                every route in {cityData.name} and surrounding areas.
              </p>

              <a
                href={`tel:${Number1}`}
                className="flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-base sm:text-lg px-6 py-3.5 rounded-2xl transition-all w-full"
                aria-label={`Call Maa Ambulance at ${Number1}`}
              >
                <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
                {Number1}
              </a>

              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-gray-400">Dispatchers online now</span>
              </div>

              {/* Mini stats */}
              <div className="mt-5 pt-5 border-t border-gray-800 grid grid-cols-3 gap-3 text-center">
                {[
                  { number: "46+",  label: "Daily Shifts" },
                  { number: "98%",  label: "Safety Rate" },
                  { number: "39",   label: "Vehicles" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-lg font-extrabold text-white leading-none"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.number}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Global Stats Bar ── */}
        <div className={`mt-10 bg-red-600 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ${fadeUp("delay-300")}`}>
          {globalStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-xl sm:text-2xl font-extrabold text-white leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[11px] text-red-100 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Founder strip + rating ── */}
        <div
          className={`mt-5 flex flex-wrap items-center justify-between gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-4 ${fadeUp("delay-[400ms]")}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-white" aria-hidden="true">MY</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-200">Mahesh Yadav</p>
              <p className="text-xs text-gray-500">Founder &amp; Director, Maa Ambulance</p>
            </div>
          </div>

          <blockquote className="text-xs text-gray-500 italic max-w-xs hidden sm:block">
            "Every life deserves fast, reliable, and caring emergency transport —
            at a price every family can afford."
          </blockquote>

          <div className="flex items-center gap-1" aria-label="4.8 out of 5 stars on Google">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
            ))}
            <span className="ml-1.5 text-sm font-bold text-gray-200">4.8</span>
            <span className="text-xs text-gray-500 ml-1">Google Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;