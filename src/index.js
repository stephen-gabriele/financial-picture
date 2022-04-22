import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Button from './components/Button'
import Header from './components/Header'

const App = () => {
    
    const testClick = () => {
        console.log('clicked')
    }

    return (
    <div>
        <Button text='Click Here' theme='primary' handleClick={testClick}/>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
