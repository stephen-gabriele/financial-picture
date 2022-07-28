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

const App = () => {

  return (
    <div>
      <Router>
        <AppProvider>
        <ModalProvider>
        <MobileMenuProvider>
          <Modal />
          <MobileMenu />
          <Header/>
          <Routes>
            <Route exact path='/' element={false ? <Redirect to='/dashboard'/> : <div><Welcome /><Subfooter /></div>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/transactions' element={<Transactions />}></Route>
            <Route path='/features' element={<Features />}></Route>
          </Routes>
          <Footer />
        </MobileMenuProvider>
        </ModalProvider>
        </AppProvider>
      </Router>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
