import React from 'react'

const Subtitle = ({className='', children}) => {
    return ( 
        <div className={`text-4xl font-logo mt-20 ${className}`}>
            {children}
        </div>
     );
}
 
export default Subtitle;