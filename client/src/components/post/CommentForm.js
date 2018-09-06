import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      warning: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors) {
      this.setState({errors: newProps.errors});
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // const { profile } = this.props.profile;
    const { user } = this.props.auth;
    const { postId } = this.props;

    if (!user.id) {
      this.setState({ warning: <p id='warning'>* you must be logged in to add a comment</p>});
      console.log(this.state.warning);
    }

    const newComment = {
      text: this.state.text,
      user: user._id,
      name: user.name,
      avatar: user.avatar
    }

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    return (
    <div className="post-form mb-3 comment-form">
      <div className="card card-info">
        <div className="card-header bg-info text-white">
          Make a comment...
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <TextAreaFieldGroup
              placeholder="Reply to post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
            />
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
            <p>{ this.state.warning }</p>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, { addComment })(CommentForm);
