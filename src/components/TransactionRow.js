import React from "react"
import TagContainer from "./TagContainer"
import TransactionCategorySelector from "./TransactionCategorySelector"

const TransactionRow = ({transaction, transactionIndex, setTransactionData}) => {
  return ( 
  <tr className='p-4 border-b border-slate-200 grid grid-cols-6 items-center'>
    <td>
      { 
      `${new Date(transaction.date).getMonth()
      }/${new Date(transaction.date).getDate()
      }/${new Date(transaction.date).getFullYear()
      }`}
    </td>
    <td>{transaction.title}</td>
    <td>{transaction.location.city}</td>
    <td>
      <TransactionCategorySelector 
      transaction={transaction} 
      setTransactionData={setTransactionData}/>
    </td>
    <td>${transaction.amount}</td>
    <td>
      <TagContainer 
      transactionIndex={transactionIndex} 
      tags={transaction.tags} 
      setTransactionData={setTransactionData}
      />
    </td>
  </tr> 
  );
}
 
export default TransactionRow;