import React, {useState} from 'react'
import Button from './Button'
import Subtitle from './Subtitle'

const LogInModalContent = () => {

  const [formData, setFormData] = useState(
    {email: "", password: '', isSubmitted:false}
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
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        isSubmitted:true
      }
    })
    console.log(formData)
  }

  return ( 
  <div className=''>
    {!formData.isSubmitted && <div className='flex flex-col'>
      <form className='flex flex-col items-center'>
        <input
          className='mt-4 px-1 py-2 rounded-md'
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input 
          className='mt-4 px-1 py-2 rounded-md'
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