'use client'

import { Number1 } from '@/constants/PhoneNumbers'
import { Phone, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const FloatingCallBtn = () => {
  const [expanded, setExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Auto expand loop
  useEffect(() => {
    setShowTooltip(true)
    const interval = setInterval(() => {
      setExpanded(true)
      setShowTooltip(false)
      setTimeout(() => setExpanded(false), 3000)
      setTimeout(() => setShowTooltip(true), 3000)
    }, 7000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col items-end gap-3">

      {/* Tooltip (lighter + faster) */}
      <div
        className={`transition-all duration-400 ${
          showTooltip
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-red-400 px-3 py-2 max-w-[220px]">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
            <p className="text-xs text-gray-700 leading-tight">
              Need ambulance? <br />
              <span className="font-semibold text-gray-900">
                Call instantly • 24/7 active
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CTA */}
      <Link
        href={`tel:${Number1}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`
          relative flex items-center overflow-hidden
          bg-gradient-to-r from-red-600 to-red-500
          text-white rounded-full 
          transition-all duration-500 ease-out
          active:scale-95
          animate-bounce
          shadow-2xl
          shadow-red-500 border border-red-600
          ${expanded ? 'px-0 pr-6 w-[200px]' : 'w-14 h-14 justify-center'}
        `}
      >
        {/* Single Soft Pulse */}
        <span className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></span>

        {/* Icon */}
        <div className="flex items-center justify-center min-w-[56px] h-14">
          <Phone className="w-6 h-6 z-10" />
        </div>

        {/* Expanding Text */}
        <div
          className={`
            flex flex-col whitespace-nowrap overflow-hidden
            transition-all duration-500
            ${expanded ? 'opacity-100 ml-0' : 'opacity-0 ml-0'}
          `}
        >
          <span className="text-[10px] uppercase tracking-wide text-red-200">
            Emergency
          </span>
          <span className="text-sm font-extrabold leading-tight">
            Call Ambulance
          </span>
          <span className="text-[11px] text-red-100">
            24/7 • Fast Response
          </span>
        </div>

        {/* LIVE Badge */}
        <div className="absolute -top-0.5 -left-1 bg-green-500 text-white text-[9px] font-bold px-2 py-[2px] rounded-full flex items-center gap-1 shadow">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          LIVE
        </div>
      </Link>
    </div>
  )
}

export default FloatingCallBtn