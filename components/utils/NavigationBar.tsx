import React from 'react'
import Logo from './Logo'
import Button from './Button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <nav className='h-[88px] bg-white shadow-md flex md:justify-around max-md:justify-between max-md:p-4 items-center sticky top-0 w-full z-50'>
      <div>
        {/* Logo */}
        <Logo/>
      </div>
      <div className='flex justify-between] items-center max-md:hidden'>
        <div className='flex'>
          <a href='#' className='py-8 px-6 text-red-700 font-bold'>
            Why Merry Match?
          </a>
          <a href='#' className='py-8 px-6 text-red-700 font-bold'>
            How to Merry
          </a>
        </div>
        <div>
          <Link href='/auth/login'>
            <Button label={'Login'} disable={false}/>
          </Link>
        </div>
      </div>
      <div className='md:hidden'>
        <button>
          <MenuIcon width={24} hanging={24}/>
        </button>
      </div>
    </nav>
  )
}
