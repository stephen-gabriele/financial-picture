import React, {useContext} from "react"
import { AppContext } from "../Contexts/AppContext"
import Button from "./Button"
import Title from "./Title"
import Subtitle from "./Subtitle"
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const {globalState, dispatch} = useContext(AppContext)
  const logUserInfo = () => {
    console.log(globalState)
  }
  let navigate = useNavigate()

  return ( <div className="pt-6 pb-64 bg-slate-100 text-center">
    <Title className="mt-6">Dashboard</Title>
    <Subtitle className="mt-6">Hello, {globalState.userInfo.firstName}! Here's your account at a glance.</Subtitle>
    <Button className="mt-12 mr-6" onClick={logUserInfo} text="Log User Info"/>
    <Button className="mt-12 mr-6" text='Transactions' onClick={()=> navigate('/transactions')}/>
    <Button text='Log Out' onClick={()=> {
      dispatch({type: 'LOG_OUT'})
      navigate('/')
      }}/>
  </div> );
}
 
export default Dashboard;