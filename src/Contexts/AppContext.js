import React, { createContext, useReducer } from "react"

export const AppContext = createContext()

export const AppProvider = props => {

  const reducer = (state, action) => {
      switch (action.type) {
        case 'setUserInfo':
          return {...state, 
            userInfo: action.userInfo}
        case 'setIsLoggedIn':
          return {...state,
            isLoggedIn: action.isLoggedIn}
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

      transactionCategories:
        [
          'Gas',
          'Rent',
          'Grocery',
          'Food and Drink',
        ],

      transactionTags:
        [
          'Business',
          'Personal'
        ]
    }
  )

  return ( <AppContext.Provider value={{globalState, dispatch}}>
    {props.children}
  </AppContext.Provider> )
}