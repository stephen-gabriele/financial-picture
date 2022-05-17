import React from 'react'

const HeaderMenuItem = (props) => {
  return <div onClick={props.onClick} className='mr-4 transition ease-in-out delay-50 hover:text-orange-500 active:text-orange-700 hover:cursor-pointer'>{props.children}</div>
}

export default HeaderMenuItem
