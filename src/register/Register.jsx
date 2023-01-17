import axios from 'axios' //used for dealing with apis
import React from 'react'
import { useState } from 'react'
import Joi from 'joi' //used for validation
import { Navigate, useNavigate } from 'react-router-dom' //used for programmtic routing
import reg from "../assets/reg.png"
function Register() {
let [userinfo,setUserInfo]=useState({

    first_name:"",
    last_name:"",
    password:"",
    age:"",
    email:"",
//this is th eobject that will be sent to the data base
})
let vlaidtion =function ()
{
let schema =Joi.object({
  first_name:Joi.string().min(3).max(35).required(),
  last_name:Joi.string().min(3).max(35).required(),
  email:Joi.string().email({ tlds: { allow: false } }).required(),
  password:Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/).required(),
  age:Joi.number().min(15).max(130).required(),
//validting objeect props note that joi object must be weritten with the same props of the main object that will be sent to the database
})
return schema.validate(userinfo,{abortEarly:false}); //return the validtion result
}
const [erorList, seterorList] = useState([])// the array that contains erors from validtion
const [loading,isloading]=useState(false)//responsible to loading status
const [error,setErorr]=useState("") //responsible for database erorrs
let navigate=useNavigate();
function changeinfo(e)
{
let userbacks={...userinfo} //deep coping the main object
userbacks[e.target.name]=e.target.value //getting the valus from the inputs feilds and passing it the copied object
setUserInfo(userbacks) // passing copied object data to main object

///////////////////save user info////////////////////

}
async function  sendToApi()
// 
// 
//
{
let{data}=await axios.post('https://route-movies-api.vercel.app/signup',userinfo)/// calling the api and deliver the main object to it
if(data.message=='success'){

    isloading(false) ////if there is no erors then reset loading spinner
    navigate('/Login')//and also navigate user to login page
}
else{
  setErorr(data.message) // if there exist erors passing them to the erorr status
  isloading(false) // and also reset loading spinner
}

}


function submitdata(e)
{   
     isloading(true)    // on submitting change statue of loading spinner to true
    e.preventDefault() // this function is built in function to pervent the default behaviour of th
    let valid=vlaidtion()// getting the validtion results and storing at valid object
 
    if(valid.error)
{
  
  seterorList(valid.error.details) // if ther exist erors store them at erorr list
  isloading(false)  // rset loading button
}
else
sendToApi() //if all goooooood 😜 send data to api
}



  return (
<div className='reg'>
<div className='container mt-5 border-light'>
<div className='row mt-5 border '>
<div className='col-md-6  mt-2 mb-3'><img className='mt-5 rounded w-100' src={reg}></img></div>


<div className='col-md-6 mt-2 mb-3'>

<div className='mt-5'>

{error.length>0?<div className='alert alert-danger m-1'>{error}</div>:""}
<small  className="mt-5 form-text text-muted"> Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.</small>
    <form onSubmit={submitdata}>
  <div className="form-group">
    <label for="first_name" className=' mt-2 mb-3 text-light'><h5>first name</h5></label>
    <input className="form-control" onChange={changeinfo} id="first_name" name='first_name' ></input>
    <small className="form-text text-muted"> {erorList.filter((err)=>err.context.label=="first_name")[0]?.message}</small>
  </div>
  <div className="form-group">
    <label for="last_name " className=' mt-2 mb-3 text-light'><h5>last name</h5></label>
    <input className="form-control" id="last_name" onChange={changeinfo} name='last_name' ></input>
    <small className="form-text text-muted"> {erorList.filter((err)=>err.context.label=="last_name")[0]?.message}</small>
  </div>
  <div className="form-group">
    <label for="email" className=' mt-2 mb-3 text-light'><h5>Email address</h5></label>
    <input className="form-control" type="email" onChange={changeinfo} id="email" name='email' ></input>
    <small className="form-text text-muted"> {erorList.filter((err)=>err.context.label=="email")[0]?.message}</small>
  </div>
 
  <div className="form-group">
    <label for="age " className=' mt-2 mb-3 text-light'><h5>age</h5></label>
    <input className="form-control" onChange={changeinfo} id="age" name='age' ></input>
    <small className="form-text text-muted"> {erorList.filter((err)=>err.context.label=="age")[0]?.message } </small> 
  </div>

  <div className="form-group">
    <label for="password" className=' mt-2 mb-3 text-light'><h5>password</h5></label>
    <input className="form-control" type="password" onChange={changeinfo} id="password" name='password' ></input>
    <small className="form-text text-muted"> {erorList.filter((err)=>err.context.label=="password")[0]?"password invlaid":""}</small>
  </div>
<button type='submit' className='btn btn-outline-info mt-5'> {loading==true?<i className="fas fa-spinner fa-spin "></i>:'register'}</button>

</form>
    
    </div>

</div>



</div>
    


</div>

    
    </div>
  )
}

export default Register