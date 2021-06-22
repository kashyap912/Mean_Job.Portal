import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Home.css";



function Home() {
  return (
    <div className="Home">
      <div className="Home-left">
        <div >
          <img src='images/img.png' alt=''></img>
        </div>
        <hr></hr>
        <div>
          <img height='700' width='800' src='images/pic1.jpg' alt=''></img>
        </div>
        
      </div>




      <div className="Home-right">
        <div class='Home-pad'>
          <img height='65' width='360' src='images/pic.jpg' alt='jobs'></img>
        </div >
        <div className='container'><LoginForm /></div>
        
      </div>
    </div>
  );
}




export default Home;
