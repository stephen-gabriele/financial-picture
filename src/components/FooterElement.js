import React from 'react'

const FooterElement = ({ className = '', children }) => {
  return ( 
    <p className={`mt-2 text-lg leading-loose transition ease-in-out delay-100 hover:text-orange-500 hover:cursor-pointer ${className}`}>
      {children}
    </p>
   );
}
 
export default FooterElement;