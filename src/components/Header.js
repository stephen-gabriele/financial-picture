import React from 'react'
import Button from './Button'

const Header = () => {
  return ( 
    <header className='flex justify-between items-center px-6 py-3 border-b sticky top-0 bg-slate-50 opacity-95'>
      <div className='flex justify-between items-center'>
        <h2 className='font-logo text-3xl text-rose-400 mr-2'>$</h2>
        <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
      </div>
      <div className='flex justify-between items-center'>
        <Button size='small' text='Sign up' />
        <div className='ml-3 h-1/2 flex-col'>
          <div className='w-5 h-0.5 bg-blue-900'></div>
          <div className='w-5 h-0.5 bg-blue-900 my-1'></div>
          <div className='w-5 h-0.5 bg-blue-900'></div>
        </div>
      </div>
    </header>
    );
}
 
export default Header;