import { Award, Users, MapPin, Clock, ArrowRight, Heart, Shield, Star, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SubHeading from "./smallComponents/SubHeading";
import { Number1 } from "@/constants/PhoneNumbers";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "62,000+", text: "Happy Clients" },
    { icon: Clock, number: "24/7", text: "Always Available" },
    { icon: MapPin, number: "53+", text: "Cities Covered" },
    { icon: Award, number: "4+", text: "Years Experience" },
  ];

  const highlights = [
    { icon: Heart, text: "ICU & Ventilator Ambulances" },
    { icon: Shield, text: "Dead Body & Coffin Box Transport" },
    { icon: Star, text: "Mobile Mortuary Services" },
  ];

  return (
    <section
      id="about"
      aria-label="About Maa Ambulance Service Delhi"
      className="py-16 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SubHeading title="About Maa Ambulance Service" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>

            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Trusted Ambulance Service in India —{" "}
              <span className="text-red-600">Available 24/7</span>
            </h3>

            <div className="space-y-4">
              <p className="text-[16px] text-gray-700 leading-relaxed">
                <strong>Maa Ambulance Service</strong> is a leading provider of
                emergency and non-emergency medical transport in Delhi, founded
                in <strong>2020 by Mr. Mahesh Yadav</strong>. Based in{" "}
                <strong>Rohini, New Delhi</strong>, we operate a fleet of{" "}
                <strong>39 ambulances</strong> staffed by{" "}
                <strong>39 trained professionals</strong>, serving over{" "}
                <strong>53 cities</strong> across the region.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                Whether you need an <strong>ICU Ventilator Ambulance</strong>,{" "}
                <strong>Cardiac Ambulance</strong>,{" "}
                <strong>Outstation Ambulance</strong>,{" "}
                <strong>Mobile Mortuary</strong>, or a{" "}
                <strong>Private Ambulance</strong> for patient shifting or
                events — Maa Ambulance delivers compassionate, affordable, and
                prompt care every time you call.
              </p>
            </div>

            {/* Service Tags */}
            <ul
              className="mt-6 flex flex-col gap-3"
              aria-label="Key ambulance services"
            >
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 shrink-0">
                    <item.icon className="w-4 h-4 text-red-600" />
                  </span>
                  <span className="text-[15px] font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Founder Quote */}
            <blockquote className="mt-6 pl-4 border-l-4 border-red-500 italic text-gray-600 text-[15px]">
              "We believe every life deserves fast, reliable, and caring
              emergency transport — at a price every family can afford."
              <footer className="mt-1 not-italic font-semibold text-gray-800 text-[14px]">
                — Mahesh Yadav, Founder &amp; Director
              </footer>
            </blockquote>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/about-us"
                className="group flex items-center gap-1 w-max bg-red-600 hover:bg-black transition-colors duration-300 text-sm font-medium text-white px-5 py-2.5 rounded-full"
                aria-label="Learn more about Maa Ambulance"
              >
                Read More
                <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4" />
              </Link>
              <a
                href={`tel:${Number1}`}
                className=" font-semibold text-red-600 hover:underline"
                aria-label="Call Maa Ambulance"
              >
                <Phone className="w-6 h-6 inline-block" /> {Number1}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 mx-auto mb-2 flex items-center justify-center">
                    <stat.icon className="text-red-500 w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-[14px]">
                    {stat.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Badges */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#009600]/10 to-[#004b00]/50 rounded-2xl p-3 md:p-6">
              <Image
                src="/hero-section/ambulance-2.png"
                alt="Maa Ambulance Service fleet in Delhi - ICU, Ventilator and Dead Body ambulances"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-[280px] sm:h-[380px] object-cover"
                priority
              />
            </div>

            {/* Badge: Daily Shiftings */}
            <div className="absolute -top-6 -left-3 md:-left-6 bg-white p-3 md:p-5 rounded-lg shadow-2xl border-l-4 border-red-600">
              <p className="text-xl md:text-2xl font-bold text-red-600">46+</p>
              <p className="text-sm text-gray-600">Daily Patient Shiftings</p>
            </div>

            {/* Badge: Hospitals Tied Up */}
            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-white p-3 md:p-5 rounded-lg shadow-2xl border-l-4 border-green-600">
              <p className="text-xl md:text-2xl font-bold text-green-600">31+</p>
              <p className="text-sm text-gray-600">Hospital Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;