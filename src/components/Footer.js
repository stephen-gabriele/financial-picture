import React from 'react'
import {
  AppstoreImg,
  GooglePlayImg,
} from '../images'

const Footer = () => {
  return ( 
    <footer>
      <div className='flex justify-center my-16'>
        <h2 className='font-logo text-5xl text-rose-400 mr-2'>$</h2>
        <h2 className='font-logo text-5xl text-blue-900'>Monarch</h2>
      </div>
      <div className='flex justify-center mb-12'>
        <img src={AppstoreImg} className='w-1/3 mr-4'/>
        <img src={GooglePlayImg} className='w-1/3'/>
      </div>
      <h2 className='text-center mb-16'>About</h2>
    </footer>
   );
}
 
export default Footer;