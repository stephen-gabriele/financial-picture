import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import Subfooter from './components/Subfooter'
import Modal from './components/Modal'
import { ModalProvider } from './Contexts/ModalContext'
import { AppProvider } from './Contexts/AppContext'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import Transactions from './components/Transactions'

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
            <Route exact path='/' element={<div><Content /><Subfooter /></div>}></Route>
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
