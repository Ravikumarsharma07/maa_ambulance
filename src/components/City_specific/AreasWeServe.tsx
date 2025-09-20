"use client";
import CityPageProps from "@/Types/CityData";
import { MapPinIcon } from "lucide-react";
import SubHeading from "../smallComponents/SubHeading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cities from "@/constants/Cities";
import Link from "next/link";

const AreasWeServe = ({ cityData }: { cityData: CityPageProps }) => {
  // Replace this with the actual list of localities for the given city/state.
  const [locations, setLocations] = useState<{ name: string; slug: string; }[]>([]);
  const param = useParams();
  useEffect(() => {
    if (!param.city) return;
    const cityName = String(param.city).split("-").splice(3).join(" ");
    const cityData = cities
      .filter((city) => city.name.toLowerCase() === cityName)
    const localities = cityData[0]?.places
    setLocations(localities || []);
  }, [param.city]);

  if (!locations.length) return null;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="mx-auto max-w-2xl text-center">
          <SubHeading
            title={`Ambulance Service Locations In ${cityData.name}`}
          />
          <p className="md:text-lg  text-gray-600">
            Our ambulance fleet is strategically positioned across all major
            localities to ensure the fastest possible response time, 24/7.
          </p>
        </div>

        {/* --- Grid of Locations --- */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {locations.map((location, index) => (
            index === 0 ? null : <Link
              key={location.slug}
              href={`/${location.slug}`}
            >
            <div
              className="flex items-center gap-x-3 rounded-lg border bg-gray-50 p-4 transition-all duration-300 hover:border-red-500 hover:shadow-md"
            >
              <MapPinIcon
                className="h-6 w-6 flex-none text-red-500"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-gray-800">
                {location.name}
              </h3>
            </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-16 text-center text-gray-600 leading-[40px]">
          {locations.map((location, index) => (
            <Link href={`/${location.slug}`} key={index} className="hover:text-red-500">{" "}
              <h3 className="inline-block">
              Ambulance Services in {location.name} | {" "}
              </h3>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
