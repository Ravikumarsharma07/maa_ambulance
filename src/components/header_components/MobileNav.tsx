import cities from "@/constants/Cities";
import { Services } from "@/constants/Services";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: { name: string; href: string }[];
}

const MobileNav = ({ navLinks, isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const [isServicesShowing, setIsServicesShowing] = useState(false);
  const [isLocationShowing, setIsLocationShowing] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } inset-0 bg-white transition-all duration-500 ease-out w-[20rem] h-screen z-[9999] p-2 pb-16 overflow-scroll`}
    >
      <div className="flex-between">
        <Link
              href="/"
              className="ml-4 pt-2 pb-4 text-xl md:text-2xl font-bold flex-center"
            >
              <Image
                src="/company-logo.png"
                alt="Maa Ambulance Service Logo"
                width={320}
                height={100}
                fetchPriority="high"
                className="w-12 h-12 md:w-16 md:h-16 object-cover"
                priority
                quality={100}
              />
              <p className="flex flex-col leading-6">
                <span className="text-[#1F2933]">
                  MAA
                </span>{" "}
                <span className="text-[#E53935]">Ambulance</span>
              </p>
            </Link>
        <button
          className="text-[#1F2933] bg-[#178A52] p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <X strokeWidth={2.9} className="w-7 h-7" />
        </button>
      </div>
        {/* $$$$$$$$$     navigation links     $$$$$$$$$$$$ */}
      <nav className="space-y-2">
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link
              href={link.href}
              onClick={
                () => setIsMenuOpen(false)
              }
              className="block px-4 py-2 text-lg font-semibold text-[#178A52] border-b-2 border-[green]"
            >
              {link.name}{" "}
              {link.name === "Our Services" && (
                <ChevronDown
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    setIsServicesShowing(!isServicesShowing)}
                  }
                    className={`${
                    isServicesShowing ? "rotate-180" : ""
                  } w-12 h-8 p-1 ml-2 inline-block bg-gray-200 rounded-full`}
                />
              )}
              {link.name === "Locations" && (
                <ChevronDown
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    setIsLocationShowing(!isLocationShowing)
                  }}
                  className={`${
                    isLocationShowing ? "rotate-180" : ""
                  } w-12 h-8 p-1 ml-2 inline-block bg-gray-200 rounded-full`}
                />
              )}
            </Link>

            {/* list of services */}
            {link.name === "Our Services" && (
              <div className={`pl-3 ${isServicesShowing ? "block" : "hidden"}`}>
                {Services.map((service, index) => (
                  <Link
                    href={service.link}
                    key={index}
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-4 pr-2 py-2 text-gray-800 border-b border-gray-200"
                  >
                    {service.name}{" "}
                    <ChevronRight className="w-4 h-4 inline-block" />
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-semibold px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                >
                  Explore all services{" "}
                  <ChevronRight className="w-4 h-4 inline-block" />
                </Link>
              </div>
            )}

            {/* list of locations */}
            {link.name === "Locations" && (
              <div className={`pl-3 ${isLocationShowing ? "block" : "hidden"}`}>
                {cities.map((city, index) => (
                  <Link
                    href={`/${city.slug}`}
                    key={index}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                  >
                    {city.name}{" "}
                    <ChevronRight className="w-4 h-4 inline-block" />
                  </Link>
                ))}
                <Link
                  href="/available-areas"
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-semibold px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                >
                  Explore all services{" "}
                  <ChevronRight className="w-4 h-4 inline-block" />
                </Link>
              </div>
            )}            
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
