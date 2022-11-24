import React from 'react'
import err from "../assets/a.jpg"
function Notfound() {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center text-center mt-5'>
    <div >
    <h3 className='text-light'>eror 404</h3>
    <small className='text-muted'> 
    page not found</small>
 <div className='w-100'>
    <img src={err} className="rounded"></img></div>
    </div>
    </div>
  </>)
}

export default Notfound