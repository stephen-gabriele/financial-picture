import React, {useState} from 'react'
import Button from './Button'
import Subtitle from './Subtitle'

const SignUpModalContent = () => {

  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", password: '', isSubmitted:false}
  )

  const [emailValid, setEmailValid] = useState(true)
  const [firstNameValid, setFirstNameValid] = useState(true)
  const [lastNameValid, setLastNameValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)

  function handleChange(event) {
    setFormData(prevFormData => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) setEmailValid(true)
      if (formData.firstName.match(/^[A-Za-z]+$/)) setFirstNameValid(true)
      if (formData.lastName.match(/^[A-Za-z]+$/)) setLastNameValid(true)
      if (formData.password.length > 6) setPasswordValid(true)
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
    
    if (submitReady) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          isSubmitted:true
        }
      })
      console.log(formData)
    }
  }

  return ( 
  <div className='w-72 h-fit'>
    {!formData.isSubmitted && <div className='flex flex-col'>
      <form className='flex flex-col '>
        <input
          className={`px-1 py-2 rounded-md ${firstNameValid ? '' : 'border-2 border-rose-600'}`}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        {!firstNameValid && <div className='text-rose-600'>Invalid entry</div>}
        <input
          className={`mt-4 px-1 py-2 rounded-md ${lastNameValid ? '' : 'border-2 border-rose-600'}`}
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        {!lastNameValid && <div className='text-rose-600'>Invalid entry</div>}
        <input
          className={`mt-4 px-1 py-2 rounded-md ${emailValid ? '' : 'border-2 border-rose-600'}`}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        {!emailValid && <div className='text-rose-600'>Invalid email address</div>}
        <input 
          className={`mt-4 px-1 py-2 rounded-md ${passwordValid ? '' : 'border-2 border-rose-600'}`}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        {!passwordValid && <div className='text-rose-600'>Password must be at least 7 characters</div>}
      </form>
        <Button text='Sign Up' size='sm' onClick={submit} className='mt-8'/>
    </div> }
    {formData.isSubmitted && <Subtitle>Sucessfully Signed Up, {formData.firstName}!</Subtitle>}
  </div>
  );
}
 
export default SignUpModalContent