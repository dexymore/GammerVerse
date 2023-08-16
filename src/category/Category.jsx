import React from 'react'
import  { useEffect } from 'react'
// import {getGamesByCategory} from "../FetchData"
import axios from 'axios'
import Element from '../element/Element';
import { useState } from 'react';

import SkelatonCards from '../element/SkelatonCards';

function Category({category}) {


   const [count, setcount] = useState(20)
   const [all, setAll] = useState([])
function twenty()
{
setcount(count+20)


}




let setDataCategory= async function(param){
   const options = {
    
     params: {category: `${param}`},
     headers: {
       'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
     }
   };
 
 

 
 

 
 const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',options)
 
 setAll(data)
 
 }
      
      
      useEffect(function () {
          
         setDataCategory(category)
            
         
      
      }, [category])
      
       
        return (
      <>
      <div className='container mt-5'>  
      
      <div className='row justify-content-center align-items-center text-center'>
   
   {all.length>0?all.slice(0,count).map((item,index)=><Element key={index}  item={item}/>):Array.from({ length: 20 }).map((_, index) => <SkelatonCards key={index} numberOfCards={1} />)}
      </div> 
     
      {all.length>1 ? <button className="m-3 btn w-25 btn-primary" onClick={twenty}>more </button>:""}
      </div>
       
      
      
      </>
              
        )
     
}

export default Category