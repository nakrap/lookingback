import React from "react";
import "./ModalBox.css"
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import CommentBox from "../CommentBox"

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

class ModalBox extends React.Component{

  render(){

    return(
      <div>
        {/* <Modal.Header>{this.props.name}</Modal.Header> */}
          <Modal.Content className="picture-Modal" image>
            <Image wrapped size='small' src={this.props.image} />
            <Modal.Description>
              <Header><h1>{this.props.name}</h1></Header>
              <p>{this.props.occupation}</p>
              <p>{this.props.location}</p>
              <div id="picture-comments">
                <CommentBox data={commentData}/>
              </div>
            </Modal.Description>
          </Modal.Content>
        </div>
      )
  }
}


export default ModalBox;
