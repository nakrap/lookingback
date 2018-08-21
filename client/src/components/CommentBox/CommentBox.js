import React from "react";
import "./CommentBox.css"
import beach from "./beach.jpg"
import CommentForm from "../../components/CommentForm"
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


class CommentBox extends React.Component {

  state={
    data:commentData
  }

  // function to add new comments
 handleCommentSubmit = (comment) =>{
   this.props.data.unshift(comment);
   var comments = this.state.data;
   var newComments = comments.concat([comment]);
   this.setState({data: newComments});
 }

    render() {
      return(
        <div className="comment-box">
          <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
          <CommentLog data={this.props.data} />
        </div>
      )
    }
}


export default CommentBox;
