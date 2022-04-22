import React from 'react'

const Button = ({className = '', text = 'Button Text', theme= '', handleClick}) => {

    const themeDefaults = `rounded-full px-8 py-2
    transition ease-in-out delay-100 font-bold
    hover:scale-105
    hover:drop-shadow-md`

    const primaryTheme = ` bg-rose-400 text-white 
    hover:bg-rose-500`

    const secondaryTheme = `bg-slate-50 text-black drop-shadow
    hover:bg-white`

    return (
        <button 
        onClick={handleClick}
        className={`${themeDefaults} ${theme==='secondary' ? secondaryTheme : primaryTheme} ${className}`}>
            {text}
        </button>
    );
}
 
export default Button;