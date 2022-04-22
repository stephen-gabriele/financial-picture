import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Button from './components/Button'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
    return (
    <div>
        <Header />
        <Content />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
