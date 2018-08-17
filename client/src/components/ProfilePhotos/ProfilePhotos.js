import React from "react";
import "./ProfilePhotos.css"
import friends from "./friends.json"
import Comment from "../../components/Comment"

class ProfilePhotos extends React.Component {
    state = {
        friends: friends
      }

        // let friends = this.state.friends;
    handleClick() {
        alert('hello')
        }
          
    render(){
        return(
            <div>
                
            <div className="container-fluid bottomWrapper">
                <div className="container">
                    <div className="border pictureSegment ">
                        {this.state.friends.map(friend => (
                            <img className="picturePortfolio" onClick={this.handleClick} src={friend.image}/>
                        ))}
            
    
                    </div>
    
                    <div className="postSegment ">

                      <Comment/>

                    {this.state.friends.map(friend => (
                        <div class="ui segments">
                            <div class="ui segment">
                                <p>{friend.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
    
    
            </div>
    
    
        </div>
    

        )
    }
}

export default ProfilePhotos;
