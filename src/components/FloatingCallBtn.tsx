import { PhoneCall } from 'lucide-react'
import React from 'react'

const FloatingCallBtn = () => {
  return (
    <div className='fixed bottom-10 right-10 text-white  z-50'>
        
    <a href='tel:+919876543210' className='flex items-end gap-2 p-3 text-xl animate-bounce rounded-full border-2 border-gray-500 bg-red-600'>
      <PhoneCall className='w-8  h-8'/>Call Now
    </a>
    </div>
  )
}

export default FloatingCallBtn
