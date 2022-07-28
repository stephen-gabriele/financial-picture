import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'

import { BrowserRouter as Router} from 'react-router-dom'
import { ModalProvider } from './Contexts/ModalContext'
import { AppProvider } from './Contexts/AppContext'
import { MobileMenuProvider } from './Contexts/MobileMenuContext'
import Modal from './components/molecules/Modal/Modal'
import MobileMenu from './components/molecules/Nav/MobileMenu'

import Header from './components/molecules/Nav/Header'
import Footer from './components/molecules/Nav/Footer'


import RouteHandler from './RouteHandler'

const App = () => {

  return (
  <AppProvider>
  <ModalProvider>
  <MobileMenuProvider>
      <Router>
        <Modal />
        <MobileMenu />
        <Header />
        <RouteHandler />
        <Footer />
      </Router>
  </MobileMenuProvider>
  </ModalProvider>
  </AppProvider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
