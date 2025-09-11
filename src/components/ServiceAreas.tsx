import Link from 'next/link';
import { MapPin,  ChevronRight } from 'lucide-react';
import SubHeading from './smallComponents/SubHeading';
import cities from '@/constants/Cities';

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title='Our Ambulance Service Locations Across India' />
          <p className="md:text-lg text-gray-600">
            We provide 24x7 ambulance services in major cities across India. 
            Click on your city to find specific ambulance services and contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group relative overflow-hidden bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-600"
            >
              <div className='absolute transition-all duration-300 top-[75%] left-[68%] group-hover:-top-[50%] group-hover:left-[5%] w-[200%] h-[300%] bg-emerald-500/20 rounded-full'></div>
              {/* <div className="flex items-start justify-end mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </div> */}
              <p className="sm:text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-1 text-red-600 group-hover:text-red-700 transition-colors" />
                {city.name}
              </p>
              {/* <p className="text-gray-600 text-sm mb-4">{city.state}</p> */}
              <h3 className="text-blue-600 font-medium text-[12px] group-hover:text-blue-700">
                Ambulance Service in {city.name} <ChevronRight className="w-4 h-4 inline-block group-hover:translate-x-2 transition-transform" />
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't see your city?
            </h3>
            <p className="text-gray-600 mb-6">
              We're expanding our services. Call us to check availability in your area.
            </p>
            <a
              href="tel:+91-9540944424"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Call for Other Cities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;