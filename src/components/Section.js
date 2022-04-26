import React from 'react'
import Title from './Title'
import ParagraphText from './ParagraphText'
import Button from './Button'

const Section = (props) => {
  return ( 

  <div className='flex-col justify-center content-center mt-4'>
    <img src={props.image} />
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