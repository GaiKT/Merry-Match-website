import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className='flex justify-center items-center gap-1'>
          <span className='font-extrabold text-util-black text-Headline3'>
              Merry 
          </span>
          <span className='font-extrabold text-red-500 text-Headline3 '>
              Match
          </span>  
      </div>
    </Link>
  )
}
