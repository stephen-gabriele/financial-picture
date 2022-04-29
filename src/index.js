import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

const App = () => {
  //const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const toggleMenu = () => {
    //setMenuIsOpen(prevMenu => !prevMenu)
    console.log('toggled!')
  }

    return (
    <div>
        {/* <MobileMenu /> */}
        <Header toggleMenu={toggleMenu}/>
        <Content />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
