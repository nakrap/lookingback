import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


class Nav extends Component {
//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
// }

// componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
// }
// handleScroll(event) {
//     if (window.scrollY === 0 && this.state.scrolling === true) {
//         this.setState({scrolling: false});
//     }
//     else if (window.scrollY !== 0 && this.state.scrolling !== true) {
//         this.setState({scrolling: true});
//     }
// };
 
  render () {
    return(
      <div id="fixed top menu" class="ui top fixed menu">
      <div class="ui container navbar">
        <Link to="/home" className="nav-link nav-items">
                Home
              </Link>
              <Link to="/browse" className="nav-link nav-items">
                Browse
              </Link>
              <Link to="/create" className="nav-link nav-items">
                Create
              </Link>

        <div class="right menu">
            <Link to="/dashboard" className="nav-link nav-items">
                My Page
              </Link>
            <Link to="/login" className="nav-link nav-items">
                Login
              </Link>

              <Link to="/signup" className="nav-link nav-items">
                Sign Up
              </Link>
        </div>
      </div>
    </div>
    )
  }


}

export default Nav;
