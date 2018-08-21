import React from "react";
import "./Nav.css"
import Search from "../Search";

const Nav = () => (
  // <nav>
  //     <div className="ui inverted vertical center aligned segment" id="whole">
  //       <div className="ui container-fluid">
  //         <div className="ui black inverted borderless huge fluid menu">
  //           <a className="header item" href="/">LookingBack</a>
  //           <a className="active item" href= "/home">Home</a>
  //           <a className="item" href="/browse">Browse</a>
  //           <a className="item">Contact</a>
  //           <a className="item" href="/dashboard">Login</a>
  //         </div>
  //       </div>
  //   </div>

  // </nav>
  <div id="fixed top menu" class="ui top fixed menu">
  <div class="ui container navbar">
    <a class="active item">Home</a><a class="item">Work</a><a class="item">Company</a><a class="item">Careers</a>
    <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>

);

export default Nav;
