import React, { useState, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = props => {
  const [userInfo, setUserInfo] = useState(
    {firstName: '',
    lastName: '',
    email: '',
    password: ''}
  )

  const [expectedLogin, setExpectedLogin] = useState(
    {firstName: 'Andrew',
    lastName: 'Paynter',
    email: 'andrewpaynter97@gmail.com',
    password: 'testpass'}
  )

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return ( <AppContext.Provider value={{userInfo, setUserInfo, isLoggedIn, setIsLoggedIn, expectedLogin}}>
    {props.children}
  </AppContext.Provider> )
}