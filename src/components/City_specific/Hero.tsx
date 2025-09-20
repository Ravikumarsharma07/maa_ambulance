"use client";
import { City, PlaceDetails } from '@/constants/Cities';
import { PhoneIcon } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect } from 'react'



const Hero = ({cityData}: {cityData:PlaceDetails}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0)
    return () => clearTimeout(timer);
  }, [])

  return (
     <section className="bg-[#081933]/90 relative  2xl:flex 2xl:justify-center">
        {/* Background */}
      <div className='absolute inset-0'>
      <Image
        src="/ambulance.png"
        alt="Ambulance background"
        fill
        priority
        className="w-full h-[400px] object-cover -z-10"
      />
      </div>

      <div className="overflow-hidden flex max-md:gap-6 max-md:flex-col md:items-start md:pl-8 lg:pl-12 pb-6 pt-32 md:pt-52 xl:pt-48">
        <div className={`max-md:self-center max-md:text-center ${isMounted ? 'translate-y-0' : '-translate-y-20 opacity-0'} transition-all duration-1000 md:pt-4`}>
        <h1 className="font-bold max-w-[630px] tracking-wide scale-y-[1.2] md:scale-y-[1.1] md:leading-[1] leading-[38px] text-[34px] md:text-4xl lg:text-[50px] xl:text-[60px] text-emerald-50">
          Fast & Reliable 24/7 <span className='text-red-500'>Ambulance</span> Service in <span className='text-blue-500'>{cityData.name}</span>
        </h1>
        <p className="mt-6 max-w-xl lg:text-lg text-gray-200">
          {cityData?.subHeadline || `24/7 emergency ambulance with certified paramedics. Call now for immediate transport.`}
        </p>

        {/* --- Main Call to Action --- */}
        <div className="mt-6">
          <a
            href="tel:+91-9540944424"
            className="inline-flex items-center gap-4 rounded-xl bg-red-600 px-2 py-3 lg:px-8 lg:py-4 text-lg md:text-[18px] lg:text-xl font-bold text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
            <PhoneIcon className="h-8 w-8" />
            <span>Call for Emergency Ambulance</span>
          </a>
          <p className="mt-4 text-sm text-gray-300">
            Available 24 Hours a Day, 7 Days a Week
          </p>
        </div>
              </div>

              {/* image */}
            <div>
                <Image
                src="/ambulance-4.png"
                alt="Professional Ambulance Service"
                height={500}
                width={400}
                className={`${isMounted ? "-translate-x-4 md:translate-x-0 md:scale-[1.16] opacity-100" : "translate-x-44 scale-50 opacity-0"} transition-all duration-1000 overflow-visible h-full w-full object-cover`}
                />
            </div>
      </div>
    </section>
  )
}

export default Hero
