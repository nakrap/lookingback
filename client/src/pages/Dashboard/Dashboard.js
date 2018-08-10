import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import PictureBanner from "../../components/PictureBanner";
import Welcome from "../../components/Welcome";
import Follow from "../../components/Follow";
import banner from "./balcony.jpg"
// import friend from "./friends.json"

class Dashboard extends Component {

  render() {
    return (
     <div>
        <Nav />
          <Welcome name='Jeff' />
          <PictureBanner banner={banner}/>
          <Follow/>
      </div>
    );
  }
}

export default Dashboard;
