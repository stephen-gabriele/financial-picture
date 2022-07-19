import React from 'react'
import Title from './Title'
import TransactionChart from './TransactionChart'

const Transactions = () => {

  return ( 
    <div className="py-32 bg-slate-100">
      <div className = 'flex flex-col w-2/3 mx-auto'>
        <Title>Transactions</Title>
        <TransactionChart  />
      </div>
    </div> );
}
 
export default Transactions;