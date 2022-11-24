import React from 'react'
import { Link } from 'react-router-dom'
function Element({item}) {

let x=item.id
  return (<>
 
    <div className='col-md-4 mt-5 p-2'>
    <div className="card bgcard"> <Link style={{ textDecoration: 'none' }} to={`/ItemDetails/${item.id}`}>
  <img src={item.thumbnail} className="card-img-top"></img>
  <div className="card-body ">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.short_description .split(" ")
    .splice(0, 4)
    .join(" ")}...</p>
  </div>
  <ul className="list-group list-group-flush bgcard">
    <li className="list-group-item bgcard">{item.platform}</li>  
      <li className="list-group-item bgcard">{item.developer}</li>
    <li className="list-group-item bgcard">{item.release_date}</li>

  </ul>
 </Link>
</div>

</div></>
  )
}

export default Element