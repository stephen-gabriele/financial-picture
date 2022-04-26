import React from 'react'

const ParagraphText = (props) => {
    return ( 
    <p className='my-6 leading-loose'>
        {props.children}
    </p> );
}
 
export default ParagraphText;