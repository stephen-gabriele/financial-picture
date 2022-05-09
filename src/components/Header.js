import React, {useContext, useEffect} from 'react'
import Button from './Button'
import HeaderMenuItem from './HeaderMenuItem'
import { ModalContext } from '../Contexts/ModalContext'

const Header = ({ toggleMenu }) => {
  const {modalContent, modalIsOpen, setModal, openModal, closeModal} = useContext(ModalContext)
  
  const openSignUpModal = () => {
    setModal(<div>Sign Up Modal</div>)
    openModal()
  }

  return (
    <header className=' px-6 py-3 border-b sticky top-0 bg-slate-50 opacity-95 z-10'>
      <div className='mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-between items-center'>
        <div className='flex justify-between items-center hover:cursor-pointer'>
          <i className='fa-solid fa-user-astronaut text-3xl text-rose-400 mr-2'></i>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        <ul className='hidden md:flex'>
          <HeaderMenuItem>Features</HeaderMenuItem>
          <HeaderMenuItem>Download</HeaderMenuItem>
          <HeaderMenuItem>Pricing</HeaderMenuItem>
          <HeaderMenuItem>Resources</HeaderMenuItem>
          <HeaderMenuItem>Company</HeaderMenuItem>
        </ul>
        <div className='flex justify-between items-center'>
          <Button size='sm' text='Log in' theme='secondary' className='hidden lg:block mr-2'/>
          <Button size='sm' text='Sign up' onClick={openSignUpModal}/>
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
