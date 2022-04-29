import React from 'react'

const Button = ({
  className = '',
  text = 'Button Text',
  theme = 'primary',
  size = 'medium',
  handleClick
}) => {
  const themeDefaults = `rounded-full 
    transition ease-in-out delay-100 font-bold
    hover:scale-105
    hover:drop-shadow-md`

  const primaryTheme = ` bg-rose-400 text-white 
    hover:bg-rose-500`

  const secondaryTheme = `bg-slate-50 text-black drop-shadow
    hover:bg-white`

  const largeSize = 'text-xl px-9 py-3'

  const mediumSize = 'text-base px-8 py-3'

  const smallSize = 'text-sm px-6 py-2'

  return (
    <button
      onClick={handleClick}
      className={`${themeDefaults} 
        ${theme === 'secondary' ? secondaryTheme : primaryTheme} 
        ${size === 'large' && largeSize} ${size === 'small' && smallSize} ${
        size === 'medium' && mediumSize
      }
        ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
