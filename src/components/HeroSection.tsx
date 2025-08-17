import { Phone, Clock, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cityName?: string;
}

const HeroSection = ({ title, subtitle, cityName }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-20">
      <div className="absolute inset-0 bg-red-600/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl  lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}.
            </p>
            
            {cityName && (
              <p className="text-lg text-gray-700 mb-8">
                Available 24x7 in {cityName} with trained medical staff and modern equipment. 
                Fast response to all hospitals in the city.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="tel:+919876543210"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-lg font-semibold flex-center transition-colors shadow-lg"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +91-98765-43210
              </a>
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors"
              >
                <Shield className="w-6 h-6 mr-2" />
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">24x7 Available</h3>
                <p className="text-gray-600">Round the clock service</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fast Response</h3>
                <p className="text-gray-600">Reach within minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fully Equipped</h3>
                <p className="text-gray-600">Modern medical equipment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl p-8">
              <Image
                src="/ambulance.png"
                alt="Modern ambulance with medical equipment"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-2xl border-l-4 border-red-600">
              <p className="text-3xl font-bold text-red-600">24/7</p>
              <p className="text-sm text-gray-600">Emergency Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;