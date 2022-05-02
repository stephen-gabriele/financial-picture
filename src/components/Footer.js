import React from 'react'
import { AppstoreImg, GooglePlayImg } from '../images'
import ParagraphText from './ParagraphText'
import FooterElement from './FooterElement'

const Footer = () => {
  return (
    <footer className='mb-32 flex flex-col lg:flex-row lg:max-w-screen-lg lg:mx-auto'>
      <div className='flex flex-col items-center lg:items-start lg:ml-20'>
        <div className='flex mt-16 hover:cursor-pointer'>
          <i className='fa-solid fa-user-astronaut text-4xl text-rose-400 mr-4'></i>
          <h2 className='font-logo text-5xl text-blue-900'>Monarch</h2>
        </div>

        <div className='flex mt-8'>
          <img src={AppstoreImg} className='mr-4 hover:cursor-pointer' />
          <img src={GooglePlayImg} className='hover:cursor-pointer' />
        </div>

        <div className='flex mt-8'>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-twitter'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-reddit'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-facebook'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-linkedin'></i>
          </div>
        </div>
      </div>
      <div className='mt-4 lg:mt-8 flex flex-col lg:flex-row text-center lg:text-left'>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Category 1</ParagraphText>
          <FooterElement>Thing</FooterElement>
          <FooterElement>Other Thing</FooterElement>
          <FooterElement>Thing</FooterElement>
          <FooterElement>French Fry</FooterElement>
          <FooterElement>Thing</FooterElement>
          <FooterElement>Quadruple</FooterElement>
          <FooterElement>Thing</FooterElement>
        </div>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Category 1</ParagraphText>
          <FooterElement>What's New</FooterElement>
          <FooterElement>Dwonload</FooterElement>
          <FooterElement>Pricing</FooterElement>
          <FooterElement>Thing</FooterElement>
          <FooterElement>Help</FooterElement>
          <ParagraphText className='font-bold mt-4'>Category 1</ParagraphText>
          <FooterElement>Someone Please Help</FooterElement>
          <FooterElement>Thing</FooterElement>
          <ParagraphText className='font-bold mt-4'>Category 1</ParagraphText>
          <FooterElement>Thing</FooterElement>
          <FooterElement>About</FooterElement>
          <FooterElement>Help Me God</FooterElement>
          <FooterElement>Thing</FooterElement>
        </div>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Category 1</ParagraphText>
          <FooterElement>About</FooterElement>
          <FooterElement>Thing</FooterElement>
          <FooterElement>Blog</FooterElement>
          <FooterElement>Contact Us</FooterElement>
          <ParagraphText className='font-bold mt-4'>Category 1</ParagraphText>
          <FooterElement>Thing</FooterElement>
          <FooterElement>Terms of Service</FooterElement>
        </div>
      </div>
    </footer>
  )
}

export default Footer
