
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login({saveData}) {

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
    let{data}=await axios.post('https://route-movies-api.vercel.app/signin',userinfo)/// calling the api and deliver the main object to it
    if(data.message=='success'){
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
  return (
<>
<div className='container padsT  mt-5'>
{error.length>0?<div className='mt-5 alert alert-danger m-1'>{error}</div>:""}
    <form onSubmit={subMit}>
    <div className="form-group mt-5">
    <label for="email"><h3 className='text-muted mt-2 mb-3'>Email address</h3></label>
    <input className="form-control" onChange={getUserinfo} id="email" name='email' ></input>
   
  </div>
  <div className="form-group mt-2 ">
    <label for="password"><h3 className='text-muted mt-2 mb-3'>password</h3></label>
    <input className="form-control" type="password" onChange={getUserinfo} id="password" name='password' ></input>
    
  </div>
  <button type='submit' className='btn btn-outline-info mt-3'> {loading==true?<i className="fas fa-spinner fa-spin "></i>:'login'}</button>

    </form>
    <p className='text-light mt-2 w-100'>don't you have an acount? <span>  <a className="nav-link active text-muted cursorpointer" onClick={registernavigation}>register</a></span></p>
</div>

</>
  )
}

export default Login