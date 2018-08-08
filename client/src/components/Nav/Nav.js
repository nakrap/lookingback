import React from "react";
import "./Nav.css"

const Nav = () => (
  <nav>
      <div className="ui inverted vertical center aligned segment" id="whole">
        <div className="ui container-fluid">
          <div className="ui black inverted borderless huge fluid menu">
            <a className="header item">LookingBack</a>
            <a className="active item">Home</a>
            <a className="item">About</a>
            <a className="item">Contact</a>
          </div>
        </div>
    </div>

  </nav>
);

export default Nav;
