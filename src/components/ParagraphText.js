import React from 'react'

const ParagraphText = ({className='', children}) => {
    return ( 
    <p className={`text-lg my-6 leading-loose ${className}`}>
        {children}
    </p> );
}
 
export default ParagraphText;