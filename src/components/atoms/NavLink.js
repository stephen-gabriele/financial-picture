import React from 'react'

const NavLink = ({onClick, className = '', size = 'md', children}) => {

  const defaults = 'mr-4 transition ease-in-out delay-50 hover:text-orange-500 active:text-orange-700 hover:cursor-pointer'

  const sizes = {
    lg: 'text-lg pt-2',
    md: 'text-base pt-2',
    sm: 'text-sm pt-1'
  }
  return <div onClick={onClick} className={`${defaults} ${sizes[size]} ${className}`}>
    {children}
  </div>
}

export default NavLink
