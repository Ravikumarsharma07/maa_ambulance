import cities from "@/constants/Cities";
import SubHeading from "../smallComponents/SubHeading";
import { Number1 } from "@/constants/PhoneNumbers";
import { Phone, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

const OutOfStation = ({ city }: { city: string }) => {
  // All cities except the current one, flattened from nested structure
  const otherCities = cities
    .flatMap((group) => group.name === city ? [] : group)
    // .filter((c) => c.name.toLowerCase() !== city.toLowerCase());

  return (
    <section
      className="py-16 sm:py-24 bg-[#F8F7F4]"
      aria-labelledby="outstation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading
            title={`Interstate Ambulance Service from ${city}`}
          />
          <p
            id="outstation-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Planning to transfer a patient outside {city}? Maa Ambulance
            Services provides reliable, 24×7 outstation ambulance services at
            affordable rates — with medical crew continuity, oxygen support, and
            all permits managed on your behalf.
          </p>
        </div>

        {/* ── ROUTE GRID ── */}
        {otherCities.length > 0 && (
          <nav aria-label={`Outstation ambulance routes from ${city}`}>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              role="list"
            >
              {otherCities.map((destCity) => (
                <li key={destCity.slug} role="listitem">
                  <Link
                    href={`/${destCity.slug}`}
                    className="group flex items-center justify-between gap-3 bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50 rounded-2xl px-4 sm:px-5 py-3.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    aria-label={`Outstation ambulance from ${city} to ${destCity.name}`}
                    title={`Ambulance Service from ${city} to ${destCity.name}`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <MapPin
                        className="w-3.5 h-3.5 text-red-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-red-700 transition-colors truncate leading-snug">
                        {city}{" "}
                        <span className="text-gray-300 font-normal mx-1">→</span>{" "}
                        {destCity.name}
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
        )}

        {/* ── SEO TEXT STRIP ── */}
        {otherCities.length > 0 && (
          <div
            className="mt-10 sm:mt-12 pt-8 border-t border-gray-200"
            aria-label="Text links for outstation ambulance routes"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 text-center mb-5">
              All outstation routes from {city}
            </p>
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs text-gray-400 text-center">
              {otherCities.map((destCity, index) => (
                <span key={destCity.slug} className="inline-flex items-center">
                  <Link
                    href={`/${destCity.slug}`}
                    className="hover:text-red-600 transition-colors font-medium text-gray-500"
                    title={`Ambulance Service from ${city} to ${destCity.name}`}
                  >
                    Ambulance {city} to {destCity.name}
                  </Link>
                  {index < otherCities.length - 1 && (
                    <span className="mx-1.5 text-gray-200" aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-3xl overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Outstation Transfer · {city}
              </p>
              <p
                className="text-lg sm:text-xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Book an outstation ambulance from {city}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Medical crew, oxygen, permits — everything handled. Call for an
                instant quote, 24×7.
              </p>
            </div>
            <a
              href={`tel:${Number1}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
              aria-label={`Call Maa Ambulance to book outstation ambulance from ${city} at ${Number1}`}
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              {Number1}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OutOfStation;