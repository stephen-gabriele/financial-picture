import React, { createContext, useReducer } from "react"
export const AppContext = createContext()

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
        newTags.splice(newTags.indexOf(action.tag), 1)
      }
      return {...state,
      transactionTags: newTags}
    }
    const getTransactions = async () => {
      let transactionData = await fetch('http://localhost:3000/api/transactions')
      transactionData = await transactionData.json()
      return {...state,
        transactionData}
    }

    switch (action.type) {
      case 'setUserInfo':
        setUserInfo()
      case 'setIsLoggedIn':
        setIsLoggedIn()
      case 'addTransactionTag' :
        addTransactionTag()
      case 'removeTransactionTag' :
        removeTransactionTag()
      case 'getTransactions' :
        getTransactions()
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
        ]
    }
  )

  return ( <AppContext.Provider value={{globalState, dispatch}}>
    {props.children}
  </AppContext.Provider> )
}