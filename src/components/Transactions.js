import React, {useEffect, useState, useContext} from 'react'
import Title from './Title'
import { AppContext } from '../Contexts/AppContext'
import TagContainer from './TagContainer'

const Transactions = () => {

  const {globalState, dispatch} = useContext(AppContext)

  const [formData, setFormData] = useState(
    {query: "", queryValid: true}
  )
  
  const [activeSort, setActiveSort] = useState({sortBy: '', inverse: false})

  const [transactionData, setTransactionData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(data => data.json())
      .then(data => setTransactionData(data))
  }, [])

  useEffect(() => {
    sortArray('date', false)
  }, [])
  
  let transactionChart = mapChart(search(transactionData))

  function mapChart(transactionData) {
    return transactionData.map((transaction, transactionIndex) => {
      return (<tr className='p-4 border-b border-slate-200 grid grid-cols-6 items-center'>
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
            <select id={transaction.id} value={transaction.category} onChange={handleCategoryChange} 
            className='bg-slate-50 text-center'>
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
          <td>
            <TagContainer transactionIndex={transactionIndex} deleteTag={deleteTag} tags={transaction.tags} addTag={addTag}/>
          </td>
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

  function deleteTag(transactionIndex, tagIndex) {
    let tag = transactionData[transactionIndex].tags[tagIndex]
    // if (/* tag isn't included in any other transactions */) {
    //   if (globalState.transactionTags.includes(tag)) {
    //     dispatch({type: 'removeTransactionTag', tag: tag})
    //   }}
    console.log(globalState.transactionTags)
    setTransactionData(prevTransactionData => {
      let newTransactionData=[...prevTransactionData]
      newTransactionData[transactionIndex].tags.splice(tagIndex, 1)
      return newTransactionData
    })
  }

  function addTag(transactionIndex, tag) {
    if (!globalState.transactionTags.includes(tag)) {
      dispatch({type: 'addTransactionTag', tag: tag})
    }
    setTransactionData(prevTransactionData => {
      let newTransactionData=[...prevTransactionData]
      newTransactionData[transactionIndex].tags.push(tag)
      return newTransactionData
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
    <div className="py-32 bg-slate-100 min-h-full">
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
            <tr className='py-2 px-4 bg-white border-b border-slate-300 grid grid-cols-6 items-center'>
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
              <th>
                Tags
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