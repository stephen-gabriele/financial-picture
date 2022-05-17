import React, {useContext, useEffect} from 'react'
import Button from './Button'
import HeaderMenuItem from './HeaderMenuItem'
import { ModalContext } from '../Contexts/ModalContext'
import { AppContext } from '../Contexts/AppContext'
import SignUpModalContent from './SignUpModalContent'
import LogInModalContent from './LogInModalContent'
import { useNavigate } from 'react-router-dom'

const Header = ({ toggleMenu }) => {
  const {setModal, openModal} = useContext(ModalContext)
  const {globalState} = useContext(AppContext)
  let navigate = useNavigate()
  
  const openSignUpModal = () => {
    setModal(<SignUpModalContent />)
    openModal()
  }

  const openLogInModal = () => {
    setModal(<LogInModalContent/>)
    openModal()
  }

  return (
    <header className=' px-6 py-3 border-b sticky top-0 bg-slate-50 opacity-95 z-10'>
      <div className='mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-between items-center'>
        <div className='flex justify-between items-center hover:cursor-pointer' onClick={()=> globalState.isLoggedIn ? navigate('/dashboard') : navigate('/')}>
          <i className='fa-solid fa-user-astronaut text-3xl text-rose-400 mr-2'></i>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        <ul className='hidden md:flex'>
          <HeaderMenuItem onClick={() => navigate('/features')}>Features</HeaderMenuItem>
          <HeaderMenuItem onClick={() => navigate('/features')}>Download</HeaderMenuItem>
          <HeaderMenuItem onClick={() => navigate('/features')}>Pricing</HeaderMenuItem>
          <HeaderMenuItem onClick={() => navigate('/features')}>Resources</HeaderMenuItem>
          <HeaderMenuItem onClick={() => navigate('/features')}>Company</HeaderMenuItem>
        </ul>
        <div className='flex justify-between items-center'>
          {!globalState.isLoggedIn && <Button size='sm' text='Log in' theme='secondary' className='hidden lg:block mr-2' onClick={openLogInModal}/>}
          {!globalState.isLoggedIn && <Button size='sm' text='Sign up' onClick={openSignUpModal}/>}
          {globalState.isLoggedIn && <Button size='sm' text='Your account' onClick={()=> navigate('/dashboard')}/>}
          <div
            className='flex ml-3 h-1/2 flex-col hover:cursor-pointer md:hidden'
            onClick={toggleMenu}
          >
            <div className='w-5 h-0.5 bg-blue-900'></div>
            <div className='w-5 h-0.5 bg-blue-900 my-1'></div>
            <div className='w-5 h-0.5 bg-blue-900'></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
