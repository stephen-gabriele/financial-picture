import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import Button from './components/Button'

const App = () => {
    
    // const testClick = () => {
    //     console.log('clicked')
    // }

    return (
    <div>
        <div className='text-3xl underline leading-6 font-black'>do some ish</div>
        <Button text='Click Here' theme='primary'/>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
