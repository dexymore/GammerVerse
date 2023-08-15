import React from 'react'
import { Link } from 'react-router-dom'
import './element.css'
function Element({item}) {

let x=item.id
return (
    <div className='col-md-4 rounded mt-5 '>
        <div className="card bgcard card-outside rounded p-2">
            <Link style={{ textDecoration: 'none' }} to={`/ItemDetails/${item.id}`}>
                <div className="image-container">
                <div className='cardimagecover'>
            
                </div>   
                 <i class="fa-solid fa-eye fa-3x icon"></i>
                    <img src={item.thumbnail} className="rounded" alt="Item Thumbnail" />
                </div>
                <div className="card-body card-title">
                    <h3 className="">{item.title}</h3>
                    <p className="">{item.short_description.split(" ").splice(0, 10).join(" ")}...</p>
                </div>
                <ul className=" d-flex flex-row text-white justify-content-between firstulcard">
                    <li className="list-group-item mb-2">{item.platform}</li>
                    {/* <li className="list-group-item ">{item.developer}</li> */}
                    <li className="list-group-item ">{item.release_date}</li>
                </ul>
                <ul className=" d-flex flex-row text-white justify-content-between secondulcard">
                    <li className="list-group-item ">{item.developer}</li>
                    </ul>
            </Link>
        </div>
    </div>
);
}

export default Element