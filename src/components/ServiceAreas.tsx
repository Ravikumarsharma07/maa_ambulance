import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    { name: 'Delhi', state: 'National Capital Territory', slug: 'delhi' },
    { name: 'Mumbai', state: 'Maharashtra', slug: 'mumbai' },
    { name: 'Bangalore', state: 'Karnataka', slug: 'bangalore' },
    { name: 'Chennai', state: 'Tamil Nadu', slug: 'chennai' },
    { name: 'Hyderabad', state: 'Telangana', slug: 'hyderabad' },
    { name: 'Pune', state: 'Maharashtra', slug: 'pune' },
    { name: 'Kolkata', state: 'West Bengal', slug: 'kolkata' },
    { name: 'Ahmedabad', state: 'Gujarat', slug: 'ahmedabad' },
    { name: 'Jaipur', state: 'Rajasthan', slug: 'jaipur' },
    { name: 'Lucknow', state: 'Uttar Pradesh', slug: 'lucknow' },
    { name: 'Kanpur', state: 'Uttar Pradesh', slug: 'kanpur' },
    { name: 'Nagpur', state: 'Maharashtra', slug: 'nagpur' },
    { name: 'Indore', state: 'Madhya Pradesh', slug: 'indore' },
    { name: 'Thane', state: 'Maharashtra', slug: 'thane' },
    { name: 'Bhopal', state: 'Madhya Pradesh', slug: 'bhopal' },
    { name: 'Visakhapatnam', state: 'Andhra Pradesh', slug: 'visakhapatnam' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Service Areas Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide 24x7 ambulance services in major cities across India. 
            Click on your city to find specific ambulance services and contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-600 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {city.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{city.state}</p>
              <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                Ambulance Service in {city.name} →
              </p>
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
              href="tel:+919876543210"
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