import React from "react";
import "./Nav.css"
import Search from "../Search";

const Nav = () => (
  <nav>
      <div className="ui inverted vertical center aligned segment" id="whole">
        <div className="ui container-fluid">
          <div className="ui black inverted borderless huge fluid menu">
            <a className="header item" href="/">LookingBack</a>
            <a className="active item" href= "/home">Home</a>
            <a className="item" href="/browse">Browse</a>
            <a className="item">Contact</a>
            <a className="item" href="/dashboard">Login</a>
            <Search/>
          </div>
        </div>
    </div>

  </nav>
);

export default Nav;
