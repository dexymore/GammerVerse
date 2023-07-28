import React from 'react'

import  { useEffect } from 'react'
// import {sorting} from "../FetchData"

import axios from 'axios'
import Element from '../element/Element';
import { useState } from 'react';
function Sort({sortBy}) {
    const [count, setcount] = useState(20)
    const [all, setAll] = useState([])
    function twenty()
    {
    setcount(count+20)
    
    
    }
    
    

    let sortdata = async function (param)
{
  const options = {
   
    params: {'sort-by': `${param}`},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',options)

setAll(data)

}
   
   
   useEffect(function () {
       
    sortdata(sortBy)
         
    

   
   }, [sortBy])
   
    
     return (
   <>
   <div className='container mt-5'>  
   
   <div className='row justify-content-center align-items-center text-center'>
   
   {all.length>0?all.map((item,index)=><Element key={index}  item={item}/>):<i className='fas text-light reg fa-spinner fa-spin fa-4x'></i>}
   </div> 
   {all.length>1 ? <button className="m-3 btn w-25 btn-primary" onClick={twenty}>more </button>:""}

   </div>
   
   
   
   </>
           
     )

}

export default Sort