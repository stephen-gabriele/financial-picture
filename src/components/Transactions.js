import React from 'react'
// import transactionData from '../transactions'

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
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date,
    "category" : "Gas",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
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
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date,
    "category" : "Gas",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date,
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 }}
  }
  ]

  const transactionChart = transactionData.map((transaction) => {
    return (<tr>
        <td className='py-4'>{transaction.title}</td>
        <td>{transaction.date.toDateString()}</td>
        <td>{transaction.category}</td>
        <td>{transaction.location.city}</td>
        <td>${transaction.amount}</td>
      </tr>)
  })
  return ( <div className="py-32 bg-slate-100 text-center">
    <div class="flex flex-col px-96 mx-auto">
      <table className='table-auto border border-slate-400'>
        <thead>
          <tr>
            <th className='py-2'>Title</th>
            <th>Date</th>
            <th>Category</th>
            <th>Location</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-slate-200'>
          {transactionChart}
        </tbody>
      </table>
    </div>
  </div> );
}
 
export default Transactions;