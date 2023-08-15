import React from 'react'
import err from "../assets/a.jpg"
function Notfound({type}) {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center text-center mt-5 notfound'>
    <div >
    <h3 className='text-light'>eror 404</h3>
    <h4 className='text-muted'> 
    {type}</h4>
 <div className='w-100'>
    <img src={err} className="rounded"></img></div>
    </div>
    </div>
  </>)
}

export default Notfound