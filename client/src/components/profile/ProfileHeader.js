import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row ">
        <div className="col-md-12 ">
          <div className="card card-body text-white mb-3 profile-header">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
              <img id='profile-pic' className="rounded-circle" src={isEmpty(profile.img) ?  "//www.gravatar.com/avatar/e28f6f64608c970c663197d7fe1f5a59?s=200&r=pg&d=mm" : profile.img}/>
                {/* <img className="rounded-circle" src={profile.user.avatar} alt="" /> */}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.name}</h1>
              <p>
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a 
                  className="text-white p-2" 
                  href={profile.social.twitter}
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              )}
              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <a 
                  className="text-white p-2" 
                  href={profile.social.facebook}
                  target="_blank"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              )}
              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a 
                  className="text-white p-2" 
                  href={profile.social.youtube}
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              )}
              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a 
                  className="text-white p-2" 
                  href={profile.social.instagram}
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              )}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
