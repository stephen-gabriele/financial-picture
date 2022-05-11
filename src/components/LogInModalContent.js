import React, {useState, useContext} from 'react'
import Button from './Button'
import Subtitle from './Subtitle'
import { AppContext } from '../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../Contexts/ModalContext'

const LogInModalContent = () => {

  let navigate = useNavigate()
  const {closeModal} = useContext(ModalContext)

  const {setIsLoggedIn, expectedLogin, setUserInfo} = useContext(AppContext)

  const [formData, setFormData] = useState(
    {email: "", password: '', isSubmitted:false}
  )

  const [loginValid, setLoginValid] = useState(true)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
    })
    setLoginValid(true)
  }

  const submit = () => {
    if (formData.email == expectedLogin.email && formData.password == expectedLogin.password) {
      setFormData(prevFormData => {
      return {
        ...prevFormData,
        isSubmitted:true
      }
      })
      console.log(formData)
      setIsLoggedIn(true)
      setUserInfo(expectedLogin)
      navigate('/dashboard')
      closeModal()
    }
    else setLoginValid(false)
  }

  return ( 
  <div className='w-72 h-fit'>
    <Subtitle>Log In</Subtitle>
    {!formData.isSubmitted && <div className='flex flex-col'>
      <form className='flex flex-col mt-4'>
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${loginValid ? 'border-white' : 'border-rose-600'}`}
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input 
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${loginValid ? 'border-white' : 'border-rose-600'}`}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
      </form>
        <Button text='Log In' size='sm' onClick={submit} className='mt-8'/>
    </div> }
    {formData.isSubmitted && <Subtitle>Sucessfully Logged In!</Subtitle>}
  </div>
  );
}
 
export default LogInModalContent