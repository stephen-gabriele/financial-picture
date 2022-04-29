import React from 'react'
import {
  AppstoreImg,
  GooglePlayImg,
} from '../images'

const Footer = () => {
  return ( 
    <footer className='mb-32'>
      <div className='flex justify-center items-center mt-16 hover:cursor-pointer'>
        <i className="fa-solid fa-user-astronaut text-4xl text-rose-400 mr-4"></i>
        <h2 className='font-logo text-5xl text-blue-900'>Monarch</h2>
      </div>

      <div className='flex justify-center m-8'>
        <img src={AppstoreImg} className= 'mr-4 hover:cursor-pointer'/>
        <img src={GooglePlayImg} className='hover:cursor-pointer'/>
      </div>

      <div className='flex justify-center'>
        <div className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`} >
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`} >
          <i class="fa-brands fa-reddit"></i>
        </div>
        <div className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`} >
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`} >
          <i class="fa-brands fa-linkedin"></i> 
        </div>
      </div>

      <div className='mt-16'>

      </div>

    </footer>
   );
}
 
export default Footer;