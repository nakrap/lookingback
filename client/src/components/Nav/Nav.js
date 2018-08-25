import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./lookBackLogo600x600.png";


class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isTop: true
      background: "transparent",
      color: "white"
    };
    // this.onScroll = this.onScroll.bind(this);
  }
  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({background: 'white', color: "black"})
    } else {
      this.setState({background: 'transparent', color: "white"})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }



  // onScroll(isTop) {
  //   this.setState({ isTop });
  // }

  // handleScroll(event) {
  //   console.log('the scroll things', event)
  // };

  render () {
    return(
      <div id="fixed top menu" className="ui top fixed menu" style={{transition:"all 0.3s", webkitTransition:"all 0.3s", background: this.state.background}}>
      <div id="navbar" className="ui container navbar">
        <Link to="/home" className="nav-link nav-items" style={{color:this.state.color}}>
                Home
              </Link>
              <Link to="/browse" className="nav-link nav-items"  style={{color:this.state.color}}>
                Browse
              </Link>
              <Link to="/create" className="nav-link nav-items"  style={{color:this.state.color}}>
                Create
              </Link>

        <div className="right menu"  style={{color:this.state.color}}>
            <Link to="/dashboard" className="nav-link nav-items"  style={{color:this.state.color}}>
                My Page
              </Link>
            <Link to="/login" className="nav-link nav-items"  style={{color:this.state.color}}>
                Login
              </Link>

              <Link to="/signup" className="nav-link nav-items"  style={{color:this.state.color}}>
                Sign Up
              </Link>
        </div>
      </div>
    </div>
    // <div style={{ height: '200vh' }}>
    //     <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>
    //   </div>
    
    )
  }


}

export default Nav;
