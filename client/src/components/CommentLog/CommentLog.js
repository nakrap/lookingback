import React from "react";
import "./CommentLog.css"
import beach from "./beach.jpg"
import friends from "./friends.json"
import frame from "./square-image.png"
import { Comment, Icon } from 'semantic-ui-react'


class CommentLog extends React.Component{
  state= {
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
      <div className="comment-list">
        {this.props.data.map(c =>(
          <Comment1 author={c.author} text={c.text}/>          
        ))}
      </div>

    )
  }

}


class Comment1 extends React.Component{
  render(){
    return(
      <Comment id="commentlog-box">   
        <Comment.Group>
          <Comment id="comment-content"> 
            <Comment.Avatar id="comment-avatar" as='a' src={frame} />
            <Comment.Content>
              <Comment.Author>{this.props.author}</Comment.Author>

              <Comment.Text>
               {this.props.text}
              </Comment.Text>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div onClick={this.handleLikes}> 
                  <Icon name='heart' />
                  <div>  Likes</div>
                </div>
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>
      
    )
  }
}


export default CommentLog;
