import React, { useState, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = props => {
  const [userInfo, setUserInfo] = useState(
    {firstName: '',
    lastName: '',
    userName: '',
    password: ''}
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return ( <AppContext.Provider value={{userInfo, setUserInfo, isLoggedIn}}>
    {props.children}
  </AppContext.Provider> )
}