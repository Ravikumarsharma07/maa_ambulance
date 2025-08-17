'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  return (
    <header className="bg-white/20 w-full backdrop-blur-sm shadow-lg absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Jyoti Ambulance Services
          </Link>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91-98765-43210
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Emergency Contact */}
        <div className="md:hidden pb-4">
          <a
            href="tel:+919876543210"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center transition-colors w-full"
          >
            <Phone className="w-5 h-5 mr-2" />
            Emergency: +91-98765-43210
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t pt-4 pb-4">
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-red-600 py-2">
                Home
              </Link>
              <Link href="/#services" className="block text-gray-600 hover:text-red-600 py-2">
                Services
              </Link>
              <Link href="/#about" className="block text-gray-600 hover:text-red-600 py-2">
                About
              </Link>
              <Link href="/#contact" className="block text-gray-600 hover:text-red-600 py-2">
                Contact
              </Link>
              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-800 mb-2">Service Areas:</p>
                <div className="grid grid-cols-2 gap-1">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      href={`/${city.toLowerCase()}`}
                      className="text-sm text-blue-600 hover:text-blue-800 py-1"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;