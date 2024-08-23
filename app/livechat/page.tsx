import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react'
import MerryMatch from '@/asset/icon-merrymatch/merryMatch.svg'

export default function LiveChat() {
  return (
    <>
      {/* chat box area */}
      <div  className='absolute top-0 left-[316px] right-0 h-full z-0 bg-utils-BG pt-24 px-20 pb-20'>
        <div>
          <div className='flex justify-center'>
            <h1 className='bg-purple-100 flex gap-4 w-1/2 border border-purple-300 rounded-2xl font-bold text-red-700 p-6 items-center'>
              <span>
                <MerryMatch/>
              </span>
              Now you and Daeny are Merry Match! You can messege something nice and make a good conversation. Happy Merry!
            </h1>
          </div>
          <div></div>
        </div>
      </div>

      {/* chat panel */}
      <div className='absolute bottom-0 left-[316px] z-10 right-0 h-[100px] border-t border-gray-800 flex px-20 justify-between items-center'>
          <div className='flex gap-4 items-center flex-1'>
            <Label className='text-utils-BG h-[48px] w-[48px] bg-utils-white rounded-full pt-4'>images
              <Input type="file" className='hidden'/>
            </Label>
            <Input type="text" placeholder="Messege here..." className='text-gray-500 font-bold text-Body2 bg-utils-BG border-none'/>
          </div>
          <div className='flex-1 flex w-full justify-end items-center'>
              <button className='text-white rotate-45 p-3 bg-red-500 rounded-full hover:scale-105 transition-all hover:shadow-md'>
                <Send/>
              </button>
          </div>
      </div>
    </>
  )
}
