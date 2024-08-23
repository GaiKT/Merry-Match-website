import React from 'react'
import HeartMatch from '@/asset/icon-merrymatch/merry.svg'
import { X } from 'lucide-react'

export default function MatchPanel() {
  return (
    <div className='flex gap-6'>
        <button className='w-20 h-20 flex justify-center items-center bg-utils-white rounded-3xl'>
            <X className='w-[50px] h-[50px] text-gray-700'/>
        </button>
        <button className='w-20 h-20 flex justify-center items-center bg-utils-white rounded-3xl'>
            <HeartMatch/>
        </button>
    </div>
  )
}
