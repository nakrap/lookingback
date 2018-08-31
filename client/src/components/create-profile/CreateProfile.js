import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
// import { render } from "react-dom";
// import { image } from "cloudinary-react";
// import { cloudinary } from "cloudinary-core";
// import { cloudinary } from "cloudinary";
// import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from "../../actions/profileActions";
import "./CreateProfile.css"


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      name: "",
      bio: "",
      DOB: "",
      img: "",
      twitter: "",
      facebook: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: "nakrap", upload_preset: "x2rmt9j3", tags: ["xmas"] },
      (error, result) => {
        this.setState({ img: result[0].url });
        // console.log(result[0].url);
        console.log(this.state.img);
      }
    );
  };

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      name: this.state.name,
      bio: this.state.bio,
      DOB: this.state.DOB,
      img: this.state.img,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    console.log(profileData);
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Youtube profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    return (
      <div className="create-profile cp-wrapper">
        <div className="container content-container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create a Tribute page</h1>
              <p className="lead text-center">
                Let's get some information about your loved one
              </p>

              <div className="upload">
                <button 
                  onClick={this.uploadWidget.bind(this)}
                  className="btn btn-outline-light upload-button">
                  <i class="fas fa-upload"></i>  Upload  an Image
                </button>
              </div>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="First and Last name of your loved one"
                />
                <TextFieldGroup
                  placeholder="date of birth"
                  name="DOB"
                  type="date"
                  value={this.state.DOB}
                  onChange={this.onChange}
                  error={errors.DOB}
                  info="Date of Birth"
                />
                <TextAreaFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Write some words about your loved one"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted"> (Optional)</span>
                </div>              
                <small className="d-block pb-3">* = required fields</small>

                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
