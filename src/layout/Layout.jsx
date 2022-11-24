import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar.jsx";
import { useNavigate } from 'react-router-dom';
function Layout({userdata,setuserdata}) {
  let navigate = useNavigate()
  function logout()
  {
localStorage.removeItem('userToken')
setuserdata(null)
navigate('/Login')  

}
// passing two functions to the navbar which are userdata to determine wether the user is logged in or not
// the second function is responsible for logging out which remove tge token from the local storage and set userdata into null
// after that navigate the user to login page 
  return (
    <>
<Navbar userdata={userdata}  logout={logout}></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default Layout