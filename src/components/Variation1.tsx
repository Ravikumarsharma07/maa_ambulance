import React from "react";
import {
  Phone,
  Star,
  Shield,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Award,
  Heart,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

// Variation 1: Social Proof & Trust-Focused
const HeroVariation1 = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 overflow-hidden">
      {/* Background with Ambulance */}
      <div className="absolute inset-0">
        <Image
          height={1080}
          width={1920}
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional Ambulance Service"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-red-900/90"></div>
      </div>

      {/* Navigation */}
      <nav className="w-full fixed top-0 z-20 flex max-sm:flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 p-2 rounded-full">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg md:text-xl font-bold text-white">
            Jyoti Ambulance Services
          </span>
        </div>
        <div className="flex items-center space-x-4 w-full">
          <div className="hidden md:flex items-center space-x-2 text-white">
            <Award className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">ISO Certified</span>
          </div>
          <a
            href="tel:+919876543210"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex-center font-bold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <PhoneCall /> +91-98765-43210
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] py-5 pt-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 flex items-center">
                  <Users className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-white font-medium text-sm">
                    50,000+ Lives Saved
                  </span>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 flex items-center">
                  <Shield className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-white font-medium text-sm">
                    Government Approved
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-sans font-bold text-white leading-tight mb-6">
                India&apos;s <span className="text-red-400">#1 Trusted</span>
                <br />
                <span className="text-blue-400">Emergency</span> Response
              </h1>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
                <div className="">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
                <div className="">
                  <div className="text-2xl font-bold text-white">2 Min</div>
                  <div className="text-sm text-gray-300">Response</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                Join 50,000+ families who trust us with their medical
                emergencies. Professional paramedics, advanced life support, and
                nationwide coverage.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+918899999999"
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-2xl"
                >
                  <Phone className="h-5 w-5 mr-3 animate-pulse" />
                  EMERGENCY: +91 8899999999
                </a>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-200">
                  <a href="#services">View Services</a>
                  <ArrowRight className="h-5 w-5 ml-3" />
                </button>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white text-sm italic">
                  They saved my father&apos;s life. Reached in 90 seconds!
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  - Priya Sharma, Mumbai
                </p>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why Choose Jyoti Ambulance?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-600 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        Fastest Response
                      </div>
                      <div className="text-gray-300 text-sm">
                        Average 2-minute arrival time
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        Certified Paramedics
                      </div>
                      <div className="text-gray-300 text-sm">
                        Trained medical professionals
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-600 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        Pan-India Coverage
                      </div>
                      <div className="text-gray-300 text-sm">
                        Available in 500+ cities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="tel:+918899999999"
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default HeroVariation1;
