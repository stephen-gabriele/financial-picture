import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({onClose, modalIsOpen, children}) => {
  if (!modalIsOpen) return null

  let menuRef = useRef()

  // handleOutsideClick = (event) => {
  //     console.log('looping?')
  //     if (!menuRef.current.contains(event.target)) console.log('')//onClose()
  //   }

  return ReactDOM.createPortal( 
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-white/50 z-20'>
      <div ref={menuRef} className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-16 z-20'>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.getElementById('portal') );
}
 
export default Modal;