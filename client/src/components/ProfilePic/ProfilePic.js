import React from "react";
import "./ProfilePic.css"
import banner from "./beach.jpg"
// import { PromiseProvider } from "mongoose";
import kristy from "./kristy.png"
import friends from "./friends.json"


class ProfilePic extends React.Component {
    state = {
        friends: friends
      }


    render(){
        return(
            <div>
            <div className="container-fluid topWrapper">
                <div className="container">
                    <div className=" picture">
                        <img className="ui medium rounded image" src={kristy}/>
                    </div>
    
                    <div className="bio">
                        <h1 className='name'>Kristy Kristy</h1>
                        <p className='birthday'>12/25/1970</p>
                        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
                
            <div className="container-fluid bottomWrapper">
                <div className="container">
                    <div className="border pictureSegment ">
                        {this.state.friends.map(friend => (
                            <img className="picturePortfolio" src={friend.image}/>
                        ))}
            
    
                    </div>
    
                    <div className="postSegment ">
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

export default ProfilePic;
