import React from "react";
import Particle from "../particesBackground/particesBackground";

function Landing() {
  return (
    <>
    
      <div className="backg">
        <div className="layout"> 
       
          <div class="container d-flex align-items-center h-100  ">
            <div class="hero m-auto text-center">
            <Particle />
              <h1>Welcome at gaming spot</h1>
              <h4 className="">register now and start gaming for free</h4>
              <div className="d-flex justify-content-center">
                <a href="/login" className="btn btn-primary custom-btn " role="button">
                  Login
                </a>
                <div className="btn-space"></div>
                <a href="/register" className="btn btn-primary custom-btn" role="button">
                  Register
                </a>  
             
              </div>
            </div>
          </div>
        </div>  
          
      </div>  
 
    </>
  );
}

export default Landing;

