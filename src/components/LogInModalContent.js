import React, {useState, useContext, useEffect} from 'react'
import Button from './Button'
import Subtitle from './Subtitle'
import { AppContext } from '../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../Contexts/ModalContext'

const LogInModalContent = () => {

  let navigate = useNavigate()

  const {closeModal} = useContext(ModalContext)
  const {globalState, dispatch} = useContext(AppContext)
  const [formData, setFormData] = useState(
    {email: "", password: ''}
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
    })
  }

  const submit = () => {
    dispatch({type: 'AUTHENTICATE', email: formData.email, password: formData.password})
  }

  useEffect(() => {
    if (globalState.loginToken) {
      closeModal()
      navigate('/dashboard')
    } 
  }, [globalState.loginToken])


  return ( 
  <div className='w-72 h-fit'>
    <Subtitle>Log In</Subtitle>
    <div className='flex flex-col'>
      <form className='flex flex-col mt-4'>
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${!globalState.auth.failMessage ? 'border-white' : 'border-rose-600'}`}
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input 
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${!globalState.auth.failMessage ? 'border-white' : 'border-rose-600'}`}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
      </form>
        <Button text='Log In' size='sm' onClick={submit} className='mt-8'/>
    </div>
  </div>
  );
}
 
export default LogInModalContent