import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Services } from "@/constants/Services";
import SubHeading from "./smallComponents/SubHeading";
import { Number3 } from "@/constants/PhoneNumbers";

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 bg-[#F8F7F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center mb-12 sm:mb-16">
          <SubHeading title="Types of Ambulance Services" />
          <p
            id="services-heading"
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Fast 24/7 nationwide ambulance service across India — equipped fleet
            and certified medical staff for rapid, safe emergency transport.
          </p>
        </div>

        {/* ── GRID ── */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
          role="list"
          aria-label="Available ambulance services"
        >
          {Services.map((service, index) => (
            <li key={index} role="listitem">
              <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-100 hover:shadow-[0_8px_40px_rgba(192,57,43,0.10)] transition-all duration-300">

                {/* Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden shrink-0">
                  <Image
                    src={service.imageURL}
                    alt={`${service.name} — Maa Ambulance Services`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle red top bar on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-red-600 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className="text-base sm:text-[17px] font-bold text-gray-900 mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="group/btn inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${Number3}`}
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-2xl transition-all shadow-md w-full sm:w-auto"
            aria-label="Call to book an emergency ambulance now"
          >
            <span
              className="relative flex h-2.5 w-2.5 shrink-0"
              aria-hidden="true"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            Book Emergency Ambulance Now
          </a>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium text-sm transition-colors"
            aria-label="View all ambulance services"
          >
            View all services
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;