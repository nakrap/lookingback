import React from "react";
import "./Footer.css"
import Search from "../Search";

const Footer = () => (
  <footer>
      <div className="ui inverted vertical center aligned segment" id="whole">
        <div className="ui container-fluid">
          <div className="ui black inverted borderless huge fluid menu">
            <a className="header item" href="/">Copyright 2018</a>
            <a className="active item" href= "/home">Contact</a>
            <a className="item" href="/browse">About</a>
            <a className="item">Something</a>
            <a className="item" href="/profile">Profile Page Access</a>
          </div>
        </div>
    </div>

  </footer>
);

export default Footer;
