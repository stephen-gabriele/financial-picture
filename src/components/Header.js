import React from 'react'
import Button from './Button'

const Header = () => {
    return ( 
        <header className='flex justify-between items-center p-5'>
            <div className='flex justify-between items-center'>
                <h2 className=''>Monarch</h2>
            </div>
            <Button text='Sign up' className=''/>
        </header>
    );
}
 
export default Header;