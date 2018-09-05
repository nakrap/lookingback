import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
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

  onSubmit = (e) => {
    e.preventDefault();
    const { profile } = this.props.profile;
    const { user } = this.props.auth;

    if (!user.id) {
      this.setState({ warning: <p id='warning'>* you must be logged in to add a post</p>});
      console.log(this.state.warning);
    }

    const newPost = {
      text: this.state.text,
      user: user._id,
      name: user.name,
      avatar: user.avatar,
      profile: profile._id

    }

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">
          Say Something...
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <TextAreaFieldGroup
              placeholder="Create a post"
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, { addPost })(PostForm);
