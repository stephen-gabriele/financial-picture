import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ModalProvider } from './Contexts/ModalContext'
import { AppProvider } from './Contexts/AppContext'
import Modal from './components/Modal'

import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Transactions from './pages/Transactions'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './pages/Footer'
import MobileMenu from './components/MobileMenu'
import Subfooter from './components/Subfooter'

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuIsOpen((prevMenu) => !prevMenu)
  }

  React.useEffect(() => {
    document.documentElement.style.overflow= menuIsOpen ? 'hidden' : 'visible'
  }, [menuIsOpen])

  return (
    <div>
      <Router>
        <AppProvider>
        <ModalProvider>
          <Modal />
          {menuIsOpen ? <MobileMenu toggleMenu={toggleMenu} /> : ''}
          <Header toggleMenu={toggleMenu} />
          <Routes>
            <Route exact path='/' element={false ? <Redirect to='/dashboard'/> : <div><Content /><Subfooter /></div>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/transactions' element={<Transactions />}></Route>
            <Route path='/features' element={<Features />}></Route>
          </Routes>
          <Footer />
        </ModalProvider>
        </AppProvider>
      </Router>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
