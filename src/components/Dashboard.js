import React, {useContext} from "react"
import { AppContext } from "../Contexts/AppContext"
import Button from "./Button"
import Title from "./Title"
import Subtitle from "./Subtitle"

const Dashboard = () => {
  const {userInfo} = useContext(AppContext)
  const logUserInfo = () => {
    console.log(userInfo)
  }

  return ( <div className="my-6 text-center">
    <Title className="mt-6">Dashboard</Title>
    <Subtitle className="mt-6">Successfully Logged In, {userInfo.firstName}!</Subtitle>
    <Button className="mt-6" onClick={logUserInfo} text="Log User Info"/>
  </div> );
}
 
export default Dashboard;