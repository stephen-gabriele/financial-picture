import React from 'react'
import Title from './Title'
import ParagraphText from './ParagraphText'
import Button from './Button'

const Section = ({title='Section Title', image, isReversed=false, children}) => {
  return ( 

  <div className='flex flex-col lg:flex-row justify-center content-center mt-32 mx-auto'>
    <img src={image} className={`sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-sm sm:mx-auto ${isReversed && 'order-last'}`}  />
    <div>
      <div className='flex bg-rose-100 text-red-500 text-4xl w-16 h-16 mx-auto rounded-full mb-8 mt-16 justify-center items-center' >
        $
      </div>
      <Title>{title}</Title>
      <ParagraphText>
        {children}
      </ParagraphText>
      <div className='flex space-x-5 justify-center'>
        <Button text='Sign up now' />
        <Button theme='secondary' text='Learn more' />
      </div>
    </div>
  </div> );
}
 
export default Section;