import React from 'react'

import  { useEffect } from 'react'
import {allgames} from "../FetchData"
import Element from '../element/Element';
import { useState } from 'react';
function All() {

    const [gamespl, setGamespl] = useState([])
   const [count, setcount] = useState(20)
   const [all, setAll] = useState([])
function twenty()
{
setcount(count+20)


}



   useEffect(function () {
       
    allgames(setGamespl)
          setAll(gamespl.slice(0,count))

   }, [gamespl])

    
     return (
   <>
   <div className='container mt-5'>  
   
   <div className='row justify-content-center align-items-center text-center'>
   
   {all.length>0?all.map((item,index)=><Element key={index}  item={item}/>):<i className='fas text-light reg fa-spinner fa-spin fa-4x'></i>}
   
   </div> 
   {all.length==gamespl.length?"": <button className='btn m-5 btn-primary' onClick={twenty}>load more games</button>}

   </div>
   
   
   
   </>
           
     )

}


export default All