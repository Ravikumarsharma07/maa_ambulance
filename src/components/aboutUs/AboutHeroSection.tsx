import Image from "next/image";
import Link from "next/link";
import { Users, Clock, MapPin, Ambulance } from "lucide-react"; // Example icons
import SubHeading from "../smallComponents/SubHeading";

const AboutHeroSection = () => {
  return (
    <section className="bg-white py-16 pt-32 md:pt-44">
      {" "}
      {/* Adjust padding top based on your header */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:pr-8">
            <SubHeading title="Jyoti Ambulance Services" />
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Jyoti Ambulance Services is a premier provider of 24/7 ambulance
              services in Delhi, Bihar, Uttar Pradesh, and across all major
              cities. We specialize in rapid-response emergency medical
              transport, bridging the critical gap between an incident and
              hospital care with unmatched speed and professionalism. Our team
              of certified paramedics and our modern fleet of specialized
              ambulances—including fully-equipped ICU ambulances, Advanced Life
              Support (ALS), and Neonatal units—are on standby to respond
              immediately. From your first call, we are dedicated to ensuring
              you or your loved one receives safe, compassionate, and
              life-saving critical care support.
            </p>
            <Link
              href="/services" // Link to your main services page
              className="inline-flex items-center bg-red-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-700 transition-colors shadow-md"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Key Stats / Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-3">
                <Users className="mx-auto h-8 w-8 text-red-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-600">Lives Saved</p>
              </div>
              <div className="text-center p-3">
                <Clock className="mx-auto h-8 w-8 text-red-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-gray-600">Service Available</p>
              </div>
              <div className="text-center p-3">
                <MapPin className="mx-auto h-8 w-8 text-red-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Locations Covered</p>
              </div>
              <div className="text-center p-3">
                <Ambulance className="mx-auto h-8 w-8 text-red-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image Column with Trust Badges */}
          <div className="relative h-96 lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100">
            <Image
              src="/ceo.jpg" // Use a high-quality main ambulance image
              alt="Jyoti Ambulance Service Vehicle"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="z-10"
            />
            {/* Trust Badges - positioned absolutely */}
            <div className="absolute top-8 right-8 z-20">
              <span className="bg-white text-blue-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-blue-200">
                ISO Certified
              </span>
            </div>
            <div className="absolute bottom-8 right-8 z-20">
              <span className="bg-white text-green-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-green-200">
                Licensed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
