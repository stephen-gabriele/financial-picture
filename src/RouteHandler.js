import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppContext } from './contexts/AppContext'

import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Transactions from './pages/Transactions'
import Welcome from './pages/Welcome'
import Subfooter from './pages/Subfooter'
import Account from './pages/Account'

const RouteHandler = () => {
  const { globalState } = useContext(AppContext)

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          globalState.loginToken ? (
            <Navigate replace to='/dashboard' />
          ) : (
            <div>
              <Welcome />
              <Subfooter />
            </div>
          )
        }
      />
      <Route
        path='/dashboard'
        element={!globalState.loginToken ? <Navigate replace to='/' /> : <Dashboard />}
      />
      <Route
        path='/transactions'
        element={!globalState.loginToken ? <Navigate replace to='/' /> : <Transactions />}
      />
      <Route path='/features' element={<Features />} />
      <Route
        path='/account'
        element={!globalState.loginToken ? <Navigate replace to='/' /> : <Account />}
      />
    </Routes>
  )
}

export default RouteHandler
