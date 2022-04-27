import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
    return (
    <div>
        <Navbar />
        <Content />
        <Footer />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
