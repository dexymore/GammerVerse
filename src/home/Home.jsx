import React, { useEffect } from 'react'
import {sorting} from "../FetchData"
import Element from '../element/Element';
import { useState } from 'react';
import banner from "../assets/pacman.jpg"
function Home({userdata}) {
console.log()
 const [games, setGames] = useState([])
let name=userdata.first_name /// getting the user firstname to wellcoming him at the website

useEffect(function () {
    
  sorting("popularity",setGames) //getting the most popular three games from sorting data function after passin"popularity" as const parameter

}, [])

 
  return (
<>
<div className='banner mt-5 container'>
<div><img src={banner}></img></div>
<h2 className='welcome text-light'>welcome <span className='userName'>{userdata.first_name!= null? name:""}</span> at <span className='GammingSpot'>GAMMING SPOT</span></h2>
<h3 className='welcome mt-5 hospitality'> Happy Gamming !</h3>

</div>


<div className='container mt-5'>  
<div><h3 className='text-light'>these are the most popular games between our players</h3></div>
<div className='row justify-content-center align-items-center text-center'>
   
   {games.length>0?games.slice(0,3).map((item,index)=><Element key={index}  item={item}/>):<i className='fas text-light reg fa-spinner fa-spin fa-4x'></i>}
</div> 

</div>



</>
        
  )
}

export default Home