import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
    return (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
