import React from 'react'
import { IPSearch } from './IPSearch'

export const Header = () => {
  return (
    <header className="sm:h-[17.5rem] h-[18.75rem] w-full sm:bg-[url('assets/pattern-bg-desktop.png')] bg-[url('assets/pattern-bg-mobile.png')] bg-no-repeat bg-cover flex flex-col items-center gap-8 relative z-0">
      <h1 className='sm:mt-8 mt-6 sm:text-3xl text-2xl font-bold text-white'>IP Address Tracker</h1>
      <IPSearch />
    </header>
  )
}
