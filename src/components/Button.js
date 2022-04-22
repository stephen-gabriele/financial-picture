import React from 'react'

const Button = ({text = 'Button Text', theme= 'primary', handleClick}) => {

    const primaryTheme = `rounded-full bg-rose-400 px-8 py-2 text-white 
    transition ease-in-out delay-100 font-bold
    hover:bg-rose-500 hover:scale-105
    hover:drop-shadow-md`

    const secondaryTheme = `rounded-full bg-slate-50 px-8 py-2 text-black 
    transition ease-in-out delay-100 border drop-shadow font-bold
    hover:bg-white hover:scale-105
    hover:drop-shadow-md`

    return ( <div> 
        <button 
        onClick={handleClick}
        className={theme==='primary' ? primaryTheme : secondaryTheme}>
            {text}
        </button>
    </div> );
}
 
export default Button;