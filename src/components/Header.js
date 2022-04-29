import React from 'react'
import Button from './Button'
import HeaderMenuItem from './HeaderMenuItem';

const Header = ({toggleMenu}) => {

  return ( 
    <header className=' px-6 py-3 border-b sticky top-0 bg-slate-50 opacity-95 z-10'>
      <div className='mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          <h2 className='font-logo text-3xl text-rose-400 mr-2'>$</h2>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        <ul className='hidden md:flex'>
          <HeaderMenuItem>Features</HeaderMenuItem>
          <HeaderMenuItem>Download</HeaderMenuItem>
          <HeaderMenuItem>Pricing</HeaderMenuItem>
          <HeaderMenuItem>Resources</HeaderMenuItem>
          <HeaderMenuItem>Company</HeaderMenuItem>
        </ul>
        <div className='flex justify-between items-center'>
          <Button size='small' text='Sign up' />
          <div className='ml-3 h-1/2 flex-col hover:cursor-pointer' onClick={toggleMenu}>
            <div className='w-5 h-0.5 bg-blue-900'></div>
            <div className='w-5 h-0.5 bg-blue-900 my-1'></div>
            <div className='w-5 h-0.5 bg-blue-900'></div>
          </div>
        </div>
      </div>
    </header>
    );
}
 
export default Header;