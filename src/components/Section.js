import React from 'react'
import Title from './Title'
import ParagraphText from './ParagraphText'
import Button from './Button'

const Section = (props) => {
  return ( 

  <div className='flex-col justify-center content-center mt-32'>
    <img src={props.image} />
    <div className='flex bg-rose-100 text-red-500 text-4xl w-16 h-16 mx-auto rounded-full mb-8 mt-16 justify-center items-center' >
      $
    </div>
    <Title>{props.title}</Title>
    <ParagraphText>
      {props.children}
    </ParagraphText>
    <div className='flex space-x-5 justify-center'>
      <Button text='Sign up now' />
      <Button theme='secondary' text='Learn more' />
    </div>
  </div> );
}
 
export default Section;