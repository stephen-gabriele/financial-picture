import React from 'react'

const FooterElement = ({ className = '', children }) => {
  return ( 
    <p className={`text-lg leading-loose hover:text-orange-500 hover:cursor-pointer ${className}`}>
      {children}
    </p>
   );
}
 
export default FooterElement;