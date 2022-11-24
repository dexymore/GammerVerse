import React from 'react'
import navbarStyles from "./navbar.module.css"
import { Link } from "react-router-dom";  
import { useState } from 'react';
import logo from "../assets/logo.png"

//the navbar receive two parameters one is responsible for check wether the user is logged in or not and other to log out
// dropdown menu is used with linktags instead of  normal a tags to navigate user to his desired page
function Navbar({userdata ,logout}) {

  const [name, setname] = useState("")
  function getName(e)
  {
  setname(e.target.name)
  console.log (name)
  }
return(<>
<nav className="navbar overflowX-hidden navbar-expand-lg navbar-light " id={navbarStyles.navbarcolor}>
  <div className="container row">
  <div className='col-4 offset-2'>
  <div className='row'></div>

  <Link className="nav-link active"  to="Home" ><img src={logo} className="w-25"></img> GAMMING SPOT</Link>   
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
 
    <div className="collapse navbar-collapse col-4 offset-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
         {userdata? <>
          <li className="nav-item">
          <Link className="nav-link active"  to="All">all</Link>
        </li>
          <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
            platform
          </Link>
          <ul class="dropdown-menu">
            <li><Link onClick={getName} class="dropdown-item text-dark" name="pc" to="pc">pc</Link></li>
            <li><Link onClick={getName} class="dropdown-item text-dark" name="browser" to="browser">browser</Link></li>
         
           
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
            category
          </Link>
          <ul class="dropdown-menu">
            <li><Link  class="dropdown-item text-dark"  to="shooter">shooter</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="racing">racing</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="sports">sports</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="social">social</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="open-world">open-world</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="zombie">zombie</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="fantasy">fantasy</Link></li>
            <li><Link  class="dropdown-item text-dark"  to="action-rpg">action-rpg</Link></li>
           
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
            sortby
          </Link>
          <ul class="dropdown-menu">
            <li><Link  class="dropdown-item text-dark" to="relevance">relevance</Link></li>
            <li><Link  class="dropdown-item text-dark" to="alphabetical">alphabetical</Link></li>
            <li><Link  class="dropdown-item text-dark" to="popularity">popularity</Link></li>
            <li><Link  class="dropdown-item text-dark" to="release-date">release-date</Link></li>
         
           
          </ul>
        </li>
        
        <li className="nav-item">
          <a className=" btn btn-danger"  onClick={logout}>log out</a>
        </li>
        
        </>: <><li className="nav-item">
          <Link className="nav-link active"  to="Register">register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="Login">login</Link>
        </li></>}
      
       
     </ul>
    </div>
  </div>
</nav>

</>);
}

export default Navbar