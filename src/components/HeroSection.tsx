"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 10);
    return () => clearTimeout(timer);
  });
  return (
    <section className="relative -z-10 py-12 lg:py-24 mt-24 lg:mt-32 overflow-hidden">

      {/* trianle top designs */}
      <div
        className={`flex-center h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] bg-gray-100/20 rounded-[1.2rem] md:rounded-[2.2rem] rotate-[30deg] absolute -top-[75%] -left-[3%] sm:left-[1%] md:-top-[60%] md:left-[5%] z-30 transition-all duration-1000 ${
          isAnimating ? "translate-0" : "translate-[-200px]"
        }`}
        >
        <div className="h-[80%] w-[80%] bg-gray-200/20 rounded-[1rem] md:rounded-[1.8rem] rotate"></div>
      </div>

        {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/80 via-red-600/60 to-red-700/80">
        <Image
          src="/ambulance.png"
          alt="Ambulance background"
          fill
          priority
          className="w-full h-[400px] object-cover -z-10"
        />
      </div>

      <div className="max-w-7xl relative z-10 flex-between lg:gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-nowrap font-sans ml-2 md:ml-5 text-[1.5rem] sm:text-[2.2rem] md:text-[2.5rem] leading-[30px] sm:leading-[35px] md:leading-[40px] lg:leading-[75px] lg:text-[5rem] xl:text-[5.2rem] scale-y-[1.1] text-center text-shadow-md text-shadow-black font-bold text-white mb-2 md:mb-6">
            Jyoti Ambulance
            <span className="text-[#ffc400] block text-[1.7rem] sm:text-[2.7rem] md:text-[3rem] lg:text-[5.4rem] tracking-wide font-extrabold">
              Services
            </span>
          </h1>
          <p className="text-[9px] sm:text-[14px] md:text-[18px] lg:text-2xl font-semibold rounded-tr-full rounded-br-full w-max text-black bg-cyan-200 px-2 md:px-8 py-2">
            24x7 Emergency Medical Transport Across India.
          </p>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-[39vw] h-[35vw] blur-3xl bg-gradient-to-br from-red-200/70 to-blue-300/70 rounded-[1.2rem] md:rounded-[2.5rem] shadow-2xl border-[1px] md:border-[7px]  border-[#e9e9e9]"></div>
          <div className="flex-center w-[39vw] h-[35vw] rounded-[1rem] md:rounded-[4rem] p-1 lg:p-4 border-[1px] md:border-[2px] mr-12 lg:mr-10 border-[#eeeeee]">
            <Image
              src="/ambulance-4.png"
              alt="Modern ambulance"
              width={400}
              height={400}
              priority
              className="scale-[1.6] md:scale-[1.5] object-cover "
            />
          </div>

          {/* <div className="absolute -bottom-8 right-0 md:-bottom-6 md:-right-6 bg-[#ffc400] p-2 md:p-4 rounded-lg shadow-2xl border-l-2 md:border-l-4 border-black">
            <p className="text-[12px] sm:text-[15px] md:text-3xl font-semibold lg:font-bold text-black">24/7</p>
            <p className="text-[8px] sm:text-[10px] text-gray-600">Emergency Ready</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
