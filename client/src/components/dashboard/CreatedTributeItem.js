import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class CreatedTributeItem extends Component {
  render() {
    const { createdTributes } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
          <img src={`${createdTributes.img}`} className="rounded-circle"/>
            <img src={isEmpty(createdTributes.img) ?  "//www.gravatar.com/avatar/e28f6f64608c970c663197d7fe1f5a59?s=200&r=pg&d=mm" : createdTributes.img}/>
            {/* <img src={profile.avatar} className="rounded-circle"/> */}

          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{createdTributes.name}</h3>
            <p>
              {isEmpty(createdTributes.DOB) ? null : (<span>{createdTributes.DOB}</span>)}
            </p>
            <Link to={`/profile/${createdTributes._id}`} className="btn btn-info">
              View Created Tributes
            </Link>
            <Link to={`/edit-profile/${createdTributes._id}`} className="btn btn-warning">
              Edit Created Tributes
            </Link>            
          </div>
        </div>
      </div>

    )
  }
}

CreatedTributeItem.propTypes = {
  createdTributes: PropTypes.object.isRequired
}

export default CreatedTributeItem;
