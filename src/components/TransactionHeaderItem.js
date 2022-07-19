import React from "react"

const TransactionHeaderItem = ({children, sortData, activeSort}) => {
  return ( 
  <th className='cursor-pointer' onClick={() => sortData(children.toLowerCase())}>
    {children}
    <span className={`${(activeSort.sortBy !== children.toLowerCase()) && 'hidden'}`}>
      {!activeSort.inverse ? '▼' : '▲'}
    </span> 
  </th> 
);
}
 
export default TransactionHeaderItem;