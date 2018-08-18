import React from "react";
import "./TributeBottom.css"
import friends from "./friends.json"
import CommentBox from "../../components/CommentBox"
import CommentLog from "../../components/CommentLog"

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
        friends: friends
      }

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
                      <CommentBox data={commentData}/>
                      {/* <CommentLog/> */}
                    </div>
                </div>
    
    
            </div>
    
    
        </div>
    

        )
    }
}

export default TributeBottom;
