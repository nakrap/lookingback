import React from "react";
import "./TributeBottom.css"
import friends from "./friends.json"
import CommentBox from "../../components/CommentBox"
import ModalBox from "../../components/ModalBox";
import { Button, Header, Image, Modal } from 'semantic-ui-react'

var commentData = [
    { 
      author:"Shawn Spencer", 
      text:"I've heard it both ways"
    },
    { 
      author:"Burton Guster", 
      text:"You hear about Pluto? That's messed up" 
    }
  ];


class TributeBottom extends React.Component {
    state = {
        friends: friends,
        likes: 0
      }
      handleLikes = () => {
        alert('working')
        this.setState({
          likes:this.state.likes
        })
      }

    render(){
        return(
            <div>
                
            <div className="container-fluid bottomWrapper">
                <div className="container">
                    <div className="border pictureSegment ">
                    {this.state.friends.map(friend => (
                        <Modal trigger={<img className="picturePortfolio" src={friend.image}/>}>
                            <ModalBox
                                name={friend.name}
                                image={friend.image}
                                occupation={friend.occupation}
                                location={friend.location}
                                />    
                        </Modal>
                    ))}
    
                    </div>
    
                    <div className="postSegment ">
                      <CommentBox  data={commentData}/>
                    </div>
                </div>
    
    
            </div>
    
    
        </div>
    

        )
    }
}

export default TributeBottom;
