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
    { name: "Our Services", href: "/services"},
    // { name: "Blogs", href: "/blog" },
    { name: "Locations", href: "/available-areas"},
    { name: "Contact Us", href: "/contact-us" },
    { name: "Developer Portfolio", href: "https://ravi-kr-sharma.vercel.app/" },
  ];
  return (
    <>
      {/* nav for small screens */}
      <MobileNav navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>


      {/* nav for big screens */}
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
          <div className="flex-between py-0 md:py-3">
            {/* company logo  */}
            <Link href="/" className="text-2xl font-bold text-red-600">
              <Image
                src="/jyoti-ambulance-logo-2.png"
                alt="Ambulance Logo"
                width={320}
                height={100}
                fetchPriority="high"
                className="max-md:w-[12rem] h-[3.6rem] md:h-[5rem] lg:w-[14rem] xl:w-[16rem] object-cover"
                priority
                quality={100}
              />
            </Link>

            <nav className="hidden md:flex items-center px-2 xl:pr-16 z-0">
              {navLinks.map((item) => (
                <div key={item.name} className="group relative">
                <Link
                  href={`${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-600 lg:text-[16px] xl:text-[17px] flex-center text-center ${item.name === "Developer Portfolio" && "text-red-500"} hover:text-red-600 py-6 px-3 xl:px-4 font-semibold transition-colors`}
                >
                  {item.name} {(item.name === "Our Services" || item.name === "Locations") && <ChevronDown className="group-hover:rotate-180" />}
                </Link>

                {item.name === "Our Services" && (
                  <div className="group-hover:block z-50 hidden absolute top-14 left-0 w-[320px] bg-white shadow-2xl ">
                    {Services.slice(1, 10).map((service, index) => (
                      <Link
                        href={service.link}
                        key={index}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                      >
                        {service.name} <ChevronRight className="w-4 h-4 inline-block" />
                      </Link>
                    ))}
                    <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-semibold px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                      >
                        Explore all services <ChevronRight className="w-4 h-4 inline-block" />
                      </Link>
                  </div>
                )}

                {item.name === "Locations" && (
                  <div className="group-hover:block z-50 hidden absolute top-14 left-0 w-[220px] bg-white shadow-2xl">
                    {cities.map((location, index) => (
                      <Link
                        href={`/${location.slug}`}
                        key={index}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                      >
                        {location.name} <ChevronRight className="w-4 h-4 inline-block" />
                      </Link>
                    ))}
                    <Link
                        href="/available-areas"
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-semibold px-4 py-2 hover:text-red-500 text-gray-800 border-b border-gray-200"
                      >
                        Explore all locations <ChevronRight className="w-4 h-4 inline-block" />
                      </Link>
                  </div>
                )}
                </div>
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
