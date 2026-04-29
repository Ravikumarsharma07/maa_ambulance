import { Building2, Phone } from "lucide-react";
import { Number1 } from "@/constants/PhoneNumbers";
import SubHeading from "../smallComponents/SubHeading";

const HospitalsWeServe = ({
  hospitals,
  city,
}: {
  hospitals: string[] | undefined;
  city: string;
}) => {
  if (!hospitals || hospitals.length === 0) return null;

  return (
    <section
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="hospitals-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title={`Hospitals We Serve in ${city}`} />
          <p
            id="hospitals-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Maa Ambulance provides rapid emergency transport to all major
            private and government hospitals in{" "}
            <strong className="text-gray-700">{city}</strong> — our crew knows
            every route, entrance, and emergency bay.
          </p>
        </div>

        {/* ── HOSPITAL GRID ── */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          role="list"
          aria-label={`Hospitals served by Maa Ambulance in ${city}`}
        >
          {hospitals.map((hospital, index) => (
            <li
              key={index}
              role="listitem"
              className="group flex items-start gap-4 bg-[#F8F7F4] hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-2xl px-5 py-4 transition-all duration-200"
            >
              <span
                className="w-9 h-9 rounded-xl bg-white border border-gray-100 group-hover:border-red-100 group-hover:bg-red-50 flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                aria-hidden="true"
              >
                <Building2 className="w-4 h-4 text-red-500" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-[15px] font-semibold text-gray-800 group-hover:text-red-700 transition-colors leading-snug">
                  {hospital}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">
                  Ambulance transfer available 24×7
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-3xl overflow-hidden">
          <div className="h-1 bg-red-600" aria-hidden="true" />
          <div className="px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400 mb-1">
                Hospital Transfer · {city}
              </p>
              <p
                className="text-lg sm:text-xl font-extrabold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need transport to any hospital in {city}?
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Our crew knows every hospital entrance and emergency bay — we
                get you there without delay.
              </p>
            </div>
            <a
              href={`tel:${Number1}`}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all shrink-0 w-full sm:w-auto"
              aria-label={`Call Maa Ambulance for hospital transfer in ${city} at ${Number1}`}
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

export default HospitalsWeServe;