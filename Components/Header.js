import React from 'react'
import Image from 'next/image'
import AirBnbLogo from '../assets/Airbnb_Logo.png'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-lg md:px-10">
      {/* left div */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src={AirBnbLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*  middle div - search*/}
      <div className="flex items-center rounded-full py-2 text-sm text-gray-600 placeholder-gray-400 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="start your search"
          className="flex-grow bg-transparent pl-5 outline-none"
        />
        <SearchIcon className=" hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className='hidden md:inline'>Become a host </p>
        <GlobeAltIcon className="h-6" />
        <div className=" flex rounded-full p-2 items-center border-2">
            <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
    </header>
  )
}

export default Header
