import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


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
    <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/browse" className="nav-link">
            browse
          </Link>
          <Link to="/home" className="nav-link">
            Home
          </Link>
    <div class="right menu">
    <Link to="/dashboard" className="nav-link">
            login
          </Link>
          <Link to="/home" className="nav-link">
            register
          </Link>
    </div>
  </div>
</div>

);

export default Nav;
