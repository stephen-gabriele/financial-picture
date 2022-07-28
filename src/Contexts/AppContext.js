import React, { createContext, useReducer } from "react"
export const AppContext = createContext()
import api from '../api/api'

export const AppProvider = props => {

  const reducer = (state, action) => {
    
    const setUserInfo = () => {
      return {...state, 
        userInfo: action.userInfo}
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
      const request = new Request(api.transactions, {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'x-auth-token' : action.token
        },
        mode: 'cors'
      })
      try {
        let transactionData = await fetch(request)
        transactionData = await transactionData.json()
        dispatch({type: 'GET_TRANSACTIONS_SUCCESS', transactionData})
      } catch (e){
        console.log('Could not get transactions: ', e)
      }
    }
    const getTransactionSuccess = () => {
      return {...state, 
        isLoading: false, 
        transactionData: action.transactionData}
    }
    const logIn = async() => {
      const credentials = {
        email: action.email,
        password: action.password
      }
      const request = new Request(api.auth, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(credentials)
      })
      try {
        const response = await fetch(request)
          if (!response.ok) throw new Error(response.status)
        const body = await response.json()
        dispatch({type: 'LOG_IN_SUCCESS', response, body})
      } catch (e) {
        dispatch({type: 'LOG_IN_FAILURE', e})
      }
    }
    const logInSuccess = () => {
      return {...state,
        isLoading: false,
        auth: {
          failMessage: null
        },
        userInfo: {
          firstName: action.body.name.split(' ')[0],
          lastName: action.body.name.split(' ')[action.body.name.split(' ').length - 1],
          email: action.body.email
        },
        transactionTags: action.body.userData.allTags,
        transactionCategories: action.body.userData.allCategories,
        loginToken: action.response.headers.get('x-auth-token')}
    }
    const logInFailure = () => {
      if (action.e.message === '400') {
        return {...state, 
          isLoading: false,
          auth: {
            failMessage: 'Invalid Username or Password'
          }
        }
      } else {
        return {...state, 
          isLoading: false,
          auth: {
            failMessage: 'Something went wrong...'
          }
        }
      }
    }
    const signUp = async() => {
      const credentials = {
        name: `${action.firstName.trim()} ${action.lastName.trim()}`,
        email: action.email,
        password: action.password
      }
      const request = new Request(api.users, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(credentials)
      })
      // figure out how to get the body of a 400 response!
      try {
        const response = await fetch(request)
        const body = await response.json()
        if (response.ok) dispatch({type: 'SIGN_UP_SUCCESS', response, body})
        else dispatch({type:'SIGN_UP_FAILURE', body})
      } catch (e) {
        dispatch({type: 'SIGN_UP_FAILURE', body: e})
      }
    }
    const signUpSuccess = () => {
      return {...state,
        isLoading: false,
        auth: {
          failMessage: null
        },
        userInfo: {
          firstName: action.body.name.split(' ')[0],
          lastName: action.body.name.split(' ')[action.body.name.split(' ').length - 1],
          email: action.body.email
        },
        loginToken: action.response.headers.get('x-auth-token')}
    }
    const signUpFailure = () => {
      return {...state, 
        isLoading: false,
        auth: {
          failMessage: `Something Went Wrong: ${action.body}`
        }
      }
    }
    const logOut = () => {
      return{
        auth: {failMessage: null},
        userInfo: 
          {firstName: '',
          lastName: '',
          email: ''},
        loginToken: null,
        transactionData: [],
        transactionCategories: [],
        transactionTags: [],
        isLoading: false
      }
    }

    switch (action.type) {
      case 'SET_USER_INFO':
        return setUserInfo()
      case 'ADD_TRANSACTION_TAG' :
        return addTransactionTag()
      case 'REMOVE_TRANSACTION_TAG' :
        return removeTransactionTag()
      case 'GET_TRANSACTIONS' :
        getTransactions()
        return {...state, isLoading: true}
      case 'GET_TRANSACTIONS_SUCCESS' :
        return getTransactionSuccess()
      case 'LOG_IN' :
        logIn()
        return {...state, isLoading: true}
      case 'LOG_IN_SUCCESS' :
        return logInSuccess()
      case 'LOG_IN_FAILURE' :
        return logInFailure()
      case 'SIGN_UP' :
        signUp()
        return {...state, isLoading: true}
      case 'SIGN_UP_SUCCESS' :
        return signUpSuccess()
      case 'SIGN_UP_FAILURE' :
        return signUpFailure()
      case 'LOG_OUT' :
        return logOut()
      default:
        return state
    }
  }

  const [globalState, dispatch] = useReducer(reducer,
    {
      auth: {
        failMessage: null
      },
      userInfo: 
        {firstName: '',
        lastName: '',
        email: ''},
      loginToken: null,
      transactionData: [],
      transactionCategories: [],
      transactionTags: [],
      isLoading: false
    }
  )

  return ( <AppContext.Provider value={{globalState, dispatch}}>
    {props.children}
  </AppContext.Provider> )
}