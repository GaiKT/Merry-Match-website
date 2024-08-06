import React from 'react'
import Logo from './Logo'
import Fb from '@/asset/icon-merrymatch/fb.svg'
import Ig from '@/asset/icon-merrymatch/ig.svg'
import Tw from '@/asset/icon-merrymatch/tw.svg'

export default function Footer() {
  return (
    <section className='h-[371px] flex justify-center items-center bg-gray-100'>
      <div className='h-[275px] flex flex-col justify-between items-center w-9/12'>
        <div className='flex flex-col items-center justify-center'>
          <Logo/>
          <p className='text-Body1 text-gray-700 font-semibold'>New generation of online dating website for everyone</p>
        </div>
        <div className='flex flex-col gap-6 p-6 items-center w-full border border-gray-100 border-t-gray-300 '>
          <p className='text-Body3 text-gray-600 font-medium'>copyright ©2024 merrymatch.com All rights reserved</p>
          <div className='flex gap-4'>
            <Fb/>
            <Ig/>
            <Tw/>
          </div>
        </div>
      </div>
    </section>
  )
}
