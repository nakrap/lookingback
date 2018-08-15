import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import banner from "./balcony.jpg"
import ProfilePic from "../../components/ProfilePic";
// import friend from "./friends.json"

class Profile extends Component {

  render() {
    return (
     <div>
        <Nav />
        <ProfilePic/>
      </div>
    );
  }
}

export default Profile;
