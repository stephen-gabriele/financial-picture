import React, {useContext} from "react"
import { AppContext } from "../Contexts/AppContext"
import Button from "./Button"

const Dashboard = () => {
  const {userInfo} = useContext(AppContext)
  const logUserInfo = () => {
    console.log(userInfo)
  }

  return ( <div>
    Logged In, Dashboard
    <Button onClick={logUserInfo} text="Log User Info"/>
  </div> );
}
 
export default Dashboard;