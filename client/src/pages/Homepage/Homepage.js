import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Carousel from "../../components/Carousel";
// import Welcome from "../../components/Welcome";
// import Jumbotron from "../../components/Jumbotron";
import Steps from "../../components/Steps";

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
        <Nav />
        <div className="carousel-div">
          <Carousel/>
          </div>
          <div className="steps-div">
          <Steps/>
          </div>
      </div>
    );
  }
}

export default Homepage;
