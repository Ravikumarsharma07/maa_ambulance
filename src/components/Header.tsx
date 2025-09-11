"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";

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
    { name: "Blogs", href: "/blog" },
    { name: "Locations", href: "/available-areas" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } inset-0 bg-white transition-all duration-500 ease-out w-[19rem] h-screen z-[9999] p-2`}
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
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-200 text-gray-800 border-b border-gray-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <header
        className={`fixed top-0 left-0  bg-white w-full backdrop-blur-sm shadow-lg z-[9998] transition-transform ${
          showNav ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        {/* top header */}
        <div className="flex justify-center md:justify-between items-center w-full bg-gradient-to-r from-gray-800 to-red-700 py-2 md:py-3 px-4 lg:px-6">
          {/* contact details */}
          <div className="max-md:hidden md:flex items-center space-x-4 text-[15px] text-white ">
            <a
              href="tel:+91-9990228876"
              className="flex items-center border-r border-gray-200 pr-4 hover:text-yellow-400"
            >
              <Phone
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-yellow-400"
              />
              +91-9990228876
            </a>
            <a
              href="tel:+91-9540944424"
              className="flex items-center border-r border-gray-200 pr-4 hover:text-yellow-400"
            >
              <Phone
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-yellow-400"
              />
              +91-9540944424 

            </a>
            <a
              className="flex items-center  hover:text-yellow-400"
              href="mailto:jyotiambulance69@gmail.com"
            >
              <Mail
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-yellow-400"
              />
              jyotiambulance69@gmail.com
            </a>
            {/* <a
              className="flex items-center hover:text-yellow-400"
              href="https://www.google.com/search?q=E-18%2F280+GF%2C+Sector+3%2C+Rohini%2C+Delhi+110085%2C+Near+MCD+School"
            >
              <MapPin
                strokeWidth={2.5}
                className="w-4 h-4 mr-2 font-semibold text-yellow-400"
              />
              E-18/280 GF, Sector 3, Rohini, Delhi 110085, Near MCD School
            </a> */}
          </div>
          {/* social icons */}
          <div className="flex-center gap-3 md:gap-2">
            <Link href="https://www.facebook.com/jyotiambulance">
              <Facebook className="w-5 text-transparent hover:fill-yellow-500 fill-white" />
            </Link>
            <Link href="https://www.instagram.com/jyotiambulance">
              <Instagram className="w-5 h-5 text-white hover:text-yellow-500" />
            </Link>
            <Link href="https://x.com/jyotiambulance4">
              <Twitter className="w-5 text-transparent hover:fill-yellow-500 fill-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/davender-singh-687363340/">
              <Linkedin className="w-6 scale-105 pb-1 text-transparent hover:fill-yellow-500 fill-white" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCljuoYlZFsPQ_GnuC_R7ltw">
              <Youtube className="w-6 text-white hover:text-yellow-500" />
            </Link>
          </div>
        </div>

        <div className="mx-auto pr-4 sm:pr-6 lg:pr-8">
          <div className="flex-between overflow-hidden py-0 md:py-3">
            <Link href="/" className="text-2xl font-bold text-red-600">
              <Image
                src="/jyoti-ambulance-logo-2.png"
                alt="Ambulance Logo"
                width={320}
                height={100}
                fetchPriority="high"
                className="max-md:w-[12rem] h-[3.6rem] md:h-[5rem] object-cover"
                priority
                quality={100}
              />
            </Link>

            <nav className="hidden md:flex items-center px-2 xl:pr-32">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={`${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 lg:text-[17px] text-center hover:text-red-600 py-6 px-4 font-semibold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Emergency Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+91-9990228876"
                className="bg-[#ffd000] hover:bg-black font-mono transition-color duration-400 text-black hover:text-white px-6 py-3 rounded- font-semibold flex items-center transition-colors"
              >
                CALL NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-[#ffd000] hover:bg-black md:hidden transition-color text-black hover:text-white px-2 py-2  font-semibold"
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
