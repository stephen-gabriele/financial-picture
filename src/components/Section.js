import React from 'react'
import Title from './Title'
import ParagraphText from './ParagraphText'
import Button from './Button'

const Section = ({
  title = 'Section Title',
  image,
  isReversed = false,
  svg = <i className='fa-solid fa-layer-group'></i>,
  children
}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-center content-center mt-16'>
      <img
        src={image}
        className={`sm:max-w-[620px] md:max-w-[750px] lg:max-w-screen-sm sm:mx-auto ${
          isReversed ? 'lg:order-last' : ''
        }`}
      />
      <div>
        <div
          className={`flex bg-rose-100 text-red-500 text-2xl w-16 h-16 mr-auto ml-auto rounded-full mb-8 mt-16 justify-center items-center ${
            isReversed ? 'lg:mr-0' : 'lg:ml-0'
          }`}
        >
          {svg}
        </div>
        <Title className={isReversed ? 'lg:text-right' : 'lg:text-left'}>{title}</Title>
        <ParagraphText className={isReversed ? 'lg:text-right' : 'lg:text-left'}>
          {children}
        </ParagraphText>
        <div className='flex space-x-5 justify-center lg:justify-start'>
          <Button text='Sign up now' />
          <Button theme='secondary' text='Learn more' />
        </div>
      </div>
    </div>
  )
}

export default Section
