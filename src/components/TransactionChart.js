import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from '../Contexts/AppContext'
import TransactionRow from './TransactionRow'
import TransactionHeader from './TransactionHeader'


const TransactionChart = () => {

  const [transactionData, setTransactionData] = useState([])
  const {globalState, dispatch} = useContext(AppContext)
  const [formData, setFormData] = useState(
    {query: "", queryValid: true}
  )
  const [activeSort, setActiveSort] = useState({sortBy: '', inverse: false})

  useEffect(() => {
    dispatch({type: 'GET_TRANSACTIONS'})
  }, [])
  useEffect(() => {
    if(globalState.transactionData) 
      setTransactionData(globalState.transactionData)
  }, [globalState.transactionData])
  useEffect(() => {
    // sortChart('date', false)
  }, [])

  function search(arr) {
    return arr.filter(transaction => {
      return (formData.query.length === 0 || 
        ((formData.query.length <= 2 && 
          transaction.title.toLowerCase().startsWith(formData.query.toLowerCase())) 
          || 
        (formData.query.length > 2 && 
          transaction.title.toLowerCase().includes(formData.query.toLowerCase())))
        )
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

  function sortData(sortBy) {
    const sortedData = [...transactionData]
    switch (sortBy) {
      case 'title' : {
        sortedData.sort((a, b) => {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
      }
      break
      case 'date' : {
        sortedData.sort((a, b) => {
          if (new Date(a.date).getTime() < new Date(b.date).getTime()) return -1
          if (new Date(a.date).getTime() > new Date(b.date).getTime()) return 1
          return 0
        })
      }
      break
      case 'location' : {
        sortedData.sort((a, b) => {
          if (a.location.city < b.location.city) return -1
          if (a.location.city > b.location.city) return 1
          return 0
        })
      }
      break
      case 'category' : {
        sortedData.sort((a, b) => {
          if (a.category < b.category) return -1
          if (a.category > b.category) return 1
          return 0
        })
      }
      break
      case 'amount' : {
        sortedData.sort((a, b) => {
          if (a.amount < b.amount) return -1
          if (a.amount > b.amount) return 1
          return 0
        })
      }
    }
    if (sortBy === activeSort.sortBy && !activeSort.inverse) {
      sortedData.reverse()
      setActiveSort((prevActiveSort) => {
        return {...prevActiveSort,
        inverse: true}
      })
    } else setActiveSort((prevActiveSort) => {
      return {...prevActiveSort,
      sortBy,
      inverse: false}
    })
    setTransactionData(sortedData)
  }
    

  return ( 
    <div className='flex flex-col items-end'>
      <input
        className={`text-right w-1/5 px-1 py-2 rounded-md border-2 outline-0
        ${formData.queryValid ? 'border-white' : 'border-rose-600'}`}
        type="search"
        placeholder="Search"
        onChange={handleFormChange}
        name="query"
        value={formData.query}
      />
      <table className='table-auto border border-slate-400 bg-slate-50 mt-4 text-center'>
        <TransactionHeader activeSort={activeSort} sortData={sortData} />
        <tbody className='flex flex-col'>
          {
          search(transactionData).map((transaction, transactionIndex) => {
            return (<TransactionRow 
              key={transactionIndex}
              transaction={transaction} 
              transactionIndex={transactionIndex} 
              setTransactionData={setTransactionData}
              />)
            })
          }
        </tbody>
      </table> 
    </div>);
}
 
export default TransactionChart;