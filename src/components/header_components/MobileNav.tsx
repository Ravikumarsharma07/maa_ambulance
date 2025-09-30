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
        <Image
          src="/jyoti-ambulance-logo-2.png"
          alt="Jyoti Ambulance Logo"
          width={250}
          height={100}
          className="w-[250px] h-[100px] object-cover relative right-4"
        />
        <button
          className="text-gray-700 bg-[#ffd000] p-2"
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
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-200 text-gray-800 border-b border-gray-200"
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
                    className="block px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
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
