import React from 'react'
// import transactionData from '../transactions.json'

const Transactions = () => {
  
  const transactionData = [
    {
    "title" : "LNO MANGMT COMPANY",
    "amount" : 1000,
    "date" : new Date,
    "category" : "Rent",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 } }
  },
  {
    "title" : "Joe's Grocery",
    "amount" : 42.16,
    "date" : new Date,
    "category" : "Grocery",
    "location" : { "_id": 1, "city": "Nevada", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Albuquerque", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date,
    "category" : "Gas",
    "location" : { "_id": 1, "city": "New York", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Diego", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "LNO MANGMT COMPANY",
    "amount" : 1000,
    "date" : new Date,
    "category" : "Rent",
    "location" : { "_id": 1, "city": "Austin", "loc": { "x": -73.974, "y": 40.764 } }
  },
  {
    "title" : "Joe's Grocery",
    "amount" : 42.16,
    "date" : new Date,
    "category" : "Grocery",
    "location" : { "_id": 1, "city": "Quebec", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Des Moines", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date,
    "category" : "Gas",
    "location" : { "_id": 1, "city": "St. Louis", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Sparta", "loc": { "x": -73.974, "y": 40.764 }}
  }
  ]

  const transactionChart = transactionData.map((transaction) => {
    return (<tr className='contents'>
        <td className='py-4 border-b border-slate-200'>{transaction.title}</td>
        <td className='py-4 border-b border-slate-200'>{transaction.date.toDateString()}</td>
        <td className='py-4 border-b border-slate-200'>{transaction.category}</td>
        <td className='py-4 border-b border-slate-200'>{transaction.location.city}</td>
        <td className='py-4 border-b border-slate-200'>${transaction.amount}</td>
      </tr>)
  })
  return ( <div className="py-32 bg-slate-100 text-center">
    <div class="flex flex-col px-96 mx-auto">
      <table className='table-auto border border-slate-400 grid grid-cols-5 items-center bg-slate-50 '>
        <thead className='contents'>
          <tr className='contents'>
            <th className='py-2 bg-white border-b border-slate-300'>Title</th>
            <th className='py-2 bg-white border-b border-slate-300'>Date</th>
            <th className='py-2 bg-white border-b border-slate-300'>Category</th>
            <th className='py-2 bg-white border-b border-slate-300'>Location</th>
            <th className='py-2 bg-white border-b border-slate-300'>Amount</th>
          </tr>
        </thead>
        <tbody className='contents'>
          {transactionChart}
        </tbody>
      </table>
    </div>
  </div> );
}
 
export default Transactions;