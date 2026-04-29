import {
  Award,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Shield,
  Star,
  Phone,
  CheckCircle2,
  Ambulance,
  Stethoscope,
  Building2,
  CircleDot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Number1 } from "@/constants/PhoneNumbers";
import SubHeading from "../smallComponents/SubHeading";

const stats = [
  { icon: Users, number: "62,000+", text: "Families Served" },
  { icon: Clock, number: "15 Min", text: "Avg. Response Time" },
  { icon: MapPin, number: "53+", text: "Cities Covered" },
  { icon: Award, number: "4+", text: "Years Experience" },
];

const quickFeatures = [
  { icon: Clock, text: "24/7 Dispatch" },
  { icon: Heart, text: "ICU-Level Care" },
  { icon: Shield, text: "Safe Transit" },
  { icon: MapPin, text: "Pan-India Reach" },
];

const highlights = [
  {
    icon: Stethoscope,
    title: "ICU & Ventilator Ambulances",
    detail: "Fully equipped with life-support and ventilator systems",
  },
  {
    icon: Shield,
    title: "Dead Body & Coffin Box Transport",
    detail: "Dignified and respectful mortuary transport services",
  },
  {
    icon: Ambulance,
    title: "Cardiac & Trauma Ambulances",
    detail: "Advanced cardiac monitoring and defibrillators on-board",
  },
  {
    icon: Building2,
    title: "Hospital-to-Hospital Transfer",
    detail: "Seamless patient shifting with 31+ hospital partners",
  },
];

const certifications = [
  { icon: Shield, text: "Government Registered Operations" },
  { icon: CheckCircle2, text: "Trained Paramedic & EMT Crew" },
  { icon: CircleDot, text: "GPS-Tracked Ambulance Fleet" },
];

const AboutHeroSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 sm:py-16 mt-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="About Maa Ambulance Service" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ══════════════════════════════════════
              LEFT COLUMN — IMAGE + FEATURES
          ══════════════════════════════════════ */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero-section/ambulance-2.png"
                alt="Maa Ambulance Service fleet in Delhi — ICU, Ventilator and Dead Body ambulances"
                width={640}
                height={420}
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              {/* Bottom labels — matching your screenshot style */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
                  Nationwide Coverage
                </span>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  15–30 Min Response
                </span>
              </div>
            </div>

            {/* Quick Feature Pills — 4 icons in a row like your screenshot */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl py-4 px-3 hover:border-red-200 transition-colors"
                >
                  <feat.icon
                    className="w-5 h-5 text-red-600 mb-2"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-gray-700">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Highlights — Clean list */}
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Our Core Services
              </h3>
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 shrink-0"
                    aria-hidden="true"
                  >
                    <item.icon className="w-4.5 h-4.5 text-red-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar — Red bg matching screenshot */}
            <div className="mt-8 bg-red-600 rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-xl sm:text-2xl font-extrabold text-white leading-none"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-[11px] text-red-100 font-medium mt-1">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Row — matching screenshot's bottom icons */}
            <div className="mt-6 flex flex-wrap gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <span
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-50 border border-red-100"
                    aria-hidden="true"
                  >
                    <cert.icon className="w-3.5 h-3.5 text-red-600" />
                  </span>
                  <span className="font-medium">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT COLUMN — CONTENT + DARK CTA
          ══════════════════════════════════════ */}
          <div>
            {/* Emergency Card — Dark, matching your screenshot's sidebar */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8">
              <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.2em] mb-3">
                Emergency Line · Available 24/7
              </p>
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Need Help Right Now?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Our dispatch coordinators are standing by. One call mobilizes
                the nearest ambulance to your location immediately.
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

              {/* Mini stats inside dark card */}
              <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p
                    className="text-2xl font-extrabold text-white"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    46+
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Daily Shiftings
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-2xl font-extrabold text-white"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    98%
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    Safety Rate
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 text-center mt-4">
                Serving 53+ Cities · All Major Hospitals
              </p>
            </div>

            {/* About Text Content */}
            <div>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Trusted Ambulance Service in India —{" "}
                <span className="text-red-600">Since 2020</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-800">
                    Maa Ambulance Service
                  </strong>{" "}
                  is a government-registered provider of emergency and
                  non-emergency medical transport headquartered in{" "}
                  <strong className="text-gray-800">Rohini, New Delhi</strong>.
                  Founded by{" "}
                  <strong className="text-gray-800">Mr. Mahesh Yadav</strong>,
                  we operate a fleet of{" "}
                  <strong className="text-gray-800">
                    39 fully-equipped ambulances
                  </strong>{" "}
                  staffed by trained paramedics and EMTs, serving{" "}
                  <strong className="text-gray-800">53+ cities</strong> across
                  India.
                </p>
                <p>
                  Whether you need an{" "}
                  <strong className="text-gray-800">
                    ICU Ventilator Ambulance
                  </strong>
                  , <strong className="text-gray-800">Cardiac Ambulance</strong>
                  ,{" "}
                  <strong className="text-gray-800">
                    Mobile Mortuary
                  </strong>
                  , or a{" "}
                  <strong className="text-gray-800">Private Ambulance</strong>{" "}
                  for patient shifting — we deliver compassionate, affordable,
                  and prompt care every time.
                </p>
              </div>
            </div>

            {/* Related Services — matching your screenshot sidebar */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Related Services
                </h3>
                <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                  4 available
                </span>
              </div>
              <div className="space-y-2">
                {[
                  "ICU Ventilator Ambulance",
                  "Dead Body Ambulance Service",
                  "Cardiac Ambulance Service",
                  "Air Ambulance Service",
                ].map((service, i) => (
                  <Link
                    key={i}
                    href="/services"
                    className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3.5 hover:border-red-200 hover:bg-red-50/30 transition-all group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {service}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certifications & Trust — matching screenshot */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Certifications & Trust
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Shield,
                    text: "Government Registered Operations",
                    color: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-100",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Trained Paramedic & ACLS Certified Crew",
                    color: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-100",
                  },
                  {
                    icon: CircleDot,
                    text: "GPS-Tracked & Real-time Monitored Fleet",
                    color: "text-gray-700",
                    bg: "bg-gray-100",
                    border: "border-gray-200",
                  },
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-lg ${cert.bg} border ${cert.border} shrink-0`}
                      aria-hidden="true"
                    >
                      <cert.icon className={`w-4 h-4 ${cert.color}`} />
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {cert.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors"
                aria-label="Learn more about Maa Ambulance"
              >
                Learn More About Us
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        {/* ── Founder Strip ── */}
        <div className="mt-14 sm:mt-20 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
              <span
                className="text-lg font-bold text-white"
                aria-hidden="true"
              >
                MY
              </span>
            </div>
            <div className="flex-1">
              <blockquote className="text-sm sm:text-[15px] text-gray-600 leading-relaxed italic">
                "We believe every life deserves fast, reliable, and caring
                emergency transport — at a price every family can afford. Our
                mission is to make quality medical transport accessible to every
                Indian household."
              </blockquote>
              <div className="mt-3 flex items-center gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Mahesh Yadav
                  </p>
                  <p className="text-xs text-gray-500">
                    Founder &amp; Director, Maa Ambulance Service
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-0.5 ml-auto" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-gray-700">
                    4.8
                  </span>
                  <span className="text-xs text-gray-400 ml-1">
                    Google Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;