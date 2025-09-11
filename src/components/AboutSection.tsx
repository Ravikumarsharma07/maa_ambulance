import { Award, Users, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SubHeading from "./smallComponents/SubHeading";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "10,000+", text: "Lives Saved" },
    { icon: Clock, number: "24/7", text: "Service Available" },
    { icon: MapPin, number: "500+", text: "Cities Covered" },
    { icon: Award, number: "15+", text: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SubHeading title="Jyoti Ambulance Services" />
            <div className="space-y-6">
              <p className="text-[16px] text-gray-700 leading-relaxed">
                Jyoti Ambulance Services is a leading provider of 24/7 emergency
                medical transport in Delhi. Our mission is to bridge the
                critical gap between an emergency and hospital care with
                unparalleled speed and professionalism. Our team of certified
                paramedics and our fleet of specialized ambulances—including
                ICU, ALS, and Neonatal units—are always ready to respond. We are
                dedicated to ensuring you or your loved one receives safe,
                compassionate, and life-saving support from the moment you call
                us.
              </p>
            </div>
            <Link
                href="/about-us"
                className="group flex-center w-max transition-transform duration-700 bg-red-600 hover:bg-black text-sm font-sans transition-color text-gray-100 hover:text-white px-4 py-2 mt-4 rounded-full"
              >
                Read More
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 ml-1" />
              </Link>

            <div className="mt-12 grid grid-cols-2 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 mx-auto mb-2 flex-center">
                    <stat.icon className="text-red-500 w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-[14px]">{stat.text}</div>
                </div>
              ))}
            </div>
            
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-4 md:p-8">
              <Image
                src="/ambulance.png"
                alt="Medical professionals with ambulance"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-[290px] sm:h-[350px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-3 md:-left-6 bg-white p-3 md:p-6 rounded-lg shadow-2xl border-l-4 border-blue-600">
              <p className="text-xl md:text-2xl font-bold text-blue-600">ISO Certified</p>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-3 md:p-6 rounded-lg shadow-2xl border-l-4 border-green-600">
              <p className="text-xl md:text-2xl font-bold text-green-600">Licensed</p>
              <p className="text-sm text-gray-600">Government Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
