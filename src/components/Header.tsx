"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Services } from "@/constants/Services";
import cities from "@/constants/Cities";
import MobileNav from "./header_components/MobileNav";
import { Number1, Number2 } from "@/constants/PhoneNumbers";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setShowNav(true);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/services" },
    // { name: "Blogs", href: "/blog" },
    { name: "Locations", href: "/available-areas" },
    { name: "Contact Us", href: "/contact-us" },
    // { name: "Developer Portfolio", href: "https://ravi-kr-sharma.vercel.app/" },
  ];
  return (
    <>
      {/* nav for small screens */}
      <MobileNav
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* nav for big screens */}
      <header
        className={`fixed top-0 left-0  bg-white w-full backdrop-blur-sm shadow-lg z-[9998] transition-transform ${
          showNav ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        {/* top header */}
        <div className="flex justify-center md:justify-between items-center w-full bg-gradient-to-r from-gray-900 to-[#178A52] py-2 md:py-3 px-4 lg:px-6">
          {/* contact details */}
          <div className="max-md:hidden md:flex items-center space-x-4 text-[15px] text-white ">
            <a
              href={`tel:${Number1}`}
              className="flex items-center border-r border-gray-200 pr-4 hover:text-[#09723d]"
            >
              <Phone
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-[#09723d]"
              />
              {Number1}
            </a>
            <a
              href={`tel:${Number2}`}
              className="flex items-center border-r border-gray-200 pr-4 hover:text-[#09723d]"
            >
              <Phone
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-[#09723d]"
              />
              {Number2}
            </a>
            <a
              className="flex items-center  hover:text-[#09723d]"
              href="mailto:maaambulance18@gmail.com"
            >
              <Mail
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-[#09723d]"
              />
              maaambulance18@gmail.com
            </a>
          </div>
          <a
              href={`tel:${Number1}`}
              className="flex items-center md:hidden  text-white font-bold py-1 px-2 hover:text-[#09723d]"
            >
              <p className="text-[#3bcc84] pr-1">Call</p>
                {Number1}
            </a>
          {/* social icons */}
          <div className="flex justify-center items-center max-md:hidden gap-3 md:gap-2">
            <Link href="https://www.facebook.com/maaambulanceservice/">
              <Facebook className="w-5 text-transparent hover:fill-[#09723d] fill-white" />
            </Link>
            <Link href="https://www.instagram.com/maaambulanceservices/">
              <Instagram className="w-5 h-5 text-white hover:text-[#09723d]" />
            </Link>
            <Link href="https://twitter.com/maaambulanceservice">
              <Twitter className="w-5 h-5 text-white hover:text-[#09723d]" />
            </Link>
          </div>
        </div>


          {/* MAIN HEADER WITH NAVBAR  */}
        <div className="mx-auto pr-4 sm:pr-6 lg:pr-8 bg-gray-100">
          <div className="flex-between py-1">
            {/* company logo  */}
            <Link
              href="/"
              className="ml-4 lg:ml-8 text-2xl font-bold flex-center"
            >
              <Image
                src="/company-logo.png"
                alt="Maa Ambulance Service Logo"
                width={320}
                height={100}
                fetchPriority="high"
                className="h-20 w-20 md:w-24 md:h-24 object-cover"
                priority
                quality={100}
              />
              <p className="flex flex-col leading-6">
                <span className="text-[#1F2933]">
                  MAA
                </span>{" "}
                <span className="text-[#E53935]">AMBULANCE</span>
              </p>
            </Link>

            <nav className="hidden md:flex items-center px-2 xl:pr-16 z-0">
              {navLinks.map((item) => (
                <div key={item.name} className="group relative">
                  <Link
                    href={`${item.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-600 lg:text-[16px] xl:text-[17px] flex-center text-center ${item.name === "Developer Portfolio" && "text-red-500"} hover:text-[#09723d] py-6 px-3 xl:px-4 font-semibold transition-colors`}
                  >
                    {item.name}{" "}
                    {(item.name === "Our Services" ||
                      item.name === "Locations") && (
                      <ChevronDown className="group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.name === "Our Services" && (
                    <div className="group-hover:block z-50 hidden absolute top-14 left-0 w-[330px] border-gray-200 p-2 bg-white shadow-2xl ">
                      {Services.slice(1, 10).map((service, index) => (
                        <Link
                          href={service.link}
                          key={index}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 hover:text-[#09723d] text-gray-800 border-b-2 border-[#09723d] hover:bg-[#09723d]/20"
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

                  {item.name === "Locations" && (
                    <div className="group-hover:block z-50 hidden absolute top-14c p-2 left-0 w-[240px] bg-white shadow-2xl">
                      {cities.slice(1, 10).map((location, index) => (
                        <Link
                          href={`/${location.slug}`}
                          key={index}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 hover:text-[#09723d] text-gray-800 border-b-2 border-[#09723d] hover:bg-[#09723d]/20"
                        >
                          {location.name}{" "}
                          <ChevronRight className="w-4 h-4 inline-block" />
                        </Link>
                      ))}
                      <Link
                        href="/available-areas"
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-semibold px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                      >
                        Explore all locations{" "}
                        <ChevronRight className="w-4 h-4 inline-block" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Emergency Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${Number1}`}
                className=" bg-[#1ba160] hover:bg-[#1e9159] font-mono text-[black] px-6 py-3 font-semibold flex items-center"
              >
                CALL NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1F2933] bg-[#178A52] md:hidden transition-color px-2 py-2  font-semibold"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
