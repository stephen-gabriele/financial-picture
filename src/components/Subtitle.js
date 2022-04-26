import React from 'react'

const Subtitle = (props) => {
    return ( 
        <div className='text-4xl font-logo mt-20'>
            {props.children}
        </div>
     );
}
 
export default Subtitle;