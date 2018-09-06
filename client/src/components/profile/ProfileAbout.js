import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // get first name
    const firstName = profile.name.trim().split(" ")[0];

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3" id="about-tribute">
            <h3 className="text-center text-info">
              {firstName}
              's bio
            </h3>
            <h6 className="text-center text-info">Birthday: {profile.DOB}</h6>
            <p id="bio-description" className="lead">
              {isEmpty(profile.bio) ? null : <span>{profile.bio}</span>}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
