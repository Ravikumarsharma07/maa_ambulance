import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FloatingCallBtn = () => {
  return (
    <Link href="tel:+91-9540944424">
        
      <div className="fixed bottom-9 animate-bounce right-8 md:bottom-10 md:right-10 cursor-pointer z-50">
        {/* Circular Text */}
        <svg
          width="90"
          height="80"
          viewBox="0 0 210 210"
          className="absolute top-1 left-0 z-[56] "
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -80,0
                a 80,80 0 1,1 160,0
                a 80,80 0 1,1 -160,0
              "
            />
          </defs>
          <text fill="oklch(50.5% 0.213 27.518)" fontSize="26" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0">
              Emergency • • • • • Emergency • • • • •
            </textPath>
          </text>
        </svg>

        {/* Main Button */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-6 rounded-full shadow-2xl transition-all duration-400 hover:scale-110 hover:rotate-3 border-2 border-orange-300 relative">
          <div className="absolute -top-0 -left-0 animate-ping rounded-full h-full w-full bg-orange-500/50 -z-10"></div>
          <div className="flex items-center">
            <PhoneCall className="w-8 h-8  text-red-700 translate-y-" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FloatingCallBtn
