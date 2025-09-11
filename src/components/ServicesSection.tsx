import {
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Services } from "@/constants/Services";
import SubHeading from "./smallComponents/SubHeading";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title="Types of Ambulance Services" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fast 24/7 Nationwide Ambulance Service in India. Equipped fleet and
            trained staff for rapid, safe emergency medical transport.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Services.map((service, index) => (
            <div
              key={index}
              className="relative flex-col-between bg-white p-5 rounded-t-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-red-600"
            >
              <div>
              <Image
                src={service.imageURL}
                alt={service.name}
                width={500}
                height={500}
                className="w-full h-[190px] object-cover rounded-t-lg mb-2 px-1"
              />

                <h3 className="text-lg font-sans font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-[16px] mb-2">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.link}
                className="group flex-center transition-transform duration-700 bg-red-600 hover:bg-black text-sm font-sans transition-color text-gray-100 hover:text-white px-4 py-2 mt-2 rounded-full"
              >
                Read More
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="tel:+91-9540944424"
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-4 md:px-8 rounded-lg md:text-xl font-semibold inline-flex items-center transition-colors shadow-lg"
          >
            <Clock className="w-6 h-6 mr-3" />
            Book Emergency Ambulance Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
