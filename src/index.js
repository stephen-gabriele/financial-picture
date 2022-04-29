import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import Subfooter from './components/Subfooter'

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(prevMenu => !prevMenu)
  }

    return (
    <div>
        {menuIsOpen ? <MobileMenu toggleMenu={toggleMenu}/> : ''}
        <Header toggleMenu={toggleMenu}/>
        <Content />
        <Subfooter />
        <Footer />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
