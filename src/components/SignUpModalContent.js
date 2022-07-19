import React, {useEffect, useState, useContext} from 'react'
import Button from './Button'
import Subtitle from './Subtitle'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../Contexts/ModalContext'
import { AppContext } from '../Contexts/AppContext'

const SignUpModalContent = () => {

  let navigate = useNavigate()

  const [formData, setFormData] = useState(
    {firstName: '', lastName: '', email: '', password: '', confirmPassword: '', isSubmitted:false}
  )
  const {globalState, dispatch} = useContext(AppContext)
  const {closeModal} = useContext(ModalContext)

  const [emailValid, setEmailValid] = useState(true)
  const [firstNameValid, setFirstNameValid] = useState(true)
  const [lastNameValid, setLastNameValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true)

  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) setEmailValid(true)
    if (formData.firstName.match(/^[A-Za-z]+$/)) setFirstNameValid(true)
    if (formData.lastName.match(/^[A-Za-z]+$/)) setLastNameValid(true)
    if (formData.password.length > 6) setPasswordValid(true)
    if ((formData.confirmPassword == formData.password) && formData.confirmPassword.length > 6) setConfirmPasswordValid(true)
  }, [formData])

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
    })
  }


  const submit = () => {
    let submitReady = true

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) || formData.email.length == 0) {
      setEmailValid(false)
      submitReady=false
    }
    if (!(formData.firstName.match(/^[A-Za-z]+$/)) || formData.firstName.length == 0) {
      setFirstNameValid(false)
      submitReady=false
    }
    if (!(formData.lastName.match(/^[A-Za-z]+$/))) {
      setLastNameValid(false)
      submitReady=false
    }
    if (formData.password.length < 7) {
      setPasswordValid(false)
      submitReady=false
    }
    if (formData.confirmPassword !== formData.password || formData.confirmPassword.length == 0) {
      setConfirmPasswordValid(false)
      submitReady=false
    }
    
    if (submitReady) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          isSubmitted:true
        }
      })
      dispatch({type: 'SET_IS_LOGGED_IN', isLoggedIn: true})
      dispatch({type: 'SET_USER_INFO', userInfo: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      }})
      navigate('dashboard')
      closeModal()
    }
  }

  if (globalState.isLoggedIn) return null

  return ( 
  <div className='w-72 h-fit'>
    <Subtitle>Sign Up</Subtitle>
    {!formData.isSubmitted && <div className='flex flex-col mt-6'>
      <form className='flex flex-col '>
        <input
          className={`px-1 py-2 rounded-md border-2 outline-0 ${firstNameValid ? 'border-white' : 'border-rose-600'}`}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        {/* {!firstNameValid && <div className='text-rose-600'>Invalid entry</div>} */}
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${lastNameValid ? 'border-white' : 'border-rose-600'}`}
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        {/* {!lastNameValid && <div className='text-rose-600'>Invalid entry</div>} */}
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${emailValid ? 'border-white' : 'border-rose-600'}`}
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        {/* {!emailValid && <div className='text-rose-600'>Invalid email address</div>} */}
        <input 
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${passwordValid ? 'border-white' : 'border-2 border-rose-600'}`}
          type="password"
          placeholder="Password (at least 7 characters)"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <input 
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${confirmPasswordValid ? 'border-white' : 'border-2 border-rose-600'}`}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
          />
        {/* {!passwordValid && <div className='text-rose-600'>Password must be at least 7 characters</div>} */}
      </form>
        <Button text='Sign Up' size='sm' onClick={submit} className='mt-8'/>
    </div> }
  </div>
  );
}
 
export default SignUpModalContent