import React, {useEffect, useState, useContext} from 'react'
import Title from './Title'
import { AppContext } from '../Contexts/AppContext'
// import {transactionData} from '../transactions.json'

const Transactions = () => {

  const {globalState} = useContext(AppContext)

  const [formData, setFormData] = useState(
    {query: "", queryValid: true}
  )
  
  const [activeSort, setActiveSort] = useState({sortBy: '', inverse: false})

  const [transactionData, setTransactionData] = useState([
    {
      "id" : 1,
      "title" : "LNO MANGMT COMPANY",
      "amount" : 1000,
      "date" : new Date(2011,10,1),
      "category" : "Rent",
      "location" : { "_id": 1, "city": "San Francisco", "loc": { "x": -73.974, "y": 40.764 } }
    },
    {
      "id" : 2,
      "title" : "Joe's Grocery",
      "amount" : 42.16,
      "date" : new Date(2011,10,2),
      "category" : "Grocery",
      "location" : { "_id": 1, "city": "Nevada", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 3,
      "title" : "Alley Cat Bar and Tavern",
      "amount" : 112.96,
      "date" : new Date(2011,10,3),
      "category" : "Food and Drink",
      "location" : { "_id": 1, "city": "Albuquerque", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 4,
      "title" : "Marathon",
      "amount" : 83.14,
      "date" : new Date(2011,10,4),
      "category" : "Gas",
      "location" : { "_id": 1, "city": "New York", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 5,
      "title" : "Blue Bean",
      "amount" : 6.45,
      "date" : new Date(2011,10,5),
      "category" : "Food and Drink",
      "location" : { "_id": 1, "city": "San Diego", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 6,
      "title" : "LNO MANGMT COMPANY",
      "amount" : 1000,
      "date" : new Date(2011,10,6),
      "category" : "Rent",
      "location" : { "_id": 1, "city": "Austin", "loc": { "x": -73.974, "y": 40.764 } }
    },
    {
      "id" : 7,
      "title" : "Joe's Grocery",
      "amount" : 42.16,
      "date" : new Date(2011,10,7),
      "category" : "Grocery",
      "location" : { "_id": 1, "city": "Quebec", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 8,
      "title" : "Alley Cat Bar and Tavern",
      "amount" : 112.96,
      "date" : new Date(2011,10,8),
      "category" : "Food and Drink",
      "location" : { "_id": 1, "city": "Des Moines", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 9,
      "title" : "Marathon",
      "amount" : 83.14,
      "date" : new Date(2011,10,9),
      "category" : "Gas",
      "location" : { "_id": 1, "city": "St. Louis", "loc": { "x": -73.974, "y": 40.764 }}
    },
    {
      "id" : 10,
      "title" : "Blue Bean",
      "amount" : 6.45,
      "date" : new Date(2011,10,10),
      "category" : "Food and Drink",
      "location" : { "_id": 1, "city": "Sparta", "loc": { "x": -73.974, "y": 40.764 }}
    }
  ])

  useEffect(() => {
    sortArray('date', false)
  }, [])

  const transactionChart = mapTransactionChart(search(transactionData))

  function mapTransactionChart(transactionData) {
    return transactionData.map((transaction) => {
      return (<tr className='p-4 border-b border-slate-200 grid grid-cols-5 items-center'>
          <td>{
            `${transaction.date.getMonth()
            }/${transaction.date.getDate()
            }/${transaction.date.getFullYear()
            }`}</td>
          <td>{transaction.title}</td>
          <td>{transaction.location.city}</td>
          <td>
            <select id={transaction.id} defaultValue={transaction.category} onChange={handleCategoryChange} 
            className='bg-slate-50'>
              {
                globalState.transactionCategories.map(category => {
                  return (
                    <option value={category}>{category}</option>
                  )
                })
              }
            </select>
            </td>
          <td>${transaction.amount}</td>
        </tr>)
    })
  }

  function search(arr) {
    return arr.filter(transaction => {
      return (formData.query.length === 0 || 
        ((formData.query.length <= 2 && 
          transaction.title.toLowerCase().startsWith(formData.query)) 
          || 
        (formData.query.length > 2 && 
          transaction.title.toLowerCase().includes(formData.query)))
        )
    })
  }

  function handleCategoryChange(event) {
    setTransactionData(prevTransactionData => {
      return prevTransactionData.map(transaction => {
        if (transaction.id == event.target.id) {
          return {
            ...transaction,
            category: event.target.value
          }
        }
        else return transaction
      })
    })
  }

  function handleFormChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
    })
  }

  function sortArray(sortBy) {
    const sortedArray = [...transactionData]
    if (sortBy === activeSort.sortBy) {
      sortedArray.reverse()
      setActiveSort((prevActiveSort) => {
        return {...prevActiveSort,
        inverse: !prevActiveSort.inverse}
      })
    }
    else {
      switch (sortBy) {
        case 'title' : {
          sortedArray.sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
          })
        }
        break
        case 'date' : {
          sortedArray.sort((a, b) => {
            if (a.date < b.date) return -1
            if (a.date > b.date) return 1
            return 0
          })
        }
        break
        case 'location' : {
          sortedArray.sort((a, b) => {
            if (a.location.city < b.location.city) return -1
            if (a.location.city > b.location.city) return 1
            return 0
          })
        }
        break
        case 'category' : {
          sortedArray.sort((a, b) => {
            if (a.category < b.category) return -1
            if (a.category > b.category) return 1
            return 0
          })
        }
        break
        case 'amount' : {
          sortedArray.sort((a, b) => {
            if (a.amount < b.amount) return -1
            if (a.amount > b.amount) return 1
            return 0
          })
        }
      }
      setActiveSort((prevActiveSort) => {
        return {...prevActiveSort,
        sortBy: sortBy,
        inverse: false}
      })
    }
    setTransactionData(sortedArray)
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
              onChange={handleFormChange}
              name="query"
              value={formData.query}
            />
          </div>
        <table className='table-auto border border-slate-400 bg-slate-50 mt-4 text-center'>
          <thead>
            <tr className='py-2 px-4 bg-white border-b border-slate-300 grid grid-cols-5 items-center'>
              <th className='cursor-pointer' onClick={() => sortArray('date')}>
                Date
                <span className={`${(activeSort.sortBy !== 'date') && 'hidden'}`}>{!activeSort.inverse ? '▼' : '▲'}</span> 
              </th>
              <th className='cursor-pointer' onClick={() => sortArray('title')}>
                Title
                <span className={`${(activeSort.sortBy !== 'title') && 'hidden'}`}>{!activeSort.inverse ? '▼' : '▲'}</span> 
              </th>
              <th className='cursor-pointer' onClick={() => sortArray('location')}>
                Location
                <span className={`${(activeSort.sortBy !== 'location') && 'hidden'}`}>{!activeSort.inverse ? '▼' : '▲'}</span> 
              </th>
              <th className='cursor-pointer' onClick={() => sortArray('category')}>
                Category
                <span className={`${(activeSort.sortBy !== 'category') && 'hidden'}`}>{!activeSort.inverse ? '▼' : '▲'}</span> 
              </th>
              <th className='cursor-pointer' onClick={() => sortArray('amount')}>
                Amount
                <span className={`${(activeSort.sortBy !== 'amount') && 'hidden'}`}>{!activeSort.inverse ? '▼' : '▲'}</span> 
              </th>
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