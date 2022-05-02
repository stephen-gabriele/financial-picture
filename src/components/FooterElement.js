import React from 'react'

const FooterElement = ({ className = '', children }) => {
  return ( 
    <p className={`mt-2 text-lg leading-loose transition ease-in-out delay-50 hover:text-orange-500 active:text-orange-700 hover:cursor-pointer ${className}`}>
      {children}
    </p>
   );
}
 
export default FooterElement;