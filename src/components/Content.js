import React from 'react'
import Button from './Button'

const Content = () => {
    return (
    <div className='flex flex-col text-center items-center mx-10 mt-20'>
        <h1 className='text-4xl font-logo'>The modern way to manage your money</h1>
        <p className='my-6 leading-loose'>Managing money can be complicated. Track all of your accounts in one place, 
            collaborate with a partner, and create a long term plan to achieve your goals. 
            Get personalized advice along the way.</p>
        <Button text='Sign up now'/>
    </div> );
}
 
export default Content;