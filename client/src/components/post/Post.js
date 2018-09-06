import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import PostItem from '../posts/PostItem';
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import {
  getPost,
  deletePost,
  addLikePost,
  removeLikePost
} from "../../actions/postActions";
import "./Comment.css";
import classnames from "classnames";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLikePost(id, this.props.post.post._id);
  }

  onUnlikeClick(id) {
    this.props.removeLikePost(id, this.props.post.post._id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    const { auth } = this.props;
    let ShowActions = true;

    if (!auth.user.id) {
      ShowActions = false;
    }

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          {/* <PostItem post={post} showActions={false} /> */}
          <div id="post-items" className="card card-body mb-3 ">
            <div className="row">
              <div className="col-md-2">
                <img
                  className="rounded-circle d-none d-md-block"
                  src={post.avatar}
                  alt=""
                />
                <br />
                <p className="text-center">{post.name}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{post.text}</p>
                {ShowActions ? (
                  <span>
                    <button
                      onClick={this.onLikeClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i
                        className={classnames("fas fa-thumbs-up", {
                          "text-info": this.findUserLike(post.likes)
                        })}
                      />
                      <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                    </button>
                    <button
                      onClick={this.onUnlikeClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i className="text-secondary fas fa-thumbs-down" />
                    </button>
                    {/* <Link 
              to={`/post/${post._id}`} 
              className="btn btn-info mr-1">
              View Post
            </Link> */}
                    {post.user === auth.user.id ? (
                      <button
                        onClick={this.onDeleteClick.bind(this, post._id)}
                        type="button"
                        className="btn btn-danger mr-1"
                      >
                        <i className="fas fa-times" />
                      </button>
                    ) : null}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container content-container">
          <div className="row">
            <div className="col-md-12">
              <Link
                to={`/profile/${post.profile}`}
                className="btn btn-light mb-3"
              >
                Back to Tribute
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLikePost: PropTypes.func.isRequired,
  removeLikePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost, deletePost, addLikePost, removeLikePost }
)(Post);
