import React from "react";
import "./Follow.css"
import Cards from "../Cards";
import friends from "./friends.json";

class Follow extends React.Component {
  state = {
    showFollowers: true,
    friends: friends
  }

  following = (e)=>{
    this.setState({
      showFollowers: true
    })
    console.log(this.state.showFollowers)
  }

  toFollow = (e)=>{
    this.setState({
      showFollowers: false
    })
    console.log(this.state.showFollowers)
  }

  render(){
    const showFollowers = this.state.showFollowers;
    return(
      <div className="ui container center aligned">
        <h1><a onClick={this.following}>Following</a> | <a onClick={this.toFollow}>People to Follow</a></h1>

        {showFollowers ? (
          <div>
            <h1>People you are Following</h1> 
            
            {this.state.friends.map(friend => (
            <Cards
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}            
            />
          ))}
          </div>   
      ) : (
        <div>
        <h1>People to Follow</h1> 
        
        {this.state.friends.map(friend => (
        <Cards
        id={friend.id}
        key={friend.id}
        // name={friend.name}
        image={friend.image}            
        />
      ))}
      </div>
        )}

      </div>

    )

  }
}


export default Follow;
