import React from 'react'
import MobileMenuDivider from './MobileMenuDivider'
import MobileMenuItem from './MobileMenuItem'

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className='z-20 bg-white w-full h-full fixed top-0 left-0'>
      <div className=' px-8 py-4 border-b top-0 bg-white z-10 flex justify-between items-center drop-shadow-lg'>
        <div className='flex items-center content-center'>
          <i className='fa-solid fa-user-astronaut text-3xl text-rose-400 mr-2'></i>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        <div className='hover:cursor-pointer' onClick={toggleMenu}>
          <i class='fa-solid fa-x text-xl '></i>
        </div>
      </div>
      <div>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuDivider>Features</MobileMenuDivider>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuDivider>Resources</MobileMenuDivider>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
      </div>
    </div>
  )
}

export default MobileMenu
