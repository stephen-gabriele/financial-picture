import React from 'react'
import TransactionHeaderItem from './TransactionHeaderItem';

const TransactionHeader = ({activeSort, sortData}) => {
  return ( 
  <thead>
    <tr className='py-2 px-4 bg-white border-b border-slate-300 grid grid-cols-6 items-center'>
      <TransactionHeaderItem sortData={sortData} activeSort={activeSort}>Date</TransactionHeaderItem>
      <TransactionHeaderItem sortData={sortData} activeSort={activeSort}>Title</TransactionHeaderItem>
      <TransactionHeaderItem sortData={sortData} activeSort={activeSort}>Location</TransactionHeaderItem>
      <TransactionHeaderItem sortData={sortData} activeSort={activeSort}>Category</TransactionHeaderItem>
      <TransactionHeaderItem sortData={sortData} activeSort={activeSort}>Amount</TransactionHeaderItem>
      <th>Tags</th>
    </tr>
  </thead> );
}
 
export default TransactionHeader;