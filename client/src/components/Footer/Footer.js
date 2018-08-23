import React from "react";
import "./Footer.css"
import Search from "../Search";
import logo from "./logo.png"


const Footer = () => (
  <footer>
    <div className="ui container-fluid footer black">
      <div className="ui container">
        <div className="ui equal width grid">
          <div className="column left-column">
            {/* <img id="logo" alt='logo' src={logo}/> */}
              LookingBack
              <p  id='footer-text'>A way to memorialize your loved ones</p>
              <p>Created with the sole purpose of preserving forever lasting memories</p>

          
          </div>
          <div className="column mid-column">
            Contributors
            <p id='footer-text'>
               <a href="https://github.com/scottgall">Scott Gall</a>
               <br></br>
               <a href="https://github.com/nakrap">Nick Akrup</a>
               <br></br>
               <a href="https://github.com/JeffVongkoth">Jeff Vongkoth</a>
               <br></br>
               <a href="https://github.com/zankokou">Ken Huynh</a>
               </p>
          </div>
          <div className="column right-column">Check Out the Code
          <p id="footer-text">
          <a  href="https://github.com/nakrap/lookingback">GitHub</a>
          </p>
          
          </div>
       </div>
      </div>
    </div>

    <div className="ui container-fluid footer white">
      <h4 className="white-footer text">All Rights Reserved</h4>
      <p className="description">Made with React</p>

    </div>

  </footer>
);

export default Footer;
