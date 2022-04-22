import React from 'react'

const Card = ({name='User Name', review='User Review', stars=5}) => {
    let starArray = new Array(stars).fill('★')
    return ( 
    <div className='bg-white border p-6 text-left drop-shadow-xl mt-8 w-full'>
        <p>{review}</p>
        <div className='flex justify-between mt-4'>
            <p className='font-bold'>{name}</p>
            <p>{starArray}</p>
        </div>
    </div> 
    );
}
 
export default Card;