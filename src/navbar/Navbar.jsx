import React from 'react'
import navbarStyles from "./navbar.module.css"
import { Link } from "react-router-dom";  
import { useState } from 'react';
import CustomH1 from '../Logo';
import jwtDecode from "jwt-decode";
//the navbar receive two parameters one is responsible for check wether the user is logged in or not and other to log out
// dropdown menu is used with linktags instead of  normal a tags to navigate user to his desired page
function Navbar({userdata ,logout}) {
if( localStorage.getItem("userToken"))
{
  let uncodedToken = localStorage.getItem("userToken");
  let decodedToken = jwtDecode(uncodedToken);
  userdata=decodedToken;
}
  const [name, setname] = useState("")
  function getName(e)
  {
  setname(e.target.name)
  console.log (name)
  }


return (
  <>
    {userdata ? (
      <>
      <nav className="navbar overflowX-hidden navbar-expand-lg navbar-light d-flex justify-content-center fixed-top" id={navbarStyles.navbarcolor}>
        <div className="container">
          <div className='col-3 offset-1'>
            <div className='row loggedinNav'></div>
            <Link className="nav-link active" to="Home"><CustomH1 className="logo">GamerVerse</CustomH1></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse col-4 offset-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="All">all</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
                  platform
                </Link>
                <ul className="dropdown-menu">
                  <li><Link onClick={getName} className="dropdown-item text-dark" name="pc" to="pc">pc</Link></li>
                  <li><Link onClick={getName} className="dropdown-item text-dark" name="browser" to="browser">browser</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
                  category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-dark" to="shooter">shooter</Link></li>
                  <li><Link className="dropdown-item text-dark" to="racing">racing</Link></li>
                  <li><Link className="dropdown-item text-dark" to="sports">sports</Link></li>
                  <li><Link className="dropdown-item text-dark" to="social">social</Link></li>
                  <li><Link className="dropdown-item text-dark" to="open-world">open-world</Link></li>
                  <li><Link className="dropdown-item text-dark" to="zombie">zombie</Link></li>
                  <li><Link className="dropdown-item text-dark" to="fantasy">fantasy</Link></li>
                  <li><Link className="dropdown-item text-dark" to="action-rpg">action-rpg</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" to="Platforms" data-bs-toggle="dropdown" aria-expanded="false">
                  sortby
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-dark" to="relevance">relevance</Link></li>
                  <li><Link className="dropdown-item text-dark" to="alphabetical">alphabetical</Link></li>
                  <li><Link className="dropdown-item text-dark" to="popularity">popularity</Link></li>
                  <li><Link className="dropdown-item text-dark" to="release-date">release-date</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="btn btn-danger" onClick={logout}>log out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

    ) : (
      <>
      <>
      <>
      <nav className="navbar overflowX-hidden navbar-expand-lg navbar-light fixed-top" id={navbarStyles.navbarcolor}>
        <div className="container">
          <div className="row w-100 justify-content-center">
            <div className="col-12 text-center">
              <Link className="nav-link active" to="Home">
                <CustomH1 className="logo">GamerVerse</CustomH1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
    </>
    </>

    )}
  </>
);

}

export default Navbar