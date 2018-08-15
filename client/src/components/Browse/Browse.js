import React, { Component } from "react";
import Cards from "../Cards";
import friends from "../Follow/friends.json";
import "./Browse.css";
class Browse extends Component {
    state = {
        friends: friends
    };
    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <Cards
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                    />
                ))}
            </div>
        );
    }

}

export default Browse;