import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({onClose, modalIsOpen, children}) => {
  if (!modalIsOpen) return null
  return ReactDOM.createPortal( 
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-white/50 z-20'>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-16 z-20'>
        {children}
      </div>
    </div>,
    document.getElementById('portal') );
}
 
export default Modal;