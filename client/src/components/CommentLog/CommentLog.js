import React from "react";
import "./CommentLog.css"
import beach from "./beach.jpg"
import friends from "./friends.json"
import frame from "./square-image.png"


class CommentLog extends React.Component{
  render(){
    return(
      <div className="comment-list">
        {this.props.data.map(c =>(
          <Comment author={c.author} text={c.text}/>          
        ))}
      </div>

    )
  }

}


class Comment extends React.Component{
  render(){
    return(
      <div className="commentlog-box"> 
        <img class="ui avatar image commentlog-avatar" src={frame}/>
        <span className="author">{this.props.author}</span>
        <span className="text">{this.props.text}</span>

 
      </div>
    )
  }
}


export default CommentLog;
