import React from 'react'
import  { useEffect } from 'react'
import {getGames} from "../FetchData"
import Element from '../element/Element';
import { useState } from 'react';
function Plat({platform}) {
// plat function acceept one parameter whichn is platform name the function get that parameter from app compnent and then pass it to x

 const x={platform}
    const [gamespl, setGamespl] = useState([])
   
    const [count, setcount] = useState(20)
    const [all, setAll] = useState([])
 function twenty()
 {
 setcount(count+20) // this function is use to increase the count by 20 which means that the all  array will get one more twenty items
 
 
 }


   useEffect(function () {
       
/// the getgames function getting two parameters which are platform name and the next parameter is setting games array function to put the data into 
    getGames(x.platform,setGamespl)
        setAll(gamespl.slice(0,count)) /// then passing the first twenty elements to all array which letter will be shown to user as the real data
   }, [gamespl]) /// updating the render whenever the gamespl array is changed
   
    
     return (
   <>
   <div className='container mt-5 '>  
   
   <div className='row justify-content-center align-items-center text-center'>
   
   {all.length>0?all.map((item,index)=><Element key={index}  item={item}/>):<i className='fas text-light reg fa-spinner fa-spin fa-4x'></i>}
   </div> 
   {all.length==gamespl.length?"": <button className='btn m-5 btn-primary' onClick={twenty}>load more games</button>}
   </div>
   
   
   
   </>
           
     )
  
}

export default Plat