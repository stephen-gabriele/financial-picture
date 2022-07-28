import React, { useRef, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../../Contexts/ModalContext'

const Modal = () => {
  const {modalContent, modalIsOpen, closeModal} = useContext(ModalContext)
  
  let menuRef = useRef()

  const handleOutsideClick = (event) => {
    if (!menuRef.current.contains(event.target)) closeModal()
  }

  if (!modalIsOpen) return null

  return ReactDOM.createPortal( 
    <div onMouseDown={(e) => handleOutsideClick(e)} className='fixed top-0 left-0 right-0 bottom-0 bg-white/75 z-20'>
      <div ref={menuRef} className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-16 z-20 rounded-lg'>
        {modalContent}
      </div>
    </div>,
    document.getElementById('portal') );
}
 
export default Modal;