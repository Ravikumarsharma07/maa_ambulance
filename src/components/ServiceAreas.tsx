import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";
import cities from "@/constants/Cities";

const Number3 = "+91-7683095277";

const ServiceAreas = () => {
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="py-16 bg-[#F8F7F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="Ambulance Service Locations Across India" />
          <p
            id="service-areas-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Maa Ambulance Services provides 24×7 emergency ambulance services in
            major cities across India — including Delhi, Mumbai, Bangalore,
            Hyderabad, Chennai, Pune, and hundreds more. Select your city for
            local contact details and service information.
          </p>
        </div>

        {/* ── CITY GRID ── */}
        <nav aria-label="Ambulance service cities in India">
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            role="list"
          >
            {cities.map((city) => (
              <li key={city.slug} role="listitem">
                <Link
                  href={`/${city.slug}`}
                  className="group flex items-center justify-between gap-2 bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50 rounded-xl px-4 py-3.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  aria-label={`Ambulance service in ${city.name}`}
                  title={`24/7 Ambulance Service in ${city.name}`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin
                      className="w-3.5 h-3.5 text-red-500 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors truncate leading-snug">
                      {city.name}
                    </span>
                  </span>
                  <ChevronRight
                    className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── SEO TEXT BLOCK ── */}
        <div className="mt-12 sm:mt-16 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8">
          <h2
            className="text-base sm:text-lg font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pan-India Emergency Ambulance Coverage
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Maa Ambulance Services operates one of India's most reliable 24-hour
            ambulance networks. Our fleet includes{" "}
            <strong className="text-gray-700">
              ICU ambulances, ALS/BLS ambulances, neonatal ambulances, air
              ambulances, and train ambulances
            </strong>{" "}
            — deployed across Delhi NCR, Gurugram, Noida, Faridabad, Ghaziabad,
            and all major metros. Every unit is staffed by ACLS-certified
            paramedics and equipped with life-support technology. Whether you
            need emergency patient transport, inter-hospital transfer, or
            long-distance critical care — we respond within minutes, any time of
            day or night.
          </p>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-5 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8">
          <div className="text-center sm:text-left flex-1">
            <h3
              className="text-lg sm:text-xl font-extrabold text-gray-900 mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Don't see your city?
            </h3>
            <p className="text-sm text-gray-500">
              We're expanding rapidly. Call us — we'll find the nearest unit to
              you anywhere in India.
            </p>
          </div>
          <a
            href={`tel:${Number3}`}
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
            aria-label={`Call Maa Ambulance at ${Number3} to check service availability in your city`}
          >
            <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
            {Number3}
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;