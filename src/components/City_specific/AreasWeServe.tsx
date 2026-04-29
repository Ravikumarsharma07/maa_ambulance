"use client";

import CityPageProps from "@/Types/CityData";
import { MapPin, ChevronRight } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cities from "@/constants/Cities";
import Link from "next/link";

const AreasWeServe = ({ cityData }: { cityData: CityPageProps }) => {
  const [locations, setLocations] = useState<{ name: string; slug: string }[]>(
    []
  );
  const param = useParams();

  useEffect(() => {
    if (!param.city) return;
    const cityName = String(param.city).split("-").splice(3).join(" ");
    const matched = cities.filter(
      (city) => city.name.toLowerCase() === cityName
    );
    const localities = matched[0]?.places;
    setLocations(localities || []);
  }, [param.city]);

  // Filter out index 0 (parent city) and deduplicate
  const displayLocations = locations.filter((_, i) => i !== 0);

  if (!displayLocations.length) return null;

  return (
    <section
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="areas-we-serve-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading
            title={`Ambulance Service Areas in ${cityData.name}`}
          />
          <p
            id="areas-we-serve-heading"
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Our ambulance fleet is strategically pre-positioned across all major
            localities in {cityData.name} — ensuring the fastest possible
            dispatch time, 24×7.
          </p>
        </div>

        {/* ── LOCATION CARDS GRID ── */}
        <nav aria-label={`Localities served by Maa Ambulance in ${cityData.name}`}>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
            role="list"
          >
            {displayLocations.map((location) => (
              <li key={location.slug} role="listitem">
                <Link
                  href={`/${location.slug}`}
                  className="group flex items-center justify-between gap-2 bg-[#F8F7F4] hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  aria-label={`Ambulance service in ${location.name}`}
                  title={`24/7 Ambulance Service in ${location.name}`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin
                      className="w-3.5 h-3.5 text-red-500 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors truncate leading-snug">
                      {location.name}
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

        {/* ── SEO TEXT LINK STRIP ── */}
        <div
          className="mt-14 sm:mt-16 pt-8 border-t border-gray-100"
          aria-label="Text links to ambulance services in nearby areas"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 text-center mb-5">
            More areas we cover
          </p>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs text-gray-400 leading-relaxed text-center">
            {displayLocations.map((location, index) => (
              <span key={location.slug} className="inline-flex items-center">
                <Link
                  href={`/${location.slug}`}
                  className="hover:text-red-600 transition-colors font-medium text-gray-500"
                  title={`Ambulance Service in ${location.name}`}
                >
                  Ambulance Service in {location.name}
                </Link>
                {index < displayLocations.length - 1 && (
                  <span className="mx-1.5 text-gray-200" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AreasWeServe;