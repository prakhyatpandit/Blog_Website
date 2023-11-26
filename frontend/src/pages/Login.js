import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import LoginComponent from '../components/LoginComponent'
import { UserContext } from '../UserContext'



const Login = () => {
  return (
    <div>
<Navbar/>

<LoginComponent/>




    </div>
  )
}

export default Login