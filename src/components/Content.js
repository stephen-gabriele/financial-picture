import React from 'react'
import Button from './Button'
import Card from './Card'
import Subtitle from './Subtitle'
import Title from './Title'
import ParagraphText from './ParagraphText'
import MyImage from '../../asset/resource/unknown.png'

const Content = () => {
    return (
    <div className='flex flex-col text-center items-center mx-10 mt-20'>
        <Title>The modern way to manage your money</Title>
        <ParagraphText>Managing money can be complicated. Track all of your 
            accounts in one place, collaborate with a partner, and create a 
            long term plan to achieve your goals. Get personalized advice 
            along the way.</ParagraphText>
        <Button text='Sign up now'/>
        
        <img src={MyImage}/>

        <Subtitle>What people are saying about Monarch</Subtitle>
        <div className='flex justify-between items-center mt-9 font-bold text-xs'>
            <div className='bg-amber-300 px-4 py-1 mr-3 rounded-full'>★ 4.8</div>
            <div>ON THE APP STORE</div>
        </div>
        <div className='flex justify-between items-center mt-5 font-bold text-xs'>
            <div className='bg-amber-300 px-4 py-1 mr-3 rounded-full'>★ 4.8</div>
            <div>ON GOOGLE PLAY</div>
        </div>
        <Card name='Andy P.' review='This is the best app i have ever used and I want to marry the devs'/>
        <Card />
        <Card />
        <Card />
    </div> );
}
 
export default Content;