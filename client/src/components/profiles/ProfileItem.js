import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import { connect } from 'react-redux';


class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const { user } = this.props.auth;

    let editLink;

    if (profile.createdBy._id === user.id) {
      editLink = (
        <span>
        <Link to={`/edit-profile/${profile._id}`} className="btn btn-outline-warning">Edit Tribute <i class="fas fa-edit"></i> </Link><p> </p></span>
      )
    }

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={isEmpty(profile.img) ?  "//www.gravatar.com/avatar/e28f6f64608c970c663197d7fe1f5a59?s=200&r=pg&d=mm" : profile.avatar}/>
            {/* <img src={profile.avatar} className="rounded-circle"/> */}
          </div>
          <div className="col-lg-5 col-md-4 col-8">
            <h3>{profile.name}</h3>
            <p>
              {isEmpty(profile.DOB) ? null : (<span>{profile.DOB}</span>)}
            </p>
            <Link  to={`/profile/${profile._id}`} className="btn btn-outline-dark view-tribute">
              View Tribute
            </Link>
            { editLink }
          </div>
            <div className="col-4">

              <div id="profile-bio">
                <span >{profile.bio}</span>
              </div>
            </div>
        </div>
      </div>

    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ProfileItem);
