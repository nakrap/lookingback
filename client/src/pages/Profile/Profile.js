import React, { Component } from "react";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import banner from "./balcony.jpg"
import ProfilePic from "../../components/ProfilePic";
import ProfilePhotos from "../../components/ProfilePhotos";
// import ProfilePosts from "../../components/ProfilePosts";


import friends from "./friends.json"

class Profile extends Component {

  state = {
    friends: friends
  }

    // let friends = this.state.friends;
    handleClick() {
      console.log('Click happened');
    }
    
  render() {
      return (
     <div>
        <Nav />
        <ProfilePic 
          name={this.state.friends[0].name}
          image={this.state.friends[0].image}
          birthday="12/12/2017"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <ProfilePhotos/>
      </div>
    );
  }
}

export default Profile;
