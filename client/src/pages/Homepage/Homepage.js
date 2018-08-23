import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Carousel from "../../components/Carousel";
// import Welcome from "../../components/Welcome";
// import Jumbotron from "../../components/Jumbotron";
import Steps from "../../components/Steps";
import ThreeThings from "../../components/ThreeThings"
import ParallaxComponent from "../../components/Parallax/Parallax";
class Homepage extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // };

  render() {
    return (
     <div>
        {/* <Nav style={{color: '#06DCD6', borderWidth: 0, position: this.state.scrolling ? 'fixed' : 'relative', top: 0, width: '100vw', zIndex: 1}} */}
{/* /> */}
        <ParallaxComponent/>
        {/* <div className="carousel-div">
          <Carousel/>
          </div> */}
          {/* <div className="steps-div">
          <Steps/>
          </div> */}
          {/* <div className="ThreeThings-div">
          <ThreeThings/>
          </div> */}
      </div>
    );
  }
}

export default Homepage;
