import React from "react";
import "./CommentForm.css"
import beach from "./beach.jpg"
import friends from "./friends.json"
import frame from "./square-image.png"
import CommentMetaData from "../CommentMetaData"

import { Comment, Icon } from 'semantic-ui-react'


class CommentForm extends React.Component {

  state={
    friends: friends
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal){
      return;
    }
    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }

  render(){
    return(
      <div>

        <form className="comment-form form-group" onSubmit={this.handleSubmit}>
          <div className="input-group">
            {/* <span className="input-group-addon">Name</span>
            <textarea type="text" placeholder="Your name" className="form-control" /> */}
          </div>
          <div className="input-group comment-area">          
            <img class="ui avatar image comment-avatar" src={frame}/>

            <span><textarea id="comment" type="text" placeholder="Comment" className="form-control" /></span>
          </div>
          <input type="submit" value="Post" className="ui button primary" />

        </form>
      </div>
    )
  }
}

export default CommentForm;
