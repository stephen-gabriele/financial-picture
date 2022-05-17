import React, {useContext} from "react"
import { AppContext } from "../Contexts/AppContext"
import Button from "./Button"
import Title from "./Title"
import Subtitle from "./Subtitle"

const Dashboard = () => {
  const {globalState} = useContext(AppContext)
  const logUserInfo = () => {
    console.log(globalState.userInfo)
  }

  return ( <div className="pt-6 pb-64 bg-slate-100 text-center">
    <Title className="mt-6">Dashboard</Title>
    <Subtitle className="mt-6">Successfully Logged In, {globalState.userInfo.firstName}!</Subtitle>
    <Button className="mt-12" onClick={logUserInfo} text="Log User Info"/>
  </div> );
}
 
export default Dashboard;