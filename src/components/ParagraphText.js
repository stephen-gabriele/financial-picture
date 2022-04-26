import React from 'react'

const ParagraphText = (props) => {
    return ( 
    <p className='text-lg my-6 leading-loose'>
        {props.children}
    </p> );
}
 
export default ParagraphText;