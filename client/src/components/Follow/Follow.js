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
        <h1><span onClick={this.following}>My Tribute Pages</span> | <span onClick={this.toFollow}>My Contributions</span></h1>

        {showFollowers ? (
          <div>
            <h1>Tributes Created By You</h1> 
            
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
        <h1>Tributes You've Added To </h1> 
        
        {this.state.friends.map(friend => (
        <Cards
        id={friend.id}
        key={friend.id}
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
