import Image from "next/image";
import { CheckCircle } from "lucide-react";

const FleetSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Advanced Fleet & Life-Saving Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every ambulance in our fleet is a mobile medical unit, equipped
              with state-of-the-art technology to provide critical care from
              the moment we reach you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">ICU Ventilators & Cardiac Monitors</h4>
                  <p className="text-gray-600">
                    For patients requiring advanced respiratory and cardiac
                    support.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">GPS-Tracked Fleet</h4>
                  <p className="text-gray-600">
                    Ensuring the fastest route and real-time dispatch management.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Advanced Life Support (ALS) Systems</h4>
                  <p className="text-gray-600">
                    Including defibrillators, infusion pumps, and emergency
                    medication.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/fleet/icu-ambulance-interior.jpg" // Replace with a high-quality photo of your ambulance interior
              alt="Interior of a Jyoti Ambulance with advanced life support equipment"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;