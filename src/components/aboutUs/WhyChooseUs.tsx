import {
  Clock,
  Heart,
  Shield,
  MapPin,
  Phone,
  Banknote,
  Stethoscope,
  Truck,
  Users,
  ArrowRight,
  Star,
  CheckCircle2,
  Zap,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Number1 } from "@/constants/PhoneNumbers";
import SubHeading from "../smallComponents/SubHeading";
import { citiesCovered, clientsServed, fleetSize, hospitalPartners } from "@/constants/CompanyInfo";

const reasons = [
  {
    icon: Clock,
    title: "15-Minute Response Time",
    description:
      "Our GPS-tracked ambulances reach you within 15 minutes in Delhi NCR. Every second counts in an emergency — we never keep you waiting.",
    highlight: "Fastest in Delhi NCR",
  },
  {
    icon: Stethoscope,
    title: "ICU-Level Care On Wheels",
    description:
      "Every ambulance is equipped with ventilators, cardiac monitors, defibrillators, and infusion pumps — delivering hospital-grade care during transit.",
    highlight: "Advanced Life Support",
  },
  {
    icon: Users,
    title: "Trained Paramedic Crew",
    description:
      "Our 39+ certified EMTs and paramedics are trained in ACLS, PALS, and trauma management — ensuring expert medical attention from pickup to hospital.",
    highlight: "ACLS & PALS Certified",
  },
  {
    icon: Banknote,
    title: "Transparent & Affordable Pricing",
    description:
      "No hidden charges, no surge pricing. We believe emergency care should be accessible to every family — get upfront quotes before booking.",
    highlight: "No Hidden Charges",
  },
  {
    icon: MapPin,
    title: `${citiesCovered}+ Cities, Pan-India Network`,
    description:
      `From local transfers in Delhi to long-distance outstation ambulances across ${citiesCovered}+ cities — we have the infrastructure to move patients anywhere in India.",
    highlight: "Nationwide Coverage`,
  },
  {
    icon: HeartHandshake,
    title: "Compassionate & Dignified Service",
    description:
      `Whether it's a critical patient transfer or a dead body transport — we handle every case with utmost respect, empathy, and professionalism.",
    highlight: "Trusted by ${clientsServed.toLocaleString()}+ Families`,
  },
];

const comparisonPoints = [
  { text: "24/7/365 availability — no off days", included: true },
  { text: "Government registered & compliant", included: true },
  { text: "Real-time GPS tracking shared with family", included: true },
  { text: "Dedicated dispatch coordinator per call", included: true },
  { text: "Free follow-up & hospital coordination", included: true },
  { text: "Multi-language support (Hindi, English, Urdu)", included: true },
];

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="Why Choose Maa Ambulance" />

          <h2
            id="why-choose-heading"
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why <span className="text-red-600">62,000+ Families</span> Trust Us
            in Their Most Critical Moments
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            When every second matters, you need an ambulance service that's
            fast, equipped, and genuinely cares. Here's what sets Maa Ambulance
            apart from the rest.
          </p>
        </div>

        {/* ── Reasons Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Top row: icon + highlight badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 border border-red-100 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <reason.icon className="w-5.5 h-5.5 text-red-600 group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {reason.highlight}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                {reason.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 bg-gray-100 group-hover:bg-red-600 rounded-full transition-colors duration-300"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* ── Comparison + CTA Row ── */}
        <div className="mt-14 sm:mt-20 grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: What You Get — Checklist */}
          <div className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900"
                aria-hidden="true"
              >
                <BadgeCheck className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3
                  className="text-lg sm:text-xl font-extrabold text-gray-900"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  What You Get With Every Call
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Standard with all Maa Ambulance bookings
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {comparisonPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3.5"
                >
                  <CheckCircle2
                    className="w-4.5 h-4.5 text-emerald-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats strip inside card */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { number: `${fleetSize}+`, label: "Ambulance Fleet" },
                { number: `${hospitalPartners}`, label: "Hospital Partners" },
                { number: "98%", label: "Safety Rate" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-white border border-gray-200 rounded-xl py-4"
                >
                  <p
                    className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dark Emergency CTA Card */}
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] font-bold text-red-400 uppercase tracking-[0.2em] mb-3">
              Don't Wait — Call Now
            </p>

            <h3
              className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Every Minute Counts in an Emergency
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Our trained dispatchers will send the nearest available ambulance
              to your location within minutes. No paperwork, no delays — just
              call.
            </p>

            <a
              href={`tel:${Number1}`}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition-colors w-full mb-4"
              aria-label={`Emergency call ${Number1}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {Number1}
            </a>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-gray-400">
                Dispatchers online now
              </span>
            </div>

            {/* Trust indicators */}
            <div className="border-t border-gray-800 pt-5 space-y-3">
              {[
                { icon: Shield, text: "Govt. Registered & Verified" },
                { icon: Zap, text: "15 Min Avg. Response Time" },
                { icon: Banknote, text: "Upfront Pricing — No Surprises" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-800 shrink-0"
                    aria-hidden="true"
                  >
                    <item.icon className="w-3.5 h-3.5 text-red-400" />
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Rating */}
            <div className="mt-5 pt-5 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  />
                ))}
                <span className="ml-1.5 text-sm font-bold text-white">
                  4.8
                </span>
              </div>
              <span className="text-[11px] text-gray-500">
                Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Testimonial Strip ── */}
        <div className="mt-14 sm:mt-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              What Families Say About Us
            </h3>
            
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Rajesh Kumar",
                location: "Rohini, Delhi",
                text: "They arrived in 12 minutes. The paramedic team was incredibly professional. My father was safely transferred to AIIMS. Can't thank them enough.",
                rating: 5,
                service: "ICU Ambulance",
              },
              {
                name: "Priya Sharma",
                location: "Noida, UP",
                text: "Used their dead body transport service during the most difficult time. They handled everything with dignity and respect. Very affordable too.",
                rating: 5,
                service: "Dead Body Transport",
              },
              {
                name: "Amit Verma",
                location: "Gurgaon, Haryana",
                text: "Booked a cardiac ambulance for my mother's hospital transfer. Fully equipped vehicle, trained staff, and transparent billing. Highly recommended.",
                rating: 5,
                service: "Cardiac Ambulance",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-red-200 hover:shadow-md transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex" aria-hidden="true">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                    {review.service}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                    <span
                      className="text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {review.location}
                    </p>
                  </div>
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-500 ml-auto"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Full-Width Banner ── */}
        <div className="mt-14 sm:mt-20 relative overflow-hidden bg-red-600 rounded-2xl p-8 sm:p-10">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3
                className="text-xl sm:text-2xl font-extrabold text-white leading-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Ready When You Need Us — 24/7, 365 Days
              </h3>
              <p className="text-sm text-red-100 mt-2 max-w-lg">
                From critical ICU transfers to dignified dead body transport —
                one call connects you to Delhi NCR's most trusted ambulance
                network.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${Number1}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-red-600 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-colors shadow-lg"
                aria-label={`Call now at ${Number1}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call: {Number1}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 border border-red-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;