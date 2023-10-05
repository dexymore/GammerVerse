
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import { useEffect } from 'react'

function Login({saveData}) {
const guestEmail="guest@gmail.com"
const guestPassword="Test1234"
let regsterNavigate=useNavigate()
function registernavigation()
{
  regsterNavigate("/Register")
}

const [userinfo, setuserinfo] = useState({
    email:"",
    password:"",
})
const [loading,isloading]=useState(false)//responsible to loading status
const [error,setErorr]=useState("") //responsible for database erorrs
function getUserinfo(e)
{
let userdata={...userinfo}
userdata[e.target.name]=e.target.value;
setuserinfo(userdata)
}
let navigate= useNavigate()
async function sendToApi()
{
  let { data } = await axios.post('https://movies-api.routemisr.com/signin', userinfo);

    if(data.message==='success'){
    localStorage.setItem('userToken',data.token)
        isloading(false) ////if there is no erors then reset loading spinner
     
        navigate("/Home")//and navigate user to home page  
         saveData();
    }
    else{
      setErorr(data.message) // if there exist erors passing them to the erorr status
      isloading(false) // and also reset loading spinner
    }

}

function subMit(e)
{
    isloading(true)    // on submitting change statue of loading spinner to true
    e.preventDefault() // this function is built in function to pervent the default behaviour of th
    sendToApi() ;
}



const handleGuest=function(){
  document.getElementById("email").value=guestEmail
  document.getElementById("password").value=guestPassword
  
}


return (
  <>
  <div className='position-relative'>
  <div className='loginbackground'>
    <div className='loginlayout'></div>
  </div>
  <div className="login-positon">
  <div className='container padsT flex-column login d-flex align-items-center justify-content-center my-5 login p-5 mt-5  '>
    {error.length > 0 ? <div className='mt-5 alert alert-danger m-1'>{error}</div> : ""}
    <form onSubmit={subMit} className='w-75'>
      <div className="form-group mt-5">
        <label htmlFor="email"><h3 className='text-muted mt-2 mb-3'></h3></label>
        <input className="form-control " onChange={getUserinfo} id="email" name='email' placeholder='email'></input>
      </div>
      <div className="form-group mt-2 ">
        <label htmlFor="password"><h3 className='text-muted mt-2 mb-3'></h3></label>
        <input className="form-control" type="password" onChange={getUserinfo} id="password" placeholder='password' name='password'></input>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
      <button type='submit' className='btn btn-outline-info mt-3'> {loading === true ? <i className="fas fa-spinner fa-spin "></i> : 'login'}</button>
      <button type='button' className='btn btn-outline-info mt-3 ml-3' onClick={handleGuest}>login as a guest</button>

      </div>
    </form>
    <p className='text-light mt-2 w-100'>don't you have an account? <span><a className="nav-link active text-muted cursorpointer" onClick={registernavigation}>register</a></span></p>
 </div> </div></div></>
);

// return (
// {/* <>
//   <div className="container flex-column d-flex align-items-center justify-content-center my-5 login p-5">
//     <h1>login system</h1>
//     <div className="d-flex flex-column text-center w-75 p-3 child">
// <form onSubmit={subMit}>
//     <label htmlFor="email"><h3 className='text-muted mt-2 mb-3'>Email address</h3></label>
//        <input className="form-control" onChange={getUserinfo} id="email" name='email'></input>


//        <label htmlFor="password"><h3 className='text-muted mt-2 mb-3'>password</h3></label>
//       <input className="form-control" type="password" onChange={getUserinfo} id="password" name='password'></input>
// </form>
//       <div className="d-flex align-items-center justify-content-center father">
//       //       <button type='submit' className='btn btn-outline-info mt-3'> {loading === true ? <i className="fas fa-spinner fa-spin "></i> : 'login'}</button>
//       </div>

//     {error.length > 0 ? <div className='mt-5 alert alert-danger m-1'>{error}</div> : ""}

//       <p className="m-3">don't have an account? <span><a href='/register'>sign up</a></span></p>
//     </div>
//   </div>
// </> */}


// )

}

export default Login
