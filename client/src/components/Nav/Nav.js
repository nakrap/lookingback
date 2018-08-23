import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  handleScroll(event) {
    console.log('the scroll things', event)
  };

  render () {
    return(
      <div id="fixed top menu" class="ui top fixed menu">
      <div class="ui container navbar" style={{}}>
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
    // <div style={{ height: '200vh' }}>
    //     <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop}!</h2>
    //   </div>
    
    )
  }


}

export default Nav;
