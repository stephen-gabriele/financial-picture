import React, { createContext, useReducer } from "react"
export const AppContext = createContext()
import api from '../api/api'

export const AppProvider = props => {
  const reducer = (state, action) => {
    const setUserInfo = () => {
      return {...state, 
        userInfo: action.userInfo}
    }
    const setIsLoggedIn = () => {
      return {...state,
        isLoggedIn: action.isLoggedIn}
    }
    const addTransactionTag = () => {
      return {...state,
        transactionTags: [...state.transactionTags, action.tag]} 
    }
    const removeTransactionTag = () => {
      let newTags = [...state.transactionTags]
      if (newTags.includes(action.tag)) {
        news.splice(newTags.indexOf(action.tag), 1)
      }
      return {...state,
      transactionTags: newTags}
    }
    const getTransactions = async () => {
      try {
        let transactionData = await fetch(api.transactions)
        transactionData = await transactionData.json()
        dispatch({type: 'GET_TRANSACTIONS_SUCCESS', transactionData})
      } catch (e){
        console.log('Could not get transactions: ', e)
      }
    }

    switch (action.type) {
      case 'SET_USER_INFO':
        return setUserInfo()
      case 'SET_IS_LOGGED_IN':
        return setIsLoggedIn()
      case 'ADD_TRANSACTION_TAG' :
        return addTransactionTag()
      case 'REMOVE_TRANSACTION_TAG' :
        return removeTransactionTag()
      case 'GET_TRANSACTIONS' :
        getTransactions()
        return {...state, isLoading: true}
      case 'GET_TRANSACTIONS_SUCCESS' :
        return {...state, 
          isLoading: false, 
          transactionData: action.transactionData}
      default:
        return state
    }
  }

  const [globalState, dispatch] = useReducer(reducer,
    {
      userInfo: 
        {firstName: '',
        lastName: '',
        email: '',
        password: ''},

      expectedLogin: 
        {firstName: 'Andrew',
        lastName: 'Paynter',
        email: 't@t.com',
        password: 'testpass'},

      isLoggedIn: true,
      
      transactionData: [],

      transactionCategories:
        [
          'Gas',
          'Rent',
          'Grocery',
          'Food and Drink',
          'Shopping'
        ],

      transactionTags:
        [
          'Business',
          'Personal',
          'Pets'
        ],
      isLoading: false
    }
  )

  return ( <AppContext.Provider value={{globalState, dispatch}}>
    {props.children}
  </AppContext.Provider> )
}