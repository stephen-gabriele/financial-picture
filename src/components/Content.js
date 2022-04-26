import React from 'react'
import Button from './Button'
import Card from './Card'
import Subtitle from './Subtitle'
import Title from './Title'
import ParagraphText from './ParagraphText'
import Section from './Section'

import {
  AdsImg,
  AppstoreImg,
  BudgetImg,
  BusinessInsiderImg,
  CollaborateImg,
  CustomizeImg,
  FastCompanyImg,
  FintechImg,
  GooglePlayImg,
  InvestmentsImg,
  PersonalizedImg,
  PlanImg,
  SecurityImg,
  SpendingImg,
  TechCrunchImg,
  UnderstandAndGrowImg,
  LaptopImg
} from '../images'

const Content = () => {
  return (
  <div className='flex flex-col text-center items-center mx-10 mt-20'>
    <Title>The modern way to manage your money</Title>
    <ParagraphText>Managing money can be complicated. Track all of your 
      accounts in one place, collaborate with a partner, and create a 
      long term plan to achieve your goals. Get personalized advice 
      along the way.</ParagraphText>
    <Button text='Sign up now'/>
    
    <img src={LaptopImg}/>

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
    <Card name='Joshua W.' review='I tried YNAB, I tried Mint, I use Monarch. Soooo much more intuitive and the UI/UX is delightful.'/>
    <Card name='Stephen C.' review='Its beautifully designed and it just works, as advertised; Significantly fewer syncing issues than its competitors.'/>
    <Card name='Aaron V.' review='Makes it easy to see all my spending across accounts, with no ads and no unwanted advisors calling me.'/>

    <div className='flex-col my-16'>
      <img src={FintechImg} className='w-3/4'/>
      <img src={TechCrunchImg} className='w-3/4'/>
      <div className='flex w-full justify-center mb-8'>
        <img src={BusinessInsiderImg} className='w-1/2'/>
        <img src={FastCompanyImg} className='w-1/2'/>
      </div>
      <div className='flex justify-center'>
        <img src={AppstoreImg} className='w-1/3 mr-4'/>
        <img src={GooglePlayImg} className='w-1/3'/>
      </div>
    </div>

    <Section title='Understand and grow your net worth' image={UnderstandAndGrowImg}>
      The first step to financial health is knowing where you stand. 
      Monarch syncs with 11,200+ financial institutions, so you'll always have 
      a complete and up-to-date view of your assets, liabilities, and 
      spending.
    </Section>

    <Section title='Collaborate with a partner securely' image={CollaborateImg}>
      Invite a partner to join your finances without the hassle of 
      switching banks. They'll get their own login, and you'll both get a 
      shared view of what's happening with your money.
    </Section>

    <Section title='Get personalized advice' image={PersonalizedImg}>
      Answer a few key questions about yourself to get advice on how 
      to build financial resilience and make progress toward your goals.
    </Section>

    <Section title='Track all of your investments in one place' image={InvestmentsImg}>
      Know exactly what you're invested in and how your portfolio is 
      performing by syncing your investment holdings into one central view.
    </Section>

    <Section title='Fully customize your dashboard and charts' image={CustomizeImg}>
      Use our beautiful reports, charts, and visualizations to identify 
      trends in your finances, like how you much you’re saving and spending each month. 
      Customize the layout to focus on what matters to you.
    </Section>

    <Section title='Budget the way you want and stay on track' image={BudgetImg}>
      Setup a budget to automatically monitor your spending and stay on 
      track with your goals. We'll notify you when you go over budget and help you 
      get back on track.
    </Section>

    <Section title='Stay on top of your spending' image={SpendingImg}>
      See a breakdown of where your money is going so you know how to 
      improve. Easily identify subscriptions you no longer want, and catch fraud 
      quickly with transaction notifications.
    </Section>

    <Section title='Create a plan to achieve your financial goals' image={PlanImg}>
      Track all of your financial goals and create a plan to achieve 
      them. If you get off track, no problem! We'll always help you get back on 
      track when life happens.
    </Section>

    <Section title='Security you can trust' image={SecurityImg}>
      Monarch protects your data with bank-level security. Your login details are 
      never stored and access to your accounts is limited to read-only, we cannot 
      move your money.
    </Section>

    <Section title='Focus on your financial health, not on ads' image={AdsImg}>
      At Monarch, we're committed to building the best product to improve your 
      financial life. That means an uncluttered experience with no distracting 
      ads, and we'll never sell your financial data to third parties.
    </Section>

    <div className='bg-slate-800 text-white mt-32 pb-32'>
      <Subtitle>The modern way to manage your money</Subtitle>
        <ParagraphText>Managing money can be complicated. Track all of your 
          accounts in one place, collaborate with a partner, and create a 
          long term plan to achieve your goals. Get personalized advice 
          along the way.</ParagraphText>
      <Button text='Sign up now'/>
    </div>

  </div> );
}
 
export default Content;