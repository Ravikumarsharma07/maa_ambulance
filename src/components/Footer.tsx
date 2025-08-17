import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam'
  ];

  const services = [
    'Basic Life Support Ambulance',
    'Advanced Life Support Ambulance',
    'ICU Ambulance',
    'Air Ambulance',
    'Patient Transport',
    'Emergency Medical Services'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold">
              24/7 Emergency Ambulance Service
            </p>
            <a 
              href="tel:+919876543210" 
              className="text-2xl font-bold hover:text-red-200 transition-colors"
            >
              📞 +91-98765-43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                Jyoti Ambulance Services
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's most trusted ambulance service provider with 15+ years of experience 
                in emergency medical transport. Available 24/7 across major cities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={`#services`} 
                      className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <div className="grid grid-cols-1 gap-2">
                {cities.slice(0, 8).map((city) => (
                  <Link
                    key={city}
                    href={`/${city.toLowerCase()}`}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    Ambulance in {city}
                  </Link>
                ))}
                <Link 
                  href="/#service-areas" 
                  className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                >
                  View All Cities →
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Emergency Hotline</p>
                    <a 
                      href="tel:+919876543210" 
                      className="text-white font-medium hover:text-red-400"
                    >
                      +91-98765-43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email Support</p>
                    <a 
                      href="mailto:info@jyotiambulance.com" 
                      className="text-white hover:text-red-400"
                    >
                      info@jyotiambulance.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Head Office</p>
                    <p className="text-white">
                      123 Medical Center Road<br />
                      New Delhi - 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Service Hours</p>
                    <p className="text-white font-medium">24/7 Emergency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jyoti Ambulance Services. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/careers" className="text-gray-400 hover:text-red-400 transition-colors">
                Careers
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              Licensed ambulance service provider across India. 
              All ambulances are equipped with modern medical equipment and staffed by trained professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;