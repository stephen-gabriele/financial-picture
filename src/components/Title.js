import React from 'react'

const Title = (props) => {
    return ( 
        <div className='text-5xl font-logo mt-20'>
            {props.children}
        </div>
     );
}
 
export default Title;