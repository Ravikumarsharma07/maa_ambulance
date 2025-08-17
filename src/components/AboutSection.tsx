import { Award, Users, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '10,000+', text: 'Lives Saved' },
    { icon: Clock, number: '24/7', text: 'Service Available' },
    { icon: MapPin, number: '500+', text: 'Cities Covered' },
    { icon: Award, number: '15+', text: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Jyoti Ambulance Services
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jyoti Ambulance Services has been India's most trusted emergency medical transport 
                provider for over 15 years. We operate a nationwide network of ambulances equipped 
                with state-of-the-art medical equipment and staffed by trained paramedics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to saving lives drives us to maintain the highest standards of 
                emergency medical care. From basic life support to critical care transport, 
                we ensure every patient receives the best possible care during their journey to medical facilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our 24x7 operations center and GPS-enabled fleet, we guarantee the fastest 
                response times across all major cities in India. Trust, reliability, and 
                professional medical care are at the heart of everything we do.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8">
              <Image
                src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg"
                alt="Medical professionals with ambulance"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-lg shadow-2xl border-l-4 border-blue-600">
              <p className="text-2xl font-bold text-blue-600">ISO Certified</p>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-2xl border-l-4 border-green-600">
              <p className="text-2xl font-bold text-green-600">Licensed</p>
              <p className="text-sm text-gray-600">Government Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;