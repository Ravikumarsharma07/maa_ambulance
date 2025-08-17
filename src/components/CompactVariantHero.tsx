import React  from 'react';
import { Phone,  Star } from 'lucide-react';
import Image from 'next/image';

const CompactVariant = () => {

  return (
    <div className="min-h-[100vh] bg-white relative">
      
    <Image
  src="/ambulance.png"
  alt="Ambulance"
  fill                // lets it cover parent container (no fixed width/height distortion)
  quality={100}       // max clarity
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
/>
        <section className='relative w-full min-h-[100vh] z-10 pt-20 bg-gradient-to-br from-blue-600/60 via-black/40 to-red-600/60'>

      {/* Mobile Menu */}
        <div className="lg:hidden bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <a
              href={`tel:+91 8899999999`}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Emergency Call: +91 8899999999
            </a>
          </div>
        </div>

      {/* Hero Section */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse">
                
            </span>
                India&apos;s Most Trusted Emergency Service
          </div>
          
          <h1 className="text-3xl md:text-6xl font-sans font-bold text-red-700 text-shadow-2xs text-shadow-blue-700 mb-4">
            24x7 Nationwide Ambulance Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-2">Fast, Reliable, and Affordable</p>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto mt-4">
            Reach any hospital in India within minutes. Professional medical assistance available round the clock.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8 text-shadow-2xs text-white text-shadow-blue-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="">(12,450+ reviews)</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+91 8899999999`}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Emergency Call: +91 8899999999
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Services
            </button>
          </div>
        </div>
      </section>



    

        </section>
    </div>
  );
};

export default CompactVariant;