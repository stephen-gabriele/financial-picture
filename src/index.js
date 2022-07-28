import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ModalProvider } from './Contexts/ModalContext'
import { AppProvider } from './Contexts/AppContext'
import { MobileMenuProvider } from './Contexts/MobileMenuContext'
import Modal from './components/molecules/Modal/Modal'

import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Transactions from './pages/Transactions'
import Header from './components/molecules/Nav/Header'
import Welcome from './pages/Welcome'
import Footer from './pages/Footer'
import MobileMenu from './components/molecules/Nav/MobileMenu'
import Subfooter from './pages/Subfooter'
import Account from './pages/Account'

const App = () => {

  return (
    <Router>
      <AppProvider>
      <ModalProvider>
      <MobileMenuProvider>
        <Modal />
        <MobileMenu />
        <Header />
        <Routes>
          <Route exact path='/' element={<div><Welcome /><Subfooter /></div>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/transactions' element={<Transactions />}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/account' element={<Account />}/>
        </Routes>
        <Footer />
      </MobileMenuProvider>
      </ModalProvider>
      </AppProvider>
    </Router>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
