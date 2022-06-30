import React, {useState} from 'react'
import Title from './Title'
// import {transactionData} from '../transactions.json'

const Transactions = () => {
  const [formData, setFormData] = useState(
    {query: "", queryValid: true}
  )

  const [transactionData, setTransactionData] = useState([
    {
    "title" : "LNO MANGMT COMPANY",
    "amount" : 1000,
    "date" : new Date(2011,10,1),
    "category" : "Rent",
    "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 } }
  },
  {
    "title" : "Joe's Grocery",
    "amount" : 42.16,
    "date" : new Date(2011,10,2),
    "category" : "Grocery",
    "location" : { "_id": 1, "city": "Nevada", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date(2011,10,3),
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Albuquerque", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date(2011,10,4),
    "category" : "Gas",
    "location" : { "_id": 1, "city": "New York", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date(2011,10,5),
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "San Diego", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "LNO MANGMT COMPANY",
    "amount" : 1000,
    "date" : new Date(2011,10,6),
    "category" : "Rent",
    "location" : { "_id": 1, "city": "Austin", "loc": { "x": -73.974, "y": 40.764 } }
  },
  {
    "title" : "Joe's Grocery",
    "amount" : 42.16,
    "date" : new Date(2011,10,7),
    "category" : "Grocery",
    "location" : { "_id": 1, "city": "Quebec", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Alley Cat Bar and Tavern",
    "amount" : 112.96,
    "date" : new Date(2011,10,8),
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Des Moines", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Marathon",
    "amount" : 83.14,
    "date" : new Date(2011,10,9),
    "category" : "Gas",
    "location" : { "_id": 1, "city": "St. Louis", "loc": { "x": -73.974, "y": 40.764 }}
  },
  {
    "title" : "Blue Bean",
    "amount" : 6.45,
    "date" : new Date(2011,10,10),
    "category" : "Food and Drink",
    "location" : { "_id": 1, "city": "Sparta", "loc": { "x": -73.974, "y": 40.764 }}
  }
  ])

  const transactionChart = transactionData.filter(transaction => {
    return (formData.query.length === 0 || 
      ((formData.query.length <= 2 && 
        transaction.title.toLowerCase().startsWith(formData.query)) 
        || 
      (formData.query.length > 2 && 
        transaction.title.toLowerCase().includes(formData.query)))
      )
  }).map((transaction) => {
    return (<tr className='p-4 border-b border-slate-200 grid grid-cols-5 items-center'>
        <td>{transaction.title}</td>
        <td>{
          `${transaction.date.getMonth()
          }/${transaction.date.getDate()
          }/${transaction.date.getFullYear()
          }`}</td>
        <td>{transaction.location.city}</td>
        <td>{transaction.category}</td>
        <td>${transaction.amount}</td>
      </tr>)
  })

    function handleChange(event) {
      setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
          }
      })
    }
    
  return ( 
    <div className="py-32 bg-slate-100">
      <div className = 'flex flex-col w-2/3 mx-auto'>
        <div className = 'flex justify-between'>
          <Title>Transactions</Title>
          <input
              className={`text-right w-1/5 px-1 py-2 rounded-md border-2 outline-0 ${formData.queryValid ? 'border-white' : 'border-rose-600'}`}
              type="search"
              placeholder="Search"
              onChange={handleChange}
              name="query"
              value={formData.query}
            />
          </div>
        <table className='table-auto border border-slate-400 bg-slate-50 mt-4 text-center'>
          <thead>
            <tr className='py-2 px-4 bg-white border-b border-slate-300 grid grid-cols-5 items-center'>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className='flex flex-col'>
            {transactionChart}
          </tbody>
        </table>
      </div>
    </div> );
}
 
export default Transactions;