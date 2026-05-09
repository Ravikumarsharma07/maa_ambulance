import { PlaceDetails } from "@/constants/Cities";
import { Number1 } from "@/constants/PhoneNumbers";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Clock, Shield, Heart } from "lucide-react";

const SERVICE_LIST = [
  {
    icon: Heart,
    title: "ICU & Ventilator Ambulances",
    desc: "Ventilators, cardiac monitors, defibrillators, infusion pumps — full flying ICU for critically ill patients.",
  },
  {
    icon: Shield,
    title: "Advanced Life Support (ALS)",
    desc: "For cardiac, neurological, and trauma emergencies requiring paramedic-level care during transit.",
  },
  {
    icon: Clock,
    title: "Basic Life Support (BLS)",
    desc: "Safe, comfortable transport for stable patients and non-emergency inter-hospital transfers.",
  },
  {
    icon: MapPin,
    title: "Outstation Patient Transfer",
    desc: "Long-distance critical-care transfers with medical crew continuity, oxygen, and all permits managed.",
  },
];

const REGION_LINKS = [
  { label: "Delhi", href: "/ambulance-service-in-delhi" },
  { label: "Uttar Pradesh", href: "/ambulance-service-in-uttar-pradesh" },
  { label: "Bihar", href: "/ambulance-service-in-bihar" },
  { label: "Punjab", href: "/ambulance-service-in-punjab" },
  { label: "Jharkhand", href: "/ambulance-service-in-jharkhand" },
  { label: "Chandigarh", href: "/ambulance-service-in-chandigarh" },
];

export const AboutService = ({ cityData }: { cityData: PlaceDetails }) => {
  const nearbyCities = cityData.nearByCities || [];

  return (
    <section
      className="py-16 sm:py-20 bg-[#F8F7F4]"
      aria-labelledby="city-about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            Verified 24×7 Service
          </div>
          <h1
            id="city-about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ambulance Service in {cityData.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {cityData.metaDescription ||
              `Your trusted partner for 24/7 emergency medical transport in ${cityData.name} and surrounding areas.`}
          </p>
        </div>

        {/* ── TRUST STRIP ── */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-xs sm:text-sm text-gray-500 font-medium">
          {[
            { icon: Clock, text: "10–20 Min Response" },
            { icon: Shield, text: "ACLS-Certified Crew" },
            { icon: MapPin, text: `Serving ${cityData.name} & Nearby` },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-red-500" aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>

        {/* ── INTRO PARAGRAPH ── */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
          {cityData.introParagraph ? (
            <p>{cityData.introParagraph}</p>
          ) : (
            <p>
              Looking for a fast and reliable{" "}
              <strong className="text-gray-800">
                ambulance service in {cityData.name}
              </strong>
              ? Maa Ambulance Services provides comprehensive 24×7 emergency
              and non-emergency medical transport across {cityData.name} and its
              surrounding areas. Our modern, fully-equipped fleet is
              strategically positioned to guarantee the quickest response time
              during any medical emergency — staffed by ACLS and PALS certified
              paramedics.
            </p>
          )}
        </div>

        {/* ── EMERGENCY NUMBER CARD ── */}
        <div
          className="bg-gray-900 rounded-2xl overflow-hidden mb-8"
          role="complementary"
          aria-label={`Emergency ambulance number in ${cityData.name}`}
        >
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Emergency Ambulance Number · {cityData.name}
              </p>
              <h2
                className="text-lg sm:text-xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need an ambulance in {cityData.name}?
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Answered in under 3 rings — dispatchers online 24/7, no hold
                music.
              </p>
            </div>
            <a
              href={`tel:${Number1}`}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto justify-center"
              aria-label={`Call Maa Ambulance emergency line in ${cityData.name} at ${Number1}`}
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              {Number1}
            </a>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="mb-8">
          <h2
            className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Ambulance Services in {cityData.name}
          </h2>
          <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed mb-6">
            We provide a full range of ambulance options to meet every medical
            need in {cityData.name} — ensuring patient safety, comfort, and
            clinical continuity from pickup to handover at the destination
            hospital.
          </p>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            role="list"
            aria-label={`Ambulance services available in ${cityData.name}`}
          >
            {(cityData.servicesOffered?.length
              ? cityData.servicesOffered.map((s, i) => ({
                  icon: SERVICE_LIST[i % SERVICE_LIST.length].icon,
                  title: s.name,
                  desc: s.description,
                }))
              : SERVICE_LIST
            ).map((item) => (
              <li
                key={item.title}
                role="listitem"
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 sm:p-5"
              >
                <span
                  className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <item.icon className="w-4 h-4 text-red-600" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COVERAGE PARA + NEARBY CITIES ── */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6">
          <h2
            className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Coverage Area & Inter-State Transfers
          </h2>
          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-5">
            We serve all major private and government hospitals, specialty
            clinics, and residential areas within{" "}
            <strong className="text-gray-800">{cityData.name}</strong>. We also
            provide seamless inter-city and inter-state patient transfers across
            India, with full medical crew continuity, oxygen supply, and all
            documentation handled on your behalf.
          </p>

          {/* Nearby city chips */}
          {nearbyCities.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                Also serving nearby areas
              </p>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((nearCity) => (
                  <div
                    key={nearCity}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1.5 rounded-full transition-colors"
                    title={`Ambulance service in ${nearCity}`}
                    aria-label={`Ambulance service in ${nearCity}`}
                  >
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {nearCity}
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Region links */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
              Inter-state transfers from {cityData.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {REGION_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  title={`Ambulance service in ${label}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-red-700 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 px-3 py-1.5 rounded-full transition-colors"
                  aria-label={`Ambulance service in ${label}`}
                >
                  {label}
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-2">
          <a
            href={`tel:${Number1}`}
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all w-full sm:w-auto"
            aria-label={`Book ambulance in ${cityData.name} — call ${Number1}`}
          >
            <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
            Book Ambulance in {cityData.name}
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
            aria-label="View all ambulance services"
          >
            View all services
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
};