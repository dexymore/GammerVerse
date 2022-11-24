import React from 'react'
import { useParams } from 'react-router-dom'
 import { useState } from 'react'
 import { useEffect } from 'react'
import {gameSpecs} from "../FetchData"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ItemDetalis() {
  let idParam=useParams()
  const [gameDetails, setgameDetails] = useState({})


  useEffect(() => {
  
  gameSpecs(idParam.id,setgameDetails)

  }, [])
  
  return (<>
    <div className='row m-5 gy-4'>


<div className='col-md-4 mt-5 mx-2'>

<img className='mt-5 w-100' src= {gameDetails.thumbnail}></img>
<a href={gameDetails.game_url} className="btn mt-2 btn-primary px-5 " target="_blank">Play now</a>

</div>

<div className='col-md-7 mt-5'>
<div>
<h1 className='mt-4 w-75 text-warning'>{gameDetails.title}</h1>
<h3 className='mt-4 w-75 text-info'><span className='text-muted'>category:</span>{gameDetails.genre}</h3>
<p className='text-light w-75'>{gameDetails.description} </p>
<div>
{gameDetails.minimum_system_requirements!=undefined?<ul className='list-group list-group-flush'><h4 className='text-muted fw-bold'>minimum system requirments</h4>

<li className="list-group-item text-muted p-1"><p><span className="text-dark p-1">os:</span>{gameDetails.minimum_system_requirements.os}</p></li>
<li className="list-group-item text-muted p-1"><p> <span className="text-dark p-1">graphics:</span> {gameDetails.minimum_system_requirements.graphics}</p></li>
<li className="list-group-item text-muted p-1"><p> <span className="text-dark p-1">processor:</span> {gameDetails.minimum_system_requirements.processor}</p></li>
<li className="list-group-item text-muted p-1"><p> <span className="text-dark p-1">memory:</span> {gameDetails.minimum_system_requirements.memory}</p></li>
<li className="list-group-item text-muted p-1"><p> <span className="text-dark p-1">storage:</span> {gameDetails.minimum_system_requirements.storage}</p></li>




</ul>
:<h5 className='text-light'> requirments is not specified for this game</h5>}
</div>
{gameDetails.screenshots!=null||undefined?<OwlCarousel
className='owl-theme'
items={1}
autoplay

dots
loop
>
{gameDetails.screenshots.map((i)=><div className='item'>
<img src={i.image}></img>
</div>)}




</OwlCarousel>:<h5>no available screens</h5>}

</div>
</div>
    </div></>
  )
}

export default ItemDetalis